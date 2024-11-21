import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';
import MedlemskapBekreftetPeriode from './MedlemskapBekreftetPeriode';

type BekreftLovligOppholdVurderingAp = {
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_LOVLIG_OPPHOLD>;

export default BekreftLovligOppholdVurderingAp;
