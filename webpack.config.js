const path = require("path");

const webpack            = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|public\/)/,
        loader: "babel-loader"
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]), // Clean dist
    new webpack.HotModuleReplacementPlugin() // Enable HMR
  ],
  devServer: {
    hot: true, // Tell the dev-server we're using HMR
    contentBase: path.resolve(__dirname, "."),
    publicPath: "/"
  },
  devtool: "source-map"
};