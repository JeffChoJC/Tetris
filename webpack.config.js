const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js'
    }
};