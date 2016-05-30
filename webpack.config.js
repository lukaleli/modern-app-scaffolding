var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    precss = require('precss'),
    autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/scripts/app.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.es6', '.css', '.scss']
    },
    moduleDirectories: ['node_modules'],
    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        }),
        new CopyWebpackPlugin([
            {
                from: "index.html",
                to: "index.html"
            }
        ]),
        new CleanWebpackPlugin(['dist'])
    ],
    postcss: [precss, autoprefixer({browsers: ['> 5%']})]
};