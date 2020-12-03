import React from 'react';
import { expect } from 'chai';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { KlageVurdering } from '@fpsak-frontend/types';

import { FormkravKlageFormKa } from './FormkravKlageFormKa';
import FormkravKlageForm from './FormkravKlageForm';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-prosess-formkrav';

describe('<FormkravKlageFormKa>', () => {
  it('skal initiere form', () => {
    const wrapper = shallowWithIntl(<FormkravKlageFormKa
      {...reduxFormPropsMock}
      readOnly={false}
      readOnlySubmitButton
      behandlingId={1}
      behandlingVersjon={1}
      alleKodeverk={{}}
      avsluttedeBehandlinger={[]}
      klageVurdering={{} as KlageVurdering}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
    />);
    expect(wrapper.find(FormkravKlageForm)).has.length(1);
  });
});
