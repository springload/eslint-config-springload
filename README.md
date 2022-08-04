# eslint-config-springload [![npm](https://img.shields.io/npm/v/eslint-config-springload.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-springload) [![Build Status](https://travis-ci.org/springload/eslint-config-springload.svg?branch=master)](https://travis-ci.org/springload/eslint-config-springload)

> Springload's ESLint shareable configuration. Based on [`eslint-config-airbnb`](https://github.com/airbnb/javascript), but laxer.

## Usage

Install the config and its dependencies:

```sh
yarn add --exact --save-dev eslint@^8.21.0 eslint-config-springload eslint-plugin-import@^2.26.0 eslint-plugin-jsx-a11y@^6.6.1
```

Configure ESLint to use this config. For example, in your package.json, this would be:

```json
"eslintConfig": {
  "extends": "springload"
},
```

## Development

### Install

```sh
git clone git@github.com:springload/eslint-config-springload.git
cd eslint-config-springload
nvm install
# Then, install all project dependencies.
yarn install
# Install the git hooks.
./.githooks/deploy
```

### Development

```sh
# Runs linting.
yarn lint
# Runs tests.
yarn test
```

### Releases

This project follows [Semantic Versioning](http://semver.org/spec/v2.0.0.html) as well as ESLint's [Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

```sh
# 1. Make a new branch for the release of the new version.
git chore release-vx.y.z
# 2. Update the version in package.json
# 3. Use irish-pub to check the package content. Install with `npm install -g` first.
irish-pub
# 4. Update the [CHANGELOG](CHANGELOG.md) for the upcoming release.
# 5. Update the README with the right install command. Use the next command to find out what those are.
yarn info eslint-config-springload@latest peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g'
# 6. Create a PR and merge it.
# 7. On master,
yarn publish
# 8. Finally, go to GitHub and create a release and a tag for the new version.
```
