const path = require("path");

const minicssextractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: { app: "./src/index.js" },
  output: { filename: "[name].bundle.js", path: path.resolve(__dirname, "dist"), clean: true },
  module: {
    rules: [
      { test: /\.html$/, use: [{ loader: "html-loader" }] },
      { test: /\.js$/, exclude: /node_modules/, use: { loader: "babel-loader" } },
      { test: /\.(s[ac]|c)ss$/i, exclude: /node_modules/, use: [minicssextractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"] }
    ]
  },
  target: "web",
  plugins: [
    new HtmlWebpackPlugin({
      scriptLoading: "defer",
      inject: true,
      favicon: "./public/favicon.ico",
      template: "./public/index.html"
    }),
    new minicssextractPlugin(),
    new CompressionPlugin({ algorithm: "gzip" })
  ],

  devtool: "source-map",
  devServer: { contentBase: "./public" }
};
