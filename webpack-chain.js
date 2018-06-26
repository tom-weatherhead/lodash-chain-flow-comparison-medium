module.exports = {
  entry: {
    chain: './app-chain.js',
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
