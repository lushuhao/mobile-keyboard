const base = require('./webpack.base.config');
const merge = require('webpack-merge');

let config = process.env.NODE_ENV === 'production'
             ? require('./webpack.prod.config')
             : require('./webpack.dev.config');

module.exports = merge(base, config);
