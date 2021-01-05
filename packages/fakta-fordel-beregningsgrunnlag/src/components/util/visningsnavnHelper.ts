import moment from 'moment';
import { DDMMYYYY_DATE_FORMAT } from '@fpsak-frontend/utils';
import { ArbeidsgiverOpplysningerPerId, RefusjonTilVurderingAndel } from '@fpsak-frontend/types';

const getEndCharFromId = (id) => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

const createVisningsnavnForAktivitet = (aktivitet, getKodeverknavn) => {
  if (!aktivitet.arbeidsgiverNavn) {
    return aktivitet.arbeidsforholdType ? getKodeverknavn(aktivitet.arbeidsforholdType) : '';
  }
  return aktivitet.arbeidsgiverId
    ? `${aktivitet.arbeidsgiverNavn} (${aktivitet.arbeidsgiverId})${getEndCharFromId(aktivitet.eksternArbeidsforholdId)}`
    : aktivitet.arbeidsgiverNavn;
};

export const createVisningsnavnForAktivitetRefusjon = (andel: RefusjonTilVurderingAndel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string => {
  const arbeidsgiverId = andel.arbeidsgiver.arbeidsgiverOrgnr || andel.arbeidsgiver.arbeidsgiverAktørId;
  const agOpplysning = arbeidsgiverOpplysningerPerId[arbeidsgiverId];
  if (!agOpplysning) {
    return '';
  }
  if (agOpplysning.erPrivatPerson) {
    if (agOpplysning.fødselsdato) {
      return `${agOpplysning.navn} (${moment(agOpplysning.fødselsdato).format(DDMMYYYY_DATE_FORMAT)})${getEndCharFromId(andel.eksternArbeidsforholdRef)}`;
    }
    return `${agOpplysning.navn}${getEndCharFromId(andel.eksternArbeidsforholdRef)}`;
  }
  return `${agOpplysning.navn} (${arbeidsgiverId})${getEndCharFromId(andel.eksternArbeidsforholdRef)}`;
};

export default createVisningsnavnForAktivitet;
