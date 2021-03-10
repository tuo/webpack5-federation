const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ["core-js/stable/promise", "./src/index.js"],
    mode: "development",
    // devtool: "source-map",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        // cacheDirectory: ".babel-cache",
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "less-loader"],
            },
        ],
    },
    plugins: [
        // new BundleAnalyzerPlugin(),

        new HtmlWebpackPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 9000,
        host: "0.0.0.0",
    },
};
