const { mergeWithCustomize, customizeArray } = require('webpack-merge')
const path = require('path')

module.exports = {
  webpack: function override (config, env) {
    const newLoaders = {
      module: {
        rules: [
          {
            parser: { requireEnsure: false },
            oneOf: [
              {
                test: /\.module\.(scss|sass)$/,
                use: [
                  {
                    loader: 'sass-resources-loader',
                    options: {
                      // Provide path to the file with resources
                      resources: [
                        `${path.resolve(__dirname, 'src/common/styles/tokens')}/**/*.scss`,
                      ],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    }

    const combinedConfig = mergeWithCustomize({
      customizeArray: customizeArray({
        'module.rules.use.oneOf': 'append',
      }),
    })(config, newLoaders)

    // console.dir(combinedConfig.module.rules, { depth: 10, colors: true })

    // Return the altered combinedConfig
    return combinedConfig
  },
}
