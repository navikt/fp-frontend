import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: ['.storybook/**', 'server/**', 'scripts/sentry-release.cjs', 'openapi-ts.config.ts','packages/types/src/apiDtoGenerert.ts'],
  ignoreBinaries: ['docker-compose'],
  ignoreDependencies: ['glob', '@sentry/cli', '@hey-api/openapi-ts'],
};

export default config;
