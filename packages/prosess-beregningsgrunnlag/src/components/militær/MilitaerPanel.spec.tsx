import React from 'react';
import { expect } from 'chai';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { formatCurrencyNoKr } from '@fpsak-frontend/utils';
import { BeregningsgrunnlagAndel } from '@fpsak-frontend/types';
import { MilitaerPanel as UnwrappedForm } from './MilitaerPanel';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-prosess-beregningsgrunnlag';

const periode = {
  bruttoPrAar: 300000,
  beregningsgrunnlagPrStatusOgAndel: [
    {
      aktivitetStatus: {
        kode: aktivitetStatus.MILITAER_ELLER_SIVIL,
      },
      beregnetPrAar: 290000,
    },
  ],
};

describe('<MilitaerPanel>', () => {
  it('skal teste at korrekt brutto vises for militær', () => {
    const wrapper = shallowWithIntl(<UnwrappedForm
      alleAndeler={periode.beregningsgrunnlagPrStatusOgAndel as BeregningsgrunnlagAndel[]}
    />);
    const elements = wrapper.find('Element');
    expect(elements).to.have.length(2);
    expect(elements.at(1).children().text()).to.equal(formatCurrencyNoKr(290000));
    const formattedMessages = wrapper.find('FormattedMessage');
    expect(formattedMessages.prop('id')).to.eql('Beregningsgrunnlag.AarsinntektPanel.Militær');
  });
});
