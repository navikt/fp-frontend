import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import sinon from 'sinon';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import foreldelseVurderingType from '@fpsak-frontend/kodeverk/src/foreldelseVurderingType';
import { AlleKodeverkTilbakekreving, FeilutbetalingPerioderWrapper } from '@fpsak-frontend/types';

import ForeldelsesresultatActivity from '../types/foreldelsesresultatActivitytsType';
import { ForeldelseForm } from './ForeldelseForm';
import TilbakekrevingTimelinePanel from './timeline/TilbakekrevingTimelinePanel';
import ForeldelsePeriodeForm from './ForeldelsePeriodeForm';

describe('<ForeldelseForm>', () => {
  it('skal vise informasjon om foreldelsesloven og ikke vise tidslinje når en ikke har aksjonspunkt', () => {
    const perioder = [{
      fom: '2019-10-10',
      tom: '2019-11-10',
      foreldelseVurderingType: {
        kode: foreldelseVurderingType.UDEFINERT,
        kodeverk: '',
      },
    }] as ForeldelsesresultatActivity[];

    const wrapper = shallow(<ForeldelseForm
      {...reduxFormPropsMock}
      foreldelsesresultatActivity={perioder}
      reduxFormChange={sinon.spy()}
      reduxFormInitialize={sinon.spy()}
      navBrukerKjonn="MANN"
      readOnly={false}
      readOnlySubmitButton={false}
      apCodes={[]}
      merknaderFraBeslutter={{
        notAccepted: false,
      }}
      alleKodeverk={{} as AlleKodeverkTilbakekreving}
      beregnBelop={sinon.spy()}
      behandlingUuid="1"
      perioderForeldelse={{} as FeilutbetalingPerioderWrapper}
      alleMerknaderFraBeslutter={{}}
      submitCallback={sinon.spy()}
      initialValues={{
        foreldelsesresultatActivity: perioder,
      }}
      onSubmit={sinon.spy()}
    />);

    expect(wrapper.find(TilbakekrevingTimelinePanel)).toHaveLength(0);
    const messages = wrapper.find(FormattedMessage);
    expect(messages).toHaveLength(3);
    expect(messages.at(1).prop('id')).toEqual('ForeldelseForm.Foreldelsesloven');
  });

  it('skal ikke vise informasjon om foreldelsesloven og vise tidslinje når en har aksjonspunkt', () => {
    const perioder = [{
      fom: '2019-10-10',
      tom: '2019-11-10',
      foreldelseVurderingType: {
        kode: foreldelseVurderingType.UDEFINERT,
      },
    }] as ForeldelsesresultatActivity[];
    const wrapper = shallow(<ForeldelseForm
      {...reduxFormPropsMock}
      foreldelsesresultatActivity={perioder}
      reduxFormChange={sinon.spy()}
      reduxFormInitialize={sinon.spy()}
      navBrukerKjonn="MANN"
      readOnly={false}
      readOnlySubmitButton={false}
      merknaderFraBeslutter={{
        notAccepted: false,
      }}
      apCodes={['5003']}
      alleKodeverk={{} as AlleKodeverkTilbakekreving}
      beregnBelop={sinon.spy()}
      behandlingUuid="1"
      perioderForeldelse={{} as FeilutbetalingPerioderWrapper}
      alleMerknaderFraBeslutter={{}}
      submitCallback={sinon.spy()}
      initialValues={{
        foreldelsesresultatActivity: perioder,
      }}
      onSubmit={sinon.spy()}
    />);

    expect(wrapper.find(TilbakekrevingTimelinePanel)).toHaveLength(1);
    expect(wrapper.find(FormattedMessage)).toHaveLength(2);
  });

  it('skal ikke vise default periode når periode er foreldet', () => {
    const perioder = [{
      fom: '2019-10-10',
      tom: '2019-11-10',
      foreldelseVurderingType: {
        kode: foreldelseVurderingType.FORELDET,
      },
    }] as ForeldelsesresultatActivity[];
    const wrapper = shallow(<ForeldelseForm
      {...reduxFormPropsMock}
      foreldelsesresultatActivity={perioder}
      reduxFormChange={sinon.spy()}
      reduxFormInitialize={sinon.spy()}
      navBrukerKjonn="MANN"
      readOnly={false}
      readOnlySubmitButton={false}
      merknaderFraBeslutter={{
        notAccepted: false,
      }}
      apCodes={['5003']}
      alleKodeverk={{} as AlleKodeverkTilbakekreving}
      beregnBelop={sinon.spy()}
      behandlingUuid="1"
      perioderForeldelse={{} as FeilutbetalingPerioderWrapper}
      alleMerknaderFraBeslutter={{}}
      submitCallback={sinon.spy()}
      initialValues={{
        foreldelsesresultatActivity: perioder,
      }}
      onSubmit={sinon.spy()}
    />);

    expect(wrapper.find(ForeldelsePeriodeForm)).toHaveLength(0);
  });
});
