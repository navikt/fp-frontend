import React from 'react';
import { formatCurrencyNoKr } from '@fpsak-frontend/utils';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { BeregningsgrunnlagAndel, RelevanteStatuserProp } from '@fpsak-frontend/types';
import TilstotendeYtelser, { getTekstForAndelBruktIBeregning } from './TilstotendeYtelser';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-prosess-beregningsgrunnlag';

const dagpengerInntekt = 200000;
const aapInntekt = 300000;
const aapNavn = 'Beregningsgrunnlag.TilstottendeYtelse.AAP';
const dagpengerNavn = 'Beregningsgrunnlag.TilstottendeYtelse.Dagpenger';
const dpAndel = {
  aktivitetStatus: {
    kode: aktivitetStatus.DAGPENGER,
    kodeverk: 'test',
  },
  beregnetPrAar: dagpengerInntekt,
  elementNavn: dagpengerNavn,
} as BeregningsgrunnlagAndel;
const aapAndel = {
  aktivitetStatus: {
    kode: aktivitetStatus.ARBEIDSAVKLARINGSPENGER,
    kodeverk: 'test',
  },
  beregnetPrAar: aapInntekt,
  elementNavn: aapNavn,
} as BeregningsgrunnlagAndel;
const urelatertAndel = {
  aktivitetStatus: {
    kode: aktivitetStatus.FRILANSER,
    kodeverk: 'test',
  },
  beregnetPrAar: aapInntekt,
} as BeregningsgrunnlagAndel;
const relevanteStatuser = (erSN, erKombo) => ({
  isSelvstendigNaeringsdrivende: erSN,
  isKombinasjonsstatus: erKombo,
});
const andeler = [dpAndel, aapAndel, urelatertAndel];
describe('<TilstotendeYtelser>', () => {
  it('Skal teste at de korrekte ytelser for dagpenger / AAP vises og at urelaterte andeler ikke vises', () => {
    const wrapper = shallowWithIntl(<TilstotendeYtelser
      alleAndeler={andeler}
      relevanteStatuser={relevanteStatuser(false, false) as RelevanteStatuserProp}
      gjelderBesteberegning={false}
    />);
    const formattedMessage = wrapper.find('FormattedMessage');
    expect(formattedMessage).toHaveLength(4);
    expect(formattedMessage.at(0).prop('id')).toBe('Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned');
    expect(formattedMessage.at(1).prop('id')).toBe('Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar');
    expect(formattedMessage.at(2).prop('id')).toBe(dagpengerNavn);
    expect(formattedMessage.at(3).prop('id')).toBe(aapNavn);
    const summer = wrapper.find('Normaltekst');
    expect(summer).toHaveLength(4);
    expect(summer.children().at(0).text()).toBe(formatCurrencyNoKr(dagpengerInntekt / 12));
    expect(summer.children().at(1).text()).toBe(formatCurrencyNoKr(dagpengerInntekt));
    expect(summer.children().at(2).text()).toBe(formatCurrencyNoKr(aapInntekt / 12));
    expect(summer.children().at(3).text()).toBe(formatCurrencyNoKr(aapInntekt));
  });

  it('Skal hente riktig tekst for andel brukt i beregning', () => {
    expect(getTekstForAndelBruktIBeregning(aapAndel)).toBe('Beregningsgrunnlag.TilstottendeYtelse.AAP');
    expect(getTekstForAndelBruktIBeregning(dpAndel)).toBe('Beregningsgrunnlag.TilstottendeYtelse.Dagpenger');
  });
});
