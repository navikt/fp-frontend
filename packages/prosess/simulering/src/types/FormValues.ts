import type { TilbakekrevingVidereBehandling } from '@navikt/fp-types';
import type { VurderFeilutbetalingAp } from '@navikt/fp-types-avklar-aksjonspunkter';

/**
 * Reint UI-val: «opprett tilbakekreving, men ikkje send varsel». Blir omsett til
 * TILBAKEKR_OPPRETT utan varseltekst før det blir sendt til backend.
 */
export const TILBAKEKR_OPPRETT_UTEN_VARSEL = 'TILBAKEKR_OPPRETT_UTEN_VARSEL';

export type FeilutbetalingFormValues = Omit<VurderFeilutbetalingAp, 'kode' | 'videreBehandling'> & {
  videreBehandling: TilbakekrevingVidereBehandling | typeof TILBAKEKR_OPPRETT_UTEN_VARSEL;
};

export type EtterbetalingSøkerFormValues = {
  begrunnelseEtterbetaling?: string;
};
