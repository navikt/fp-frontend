import { useEffect, useRef } from 'react';
import { type IntlShape, useIntl } from 'react-intl';

import EditorJS, { type EditorConfig, type I18nConfig, type ToolConstructable } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import EditorjsList from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import edjsHTML from 'editorjs-html';
// @ts-expect-error Bør laga ein typefil for denne, men funkar ikkje å legga den under @types
import Undo from 'editorjs-undo';
import debounce from 'lodash.debounce';

import { DokumentMalType, FagsakMarkeringKode } from '@navikt/fp-kodeverk';
import type { BrevOverstyring } from '@navikt/fp-types';
import { notEmpty, usePanelDataContext } from '@navikt/fp-utils';

import type { ForhandsvisData } from '../forstegang/VedtakForm';
import {
  erRedigertHtmlGyldig,
  konverterHtmlToEditorJsFormat,
  lagRedigerbartInnholdWrapper,
  utledDelerFraBrev,
  utledRedigerbartInnhold,
} from './redigeringsUtils';

const EDITOR_IKKE_INITIALISERT = 'Editor er ikke initialisert';
const SPACE_REGEX = /\s*(<(?!a\s+href)[^>]+>)\s*/g; // Fjerne mellomrom rundt html-tags (utanom framfor <a href)

export const useEditorJs = (
  editorHolderId: string,
  brevOverstyring: BrevOverstyring,
  mellomlagreOgHentPåNytt: (redigertInnhold: string | null) => Promise<void>,
  forhåndsvisBrev: (data: ForhandsvisData) => void,
) => {
  const intl = useIntl();

  const { fagsak } = usePanelDataContext();
  const harPraksisUtsettelse = !!fagsak.fagsakMarkeringer?.some(
    markering => markering.fagsakMarkering === FagsakMarkeringKode.PRAKSIS_UTSETTELSE,
  );

  //Denne blir kun brukt for å hindre tullball grunna to renders i DEV => React.StrictMode
  const refMounted = useRef<boolean>(false);

  const refEditorJs = useRef<EditorJS>(null);
  const refCurrentHtml = useRef('');

  const { opprinneligHtml, redigertHtml } = brevOverstyring;

  const { footer } = utledDelerFraBrev(opprinneligHtml);
  const redigerbartInnhold = utledRedigerbartInnhold(redigertHtml ?? opprinneligHtml, harPraksisUtsettelse);

  const lagreBrevDebouncer = useLagreBrevDebouncer();

  useEffect(() => {
    if (!refEditorJs.current && !refMounted.current) {
      refMounted.current = true;
      const editor = new EditorJS({
        minHeight: 20,
        data: konverterHtmlToEditorJsFormat(redigerbartInnhold.replace(SPACE_REGEX, '$1')),
        holder: editorHolderId,
        i18n: lagEditorJsI18n(intl),
        onReady: async () => {
          new Undo({ editor });
          refEditorJs.current = editor;

          // Dette er for å seinare kunne finna ut om innhaldet er endra
          const innhold = await editor.save();
          refCurrentHtml.current = edjsHTML().parse(innhold);
        },
        tools: getTools(intl),
        onChange: () => {
          lagreBrevDebouncer(validerOgLagre);
        },
      });
    }

    return () => {
      if (refEditorJs.current?.destroy) {
        refEditorJs.current.destroy();
      }
    };
  }, []);

  const validerOgLagre = async () => {
    const editor = notEmpty(refEditorJs.current, EDITOR_IKKE_INITIALISERT);
    const innhold = await editor.save();
    const html = edjsHTML().parse(innhold);

    if (refCurrentHtml.current !== html && erRedigertHtmlGyldig(html)) {
      const redigertTekst = harPraksisUtsettelse
        ? lagRedigerbartInnholdWrapper(html, undefined)
        : lagRedigerbartInnholdWrapper(html, footer);
      mellomlagreOgHentPåNytt(redigertTekst);
    }
  };

  const tilbakestillEndringer = async () => {
    const editor = notEmpty(refEditorJs.current, EDITOR_IKKE_INITIALISERT);
    await editor.blocks.clear();
    const opprinneligRedigerbartInnhold = utledRedigerbartInnhold(opprinneligHtml, harPraksisUtsettelse);
    await editor.blocks.render(konverterHtmlToEditorJsFormat(opprinneligRedigerbartInnhold.replace(SPACE_REGEX, '$1')));
    await editor.isReady;

    const innhold = await editor.save();
    refCurrentHtml.current = edjsHTML().parse(innhold);

    mellomlagreOgHentPåNytt(null);
  };

  const lagreEndringer = async () => {
    const editor = notEmpty(refEditorJs.current, EDITOR_IKKE_INITIALISERT);
    const innhold = await editor.save();
    const html = edjsHTML().parse(innhold);

    if (refCurrentHtml.current !== html) {
      const redigertTekst = harPraksisUtsettelse
        ? lagRedigerbartInnholdWrapper(html, undefined)
        : lagRedigerbartInnholdWrapper(html, footer);
      mellomlagreOgHentPåNytt(redigertTekst);
    }
  };

  const validerEndringer = async () => {
    const editor = notEmpty(refEditorJs.current, EDITOR_IKKE_INITIALISERT);
    const innhold = await editor.save();
    const html = edjsHTML().parse(innhold);

    return erRedigertHtmlGyldig(html);
  };

  const forhåndsvis = async () => {
    const editor = notEmpty(refEditorJs.current, EDITOR_IKKE_INITIALISERT);
    const innhold = await editor.save();
    const html = edjsHTML().parse(innhold);

    forhåndsvisBrev({
      automatiskVedtaksbrev: false,
      dokumentMal: DokumentMalType.FRITEKST_HTML,
      gjelderVedtak: true,
      fritekst: harPraksisUtsettelse ? html : lagRedigerbartInnholdWrapper(html, footer),
    });
  };

  return { tilbakestillEndringer, lagreEndringer, validerEndringer, forhåndsvis };
};

const getTimeoutValue = () => (import.meta.env.MODE === 'test' ? 0 : 1000);

const useLagreBrevDebouncer = () => {
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
        // @ts-expect-error
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
      // @ts-expect-error
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
        title: intl.formatMessage({ id: 'useEditorJs.Heading1' }),
        data: {
          level: 1,
        },
      },
      {
        title: intl.formatMessage({ id: 'useEditorJs.Heading2' }),
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
      Text: intl.formatMessage({ id: 'useEditorJs.Text' }),
      Heading: intl.formatMessage({ id: 'useEditorJs.Heading' }),
      'Unordered List': intl.formatMessage({ id: 'useEditorJs.UnorderedList' }),
    },
    tools: {
      link: {
        'Add a link': intl.formatMessage({ id: 'useEditorJs.AddALink' }),
      },
      List: {
        Unordered: intl.formatMessage({ id: 'useEditorJs.Unordered' }),
      },
    },
    ui: {
      popover: {
        'Nothing found': intl.formatMessage({ id: 'useEditorJs.NothingFound' }),
        'Convert to': intl.formatMessage({ id: 'useEditorJs.ConvertTo' }),
      },
    },
    blockTunes: {
      delete: {
        Delete: intl.formatMessage({ id: 'useEditorJs.Delete' }),
        'Click to delete': intl.formatMessage({ id: 'useEditorJs.KlikkForFjern' }),
      },
      moveUp: {
        'Move up': intl.formatMessage({ id: 'useEditorJs.MoveUp' }),
      },
      moveDown: {
        'Move down': intl.formatMessage({ id: 'useEditorJs.MoveDown' }),
      },
    },
  },
});
