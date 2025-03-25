import { dateFormat } from '@navikt/ft-utils';

import type { ArbeidsgiverOpplysninger } from '@navikt/fp-types';

const getEndCharFromId = (id: string | undefined) => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

export const lagVisningsNavn = (ago: ArbeidsgiverOpplysninger, eksternArbeidsforholdId?: string): string => {
  if (ago.erPrivatPerson) {
    return `${ago.navn.substring(0, 5)}...(${ago.fødselsdato ? dateFormat(ago.fødselsdato) : '-'})`;
  } else {
    return `${ago.navn} (${ago.identifikator})${getEndCharFromId(eksternArbeidsforholdId)}`;
  }
};
