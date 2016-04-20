
module.exports = {
  entry:  [
  	'./src/app.js'
  ],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'src/components/main.js',
      applicationStyles: 'public/styles/main.scss'
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