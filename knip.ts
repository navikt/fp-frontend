import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: ['.storybook/**', 'server/**', 'scripts/sentry-release.cjs'],
  ignoreBinaries: ['docker-compose'],
  ignoreDependencies: ['glob', '@sentry/cli'],
};

export default config;
