const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ]
      },
      plugins: [new HtmlWebpackPlugin({
          template: path.join(path.resolve(__dirname, 'public'), 'index.html'),
      }),
      new MiniCssExtractPlugin({
          filename:'[name].css',
    }),
    // new ESLintPlugin()
    ],
      devServer: {
          port: 3000,
      }
}