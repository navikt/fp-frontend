import { expect } from 'chai';
import moment from 'moment';

import { ISO_DATE_FORMAT } from '../formats';
import {
  dateAfterOrEqual,
  dateAfterOrEqualToToday,
  dateAfterToday,
  dateBeforeOrEqual,
  dateBeforeOrEqualToToday,
  dateBeforeToday,
  dateIsBefore,
  dateRangesNotOverlapping,
  hasValidDate,
  hasValidDecimal,
  hasValidFodselsnummer,
  hasValidFodselsnummerFormat,
  hasValidInteger,
  hasValidName,
  hasValidPeriod,
  hasValidSaksnummerOrFodselsnummerFormat,
  hasValidText,
  isWithinOpptjeningsperiode,
  maxLength,
  maxValue,
  minLength,
  minValue,
  required,
  requiredIfCustomFunctionIsTrue,
  requiredIfNotPristine,
} from './validators';

const today = moment();
const todayAsISO = today.format(ISO_DATE_FORMAT);

describe('Validators', () => {
  describe('required', () => {
    it('skal gi feilmelding når verdi er lik null', () => {
      const result = required(null);
      expect(result).is.eql('Feltet må fylles ut');
    });

    it('skal gi feilmelding når verdi er lik undefined', () => {
      const result = required(undefined);
      expect(result).is.eql('Feltet må fylles ut');
    });

    it('skal ikke gi feilmelding når verdi er ulik null og undefined', () => {
      const result = required('test');
      expect(result).is.undefined;
    });
  });

  describe('requiredIfNotPristine', () => {
    it('skal ikke gi feilmelding når ingen formverdier er endret', () => {
      const result = requiredIfNotPristine(null, null, { pristine: true });
      expect(result).is.undefined;
    });

    it('skal gi feilmelding når formverdier er endret og verdi er null', () => {
      const result = requiredIfNotPristine(null, null, { pristine: false });
      expect(result).is.eql('Feltet må fylles ut');
    });

    it('skal gi feilmelding når formverdier er endret og verdi er undefined', () => {
      const result = requiredIfNotPristine(undefined, null, { pristine: false });
      expect(result).is.eql('Feltet må fylles ut');
    });

    it('skal ikke gi feilmelding når formverdier er endret men verdi er ulik null og undefined', () => {
      const result = requiredIfNotPristine('test', null, { pristine: false });
      expect(result).is.undefined;
    });
  });

  describe('requiredIfCustomFunctionIsTrue', () => {
    const isRequiredFunc = (allValues, props) => !props.pristine;

    it('skal ikke gi feilmelding når ingen formverdier er endret', () => {
      const result = requiredIfCustomFunctionIsTrue(isRequiredFunc)(null, null, { pristine: true });
      expect(result).is.undefined;
    });

    it('skal gi feilmelding når formverdier er endret og verdi er null', () => {
      const result = requiredIfCustomFunctionIsTrue(isRequiredFunc)(null, null, { pristine: false });
      expect(result).is.eql('Feltet må fylles ut');
    });

    it('skal gi feilmelding når formverdier er endret og verdi er undefined', () => {
      const result = requiredIfCustomFunctionIsTrue(isRequiredFunc)(undefined, null, { pristine: false });
      expect(result).is.eql('Feltet må fylles ut');
    });

    it('skal ikke gi feilmelding når formverdier er endret men verdi er ulik null og undefined', () => {
      const result = requiredIfCustomFunctionIsTrue(isRequiredFunc)('test', null, { pristine: false });
      expect(result).is.undefined;
    });
  });

  describe('minLength', () => {
    it('skal feile når verdi er mindre enn minimum lengde', () => {
      const minLength2 = minLength(2);
      const result = minLength2('e');
      expect(result).is.eql('Du må skrive minst 2 tegn');
    });

    it('skal ikke feile når verdi er større eller lik minimum lengde', () => {
      const minLength2 = minLength(2);
      const result = minLength2('er');
      expect(result).is.null;
    });
  });

  describe('maxLength', () => {
    it('skal feile når verdi er større enn maksimum lengde', () => {
      const maxLength2 = maxLength(2);
      const result = maxLength2('ert');
      expect(result).is.eql('Du kan skrive maksimalt 2 tegn');
    });

    it('skal ikke feile når verdi er mindre eller lik minimum lengde', () => {
      const maxLength2 = maxLength(2);
      const result = maxLength2('er');
      expect(result).is.null;
    });
  });

  describe('minValue', () => {
    it('skal feile når verdi er mindre enn 2', () => {
      const minValue2 = minValue(2);
      const result = minValue2(1);
      expect(result).is.eql('Feltet må være større eller lik 2');
    });

    it('skal ikke feile når verdi er større eller lik 2', () => {
      const minValue2 = minValue(2);
      const result = minValue2(2);
      expect(result).is.null;
    });
  });

  describe('maxValue', () => {
    it('skal feile når verdi er større enn 2', () => {
      const maxValue2 = maxValue(2);
      const result = maxValue2(3);
      expect(result).is.eql('Feltet må være mindre eller lik 2');
    });

    it('skal ikke feile når verdi er mindre eller lik 2', () => {
      const maxValue2 = maxValue(2);
      const result = maxValue2(2);
      expect(result).is.null;
    });
  });

  describe('hasValidInteger', () => {
    it('skal ikke feile når tallet er et heltall', () => {
      const result = hasValidInteger(2);
      expect(result).is.null;
    });

    it('skal feile når tallet er et desimaltall', () => {
      const result = hasValidInteger(2.2);
      expect(result).is.eql('Tallet kan ikke ha desimaler');
    });

    it('skal feile når input ikke er et gyldig tall', () => {
      const result = hasValidInteger('test');
      expect(result).is.eql('Feltet kan kun inneholde tall');
    });
  });

  describe('hasValidDecimal', () => {
    it('skal ikke feile når tallet er et desimaltall', () => {
      const result = hasValidDecimal(2.11);
      expect(result).is.null;
    });

    it('skal feile når tallet har mer enn to desimaler', () => {
      const result = hasValidDecimal(2.233);
      expect(result).is.eql('Tallet kan ikke inneholde mer enn to desimaler');
    });

    it('skal feile når input ikke er et gyldig tall', () => {
      const result = hasValidDecimal('test');
      expect(result).is.eql('Feltet kan kun inneholde tall');
    });
  });

  describe('hasValidDate', () => {
    it('skal feile når dag i dato er utenfor lovlig område', () => {
      const result = hasValidDate('2017-10-40');
      expect(result).is.eql('Dato må skrives slik : dd.mm.åååå');
    });

    it('skal feile når måned i dato er utenfor lovlig område', () => {
      const result = hasValidDate('2017-13-20');
      expect(result).is.eql('Dato må skrives slik : dd.mm.åååå');
    });

    it('skal feile når dato er på feil format', () => {
      const result = hasValidDate('10.10.2017');
      expect(result).is.eql('Dato må skrives slik : dd.mm.åååå');
    });

    it('skal ikke feile når dato er korrekt', () => {
      const result = hasValidDate('2017-12-10');
      expect(result).is.null;
    });

    it('skal ikke feile når dato er tom', () => {
      const result = hasValidDate(undefined);
      expect(result).is.null;
    });
  });

  describe('dateBeforeOrEqual', () => {
    it('skal ikke feile når dato er før spesifisert dato', () => {
      const result = dateBeforeOrEqual(moment().toDate())('2000-12-10');
      expect(result).is.null;
    });

    it('skal ikke feile når dato er lik spesifisert dato', () => {
      const result = dateBeforeOrEqual(today)(todayAsISO);
      expect(result).is.null;
    });

    it('skal feile når dato ikke er før eller lik spesifisert dato', () => {
      const result = dateBeforeOrEqual(today)('2100-12-10');
      expect(result).is.eql('Dato må være før eller lik 15.12.2020');
    });

    it('skal ikke feile når dato er tom', () => {
      const result = dateBeforeOrEqual(today)(undefined);
      expect(result).is.null;
    });
  });

  describe('dateAfterOrEqual', () => {
    it('skal ikke feile når dato er etter spesifisert dato', () => {
      const result = dateAfterOrEqual(moment().toDate())('2100-12-10');
      expect(result).is.null;
    });

    it('skal ikke feile når dato er lik spesifisert dato', () => {
      const result = dateAfterOrEqual(today)(todayAsISO);
      expect(result).is.null;
    });

    it('skal feile når dato er før spesifisert dato', () => {
      const result = dateAfterOrEqual(today)('2000-12-10');
      expect(result).is.eql('Dato må være etter eller lik 15.12.2020');
    });

    it('skal ikke feile når dato er tom', () => {
      const result = dateAfterOrEqual(today.add(1, 'days'))(undefined);
      expect(result).is.null;
    });
  });

  describe('dateRangesNotOverlapping', () => {
    it('skal feile når perioder overlapper', () => {
      const periods = [['2017-10-10', '2017-12-10'], ['2017-01-10', '2017-10-11']];
      const result = dateRangesNotOverlapping(periods);
      expect(result).is.eql('Perioder kan ikke overlappe i tid');
    });

    it('skal ikke feile når perioder ikke overlapper', () => {
      const periods = [['2017-10-10', '2017-12-10'], ['2017-01-10', '2017-10-09']];
      const result = dateRangesNotOverlapping(periods);
      expect(result).is.null;
    });
  });

  describe('dateBeforeToday', () => {
    it('skal ikke feile når dato er før dagens dato', () => {
      const result = dateBeforeToday('2000-10-10');
      expect(result).is.null;
    });

    it('skal feile når dato er lik dagens dato', () => {
      const result = dateBeforeToday(todayAsISO);
      expect(result).is.eql('Dato må være før eller lik 14.12.2020');
    });

    it('skal ikke feile når dato er tom', () => {
      const result = dateBeforeToday(undefined);
      expect(result).is.null;
    });
  });

  describe('dateBeforeOrEqualToToday', () => {
    it('skal ikke feile når dato er før dagens dato', () => {
      const result = dateBeforeOrEqualToToday('2000-10-10');
      expect(result).is.null;
    });

    it('skal ikke feile når dato er lik dagens dato', () => {
      const result = dateBeforeOrEqualToToday(todayAsISO);
      expect(result).is.null;
    });

    it('skal feile når dato er etter dagens dato', () => {
      const result = dateBeforeOrEqualToToday('2100-10-10');
      expect(result).is.eql('Dato må være før eller lik 15.12.2020');
    });

    it('skal ikke feile når dato er tom', () => {
      const result = dateBeforeOrEqualToToday(undefined);
      expect(result).is.null;
    });
  });

  describe('dateAfterToday', () => {
    it('skal ikke feile når dato etter etter i dag', () => {
      const result = dateAfterToday('2100-10-10');
      expect(result).is.null;
    });

    it('skal feile når dato er i dag', () => {
      const result = dateAfterToday(todayAsISO);
      expect(result).is.eql('Dato må være etter eller lik 16.12.2020');
    });

    it('skal ikke feile når dato er tom', () => {
      const result = dateAfterToday(undefined);
      expect(result).is.null;
    });
  });

  describe('dateAfterOrEqualToToday', () => {
    it('skal ikke feile når dato etter eller lik i dag', () => {
      const result = dateAfterOrEqualToToday(todayAsISO);
      expect(result).is.null;
    });

    it('skal feile når dato er historisk', () => {
      const result = dateAfterOrEqualToToday('2000-10-10');
      expect(result).is.eql('Dato må være etter eller lik 15.12.2020');
    });

    it('skal ikke feile når dato er tom', () => {
      const result = dateAfterOrEqualToToday(undefined);
      expect(result).is.null;
    });
  });

  describe('hasValidFodselsnummerFormat', () => {
    it('skal ikke feile fødselsnummer-formatet er gyldig', () => {
      const result = hasValidFodselsnummerFormat('05018512123');
      expect(result).is.null;
    });

    it('skal feile når fødselsnummer-formatet er ugyldig', () => {
      const result = hasValidFodselsnummerFormat('0501851212');
      expect(result).is.eql('Feltet må være et fødselsnummer (11 siffer)');
    });
  });

  describe('hasValidFodselsnummer', () => {
    it('skal ikke feile når fødselsnummer er gyldig', () => {
      const result = hasValidFodselsnummer('22121588017');
      expect(result).is.null;
    });

    it('skal feile når fødselsnummer er ugyldig', () => {
      const result = hasValidFodselsnummer('0501851212');
      expect(result).is.eql('Ugyldig fødselsnummer');
    });
  });

  describe('hasValidText', () => {
    it('skal ikke feile når tekst ikke har ugyldig tegn', () => {
      const result = hasValidText('Hei hei\n'
        + 'Áá Čč Đđ Ŋŋ Šš Ŧŧ Žž Ää Ææ Øø Åå\n'
        + 'Lorem + ipsum_dolor, - (sit) amet?! 100%: §2&3="I\'m";');
      expect(result).is.null;
    });

    it('skal feile når fødselsnummer har ugyldige tegn', () => {
      const result = hasValidText('Hei {}*');
      expect(result).is.eql('Feltet inneholder ugyldige tegn: {}*');
    });
  });

  describe('hasValidName', () => {
    it('skal ikke feile når navn ikke har ugyldig tegn', () => {
      const result = hasValidName('Navn navn'
        + 'Áá Čč Đđ Ŋŋ Šš Ŧŧ Žž Ää Ææ Øø Åå'
        + ' - . \' ');
      expect(result).is.null;
    });

    it('skal feile når navn har ugyldige tegn', () => {
      const result = hasValidName('Navn _*');
      expect(result).is.eql('Feltet inneholder ugyldige tegn: _*');
    });
  });

  describe('hasValidSaksnummerOrFodselsnummerFormat', () => {
    it('skal ikke feile når saksnummer eller fødselsnummer har gyldig pattern', () => {
      const result = hasValidSaksnummerOrFodselsnummerFormat('22121588017');
      expect(result).is.null;
    });

    it('skal feile når saksnummer eller fødselsnummer har ugyldig pattern', () => {
      const result = hasValidSaksnummerOrFodselsnummerFormat('0501851212-d');
      expect(result).is.eql('Ugyldig saksnummer eller fødselsnummer');
    });
  });

  describe('hasValidPeriod', () => {
    it('skal ikke feile når både fomDato og tomDato er tomme', () => {
      expect(hasValidPeriod('', '')).is.null;
    });

    it('skal feile når fomDato er på feil format', () => {
      const result = hasValidPeriod('2017-06-0', '2017-06-01');
      expect(result).is.eql('Periode må skrives slik : dd.mm.åååå - dd.mm.åååå');
    });

    it('skal feile når tomDato er på feil format', () => {
      const result = hasValidPeriod('2017-06-01', '2017-06-0');
      expect(result).is.eql('Periode må skrives slik : dd.mm.åååå - dd.mm.åååå');
    });

    it('skal ikke feile når fomDato er før tomDato', () => {
      expect(hasValidPeriod('2017-05-01', '2017-06-01')).is.null;
    });

    it('skal ikke feile når fomDato er lik tomDato', () => {
      expect(hasValidPeriod('2017-06-01', '2017-06-01')).is.null;
    });

    it('skal feile når fomDato er etter tomDato', () => {
      const result = hasValidPeriod('2017-06-01', '2017-05-01');
      expect(result).is.eql('Startdato må være før eller lik sluttdato');
    });
  });

  describe('isWithinOpptjeningsperiode', () => {
    const opptjeningFom = '2017-01-01';
    const opptjeningTom = '2017-05-01';

    it('skal ikke feile når periode er innenfor opptjeningsperiode', () => {
      expect(isWithinOpptjeningsperiode(opptjeningFom, opptjeningTom)('2017-02-01', '2017-03-01')).is.null;
      expect(isWithinOpptjeningsperiode(opptjeningFom, opptjeningTom)('2017-01-01', '2017-05-01')).is.null;
    });

    it('skal feile når fom-dato er utenfor opptjeningsperiode', () => {
      const result = isWithinOpptjeningsperiode(opptjeningFom, opptjeningTom)('2016-02-01', '2017-03-01');
      expect(result).is.eql('Periode er utenfor opptjeningsperioden');
    });

    it('skal feile når tom-dato er utenfor opptjeningsperiode', () => {
      const result = isWithinOpptjeningsperiode(opptjeningFom, opptjeningTom)('2017-02-01', '2018-03-01');
      expect(result).is.eql('Periode er utenfor opptjeningsperioden');
    });
  });

  describe('dateIsBefore', () => {
    const errorMessageFunction = (): string => 'Dette er en feilmelding';
    const dateToCheckAgainst = '2019-08-05';
    it('skal ikke feile når input datoene er før datoen som blir sjekket mot', () => {
      const result = dateIsBefore(dateToCheckAgainst, errorMessageFunction)('2019-08-04');
      expect(result).is.null;
    });
    it('skal feile når input datoene er lik datoen som blir sjekket mot', () => {
      const result = dateIsBefore(dateToCheckAgainst, errorMessageFunction)('2019-08-05');
      expect(result).is.eql('Dette er en feilmelding');
    });
    it('skal feile når input datoene er etter datoen som blir sjekket mot', () => {
      const result = dateIsBefore(dateToCheckAgainst, errorMessageFunction)('2019-08-06');
      expect(result).is.eql('Dette er en feilmelding');
    });
  });
});
