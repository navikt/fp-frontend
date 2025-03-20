import { useEffect, useRef } from 'react';

import EditorJS, { type EditorConfig, type ToolConstructable } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import edjsHTML from 'editorjs-html';
import debounce from 'lodash.debounce';

import { DokumentMalType } from '@navikt/fp-kodeverk';
import type { OverstyrtDokument } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import type { ForhandsvisData } from '../forstegang/VedtakForm';
import { erRedigertHtmlGyldig, utledReadonlyInnhold, utledRedigerbartInnhold } from './redigeringsUtils';

const EDITOR_IKKE_INITIALISERT = 'Editor er ikke initialisert';
const SPACE_REGEX = /\s*(<[^>]+>)\s*/g; // Fjerne mellomrom rundt html-tags

export const useEditorJs = (
  editorHolderId: string,
  htmlMal: OverstyrtDokument,
  forhåndsvisBrev: (data: ForhandsvisData) => void,
  lagreManueltBrev: (html: string) => Promise<void>,
) => {
  const ref = useRef<EditorJS>(null);
  const refCurrentHtml = useRef('');

  const readonlyInnhold = utledReadonlyInnhold(htmlMal.opprinneligHtml);
  const originalHtmlStreng = notEmpty(utledRedigerbartInnhold(htmlMal.redigertHtml ?? htmlMal.opprinneligHtml));

  const lagreBrevDebouncer = useLagreBrevDebouncer();

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        minHeight: 0,
        holder: editorHolderId,
        onReady: async () => {
          // Må ha denne sjekken for å unngå to køyringar grunna React.StrictMode
          if (ref.current === null) {
            ref.current = editor;
            await editor.blocks.renderFromHTML(originalHtmlStreng.replace(SPACE_REGEX, '$1'));
          }
        },
        tools: TOOLS,
        onChange: async () => {
          //Forhindrer at lagring blir gjort ved initialisering
          if (refCurrentHtml.current === '') {
            // Dette er for å seinare kunne finna ut om innhaldet er endra
            const innhold = await editor.save();
            refCurrentHtml.current = edjsHTML().parse(innhold);
          } else {
            lagreBrevDebouncer(lagreEndringer);
          }
        },
      });
    }

    return () => {
      if (ref.current?.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  const tilbakestillEndringer = async () => {
    const editor = notEmpty(ref.current, EDITOR_IKKE_INITIALISERT);
    await editor.blocks.clear();
    editor.blocks.renderFromHTML(originalHtmlStreng.replace(SPACE_REGEX, '$1'));
  };

  const lagreEndringer = async () => {
    const editor = notEmpty(ref.current, EDITOR_IKKE_INITIALISERT);
    const innhold = await editor.save();
    const html = edjsHTML().parse(innhold);

    if (refCurrentHtml.current !== html) {
      lagreManueltBrev(
        `<div id="redigerbart-innhold" data-editable="data-editable">${html}</div><div id="readonly-innhold">${readonlyInnhold.footer}</div>`,
      );
    }
  };

  const validerEndringer = async () => {
    const editor = notEmpty(ref.current, EDITOR_IKKE_INITIALISERT);
    const innhold = await editor.save();
    const html = edjsHTML().parse(innhold);

    return erRedigertHtmlGyldig(html);
  };

  const forhåndsvis = async () => {
    const editor = notEmpty(ref.current, EDITOR_IKKE_INITIALISERT);
    const innhold = await editor.save();
    const html = edjsHTML().parse(innhold);

    forhåndsvisBrev({
      automatiskVedtaksbrev: true,
      dokumentMal: DokumentMalType.FRITEKST_HTML,
      gjelderVedtak: true,
      fritekst: `<div id="redigerbart-innhold" data-editable="data-editable">${html}</div><div id="readonly-innhold">${readonlyInnhold.footer}</div>`,
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

const TOOLS: EditorConfig['tools'] = {
  paragraph: {
    class: Paragraph as unknown as ToolConstructable,
    inlineToolbar: true,
    config: {
      preservedBlank: true,
    },
  },
  header: {
    class: Header as unknown as ToolConstructable,
    inlineToolbar: true,
    config: {
      levels: [2, 1],
      defaultLevel: 1,
      preservedBlank: true,
    },
  },
  list: {
    class: List as unknown as ToolConstructable,
    inlineToolbar: true,
    config: {
      defaultStyle: 'unordered',
      preservedBlank: true,
    },
  },
};
