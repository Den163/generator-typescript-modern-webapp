import { CheckerPlugin } from "awesome-typescript-loader";

import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
    entry : "./src/main.ts",
    output: {
        path: path.resolve(__dirname, "public", "js"),
        filename: "main.js"
    },
    
    resolve: {
        extensions: [ ".js", ".jsx", ".ts", ".tsx"  ]
    },

    devtool: "source-map",

    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
        ]
    },

    plugins: [
        new CheckerPlugin()
    ],

    watch: true
};

export default config;
