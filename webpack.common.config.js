/**
 * Created by KJ on 2016/4/9.
 */
var webpack = require('webpack');
var path = require('path');
var config = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)$/, loader: "babel" , exclude: /node_modules/},
            { test: /\.jade$/, loader: "jade" },
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.less$/, loader:'style-loader!css-loader!less-loader' },
            { test: /\.json$/, loader: 'file-loader?name=./json/[name].json' },
            { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=10000' }
        ],
        preLoaders:[
            { test: /\.(js|jsx)$/, loader: "eslint", exclude: /node_modules/}
        ]
    },
    plugins: []
};

module.exports = config;