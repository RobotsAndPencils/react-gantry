const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
  let scssLoaders = [
    { // Enables CSS Modules and handles css's `@import` and `url()`s as if they were js imports (rewriting the url in the final css bundle)
      loader: 'css-loader',
      options: {
        modules: true, // Enables CSS Module Syntax
        importLoaders: 3, // This will make both `sass-loader` and `postcss-loader` process any @imported css files before css-loader gets to them
        localIdentName: '[name]__[local]', // This removes the hash at the end of the classname outputs.
        sourceMap: argv.mode !== 'production'
      }
    },
    { // Autoprefixer has to be loaded in through the postcss-loader
      loader: 'postcss-loader',
      options: {
        sourceMap: argv.mode !== 'production', // updates the sourcemap from the previous step (sass-loader)
        plugins: () => [
          require('autoprefixer')
        ]
      }
    },
    { // Wraps node-sass to compile scss files into css for the next step (postcss-loader)
      loader: 'sass-loader',
      options: {
        sourceMap: argv.mode !== 'production'
      }
    },
    { // Imports all of the contents of the resources directory into the start of every scss file in the project
      loader: 'sass-resources-loader',
      options: {
        resources: './src/styles/resources/*.scss'
      }
    }
  ]

  // If our mode is production we want to add the mini-css-extract-plugin's loader to the start of our chain
  if (argv.mode === 'production') {
    scssLoaders.unshift(MiniCssExtractPlugin.loader)
  } else { // else we want to inject our styles into a <style> tag in the <head>
    scssLoaders.unshift({
      loader: 'style-loader'
    })
  }

  let plugins = [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/favicon.png'
    })
  ]

  // If we're in production build mode we need to initialize the mini-css-extract-plugin
  if (argv.mode === 'production') {
    plugins.push(new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }))
  }

  return {
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
          use: scssLoaders
        }
      ]
    },
    plugins: plugins
  }
}
