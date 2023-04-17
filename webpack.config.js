const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    popup: path.resolve("./src/popup/popup.tsx"),
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx$/,
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve("src/manifest.json"), to: path.resolve("dist") },
        { from: path.resolve("src/assets/icon.png"), to: path.resolve("dist") },
      ],
    }),
    new HtmlPlugin({
      title: "Reactjs Chrome extension",
      filename: "popup.html",
      chunks: ["popup"],
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  output: {
    filename: "index.js",
  },
};
