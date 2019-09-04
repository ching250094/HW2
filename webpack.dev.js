const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        publicPath: "/",
        contentBase: __dirname + "/public/",
        hot: true,
        port: 50000
    }
});