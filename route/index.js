let express = require( "express" );
let router = express.Router();

router.get( [ "*" ], function( req, res, next ) {
  if ( /.+\.(js|css|jpe?g|png|gif|svg)$/i.test( req.path ) ) return next();
  res.render( "index.jsx" );
} );

module.exports = router;
