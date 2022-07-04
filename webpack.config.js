const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: ['./src/js/index.js'],
    output: {
        path: path.resolve('public'),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@js': path.resolve(__dirname, './src/js'),
            '@scss': path.resolve(__dirname, './src/scss'),
            '@images': path.resolve(__dirname, './src/images'),
        },
    },
};
