const path = require('path');

module.exports = {
  entry: './src/scripts/cinematic.js',
  output: {
    path: path.resolve(__dirname, 'docs/scripts'),
    filename: 'cinematic.js',
    libraryTarget: 'umd',
    library: 'cinematic'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader'
      }
    ]
  },
  mode: "development"
}