const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pkg = require('./package.json');

const isDebug = process.env.NODE_ENV !== 'production';

const mode = `mode: ${isDebug ? "'debug'" : "'production'"}`;
console.log(
  `\n+${'-'.repeat(mode.length + 2)}+\n| ${mode} |\n+${'-'.repeat(
    mode.length + 2
  )}+\n`
);

module.exports = {
  mode: isDebug ? 'development' : 'production',
  // Compile for usage in a browser-like environment
  // https://webpack.js.org/configuration/target/
  target: 'web',

  // Entry points for our main js file
  // https://webpack.js.org/configuration/entry-context/#entry
  entry: './_assets/entry.js',

  // How and where it should output our bundles
  // https://webpack.js.org/configuration/output/
  output: {
    path: path.resolve(__dirname, '_site/assets'),
    filename: '[name].js?[hash]'
  },

  plugins: [
    // Define free variables
    // https://webpack.js.org/plugins/define-plugin/
    new webpack.DefinePlugin({
      __DEV__: isDebug,
      __VERSION__: JSON.stringify(`${pkg.version}`),
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: isDebug ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDebug ? '[id].css' : '[id].[hash].css',
    }),

    ...(isDebug ? [] : [
      // Minimize all JavaScript output of chunks
      // https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
      new webpack.optimize.UglifyJsPlugin(),
    ]),

    // Adds a banner to the top of each generated chunk
    // https://webpack.js.org/plugins/banner-plugin/
    new webpack.BannerPlugin({
      banner: `clenemt.com ${pkg.version} - ${new Date()} - 🦆`,
    }),
  ],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      // Babel Loader
      // https://github.com/babel/babel-loader
      loader: 'babel-loader',
      query: {
        // Will be used to cache the results of the loader.
        // Future webpack builds will attempt to read from the cache.
        cacheDirectory: isDebug
      }
    }, {
      test: /\.s?[ac]ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          // CSS Loader
          // https://github.com/webpack/css-loader
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            sourceMap: isDebug,
            // CSS Nano http://cssnano.co/options/
            minimize: !isDebug
          }
        }, {
          // PostCSS Loader
          // https://github.com/postcss/postcss-loader
          loader: 'postcss-loader',
          options: {
            sourceMap: isDebug,
            plugins: [
              // Used to resolve imports
              // https://github.com/postcss/postcss-import
              postcssImport(),
              // Add vendor prefixes to CSS rules using values from caniuse.com
              // https://github.com/postcss/autoprefixer
              autoprefixer()
            ]
          }
        }, {
          // SASS Loader
          // https://github.com/webpack-contrib/sass-loader
          loader: 'sass-loader',
          options: {
            sourceMap: isDebug
          }
        }
      ],
    },{
      test: /\.(jpg|jpeg|gif|png|svg|woff|woff2)$/,
      // File loader
      // https://github.com/webpack-contrib/file-loader
      loader: 'file-loader',
      options: {
        emitFile: false,
        name: 'assets/[name].[ext]?[hash]'
      }
    }]
  },

  // Don't attempt to continue if there are any errors.
  // https://webpack.js.org/configuration/other-options/#bail
  bail: !isDebug,

  // Cache the generated webpack modules and chunks to improve build speed
  // https://webpack.js.org/configuration/other-options/#cache
  cache: isDebug,

  // Precise control of what bundle information gets displayed
  // https://webpack.js.org/configuration/stats/
  stats: isDebug ? 'normal' : 'minimal',

  // Choose a developer tool to enhance debugging
  // https://webpack.js.org/configuration/devtool/
  devtool: isDebug ? 'inline-source-map' : false,

  // These options change how modules are resolved. webpack provides reasonable defaults
  // https://webpack.js.org/configuration/resolve/
  resolve: {
    // So we can avoid `.jsx` & `.js` when importing files
    extensions: ['.js', '.jsx', '.json', '.scss'],
  },

  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  // https://webpack.github.io/docs/configuration.html#node
  // https://github.com/webpack/node-libs-browser/tree/master/mock
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};

