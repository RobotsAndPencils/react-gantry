const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { // Will convert (png|jpg|gif) files under 10kb to a DataURL, otherwise uses the file-loader automatically
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'assets/images/[name].[ext]'
            }
          }
        ]
      },
      { // Will use file-loader for (ttf|eot|woff|woff2)
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[ext]'
            }
          }
        ]
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
              modules: true, // Enables CSS Module Syntax
              importLoaders: 3, // This will make both `sass-loader` and `postcss-loader` process any @imported css files before css-loader gets to them
              localIdentName: '[name]__[local]', // This removes the hash at the end of the classname outputs.
              sourceMap: true
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
          },
          { // Imports all of the contents of the resources directory into the start of every scss file in the project
            loader: 'sass-resources-loader',
            options: {
              resources: './src/styles/resources/*.scss'
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
