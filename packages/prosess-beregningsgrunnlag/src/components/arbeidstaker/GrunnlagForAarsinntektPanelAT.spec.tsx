import React from 'react';
import { expect } from 'chai';

import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { dateFormat, formatCurrencyNoKr } from '@fpsak-frontend/utils';
import { BeregningsgrunnlagAndel } from '@fpsak-frontend/types';

import createVisningsnavnForAktivitet from '../../util/visningsnavnHelper';
import { GrunnlagForAarsinntektPanelATImpl as UnwrappedForm } from './GrunnlagForAarsinntektPanelAT';

const mockAndel = (arbeidsgiverNavn, overstyrtPrAar, beregnetPrAar, erTilkommetAndel) => ({
  aktivitetStatus: {
    kode: aktivitetStatus.ARBEIDSTAKER,
    kodeverk: 'test',
  },
  arbeidsforhold: {
    arbeidsgiverNavn,
    arbeidsgiverId: '123',
    arbeidsforholdId: '123',
    eksternArbeidsforholdId: '345678',
    startdato: '2018-10-09',
    opphoersdato: null,
  },
  beregnetPrAar,
  overstyrtPrAar,
  erTilkommetAndel,
});

const getKodeverknavn = () => undefined;

const perioder = [];

describe('<GrunnlagForAarsinntektPanelAT>', () => {
  it('Skal teste tabellen får korrekt antall rader', () => {
    const andeler = [
      mockAndel('Arbeidsgiver 1', 100, 200000, false) as BeregningsgrunnlagAndel,
      mockAndel('Arbeidsgiver 2', 200000, 100, false) as BeregningsgrunnlagAndel];
    const wrapper = shallowWithIntl(<UnwrappedForm
      alleAndeler={andeler}
      allePerioder={perioder}
      getKodeverknavn={getKodeverknavn}

    />);
    const rows = wrapper.find('Row');
    expect(rows).to.have.length(7);
    const rowsFlex = wrapper.find('FlexRow');
    expect(rowsFlex).to.have.length(3);
  });

  it('Skal teste at korrekte verdier settes i tabellen med EN arbeidsandel med opphørsdato', () => {
    const andeler = [mockAndel('Arbeidsgiver 1', 100, 200001, false)];
    andeler[0].arbeidsforhold.opphoersdato = '2019-11-11';
    const wrapper = shallowWithIntl(<UnwrappedForm
      allePerioder={perioder}
      alleAndeler={andeler}
      getKodeverknavn={getKodeverknavn}
    />);
    const rows = wrapper.find('Row');
    const rowsFlex = wrapper.find('FlexRow');
    expect(rows).to.have.length(3);
    let rowNr = 1;
    let rowNrFlex = 1;
    andeler.forEach((andel) => {
      const teksterAndel = rows.at(rowNr).find('Normaltekst');
      expect(teksterAndel.at(0).childAt(0).text()).to.equal(createVisningsnavnForAktivitet(andel.arbeidsforhold, getKodeverknavn));
      expect(teksterAndel.at(1).childAt(0).text()).to.equal(formatCurrencyNoKr(andel.beregnetPrAar / 12));
      expect(teksterAndel.at(2).childAt(0).text()).to.equal(formatCurrencyNoKr(andel.beregnetPrAar));

      const teksterArbForholdTid = rowsFlex.at(rowNrFlex).find('Undertekst');
      expect(teksterArbForholdTid.at(0).childAt(0).text()).to
        .equal(`${dateFormat(andel.arbeidsforhold.startdato)} - ${dateFormat(andel.arbeidsforhold.opphoersdato)}`);
      rowNr += 1;
      rowNrFlex += 1;
    });
  });

  it('Skal teste at korrekte verdier settes i tabellen med to arbeidsandeler', () => {
    const andeler = [
      mockAndel('Arbeidsgiver 1', 100, 200000, false) as BeregningsgrunnlagAndel,
      mockAndel('Arbeidsgiver 2', 100, 100000, false) as BeregningsgrunnlagAndel];
    const wrapper = shallowWithIntl(<UnwrappedForm
      allePerioder={perioder}
      alleAndeler={andeler}
      getKodeverknavn={getKodeverknavn}
    />);

    const rows = wrapper.find('Row');
    const rowsFlex = wrapper.find('FlexRow');
    let rowNr = 1;
    let rowNrFlex = 1;
    andeler.forEach((andel) => {
      const teksterAndel = rows.at(rowNr).find('Normaltekst');
      expect(teksterAndel.at(0).childAt(0).text()).to.equal(createVisningsnavnForAktivitet(andel.arbeidsforhold, getKodeverknavn));
      expect(teksterAndel.at(1).childAt(0).text()).to.equal(formatCurrencyNoKr(andel.beregnetPrAar / 12));
      expect(teksterAndel.at(2).childAt(0).text()).to.equal(formatCurrencyNoKr(andel.beregnetPrAar));
      const teksterArbForholdTid = rowsFlex.at(rowNrFlex).find('Undertekst');
      let expectedDato;
      const { arbeidsforhold } = andel;
      if (Object.prototype.hasOwnProperty.call(arbeidsforhold, 'opphoersdato') && arbeidsforhold.opphoersdato) {
        expectedDato = `${dateFormat(arbeidsforhold.startdato)} - ${dateFormat(arbeidsforhold.opphoersdato)}`;
      } else {
        expectedDato = dateFormat(arbeidsforhold.startdato);
      }
      expect(teksterArbForholdTid.at(0).childAt(0).text()).to.equal(expectedDato);
      rowNr += 2;
      rowNrFlex += 1;
    });
    rowNr += 1;
    const mndSum = rows.at(rowNr).find('Normaltekst');
    const aarSum = rows.at(rowNr).find('Element');
    const ledetextSum = rows.at(rowNr).find('FormattedMessage');
    const beregnetAarsinntekt = andeler.reduce((acc, andel) => acc + andel.beregnetPrAar, 0);
    const beregnetMaanedsinntekt = beregnetAarsinntekt / 12;
    expect(ledetextSum.get(0).props.id).to.equal('Beregningsgrunnlag.AarsinntektPanel.TotaltArbeidsinntekt');
    expect(mndSum.childAt(0).text()).to.equal(formatCurrencyNoKr(beregnetMaanedsinntekt));
    expect(aarSum.childAt(0).text()).to.equal(formatCurrencyNoKr(beregnetAarsinntekt));
  });

  it('Skal teste at initial values bygges korrekt', () => {
    const andeler = [mockAndel('Arbeidsgiver 1', 100, 100, false), mockAndel('Arbeidsgiver 2', 200, 200, false)];
    const initialValues = UnwrappedForm.buildInitialValues(andeler);
    expect(initialValues).to.eql({
      inntekt0: '100',
      inntekt1: '200',
    });
  });
});
