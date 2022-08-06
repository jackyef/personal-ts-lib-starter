const prettierConfig = require('./.prettierrc.cjs');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    jsx: true,
    useJSXTextNode: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',

    // Disabling eslint-plugin-next for now as we are seeing errors with it
    // TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received undefined
    // 'plugin:@next/next/recommended',
    'eslint-config-prettier',
  ],
  plugins: ['@typescript-eslint', 'eslint-plugin-prettier'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ordered-imports': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // import rules
    'import/prefer-default-export': 'off',
    'import/no-named-as-default-member': 'off',
    'import/order': [
      'error',
      {
        // Imports are grouped as follows:
        groups: [
          // 1: built-in node modules (fs, path)
          'builtin',
          // 2: dependencies in node_modules
          'external',
          // 3: internal aliases. See pathGroups below.
          'internal',
          // 4. relative imports
          'parent',
          // 5. relative imports in the same directory
          'sibling',
        ],
        pathGroups: [
          {
            // @/utils imports come after internal
            pattern: '@/utils/**',
            group: 'internal',
            position: 'after',
          },
        ],
        // Required for pathGroups to work.
        pathGroupsExcludedImportTypes: ['builtin'],
        // Add an empty line between import groups.
        'newlines-between': 'always',
      },
    ],

    // prettier rules
    'prettier/prettier': ['error', prettierConfig],
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: './',
      },
    },
  },
};
