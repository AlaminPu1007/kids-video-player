module.exports = {
    root: true,
    extends: '@react-native',
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {endOfLine: 'auto', singleQuote: true, parser: 'flow'},
        ],
    },
};
