var path = require('path');
var webpack = require('webpack');

var loaders = [
  { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
  {
    test: /\.css/,
    loaders: [
      'style?sourcemap', 'css?modules&importLoaders=1',
    ],
  },
];

module.exports = [{
  entry: './src/ReactFilepicker',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-filepicker.js',
    libraryTarget: 'commonjs2',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: { loaders },
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
    }),
  ],
}, {
  entry: './src/demo.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'demo.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: { loaders },
  plugins: [
    new webpack.ProvidePlugin({
      filepicker: 'filepicker-js',
      'window.filepicker': 'filepicker-js',
    }),
  ],
}];
