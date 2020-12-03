import { ArbeidsgiverOpplysninger } from '@fpsak-frontend/types';

const getEndCharFromId = (id: string | undefined): string => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

const createVisningsnavnForAktivitet = (arbeidsgiverOpplysninger: ArbeidsgiverOpplysninger, eksternReferanse: string | undefined): string => {
  const {
    navn, fødselsdato, erPrivatPerson, identifikator,
  } = arbeidsgiverOpplysninger;
  if (erPrivatPerson) {
    return fødselsdato
      ? `${navn} (${fødselsdato})${getEndCharFromId(eksternReferanse)}`
      : navn;
  }
  return identifikator
    ? `${navn} (${identifikator})${getEndCharFromId(eksternReferanse)}`
    : navn;
};

export default createVisningsnavnForAktivitet;
