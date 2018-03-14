/* This file was taken from Create-React-App's solution to importing inline SVGs for Jest tests. https://github.com/facebook/create-react-app/blob/82907fd23cd2a521c3b6c14316ea4177841ede3d/packages/react-scripts/config/jest/fileTransform.js
 * It uses a technique similar to that described here: https://facebook.github.io/jest/docs/en/webpack.html#mocking-css-modules
 * with the difference being that it handles .svgs and returns a new object that resembles a React Component.
 */

const path = require('path')

module.exports = {
  process (src, filename) {
    const assetFilename = JSON.stringify(path.basename(filename))

    if (filename.match(/\.svg$/)) {
      return `module.exports = {
        __esModule: true,
        default: ${assetFilename},
        ReactComponent: () => ${assetFilename},
      };`
    }

    return `module.exports = ${assetFilename};`
  }
}
