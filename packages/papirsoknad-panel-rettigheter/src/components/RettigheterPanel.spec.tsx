import React from 'react';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { RadioOption } from '@fpsak-frontend/form';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';

import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-papirsoknad-rettigheter';
import { RettigheterPanel } from './RettigheterPanel';

describe('<RettigheterPanel>', () => {
  it('skal vise komponent som default', () => {
    const soknad = new SoknadData('FORELDREPENGER', 'FØDSEL', 'MOR');
    const wrapper = shallowWithIntl(<RettigheterPanel intl={intlMock} soknadData={soknad} />);
    const radio = wrapper.find(RadioOption);
    expect(radio).toHaveLength(3);
  });

  it('skal vise komponent med ekstra valg for adopsjon', () => {
    const soknad = new SoknadData('FORELDREPENGER', 'FØDSEL', 'FAR');
    const wrapper = shallowWithIntl(<RettigheterPanel intl={intlMock} soknadData={soknad} />);
    const radio = wrapper.find(RadioOption);
    expect(radio).toHaveLength(4);
  });
});
