<h1>
  React Gantry <img align="right" width="300" src="./src/gantry.png"> 
</h1>

This repo is a minimal starter kit born out of recent React projects here at R&P. It combines some basic configurations, based on lessons learned, so that you can quickly get up and running in a way that aligns with existing projects. Beyond that, the rest is up to you!

## Configuration

- Uses [create-react-app](https://create-react-app.dev/) with [rescripts](https://github.com/harrysolovay/rescripts) for the ability to make _minor tweaks_ to the webpack config without having to 'eject' and open that can of worms
- Linting & Formatting:
  - [Prettier-Standard](https://github.com/sheerun/prettier-standard) at the command line, with a pre-commit hook for safe-guarding
  - Based on some compelling arguments from [the community](https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8) and R&P Robots alike, we've implemented a small override for the `comma-dangle`
  - Due to that override, we'ved pulled in [eslint-config-standard](https://github.com/standard/eslint-config-standard) so that we can properly extend [Standard Rules](https://github.com/standard/standard) with that comma override to allow the usage of ESLint plugins within IDE's for proper code highlighting (ie. - base Standard plugins will highlight the comma complaint, this gets around that)
- Testing: [Jest](https://facebook.github.io/jest/)
- CSS: [CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet) + [Sass Resources Loader](https://github.com/shakacode/sass-resources-loader)
- `.npmrc` file that limits NPM package versioning to _wild hotfixes_ to decrease the likelihood of breaking changes between machines introduced by installs across releases

## Tips

##### Editor Setup

It is highly recommended that you install plugins for [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier-Standard](https://marketplace.visualstudio.com/items?itemName=numso.prettier-standard-vscode) for your IDE, and enabling the setting to "Format on Save". This will give you the proper code highlighting and auto-formatting that will help ensure consistent styling and code integrity.

##### Styling

This kit is set up with a minimal styling architecture that we've come to like here at R&P. The content already in the `/common/styles` directory is a generic distillation of some of our more recent projects, and yours to extend, tweak, or nuke as needed. The project is configured to use SCSS Modules and `sass-resources-loader` which targets the SCSS tokens in `/common/styles/tokens`. These tokens are then free to use in any of the project's `.scss` files without having to import them manually!

**Important Note:** that tokens directory can only contain variables, mixins, and functions - no class-rules definitions. Including class rulesets in this directory will create exponential duplication of them within your app.

Also, within this architecture, try to limit your nesting within component styles, and leverage `:global()`, `:local()`, and wildcard CSS selectors to help with targeting.

##### Misc

- CRA comes with an easy way to import SVGs: https://create-react-app.dev/docs/adding-images-fonts-and-files
- You can `require` inline to create dynamic file URLs, but don't forget to pluck off the default: `<img src={require('url').default} />`

## Directory Structure

```bash
src
├── assets                                      # supporting asset files. house JS (dynamic component imagery) or JSON (Lottie) files at the root, and bucket the rest
│   ├── fonts
│   ├── images
│   └── svg
├── common                                      # common/shared code reused across views and components
│   ├── components
│   │   └── <component>
│   │       ├── <component>.js
│   │       ├── <component>.module.scss
│   │       └── <component>.test.js
│   ├── constants                               # code constants and literals
│   │   ├── index.js                            # aggregate for easy imports
│   │   └── <name>Constants.js
│   ├── styles                                  # globalized / shared CSS
│   │   ├── tokens                              # style tokens (variables and mixins) that are accessible from all .scss files in the project via the sass-resources-loader plugin. should contain no actual css classes.
│   │   │   ├── _0colors.scss
│   │   │   ├── _1typography_.scss
│   │   │   ├── _2animations.scss
│   │   │   ├── _3functions.scss
│   │   │   ├── _4variables.scss
│   │   │   └── _mixins.scss
│   │   └── global.module.scss                  # base/main css file with document and app setup
│   ├── utils                                   # shared utility functions
│   │   ├── index.js                            # aggregate for easy imports
│   │   └── <name>Utils.js
├── services                                    # home for all api and service integrations
├── views                                       # home for the app's user facing views, their templates, and dedicated componentry
├── App.js                                      # root component
├── index.js                                    # React root
```

## Available Scripts

- `npm run start` runs the app locally in development mode
- `npm run build` builds the app for distribution to the `/build` folder
- `npm run test` runs jest
- `npm run lint` runs prettier-standard formatting and then lints code afterwards
- `npm run format` runs prettier-standard formatting of all files
