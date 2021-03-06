import React from 'react';
import sinon from 'sinon';
import { FormattedMessage } from 'react-intl';

import { Stonadskonto } from '@fpsak-frontend/types';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import TimeLineTab from './TimeLineTab';
import messages from '../../../i18n/nb_NO.json';

const stonadskonto = {
  kontonavn: 'FORELDREPENGER_FØR_FØDSEL',
  kontoinfo: {
    saldo: 30,
    aktivitetSaldoDtoList: [],
  } as Stonadskonto,
};

describe('<TimeLineTab>', () => {
  it('skal teste at TimeLineTab viser korrekte verdier', () => {
    const wrapper = shallowWithIntl(<TimeLineTab
      onClickCallback={sinon.spy()}
      stonadskonto={stonadskonto}
    />, messages);

    const formattedMessage = wrapper.find(FormattedMessage);
    expect(formattedMessage.at(0).props().id).toBe('TimeLineTab.Stonadinfo.ForeldrepengerFF');

    const formattedMessage2 = wrapper.find(FormattedMessage);
    // @ts-ignore
    expect(formattedMessage2.at(1).props().values.ukerVerdi).toBe(6);
    // @ts-ignore
    expect(formattedMessage2.at(1).props().values.dagerVerdi).toBe(0);
  });
});
