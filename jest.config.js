module.exports = {
  cacheDirectory: '<rootDir>/jest_cache/',
  coverageDirectory: '<rootDir>/coverage/',
  coverageReporters: [
    'text',
    'lcov',
    'html',
  ],
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx', 'less', 'css'],
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/_mocks/fileMock.js',
    '\\.(less|css)$': 'identity-obj-proxy',
  },
  roots: [
    '<rootDir>/packages/',
  ],
  setupFiles: [
    '<rootDir>/setup/setup.js',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/packages/utils-test/src/setup-test-env.ts',
    '<rootDir>/packages/utils-test/src/setup-test-env-hooks.ts',
  ],
  testMatch: ['**/?(*.)+(spec).+(ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    '^.+\\.(ts|tsx|js)?$': 'babel-jest',
    '^.+.(css|less)$': 'jest-transform-stub',
  },
  transformIgnorePatterns: ['<rootDir>.*(node_modules)(?!.*nav.*).*$'],
};
