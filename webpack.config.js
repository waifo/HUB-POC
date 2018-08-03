var path = require("path");
var CopyWebpackPlugin=require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'


var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/index.tsx",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    mode:'development',
    devtool: "source-map",
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx','.js']
      },
    module: {
        rules: [
            { 
                test: /\.tsx?$/, 
                use: 'ts-loader'
            },
            // {
            //     test: /\.scss$/,
            //     use: [ 'style-loader', 'css-loader','sass-loader',{
            //         loader: 'typings-for-css-modules-loader',
            //         options: {
            //           modules: true,
            //           namedExport: true,
            //           camelCase:true
            //         }
            //       } ]
            // }
            // {
            //     test:/\.scss$/,
            //     use:ExtractTextPlugin.extract({
            //         fallback:'style-loader',
            //             use:[
            //                 {
            //                     loader:'css-loader',
            //                     options:{
            //                         modules:true,
            //                         sourceMap:true,
            //                         importLoaders:2,
            //                         localIdentName:'[name]__[local]___[hash:base64:5]'
            //                     }
            //                 },
            //                 'sass-loader'
                            
            //             ]
            //     })
            // }
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                  devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                  'css-loader',
                  'postcss-loader',
                  'sass-loader',
                ],
              }
        ],
       
    },
    plugins: [
        new CopyWebpackPlugin([
            // {output}/file.txt 
           { from: SRC_DIR+'/index.html', to: DIST_DIR+'/index.html' }
        ]),

        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
          })
    ]
};

module.exports = config;