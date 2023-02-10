module.exports = {
  coverageDirectory: '<rootDir>/coverage/',
  coverageReporters: [
    'text',
    'lcov',
    'html',
  ],
  transform: {
    '^.+\\.(ts|tsx|js)?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  collectCoverage: false,
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx', 'less', 'css'],
  modulePathIgnorePatterns: ['<rootDir>/dist'],
  transformIgnorePatterns: ['<rootDir>.*(node_modules)(?!.*nav.*).*$'],
};
