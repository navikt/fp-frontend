import React from 'react';
import { shallow } from 'enzyme';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { RadioOption } from '@fpsak-frontend/form';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';

import messages from '../../i18n/nb_NO.json';
import { RettigheterPanel } from './RettigheterPanel';

const intlMock = getIntlMock(messages);

describe('<RettigheterPanel>', () => {
  it('skal vise komponent som default', () => {
    const soknad = new SoknadData('FORELDREPENGER', 'FØDSEL', 'MOR');
    const wrapper = shallow(<RettigheterPanel intl={intlMock} soknadData={soknad} />);
    const radio = wrapper.find(RadioOption);
    expect(radio).toHaveLength(3);
  });

  it('skal vise komponent med ekstra valg for adopsjon', () => {
    const soknad = new SoknadData('FORELDREPENGER', 'FØDSEL', 'FAR');
    const wrapper = shallow(<RettigheterPanel intl={intlMock} soknadData={soknad} />);
    const radio = wrapper.find(RadioOption);
    expect(radio).toHaveLength(4);
  });
});
