const { defaults } = require('jest-config');

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  verbose: true,
};

module.exports = config;
