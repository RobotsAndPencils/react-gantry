<h1>
  React Gantry <img align="right" width="300" src="gantry.png"> 
</h1>
An opinionated React starter kit, by the Frontend Team at Robots & Pencils, in an attempt to better align our architecture and technology stacks to a common thread across all projects, so we can increase efficiencies in knowledge sharing and drive by help.

###### A note about Robits:
TBD

## Features

We've tried to create strong opinions around the heavy lifters, while keeping it strictly to the essentials. This repo encompasses only we believe should be the foundation of every React project, allowing the project wrapper to tack on more unique necessities.

###### Heavy Lifters =
* Bundler: [Webpack 4](https://webpack.js.org/)
* Local Server: [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
* Data Management: [Redux](https://redux.js.org/)
* Router: [React Router 4 (web)](https://reacttraining.com/react-router/web/guides/philosophy)
* Forms: [Redux Form 7+](https://redux-form.com/7.3.0/docs/gettingstarted.md/)
* Linting: [Standard js](https://standardjs.com/)
* Testing: [Jest](https://facebook.github.io/jest/) + [Enzyme](https://github.com/airbnb/enzyme)
* JS Compiler: [Babel 7](https://github.com/babel/babel)
* CSS: [CSS Modules](https://github.com/css-modules/css-modules) (as [SCSS](https://sass-lang.com/)) + [Sass Resources Loader](https://github.com/shakacode/sass-resources-loader)

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
src
├── assets
│   ├── fonts
│   ├── images
│   └── svg
├── components
│   └── <component>
│       ├── <component>.js
│       ├── <component>.scss
│       └── <component>.test.js
├── constants
│   └── <name>Constants.js
├── containers
│   └── <container>
│       ├── <container>-container.scss
│       ├── <container>Container.js
│       └── <container>Container.test.js
├── favicon.png
├── index.html
├── redux
│   ├── rootReducer.js
│   ├── store.js
│   └── <duck>
│       ├── <duck>Actions.js
│       ├── <duck>Reducer.js
│       └── <duck>.test.js
├── services
│   ├── axiosInstance.js
│   ├── <service>.js
├── styles
│   ├── resources
│   │   ├── _0variables.scss
│   │   └── _1mixins.scss
│   └── index.scss
├── utils
│   ├── createReducer.js
│   ├── <util>.js
│   └── <util>.test.js
└── views
    └── <view>
        ├── <view>.js
        └── <view>.scss
```

## Available Scripts

* `npm run start` runs the app locally in development mode
* `npm run dist` builds the app for distribution to the `/dist` folder
* `npm run test` runs standard and then jest
* `npm run lint` runs standard
* Update Gantry: (re)downloads this repo as an npm package and merges its package.json with this project's package.json
* Install Robits: downloads `react-robits` as an npm repo and merges its package.json with this project's package.json
* Update Robits: (re)downloads `react-robits` as an npm package and merges its package.json with this project's package.json

## Webpack Configuration

Gantry has a purposefully slimmer webpack configuration than some other starter kits to make it easier to extend without wondering what all of the individual loaders and plugins do, whether they're being used, or if they're even necessary. Some key points of our webpack configuration are below, see the TECH.md file for the full walkthrough.

* Importing absolute paths are treated as if they start in `/src` or `/node_modules`.
* JS is handled by babel, which is configured in the .babelrc file in the root of the project.
* SCSS Modules with sass-resources-loader are pre-configured to use the `./styles/resources` directory to auto import the files there.
* SCSS Modules is set up with source maps disabled for production mode.
* Images are handled by the URL Loader, anything below 10KB is automatically converted to a DataURL.
* SVG files are handled one of two ways
  * If they are imported with `?external` at the end of the file location string, they are imported as static files.
  * Otherwise they will be converted to inline svg react components.
* Fonts are imported with the file loader.

## Testing Configuration

We have [Jest](https://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/) set up to run tests. By and large we have the default configuration for both of these.

However, since we are importing SVG files as react components, and SCSS as an object, we need to configure Jest and Enzyme a little to prevent it from trying to run this markup as javascript in our tests. We accomplish this with the [moduleNameMapper](https://facebook.github.io/jest/docs/en/configuration.html#modulenamemapper-object-string-string) and [transform](https://facebook.github.io/jest/docs/en/configuration.html#transform-object-string-string) config options. For more details check the TECH.md file.

## Hygen
Gantry has [hygen](http://www.hygen.io/quick-start) generators configured for all of the majorly repetative items one would add while making a site.

__To get started,__ you will need to `npm install -g hygen`.

### Component generator
```
hygen component new --name <name> --functional?
```
Produces the following files:
```
└── components
    └── <name>
        ├── <name>.js
        ├── <name>.scss
        └── <name>.test.js
```
Adding the optional `--functional` flag will create a basic functional component instead of a class based one.

### Container generator
```
hygen container new --name <name> --document? --duck? <duck> --functional?
```
Produces the following files:
```
└── containers
    └── <name>
        ├── <name>Container.js
        ├── <name>-container.scss
        └── <name>Container.test.js
```
Adding the optional `--functional` flag will create a basic functional component instead of a class based one.
Adding the optional `--document` flag will add some JSDoc comments to the container file itself.
Adding the optional `--duck` flag will import the actionCreators from that duck automatically.

### Duck Generator
```
hygen duck new --name <name> --dummy? --document?
```
Produces the following files:
```
└── redux
    └── <name>
        ├── <name>.test.js
        ├── <name>Actions.js
        └── <name>Reducer.js
```
Adding the `--dummy` flag will fill in the files with a dummy duck's examples.
Adding the `--document` flag will add some documentation to each produced file detailing it's purpose.

```
hygen duck newAction --name <name> --duck <duck> --thunk? --promise? --document?
```
Injects all of the parts of a new ActionCreator, Reducer, and Type into the provided `--duck`.

Adding the `--thunk` and `--promise` flags will create a Thunk that returns a promise
Adding the `--thunk` flag will create a simple Thunk
Adding the optional `--document` flag will add some comments in the thunks.
