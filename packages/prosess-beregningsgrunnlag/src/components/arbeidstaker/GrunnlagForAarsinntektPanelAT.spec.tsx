import React from 'react';
import { FormattedMessage } from 'react-intl';

import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { dateFormat, formatCurrencyNoKr } from '@fpsak-frontend/utils';
import { AlleKodeverk, BeregningsgrunnlagAndel } from '@fpsak-frontend/types';

import createVisningsnavnForAktivitet from '../../util/createVisningsnavnForAktivitet';
import messages from '../../../i18n/nb_NO.json';
import { GrunnlagForAarsinntektPanelATImpl as UnwrappedForm } from './GrunnlagForAarsinntektPanelAT';

const mockAndel = (arbeidsgiverIdent: string,
  overstyrtPrAar: number,
  beregnetPrAar: number,
  erTilkommetAndel: boolean,
  opphørsdato?: string): BeregningsgrunnlagAndel => ({
  aktivitetStatus: aktivitetStatus.ARBEIDSTAKER,
  arbeidsforhold: {
    arbeidsgiverIdent,
    eksternArbeidsforholdId: '345678',
    startdato: '2018-10-09',
    opphoersdato: opphørsdato,
  },
  beregnetPrAar,
  overstyrtPrAar,
  erTilkommetAndel,
} as BeregningsgrunnlagAndel);

const arbeidsgiverOpplysningerPerId = {
  123: {
    erPrivatPerson: false,
    identifikator: '123',
    referanse: '123',
    navn: 'Arbeidsgiver 1',
  },
  321: {
    erPrivatPerson: false,
    identifikator: '321',
    referanse: '123',
    navn: 'Arbeidsgiver 2',
  },
};

const perioder = [];

