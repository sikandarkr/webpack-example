var path = require('path');
module.exports = {
    mode: "development",
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),// Since your index.html is in the "dist" dir
        compress: true,
        open: true,// It wil Automatically open the browser
        hot: true, // It will Automatically refresh the page whenever bundle.js changes (You will have to refresh manually if other files change)
        port: 3000
    }

}