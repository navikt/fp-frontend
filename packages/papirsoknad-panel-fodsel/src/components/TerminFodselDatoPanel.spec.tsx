import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import moment from 'moment';

import { ISO_DATE_FORMAT } from '@fpsak-frontend/utils';

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

    expect(wrapper.find({ name: 'terminbekreftelseDato' })).to.have.length(0);
    expect(wrapper.find({ name: 'foedselsDato' })).to.have.length(0);
  });

  it('skal vise inputs for fødselsdato når barnet er født', () => {
    const wrapper = shallow(<TerminFodselDatoPanelImpl
      readOnly={false}
      erBarnetFodt
      form="test"
    />);

    expect(wrapper.find({ name: 'terminbekreftelseDato' })).to.have.length(0);
    expect(wrapper.find({ name: 'foedselsDato' })).to.have.length(1);
  });

  it('skal i tillegg vise inputs for terminbekreftelse når ytelsen er foreldrepenger', () => {
    const wrapper = shallow(<TerminFodselDatoPanelImpl
      readOnly={false}
      erBarnetFodt
      erForeldrepenger
      form="test"
    />);

    expect(wrapper.find({ name: 'terminbekreftelseDato' })).to.have.length(1);
    expect(wrapper.find({ name: 'foedselsDato' })).to.have.length(1);
  });

  it('skal vise inputs for termindato når barnet ikke er født', () => {
    const wrapper = shallow(<TerminFodselDatoPanelImpl
      readOnly={false}
      erBarnetFodt={false}
      form="test"
    />);

    expect(wrapper.find({ name: 'terminbekreftelseDato' })).to.have.length(1);
    expect(wrapper.find({ name: 'foedselsDato' })).to.have.length(0);
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

      expect(errorsInvalidDate.termindato).to.eql('Dato må skrives slik : dd.mm.åååå');
      expect(errorsValidDateThreeWeeksAndOneDayAgo.termindato).to.be.null;
      expect(errorsValidDateThreeWeeksAgo.termindato).to.be.null;
    });

    it('skal validere at terminbekreftelsesdato er gyldig', () => {
      const errorsInvalidDate = validate({ terminbekreftelseDato: 'blabla', termindato: dateStringNextYear });
      const errorsValidDateLastYear = validate({ terminbekreftelseDato: dateStringLastYear, termindato: dateStringNextYear });

      expect(errorsInvalidDate.terminbekreftelseDato).to.eql('Dato må skrives slik : dd.mm.åååå');
      expect(errorsValidDateLastYear.terminbekreftelseDato).to.be.null;
    });

    it('skal validere at terminbekreftelsesdato er før eller lik dagens dato', () => {
      const errorsDateNextYear = validate({ terminbekreftelseDato: dateStringNextYear, termindato: dateStringNextYear });
      const errorsDateLastYear = validate({ terminbekreftelseDato: dateStringLastYear, termindato: dateStringNextYear });

      expect(errorsDateNextYear.terminbekreftelseDato).to.eql('Dato må være før eller lik 15.12.2020');
      expect(errorsDateLastYear.terminbekreftelseDato).to.be.null;
    });

    it('skal validere at terminbekreftelsesdato er før termindato', () => {
      const today = moment().startOf('day').format(ISO_DATE_FORMAT);
      const yesterday = moment().startOf('day').subtract(1, 'day').format(ISO_DATE_FORMAT);
      const dayBeforeYesterday = moment().startOf('day').subtract(2, 'day').format(ISO_DATE_FORMAT);
      const errorsDateAfterTermindato = validate({ termindato: yesterday, terminbekreftelseDato: today });
      const errorsSameDateAsTermindato = validate({ termindato: yesterday, terminbekreftelseDato: yesterday });
      const errorsDateBeforeTermindato = validate({ termindato: yesterday, terminbekreftelseDato: dayBeforeYesterday });

      expect(errorsDateAfterTermindato.terminbekreftelseDato).to.eql('Dato må være før eller lik 13.12.2020');
      expect(errorsSameDateAsTermindato.terminbekreftelseDato).to.eql('Dato må være før eller lik 13.12.2020');
      expect(errorsDateBeforeTermindato.terminbekreftelseDato).to.be.null;
    });

    it('skal validere at antall barn fra terminbekreftelse er et gyldig heltall større enn 0', () => {
      const errorsNoAntallBarn = validate({ termindato: dateStringNextYear });
      const errorsInvalidAntallBarn = validate({ antallBarnFraTerminbekreftelse: 50, termindato: dateStringNextYear });
      const errorsAntallBarnLessThanOne = validate({ antallBarnFraTerminbekreftelse: 0, termindato: dateStringNextYear });
      const errorsValidAntallBarn = validate({ antallBarnFraTerminbekreftelse: 1, termindato: dateStringNextYear });

      expect(errorsNoAntallBarn.antallBarnFraTerminbekreftelse).to.eql('Feltet må fylles ut');
      expect(errorsInvalidAntallBarn.antallBarnFraTerminbekreftelse).to.eql('Feltet må være mindre eller lik 9');
      expect(errorsAntallBarnLessThanOne.antallBarnFraTerminbekreftelse).to.eql('Feltet må være større eller lik 1');
      expect(errorsValidAntallBarn.antallBarnFraTerminbekreftelse).to.be.null;
    });

    it('skal validere at fødselsdato er gyldig og før eller lik dagens dato', () => {
      const dateStringTomorrow = moment().add(1, 'day').startOf('day').format(ISO_DATE_FORMAT);
      const errorsInvalidDate = validate({ erBarnetFodt: true, foedselsDato: 'blabla' });
      const errorsValidDateNextYear = validate({ erBarnetFodt: true, foedselsDato: dateStringTomorrow });
      const errorsValidDateToday = validate({ erBarnetFodt: true, foedselsDato: dateToday });

      expect(errorsInvalidDate.foedselsDato).to.eql('Dato må skrives slik : dd.mm.åååå');
      expect(errorsValidDateNextYear.foedselsDato).to.eql('Dato må skrives slik : dd.mm.åååå');
      expect(errorsValidDateToday.foedselsDato).to.eql('Dato må skrives slik : dd.mm.åååå');
    });

    it('skal validere at antall barn født er et gyldig heltall større enn 0', () => {
      const errorsNoAntallBarn = validate({ erBarnetFodt: true, foedselsDato: dateStringNextYear });
      const errorsInvalidAntallBarn = validate({ erBarnetFodt: true, antallBarn: 50, foedselsDato: dateStringNextYear });
      const errorsAntallBarnLessThanOne = validate({ erBarnetFodt: true, antallBarn: 0, foedselsDato: dateStringNextYear });
      const errorsValidAntallBarn = validate({ erBarnetFodt: true, antallBarn: 1, foedselsDato: dateStringNextYear });

      expect(errorsNoAntallBarn.antallBarn).to.eql('Feltet må fylles ut');
      expect(errorsInvalidAntallBarn.antallBarn).to.eql('Feltet må være mindre eller lik 9');
      expect(errorsAntallBarnLessThanOne.antallBarn).to.eql('Feltet må være større eller lik 1');
      expect(errorsValidAntallBarn.antallBarn).to.be.null;
    });
  });
});
