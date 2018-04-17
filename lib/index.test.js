const path = require('path');
const { CLIEngine } = require('eslint');

describe('config', () => {
    it('works', () => {
        const cli = new CLIEngine({
            useEslintrc: false,
            configFile: path.join(__dirname, 'index.js'),
        });

        expect(cli.executeOnText('var foo\n')).toMatchObject({
            errorCount: 3,
            warningCount: 0,
        });
    });
});
