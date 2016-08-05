var path = require('path');
var webpack = require('webpack');
var loaders = [
  { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
  {
    test: /\.css/,
    loaders: [
      'style?sourcemap', 'css/locals?modules&importLoaders=1'
    ]
  },
];

module.exports = [{
  entry: './src/ReactFilepicker.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-filepicker.js',
    libraryTarget: 'commonjs2'
  },
  devtool: 'source-map',
  module: { loaders: loaders },
  externals: ['react', 'react-dom'],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: true,
      comments: true,
      mangle: false,
      compress: {
        dead_code: true,
      },
    }),
    new webpack.ProvidePlugin({
      filepicker: 'filepicker-js',
      'window.filepicker': 'filepicker-js'
    })
  ]
}, {
  entry: './src/demo.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'demo.js'
  },
  devtool: 'source-map',
  module: { loaders: loaders },
  plugins: [
    new webpack.ProvidePlugin({
      filepicker: 'filepicker-js',
      'window.filepicker': 'filepicker-js'
    })
  ]
}];
