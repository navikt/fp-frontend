import { DDMMYYYY_DATE_FORMAT } from '@fpsak-frontend/utils';
import { ArbeidsgiverOpplysninger } from '@fpsak-frontend/types/src/arbeidsgiverOpplysningerTsType';
import moment from 'moment';

const getEndCharFromId = (id) => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

export const createVisningsnavnForAktivitet = (arbeidsgiverOpplysning: ArbeidsgiverOpplysninger, eksternArbeidsforholdId: string | undefined): string => {
  const {
    navn, fødselsdato, erPrivatPerson, identifikator,
  } = arbeidsgiverOpplysning;
  if (erPrivatPerson) {
    return fødselsdato
      ? `${navn} (${moment(fødselsdato).format(DDMMYYYY_DATE_FORMAT)})${getEndCharFromId(eksternArbeidsforholdId)}`
      : navn;
  }
  return identifikator
    ? `${navn} (${identifikator})${getEndCharFromId(eksternArbeidsforholdId)}`
    : navn;
};

export const sortArbeidsforholdList = (arbeidsforhold) => {
  const copy = arbeidsforhold.slice(0);
  copy.sort((a, b) => new Date(a.arbeidsforhold.startdato).getTime() - new Date(b.arbeidsforhold.startdato).getTime());
  return copy;
};

const arbeidsforholdEksistererIListen = (arbeidsforhold, arbeidsgiverList) => {
  if (arbeidsforhold.arbeidsforholdId === null) {
    return arbeidsgiverList.map(({ arbeidsgiverId }) => (arbeidsgiverId)).includes(arbeidsforhold.arbeidsgiverId);
  }
  return arbeidsgiverList.map(({ arbeidsforholdId }) => (arbeidsforholdId)).includes(arbeidsforhold.arbeidsforholdId);
};

export const getUniqueListOfArbeidsforholdFields = (fields) => {
  const arbeidsgiverList = [];
  if (fields === undefined) {
    return arbeidsgiverList;
  }
  fields.forEach((id, index) => {
    const field = fields.get(index);
    if (field.arbeidsgiverNavn !== null && !arbeidsforholdEksistererIListen(field, arbeidsgiverList)) {
      const arbeidsforholdObject = {
        andelsnr: field.andelsnr,
        arbeidsforholdId: field.arbeidsforholdId,
        arbeidsgiverId: field.arbeidsgiverId,
        arbeidsgiverIdVisning: field.arbeidsgiverIdVisning,
        arbeidsgiverNavn: field.arbeidsgiverNavn,
        arbeidsperiodeFom: field.arbeidsperiodeFom,
        arbeidsperiodeTom: field.arbeidsperiodeTom,
      };
      arbeidsgiverList.push(arbeidsforholdObject);
    }
  });
  return arbeidsgiverList;
};
