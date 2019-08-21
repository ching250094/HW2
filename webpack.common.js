const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './public'),
		filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [ "@babel/preset-env", "@babel/preset-react" ],
                plugins: [ "@babel/plugin-transform-runtime" ]
                }
            }
          },
          {
            test: /\.scss$/,
            use: [

              process.env.NODE_ENV !== 'production'
                ? 'style-loader'
                : MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader',
            ],
          },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: './assets/styles/style.css'
        })
    ]
}