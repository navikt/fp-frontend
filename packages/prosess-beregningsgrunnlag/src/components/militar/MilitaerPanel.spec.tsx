import React from 'react';
import { FormattedMessage } from 'react-intl';

import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { formatCurrencyNoKr } from '@fpsak-frontend/utils';
import { BeregningsgrunnlagAndel } from '@fpsak-frontend/types';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import { MilitaerPanel as UnwrappedForm } from './MilitaerPanel';
import messages from '../../../i18n/nb_NO.json';

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
    />, messages);
    const elements = wrapper.find('Element');
    expect(elements).toHaveLength(2);
    expect(elements.at(1).children().text()).toBe(formatCurrencyNoKr(290000));
    const formattedMessages = wrapper.find(FormattedMessage);
    expect(formattedMessages.prop('id')).toEqual('Beregningsgrunnlag.AarsinntektPanel.Militær');
  });
});
