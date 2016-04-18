/**
 * Created by KJ on 2016/4/10.
 */
var WebpackCfg = require('./webpack.common.config.js');

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
    devtool:'source-map',
    entry: {
        "index":[
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/dev-server',
            'babel-polyfill',//增加Generator函数支持,
            './src_flux/flux-todomvc/js/app.js'
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname+"/dist/flux/todomvc/",
        filename:'app.js'
    },
    /*externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },*/
    plugins: [
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src_flux/flux-todomvc/index.jade',//index.html
            title:'Flux • TodoMVC',
            chunks: ['index']
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ]
};

Object.assign(WebpackCfg,config);

module.exports = WebpackCfg;