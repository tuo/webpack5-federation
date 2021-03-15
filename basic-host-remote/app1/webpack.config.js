const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
    entry: "./src/index",
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3001,
    },
    output: {
        publicPath: "auto",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"],
                },
            },
        ],
    },
    //http://localhost:3002/remoteEntry.js
    plugins: [
        new ModuleFederationPlugin({
            name: "app1",
            remotes: {
                app2: `app2@${getRemoteEntryUrl(3002)}`,
            },
            //shared: { react: { singleton: true }, "react-dom": { singleton: true } },
            shared: ["react", "react-dom"],
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};

function getRemoteEntryUrl(port) {
    const { CODESANDBOX_SSE, HOSTNAME } = process.env;

    if (!HOSTNAME) {
        return `//localhost:${port}/remoteEntry.js`;
    }

    return `//${HOSTNAME}/remoteEntry.js`;
}
