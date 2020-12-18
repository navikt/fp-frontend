import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';

import { AksjonspunktHelpTextTemp } from '@fpsak-frontend/shared-components';
import OAType from '@fpsak-frontend/kodeverk/src/opptjeningAktivitetType';

import { OpptjeningFaktaFormImpl as OpptjeningFaktaForm } from './OpptjeningFaktaForm';
import CustomOpptjeningAktivitet from '../CustomOpptjeningAktivitet';
import ActivityPanel from './activity/ActivityPanel';

describe('<OpptjeningFaktaForm>', () => {
  const opptjeningActivities = [{
    id: 1,
    aktivitetType: { kode: OAType.ARBEID, kodeverk: '' },
    opptjeningFom: '2017-06-01',
    opptjeningTom: '2017-07-10',
    originalFom: '2017-06-01',
    originalTom: '2017-07-10',
    arbeidsgiverReferanse: '1',
    stillingsandel: 100,
    erGodkjent: true,
    begrunnelse: 'test',
    erManueltOpprettet: false,
    erEndret: false,
  }, {
    id: 2,
    aktivitetType: { kode: OAType.NARING, kodeverk: '' },
    opptjeningFom: '2017-07-15',
    opptjeningTom: '2017-08-15',
    originalFom: '2017-07-15',
    originalTom: '2017-08-15',
    arbeidsgiverReferanse: '1',
    stillingsandel: 100,
    erGodkjent: null,
    begrunnelse: null,
    erManueltOpprettet: false,
    erEndret: false,
  }] as CustomOpptjeningAktivitet[];

  const opptjeningAktivitetTypes = [{
    kode: OAType.ARBEID,
    navn: 'Arbeid',
    kodeverk: '',
  }, {
    kode: OAType.NARING,
    navn: 'Næring',
    kodeverk: '',
  }];

  it('skal vise aksjonspunktinformasjon og knapper når aksjonspunkt finnes', () => {
    const wrapper = shallow(<OpptjeningFaktaForm
      hasAksjonspunkt
      opptjeningFomDato="2017-08-15"
      opptjeningTomDato="2017-08-31"
      readOnly={false}
      opptjeningActivities={opptjeningActivities}
      opptjeningAktivitetTypes={opptjeningAktivitetTypes}
      formName="test"
      behandlingFormPrefix="test"
      reduxFormChange={sinon.spy()}
      reduxFormInitialize={sinon.spy()}
      hasOpenAksjonspunkter
      submitting={false}
      isDirty={false}
      behandlingId={1}
      behandlingVersjon={1}
      alleMerknaderFraBeslutter={{}}
      alleKodeverk={{}}
      arbeidsgiverOpplysningerPerId={{}}
    />);

    wrapper.setState({ selectedOpptjeningActivity: opptjeningActivities[0] });

    const helpText = wrapper.find(AksjonspunktHelpTextTemp);
    expect(helpText).toHaveLength(1);
    expect(helpText.prop('isAksjonspunktOpen')).toBe(true);
    expect(helpText.childAt(0)).toHaveLength(1);
    expect(helpText.childAt(0).prop('id')).toEqual('OpptjeningFaktaForm.FlereArbeidKanGodkjennes');

    expect(wrapper.find(ActivityPanel)).toHaveLength(1);
    const oppdaterKnapp = wrapper.find(Hovedknapp);
    expect(oppdaterKnapp).toHaveLength(1);
    expect(oppdaterKnapp.prop('disabled')).toBe(true);

    const avbrytKnapp = wrapper.find(Knapp);
    expect(avbrytKnapp).toHaveLength(1);
    expect(avbrytKnapp.prop('disabled')).toBe(false);
  });

  it('skal ikke vise aksjonspunktinformasjon og knapper når aksjonspunkt ikke finnes', () => {
    const wrapper = shallow(<OpptjeningFaktaForm
      hasAksjonspunkt={false}
      opptjeningFomDato="2017-08-15"
      opptjeningTomDato="2017-08-31"
      readOnly={false}
      opptjeningActivities={opptjeningActivities}
      opptjeningAktivitetTypes={opptjeningAktivitetTypes}
      formName="test"
      behandlingFormPrefix="test"
      reduxFormChange={sinon.spy()}
      reduxFormInitialize={sinon.spy()}
      hasOpenAksjonspunkter
      submitting={false}
      isDirty={false}
      behandlingId={1}
      behandlingVersjon={1}
      alleMerknaderFraBeslutter={{}}
      alleKodeverk={{}}
      arbeidsgiverOpplysningerPerId={{}}
    />);

    wrapper.setState({ selectedOpptjeningActivity: opptjeningActivities[0] });

    expect(wrapper.find(AksjonspunktHelpTextTemp)).toHaveLength(0);
    expect(wrapper.find(Hovedknapp)).toHaveLength(0);
    expect(wrapper.find(Knapp)).toHaveLength(0);
  });

  it('skal ikke vise informasjon om aktiviteten når det ikke er valgt aktivitetstype i dropdown', () => {
    const wrapper = shallow(<OpptjeningFaktaForm
      hasAksjonspunkt
      opptjeningFomDato="2017-08-15"
      opptjeningTomDato="2017-08-31"
      readOnly={false}
      opptjeningActivities={opptjeningActivities}
      opptjeningAktivitetTypes={opptjeningAktivitetTypes}
      formName="test"
      behandlingFormPrefix="test"
      reduxFormChange={sinon.spy()}
      reduxFormInitialize={sinon.spy()}
      hasOpenAksjonspunkter
      submitting={false}
      isDirty={false}
      behandlingId={1}
      behandlingVersjon={1}
      alleMerknaderFraBeslutter={{}}
      alleKodeverk={{}}
      arbeidsgiverOpplysningerPerId={{}}
    />);

    wrapper.setState({ selectedOpptjeningActivity: undefined });

    expect(wrapper.find(ActivityPanel)).toHaveLength(0);
  });

  it('skal kunne lagre og legge til når ingen aktivitet er valgt og alle aksjonspunkter er avklart', () => {
    const activities = opptjeningActivities.map((oa) => ({
      ...oa,
      erGodkjent: true,
    }));

    const wrapper = shallow(<OpptjeningFaktaForm
      hasAksjonspunkt
      opptjeningFomDato="2017-08-15"
      opptjeningTomDato="2017-08-31"
      readOnly={false}
      opptjeningActivities={activities}
      opptjeningAktivitetTypes={opptjeningAktivitetTypes}
      formName="test"
      behandlingFormPrefix="test"
      reduxFormChange={sinon.spy()}
      reduxFormInitialize={sinon.spy()}
      hasOpenAksjonspunkter
      submitting={false}
      isDirty={false}
      behandlingId={1}
      behandlingVersjon={1}
      alleMerknaderFraBeslutter={{}}
      alleKodeverk={{}}
      arbeidsgiverOpplysningerPerId={{}}
    />);

    wrapper.setState({ selectedOpptjeningActivity: undefined });

    const oppdaterKnapp = wrapper.find(Hovedknapp);
    expect(oppdaterKnapp.prop('disabled')).toBe(false);

    const avbrytKnapp = wrapper.find(Knapp);
    expect(avbrytKnapp.prop('disabled')).toBe(false);
  });

  it('skal automatisk åpne aktivitet som må avklares', () => {
    const formChangeCallback = sinon.spy();
    const formInitCallback = sinon.spy();

    const wrapper = shallow(<OpptjeningFaktaForm
      hasAksjonspunkt
      opptjeningFomDato="2017-08-15"
      opptjeningTomDato="2017-08-31"
      readOnly={false}
      opptjeningActivities={opptjeningActivities}
      opptjeningAktivitetTypes={opptjeningAktivitetTypes}
      behandlingFormPrefix="Behandling_123"
      formName="OpptjeningFaktaForm"
      reduxFormChange={formChangeCallback}
      reduxFormInitialize={formInitCallback}
      hasOpenAksjonspunkter
      submitting={false}
      isDirty={false}
      behandlingId={1}
      behandlingVersjon={1}
      alleMerknaderFraBeslutter={{}}
      alleKodeverk={{}}
      arbeidsgiverOpplysningerPerId={{}}
    />);

    // @ts-ignore Fiks
    expect(wrapper.state().selectedOpptjeningActivity).toEqual(opptjeningActivities[1]);

    expect(formInitCallback.getCalls()).toHaveLength(0);
  });

  it('skal oppdatere aktivitet etter editering', () => {
    const formChangeCallback = sinon.spy();
    const formInitCallback = sinon.spy();

    const wrapper = shallow(<OpptjeningFaktaForm
      hasAksjonspunkt
      opptjeningFomDato="2017-08-15"
      opptjeningTomDato="2017-08-31"
      readOnly={false}
      opptjeningActivities={opptjeningActivities}
      opptjeningAktivitetTypes={opptjeningAktivitetTypes}
      behandlingFormPrefix="Behandling_123"
      formName="OpptjeningFaktaForm"
      reduxFormChange={formChangeCallback}
      reduxFormInitialize={formInitCallback}
      hasOpenAksjonspunkter
      submitting={false}
      isDirty={false}
      behandlingId={1}
      behandlingVersjon={1}
      alleMerknaderFraBeslutter={{}}
      alleKodeverk={{}}
      arbeidsgiverOpplysningerPerId={{}}
    />);

    const activityPanel = wrapper.find(ActivityPanel);
    expect(activityPanel).toHaveLength(1);

    const editedActivity = {
      ...opptjeningActivities[1],
      erEndret: true,
      erGodkjent: true,
    };
    activityPanel.prop('updateActivity')(editedActivity);

    const calls = formChangeCallback.getCalls();
    expect(calls).toHaveLength(1);
    const { args } = calls[0];
    expect(args).toHaveLength(3);
    expect(args[0]).toEqual('Behandling_123.OpptjeningFaktaForm');
    expect(args[1]).toEqual('opptjeningActivities');
    expect(args[2]).toEqual([opptjeningActivities[0], editedActivity]);

    // @ts-ignore Fiks
    expect(wrapper.state().selectedOpptjeningActivity).toBeUndefined();

    expect(formInitCallback.getCalls()).toHaveLength(1);
  });

  it('skal legge til aktivitet', () => {
    const formChangeCallback = sinon.spy();

    const wrapper = shallow(<OpptjeningFaktaForm
      hasAksjonspunkt
      opptjeningFomDato="2017-08-15"
      opptjeningTomDato="2017-08-31"
      readOnly={false}
      opptjeningActivities={opptjeningActivities}
      opptjeningAktivitetTypes={opptjeningAktivitetTypes}
      behandlingFormPrefix="Behandling_123"
      formName="OpptjeningFaktaForm"
      reduxFormChange={formChangeCallback}
      reduxFormInitialize={sinon.spy()}
      hasOpenAksjonspunkter
      submitting={false}
      isDirty={false}
      behandlingId={1}
      behandlingVersjon={1}
      alleMerknaderFraBeslutter={{}}
      alleKodeverk={{}}
      arbeidsgiverOpplysningerPerId={{}}
    />);

    wrapper.find(Knapp).simulate('click');

    // @ts-ignore Fiks
    expect(wrapper.state().selectedOpptjeningActivity).toEqual({
      id: 3,
      erGodkjent: true,
      erManueltOpprettet: true,
    });
  });

  it('skal kunne avbryte editering', () => {
    const formChangeCallback = sinon.spy();
    const formInitCallback = sinon.spy();

    const wrapper = shallow(<OpptjeningFaktaForm
      hasAksjonspunkt
      opptjeningFomDato="2017-08-15"
      opptjeningTomDato="2017-08-31"
      readOnly={false}
      opptjeningActivities={opptjeningActivities}
      opptjeningAktivitetTypes={opptjeningAktivitetTypes}
      behandlingFormPrefix="Behandling_123"
      formName="OpptjeningFaktaForm"
      reduxFormChange={formChangeCallback}
      reduxFormInitialize={formInitCallback}
      hasOpenAksjonspunkter
      submitting={false}
      isDirty={false}
      behandlingId={1}
      behandlingVersjon={1}
      alleMerknaderFraBeslutter={{}}
      alleKodeverk={{}}
      arbeidsgiverOpplysningerPerId={{}}
    />);

    const activityPanel = wrapper.find(ActivityPanel);
    activityPanel.prop('cancelSelectedOpptjeningActivity')();

    const initCalls = formInitCallback.getCalls();
    expect(initCalls).toHaveLength(1);
    expect(initCalls[0].args).toHaveLength(2);
    expect(initCalls[0].args[0]).toEqual('Behandling_123.ActivityPanel');
    expect(initCalls[0].args[1]).toEqual({});

    // @ts-ignore Fiks
    expect(wrapper.state().selectedOpptjeningActivity).toBeUndefined();
  });
});
