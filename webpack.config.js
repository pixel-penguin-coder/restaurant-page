const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

const generateHtmlPlugin = (title) => {
  return new htmlWebpackPlugin({
    title,
    filename: "index.html",
    template: `./src/index.html`,
    inject: "body",
  });
};

const populateHtmlPlugins = (pagesArray) => {
  res = [];
  pagesArray.forEach((page) => {
    res.push(generateHtmlPlugin(page));
  });
  return res;
};

const pages = populateHtmlPlugins(["Home", "Menu", "About", "Contact"]);

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  output: {
    filename: "main.js",
    // path: path.resolve(__dirname, 'dist')
    path: path.resolve(__dirname, "dist"),
  },
  plugins: pages,
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // type: "asset/resource",
        type: "asset/resource",
      },
    ],
  },
};
