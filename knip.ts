import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: [
    '.storybook/**',
    'server/**',
    'packages/types/src/los/fplos.gen.ts',
    'packages/types/src/fpsak.gen.ts',
  ],
  workspaces: {
    '.': {
      // Typen brukes i @types/externals.d.ts, men avhengigheten ligger i brev-editor
      ignoreDependencies: ['@editorjs/editorjs'],
    },
  },
};

export default config;
