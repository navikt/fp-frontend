import { useEffect, useRef } from 'react';
import { type IntlShape } from 'react-intl';

import EditorJS, { type EditorConfig, type I18nConfig, type ToolConstructable } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import EditorjsList from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import edjsHTML from 'editorjs-html';
import Undo from 'editorjs-undo';
import debounce from 'lodash.debounce';
import { createIntl } from '@navikt/ft-utils';

import { notEmpty } from '@navikt/fp-utils';

import messages from '../i18n/nb_NO.json';
import { erRedigertHtmlGyldig, konverterHtmlToEditorJsFormat, lagRedigerbartInnholdWrapper } from './redigeringsUtils';

const intl = createIntl(messages);

const EDITOR_IKKE_INITIALISERT = 'Editor er ikke initialisert';

interface Options {
  onAutoSave?: (html: string | null) => Promise<void>;
}

/**
 * Generisk Editor.js-hook for redigering av brev.
 *
 * @param editorHolderId   - ID til DOM-elementet som Editor.js skal monteres i
 * @param redigerbartInnhold - Pre-beregnet HTML som vises i editoren (kallende kode håndterer domenlogikk)
 * @param footer           - Valgfri readonly-seksjon som vises under editoren, men ikke er redigerbar
 * @param options.onAutoSave - Valgfri callback for debounce-mellomlagring (1 sek etter siste endring)
 */
export const useBrevEditorJs = (
  editorHolderId: string,
  redigerbartInnhold: string,
  footer: string | undefined,
  options?: Options,
) => {
  const { onAutoSave } = options ?? {};

  // Hindrar tullball grunna to renders i DEV => React.StrictMode
  const refMounted = useRef<boolean>(false);
  const refEditorJs = useRef<EditorJS>(null);
  const refCurrentHtml = useRef('');

  const autoSaveDebouncer = useAutoSaveDebouncer();

  const validerOgAutoLagre = async () => {
    if (!onAutoSave) return;
    const editor = notEmpty(refEditorJs.current, EDITOR_IKKE_INITIALISERT);
    const innhold = await editor.save();
    const html = edjsHTML().parse(innhold);

    if (refCurrentHtml.current !== html && erRedigertHtmlGyldig(html)) {
      void onAutoSave(lagRedigerbartInnholdWrapper(html, footer));
    }
  };

  useEffect(() => {
    if (!refEditorJs.current && !refMounted.current) {
      refMounted.current = true;
      const editor = new EditorJS({
        minHeight: 20,
        data: konverterHtmlToEditorJsFormat(redigerbartInnhold),
        holder: editorHolderId,
        i18n: lagEditorJsI18n(intl),
        onReady: async () => {
          new Undo({ editor });
          refEditorJs.current = editor;

          // For å seinare kunne finna ut om innhaldet er endra
          const innhold = await editor.save();
          refCurrentHtml.current = edjsHTML().parse(innhold);
        },
        tools: getTools(intl),
        onChange: onAutoSave
          ? () => {
              autoSaveDebouncer(validerOgAutoLagre);
            }
          : undefined,
      });
    }

    return () => {
      if (refEditorJs.current?.destroy) {
        refEditorJs.current.destroy();
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const tilbakestillEndringer = async (opprinneligRedigerbartInnhold: string) => {
    const editor = notEmpty(refEditorJs.current, EDITOR_IKKE_INITIALISERT);
    await editor.blocks.clear();
    await editor.blocks.render(konverterHtmlToEditorJsFormat(opprinneligRedigerbartInnhold));
    await editor.isReady;

    const innhold = await editor.save();
    refCurrentHtml.current = edjsHTML().parse(innhold);

    if (onAutoSave) {
      void onAutoSave(null);
    }
  };

  const validerEndringer = async () => {
    const editor = notEmpty(refEditorJs.current, EDITOR_IKKE_INITIALISERT);
    const innhold = await editor.save();
    const html = edjsHTML().parse(innhold);
    return erRedigertHtmlGyldig(html);
  };

  const hentRedigertHtml = async (): Promise<string> => {
    const editor = notEmpty(refEditorJs.current, EDITOR_IKKE_INITIALISERT);
    const innhold = await editor.save();
    const html = edjsHTML().parse(innhold);
    return lagRedigerbartInnholdWrapper(html, footer);
  };

  const harEndringer = async (): Promise<boolean> => {
    const editor = notEmpty(refEditorJs.current, EDITOR_IKKE_INITIALISERT);
    const innhold = await editor.save();
    const html = edjsHTML().parse(innhold);
    return refCurrentHtml.current !== html;
  };

  /** Kombinerer validering, endringssjekk og HTML-henting i ett editor.save()-kall */
  const hentEditorStatus = async () => {
    const editor = notEmpty(refEditorJs.current, EDITOR_IKKE_INITIALISERT);
    const innhold = await editor.save();
    const html = edjsHTML().parse(innhold);
    return {
      erGyldig: erRedigertHtmlGyldig(html),
      erEndret: refCurrentHtml.current !== html,
      redigertHtml: lagRedigerbartInnholdWrapper(html, footer),
    };
  };

  return { tilbakestillEndringer, validerEndringer, hentRedigertHtml, harEndringer, hentEditorStatus };
};

const getTimeoutValue = () => (import.meta.env.MODE === 'test' ? 0 : 1000);

const useAutoSaveDebouncer = () => {
  const lagre = debounce((lagreFn: () => void) => {
    lagreFn();
  }, getTimeoutValue());

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

const getTools = (intl: IntlShape): EditorConfig['tools'] => ({
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

const lagEditorJsI18n = (intl: IntlShape): I18nConfig => ({
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
