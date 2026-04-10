import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: [
    '.storybook/**',
    'server/**',
    'packages/types/src/los/fplos.gen.ts',
    'packages/types/src/fpsak.gen.ts',
    'packages/kodeverk/src/aksjonspunktCodes.ts',
  ],
  ignoreDependencies: ['glob', '@editorjs/editorjs'],
};

export default config;
