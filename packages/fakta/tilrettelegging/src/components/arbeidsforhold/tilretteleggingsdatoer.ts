import { type IntlShape } from 'react-intl';

import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs, { type Dayjs } from 'dayjs';
import minMax from 'dayjs/plugin/minMax';

dayjs.extend(minMax);

// Siste gyldige dato for en tilrettelegging eller et opphold er dagen før tre uker før termindato.
export const finnSisteGyldigeDatoFørTermindato = (termindato: string): Dayjs =>
  dayjs(termindato).subtract(3, 'weeks').subtract(1, 'day');

// Tilretteleggingen kan senest starte siste gyldige dato før termin, men ikke etter en eventuell fødsel.
export const finnTidligsteTilretteleggingsdato = (termindato: string, fødselsdato?: string): Dayjs => {
  const sisteGyldigeDato = finnSisteGyldigeDatoFørTermindato(termindato);
  return fødselsdato ? dayjs.min(sisteGyldigeDato, dayjs(fødselsdato)) : sisteGyldigeDato;
};

export const validerIkkeEtterSisteGyldigeDato =
  (intl: IntlShape, sisteGyldigeDato: Dayjs) =>
  (dato?: string): string | null =>
    dayjs(dato).isAfter(sisteGyldigeDato)
      ? intl.formatMessage({ id: 'TilretteleggingOgOppholdPerioderPanel.EtterTermindato' })
      : null;

export const validerTidligereEnn =
  (intl: IntlShape, tidligsteTidspunkt: Dayjs) =>
  (tilretteleggingBehovFom: string): string | null => {
    const tilretteleggingFomDato = dayjs(tilretteleggingBehovFom);

    if (tilretteleggingFomDato.isValid() && tilretteleggingFomDato.isAfter(tidligsteTidspunkt)) {
      return intl.formatMessage(
        { id: 'ArbeidsforholdPanel.TilretteleggingTidligereEnn' },
        { dato: tidligsteTidspunkt.format(DDMMYYYY_DATE_FORMAT) },
      );
    }
    return null;
  };
