import React from 'react';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { expect } from 'chai';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { FormkravKlageForm } from './FormkravKlageForm';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-prosess-formkrav';

describe('<FormkravKlageForm>', () => {
  const behandlinger = [{
    id: 1,
    type: {
      kode: behandlingType.FORSTEGANGSSOKNAD,
      kodeverk: 'BEHANDLING_TYPE',
    },
    avsluttet: '2018-10-25T14:14:15',
  }, {
    id: 2,
    type: {
      kode: behandlingType.REVURDERING,
      kodeverk: 'BEHANDLING_TYPE',
    },
    avsluttet: '2018-10-25T14:14:15',
  }];

  it('skal vise tre options når to mulige klagbare vedtak', () => {
    const wrapper = shallowWithIntl(<FormkravKlageForm
      behandlingId={1}
      behandlingVersjon={1}
      readOnly={false}
      readOnlySubmitButton
      aksjonspunktCode={aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_NFP}
      avsluttedeBehandlinger={behandlinger}
      intl={intlMock}
      formProps={{}}
      alleKodeverk={{
        [kodeverkTyper.BEHANDLING_TYPE]: [{
          kode: behandlingType.FORSTEGANGSSOKNAD,
          navn: 'Førstegangssøknad',
          kodeverk: 'BEHANDLING_TYPE',
        }, {
          kode: behandlingType.REVURDERING,
          navn: 'Revurdering',
          kodeverk: 'BEHANDLING_TYPE',
        }],
      }}
    />);
    const vedtakSelect = wrapper.find('SelectField');
    expect(vedtakSelect).to.have.length(1);
    expect(vedtakSelect.prop('selectValues')).to.have.length(3);
    expect(vedtakSelect.prop('selectValues')[0].props.children).to.equal('Ikke påklagd et vedtak');
    expect(vedtakSelect.prop('selectValues')[1].props.children).to.equal('Førstegangssøknad 25.10.2018');
  });
});
