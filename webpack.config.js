const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

plugins: [
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
  new BundleAnalyzerPlugin(),
];

module.exports = {
  mode: 'development',
  entry: './index.tsx',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    historyApiFallback: true, // for routing
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new BundleAnalyzerPlugin(),
  ],
};
