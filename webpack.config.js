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
        "sub":[
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/dev-server',
            'babel-polyfill',//增加Generator函数支持
            './src/sub.js'
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            'Button':path.resolve(__dirname,'src/components/Button.jsx')
        }
    },
    output: {
        path: __dirname+"/dist",
        filename: "build/[name].bundle.js"
        //publicPath: "http://127.0.0.1:8080/dist/"
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)$/, loader: "babel" , exclude: /node_modules/},
            { test: /\.(js|jsx)$/, loader: "eslint", exclude: /node_modules/},
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
            chunks: ['sub']
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;
