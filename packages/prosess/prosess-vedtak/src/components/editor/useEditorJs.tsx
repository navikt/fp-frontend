import { useEffect, useRef } from 'react';

import EditorJS, { type EditorConfig, type ToolConstructable } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import edjsHTML from 'editorjs-html';
import debounce from 'lodash.debounce';

import { DokumentMalType } from '@navikt/fp-kodeverk';
import type { BrevOverstyring } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import type { ForhandsvisData } from '../forstegang/VedtakForm';
import { erRedigertHtmlGyldig, utledReadonlyInnhold, utledRedigerbartInnhold } from './redigeringsUtils';

const EDITOR_IKKE_INITIALISERT = 'Editor er ikke initialisert';
const SPACE_REGEX = /\s*(<[^>]+>)\s*/g; // Fjerne mellomrom rundt html-tags

const lagRedigerbartInnholdHtml = (redigerbartInnhold: string, readonlyFooter: string) =>
  `<div id="redigerbart-innhold" data-editable="data-editable">${redigerbartInnhold}</div><div id="readonly-innhold">${readonlyFooter}</div>`;

export const useEditorJs = (
  editorHolderId: string,
  brevOverstyring: BrevOverstyring,
  mellomlagreBrevOverstyring: (html: string | null) => Promise<void>,
  forhåndsvisBrev: (data: ForhandsvisData) => void,
) => {
  const refEditorJs = useRef<EditorJS>(null);
  const refCurrentHtml = useRef('');

  const { opprinneligHtml, redigertHtml } = brevOverstyring;

  const readonlyInnhold = utledReadonlyInnhold(opprinneligHtml);
  const redigerbartInnhold = utledRedigerbartInnhold(redigertHtml ?? opprinneligHtml);

  const lagreBrevDebouncer = useLagreBrevDebouncer();

  useEffect(() => {
    if (!refEditorJs.current) {
      const editor = new EditorJS({
        minHeight: 0,
        holder: editorHolderId,
        onReady: async () => {
          // Må ha denne sjekken for å unngå to like blocks (React.StrictMode i DEV gir to renders)
          if (refEditorJs.current === null) {
            refEditorJs.current = editor;
            await editor.blocks.renderFromHTML(redigerbartInnhold.replace(SPACE_REGEX, '$1'));
          }
        },
        tools: TOOLS,
        onChange: async () => {
          //Forhindrer at lagring blir gjort ved initialisering og etter tilbakestilling
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
      if (refEditorJs.current?.destroy) {
        refEditorJs.current.destroy();
      }
    };
  }, []);

  const tilbakestillEndringer = async () => {
    refCurrentHtml.current = '';

    const editor = notEmpty(refEditorJs.current, EDITOR_IKKE_INITIALISERT);
    await editor.blocks.clear();
    const opprinneligRedigerbartInnhold = utledRedigerbartInnhold(opprinneligHtml);
    editor.blocks.renderFromHTML(opprinneligRedigerbartInnhold.replace(SPACE_REGEX, '$1'));

    mellomlagreBrevOverstyring(null);
  };

  const lagreEndringer = async () => {
    const editor = notEmpty(refEditorJs.current, EDITOR_IKKE_INITIALISERT);
    const innhold = await editor.save();
    const html = edjsHTML().parse(innhold);

    if (refCurrentHtml.current !== html) {
      mellomlagreBrevOverstyring(lagRedigerbartInnholdHtml(html, readonlyInnhold.footer));
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
      fritekst: lagRedigerbartInnholdHtml(html, readonlyInnhold.footer),
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
