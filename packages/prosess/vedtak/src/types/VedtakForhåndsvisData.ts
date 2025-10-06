import type { DokumentMalType } from '@navikt/fp-types';

export type VedtakForhåndsvisData = {
  fritekst?: string;
  dokumentMal?: DokumentMalType;
  tittel?: string;
  automatiskVedtaksbrev?: boolean;
};
