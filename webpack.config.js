/**
 * Created by KJ on 2016/3/10.
 */
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
            './src/index.js'
        ],
        "index_lib":[
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/dev-server',
            'babel-polyfill',//增加Generator函数支持
            './src_lib/index.jsx'
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
        //alias: {
        //    'CommentBox':path.resolve(__dirname,'src/components/CommentBox.jsx')
        //}
    },
    output: {
        path: __dirname+"/dist",
        filename: "[name].bundle.js",
        publicPath: "http://localhost:8080/"
    },
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
        new HtmlWebpackPlugin({
          filename:'index.html',
          template:'./src/index.jade',//index.html
          title:'Index',
          chunks: ['index']//指定要加入的entry实例
        }),
        new HtmlWebpackPlugin({
            filename:'libs/index.html',
            template:'./src_lib/index.jade',//index.html
            title:'Library Index',
            chunks: ['index_lib']
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
       // new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;
