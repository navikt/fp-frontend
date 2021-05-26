import React from 'react';
import sinon from 'sinon';
import { FormattedMessage } from 'react-intl';
import { Hovedknapp } from 'nav-frontend-knapper';

import {
  PeriodpickerField, RadioGroupField, SelectField, TextAreaField,
} from '@fpsak-frontend/form';
import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { AlleKodeverk } from '@fpsak-frontend/types';
import OAType from '@fpsak-frontend/kodeverk/src/opptjeningAktivitetType';

import CustomOpptjeningAktivitet from '../../CustomOpptjeningAktivitet';
import { ActivityPanel } from './ActivityPanel';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<ActivityPanel>', () => {
  const opptjeningAktivitetTypes = [{
    kode: OAType.ARBEID,
    navn: 'Arbeid',
    kodeverk: '',
  }, {
    kode: OAType.NARING,
    navn: 'Næring',
    kodeverk: '',
  }];

  it('skal vise periodevelger som aktiv når aktivitet ikke er godkjent eller avvist og en har aksjonspunkt', () => {
    const activity = {
      erManueltOpprettet: false,
      erGodkjent: undefined,
    } as CustomOpptjeningAktivitet;

    const wrapper = shallowWithIntl(<ActivityPanel
      {...reduxFormPropsMock}
      intl={intlMock}
      initialValues={activity}
      readOnly={false}
      opptjeningAktivitetTypes={opptjeningAktivitetTypes}
      cancelSelectedOpptjeningActivity={sinon.spy()}
      selectedActivityType={{ kode: OAType.ARBEID, kodeverk: '' }}
      opptjeningFom="2017-08-15"
      opptjeningTom="2017-12-31"
      hasAksjonspunkt
      activityId={1}
      alleMerknaderFraBeslutter={{}}
      updateActivity={() => undefined}
      alleKodeverk={{} as AlleKodeverk}
      activity={activity}
      opptjeningFomDato="2017-08-15"
      opptjeningTomDato="2017-12-31"
      arbeidsgiverOpplysningerPerId={{}}
      filtrerteOpptjeningAktivitetTypes={opptjeningAktivitetTypes}
      onSubmit={sinon.spy()}
    />, messages);

    const periodevelger = wrapper.find(PeriodpickerField);
    expect(periodevelger).toHaveLength(1);
    expect(periodevelger.prop('readOnly')).toBe(false);
  });

  it('skal vise periodevelger som aktiv når aktivitet er manuelt lagt til', () => {
    const activity = {
      erManueltOpprettet: true,
      erGodkjent: true,
      begrunnelse: 'en begrunnelse',
    } as CustomOpptjeningAktivitet;

    const wrapper = shallowWithIntl(<ActivityPanel
      {...reduxFormPropsMock}
      intl={intlMock}
      initialValues={activity}
      readOnly={false}
      opptjeningAktivitetTypes={opptjeningAktivitetTypes}
      cancelSelectedOpptjeningActivity={sinon.spy()}
      selectedActivityType={{ kode: OAType.ARBEID, kodeverk: '' }}
      opptjeningFom="2017-08-15"
      opptjeningTom="2017-12-31"
      hasAksjonspunkt
      activityId={1}
      alleMerknaderFraBeslutter={{}}
      updateActivity={() => undefined}
      alleKodeverk={{} as AlleKodeverk}
      activity={activity}
      opptjeningFomDato="2017-08-15"
      opptjeningTomDato="2017-12-31"
      arbeidsgiverOpplysningerPerId={{}}
      filtrerteOpptjeningAktivitetTypes={opptjeningAktivitetTypes}
      onSubmit={sinon.spy()}
    />, messages);

    const periodevelger = wrapper.find(PeriodpickerField);
    expect(periodevelger).toHaveLength(1);
    expect(periodevelger.prop('readOnly')).toBe(false);
  });

  it('skal vise periodevelger som aktiv når aktivitet er markert med erEndret', () => {
    const activity = {
      erManueltOpprettet: false,
      erGodkjent: true,
      erEndret: true,
    } as CustomOpptjeningAktivitet;

    const wrapper = shallowWithIntl(<ActivityPanel
      {...reduxFormPropsMock}
      intl={intlMock}
      initialValues={activity}
      readOnly={false}
      opptjeningAktivitetTypes={opptjeningAktivitetTypes}
      cancelSelectedOpptjeningActivity={sinon.spy()}
      selectedActivityType={{ kode: OAType.ARBEID, kodeverk: '' }}
      opptjeningFom="2017-08-15"
      opptjeningTom="2017-12-31"
      hasAksjonspunkt
      activityId={1}
      alleMerknaderFraBeslutter={{}}
      updateActivity={() => undefined}
      alleKodeverk={{} as AlleKodeverk}
      activity={activity}
      opptjeningFomDato="2017-08-15"
      opptjeningTomDato="2017-12-31"
      arbeidsgiverOpplysningerPerId={{}}
      filtrerteOpptjeningAktivitetTypes={opptjeningAktivitetTypes}
      onSubmit={sinon.spy()}
    />, messages);

    const periodevelger = wrapper.find(PeriodpickerField);
    expect(periodevelger).toHaveLength(1);
    expect(periodevelger.prop('readOnly')).toBe(false);
  });

  it('skal vise periodevelger som disablet når aktivitet er godkjent automatisk og en ikke har aksjonspunkt', () => {
    const activity = {
      erManueltOpprettet: false,
      erGodkjent: true,
      begrunnelse: undefined,
    } as CustomOpptjeningAktivitet;

    const wrapper = shallowWithIntl(<ActivityPanel
      {...reduxFormPropsMock}
      intl={intlMock}
      initialValues={activity}
      readOnly={false}
      opptjeningAktivitetTypes={opptjeningAktivitetTypes}
      cancelSelectedOpptjeningActivity={sinon.spy()}
      selectedActivityType={{ kode: OAType.ARBEID, kodeverk: '' }}
      opptjeningFom="2017-08-15"
      opptjeningTom="2017-12-31"
      hasAksjonspunkt={false}
      activityId={1}
      alleMerknaderFraBeslutter={{}}
      updateActivity={() => undefined}
      alleKodeverk={{} as AlleKodeverk}
      activity={activity}
      opptjeningFomDato="2017-08-15"
      opptjeningTomDato="2017-12-31"
      arbeidsgiverOpplysningerPerId={{}}
      filtrerteOpptjeningAktivitetTypes={opptjeningAktivitetTypes}
      onSubmit={sinon.spy()}
    />, messages);

    const periodevelger = wrapper.find(PeriodpickerField);
    expect(periodevelger).toHaveLength(1);
    expect(periodevelger.prop('readOnly')).toBe(true);
  });

  it('skal vise antall månder og dager i valgt periode', () => {
    const activity = {
      erManueltOpprettet: false,
      erGodkjent: true,
      begrunnelse: undefined,
    } as CustomOpptjeningAktivitet;

    const wrapper = shallowWithIntl(<ActivityPanel
      {...reduxFormPropsMock}
      intl={intlMock}
      initialValues={activity}
      readOnly={false}
      opptjeningAktivitetTypes={opptjeningAktivitetTypes}
      cancelSelectedOpptjeningActivity={sinon.spy()}
      selectedActivityType={{ kode: OAType.ARBEID, kodeverk: '' }}
      opptjeningFom="2017-08-15"
      opptjeningTom="2017-12-31"
      hasAksjonspunkt={false}
      activityId={1}
      alleMerknaderFraBeslutter={{}}
      updateActivity={() => undefined}
      alleKodeverk={{} as AlleKodeverk}
      activity={activity}
      opptjeningFomDato="2017-08-15"
      opptjeningTomDato="2017-12-31"
      arbeidsgiverOpplysningerPerId={{}}
      filtrerteOpptjeningAktivitetTypes={opptjeningAktivitetTypes}
      onSubmit={sinon.spy()}
    />, messages);

    const daysInPeriodLabel = wrapper.find(FormattedMessage);
    expect(daysInPeriodLabel).toHaveLength(2);
    expect(daysInPeriodLabel.at(1).prop('values')).toEqual({
      days: 17,
      months: 4,
    });
  });

  it('skal vise nedtrekksliste med opptjeningsaktiviteter når saksbehandler manuelt har lagt til aktivitet', () => {
    const activity = {
      erManueltOpprettet: true,
      erGodkjent: true,
      begrunnelse: undefined,
    } as CustomOpptjeningAktivitet;

    const wrapper = shallowWithIntl(<ActivityPanel
      {...reduxFormPropsMock}
      intl={intlMock}
      initialValues={activity}
      readOnly={false}
      opptjeningAktivitetTypes={opptjeningAktivitetTypes}
      cancelSelectedOpptjeningActivity={sinon.spy()}
      selectedActivityType={{ kode: OAType.ARBEID, kodeverk: '' }}
      opptjeningFom="2017-08-15"
      opptjeningTom="2017-12-31"
      hasAksjonspunkt
      activityId={1}
      alleMerknaderFraBeslutter={{}}
      updateActivity={() => undefined}
      alleKodeverk={{} as AlleKodeverk}
      activity={activity}
      opptjeningFomDato="2017-08-15"
      opptjeningTomDato="2017-12-31"
      arbeidsgiverOpplysningerPerId={{}}
      filtrerteOpptjeningAktivitetTypes={opptjeningAktivitetTypes}
      onSubmit={sinon.spy()}
    />, messages);

    const select = wrapper.find(SelectField);
    expect(select).toHaveLength(1);
    expect(select.prop('selectValues').map((sv: any) => sv.key)).toEqual([OAType.ARBEID, OAType.NARING]);
    expect(select.prop('readOnly')).toBe(false);
  });

  it('skal kun vise valgt opptjeningsaktivitet når aktivitet ikke manuelt er lagt til', () => {
    const activity = {
      erManueltOpprettet: false,
      erGodkjent: true,
      begrunnelse: undefined,
    } as CustomOpptjeningAktivitet;

    const wrapper = shallowWithIntl(<ActivityPanel
      {...reduxFormPropsMock}
      intl={intlMock}
      initialValues={activity}
      readOnly={false}
      opptjeningAktivitetTypes={opptjeningAktivitetTypes}
      cancelSelectedOpptjeningActivity={sinon.spy()}
      selectedActivityType={{ kode: OAType.ARBEID, kodeverk: '' }}
      opptjeningFom="2017-08-15"
      opptjeningTom="2017-12-31"
      hasAksjonspunkt
      activityId={1}
      alleMerknaderFraBeslutter={{}}
      updateActivity={() => undefined}
      alleKodeverk={{} as AlleKodeverk}
      activity={activity}
      opptjeningFomDato="2017-08-15"
      opptjeningTomDato="2017-12-31"
      arbeidsgiverOpplysningerPerId={{}}
      filtrerteOpptjeningAktivitetTypes={opptjeningAktivitetTypes}
      onSubmit={sinon.spy()}
    />, messages);

    const select = wrapper.find(SelectField);
    expect(select).toHaveLength(1);
    expect(select.prop('readOnly')).toBe(true);
  });

  it('skal kunne oppdatere aktivitet når den er del av aksjonspunktet', () => {
    const activity = {
      erManueltOpprettet: false,
      erGodkjent: undefined,
      begrunnelse: undefined,
    } as CustomOpptjeningAktivitet;

    const wrapper = shallowWithIntl(<ActivityPanel
      {...reduxFormPropsMock}
      intl={intlMock}
      initialValues={activity}
      readOnly={false}
      opptjeningAktivitetTypes={opptjeningAktivitetTypes}
      cancelSelectedOpptjeningActivity={sinon.spy()}
      selectedActivityType={{ kode: OAType.ARBEID, kodeverk: '' }}
      opptjeningFom="2017-08-15"
      opptjeningTom="2017-12-31"
      hasAksjonspunkt
      activityId={1}
      alleMerknaderFraBeslutter={{}}
      updateActivity={() => undefined}
      alleKodeverk={{} as AlleKodeverk}
      activity={activity}
      opptjeningFomDato="2017-08-15"
      opptjeningTomDato="2017-12-31"
      arbeidsgiverOpplysningerPerId={{}}
      filtrerteOpptjeningAktivitetTypes={opptjeningAktivitetTypes}
      onSubmit={sinon.spy()}
    />, messages);

    expect(wrapper.find(Hovedknapp)).toHaveLength(1);
    expect(wrapper.find(RadioGroupField)).toHaveLength(1);
  });

  it('skal ikke kunne oppdatere aktivitet når den ikke er manuelt lagt til eller del av aksjonspunkt', () => {
    const activity = {
      erManueltOpprettet: false,
      erGodkjent: true,
      begrunnelse: undefined,
    } as CustomOpptjeningAktivitet;

    const wrapper = shallowWithIntl(<ActivityPanel
      {...reduxFormPropsMock}
      intl={intlMock}
      initialValues={activity}
      readOnly={false}
      opptjeningAktivitetTypes={opptjeningAktivitetTypes}
      cancelSelectedOpptjeningActivity={sinon.spy()}
      selectedActivityType={{ kode: OAType.ARBEID, kodeverk: '' }}
      opptjeningFom="2017-08-15"
      opptjeningTom="2017-12-31"
      hasAksjonspunkt={false}
      activityId={1}
      alleMerknaderFraBeslutter={{}}
      updateActivity={() => undefined}
      alleKodeverk={{} as AlleKodeverk}
      activity={activity}
      opptjeningFomDato="2017-08-15"
      opptjeningTomDato="2017-12-31"
      arbeidsgiverOpplysningerPerId={{}}
      filtrerteOpptjeningAktivitetTypes={opptjeningAktivitetTypes}
      onSubmit={sinon.spy()}
    />, messages);

    expect(wrapper.find(Hovedknapp)).toHaveLength(0);
  });

  it('skal ikke kunne godkjenne eller avvise aksjonspunkt når aktivitet manuelt er lagt til', () => {
    const activity = {
      erManueltOpprettet: true,
      erGodkjent: undefined,
      begrunnelse: undefined,
    } as CustomOpptjeningAktivitet;

    const wrapper = shallowWithIntl(<ActivityPanel
      {...reduxFormPropsMock}
      intl={intlMock}
      initialValues={activity}
      readOnly={false}
      opptjeningAktivitetTypes={opptjeningAktivitetTypes}
      cancelSelectedOpptjeningActivity={sinon.spy()}
      selectedActivityType={{ kode: OAType.ARBEID, kodeverk: '' }}
      opptjeningFom="2017-08-15"
      opptjeningTom="2017-12-31"
      hasAksjonspunkt
      activityId={1}
      alleMerknaderFraBeslutter={{}}
      updateActivity={() => undefined}
      alleKodeverk={{} as AlleKodeverk}
      activity={activity}
      opptjeningFomDato="2017-08-15"
      opptjeningTomDato="2017-12-31"
      arbeidsgiverOpplysningerPerId={{}}
      filtrerteOpptjeningAktivitetTypes={opptjeningAktivitetTypes}
      onSubmit={sinon.spy()}
    />, messages);

    expect(wrapper.find(Hovedknapp)).toHaveLength(1);
    expect(wrapper.find(RadioGroupField)).toHaveLength(0);
  });

  it('skal vise uredigerbar begrunnelse hvis readOnly er true', () => {
    const activity = {
      erManueltOpprettet: false,
      erGodkjent: false,
      erEndret: false,
      begrunnelse: undefined,
    } as CustomOpptjeningAktivitet;

    const wrapper = shallowWithIntl(<ActivityPanel
      {...reduxFormPropsMock}
      intl={intlMock}
      initialValues={activity}
      readOnly
      opptjeningAktivitetTypes={opptjeningAktivitetTypes}
      cancelSelectedOpptjeningActivity={sinon.spy()}
      selectedActivityType={{ kode: OAType.ARBEID, kodeverk: '' }}
      opptjeningFom="2017-08-15"
      opptjeningTom="2017-12-31"
      hasAksjonspunkt
      activityId={1}
      alleMerknaderFraBeslutter={{}}
      updateActivity={() => undefined}
      alleKodeverk={{} as AlleKodeverk}
      activity={activity}
      opptjeningFomDato="2017-08-15"
      opptjeningTomDato="2017-12-31"
      arbeidsgiverOpplysningerPerId={{}}
      filtrerteOpptjeningAktivitetTypes={opptjeningAktivitetTypes}
      onSubmit={sinon.spy()}
    />, messages);
    const tekstFelt = wrapper.find(TextAreaField);
    expect(tekstFelt).toHaveLength(1);
    expect(tekstFelt.props().readOnly).toEqual(true);
    // @ts-ignore
    expect(tekstFelt.props().label.props.id).toEqual('ActivityPanel.Begrunnelse');
  });

  it('skal vise uredigerbar begrunnelse hvis man skal disable perioder picker', () => {
    const activity = {
      erManueltOpprettet: false,
      erGodkjent: true,
      erEndret: false,
      begrunnelse: undefined,
    } as CustomOpptjeningAktivitet;

    const wrapper = shallowWithIntl(<ActivityPanel
      {...reduxFormPropsMock}
      intl={intlMock}
      initialValues={activity}
      readOnly={false}
      opptjeningAktivitetTypes={opptjeningAktivitetTypes}
      cancelSelectedOpptjeningActivity={sinon.spy()}
      selectedActivityType={{ kode: OAType.ARBEID, kodeverk: '' }}
      opptjeningFom="2017-08-15"
      opptjeningTom="2017-12-31"
      hasAksjonspunkt
      activityId={1}
      alleMerknaderFraBeslutter={{}}
      updateActivity={() => undefined}
      alleKodeverk={{} as AlleKodeverk}
      activity={activity}
      opptjeningFomDato="2017-08-15"
      opptjeningTomDato="2017-12-31"
      arbeidsgiverOpplysningerPerId={{}}
      filtrerteOpptjeningAktivitetTypes={opptjeningAktivitetTypes}
      onSubmit={sinon.spy()}
    />, messages);
    const tekstFelt = wrapper.find(TextAreaField);
    expect(tekstFelt).toHaveLength(1);
    expect(tekstFelt.props().readOnly).toEqual(true);
    // @ts-ignore
    expect(tekstFelt.props().label.props.id).toEqual('ActivityPanel.Begrunnelse');
  });

  it('skal vise redigerbar begrunnelse hvis man ikke skal disable perioder picker og ikke readOnly', () => {
    const activity = {
      erManueltOpprettet: false,
      erGodkjent: false,
      erEndret: false,
      begrunnelse: undefined,
    } as CustomOpptjeningAktivitet;

    const wrapper = shallowWithIntl(<ActivityPanel
      {...reduxFormPropsMock}
      intl={intlMock}
      initialValues={activity}
      readOnly={false}
      opptjeningAktivitetTypes={opptjeningAktivitetTypes}
      cancelSelectedOpptjeningActivity={sinon.spy()}
      selectedActivityType={{ kode: OAType.ARBEID, kodeverk: '' }}
      opptjeningFom="2017-08-15"
      opptjeningTom="2017-12-31"
      hasAksjonspunkt
      activityId={1}
      alleMerknaderFraBeslutter={{}}
      updateActivity={() => undefined}
      alleKodeverk={{} as AlleKodeverk}
      activity={activity}
      opptjeningFomDato="2017-08-15"
      opptjeningTomDato="2017-12-31"
      arbeidsgiverOpplysningerPerId={{}}
      filtrerteOpptjeningAktivitetTypes={opptjeningAktivitetTypes}
      onSubmit={sinon.spy()}
    />, messages);
    const tekstFelt = wrapper.find(TextAreaField);
    expect(tekstFelt).toHaveLength(1);
    expect(tekstFelt.props().readOnly).toEqual(false);
    // @ts-ignore
    expect(tekstFelt.props().label.props.id).toEqual('ActivityPanel.BegrunnEndringene');
  });
});
