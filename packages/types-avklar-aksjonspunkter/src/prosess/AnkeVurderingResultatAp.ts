import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AnkeVurderingResultatAp = {
  ankeVurdering: string;
  erSubsidiartRealitetsbehandles?: boolean;
  fritekstTilBrev: string;
  ankeOmgjoerArsak: string;
  ankeVurderingOmgjoer: string;
  erGodkjentAvMedunderskriver?: boolean;
  påAnketKlageBehandlingUuid?: string;
  erAnkerIkkePart?: boolean;
  erFristIkkeOverholdt?: boolean;
  erIkkeKonkret?: boolean;
  erIkkeSignert?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_VURDERING_AV_ANKE>;

export default AnkeVurderingResultatAp;
