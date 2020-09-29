import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import klageVurdering from '@fpsak-frontend/kodeverk/src/klageVurdering';
import { KlageVurdering } from '@fpsak-frontend/types';

import { VedtakKlageSubmitPanelImpl } from './VedtakKlageSubmitPanel';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-proses-vedtak-klage';

describe('<VedtakKlageSubmitPanel>', () => {
  const forhandsvisVedtaksbrevFunc = sinon.spy();

  it('skal rendre submit panel uten medhold i klagevurdering', () => {
    const klageVurderingResultatNK = {
      klageVurdering: 'TEST',
    } as KlageVurdering['klageVurderingResultatNK'];

    const wrapper = shallowWithIntl(<VedtakKlageSubmitPanelImpl
      intl={intlMock}
      formProps={reduxFormPropsMock}
      readOnly={false}
      behandlingPaaVent={false}
      klageResultat={klageVurderingResultatNK}
      previewVedtakCallback={forhandsvisVedtaksbrevFunc}
    />);

    const hovedknapp = wrapper.find('Hovedknapp');
    expect(hovedknapp).to.have.length(1);
    expect(hovedknapp.childAt(0).text()).to.eql('Til godkjenning');
    const a = wrapper.find('a');
    expect(a).to.have.length(1);
    expect(wrapper.find('FormattedMessage').first().prop('id')).to.eql('VedtakKlageForm.ForhandvisBrev');
  });

  it('skal rendre submit panel med medhold i klagevurdering', () => {
    const klageVurderingResultatNK = {
      klageVurdering: klageVurdering.MEDHOLD_I_KLAGE,
    } as KlageVurdering['klageVurderingResultatNK'];

    const wrapper = shallowWithIntl(<VedtakKlageSubmitPanelImpl
      intl={intlMock}
      formProps={reduxFormPropsMock}
      readOnly={false}
      behandlingPaaVent={false}
      klageResultat={klageVurderingResultatNK}
      previewVedtakCallback={forhandsvisVedtaksbrevFunc}
    />);

    const hovedknapp = wrapper.find('Hovedknapp');
    expect(hovedknapp).to.have.length(1);
    expect(hovedknapp.childAt(0).text()).to.eql('Til godkjenning');
    const a = wrapper.find('a');
    expect(a).to.have.length(1);
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
    expect(hovedknapp).to.have.length(1);
    expect(hovedknapp.childAt(0).text()).to.eql('Til godkjenning');
    expect(hovedknapp.prop('disabled')).is.true;

    const a = wrapper.find('a');
    expect(a).to.have.length(1);
  });
});
