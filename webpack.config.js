var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        main: './src/main.jsx',
    },
    output: {
        filename: 'main.js',
        publicPath: '/build/',
        path: path.join(__dirname, 'build/')
    },
    devtool: '#source-map',
    devServer: {
      watch:true,
      historyApiFallback: true,
      inline: true,
      host: '0.0.0.0',
      port: '3000',
      watchOptions: {
            aggregateTimeout: 300,
            poll: true
      }
    },
    module: {
         loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.jpg$/,
                loader: 'url'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=src/styles/assets/fonts/[name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
}
