const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { merge } = require('webpack-merge');
const chalk = require('chalk');
const devConfig = require('../dev-config');

const defaultConfig = require('./config/webpack.config');

const config = merge(defaultConfig, { mode: 'development', devtool: 'inline-source-map' });

const compiler = webpack(config);

const { port, host, proxy = {} } = devConfig;

const devServer = new WebpackDevServer(compiler, {
  hot: true,
  publicPath: '/',
  proxy,
  historyApiFallback: true,
});

console.log(chalk.hex('#008B8B')(`\n    开发服务运行${host}:${port}\n`));

devServer.listen(port, host, error => {
  if (error) {
    return console.log(error);
  }
  return null;
});
