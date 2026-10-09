import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend, MedPåkravdeFelt } from '../AksjonspunktFraBackend';

type FatterVedtakDto = AksjonspunktFraBackend<typeof AksjonspunktKode.FATTER_VEDTAK>;

// TODO: fp-sak AksjonspunktGodkjenningDto har godkjent som primitiv boolean uten @NotNull.
// Manglende verdi blir stille false. Fjern MedPåkravdeFelt når det er fikset.
type AksjonspunktGodkjenning = MedPåkravdeFelt<
  NonNullable<FatterVedtakDto['aksjonspunktGodkjenningDtos']>[number],
  'godkjent'
>;

// '5005' er FATTER_VEDTAK i fptilbake, som tar imot samme form.
export type FatterVedtakAp = Omit<FatterVedtakDto, 'kode' | 'aksjonspunktGodkjenningDtos'> & {
  kode: typeof AksjonspunktKode.FATTER_VEDTAK | '5005';
  aksjonspunktGodkjenningDtos: AksjonspunktGodkjenning[];
};
