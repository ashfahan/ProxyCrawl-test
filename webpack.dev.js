const common = require("./webpack.common");

module.exports = {
  ...common,
  mode: "development",
  target: "web",
  devtool: "source-map",
  devServer: { contentBase: "./public" }
};
