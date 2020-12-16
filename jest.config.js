module.exports = {
  roots: [
    '<rootDir>/packages/',
  ],
  testMatch: ['**/?(*.)+(spec).+(ts|tsx)'],
  transform: {
    '^.+\\.(ts|tsx|js)?$': 'babel-jest',
    '^.+.(css|less)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/_mocks/fileMock.js',
    '\\.(less|css)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx', 'less', 'css'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transformIgnorePatterns: ['<rootDir>.*(node_modules)(?!.*nav.*).*$'],
  cacheDirectory: '<rootDir>/jest_cache/',
  coverageDirectory: '<rootDir>/coverage/',
  coverageReporters: [
    'text',
    'lcov',
    'html',
  ],
  setupFiles: [
    '<rootDir>/setup/setup.js',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/packages/utils-test/src/setup-mocha.ts',
    '<rootDir>/packages/utils-test/src/setup-mocha-hook.ts',
  ],
};
