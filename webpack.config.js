const path = require( "path" );
const root = path.resolve( __dirname );
const webpack = require( "webpack" );
let sassconfig = require( "./sass.config.js" );
let babelConfig = require( "./babel.config.js" );
module.exports = {
  mode: "development",
  context: path.normalize( root + "/src/" ),
  devtool: false,
  entry: {
    app: "app.jsx"
  },
  output: {
    path: path.normalize( root + "/dist/" ),
    // filename: "[name]_[chunkhash:8].js",
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "/"
    // libraryTarget: "umd"
    // library: 'test',
    // publicPath: '../dist/'
  },
  resolve: {
    modules: [
      path.join( root, "src" ),
      "node_modules"
    ],
    extensions: [
      ".ts",
      ".css",
      ".scss",
      ".js",
      ".jsx",
      "png",
      "jpg"
    ],
    alias: {
      // react: "react/index.js"
    }
  },
  externals: {
    // react: {
    //   amd: "react",
    //   root: "React",
    //   commonjs: "react",
    //   commonjs2: "react"
    // },
    // "react-dom": {
    //   amd: "react-dom",
    //   root: "ReactDOM",
    //   commonjs: "react-dom",
    //   commonjs2: "react-dom"
    // }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        type: "javascript/auto",
        use: [
          {
            loader: "babel-loader",
            options: babelConfig
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
            options: {
              insertAt: "bottom"
            }
          },
          {
            loader: "css-loader",
            options: {
            }
          },
          {
            loader: "sass-loader",
            options: sassconfig
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new WebpackMd5Hash()
  ],
  stats: {
    colors: true,
    chunks: false,
    modules: false,
    chunkModules: false,
    entrypoints: false
  },
  performance: false
  // performance: {
  // 	hints: "error"
  // }
};
