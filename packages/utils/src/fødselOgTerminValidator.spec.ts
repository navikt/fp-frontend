import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import { expect } from 'vitest';

import {
  dødsdatoAfterOrEqualFødselsdato,
  terminBekreftelseBeforeTodayOrTermindato,
  terminErRundtFodselsdato,
} from './fødselOgTerminValidator';

const terminFremtidig = dayjs().add(5, 'weeks').format(ISO_DATE_FORMAT);
const terminPassert = dayjs().subtract(5, 'weeks').format(ISO_DATE_FORMAT);

const terminbekreftelseFremtid = dayjs().add(7, 'weeks').format(ISO_DATE_FORMAT);
const terminbekreftelse7ukerPassert = dayjs().subtract(7, 'weeks').format(ISO_DATE_FORMAT);
const terminbekreftelse2ukerPassert = dayjs().subtract(2, 'weeks').format(ISO_DATE_FORMAT);

const dagensDato = dayjs().format(ISO_DATE_FORMAT);

describe('fødselOgTerminValidator', () => {
  describe('terminBekreftelseBeforeTodayOrTermindato', () => {
    it('skal godta passert terminbekreftelse før termin i dag', () => {
      const result = terminBekreftelseBeforeTodayOrTermindato(dagensDato, terminbekreftelse7ukerPassert);
      expect(result).toBeNull();
    });

    it('skal godta passert terminbekreftelsedato før foranliggende termin', () => {
      const result = terminBekreftelseBeforeTodayOrTermindato(terminFremtidig, terminbekreftelse7ukerPassert);
      expect(result).toBeNull();
    });

    it('skal godta passert terminbekreftelsedato før overgått termin', () => {
      const result = terminBekreftelseBeforeTodayOrTermindato(terminPassert, terminbekreftelse7ukerPassert);
      expect(result).toBeNull();
    });

    it('skal godta passert terminbekreftelsedato for udefindert termin', () => {
      const result = terminBekreftelseBeforeTodayOrTermindato(undefined, terminbekreftelse7ukerPassert);
      expect(result).toBeNull();
    });

    it('skal feile for passert terminbekreftelsedato etter overgått termin', () => {
      const result = terminBekreftelseBeforeTodayOrTermindato(terminPassert, terminbekreftelse2ukerPassert);
      expect(result).toEqual(`Dato må være før eller lik ${dayjs(terminPassert).format('DD.MM.YYYY')}`);
    });

    it('skal feile for foranliggende terminbekreftelsedato etter overgått termin', () => {
      const result = terminBekreftelseBeforeTodayOrTermindato(terminPassert, terminbekreftelseFremtid);
      expect(result).toEqual(`Dato må være før eller lik ${dayjs(terminPassert).format('DD.MM.YYYY')}`);
    });

    it('skal feile for foranliggende terminbekreftelsedato etter dagens dato', () => {
      const result = terminBekreftelseBeforeTodayOrTermindato(terminFremtidig, terminbekreftelseFremtid);
      expect(result).toEqual(`Dato må være før eller lik ${dayjs(dagensDato).format('DD.MM.YYYY')}`);
    });
  });

  describe('terminErRundtFodselsdato', () => {
    const fodselsdato = dayjs();
    const lovligTerminPassert = fodselsdato.subtract(2, 'weeks').format(ISO_DATE_FORMAT);
    const lovligTerminFremtidig = fodselsdato.add(4, 'months').format(ISO_DATE_FORMAT);
    const ulovligTerminassert = fodselsdato.subtract(4, 'weeks').format(ISO_DATE_FORMAT);
    const ulovligTerminFremtidig = fodselsdato.add(6, 'months').format(ISO_DATE_FORMAT);

    it('skal godta termin der fødsel er mindre enn 3 uker etter termin', () => {
      const result = terminErRundtFodselsdato(fodselsdato.format(ISO_DATE_FORMAT), lovligTerminPassert);
      expect(result).toBeNull();
    });

    it('skal godta termin der fødsel er mindre enn 5 måneder før termin', () => {
      const result = terminErRundtFodselsdato(fodselsdato.format(ISO_DATE_FORMAT), lovligTerminFremtidig);
      expect(result).toBeNull();
    });

    it('skal godta termin når fødsel er udefinert', () => {
      const result = terminErRundtFodselsdato(undefined, lovligTerminFremtidig);
      expect(result).toBeNull();
    });

    it('skal godta udefinert termin', () => {
      const result = terminErRundtFodselsdato(fodselsdato.format(ISO_DATE_FORMAT), undefined);
      expect(result).toBeNull();
    });

    it('skal feile for termin der fødsel er mer enn 3 uker etter termin', () => {
      const result = terminErRundtFodselsdato(fodselsdato.format(ISO_DATE_FORMAT), ulovligTerminassert);
      expect(result).toEqual('Termin kan ikke være mer enn 3 uker før fødsel');
    });

    it('skal feile for termin der fødsel er mer enn 5 måneder før termin', () => {
      const result = terminErRundtFodselsdato(fodselsdato.format(ISO_DATE_FORMAT), ulovligTerminFremtidig);
      expect(result).toEqual('Termin kan ikke være mer enn 5 måneder etter fødsel');
    });
  });

  describe('dødsdatoAfterOrEqualFødselsdato', () => {
    const fodselsdato = dayjs().subtract(1, 'month').format(ISO_DATE_FORMAT);
    it('skal godta dødsdato samme dag som fødselsdato', () => {
      const result = dødsdatoAfterOrEqualFødselsdato(fodselsdato, fodselsdato);
      expect(result).toBeNull();
    });

    it('skal godta dødsdato mellom fødselsdato og i dag', () => {
      const result = dødsdatoAfterOrEqualFødselsdato(fodselsdato, dayjs().subtract(1, 'week').format(ISO_DATE_FORMAT));
      expect(result).toBeNull();
    });

    it('skal feile for dødsdato før fødselsdato', () => {
      const result = dødsdatoAfterOrEqualFødselsdato(
        fodselsdato,
        dayjs(fodselsdato).subtract(1, 'week').format(ISO_DATE_FORMAT),
      );
      expect(result).toEqual(`Dato må være etter eller lik ${dayjs(fodselsdato).format(DDMMYYYY_DATE_FORMAT)}`);
    });

    it('skal feile for dødsdato etter i dag', () => {
      const result = dødsdatoAfterOrEqualFødselsdato(undefined, dayjs().add(1, 'week').format(ISO_DATE_FORMAT));
      expect(result).toEqual(`Dato må være før eller lik ${dayjs().format(DDMMYYYY_DATE_FORMAT)}`);
    });
  });
});
