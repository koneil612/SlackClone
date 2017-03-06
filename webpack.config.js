const path = require('path');
module.exports = {
    entry: './js/scripts.js',
    output: {
        path: path.resolve('dist'),
        filename: 'scripts.min.js',
        },
    module: {
        loaders: [
                {
                    test:/\.jsx?$/,
                    loaders: 'babel-loader',
                    query: {
                        presets:['es2015', 'react']
                    }
                }
        ]
    }
}
