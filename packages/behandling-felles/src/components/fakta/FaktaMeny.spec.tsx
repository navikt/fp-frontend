import React from 'react';
import { shallow } from 'enzyme';
import SideMenu from '@navikt/nap-side-menu';

import { intlMock } from '../../../i18n/intl-enzyme-test-helper-behandling-felles';
import FaktaMeny from './FaktaMeny';

describe('<FaktaMeny>', () => {
  it('skal vise data i meny', () => {
    const wrapper = shallow(<FaktaMeny.WrappedComponent
      intl={intlMock}
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
