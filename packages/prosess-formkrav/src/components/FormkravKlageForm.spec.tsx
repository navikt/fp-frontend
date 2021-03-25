import React from 'react';
import { InjectedFormProps } from 'redux-form';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import { FormkravKlageForm } from './FormkravKlageForm';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-prosess-formkrav';

describe('<FormkravKlageForm>', () => {
  const behandlinger = [{
    id: 1,
    uuid: '1uuid',
    type: {
      kode: behandlingType.FORSTEGANGSSOKNAD,
      kodeverk: 'BEHANDLING_TYPE',
    },
    avsluttet: '2018-10-25T14:14:15',
  }, {
    id: 2,
    uuid: '2uuid',
    type: {
      kode: behandlingType.REVURDERING,
      kodeverk: 'BEHANDLING_TYPE',
    },
    avsluttet: '2018-10-25T17:14:15',
  }, {
    id: 3,
    uuid: '3uuid',
    type: {
      kode: behandlingType.TILBAKEKREVING,
      kodeverk: 'BEHANDLING_TYPE',
    },
    avsluttet: '2020-02-06T14:14:15',
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
      formProps={{} as InjectedFormProps}
      alleKodeverk={{
        [kodeverkTyper.BEHANDLING_TYPE]: [{
          kode: behandlingType.FORSTEGANGSSOKNAD,
          navn: 'Førstegangssøknad',
          kodeverk: 'BEHANDLING_TYPE',
        }, {
          kode: behandlingType.REVURDERING,
          navn: 'Revurdering',
          kodeverk: 'BEHANDLING_TYPE',
        }, {
          kode: behandlingType.TILBAKEKREVING,
          navn: 'Tilbakekreving',
          kodeverk: 'BEHANDLING_TYPE',
        }],
      }}
    />);
    const vedtakSelect = wrapper.find('SelectField');
    expect(vedtakSelect).toHaveLength(1);
    expect(vedtakSelect.prop('selectValues')).toHaveLength(4);
    expect(vedtakSelect.prop('selectValues')[0].props.children).toBe('Ikke påklagd et vedtak');
    expect(vedtakSelect.prop('selectValues')[1].props.children).toBe('Førstegangssøknad 25.10.18 14:14');
    expect(vedtakSelect.prop('selectValues')[2].props.children).toBe('Revurdering 25.10.18 17:14');
    expect(vedtakSelect.prop('selectValues')[3].props.children).toBe('Tilbakekreving 06.02.20 14:14');
  });
});
