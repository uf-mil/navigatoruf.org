const path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    assetModuleFilename: (pathData) => {
      const filepath = path
        .dirname(pathData.filename)
        .split("/")
        .slice(1)
        .join("/");
      return `${filepath}/[name].[hash][ext][query]`;
    },
  },
  module:{
      rules:[{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      },
      {
          test: /\.(png|jpeg|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          type: 'asset/inline',
      },
      ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins:[
      new HWP({template: path.join(__dirname,'/src/index.html')})
  ]
}
