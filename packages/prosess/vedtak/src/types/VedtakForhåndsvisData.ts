import type { foreldrepenger_dokumentbestiller_DokumentMalType } from '@navikt/fp-types';

export type VedtakForhåndsvisData = {
  fritekst?: string;
  dokumentMal?: foreldrepenger_dokumentbestiller_DokumentMalType;
  tittel?: string;
  automatiskVedtaksbrev?: boolean;
};
