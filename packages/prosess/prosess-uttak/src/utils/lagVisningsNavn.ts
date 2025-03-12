import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { ArbeidsgiverOpplysninger } from '@navikt/fp-types';

const formatDate = (dato: string) => dayjs(dato).format(DDMMYYYY_DATE_FORMAT);
const getEndCharFromId = (id: string | undefined) => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

export const lagVisningsNavn = (ago: ArbeidsgiverOpplysninger, eksternArbeidsforholdId?: string): string => {
  if (ago.erPrivatPerson) {
    return `${ago.navn.substring(0, 5)}...(${ago.fødselsdato ? formatDate(ago.fødselsdato) : '-'})`;
  } else {
    return `${ago.navn} (${ago.identifikator})${getEndCharFromId(eksternArbeidsforholdId)}`;
  }
};
