const path = require("path");

config = {
  mode: "development",
  entry: "./src/index.ts",
  // We use inline source-map to enable sub-line breakpoints,
  // if perf turns out to be a problem we can experiment less accurate and faster
  // mapping strategies.
  // Note that we only map to .js files and not to .ts files, the reasons is that
  // the debugger experience with .ts mapping does not work as expected and the
  // .js files are very close to the .ts files so they should be easy to debug.
  devtool: "inline-source-map",
  context: __dirname,
  devServer: {
    contentBase: "./dist",
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: "babel-loader", options: { presets: ["@babel/preset-typescript"], cacheDirectory: true, cacheCompression: false }}],
        exclude: /.*\/node_modules\/.*/
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
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
      B$: path.resolve(__dirname, "../B/src"),
    },
    extensions: [".ts", ".js", ".json", ".wasm", ".mjs"]
  },
};

module.exports = config;