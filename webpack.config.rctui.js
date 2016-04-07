/**
 * Created by KJ on 2016/3/10.
 */
var webpack = require('webpack');
var path = require('path');
var config = {
    devtool:'source-map',
    entry: {
        "index":[
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/dev-server',
            'babel-polyfill',//增加Generator函数支持
            './src_rctui/docs/src/js/app.jsx',
            './src_rctui/docs/src/less/style.less'
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname+"/dist/rctui",
        filename:'js/app.js',
    },
    externals: {'react': 'React', 'react-dom': 'ReactDOM'},
    module: {
        loaders: [
            { test: /\.(js|jsx)$/, loader: "babel" , exclude: /node_modules/},
            //{ test: /\.(js|jsx)$/, loader: "eslint", exclude: /node_modules/},
            { test: /\.jade$/, loader: "jade" },
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.less$/, loader:'style-loader!css-loader!less-loader' },
            { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=10000&name=./src_rctui/docs/images/[name].[ext]' },
            { test: /\.json$/, loader: 'file-loader?name=./json/[name].json' },
            { test: /\.(ttf|eot|woff|woff2|otf|svg)/, loader: 'file-loader?name=./src_rctui/docs/font/[name].[ext]' }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = config;
