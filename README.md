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

However, since we are importing SVG files as react components, and SCSS as an object, we need to configure Jest and Enzyme a little to prevent it from trying to run this markup as javascript in our tests. We accomplish this with the [moduleNameMapper](https://facebook.github.io/jest/docs/en/configuration.html#modulenamemapper-object-string-string) and [transform](https://facebook.github.io/jest/docs/en/configuration.html#transform-object-string-string) config options. For more details check the TECH.md file.