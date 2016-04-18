
module.exports = {
  entry:  [
  	'./src/app.js'
  ],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'src/components/main.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    colors: true,
    contentBase: './public',
    inline: true
  },
  devtool: 'cheap-module-eval-source-map'
};