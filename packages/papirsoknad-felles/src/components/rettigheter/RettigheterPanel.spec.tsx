import React from 'react';
import { expect } from 'chai';

// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__utils-test... Remove this comment to see the full error message
import { intlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { RadioOption } from '@fpsak-frontend/form';

import SoknadData from '../../SoknadData';
import { RettigheterPanel } from './RettigheterPanel';

describe('<RettigheterPanel>', () => {
  it('skal vise komponent som default', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 4.
    const soknad = new SoknadData('FORELDREPENGER', 'FØDSEL', 'MOR', []);
    const wrapper = shallowWithIntl(<RettigheterPanel intl={intlMock} soknadData={soknad} />);
    const radio = wrapper.find(RadioOption);
    expect(radio).to.have.length(3);
  });

  it('skal vise komponent med ekstra valg for adopsjon', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 4.
    const soknad = new SoknadData('FORELDREPENGER', 'FØDSEL', 'FAR', []);
    const wrapper = shallowWithIntl(<RettigheterPanel intl={intlMock} soknadData={soknad} adopsjon />);
    const radio = wrapper.find(RadioOption);
    expect(radio).to.have.length(4);
  });
});
