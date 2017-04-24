const CLIEngine = require('eslint').CLIEngine;

const cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'index.js',
});

// Will throw an error if the config is invalid.
cli.executeOnText('var foo\n');
