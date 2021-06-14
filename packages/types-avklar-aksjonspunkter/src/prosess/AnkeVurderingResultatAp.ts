import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Kodeverk } from '@fpsak-frontend/types';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AnkeVurderingResultatAp = {
  ankeVurdering: Kodeverk;
  erSubsidiartRealitetsbehandles?: boolean;
  fritekstTilBrev: Kodeverk | string;
  ankeOmgjoerArsak: Kodeverk | string;
  ankeVurderingOmgjoer: Kodeverk | string;
  erGodkjentAvMedunderskriver?: boolean;
  påAnketKlageBehandlingUuid?: string;
  erAnkerIkkePart?: boolean;
  erFristIkkeOverholdt?: boolean;
  erIkkeKonkret?: boolean;
  erIkkeSignert?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_VURDERING_AV_ANKE>;

export default AnkeVurderingResultatAp;
