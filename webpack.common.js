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
      { test: /\.js$/, use: { loader: "babel-loader" } },
      { test: /\.(s[ac]|c)ss$/i, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"] },
      { test: /\.(png|svg|jpg|jpeg|ttf|otf)$/i, exclude: /node_modules/, use: { loader: "file-loader", options: { name: "[name].[hash].[ext]", outputPath: "assets" } } },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      scriptLoading: "defer",
      inject: true,
      favicon: "./public/favicon.ico",
      template: "./public/template.html",
    }),
    new MiniCssExtractPlugin(),
    new CompressionPlugin({ algorithm: "gzip" }),
  ],
};
