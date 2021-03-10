const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    // mode: "development",
    // devtool: "source-map",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },

    module: {
        rules: [
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "less-loader"],
            },
        ],
    },
    plugins: [new BundleAnalyzerPlugin(), new HtmlWebpackPlugin()],
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 9000,
    },
};
