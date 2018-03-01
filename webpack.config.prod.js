const path = require('path');

module.exports = {
  entry: './src/scripts/cinematic.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'cinematic.min.js',
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
  mode: "production"
}