import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend, MedPåkravdeFelt } from '../AksjonspunktFraBackend';

type AvklarAktivitetsPerioderDto = AksjonspunktFraBackend<typeof AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING>;

export type OpptjeningAktivitetAp = MedPåkravdeFelt<
  NonNullable<AvklarAktivitetsPerioderDto['opptjeningsaktiviteter']>[number],
  'erGodkjent' | 'begrunnelse' | 'aktivitetType' | 'opptjeningFom' | 'opptjeningTom'
>;

export type AvklarAktivitetsPerioderAp = Omit<AvklarAktivitetsPerioderDto, 'opptjeningsaktiviteter'> & {
  opptjeningsaktiviteter?: OpptjeningAktivitetAp[];
};
