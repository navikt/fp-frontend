import { useEffect, useRef } from 'react';

import EditorJS, { type EditorConfig, type I18nConfig, type ToolConstructable } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import EditorjsList from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import { createIntl } from '@navikt/ft-utils';
import edjsHTML from 'editorjs-html';
import Undo from 'editorjs-undo';
import debounce from 'lodash.debounce';

import { notEmpty } from '@navikt/fp-utils';

import { erRedigertHtmlGyldig, konverterHtmlToEditorJsFormat, lagRedigerbartInnholdWrapper } from './redigeringsUtils';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const EDITOR_IKKE_INITIALISERT = 'Editor er ikke initialisert';

/**
 * Generisk Editor.js-hook for redigering av brev.
 *
 * @param editorHolderId   - ID til DOM-elementet som Editor.js skal monteres i
 * @param redigerbartInnhold - Pre-beregnet HTML som vises i editoren (kallende kode håndterer domenlogikk)
 * @param footer           - Valgfri readonly-seksjon som vises under editoren, men ikke er redigerbar
 * @param onAutoSave       - Callback for debounce-mellomlagring (1 sek etter siste endring)
 */
export const useBrevEditorJs = (
  editorHolderId: string,
  redigerbartInnhold: string,
  footer: string | undefined,
  onAutoSave: (html?: string) => Promise<void>,
) => {
  // Hindrar tullball grunna to renders i DEV => React.StrictMode
  const mountedRef = useRef<boolean>(false);
  const destroyedRef = useRef<boolean>(false);
  const editorJsRef = useRef<EditorJS>(null);
  const undoRef = useRef<Undo>(null);
  const currentHtmlRef = useRef('');

  // Refs for å unngå stale closures i EditorJS onChange-callback
  const onAutoSaveRef = useRef(onAutoSave);
  const footerRef = useRef(footer);

  useEffect(() => {
    onAutoSaveRef.current = onAutoSave;
  }, [onAutoSave]);

  useEffect(() => {
    footerRef.current = footer;
  }, [footer]);

  const autoSaveDebouncer = useAutoSaveDebouncer();

  const validerOgAutoLagre = async () => {
    const editor = notEmpty(editorJsRef.current, EDITOR_IKKE_INITIALISERT);
    const innhold = await editor.save();
    const html = edjsHTML().parse(innhold);

    if (currentHtmlRef.current !== html && erRedigertHtmlGyldig(html)) {
      void onAutoSaveRef.current(lagRedigerbartInnholdWrapper(html, footerRef.current));
    }
  };

  useEffect(() => {
    if (!editorJsRef.current && !mountedRef.current) {
      mountedRef.current = true;
      const editor = new EditorJS({
        minHeight: 20,
        data: konverterHtmlToEditorJsFormat(redigerbartInnhold),
        holder: editorHolderId,
        i18n: lagEditorJsI18n(),
        onReady: async () => {
          if (destroyedRef.current) {
            return;
          }
          undoRef.current = new Undo({ editor });

          // For å seinare kunne finna ut om innhaldet er endra
          const innhold = await editor.save();
          currentHtmlRef.current = edjsHTML().parse(innhold);
        },
        tools: getTools(),
        onChange: () => {
          autoSaveDebouncer(validerOgAutoLagre);
        },
      });
      // Set ref umiddelbart slik at cleanup alltid kan kalle destroy(),
      // sjølv om komponenten unmountar før onReady har fyrt
      editorJsRef.current = editor;
    }

    return () => {
      destroyedRef.current = true;
      if (editorJsRef.current?.destroy) {
        editorJsRef.current.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- editor skal kun initialiserast ein gong ved montering
  }, []);

  const tilbakestillEndringer = async (opprinneligRedigerbartInnhold: string) => {
    const editor = notEmpty(editorJsRef.current, EDITOR_IKKE_INITIALISERT);
    await editor.blocks.clear();
    await editor.blocks.render(konverterHtmlToEditorJsFormat(opprinneligRedigerbartInnhold));
    await editor.isReady;

    const innhold = await editor.save();
    currentHtmlRef.current = edjsHTML().parse(innhold);

    void onAutoSaveRef.current(undefined);
  };

  /** Kombinerer validering, endringssjekk og HTML-henting i ett editor.save()-kall */
  const hentEditorStatus = async () => {
    const editor = notEmpty(editorJsRef.current, EDITOR_IKKE_INITIALISERT);
    const innhold = await editor.save();
    const html = edjsHTML().parse(innhold);
    return {
      erGyldig: erRedigertHtmlGyldig(html),
      erEndret: currentHtmlRef.current !== html,
      redigertHtml: lagRedigerbartInnholdWrapper(html, footerRef.current),
    };
  };

  return { tilbakestillEndringer, hentEditorStatus };
};

const getTimeoutValue = () => (import.meta.env.MODE === 'test' ? 0 : 1000);

const useAutoSaveDebouncer = () => {
  const lagre = debounce((lagreFn: () => void) => {
    lagreFn();
  }, getTimeoutValue());

  // eslint-disable-next-line react-hooks/exhaustive-deps -- cleanup berre ved unmount; lagre er ny kvar render og skal ikkje vere dependency
  useEffect(() => () => lagre.cancel(), []);

  return lagre;
};

class CustomList extends EditorjsList {
  override renderSettings() {
    return super
      .renderSettings()
      .filter(item =>
        // https://github.com/editor-js/list/issues/119
        // @ts-expect-error Fiks
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        ['Unordered'].includes(item.label),
      )
      .map(item => ({
        ...item,
        label: 'Punktliste',
      }));
  }
}

//TODO (TOR) Hacka det til for å få endra til norsk tekst. Burde kunne legga til i18n-messages?
class CustomHeader extends Header {
  override renderSettings() {
    return super.renderSettings().map(item => ({
      ...item,
      // @ts-expect-error Fiks
      label: item.label === 'Heading 1' ? 'Overskrift' : 'Underoverskrift',
    }));
  }
}

// Denne blir overstyrt for å ikkje strippa vekk a-tags ved lagring.
class CustomParagraph extends Paragraph {
  static override get sanitize() {
    return {
      a: {
        href: true,
      },
      b: true,
      br: true,
    };
  }
}

const getTools = (): EditorConfig['tools'] => ({
  paragraph: {
    class: CustomParagraph as unknown as ToolConstructable,
    inlineToolbar: ['bold'],
    config: {
      preservedBlank: true,
    },
  },
  header: {
    class: CustomHeader as unknown as ToolConstructable,
    inlineToolbar: false,
    config: {
      levels: [2, 1],
      defaultLevel: 2,
      preservedBlank: true,
    },
    toolbox: [
      {
        title: intl.formatMessage({ id: 'useBrevEditorJs.Heading1' }),
        data: {
          level: 1,
        },
      },
      {
        title: intl.formatMessage({ id: 'useBrevEditorJs.Heading2' }),
        data: {
          level: 2,
        },
      },
    ],
  },
  list: {
    class: CustomList as unknown as ToolConstructable,
    inlineToolbar: ['bold'],
    config: {
      preservedBlank: true,
      maxLevel: 1,
    },
    toolbox: [
      {
        data: {
          style: 'unordered',
        },
      },
    ],
  },
});

const lagEditorJsI18n = (): I18nConfig => ({
  messages: {
    toolNames: {
      Text: intl.formatMessage({ id: 'useBrevEditorJs.Text' }),
      Heading: intl.formatMessage({ id: 'useBrevEditorJs.Heading' }),
      'Unordered List': intl.formatMessage({ id: 'useBrevEditorJs.UnorderedList' }),
    },
    tools: {
      link: {
        'Add a link': intl.formatMessage({ id: 'useBrevEditorJs.AddALink' }),
      },
      List: {
        Unordered: intl.formatMessage({ id: 'useBrevEditorJs.Unordered' }),
      },
    },
    ui: {
      popover: {
        'Nothing found': intl.formatMessage({ id: 'useBrevEditorJs.NothingFound' }),
        'Convert to': intl.formatMessage({ id: 'useBrevEditorJs.ConvertTo' }),
      },
    },
    blockTunes: {
      delete: {
        Delete: intl.formatMessage({ id: 'useBrevEditorJs.Delete' }),
        'Click to delete': intl.formatMessage({ id: 'useBrevEditorJs.KlikkForFjern' }),
      },
      moveUp: {
        'Move up': intl.formatMessage({ id: 'useBrevEditorJs.MoveUp' }),
      },
      moveDown: {
        'Move down': intl.formatMessage({ id: 'useBrevEditorJs.MoveDown' }),
      },
    },
  },
});