describe('<GrunnlagForAarsinntektPanelAT>', () => {
  it('Skal teste tabellen får korrekt antall rader', () => {
    const andeler = [
      mockAndel('123', 100, 200000, false) as BeregningsgrunnlagAndel,
      mockAndel('321', 200000, 100, false) as BeregningsgrunnlagAndel];
    const wrapper = shallowWithIntl(<UnwrappedForm
      alleAndelerIFørstePeriode={andeler}
      allePerioder={perioder}
      getKodeverknavn={() => undefined}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      alleKodeverk={{} as AlleKodeverk}
    />, messages);
    const rows = wrapper.find('Row');
    expect(rows).toHaveLength(7);
    const rowsFlex = wrapper.find('FlexRow');
    expect(rowsFlex).toHaveLength(3);
  });

  it('Skal teste at korrekte verdier settes i tabellen med EN arbeidsandel med opphørsdato', () => {
    const andeler = [mockAndel('123', 100, 200001, false, '2019-11-11')];
    const wrapper = shallowWithIntl(<UnwrappedForm
      allePerioder={perioder}
      alleAndelerIFørstePeriode={andeler}
      getKodeverknavn={() => undefined}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      alleKodeverk={{} as AlleKodeverk}
    />, messages);
    const rows = wrapper.find('Row');
    const rowsFlex = wrapper.find('FlexRow');
    expect(rows).toHaveLength(3);
    let rowNr = 1;
    let rowNrFlex = 1;
    andeler.forEach((andel) => {
      const teksterAndel = rows.at(rowNr).find('Normaltekst');
      const arbeidsgiverInfo = arbeidsgiverOpplysningerPerId[andel.arbeidsforhold.arbeidsgiverIdent];
      expect(teksterAndel.at(0).childAt(0).text()).toBe(
        createVisningsnavnForAktivitet(arbeidsgiverInfo, andel.arbeidsforhold.eksternArbeidsforholdId),
      );
      expect(teksterAndel.at(1).childAt(0).text()).toBe(formatCurrencyNoKr(andel.beregnetPrAar / 12));
      expect(teksterAndel.at(2).childAt(0).text()).toBe(formatCurrencyNoKr(andel.beregnetPrAar));

      const teksterArbForholdTid = rowsFlex.at(rowNrFlex).find('Undertekst');
      expect(teksterArbForholdTid.at(0).childAt(0).text()).toBe(
        `${dateFormat(andel.arbeidsforhold.startdato)} - ${dateFormat(andel.arbeidsforhold.opphoersdato)}`,
      );
      rowNr += 1;
      rowNrFlex += 1;
    });
  });

  it('Skal teste at korrekte verdier settes i tabellen med to arbeidsandeler', () => {
    const andeler = [
      mockAndel('123', 100, 200000, false) as BeregningsgrunnlagAndel,
      mockAndel('321', 100, 100000, false) as BeregningsgrunnlagAndel];
    const wrapper = shallowWithIntl(<UnwrappedForm
      allePerioder={perioder}
      alleAndelerIFørstePeriode={andeler}
      getKodeverknavn={() => undefined}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      alleKodeverk={{} as AlleKodeverk}
    />, messages);

    const rows = wrapper.find('Row');
    const rowsFlex = wrapper.find('FlexRow');
    let rowNr = 1;
    let rowNrFlex = 1;
    andeler.forEach((andel) => {
      const teksterAndel = rows.at(rowNr).find('Normaltekst');
      const arbeidsgiverInfo = arbeidsgiverOpplysningerPerId[andel.arbeidsforhold.arbeidsgiverIdent];
      expect(teksterAndel.at(0).childAt(0).text()).toBe(
        createVisningsnavnForAktivitet(arbeidsgiverInfo, andel.arbeidsforhold.eksternArbeidsforholdId),
      );
      expect(teksterAndel.at(1).childAt(0).text()).toBe(formatCurrencyNoKr(andel.beregnetPrAar / 12));
      expect(teksterAndel.at(2).childAt(0).text()).toBe(formatCurrencyNoKr(andel.beregnetPrAar));
      const teksterArbForholdTid = rowsFlex.at(rowNrFlex).find('Undertekst');
      let expectedDato;
      const { arbeidsforhold } = andel;
      if (Object.prototype.hasOwnProperty.call(arbeidsforhold, 'opphoersdato') && arbeidsforhold.opphoersdato) {
        expectedDato = `${dateFormat(arbeidsforhold.startdato)} - ${dateFormat(arbeidsforhold.opphoersdato)}`;
      } else {
        expectedDato = dateFormat(arbeidsforhold.startdato);
      }
      expect(teksterArbForholdTid.at(0).childAt(0).text()).toBe(expectedDato);
      rowNr += 2;
      rowNrFlex += 1;
    });
    rowNr += 1;
    const mndSum = rows.at(rowNr).find('Normaltekst');
    const aarSum = rows.at(rowNr).find('Element');
    const ledetextSum = rows.at(rowNr).find(FormattedMessage);
    const beregnetAarsinntekt = andeler.reduce((acc, andel) => acc + andel.beregnetPrAar, 0);
    const beregnetMaanedsinntekt = beregnetAarsinntekt / 12;
    expect(ledetextSum.get(0).props.id).toBe('Beregningsgrunnlag.AarsinntektPanel.TotaltArbeidsinntekt');
    expect(mndSum.childAt(0).text()).toBe(formatCurrencyNoKr(beregnetMaanedsinntekt));
    expect(aarSum.childAt(0).text()).toBe(formatCurrencyNoKr(beregnetAarsinntekt));
  });

  it('Skal teste at initial values bygges korrekt', () => {
    const andeler = [mockAndel('Arbeidsgiver 1', 100, 100, false), mockAndel('Arbeidsgiver 2', 200, 200, false)];
    const initialValues = UnwrappedForm.buildInitialValues(andeler);
    expect(initialValues).toEqual({
      inntekt0: '100',
      inntekt1: '200',
    });
  });
});
