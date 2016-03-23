var webpack = require("webpack");
var autoprefixer = require('autoprefixer');

module.exports = {
    resolve: {
        modulesDirectories: ["node_modules", "src", "."],
        extensions: ['', '.js', '.jsx']
    },
    entry: __dirname + '/src/js/entry.jsx',
    output: {
        path: __dirname + "/build/",
        filename: "bundle.js",
        publicPath: "/build/"
    },
    plugins: [
        new webpack.NoErrorsPlugin,
        new webpack.HotModuleReplacementPlugin(),
				new webpack.ProvidePlugin({
					 $: "jquery",
					 jQuery: "jquery"
				})
    ],
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js.*$/,
                loader: 'babel',
                exclude: /node_modules/,
                query:
                      {
                        presets:['es2015','react']
                      }
            },
            {
                test: /\.scss$/,
                include: /src/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 3 versions',
                    'sass?outputStyle=expanded'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=8192',
                    'img'
                ]
            },
						{ test: /\.css$/, loader: 'style-loader!css-loader' },
						{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
						{ test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
						{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
						{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },

    postcss: function() {
        return [autoprefixer]
    }
};
