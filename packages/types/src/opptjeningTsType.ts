import Kodeverk from './kodeverkTsType';

export type OpptjeningAktivitet = {
  opptjeningFom: string;
  opptjeningTom: string;
  aktivitetType: Kodeverk;
  erGodkjent: boolean;
  erManueltOpprettet: boolean;
  erEndret: boolean;
  begrunnelse?: string;
  arbeidsgiver: string;
  oppdragsgiverOrg: string;
  stillingsandel: number;
  arbeidsforholdRef: string;
  erPeriodeEndret: boolean;
  privatpersonNavn?: string;
  privatpersonFødselsdato?: string;
};

type Opptjening = {
  fastsattOpptjening?: {
    opptjeningFom: string;
    opptjeningTom: string;
  };
  opptjeningAktivitetList?: OpptjeningAktivitet[];
}

export default Opptjening;
