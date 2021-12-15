const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const path = require('path');

module.exports = {
        context: path.resolve(__dirname, 'src'),
        mode: 'development',
        entry: {
            main: './index.js'
        },
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new HTMLWebpackPlugin({
                filename: 'output.html',
                minify: false,
                template: 'index.pug'
            }),
            new HtmlWebpackPugPlugin(),
            new CleanWebpackPlugin()
        ],
        module: {
            rules: [{
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|jpg|svg|gif)$/,
                    use: ['file-loader']
                },
                {
                    test: /\.(woff|ttf)$/,
                    use: ['file-loader']
                },
                {
                    test: /\.pug$/,
                    loader: 'pug-loader'
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                ]
            }
        }