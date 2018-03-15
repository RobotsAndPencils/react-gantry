<h1>
  React Gantry <img align="right" width="300" src="gantry.png"> 
</h1>
An opinionated React starter kit, by the Frontend Team at Robots & Pencils, in an attempt to better align our architecture and technology stacks to a common thread across all projects, so we can increase effeciencies in knowledge sharing and drive by help.

###### A note about Robits:
TBD

## Features

We've tried to create strong opinions around the heavy lifters, while keeping it strictly to the essentials. This repo encompasses only we believe should be the foundation of every React project, allowing the project wrapper to tack on more unique necessaties.

###### Heavy Lifters =
* Bundler: Webpack
* Local Server: Webpack Dev Server
* Data Management: Redux
* Router: React Router 4
* Forms: Redux Forms
* Linting: TBD
* Testing: Jest + Enzyme
* JS Compiler: Babel
* CSS: React CSS Modules (as SASS) + Sass Resources Loader

Inspect the npm package.json for smaller, ancillary tools

## New Project Setup 

1. Download a ZIP of this repo, and save it into your project directory, renaming it appropriately
2. Run `npm init` and tailor your configuration to the project
3. Run `npm install` to download the package dependencies
4. Get your code on
4. Run the project locally with `npm start`

Onboarded team members will then simply need to run `npm install` after cloning your project repo

## Directory Structure

```bash
├── assets
│   ├── fonts
│   ├── images
│   └── svg
├── components
│   └── profile
│       ├── profile.js
│       ├── profile.scss
│       └── profile.test.js
├── constants
│   └── appConstants.js
├── containers
│   └── profile
│       ├── profile-container.scss
│       ├── profileContainer.js
│       └── profileContainer.test.js
├── favicon.png
├── index.html
├── redux
│   ├── rootReducer.js
│   ├── store.js
│   └── user
│       ├── userActions.js
│       ├── userReducer.js
│       └── userReducer.test.js
├── services
│   ├── axios.js
│   ├── profile.js
│   └── profile.test.js
├── styles
│   ├── _variables.scss
│   └── index.scss
├── utils
│   ├── phoneFormatter.js
│   └── phoneFormatter.test.js
└── views
    └── home
        ├── home.js
        └── home.scss
```

## Available Scripts

* `npm run start` runs the app locally in development mode ...
* `npm run dist` builds the app for distribution to the `/dist` folder
* Update Gantry: (re)downloads this repo as an npm package and merges its package.json with this project's package.json
* Install Robits: downloads `react-robits` as an npm repo and merges its package.json with this project's package.json
* Update Robits: (re)downloads `react-robits` as an npm package and merges its package.json with this project's package.json
* Test: launces the test runner

## Running Tests

TBD

## Webpack Configuration

Gantry has a purposefully slimmer webpack configuration than some other starter kits to make it easier to extend without wondering what all of the individual loaders and plugins do, whether they're being used, or if they're even necessary. Some key points of our webpack configuration are below, see the TECH.md file for the full walkthrough.

* JS is handled by babel, which is configured in the .babelrc file in the root of the project.
* SCSS Modules with sass-resources-loader are pre-configured to use the `./styles/resources` directory to auto import the files there.
* SCSS Modules is set up with source maps disabled for production mode.
* Images are handled by the URL Loader, anything below 10KB is automatically converted to a DataURL.
* SVG files are handled one of two ways
  * If they are imported with `?inline` at the end of the file location string, they will be converted to inline svg react components.
  * Otherwise they are imported as static files
* Fonts are imported with the file loader.

## Testing Configuration

We have [Jest](https://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/) set up to run tests. By and large we have the default configuration for both of these.

### Jest
Our Jest Config is inside the `package.json`.
```json
  "jest": {
    "moduleNameMapper": {
      "^.+\\.s?css$": "identity-obj-proxy",
      "^.+\\.svg\\?external$": "<rootDir>/config/fileMock.js"
    },
    "transform": {
      "^.+\\.(js|jsx|mjs)$": "babel-jest",
      "^(?!.*\\.(js|jsx|mjs|css|json)$)": "<rootDir>/config/fileTransform.js"
    },
    "transformIgnorePatterns": [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"
    ],
    "setupFiles": [
      "<rootDir>/config/setupTests.js"
    ]
  }
```

#### moduleNameWrapper
Since we're importing our `.scss` and `.svg` files, Jest tries to run them as javascript, which ends poorly. Jest has a config option [moduleNameMapper](https://facebook.github.io/jest/docs/en/configuration.html#modulenamemapper-object-string-string) that allows us to mock files based on their filename (regex).
* We use [identity-object-proxy](https://github.com/keyanzhang/identity-obj-proxy) to turn our imported stylesheet lookups into normal strings. (This was part of the jest recommended configuration [for css modules](https://facebook.github.io/jest/docs/en/webpack.html#mocking-css-modules)). Basically it takes our `<div className={styles.someClass}>` and converts that styles object to return just a string `<div className="someClass">`, instead of whatever css modules does normally.
* We have a custom `fileMock.js` for external svgs. This fileMock just returns a string `"file"` as it is unlikely that we'll be needing to test the contents of our external svgs in any unit tests.
  * It is likely that any static assets we import will need to be added to this regex.

#### transform
Jest's [transform](https://facebook.github.io/jest/docs/en/configuration.html#transform-object-string-string) config option lets us apply file transforms to matched filenames. By default `babel-jest` would be run to convert our js files from the ES2017+ syntax back down to vanilla js.

However, we need to teach jest how to handle our inline imported SVGs, which is done in the `"^(?!.*\\.(js|jsx|mjs|css|json)$)": "<rootDir>/config/fileTransform.js"` line. Since we overwrite the default Transform object to add that, we need to add `babel-jest` back in manually.

```js
// fileTransform.js
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
```

This was taken from [Create-react-app's config](https://github.com/facebook/create-react-app/blob/82907fd23cd2a521c3b6c14316ea4177841ede3d/packages/react-scripts/config/jest/fileTransform.js). It basically does a transform that takes any imported `.svg` file and returns an object that looks like an empty React Component (since that's how we're importing inline svgs).

```json
"transformIgnorePatterns": [
  "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"
],
```
We tell jest to ignore node_modules when it considers if it should apply our transformations.


### Enzyme
Enzyme makes it easier to assert, manipulate, and traverse React Components' output. It provides an API that seeks to mimick jQuery's DOM manipulation api.

We use all the defaults for enzyme, which we initialize in our jest setupFiles:
```json
"setupFiles": [
  "<rootDir>/config/setupTests.js"
]
```

Enzyme requires an adapter to enable it to work with the version of React we are using. Setting the adapter up is quite simple:
```js
// setupTests.js
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
```