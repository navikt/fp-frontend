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

  // eslint-disable-next-line import/no-default-export
  export default class Undo {
    constructor(options: UndoConfig);
    initialize?(initialData: unknown): void;
    // other methods can be added here as needed
  }
}
