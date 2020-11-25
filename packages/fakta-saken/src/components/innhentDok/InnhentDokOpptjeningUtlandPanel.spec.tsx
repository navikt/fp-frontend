import React from 'react';
import { expect } from 'chai';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { AksjonspunktBox } from '@fpsak-frontend/shared-components';
import { Aksjonspunkt } from '@fpsak-frontend/types';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';

import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-fakta-saken';
import { InnhentDokOpptjeningUtlandPanel } from './InnhentDokOpptjeningUtlandPanel';

describe('<InnhentDokOpptjeningUtlandPanel>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallowWithIntl(<InnhentDokOpptjeningUtlandPanel
      {...reduxFormPropsMock}
      intl={intlMock}
      behandlingId={1}
      behandlingVersjon={1}
      harApneAksjonspunkter
      handleSubmit={() => undefined}
      readOnly={false}
      submittable
      initialValues={{ begrunnelse: undefined }}
      form="FORM_NAVN"
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      aksjonspunkt={{} as Aksjonspunkt}
    />);
    expect(wrapper.find(AksjonspunktBox)).to.have.length(1);
  });
});
