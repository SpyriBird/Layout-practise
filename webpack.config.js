const HTMLWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        index: [
            '/index.pug',
            '/index.js'
        ],
        'search-result': [
            '/index.js',
            '/search-result.pug'
        ],
        style: '/style.sass',
        'sign-in': [
            '/sign-in.pug',
            '/index.js'
        ],
        registration: [
            '/registration.pug',
            '/index.js'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
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
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            minify: false,
            template: 'index.pug',
            chunks: ['index']
        }),
        new HTMLWebpackPlugin({
            filename: 'sign-in.html',
            minify: false,
            template: 'sign-in.pug',
            chunks: ['sign-in']
        }),
        new HTMLWebpackPlugin({
            filename: 'search-result.html',
            minify: false,
            template: 'search-result.pug',
            chunks: ['search-result']
        }),
        new HTMLWebpackPlugin({
            filename: 'registration.html',
            minify: false,
            template: 'registration.pug',
            chunks: ['registration']
        }),
        new HtmlWebpackPugPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    module: {
        rules: [{
                test: /\.(png|svg|jpg|jpeg|gif|ttf|woff|ico)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[hash][ext][query]'
                }
            },
            {
                test: /\.js.map$/,
                use: ["source-map-loader"],
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
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