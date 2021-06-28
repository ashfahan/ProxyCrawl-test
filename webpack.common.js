const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: { app: "./src/index.js" },
  output: { filename: "[name].[contenthash].bundle.js", path: path.resolve(__dirname, "dist"), clean: true },
  module: {
    rules: [
      { test: /\.html$/, exclude: /node_modules/, use: [{ loader: "html-loader" }] },
      { test: /\.js$/, exclude: /node_modules/, use: { loader: "babel-loader" } },
      { test: /\.(s[ac]|c)ss$/i, exclude: /node_modules/, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      scriptLoading: "defer",
      inject: true,
      favicon: "./public/favicon.ico",
      template: "./public/template.html"
    }),
    new MiniCssExtractPlugin(),
    new CompressionPlugin({ algorithm: "gzip" })
  ]
};
