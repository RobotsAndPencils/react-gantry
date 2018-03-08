const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { // Finally, after all our scss -> autoprefixer -> css happens, we have to inject it into our js bundle in a <style> tag (for development only)
            loader: 'style-loader'
          },
          { // Enables CSS Modules and handles css's `@import` and `url()`s as if they were js imports (rewriting the url in the final css bundle)
            loader: 'css-loader',
            options: {
              importLoaders: 2 // This will make both `sass-loader` and `postcss-loader` process any @imported css files before css-loader gets to them
            }
          },
          { // Autoprefixer has to be loaded in through the postcss-loader
            loader: 'postcss-loader',
            options: {
              sourceMap: true, // updates the sourcemap from the previous step (sass-loader)
              plugins: () => [
                require('autoprefixer')
              ]
            }
          },
          { // Wraps node-sass to compile scss files into css for the next step (postcss-loader)
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/favicon.png'
    })
  ]
}
