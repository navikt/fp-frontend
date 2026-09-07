import type { TilbakekrevingVidereBehandling } from '@navikt/fp-types';

/**
 * Reint UI-val: «opprett tilbakekreving, men ikkje send varsel». Blir omsett til
 * TILBAKEKR_OPPRETT utan varseltekst før det blir sendt til backend.
 */
export const TILBAKEKR_OPPRETT_UTEN_VARSEL = 'TILBAKEKR_OPPRETT_UTEN_VARSEL';

export type FeilutbetalingFormValues = {
  videreBehandling: TilbakekrevingVidereBehandling | typeof TILBAKEKR_OPPRETT_UTEN_VARSEL;
  varseltekst?: string;
  begrunnelse?: string;
};

export type EtterbetalingSøkerFormValues = {
  begrunnelseEtterbetaling?: string;
};
