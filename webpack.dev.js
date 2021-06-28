const common = require("./webpack.common");

module.exports = {
  ...common,
  stats: "errors-only",
  mode: "development",
  target: "web",
  devtool: "source-map",
  devServer: { contentBase: "./public", historyApiFallback: true, open: true },
};
