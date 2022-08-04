const path = require('path');
const { ESLint } = require('eslint');

describe('config', () => {
    it('works', async () => {
        const eslint = new ESLint({
            useEslintrc: false,
            overrideConfigFile: path.join(__dirname, 'index.js'),
        });

        const results = await eslint.lintText('var foo\n');

        expect(results[0].errorCount).toEqual(3);
        expect(results[0].warningCount).toEqual(0);
    });
});
