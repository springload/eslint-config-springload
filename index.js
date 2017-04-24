// Specific linting rules for this file to simplify copy/pasting to JSON.
/* eslint quotes: ["error", "double"], quote-props: ["error", "always"], comma-dangle: ["error", "never"], max-len: ["off"] */

module.exports = {
    "extends": [
        "airbnb"
    ],

    "rules": {
        "indent": [2, 4],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "max-len": [1, 120, 4, { "ignoreUrls": true }],
        "id-length": [0],
        // Only enforce object shorthand for methods.
        "object-shorthand": [2, "methods"],
        // Do not enforce arrow body style.
        "arrow-body-style": [0],
        "no-new": [1],
        "eol-last": [1],
        "no-multi-spaces": [0],
        "no-warning-comments": [1, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],
        // It's ok to use i++.
        "no-plusplus": [0],
        "jsx-quotes": [1, "prefer-double"],
        // Disable requirement to sort React component methods.
        "react/sort-comp": [0],
        // Only forbid "any" proptype, no other.
        "react/forbid-prop-types": [2, { "forbid": ["any"] }],
        // Disable requirement to drop value from boolean props.
        "react/jsx-boolean-value": [0],
        // Disable requirement to not use bind.
        "react/jsx-no-bind": [0],
        // Only use .js file extension.
        "react/jsx-filename-extension": [2, { "extensions": [".js"] }],
        "import/no-extraneous-dependencies": [2, { "devDependencies": true, "optionalDependencies": false, "peerDependencies": false }],
        "import/prefer-default-export": [0]
    },

    // http://eslint.org/docs/user-guide/configuring#specifying-environments
    "env": {
        "browser": true,
        "es6": true,
        "jest": true,
        "node": true,
        "commonjs": true
    }
};
