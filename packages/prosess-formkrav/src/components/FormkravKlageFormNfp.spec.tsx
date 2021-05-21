import React from 'react';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { AlleKodeverk, KlageVurdering } from '@fpsak-frontend/types';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import { FormkravKlageFormNfpImpl } from './FormkravKlageFormNfp';
import FormkravKlageForm from './FormkravKlageForm';
import messages from '../../i18n/nb_NO.json';

describe('<FormkravKlageFormNfp>', () => {
  it('skal initiere fomrkrav-form', () => {
    const wrapper = shallowWithIntl(<FormkravKlageFormNfpImpl
      readOnly={false}
      readOnlySubmitButton
      alleKodeverk={{} as AlleKodeverk}
      avsluttedeBehandlinger={[]}
      klageVurdering={{} as KlageVurdering}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      {...reduxFormPropsMock}
    />, messages);
    expect(wrapper.find(FormkravKlageForm)).toHaveLength(1);
  });
});
