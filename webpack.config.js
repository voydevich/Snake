const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'js/main.js',
    },
    mode: "production",
    devServer: {
        port: 3000,
        compress: false,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ExtractTextPlugin("css/main.css"),
        new WebpackNotifierPlugin()
    ],
    performance: {hints: false},
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                ],
            },
            {
                test: /\.(jpe?g|gif|png|svg|woff|ttf|eot|wav|mp3)$/,
                loader: "file-loader",
                options: {
                    name: '/[path][name].[ext]'
                }
            },
            {
                test: /\.scss|.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',

                            options: {
                                root: './',
                                minimize: true,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers: ['ie >= 8', 'last 4 version']
                                    })
                                ],

                            }
                        },
                        {
                            loader: 'sass-loader',
                        },


                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: [
                                    path.resolve(__dirname, './src/scss/entry/vars.scss'),
                                    path.resolve(__dirname, './src/scss/entry/mixins.scss'),
                                ]
                            },
                        }
                    ]
                })
            }
        ],
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: false,
                parallel: false,
                uglifyOptions: {
                    output: {
                        comments: false,
                    },
                    ecma: 6,
                    mangle: false,
                    compress: true,

                },
                sourceMap: true
            })
        ]
    }
}