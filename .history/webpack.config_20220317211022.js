var path = require('path');
module.exports = {
    mode: 'development',
    entry: [
        //"./Models/Chrome/Chrome.ts",
        /* "./Data/Elements/Compounds/lanPr/lan.tsx", */
        //"./window.ts"
        //"../../view/tabasmc/tabasmcomponent.ts"

        "Data\Elements\Compounds\Compounds\SpaceMethods\SpaceMethods.tsx"
    ],

    output: {
        path: path.resolve(__dirname, './Build'),
        filename: 'main.js',
    },
    watch: true,
    devtool: 'cheap-module-source-map',

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    watchOptions: {
        ignored: /node_modules/,
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            { test: /\.jsx$/, loader: 'jsx-loader' },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ],
    }
};