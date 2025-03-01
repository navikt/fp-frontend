import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import moment from 'moment';

import type { ArbeidsgiverOpplysninger } from '@navikt/fp-types';

// vanlig arbeidsgivernavn (orgnr)...arbeidsforholdid
// privatperson - KLANG...(18.08.1980)
const formatDate = (dato: string) => moment(dato).format(DDMMYYYY_DATE_FORMAT);
const getEndCharFromId = (id: any) => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

export const lagVisningsNavn = (
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysninger,
  eksternArbeidsforholdId?: any,
): string => {
  const { navn, fødselsdato, erPrivatPerson, identifikator } = arbeidsgiverOpplysninger;

  let visningsNavn = `${navn}`;
  if (!erPrivatPerson) {
    visningsNavn = identifikator ? `${visningsNavn} (${identifikator})` : visningsNavn;
    visningsNavn = `${visningsNavn}${getEndCharFromId(eksternArbeidsforholdId)}`;
  } else {
    visningsNavn = `${navn.substring(0, 5)}...(${fødselsdato ? formatDate(fødselsdato) : '-'})`;
  }
  return visningsNavn;
};
