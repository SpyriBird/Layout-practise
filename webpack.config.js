const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        open: true,
        port: 4200,
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            minify: false,
            template: 'index.pug'
        }),
        new HtmlWebpackPugPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    // options: {
                    //     hmr: true,
                    //     reloadAll: true
                    // }
                }, 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|ttf|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader'
                ]
            }
        ]
    }
}