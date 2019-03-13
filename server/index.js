let express = require( "express" );
let morgan = require( "morgan" );
let cookie = require( "cookie-parser" );
let session = require( "cookie-session" );
let bodyParser = require( "body-parser" );
let compression = require( "compression" );
let app = express();
const webpack = require( "webpack" );
const WebpackDev = require( "webpack-dev-middleware" );
let webpackConfig = require( "../webpack.config.js" );
let webpackCompiler = webpack( webpackConfig );
const path = require( "path" );
const root = path.normalize( process.cwd() );
const staticRoot = path.normalize( `${ root }/public` );
const routeRoot = path.normalize( `${ root }/route` );
const viewRoot = path.normalize( `${ root }/src` );
app.set( "view engine", "jsx" );
app.use( "/", require( `${ routeRoot }/index` ) );

let webpackDev = WebpackDev( webpackCompiler, {
  root,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 500,
    poll: false
  },
  stats: {
    colors: true,
    modules: false,
    entrypoints: false
  }
} );
app.use( webpackDev );
app.use( compression() );
app.set( "views", viewRoot );
app.engine(
  "jsx",
  require( "express-react-views" ).createEngine( {
    beautify: true,
    babel: {
      plugins: [
        [
          "@babel/plugin-proposal-decorators",
          { loose: true, legacy: true }
        ],
        [
          "@babel/plugin-proposal-class-properties",
          { loose: true }
        ],
        [
          "@babel/plugin-transform-flow-strip-types",
          { loose: true }
        ]
      ]
    }
  } )
);

app.use( bodyParser.json() );
app.use(
  bodyParser.urlencoded( {
    extended: false
  } )
);
app.use( cookie() );
// app.locals.__version__ = '__version__';
app.use(
  session( {
    name: "session",
    keys: [ 'KEY' ],
    maxAge: 7 * 24 * 60 * 60 * 1000
  } )
);
app.use( morgan( "dev" ) );

app.use(
  express.static( staticRoot, {
    index: "index.html"
  } )
);
app.use( ( req, res, next ) => {
  let err = new Error( "Not Found" );
  err.status = 404;
  next( err );
} );
app.use( ( err, req, res, next ) => {
  console.log( "ERROR:", err );
  let status = String( err.status || 500 );
  next &&
    res.status( status ).render( status, {
      message: err.message,
      error: err
    } );
} );

let debug = require( "debug" )( "test" );
let port = Number( process.env.PORT ) || 80;

app.set( "port", port );
let server = app.listen( app.get( "port" ), function() {
  debug( "Express server listening on port " + server.address().port );
} );
