const path = require('path');

module.exports = {
    entry: "./src/calc-utils.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'spec')
                ],
                exclude: [
                    /node_modules/
                ],
                loader: 'ts-loader',
            },
            {
                test: /\.ts$/,
                enforce: "post",
                exclude: /node_modules/,
                loader: 'istanbul-instrumenter-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: "dist/bundle.js"
    }
};
