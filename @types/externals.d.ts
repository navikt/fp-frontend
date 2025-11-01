declare module '*.svg';
declare module '*.less';
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module 'editorjs-undo' {
  import type EditorJS from '@editorjs/editorjs';

  interface UndoConfig {
    editor: EditorJS;
    maxLength?: number;
    onUpdate?: () => void;
    config?: {
      debounceTimer?: number;
      shortcuts?: {
        undo?: string;
        redo?: string;
      };
    };
  }

  export default class Undo {
    constructor(options: UndoConfig);
    initialize?(initialData: unknown): void;
    // other methods can be added here as needed
  }
}
