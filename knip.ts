import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: [
    '.storybook/**',
    'server/**',
    'packages/types/openapi-ts.config.ts',
    'packages/types/src/los/fplos.gen.ts',
    'packages/types/src/fpsak.gen.ts',
    'packages/kodeverk/src/aksjonspunktCodes.ts',
    'apps/*/src/index.css',
  ],
  ignoreBinaries: ['docker-compose'],
  ignoreDependencies: ['glob'],
};

export default config;
