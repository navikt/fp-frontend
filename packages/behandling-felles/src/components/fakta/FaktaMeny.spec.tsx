import React from 'react';
import { shallow } from 'enzyme';
import { SideMenu } from '@navikt/fp-react-components';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import messages from '../../../i18n/nb_NO.json';
import FaktaMeny from './FaktaMeny';

describe('<FaktaMeny>', () => {
  it('skal vise data i meny', () => {
    const wrapper = shallow(<FaktaMeny.WrappedComponent
      intl={getIntlMock(messages)}
      menyData={[{
        id: 'id',
        tekst: 'Dette er menylabel',
        erAktiv: true,
        harApneAksjonspunkter: false,
        harHentetInitData: true,
      }]}
      oppdaterFaktaPanelIUrl={() => {}}
    />);

    const meny = wrapper.find(SideMenu);

    expect(meny).toHaveLength(1);
    expect(meny.props().links).toEqual([{
      label: 'Dette er menylabel',
      active: true,
      iconSrc: undefined,
      iconAltText: undefined,
    }]);
  });
});
