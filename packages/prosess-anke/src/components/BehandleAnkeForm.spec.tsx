import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import Sinon from 'sinon';

import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt, AnkeVurdering } from '@fpsak-frontend/types';
import ankeVurdering from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { SelectField, RadioGroupField } from '@fpsak-frontend/form';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';

import messages from '../../i18n/nb_NO.json';

import PreviewAnkeLink from './PreviewAnkeLink';
import { BehandleAnkeForm } from './BehandleAnkeForm';

const intlMock = getIntlMock(messages);

describe('<BehandleAnkeForm>', () => {
  const fellesProps = {
    readOnly: false,
    saveAnke: Sinon.spy(),
    previewCallback: Sinon.spy(),
    readOnlySubmitButton: false,
    aksjonspunkter: [{
      definisjon: AksjonspunktCode.MANUELL_VURDERING_AV_ANKE,
    } as Aksjonspunkt],
    sprakkode: 'nb',
    behandlinger: [],
    ankeOmgorArsaker: [],
    behandlingTyper: [{
      kode: behandlingType.FORSTEGANGSSOKNAD,
      navn: 'Førstegangsbehandling',
      kodeverk: '',
    }, {
      kode: behandlingType.KLAGE,
      navn: 'Klage',
      kodeverk: '',
    }],
    behandlingStatuser: [{
      kode: behandlingStatus.OPPRETTET,
      navn: 'Opprettet',
      kodeverk: '',
    }],
    submitCallback: Sinon.spy(),
    ankeVurderingResultat: {} as AnkeVurdering['ankeVurderingResultat'],
    aksjonspunktCode: AksjonspunktCode.MANUELL_VURDERING_AV_ANKE,
    initialValues: {
      erIkkeKonkret: false,
      erFristIkkeOverholdt: false,
      erIkkeSignert: false,
    },
    onSubmit: () => '',
    intl: intlMock,
  };

  it('skal vise komponent for avvist anke', () => {
    const wrapper = shallow(<BehandleAnkeForm
      {...reduxFormPropsMock}
      {...fellesProps}
      formValues={{
        ankeVurdering: ankeVurdering.ANKE_AVVIS,
      }}
    />);

    expect(wrapper.find(PreviewAnkeLink)).toHaveLength(0);

    const message = wrapper.find(FormattedMessage);
    expect(message).toHaveLength(5);
    expect(message.at(3).props().id).toEqual('Ankebehandling.Avvisning');
  });

  it('skal vise komponent for omgjort anke', () => {
    const wrapper = shallow(<BehandleAnkeForm
      {...reduxFormPropsMock}
      {...fellesProps}
      formValues={{
        ankeVurdering: ankeVurdering.ANKE_OMGJOER,
      }}
    />);

    expect(wrapper.find(PreviewAnkeLink)).toHaveLength(1);

    expect(wrapper.find(RadioGroupField)).toHaveLength(2);
    const select = wrapper.find(SelectField);
    expect(select).toHaveLength(2);
    expect(select.at(1).props().name).toEqual('ankeOmgjoerArsak');
  });

  it('skal vise komponent for opphevet og hjemsendt anke', () => {
    const wrapper = shallow(<BehandleAnkeForm
      {...reduxFormPropsMock}
      {...fellesProps}
      formValues={{
        ankeVurdering: ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE,
      }}
    />);

    expect(wrapper.find(RadioGroupField)).toHaveLength(1);
    const select = wrapper.find(SelectField);
    expect(select).toHaveLength(2);
    expect(select.at(1).props().name).toEqual('ankeOmgjoerArsak');
  });

  it('skal lage verdier til dropdown', () => {
    const wrapper = shallow(<BehandleAnkeForm
      {...reduxFormPropsMock}
      {...fellesProps}
      formValues={{
        ankeVurdering: ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE,
      }}
      behandlinger={[{
        uuid: '1',
        opprettet: '2021-08-02T00:54:25.455',
        type: behandlingType.FORSTEGANGSSOKNAD,
        status: behandlingStatus.OPPRETTET,
      }, {
        uuid: '2',
        opprettet: '2021-10-10T00:54:25.455',
        type: behandlingType.KLAGE,
        status: behandlingStatus.OPPRETTET,
      }]}
    />);
    const select = wrapper.find(SelectField);
    expect(select.at(0).props().selectValues.map((sv) => sv.props.children))
      .toStrictEqual(['Ikke påanket vedtak', '10.10.2021 - Klage - Opprettet']);
  });
});
