# eslint-config-springload [![npm](https://img.shields.io/npm/v/eslint-config-springload.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-springload) [![Build Status](https://travis-ci.org/springload/eslint-config-springload.svg?branch=master)](https://travis-ci.org/springload/eslint-config-springload) [![Greenkeeper badge](https://badges.greenkeeper.io/springload/eslint-config-springload.svg)](https://greenkeeper.io/)

> Springload's `.eslintrc` as an extensible shared config. Based on [`eslint-config-airbnb`](https://github.com/airbnb/javascript), but laxer.

## Usage

## Development

### Install

```sh
git clone git@github.com:springload/eslint-config-springload.git
cd eslint-config-springload
nvm install
# Then, install all project dependencies.
npm install
```

### Development

```sh
# Runs linting.
npm run lint
# Runs tests.
npm run test
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
# 5. Create a PR and merge it.
# 6. On master,
npm publish
# 7. Finally, go to GitHub and create a release and a tag for the new version.
```
