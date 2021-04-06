import React from 'react';
import { FormattedMessage } from 'react-intl';
import { formatCurrencyNoKr } from '@fpsak-frontend/utils';
import YtelserFraInfotrygd from './YtelserFraInfotrygd';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-prosess-beregningsgrunnlag';

describe('<YtelserFraInfotrygd>', () => {
  it('Skal teste at de korrekte verdier for ytelse', () => {
    const brutto = 290000;
    const wrapper = shallowWithIntl(<YtelserFraInfotrygd
      bruttoPrAar={brutto}
    />);

    const formattedMessage = wrapper.find(FormattedMessage);

    expect(formattedMessage).toHaveLength(4);
    expect(formattedMessage.at(0).prop('id')).toBe('Beregningsgrunnlag.YtelserFraInfotrygd.Ytelse2');
    expect(formattedMessage.at(1).prop('id')).toBe('Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned');
    expect(formattedMessage.at(2).prop('id')).toBe('Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar');
    expect(formattedMessage.at(3).prop('id')).toBe('Beregningsgrunnlag.YtelserFraInfotrygd.YtelseNavn');
    const maaned = wrapper.find('Normaltekst');
    expect(maaned).toHaveLength(2);
    expect(maaned.children().at(1).text()).toBe(formatCurrencyNoKr(brutto / 12));
    const element = wrapper.find('Element');
    expect(element).toHaveLength(2);
    expect(element.children().at(1).text()).toBe(formatCurrencyNoKr(brutto));
  });
});
