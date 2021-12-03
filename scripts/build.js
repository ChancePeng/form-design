const webpack = require('webpack');
const { merge } = require('webpack-merge');

const defaultConfig = require('./config/webpack.config');

const config = merge(defaultConfig, { mode: 'production' });

const compiler = webpack(config);

compiler.run();
