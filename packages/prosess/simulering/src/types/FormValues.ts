import type { TilbakekrevingVidereBehandling } from '@navikt/fp-types';

export type FeilutbetalingFormValues = {
  videreBehandling: TilbakekrevingVidereBehandling;
  varseltekst?: string;
  begrunnelse?: string;
};

export type EtterbetalingSøkerFormValues = {
  begrunnelseEtterbetaling?: string;
};
