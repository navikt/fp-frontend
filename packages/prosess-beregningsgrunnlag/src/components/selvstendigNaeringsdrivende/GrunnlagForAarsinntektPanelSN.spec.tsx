import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';

import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { formatCurrencyNoKr } from '@fpsak-frontend/utils';

import { GrunnlagForAarsinntektPanelSN } from './GrunnlagForAarsinntektPanelSN';
import messages from '../../../i18n/nb_NO.json';

const andel = {
  aktivitetStatus: {
    kode: aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
    kodeverk: 'test',
  },
  elementNavn: 'arbeidsgiver 1',
  beregnetPrAar: 200000,
  overstyrtPrAar: 100,
  pgiVerdier: [
    {
      beløp: 320000,
      årstall: 2017,
    },
    {
      beløp: 500000,
      årstall: 2016,
    },
    {
      beløp: 400000,
      årstall: 2015,
    },
  ],
  pgiSnitt: 200000,
  beregningsperiodeFom: '2015-01-01',
  beregningsperiodeTom: '2017-01-01',
};

describe('<GrunnlagForAarsinntektPanelSN>', () => {
  it('Skal teste tabellen får korrekt antall rader', () => {
    const wrapper = shallowWithIntl(<GrunnlagForAarsinntektPanelSN
      alleAndeler={[andel]}
    />, messages);

    const rows = wrapper.find('Row');
    expect(rows).toHaveLength(7);
  });
  it('Skal teste tabellen får korrekt innhold', () => {
    const wrapper = shallowWithIntl(<GrunnlagForAarsinntektPanelSN
      alleAndeler={[andel]}
    />, messages);
    const rows = wrapper.find('Row');
    const formattedMessage = wrapper.find(FormattedMessage);
    expect(formattedMessage.first().prop('id')).toEqual('Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivendeinntekt');
    expect(formattedMessage.at(1).prop('id')).toEqual('Beregningsgrunnlag.AarsinntektPanel.SN.sisteTreAar');
    expect(formattedMessage.at(2).prop('id')).toEqual('Beregningsgrunnlag.AarsinntektPanel.AarHeader');
    expect(formattedMessage.at(3).prop('id')).toEqual('Beregningsgrunnlag.AarsinntektPanel.TotalPensjonsGivende');

    andel.pgiVerdier.forEach((pgi, index) => {
      const etikettLiten = rows.at(index + 2).find(Undertekst);
      const expectedBelop = formatCurrencyNoKr(pgi.beløp);
      const expectedAar = pgi.årstall.toString();
      expect(etikettLiten.at(0).childAt(0).text()).toBe(expectedAar);
      expect(etikettLiten.at(1).childAt(0).text()).toBe(expectedBelop);
    });
    const resultMessage = rows.at(6).find(FormattedMessage);
    expect(resultMessage.first().prop('id')).toEqual('Beregningsgrunnlag.AarsinntektPanel.SnittPensjonsGivende');
    const resultSnitt = rows.at(6).find('Element');
    const expectedSnitt = formatCurrencyNoKr(andel.pgiSnitt);
    expect(resultSnitt.at(1).childAt(0).text()).toBe(expectedSnitt);
  });
});
