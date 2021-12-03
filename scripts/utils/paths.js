const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../../src/index.js'),
  output: path.resolve(__dirname, '../../public'),
  src: path.resolve(__dirname, '../../src'),
  view: path.resolve(__dirname, '../../src/index.html'),
  components: path.resolve(__dirname, '../../src/components'),
  images: path.resolve(__dirname, '../../images'),
};
