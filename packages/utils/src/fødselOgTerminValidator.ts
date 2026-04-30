import {
  dateAfterOrEqual,
  dateBeforeOrEqual,
  dateBeforeOrEqualToToday,
  maxValue,
  minValue,
} from '@navikt/ft-form-validators';
import { createIntl, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

export const validateMinAntallBarn = minValue(1);
export const validateMaxAntallBarn = maxValue(9);

export const minFodselsdato = () => dayjs().subtract(8, 'year');
export const maxFodselsdato = () => dayjs();

export const minTerminbekreftelseDato = () => dayjs().subtract(8, 'year');
export const maxTerminbekreftelseDato = () => dayjs().subtract(0, 'year');

export const minTermindato = () => dayjs().subtract(8, 'year');
export const maxTermindato = () => dayjs().add(9, 'months');

export const terminBekreftelseBeforeTodayOrTermindato = (
  termindato: string | undefined,
  terminbekreftelseDato: string,
) => {
  const termin = termindato ? dayjs(termindato, ISO_DATE_FORMAT) : undefined;
  const today = dayjs().startOf('day');
  const grenseDato = termin?.isValid() && termin.isBefore(today) ? termin : today;

  return dateBeforeOrEqual(grenseDato)(terminbekreftelseDato);
};

export const dødsdatoAfterOrEqualFødselsdato = (fødselsdato: string | undefined, dødsdato: string) => {
  const fødsel = fødselsdato ? dayjs(fødselsdato, ISO_DATE_FORMAT) : minFodselsdato();

  return dateAfterOrEqual(fødsel)(dødsdato) || dateBeforeOrEqualToToday(dødsdato);
};

export const terminErRundtFodselsdato = (fodselsdato: string | undefined, termindato: string | undefined) => {
  const fodsels = fodselsdato ? dayjs(fodselsdato, ISO_DATE_FORMAT) : undefined;
  const termin = dayjs(termindato, ISO_DATE_FORMAT);

  if (!fodsels?.isValid() || !termin.isValid()) {
    return null;
  }
  const tidligsteTermin = fodsels.subtract(3, 'weeks').subtract(1, 'day');
  const senesteTermin = fodsels.add(5, 'months').add(1, 'day');

  if (tidligsteTermin.isSameOrAfter(termin)) return intl.formatMessage({ id: 'ValidationMessage.ForTidligTermin' });
  if (senesteTermin.isSameOrBefore(termin)) return intl.formatMessage({ id: 'ValidationMessage.ForSenTermin' });
  return null;
};

// Speiler backend-validering i fpsak (FaktaFødselTjeneste / FamilieHendelseTjeneste.intervallForTermindato):
// Fødselsdato må ligge i intervallet [termindato - 19 uker, termindato + 6 uker].
// Hvis denne grensen brytes kaster backend FunksjonellException FP-076346 «For stort avvik termin/fødsel».
const MAKS_UKER_FØDSEL_FØR_TERMIN = 19;
const MAKS_UKER_FØDSEL_ETTER_TERMIN = 6;

export const fødselErINærhetenAvTermin = (fødselsdato: string | undefined, termindato: string | undefined) => {
  const fødsel = fødselsdato ? dayjs(fødselsdato, ISO_DATE_FORMAT) : undefined;
  const termin = termindato ? dayjs(termindato, ISO_DATE_FORMAT) : undefined;

  if (!fødsel?.isValid() || !termin?.isValid()) {
    return null;
  }

  const tidligsteFødsel = termin.subtract(MAKS_UKER_FØDSEL_FØR_TERMIN, 'weeks');
  const senesteFødsel = termin.add(MAKS_UKER_FØDSEL_ETTER_TERMIN, 'weeks');

  if (fødsel.isBefore(tidligsteFødsel) || fødsel.isAfter(senesteFødsel)) {
    return intl.formatMessage({ id: 'ValidationMessage.ForStortAvvikTerminFødsel' });
  }
  return null;
};
