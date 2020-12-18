import React from 'react';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { KlageVurdering } from '@fpsak-frontend/types';

import { FormkravKlageFormNfpImpl } from './FormkravKlageFormNfp';
import FormkravKlageForm from './FormkravKlageForm';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-prosess-formkrav';

describe('<FormkravKlageFormNfp>', () => {
  it('skal initiere fomrkrav-form', () => {
    const wrapper = shallowWithIntl(<FormkravKlageFormNfpImpl
      readOnly={false}
      readOnlySubmitButton
      behandlingId={1}
      behandlingVersjon={2}
      alleKodeverk={{}}
      avsluttedeBehandlinger={[]}
      klageVurdering={{} as KlageVurdering}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      {...reduxFormPropsMock}
    />);
    expect(wrapper.find(FormkravKlageForm)).toHaveLength(1);
  });
});
