import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: [
    '.storybook/**',
    'server/**',
    'packages/types/openapi-ts.config.ts',
    'packages/types/src/los/fplosDtoGenerert.ts',
    'packages/types/src/apiDtoGenerert.ts',
    'packages/kodeverk/src/aksjonspunktCodes.ts',
    'apps/*/src/index.css',
  ],
  ignoreBinaries: ['docker-compose'],
  ignoreDependencies: ['glob'],
};

export default config;
