import { useEffect, useRef } from 'react';

import EditorJS, { type EditorConfig, type ToolConstructable } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import edjsHTML from 'editorjs-html';
import debounce from 'lodash.debounce';

import { DokumentMalType } from '@navikt/fp-kodeverk';
import type { OverstyrtDokument } from '@navikt/fp-types';

import type { ForhandsvisData } from '../forstegang/VedtakForm';
import { erRedigertHtmlGyldig, utledReadonlyInnhold, utledRedigerbartInnhold } from './redigeringsUtils';

const SPACE_REGEX = /\s*(<[^>]+>)\s*/g; // Fjerne mellomrom rundt html-tags

export const useEditorJs = (
  editorHolderId: string,
  htmlMal: OverstyrtDokument,
  forhåndsvisBrev: (data: ForhandsvisData) => void,
  lagreManueltBrev: (html: string) => Promise<void>,
) => {
  const ref = useRef<EditorJS>(null);
  const refInitialRender = useRef<boolean>(true);

  const readonlyInnhold = utledReadonlyInnhold(htmlMal.opprinneligHtml);

  const lagreBrev = useLagreBrev();

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        minHeight: 0,
        holder: editorHolderId,
        onReady: async () => {
          ref.current = editor;

          const originalHtmlStreng = utledRedigerbartInnhold(htmlMal.redigertHtml ?? htmlMal.opprinneligHtml);
          if (originalHtmlStreng) {
            await editor.blocks.renderFromHTML(originalHtmlStreng.replace(SPACE_REGEX, '$1'));
          }
        },
        tools: TOOLS,
        onChange: async () => {
          const lagreWrapper = async () => {
            const innhold = await editor.saver.save();
            const html = edjsHTML().parse(innhold);
            lagreManueltBrev(
              `<div id="redigerbart-innhold" data-editable="data-editable">${html}</div><div id="readonly-innhold">${readonlyInnhold.footer}</div>`,
            );
          };

          //Forhindrer at lagring blir gjort ved initialisering
          if (refInitialRender.current) {
            refInitialRender.current = false;
          } else {
            lagreBrev(lagreWrapper);
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

  const tilbakestillEndringer = () => {
    if (ref.current) {
      const originalHtmlStreng = utledRedigerbartInnhold(htmlMal.redigertHtml ?? htmlMal.opprinneligHtml);
      if (originalHtmlStreng) {
        ref.current.blocks.renderFromHTML(originalHtmlStreng.replace(SPACE_REGEX, '$1'));
        //FIXME Sjekk om onChange blir trigget
      }
    } else {
      throw new Error('Editor er ikke initialisert');
    }
  };

  const lagreEndringer = () => {
    lagreBrev(async () => {
      if (ref.current) {
        const innhold = await ref.current.save();
        const html = edjsHTML().parse(innhold);
        lagreManueltBrev(
          `<div id="redigerbart-innhold" data-editable="data-editable">${html}</div><div id="readonly-innhold">${readonlyInnhold.footer}</div>`,
        );
      } else {
        throw new Error('Editor er ikke initialisert');
      }
    });
  };

  const validerEndringer = async () => {
    if (ref.current) {
      const innhold = await ref.current.save();
      const html = edjsHTML().parse(innhold);
      return erRedigertHtmlGyldig(html);
    } else {
      throw new Error('Editor er ikke initialisert');
    }
  };

  const forhåndsvis = async () => {
    if (ref.current) {
      const innhold = await ref.current.save();
      const html = edjsHTML().parse(innhold);
      forhåndsvisBrev({
        automatiskVedtaksbrev: true,
        dokumentMal: DokumentMalType.FRITEKST_HTML,
        gjelderVedtak: true,
        fritekst: html,
      });
    } else {
      throw new Error('Editor er ikke initialisert');
    }
  };

  return { tilbakestillEndringer, lagreEndringer, validerEndringer, forhåndsvis };
};

const getTimeoutValue = () => (import.meta.env.MODE === 'test' ? 0 : 5000);

const useLagreBrev = () => {
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
