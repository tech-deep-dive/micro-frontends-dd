const { merge } = require("webpack-merge");

const dotenvWebpack = require("./plugins/dotenv-webpack");
const webpackBase = require("./webpack.base");

module.exports = merge(webpackBase, {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    port: 3001,
    open: false,
    historyApiFallback: true,
  },
  plugins: [dotenvWebpack({ path: ".env.development" })],
});
