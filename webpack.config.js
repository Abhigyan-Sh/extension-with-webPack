const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        // can introduce multiple entry points
        popup: './src/popup.jsx',
        // background: './src/background.jsx'
    }, 
    output: {
        path: path.resolve(__dirname, 'build'), // gets location of what to take in as output
        filename: '[name].js', // whatever filename is there in with entrance will get copied but extension will be js
    },
    /* loaders will help to convert jsx to js since webpack can't understand our jsx code
    loader will be executed with any file that has extension .js or .jsx
    files which need to be excluded 
    babel is a tool which is used to understand react code and transpile it 
    into plane javascript code */
    module: {
        rules: [{ 
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                }
            }
        }],
    },
    // so that our build contains our popup.html file.
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/popup.html',
            filename: 'popup.html',
        }), 
        // below plugin is used to copy the contents within a folder to our final build
        new CopyPlugin({
            patterns: [
              { from: "public" },
            ],
        }),
    ],
}