import { useEffect, useRef } from 'react';
import { type IntlShape, useIntl } from 'react-intl';

import EditorJS, { type EditorConfig, type I18nConfig, type ToolConstructable } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import EditorjsList from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import edjsHTML from 'editorjs-html';
import Undo from 'editorjs-undo';

import { notEmpty } from '@navikt/fp-utils';

import {
  erRedigertHtmlGyldig,
  konverterHtmlToEditorJsFormat,
  lagRedigerbartInnholdWrapper,
  utledDelerFraBrev,
  utledRedigerbartInnhold,
} from './redigeringsUtils';

const EDITOR_IKKE_INITIALISERT = 'Editor er ikke initialisert';

export const useVarselEditorJs = (
  editorHolderId: string,
  opprinneligHtml: string,
  redigertHtml: string | null,
) => {
  const intl = useIntl();
  const refMounted = useRef<boolean>(false);
  const refEditorJs = useRef<EditorJS>(null);

  const redigerbartInnhold = utledRedigerbartInnhold(redigertHtml ?? opprinneligHtml, false);
  const { footer } = utledDelerFraBrev(opprinneligHtml);

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
        },
        tools: getTools(intl),
      });
    }

    return () => {
      if (refEditorJs.current?.destroy) {
        refEditorJs.current.destroy();
      }
    };
  }, []);

  const tilbakestillEndringer = async () => {
    const editor = notEmpty(refEditorJs.current, EDITOR_IKKE_INITIALISERT);
    await editor.blocks.clear();
    const opprinneligRedigerbartInnhold = utledRedigerbartInnhold(opprinneligHtml, false);
    await editor.blocks.render(konverterHtmlToEditorJsFormat(opprinneligRedigerbartInnhold));
    await editor.isReady;
  };

  const hentRedigertHtml = async (): Promise<string> => {
    const editor = notEmpty(refEditorJs.current, EDITOR_IKKE_INITIALISERT);
    const innhold = await editor.save();
    const html = edjsHTML().parse(innhold);
    return lagRedigerbartInnholdWrapper(html, footer);
  };

  const validerEndringer = async () => {
    const editor = notEmpty(refEditorJs.current, EDITOR_IKKE_INITIALISERT);
    const innhold = await editor.save();
    const html = edjsHTML().parse(innhold);
    return erRedigertHtmlGyldig(html);
  };

  return { tilbakestillEndringer, hentRedigertHtml, validerEndringer };
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
        title: intl.formatMessage({ id: 'useVarselEditorJs.Heading1' }),
        data: {
          level: 1,
        },
      },
      {
        title: intl.formatMessage({ id: 'useVarselEditorJs.Heading2' }),
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
      Text: intl.formatMessage({ id: 'useVarselEditorJs.Text' }),
      Heading: intl.formatMessage({ id: 'useVarselEditorJs.Heading' }),
      'Unordered List': intl.formatMessage({ id: 'useVarselEditorJs.UnorderedList' }),
    },
    tools: {
      link: {
        'Add a link': intl.formatMessage({ id: 'useVarselEditorJs.AddALink' }),
      },
      List: {
        Unordered: intl.formatMessage({ id: 'useVarselEditorJs.Unordered' }),
      },
    },
    ui: {
      popover: {
        'Nothing found': intl.formatMessage({ id: 'useVarselEditorJs.NothingFound' }),
        'Convert to': intl.formatMessage({ id: 'useVarselEditorJs.ConvertTo' }),
      },
    },
    blockTunes: {
      delete: {
        Delete: intl.formatMessage({ id: 'useVarselEditorJs.Delete' }),
        'Click to delete': intl.formatMessage({ id: 'useVarselEditorJs.KlikkForFjern' }),
      },
      moveUp: {
        'Move up': intl.formatMessage({ id: 'useVarselEditorJs.MoveUp' }),
      },
      moveDown: {
        'Move down': intl.formatMessage({ id: 'useVarselEditorJs.MoveDown' }),
      },
    },
  },
});
