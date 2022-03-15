const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Autoprefixer = require('autoprefixer');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, options) => {

    const PATHS = {
        src: path.join(__dirname, './src'),
        dist: path.join(__dirname, './dist'),
    };

    const PAGES_DIR = `${PATHS.src}/pug/pages/`;
    const production = options.mode === 'production';
    const publicDir = production ? 'https://muromtsev.github.io/toxin/' : '/';

    return {
        entry: {
            app: `${PATHS.src}/js`,
        },
        devtool: production ? false : 'eval-sourcemap',
        devServer: {
            overlay: {
                warnings: true,
                errors: true,
            },
            watchOptions: {
                ignored: /node_modules/,
            },
        },
        output: {
            filename: 'js/[name].[hash].js',
            path: PATHS.dist,
            publicPath: publicDir,
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true,
                    },
                },
            },
        },
        module: {
            rules: [{
                    test: /\.pug$/,
                    loader: 'pug-loader',
                },{
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: '/node_modules/',
                },{
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        {loader: MiniCssExtractPlugin.loader},
                        {loader: 'css-loader'},
                        {loader: 'sass-loader'},
                        {loader: 'sass-resources-loader',
                            options: {
                                resources: `${PATHS.src}/sass/_var.scss`,
                            },
                        },
                        // {
                        //     loader: 'webpack-px-to-rem',
                        //     query: {
                        //         // 1rem=npx default 10
                        //         basePx: 14,
                        //         min: 1,
                        //         floatWidth: 3,
                        //     },
                        // },
                    ],
                },{
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    exclude: [/pug/, /img/],
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: './fonts/[name].[ext]',
                            publicPath: '../',
                        }
                    }
                },{
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader',
                    exclude: [/fonts/],
                    options: {
                        name: './img/[name].[ext]',
                        publicPath: '../',
                    },
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.scss'],            
        },
        plugins: [
            Autoprefixer,
            new CleanWebpackPlugin(),
            new FaviconsWebpackPlugin({
                logo: './src/favicon.png',                
                favicons: {
                    appName: 'Toxic',
                    appDescription: 'Отель с божественными номерами.',
                    developerName: 'muromtsev',
                    icons: {
                        android: false,
                        appleIcon: false,
                        appleStartup: false,
                        coast: false,
                        yandex: false
                    }
                }
                
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[hash].css',
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jQuery',
            }),
            new HtmlWebpackPlugin({
                template: `${PAGES_DIR}/index.pug`,
                filename: 'index.html',          
            }),
            new HtmlWebpackPlugin({
                template: `${PAGES_DIR}/form-elements/form-elements.pug`,
                filename: `./form-elements.html`,
            }),
            new HtmlWebpackPlugin({
                template: `${PAGES_DIR}/color_type/color_type.pug`,
                filename: `./color_type.html`,
            }),
            new HtmlWebpackPlugin({
                template: `${PAGES_DIR}/header_footer/header_footer.pug`,
                filename: `./header_footer.html`,
            }),
            new HtmlWebpackPlugin({
                template: `${PAGES_DIR}/cards/cards.pug`,
                filename: `./cards.html`,
            }),
            new HtmlWebpackPlugin({
                template: `${PAGES_DIR}/landing-page/landing-page.pug`,
                filename: `./landing-page.html`,
            }),
            new HtmlWebpackPlugin({
                template: `${PAGES_DIR}/search-room/search-room.pug`,
                filename: `./search-room.html`,
            }),
            new HtmlWebpackPlugin({
                template: `${PAGES_DIR}/register-in/register-in.pug`,
                filename: `./register-in.html`,
            }),
            new HtmlWebpackPlugin({
                template: `${PAGES_DIR}/sign-in/sign-in.pug`,
                filename: `./sign-in.html`,
            }),
            new HtmlWebpackPlugin({
                template: `${PAGES_DIR}/room-details/room-details.pug`,
                filename: `./room-details.html`,
            }),
        ],
    };
};