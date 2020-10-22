import KodeverkMedNavn from './kodeverkMedNavnTsType';
import Kodeverk from './kodeverkTsType';

// eslint-disable-next-line no-shadow
enum TypeEndring {
  AVKLART = 'AVKLART',
  ENDRET = 'ENDRET',
  SLETTET = 'SLETTET',
  LAGT_TIL = 'LAGT_TIL',
}

type TotrinnskontrollAksjonspunkt = Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter: {
    aktivitetType: string;
    erEndring: boolean;
    arbeidsgiverNavn: string;
    orgnr: string;
    godkjent: boolean;
    privatpersonFødselsdato: string;
  }[];
  beregningDto: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: Kodeverk[];
  };
  besluttersBegrunnelse: string;
  totrinnskontrollGodkjent: boolean;
  vurderPaNyttArsaker: KodeverkMedNavn[];
  uttakPerioder: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
  }[];
  arbeidforholdDtos: {
    navn: string;
    organisasjonsnummer: string;
    arbeidsforholdId: string;
    arbeidsforholdHandlingType: Kodeverk;
    brukPermisjon: boolean;
  }[];
}>

export default TotrinnskontrollAksjonspunkt;
