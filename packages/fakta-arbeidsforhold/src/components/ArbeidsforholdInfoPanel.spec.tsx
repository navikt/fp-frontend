import React from 'react';
import { shallow } from 'enzyme';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AksjonspunktHelpTextTemp } from '@fpsak-frontend/shared-components';
import { Arbeidsforhold } from '@fpsak-frontend/types';

import { intlMock } from '../../i18n/intl-enzyme-test-helper-fakta-arbeidsforhold';
import { ArbeidsforholdInfoPanelImpl, fjernIdFraArbeidsforholdLagtTilAvSaksbehandler } from './ArbeidsforholdInfoPanel';
import PersonArbeidsforholdPanel from './PersonArbeidsforholdPanel';
import BekreftOgForsettKnapp from './BekreftOgForsettKnapp';

const ap5080 = {
  id: 0,
  definisjon: {
    kodeverk: '',
    kode: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
  },
  status: {
    kodeverk: '',
    kode: '',
  },
  kanLoses: true,
  erAktivt: true,
};

const arbeidsgiverOpplysningerPerId = {
  2: {
    erPrivatPerson: false,
    identifikator: '1234568',
    navn: 'Nav',
  },
};

describe('<ArbeidsforholdInfoPanel>', () => {
  it('Skal vise komponenten korrekt med aksjonspunkt hvor man ikke kan legge til nye arbeidsforhold', () => {
    const wrapper = shallow(
      <ArbeidsforholdInfoPanelImpl
        intl={intlMock}
        aksjonspunkter={[ap5080]}
        readOnly={false}
        hasOpenAksjonspunkter
        skalKunneLeggeTilNyeArbeidsforhold={false}
        behandlingId={1}
        behandlingVersjon={1}
        alleKodeverk={{}}
        alleMerknaderFraBeslutter={{}}
        arbeidsforhold={[]}
        submitCallback={() => undefined}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...reduxFormPropsMock}
      />,
    );
    const apMsg = wrapper.find('FormattedMessage');
    expect(apMsg).toHaveLength(1);
    expect(apMsg.props().id).toEqual('ArbeidsforholdInfoPanel.AvklarArbeidsforhold');
    expect(wrapper.find(PersonArbeidsforholdPanel)).toHaveLength(1);
    expect(wrapper.find(BekreftOgForsettKnapp)).toHaveLength(1);
  });
  it('Skal vise komponenten korrekt med aksjonspunkt hvor man kan legge til nye arbeidsforhold', () => {
    const wrapper = shallow(
      <ArbeidsforholdInfoPanelImpl
        intl={intlMock}
        aksjonspunkter={[ap5080]}
        readOnly={false}
        hasOpenAksjonspunkter
        skalKunneLeggeTilNyeArbeidsforhold
        behandlingId={1}
        behandlingVersjon={1}
        alleKodeverk={{}}
        alleMerknaderFraBeslutter={{}}
        arbeidsforhold={[]}
        submitCallback={() => undefined}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...reduxFormPropsMock}
      />,
    );
    const apMsg = wrapper.find('FormattedMessage');
    expect(apMsg).toHaveLength(1);
    expect(apMsg.props().id).toEqual('ArbeidsforholdInfoPanel.IngenArbeidsforholdRegistrert');
    expect(wrapper.find(PersonArbeidsforholdPanel)).toHaveLength(1);
    expect(wrapper.find(BekreftOgForsettKnapp)).toHaveLength(1);
  });
  it('Skal vise komponenten korrekt uten aksjonspunkt hvor man kan legge til nye arbeidsforhold', () => {
    const wrapper = shallow(
      <ArbeidsforholdInfoPanelImpl
        intl={intlMock}
        aksjonspunkter={[]}
        readOnly={false}
        hasOpenAksjonspunkter={false}
        skalKunneLeggeTilNyeArbeidsforhold
        behandlingId={1}
        behandlingVersjon={1}
        alleKodeverk={{}}
        alleMerknaderFraBeslutter={{}}
        arbeidsforhold={[]}
        submitCallback={() => undefined}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...reduxFormPropsMock}
      />,
    );
    expect(wrapper.find(PersonArbeidsforholdPanel)).toHaveLength(1);
    expect(wrapper.find(BekreftOgForsettKnapp)).toHaveLength(0);
    expect(wrapper.find(AksjonspunktHelpTextTemp)).toHaveLength(0);
  });
  it('skal fjerne ID fra arbeidsforhold som er lagt til av saksbehandler, men ikke fra andre', () => {
    const arbeidsforhold = [
      {
        id: '1',
        lagtTilAvSaksbehandler: true,
      },
      {
        id: '2',
        lagtTilAvSaksbehandler: false,
      },
    ];
    const result = fjernIdFraArbeidsforholdLagtTilAvSaksbehandler(arbeidsforhold as Arbeidsforhold[]);
    expect(result[0].id).toEqual(null);
    expect(result[0].lagtTilAvSaksbehandler).toEqual(true);
    expect(result[1].id).toEqual('2');
    expect(result[1].lagtTilAvSaksbehandler).toEqual(false);
  });
});
