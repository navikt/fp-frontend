import { OpptjeningAktivitet } from '@fpsak-frontend/types';

export type NyOpptjeningAktivitet = {
  id: number;
  erGodkjent: boolean;
  erManueltOpprettet: boolean;
  erEndret?: boolean;
  erPeriodeEndret?: boolean;
  privatpersonNavn?: string;
  privatpersonFødselsdato?: string;
  arbeidsgiver?: string;
  oppdragsgiverOrg?: string;
}

type CustomOpptjeningAktivitet = OpptjeningAktivitet & {
  id: number;
  originalFom: string;
  originalTom: string;
};

export default CustomOpptjeningAktivitet;
