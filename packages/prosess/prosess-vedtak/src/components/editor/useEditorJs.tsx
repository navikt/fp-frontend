import { useEffect, useRef } from 'react';

import EditorJS, { type EditorConfig, type ToolConstructable } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import edjsHTML from 'editorjs-html';
import debounce from 'lodash.debounce';

import { DokumentMalType } from '@navikt/fp-kodeverk';

import type { ForhandsvisData } from '../forstegang/VedtakForm';
import { erRedigertHtmlGyldig, utledRedigerbartInnhold } from './redigeringsUtils';

export const useEditorJs = (
  editorHolderId: string,
  htmlMal: string,
  forhåndsvisBrev: (data: ForhandsvisData) => void,
  lagreManueltBrev: (html: string) => Promise<void>,
) => {
  const ref = useRef<EditorJS>(null);
  const refInitialRender = useRef<boolean>(true);

  const lagreBrev = useLagreBrev();

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: editorHolderId,
        onReady: async () => {
          ref.current = editor;

          const originalHtmlStreng = utledRedigerbartInnhold(htmlMal);
          if (originalHtmlStreng) {
            await editor.blocks.renderFromHTML(originalHtmlStreng);
          }
        },
        tools: TOOLS,
        onChange: async () => {
          const lagreWrapper = async () => {
            const innhold = await editor.saver.save();
            const html = edjsHTML().parse(innhold);
            lagreManueltBrev(html);
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
      const originalHtmlStreng = utledRedigerbartInnhold(htmlMal);
      if (originalHtmlStreng) {
        ref.current.blocks.renderFromHTML(originalHtmlStreng);
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
        lagreManueltBrev(html);
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
