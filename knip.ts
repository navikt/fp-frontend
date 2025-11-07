import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: ['.storybook/**', 'server/**', 'openapi-ts.config.ts', 'packages/types/src/apiDtoGenerert.ts'],
  ignoreBinaries: ['docker-compose'],
  ignoreDependencies: ['glob'],
};

export default config;
