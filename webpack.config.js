/**
 * Created by KJ on 2016/3/10.
 */

var WebpackCfg = require('./webpack.common.config.js');

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var config = {
    devtool:'source-map',
    entry: {
        "index":[
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/dev-server',
            'babel-polyfill',//增加Generator函数支持
            './src/index.jsx'
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname+"/dist",
        filename: "[name].bundle.js",
        publicPath: "http://localhost:8080/"
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename:'index.html',
          template:'./src/index.jade',//index.html
          title:'React Demo',
          chunks: ['index']//指定要加入的entry实例
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new BrowserSyncPlugin(
            // BrowserSync options
            {
                host: 'localhost',
                port: 3000,
                proxy: 'http://localhost:8080/'
            },
            // plugins options
            {
                //取消重载，由webpack-dev-server 来实现热替换
                reload: false
            }
        ),
       new webpack.HotModuleReplacementPlugin()
    ]
};

Object.assign(WebpackCfg,config);

module.exports = WebpackCfg;
