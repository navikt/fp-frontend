import Kodeverk from './kodeverkTsType';

type Aksjonspunkt = Readonly<{
  definisjon: Kodeverk;
  status: Kodeverk;
  begrunnelse?: string;
  vilkarType?: Kodeverk;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: Kodeverk[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: Kodeverk;
  kanLoses: boolean;
  erAktivt: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>

export default Aksjonspunkt;
