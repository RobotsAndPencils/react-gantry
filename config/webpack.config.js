const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
  let scssLoaders = [
    {
      loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 3,
        localIdentName: '[name]__[local]',
        sourceMap: argv.mode !== 'production'
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: argv.mode !== 'production',
        plugins: () => [
          require('autoprefixer')
        ]
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: argv.mode !== 'production'
      }
    },
    {
      loader: 'sass-resources-loader',
      options: {
        resources: './src/styles/resources/*.scss'
      }
    }
  ]

  if (argv.mode === 'production') {
    scssLoaders.unshift(MiniCssExtractPlugin.loader)
  } else {
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
        {
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
        {
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
