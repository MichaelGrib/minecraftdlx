const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const host = 'localhost';
const port = '7070';

module.exports = {
    mode: 'production',
    entry: [
        'webpack-dev-server/client?http://' + host + ':' + port +'/',
        './src/index.jsx',
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                }
            },
            {
                test: /\.jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                }
            },
            {
                test: /\.ts$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript'],
                    },
                }
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'cssimageassets/',
                        publicPath: 'cssimageassets/',
                        
                    }
                },
            }

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html',
        scriptLoading: 'blocking',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                    {from: path.resolve(__dirname, 'src/resourсepack'), to: path.resolve(__dirname, 'dist/resourсepack')},
                    {from: path.resolve(__dirname, 'src/images'), to: path.resolve(__dirname, 'dist/images')},
            ]
        }),
    ],
    devServer: {
        port: port,
    },
}