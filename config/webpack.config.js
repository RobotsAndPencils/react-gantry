const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
  let scssLoaders = [
    /* The css-loader does two things for us: Enables CSS Modules and handles
     * our css @imports & url()s as if they were js imports or require()s
     */
    {
      loader: 'css-loader',
      options: {
        modules: true, // Enables CSS Modules spec
        importLoaders: 3, // Tells CSS Loader how many loaders need to run for all @imported css files
        localIdentName: '[name]__[local]', // Provides the format for the CSS Modules output.
        sourceMap: argv.mode !== 'production' // Augment any sourcemaps from previous loaders if we aren't in production
      }
    },
    /* The postcss-loader lets us implement any plugin that works in postcss and
     * then process the newly compiled css file with them.
     */
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: argv.mode !== 'production', // Augment all sourcemaps from previous loaders if we aren't in production
        plugins: () => [
          require('autoprefixer') // We are only using the autoprefixer plugin with all its defaults
        ]
      }
    },
    /* The sass-loader takes our newly resourced scss file and compiles it
     * with the version of node-sass we have installed.
     */
    {
      loader: 'sass-loader',
      options: {
        sourceMap: argv.mode !== 'production' // Turn on source maps for all modes but production
      }
    },
    /* We configure sass-resources-loader to automatically @import each .scss
     * file in the /src/styles/resources directory in order at the top of each file
     * this rule applies to (excluding the resource files themselves).
     */
    {
      loader: 'sass-resources-loader',
      options: {
        resources: './src/styles/resources/*.scss'
      }
    }
  ]

  /* The last step in our scss Loader stack is dependant on the environment from webpack's
   * argv.mode, which we get because we export a function instead of an object.
   */
  if (argv.mode === 'production') {
    /* In Production mode, add the loader from the plugin that extracts our css into a css file,
     * then puts that css file's reference in our html file.
     */
    scssLoaders.unshift(MiniCssExtractPlugin.loader)
  } else {
    /* Otherwise for the sake of speed, throw all our css into a <style> tag in the head
     * with the style-loader.
     */
    scssLoaders.unshift({
      loader: 'style-loader'
    })
  }

  let plugins = [
    /* Creates an index.html and puts a `script` tag with our bundle in it.
     * We give it a template html file that ensures that our `<div id="root"></div>`
     * exists for React to render the app within.
     */
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/favicon.png'
    })
  ]

  if (argv.mode === 'production') {
    /* Initialize the plugin that will allow us to extract our css into a file
     * if we're in production mode.
     */
    plugins.push(new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }))
  }

  return {
    module: {
      rules: [
        /* This will make the babel-loader handle all .js files. We have set up two presets in
         * our .babelrc file in the project root that tells babel how to handle these files.
         */
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        /* This will make use of the url-loader to handle all `.png`, `.jpg`, and `.gif` files.
         * If these files are required or imported anywhere in the project (including url()
         * in css), the loader first attempt to convert them into a DataURL inline (if the filesize
         * is less than 10kb), otherwise it will fallback to the file-loader.
         */
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
        /* This will conditionally load SVG files depending on if the import declaration
         * has a resourceQuery of 'inline' in it. E.g. !import Something from './icon.svg?inline'
         * react-svg-loader will convert the svg into a component with the svg inlined, while
         * file-loader will treat it as if it were an external image.
         */
        {
          test: /\.svg$/,
          oneOf: [
            {
              resourceQuery: /inline/, // regex for the resourceQuery part of the file string
              loader: 'react-svg-loader'
            },
            {
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: 'assets/svg/[name].[ext]'
                  }
                }
              ]
            }
          ]
        },
        /* This will jump straight to the file loader for all .ttf, .eot, .woff, and .woff2 files.
         * It pulling them into an `/assets/fonts` directory.
         */
        {
          test: /\.svg$/,
          oneOf: [
            {
              resourceQuery: /inline/,
              loader: 'react-svg-loader'
            },
            {
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: 'assets/svg/[name].[ext]'
                  }
                }
              ]
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
        /* This is the big one. To condense the config file I took the loaders out of the rule
        * itself. (See above)
        */
        {
          test: /\.scss$/,
          use: scssLoaders
        }
      ]
    },
    plugins: plugins
  }
}
