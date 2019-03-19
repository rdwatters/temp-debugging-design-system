var path = require("path");
var webpack = require("webpack");
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: {
        app: './scripts/app.js'
    },
    module: {
        rules: [{
            test: /js\/\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, "./scripts/dist"),
        filename: '[name].min.js',
        sourceMapFilename: '[name].js.map'
    },

    resolve: {
        modules: [path.resolve(__dirname, 'scripts'), 'node_modules'],
    },

    plugins: [
        new UglifyJsPlugin({
            test: /\.js($|\?)/i,
            sourceMap: true
        })
    ],
    watchOptions: {
        ignored: /node_modules/
    }
}