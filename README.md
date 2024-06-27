# CourseBurger-FE

## Setup

### Versions
- Node.js: v22.3.0
- Yarn: v1.22.22

### SCSS Setup

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
