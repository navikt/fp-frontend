import React from 'react';

import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { AksjonspunktBox } from '@fpsak-frontend/shared-components';
import { Aksjonspunkt } from '@fpsak-frontend/types';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';

import messages from '../../../i18n/nb_NO.json';
import { InnhentDokOpptjeningUtlandPanel } from './InnhentDokOpptjeningUtlandPanel';

const intlMock = getIntlMock(messages);

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
    />, messages);
    expect(wrapper.find(AksjonspunktBox)).toHaveLength(1);
  });
});
