const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  watch: true,
  target: 'electron-main',
  externals: [nodeExternals({ modulesFromFile: true }), 'utf-8-validate', 'bufferutil'],
  plugins: [new CleanWebpackPlugin()],
  entry: { app: './electron-app/app.js' },
  output: {
    filename: 'app-dev.js',
    path: path.resolve(process.cwd(), './dist')
  },
  mode: 'development',
  optimization: {
    moduleIds: 'hashed',
    concatenateModules: true,
    usedExports: true
  }
};
