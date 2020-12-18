import React from 'react';
import sinon from 'sinon';

import { Stonadskonto } from '@fpsak-frontend/types';

import TimeLineTab from './TimeLineTab';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-proses-uttak';

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
    />);

    const formattedMessage = wrapper.find('FormattedMessage');
    expect(formattedMessage.at(0).props().id).toBe('TimeLineTab.Stonadinfo.ForeldrepengerFF');

    const FormattedMessage = wrapper.find('FormattedMessage');
    // @ts-ignore
    expect(FormattedMessage.at(1).props().values.ukerVerdi).toBe(6);
    // @ts-ignore
    expect(FormattedMessage.at(1).props().values.dagerVerdi).toBe(0);
  });
});
