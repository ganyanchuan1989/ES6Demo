/**
 *  Lib 库打包配置文件
 * Created by KJ on 2016/3/10.
 */
var WebpackCfg = require('./webpack.common.config.js');
var webpack = require('webpack');
var path = require('path');
var config = {
    devtool:'source-map',
    entry: {
        "index":[
            './src_lib/src/index.jsx'
        ]
    },
    output: {
        path: __dirname+"/dist/libs",
        filename:'HelloLib.js',
        library:'HelloLib',
        libraryTarget:"umd"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ]
};

Object.assign(config,WebpackCfg);

module.exports = config;
