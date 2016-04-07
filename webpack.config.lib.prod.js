/**
 *  Lib 库打包配置文件
 * Created by KJ on 2016/3/10.
 */

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
    externals: {'react': 'React', 'react-dom': 'ReactDOM'},
    module: {
        loaders: [
            { test: /\.(js|jsx)$/, loader: "babel" , exclude: /node_modules/},
            { test: /\.(js|jsx)$/, loader: "eslint", exclude: /node_modules/},
            { test: /\.jade$/, loader: "jade" },
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.less$/, loader:'style-loader!css-loader!less-loader' },
            { test: /\.json$/, loader: 'file-loader?name=./json/[name].json' },
            { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=10000' }
        ]
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

module.exports = config;
