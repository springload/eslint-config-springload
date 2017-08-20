# eslint-config-springload [![npm](https://img.shields.io/npm/v/eslint-config-springload.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-springload) [![Build Status](https://travis-ci.org/springload/eslint-config-springload.svg?branch=master)](https://travis-ci.org/springload/eslint-config-springload)

> Springload's ESLint shareable configuration. Based on [`eslint-config-airbnb`](https://github.com/airbnb/javascript), but laxer.

## Usage

Install the config and its dependencies:

```sh
npm install --save-exact --save-dev eslint@3 eslint-config-springload eslint-plugin-import@~2.2.0 eslint-plugin-jsx-a11y@~3.0.2 eslint-plugin-react@~6.10.3
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
npm install
# Install the git hooks.
./.githooks/deploy
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
# 5. Update the README with the right install command. Use the next command to find out what those are.
npm info eslint-config-springload@latest peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g'
# 6. Create a PR and merge it.
# 7. On master,
npm publish
# 8. Finally, go to GitHub and create a release and a tag for the new version.
```
