const path = require("path");

config = {
  mode: "development",
  entry: "./src/index.ts",
  devtool: "cheap-module-eval-source-map",
  context: __dirname,
  devServer: {
    contentBase: "./dist",
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              sourceMap: true,
              presets: ["@babel/preset-typescript"],
              cacheDirectory: true,
              cacheCompression: false
            }
          }
        ],
        exclude: /.*\/node_modules\/.*/
      }
    ]
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    alias: {
      "B/lib": path.resolve(__dirname, "../B/src"),
      "C/lib": path.resolve(__dirname, "../C/src"),
      C$: path.resolve(__dirname, "../C/src"),
      B$: path.resolve(__dirname, "../B/src")
    },
    extensions: [".ts", ".js", ".json", ".wasm", ".mjs"]
  }
};

module.exports = config;
