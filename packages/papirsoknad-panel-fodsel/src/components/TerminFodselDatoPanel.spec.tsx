import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import { ISO_DATE_FORMAT, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';

import TerminFodselDatoPanel, { TerminFodselDatoPanelImpl } from './TerminFodselDatoPanel';

const now = moment();
const dateStringLastYear = moment(now).subtract(1, 'years').format(ISO_DATE_FORMAT);
const dateToday = moment(now).format(ISO_DATE_FORMAT);
const dateStringNextYear = moment(now).add(1, 'years').format(ISO_DATE_FORMAT);

describe('<TerminFodselDatoPanel>', () => {
  it('skal ikke vise inputs for fødselsdato eller termindato når ingen valgt er gjort', () => {
    const wrapper = shallow(<TerminFodselDatoPanelImpl
      readOnly={false}
      erBarnetFodt={undefined}
      form="test"
    />);

    expect(wrapper.find({ name: 'terminbekreftelseDato' })).toHaveLength(0);
    expect(wrapper.find({ name: 'foedselsDato' })).toHaveLength(0);
  });

  it('skal vise inputs for fødselsdato når barnet er født', () => {
    const wrapper = shallow(<TerminFodselDatoPanelImpl
      readOnly={false}
      erBarnetFodt
      form="test"
    />);

    expect(wrapper.find({ name: 'terminbekreftelseDato' })).toHaveLength(0);
    expect(wrapper.find({ name: 'foedselsDato' })).toHaveLength(1);
  });

  it('skal i tillegg vise inputs for terminbekreftelse når ytelsen er foreldrepenger', () => {
    const wrapper = shallow(<TerminFodselDatoPanelImpl
      readOnly={false}
      erBarnetFodt
      erForeldrepenger
      form="test"
    />);

    expect(wrapper.find({ name: 'terminbekreftelseDato' })).toHaveLength(1);
    expect(wrapper.find({ name: 'foedselsDato' })).toHaveLength(1);
  });

  it('skal vise inputs for termindato når barnet ikke er født', () => {
    const wrapper = shallow(<TerminFodselDatoPanelImpl
      readOnly={false}
      erBarnetFodt={false}
      form="test"
    />);

    expect(wrapper.find({ name: 'terminbekreftelseDato' })).toHaveLength(1);
    expect(wrapper.find({ name: 'foedselsDato' })).toHaveLength(0);
  });

  describe('validate', () => {
    const { validate } = TerminFodselDatoPanel;

    it('skal validere at termindato er gyldig og etter tidligst for tre uker siden', () => {
      const dateThreeWeeksAndOneDayAgo = moment().startOf('day').subtract(3, 'weeks').subtract(1, 'days')
        .format(ISO_DATE_FORMAT);
      const dateThreeWeeksAgo = moment().startOf('day').subtract(3, 'weeks').format(ISO_DATE_FORMAT);
      const errorsInvalidDate = validate({ termindato: 'blabla' });
      const errorsValidDateThreeWeeksAndOneDayAgo = validate({ termindato: dateThreeWeeksAndOneDayAgo });
      const errorsValidDateThreeWeeksAgo = validate({ termindato: dateThreeWeeksAgo });

      expect(errorsInvalidDate.termindato).toEqual('Dato må skrives slik : dd.mm.åååå');
      expect(errorsValidDateThreeWeeksAndOneDayAgo.termindato).toBeNull();
      expect(errorsValidDateThreeWeeksAgo.termindato).toBeNull();
    });

    it('skal validere at terminbekreftelsesdato er gyldig', () => {
      const errorsInvalidDate = validate({ terminbekreftelseDato: 'blabla', termindato: dateStringNextYear });
      const errorsValidDateLastYear = validate({ terminbekreftelseDato: dateStringLastYear, termindato: dateStringNextYear });

      expect(errorsInvalidDate.terminbekreftelseDato).toEqual('Dato må skrives slik : dd.mm.åååå');
      expect(errorsValidDateLastYear.terminbekreftelseDato).toBeNull();
    });

    it('skal validere at terminbekreftelsesdato er før eller lik dagens dato', () => {
      const errorsDateNextYear = validate({ terminbekreftelseDato: dateStringNextYear, termindato: dateStringNextYear });
      const errorsDateLastYear = validate({ terminbekreftelseDato: dateStringLastYear, termindato: dateStringNextYear });

      expect(errorsDateNextYear.terminbekreftelseDato).toEqual(`Dato må være før eller lik ${moment().format(DDMMYYYY_DATE_FORMAT)}`);
      expect(errorsDateLastYear.terminbekreftelseDato).toBeNull();
    });

    it('skal validere at terminbekreftelsesdato er før termindato', () => {
      const today = moment().startOf('day').format(ISO_DATE_FORMAT);
      const yesterday = moment().startOf('day').subtract(1, 'day').format(ISO_DATE_FORMAT);
      const dayBeforeYesterday = moment().startOf('day').subtract(2, 'day').format(ISO_DATE_FORMAT);
      const errorsDateAfterTermindato = validate({ termindato: yesterday, terminbekreftelseDato: today });
      const errorsSameDateAsTermindato = validate({ termindato: yesterday, terminbekreftelseDato: yesterday });
      const errorsDateBeforeTermindato = validate({ termindato: yesterday, terminbekreftelseDato: dayBeforeYesterday });

      expect(errorsDateAfterTermindato.terminbekreftelseDato).toEqual(
        `Dato må være før eller lik ${moment().subtract(2, 'days').format(DDMMYYYY_DATE_FORMAT)}`,
      );
      expect(errorsSameDateAsTermindato.terminbekreftelseDato).toEqual(`Dato må være før eller lik ${moment()
        .subtract(2, 'days').format(DDMMYYYY_DATE_FORMAT)}`);
      expect(errorsDateBeforeTermindato.terminbekreftelseDato).toBeNull();
    });

    it('skal validere at antall barn fra terminbekreftelse er et gyldig heltall større enn 0', () => {
      const errorsNoAntallBarn = validate({ termindato: dateStringNextYear });
      const errorsInvalidAntallBarn = validate({ antallBarnFraTerminbekreftelse: 50, termindato: dateStringNextYear });
      const errorsAntallBarnLessThanOne = validate({ antallBarnFraTerminbekreftelse: 0, termindato: dateStringNextYear });
      const errorsValidAntallBarn = validate({ antallBarnFraTerminbekreftelse: 1, termindato: dateStringNextYear });

      expect(errorsNoAntallBarn.antallBarnFraTerminbekreftelse).toEqual('Feltet må fylles ut');
      expect(errorsInvalidAntallBarn.antallBarnFraTerminbekreftelse).toEqual('Feltet må være mindre eller lik 9');
      expect(errorsAntallBarnLessThanOne.antallBarnFraTerminbekreftelse).toEqual('Feltet må være større eller lik 1');
      expect(errorsValidAntallBarn.antallBarnFraTerminbekreftelse).toBeNull();
    });

    it('skal validere at fødselsdato er gyldig og før eller lik dagens dato', () => {
      const dateStringTomorrow = moment().add(1, 'day').startOf('day').format(ISO_DATE_FORMAT);
      const errorsInvalidDate = validate({ erBarnetFodt: true, foedselsDato: 'blabla' });
      const errorsValidDateNextYear = validate({ erBarnetFodt: true, foedselsDato: dateStringTomorrow });
      const errorsValidDateToday = validate({ erBarnetFodt: true, foedselsDato: dateToday });

      expect(errorsInvalidDate.foedselsDato).toEqual('Dato må skrives slik : dd.mm.åååå');
      expect(errorsValidDateNextYear.foedselsDato).toEqual('Dato må skrives slik : dd.mm.åååå');
      expect(errorsValidDateToday.foedselsDato).toEqual('Dato må skrives slik : dd.mm.åååå');
    });

    it('skal validere at antall barn født er et gyldig heltall større enn 0', () => {
      const errorsNoAntallBarn = validate({ erBarnetFodt: true, foedselsDato: dateStringNextYear });
      const errorsInvalidAntallBarn = validate({ erBarnetFodt: true, antallBarn: 50, foedselsDato: dateStringNextYear });
      const errorsAntallBarnLessThanOne = validate({ erBarnetFodt: true, antallBarn: 0, foedselsDato: dateStringNextYear });
      const errorsValidAntallBarn = validate({ erBarnetFodt: true, antallBarn: 1, foedselsDato: dateStringNextYear });

      expect(errorsNoAntallBarn.antallBarn).toEqual('Feltet må fylles ut');
      expect(errorsInvalidAntallBarn.antallBarn).toEqual('Feltet må være mindre eller lik 9');
      expect(errorsAntallBarnLessThanOne.antallBarn).toEqual('Feltet må være større eller lik 1');
      expect(errorsValidAntallBarn.antallBarn).toBeNull();
    });
  });
});
