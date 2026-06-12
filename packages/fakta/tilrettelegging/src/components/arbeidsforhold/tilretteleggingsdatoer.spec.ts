import { createIntl, ISO_DATE_FORMAT } from '@navikt/ft-utils';

import {
  finnSisteGyldigeDatoFørTermindato,
  finnTidligsteTilretteleggingsdato,
  validerIkkeEtterSisteGyldigeDato,
  validerTidligereEnn,
} from './tilretteleggingsdatoer';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);
const TERMINDATO = '2020-11-06';
const SISTE_GYLDIGE = '2020-10-15'; // termin − 3 uker − 1 dag

describe('tilretteleggingsdatoer', () => {
  describe('finnSisteGyldigeDatoFørTermindato', () => {
    it('skal returnere dagen før tre uker før termindato', () => {
      expect(finnSisteGyldigeDatoFørTermindato(TERMINDATO).format(ISO_DATE_FORMAT)).toBe(SISTE_GYLDIGE);
    });
  });

  describe('finnTidligsteTilretteleggingsdato', () => {
    it('skal returnere siste gyldige dato uten fødselsdato', () => {
      expect(finnTidligsteTilretteleggingsdato(TERMINDATO).format(ISO_DATE_FORMAT)).toBe(SISTE_GYLDIGE);
    });

    it('skal returnere fødselsdato når den er tidligere enn siste gyldige dato', () => {
      expect(finnTidligsteTilretteleggingsdato(TERMINDATO, '2020-10-01').format(ISO_DATE_FORMAT)).toBe('2020-10-01');
    });

    it('skal returnere siste gyldige dato når fødselsdato er senere', () => {
      expect(finnTidligsteTilretteleggingsdato(TERMINDATO, '2020-11-01').format(ISO_DATE_FORMAT)).toBe(SISTE_GYLDIGE);
    });
  });

  describe('validerIkkeEtterSisteGyldigeDato', () => {
    const valider = validerIkkeEtterSisteGyldigeDato(intl, finnSisteGyldigeDatoFørTermindato(TERMINDATO));

    it('skal gi feilmelding når dato er etter siste gyldige dato', () => {
      expect(valider('2020-10-16')).toBe('Dato kan ikke være senere enn tre uker før termindato');
    });

    it('skal godta dato lik siste gyldige dato', () => {
      expect(valider(SISTE_GYLDIGE)).toBeNull();
    });
  });

  describe('validerTidligereEnn', () => {
    const valider = validerTidligereEnn(intl, finnSisteGyldigeDatoFørTermindato(TERMINDATO));

    it('skal gi feilmelding med dato når fom er etter tidligste tidspunkt', () => {
      expect(valider('2020-10-16')).toBe('Tilrettelegging fra og med må være tidligere enn 15.10.2020');
    });

    it('skal godta dato lik tidligste tidspunkt', () => {
      expect(valider(SISTE_GYLDIGE)).toBeNull();
    });

    it('skal godta ugyldig dato', () => {
      expect(valider('ugyldig')).toBeNull();
    });
  });
});
