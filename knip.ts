import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: ['.storybook/**', 'server/**', 'scripts/sentry-release.cjs'],
  ignoreBinaries: ['docker-compose'],
  ignoreDependencies: ['glob'],
};

export default config;
