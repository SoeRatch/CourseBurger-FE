# CourseBurger-FE

## Setup

### Versions
- Node.js: v22.3.0
- Yarn: v1.22.22

## SCSS Setup

```bash
# Navigate to the `scss` directory
cd packages/scss

# Initialize a Yarn project
yarn init -y

# Add `normalize-scss` package
yarn add normalize-scss

# Import `normalize-scss` in your SCSS file (reset.scss)
# Add the following line:
# @import "node_modules/normalize-scss/sass/normalize/import-now";

# Add Stylelint and Prettier packages
yarn add --dev stylelint stylelint-config-sass-guidelines stylelint-config-prettier stylelint-prettier prettier

# Create a `.stylelintrc.json` file for Stylelint configuration

# Add Husky and lint-staged for pre-commit hooks
yarn add --dev husky@4 lint-staged

# Update `package.json` to add Husky hooks and lint-staged configuration

# Add Dart Sass
yarn add sass

# Finally, make a build file in the `scripts` folder
# and add a build script in `package.json`

# Now, run `yarn build` to generate CSS files inside the `lib` folder

```


## MONO REPOSITORY STRATEGY 


- Make a new npm project at root 
```bash
yarn init -y
```

- Install lerna 
** Lerna is a fast modern build system for managing and publishing multiple JavaScript/TypeScript packages from the same repository. **
It helps publish our packages to npm very easily . 
```bash
yarn add --dev lerna 
```


- Add  "workspaces": ["packages/*"] in package.json

- Initialize a new lerna project 
```bash
yarn lerna init 
```

- Modify lerna.json 
```javascript
{
  "$schema": "node_modules/lerna/schemas/lerna-schema.json",
  "useNx": true,
  "packages": [
    "packages/*"
  ],
  "npmClient": "yarn",
  "version": "0.0.0",
  "stream":true
}
```

- Modify root package.json
```javascript
{
  
"workspaces": {
    "packages":[
      "packages/*"
    ],
    "nohoist": [
      "**/normalize-scss"
    ]
  },
  "private":true
}

```


- Delete all node modules 
```bash
rm -rf ./**/node_modules
or 
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
```


- Now run yarn command to install npm packages
```bash
yarn
```

use lerna to run specific script in all of our packages . for eg , in root package.json 

```javascript
{
  
"scripts": {
    "build": "yarn lerna run build"
  },

}

```

* Most of our packages will have build step and one build command will run all the build step inside all packages *

```
yarn build
```


## React Package

This package would be the implementation of our design system using Reactjs Library

- make react package
```
cd packages
mkdir react
```

- Initialize react package
```
cd packages/react
yarn init -y
```

- Install dev dependencies 

```
yarn add --dev react @types/react typescript
```

- Create tsconfig.json for typescript and paste in the basic configuration 
```
touch tsconfig.json
```

- Install a bundler called rollup 

```
cd packages/react
yarn add --dev rollup rollup-plugin-typescript2
```
- Create rollup.config.mjs file
```
touch rollup.config.mjs
```

- Add build script in package.json
```javascript
{
  
"scripts":{
    "build":"rollup -c "
  }

}

```

- Run yarn build and it will compile src/index.ts file to lib folder 
```
yarn build 
```


## React Playground

- make react playground
```
cd playgrounds
mkdir react
```

- initialize react playgrounds
```
cd playgrounds/react
yarn init -y
```

- install dev dependencies 

```
yarn add --dev react @types/react typescript parcel-bundler
yarn add --dev react-dom @types/react-dom
```

- add dev script in playgrounds/react/package.json
```javascript
{
  
"scripts": {
    "dev":"parcel src/index.html -p 3000"
  }
}

```

- run dev
```
yarn dev 
```
it will create a dist folder and run on port 3000 