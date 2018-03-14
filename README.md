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

## Webpack Setup Explained

We use one file for both Production and Development webpack setups because of webpack v4's [new `--mode` flag](https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a). I followed [this tutorial](https://www.valentinog.com/blog/webpack-4-tutorial/) to get started with a basic webpack v4 config file.

Webpack's config maps different `tests` to different loaders, where the tests deal with filenames and match them with regex patterns. Each rule tests one thing and then uses the loader setup defined to handle that file type.

### JS
```js
{
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader'
}
```

This will make the babel-loader handle all .js files. We have set up two presets in our __.babelrc__ file in the project root that tells babel _how_ to handle these files:
* [react](https://babeljs.io/docs/plugins/preset-react/) - React's suggested preset that lets babel know how to treat the jsx inside our react components.
* [env](https://babeljs.io/docs/plugins/preset-env/) - This seems to just be _the_ plugin to have with a babel setup. React recommends it as well and it seems to be what drives babel's ability to transpile ES2016+ back down to what browsers can run.

### Images
```js
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
```
This will make use of the [url-loader](https://github.com/webpack-contrib/url-loader) to handle all `.png`, `.jpg`, and `.gif` files. If these files are `require`d anywhere in the project (including `url()` in css), the loader will do the following:
* If the filesize is less than 10kb convert the asset into a DataURL and insert it into where the file was `require`d.
* If the filesize is more than 10kb revert automatically to the [file-loader](https://github.com/webpack-contrib/file-loader), which will pull that asset into the `/dist` folder under an `/assets/images` directory. It will then change the url where it was `require`d to match the new location.

### Fonts
```js
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
```
This will jump straight to the file loader for all .ttf, .eot, .woff, and .woff2 files. It pulling them into an `/assets/fonts` directory.

### SCSS
This is the big one. To condense the config file I took the loaders out of the rule itself.

```js
{
  test: /\.scss$/,
  use: scssLoaders
}
```
This rule matches for any file that ends in .scss. It then applies the conglomerated scss loaders from the start of the config file.

#### Mode
Instead of a normal object, we're exporting a config function to webpack. This gives us access to the webpack native argument variables within the config file itself.

Running `webpack --mode production` with this config will make `argv.mode === production //true`.

#### Common SCSS Loaders
```js
let scssLoaders = [
  {
    loader: 'css-loader',
    options: {
      modules: true, // Enables CSS Module Syntax
      importLoaders: 3, // This will make both `sass-loader` and `postcss-loader` process any @imported css files before css-loader gets to them
      localIdentName: '[name]__[local]', // This removes the hash at the end of the classname outputs.
      sourceMap: argv.mode !== 'production'
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: argv.mode !== 'production', // updates the sourcemap from the previous step (sass-loader)
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
```

__Loaders are applied from the last to the first.__ With that in mind here's the breakdown of what goes on no matter the environment:

1. We configure [sass-resources-loader](https://github.com/shakacode/sass-resources-loader), which automatically `@imports` each `.scss` file in the `/src/styles/resources` directory in order at the top of each file this rule applies to (excluding the resource files themselves).
2. The [sass-loader](https://github.com/webpack-contrib/sass-loader) takes our newly resourced scss file and compiles it with the version of [node-sass](https://github.com/sass/node-sass) we have installed. We turn on Source Maps for all modes but `production`.
3. The [postcss-loader](https://github.com/postcss/postcss-loader) lets us implement any plugin that works in postcss and then process the newly compiled css file with them. We are only using the [autoprefixer](https://github.com/postcss/autoprefixer) plugin with all its defaults, but this is where you could either configure autoprefixer or add more plugins. The sourcemaps from the previous step are modified accordingly if we aren't in Production mode.
4. Next the [css-loader](https://github.com/webpack-contrib/css-loader) does two things for us:
  * Trawls through our newly autoprefixed css file and interprets each instance of `@import` and `url()` as a js `import` or `require()`. It then resolves these (based on the loader we assign to the imported file). `importLoaders: 3` makes sure that any imported scss files go through all three of the previous loaders.
  * Enables CSS Modules per the spec. We have told the loader to use the convention: `[name]__[local]` which means that a `profile.scss`'s class `.avatar` will compile out to be `.profile__avatar` in the final css.
  * We also update the sourcemaps from the previous step in light of this new modification if we aren't in Production mode.

What happens next is dependant on what mode we're running webpack in.

#### Mode Specific SCSS Loaders
```
  if (argv.mode === 'production') {
    scssLoaders.unshift(MiniCssExtractPlugin.loader)
  } else {
    scssLoaders.unshift({
      loader: 'style-loader'
    })
  }
```
Since `scssLoaders` is an array, we can use [`array.Prototype.unshift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) to add things to the beginning of it (webpack runs loaders from last to first, which means these will always be the last steps).

In the case that we are in Production mode, we want to use [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to pull our CSS out of the js process and put it into a css file within `/dist`.

If we aren't in production, we just want to push the css into a `<style>` tag in the head for speed with [style-loader](https://github.com/webpack-contrib/style-loader). We have sourcemaps so inspecting the elements on the page will display the correct origins.


### Plugins

#### HTML-webpack-plugin
```
let plugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    favicon: 'src/favicon.png'
  })
]
```
[This plugin](https://github.com/jantimon/html-webpack-plugin) creates an index.html and puts a `script` tag with our bundle in it. We give it a template html file that ensures that our `<div id="root"></div>` exists for React to render the app within.

We also tell it what the favicon is and it automatically pulls that into the /dist folder as well after linking it in the `<head>`.

#### mini-css-extract-plugin
```
if (argv.mode === 'production') {
  plugins.push(new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
  }))
}
```
Here we initialize [the plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) that at the time of this writing is set to [replace the `extract-text-plugin`](https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/701#issuecomment-371116830) for handling CSS. Note that we only initialize this plugin if we are in production mode.
