const CopyWebpackPlugin = require( 'copy-webpack-plugin');
const OpenBrowserPlugin = require(  'open-browser-webpack-plugin');
const HtmlWebpackPlugin = require(  'html-webpack-plugin');
const BabiliPlugin = require(  'babili-webpack-plugin');
const ExtractTextPlugin = require(  'extract-text-webpack-plugin');
const { argv } = require(  'optimist');
const path = require(  'path');

const { NODE_ENV } = process.env;
const entry = {
    app: ['skeleton-css/css/skeleton.css', './css/style.css']
};

const plugins = [
    new HtmlWebpackPlugin({
        template: 'html/index.js',
    }),
    new ExtractTextPlugin({
        filename: 'css/style.css',
    }),
];

if (NODE_ENV === 'development') {
    const { port } = argv;

    entry.app.push(`webpack-dev-server/client?http://localhost:${port}`);
    plugins.push(new OpenBrowserPlugin({
        url: `http://localhost:${port}`,
        ignoreErrors: true
    }));
}

let filename;
let chunkFilename;

if (NODE_ENV === 'development') {
    filename = 'js/[name].js';
    chunkFilename = 'js/[id].[name].chunk.js';
} else {
    filename = 'js/[name]-[chunkhash].js';
    chunkFilename = 'js/[id]-[chunkhash].[name].chunk.js';
}

entry.app.push(
    'babel-polyfill',
    './js/index'
);

plugins.push(new CopyWebpackPlugin([
    { from: 'static', to: '.' },
]));

if (NODE_ENV === 'production') {
    plugins.push(new BabiliPlugin());
}

module.exports = {
    entry,
    plugins,
    context: __dirname,
    output: {
        filename,
        chunkFilename,
        path: path.resolve('dist/'),
        library: 'app',
        libraryTarget: 'var'
    },
    module: {
        rules: [{
            test: /.js?$/,
            use: ['babel-loader'],
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader']
            })
        }]
    },
    devtool: 'source-map'
};
