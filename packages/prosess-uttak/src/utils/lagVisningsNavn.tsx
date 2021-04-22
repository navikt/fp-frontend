import moment from 'moment';

import { DDMMYYYY_DATE_FORMAT } from '@fpsak-frontend/utils';
import { ArbeidsgiverOpplysninger } from '@fpsak-frontend/types';

// vanlig arbeidsgivernavn (orgnr)...arbeidsforholdid
// privatperson - KLANG...(18.08.1980)
const formatDate = (dato: string) => moment(dato).format(DDMMYYYY_DATE_FORMAT);
const getEndCharFromId = (id: any) => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

const lagVisningsNavn = (arbeidsgiverOpplysninger: ArbeidsgiverOpplysninger, eksternArbeidsforholdId?: any): string => {
  const {
    navn, fødselsdato, erPrivatPerson, identifikator,
  } = arbeidsgiverOpplysninger;

  let visningsNavn = `${navn}`;
  if (!erPrivatPerson) {
    visningsNavn = identifikator ? `${visningsNavn} (${identifikator})` : visningsNavn;
    visningsNavn = `${visningsNavn}${getEndCharFromId(eksternArbeidsforholdId)}`;
  } else {
    visningsNavn = `${navn.substr(0, 5)}...(${formatDate(fødselsdato)})`;
  }
  return visningsNavn;
};

export default lagVisningsNavn;
