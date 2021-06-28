const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const CssnanoPlugin = require("cssnano-webpack-plugin");

module.exports = {
  entry: { app: "./src/index.js" },
  output: { filename: "[name].[contenthash].bundle.js", path: path.resolve(__dirname, "dist"), clean: true },
  module: {
    rules: [
      { test: /\.html$/, exclude: /node_modules/, use: [{ loader: "html-loader" }] },
      { test: /\.js$/, use: { loader: "babel-loader" } },
      { test: /\.(s[ac]|c)ss$/i, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"] },
      { test: /\.(png|jpg|jpeg|ttf|otf|woff|woff2|eot|gif)$/i, use: { loader: "file-loader", options: { name: "[name].[hash].[ext]", outputPath: "assets" } } },
      { test: /\.svg$/, loader: "svg-inline-loader" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      scriptLoading: "defer",
      inject: true,
      favicon: "./public/favicon.ico",
      template: "./public/template.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new MiniCssExtractPlugin(),
    new CompressionPlugin({ algorithm: "gzip" }),
  ],
  optimization: {
    minimizer: [
      new CssnanoPlugin({
        cssnanoOptions: {
          preset: [
            "default",
            {
              discardComments: true,
              normalizeWhitespace: true,
              uniqueSelectors: true,
              rawCache: true,
              calc: true,
              colormin: true,
              convertValues: { length: false, angle: false },
              discardDuplicates: true,
              discardEmpty: true,
              discardOverridden: true,
              mergeLonghand: true,
              mergeRules: true,
              minifyGradients: true,
              minifyParams: true,
              normalizeCharset: true,
              normalizeDisplayValues: true,
              normalizePositions: true,
              normalizeString: true,
              normalizeTimingFunctions: true,
              normalizeUnicode: true,
              normalizeUrl: true,
              orderedValues: true,
              reduceTransforms: true,
              svgo: true,
              minifySelectors: false,
              minifyFontValues: false,
            },
          ],
        },
      }),
    ],
  },
};
