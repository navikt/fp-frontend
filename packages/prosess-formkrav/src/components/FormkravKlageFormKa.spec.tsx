import React from 'react';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { KlageVurdering } from '@fpsak-frontend/types';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import { FormkravKlageFormKa } from './FormkravKlageFormKa';
import FormkravKlageForm from './FormkravKlageForm';
import messages from '../../i18n/nb_NO.json';

describe('<FormkravKlageFormKa>', () => {
  it('skal initiere form', () => {
    const wrapper = shallowWithIntl(<FormkravKlageFormKa
      {...reduxFormPropsMock}
      readOnly={false}
      readOnlySubmitButton
      alleKodeverk={{}}
      avsluttedeBehandlinger={[]}
      klageVurdering={{} as KlageVurdering}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
    />, messages);
    expect(wrapper.find(FormkravKlageForm)).toHaveLength(1);
  });
});
