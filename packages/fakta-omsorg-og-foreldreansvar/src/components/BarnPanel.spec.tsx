import React from 'react';
import { shallow } from 'enzyme';
import { Normaltekst } from 'nav-frontend-typografi';

import { Soknad } from '@fpsak-frontend/types';

import { intlMock } from '../../i18n/intl-enzyme-test-helper-fakta-omsorg-og-foreldreansvar';
import BarnPanel from './BarnPanel';

describe('<BarnPanel>', () => {
  it('skal vise alle fødselsdatoer i søknad', () => {
    const soknad = {
      adopsjonFodelsedatoer: {
        1: '2020-01-01',
        2: '2020-01-02',
      } as Record<number, string>,
    } as Soknad;

    const wrapper = shallow(<BarnPanel
      intl={intlMock}
      soknad={soknad}
      alleMerknaderFraBeslutter={{}}
    />);

    const normaltekstFelter = wrapper.find(Normaltekst);
    expect(normaltekstFelter).toHaveLength(2);
    expect(normaltekstFelter.at(0).childAt(0).text()).toEqual('01.01.2020');
    expect(normaltekstFelter.at(1).childAt(0).text()).toEqual('02.01.2020');
  });
});
