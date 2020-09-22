import moment from 'moment';
import { DDMMYYYY_DATE_FORMAT } from '@fpsak-frontend/utils';
import { UttakKontrollerFaktaPerioder } from '@fpsak-frontend/types';

// vanlig arbeidsgivernavn (orgnr)...arbeidsforholdid
// privatperson - KLANG...(18.08.1980)
const formatDate = (dato: any) => moment(dato).format(DDMMYYYY_DATE_FORMAT);

const lagVisningsNavn = (arbeidsgiver: UttakKontrollerFaktaPerioder['arbeidsgiver']) => {
  const {
    navn, fødselsdato,
  } = arbeidsgiver;

  return `${navn.substr(0, 5)}...(${formatDate(fødselsdato)})`;
};

export default lagVisningsNavn;
