module.exports = {
  entry: {
    flow: './app-flow.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader?compact=false"
    }],
  },
  output: {
    filename: "[name].js",
  },
};
