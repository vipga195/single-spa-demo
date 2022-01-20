const path = require('path');
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
    const defaultConfig = singleSpaDefaults({
        orgName: "medium",
        projectName: "react",
        webpackConfigEnv,
        orgPackagesAsExternal: true,
        rootDirectoryLevel: 1,
        argv,
    });

    return merge(defaultConfig, {
        // entry: './src/root.component.js',
        output: {
            ...defaultConfig.output,
            filename: 'medium-react.js',
            path: path.resolve(__dirname, 'dist', 'adsp-header'),
        },
        // modify the webpack config however you'd like to by adding to this object
        module: {
            rules: [
                {
                    test: /\.js/,
                    use: ['babel-loader?cacheDirectory'],
                    exclude: /node_modules/,
                },
            ]
        },
        mode: 'development',

        devtool: 'eval-source-map',
    });
};
