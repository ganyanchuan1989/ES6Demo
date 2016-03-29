/**
 * Created by KJ on 2016/3/10.
 */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
    devtool:'source-map',
    entry: {
        "index":[
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/dev-server',
            'babel-polyfill',//增加Generator函数支持
            './src/index.js'
        ],
        "Sub":[
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/dev-server',
            'babel-polyfill',//增加Generator函数支持
            './src/sub.js'
        ]
    },
    output: {
        path: __dirname+"/dist",
        filename: "build/[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "eslint-loader" },
            { test: /\.jade$/, loader: "jade-loader" },
            { test: /\.(png|jpg)$/, loader: "file" },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
            { test: /\.less$/, loader:'style-loader!css-loader!less-loader' }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          filename:'index.html',
          template:'./template/index.jade',//index.html
          title:'Jade Demo',
          chunks: ['index']
      }),
        new HtmlWebpackPlugin({
            filename:'Sub.html',
            template:'./template/Sub.jade',//index.html
            title:'Sub Demo1',
            chunks: ['Sub']
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;
