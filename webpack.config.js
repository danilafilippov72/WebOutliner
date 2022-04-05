
var path = require('path');
var WebpackObfuscator = require('webpack-obfuscator');
const JavaScriptObfuscator = require('webpack-obfuscator');
module.exports = {
    mode: 'development',
    entry: [
        //"./Models/Chrome/Chrome.ts",
        /* "./Data/Elements/Compounds/lanPr/lan.tsx", */
        //"./window.ts"
        //"../../view/tabasmc/tabasmcomponent.ts"

        /* "./Data/Elements/Compounds/Compounds/SpaceMethods/SpaceMethods.tsx" */
        /* "./Data/Elements/Compounds/Compounds/Compounds/Compounds/Compounds/Compounds/MethodsNode/MethodsNode.tsx" */
        /* "./Data/Elements/Compounds/Compounds/Compounds/Compounds/Compounds/Compounds/Compounds/Compounds/Compounds/Compounds/Document/Document.tsx" */
        "./Data/Elements/Compounds/Compounds/Compounds/Compounds/Compounds/Compounds/Compounds/Compounds/Compounds/Compounds/Compounds/Compounds/Document/Document.tsx"
    ],

    output: {
        path: path.resolve(__dirname, './root'),
        filename: 'index.js',
    },
    watch: true,
    /* devtool: 'cheap-module-source-map', */
    devtool: false,
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    watchOptions: {
        ignored: /node_modules/,
    },
/*     plugins: [
        new WebpackObfuscator({rotateStringArray: true, reservedStrings: [ '\s*' ]}, [])
    ], */

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            /* {
                enforce: 'post',
                use: {
                    loader: WebpackObfuscator.loader,
                    options: {
                        reservedStrings: [ '\s*' ],
                        rotateStringArray: true
                    }
                }
            }, */
            /*  {
                 test: /\.s[ac]ss$/i,
                 use: [
                     // Creates `style` nodes from JS strings
                     "style-loader",
                     // Translates CSS into CommonJS
                     "css-loader",
                     // Compiles Sass to CSS
                     "sass-loader",
                 ],
             }, */
            { test: /\.jsx$/, loader: 'jsx-loader' },
           /*  {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    },
                    {
                        loader: JavaScriptObfuscator.loader
                    }
                ]

            } */

        ],
    }
};