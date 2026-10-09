import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend, MedPåkravdeFelt } from '../AksjonspunktFraBackend';

type AvklarAktivitetsPerioderDto = AksjonspunktFraBackend<typeof AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING>;

// TODO: fp-sak AvklarOpptjeningAktivitetDto mangler @NotNull på erGodkjent, aktivitetType, opptjeningFom og
// opptjeningTom. Null gir exception i oppdatereren. begrunnelse er bare et frontendkrav og kan beholdes.
export type OpptjeningAktivitetAp = MedPåkravdeFelt<
  NonNullable<AvklarAktivitetsPerioderDto['opptjeningsaktiviteter']>[number],
  'erGodkjent' | 'begrunnelse' | 'aktivitetType' | 'opptjeningFom' | 'opptjeningTom'
>;

export type AvklarAktivitetsPerioderAp = Omit<AvklarAktivitetsPerioderDto, 'opptjeningsaktiviteter'> & {
  opptjeningsaktiviteter?: OpptjeningAktivitetAp[];
};
