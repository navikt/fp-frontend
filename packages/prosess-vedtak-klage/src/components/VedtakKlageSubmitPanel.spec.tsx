import React from 'react';
import sinon from 'sinon';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import { VedtakKlageSubmitPanelImpl } from './VedtakKlageSubmitPanel';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-proses-vedtak-klage';

describe('<VedtakKlageSubmitPanel>', () => {
  const forhandsvisVedtaksbrevFunc = sinon.spy();

  it('skal rendre submit panel uten medhold i klagevurdering', () => {
    const wrapper = shallowWithIntl(<VedtakKlageSubmitPanelImpl
      intl={intlMock}
      formProps={reduxFormPropsMock}
      readOnly={false}
      behandlingPaaVent={false}
      previewVedtakCallback={forhandsvisVedtaksbrevFunc}
    />);

    const hovedknapp = wrapper.find('Hovedknapp');
    expect(hovedknapp).toHaveLength(1);
    expect(hovedknapp.childAt(0).text()).toEqual('Til godkjenning');
    const a = wrapper.find('a');
    expect(a).toHaveLength(1);
    expect(wrapper.find('FormattedMessage').first().prop('id')).toEqual('VedtakKlageForm.ForhandvisBrev');
  });

  it('skal rendre submit panel med behandling på vent', () => {
    const wrapper = shallowWithIntl(<VedtakKlageSubmitPanelImpl
      intl={intlMock}
      formProps={reduxFormPropsMock}
      readOnly={false}
      behandlingPaaVent
      previewVedtakCallback={forhandsvisVedtaksbrevFunc}
    />);

    const hovedknapp = wrapper.find('Hovedknapp');
    expect(hovedknapp).toHaveLength(1);
    expect(hovedknapp.childAt(0).text()).toEqual('Til godkjenning');
    expect(hovedknapp.prop('disabled')).toBe(true);

    const a = wrapper.find('a');
    expect(a).toHaveLength(1);
  });
});
