const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },

    devServer: {
        // historyApiFallback: true,
        port: 5000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            // Css
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' }, 
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                use: [
                    { 
                        loader: 'url-loader',
                        options:{
                            limit: 100000,
                            fallback: 'file-loader',
                            name: '[name].[hash].[ext]',
                            outputPath: 'img/',
                            useRelativePath: true
                        } 
                    }                     
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}