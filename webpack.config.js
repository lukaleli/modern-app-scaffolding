var ExtractTextPlugin = require('extract-text-webpack-plugin'),
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
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")/*"style-loader!css-loader!postcss-loader"*/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")/*"style-loader!css-loader!postcss-loader"*/
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
        })
    ],
    postcss: [precss, autoprefixer({browsers: ['> 5%']})]
};