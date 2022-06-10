import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import sinon from 'sinon';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Row } from 'nav-frontend-grid';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { CheckboxField } from '@fpsak-frontend/form';
import { Tidslinje } from '@navikt/ft-tidslinje';
import { KjønnkodeEnum } from '@fpsak-frontend/types/src/Kjonnkode';
import {
  Aksjonspunkt, AlleKodeverk, Behandling, FamilieHendelseSamling, PeriodeSokerAktivitet, Personoversikt,
  UttakPeriodeGrense, UttaksresultatPeriode, UttakStonadskontoer, Ytelsefordeling,
} from '@fpsak-frontend/types';

import UttakTimeLineData from './UttakTimeLineData';
import messages from '../../i18n/nb_NO.json';
import { Uttak, UttaksresultatActivity, PeriodeMedClassName } from './Uttak';

const intlMock = getIntlMock(messages);

describe('<Uttak>', () => {
  const uttakActivities = [{
    id: 1,
    fom: '',
    tom: '',
    periodeResultatType: '',
    aktiviteter: [{
      stønadskontoType: '',
    }] as PeriodeSokerAktivitet[],
  }, {
    id: 2,
    fom: '',
    tom: '',
    periodeResultatType: '',
    aktiviteter: [{
      stønadskontoType: '',
    }] as PeriodeSokerAktivitet[],
  }];

  const stonadskonto = {
    stonadskontoer: {},
  } as UttakStonadskontoer;

  it('skal rendre uttak, uten selected timeline', () => {
    const wrapper = shallow(<Uttak
      readOnly={false}
      formName="UttakForm"
      soknadDate="2018-03-02"
      familiehendelseDate="2018-02-02"
      endringsdato="2018-01-12"
      hovedsokerKjonnKode={KjønnkodeEnum.KVINNE}
      uttaksresultatActivity={[]}
      reduxFormChange={sinon.spy()}
      reduxFormInitialize={sinon.spy()}
      submitting={false}
      isDirty={false}
      manuellOverstyring={false}
      isApOpen={false}
      stonadskonto={stonadskonto}
      intl={intlMock}
      soknadsType="ST-001"
      uttakPerioder={[]}
      harSoktOmFlerbarnsdager={false}
      annenForelderSoktOmFlerbarnsdager={false}
      tempUpdateStonadskontoer={sinon.spy()}
      alleKodeverk={{} as AlleKodeverk}
      behandlingUuid="999"
      behandlingsresultat={{} as Behandling['behandlingsresultat']}
      medsokerKjonnKode={KjønnkodeEnum.MANN}
      person={{} as Personoversikt}
      familiehendelse={{} as FamilieHendelseSamling}
      uttakPeriodeGrense={{} as UttakPeriodeGrense}
      ytelsefordeling={{} as Ytelsefordeling}
      behandlingType={behandlingType.FORSTEGANGSSOKNAD}
      behandlingStatus={behandlingStatus.OPPRETTET}
      employeeHasAccess
      uttaksresultat={{} as UttaksresultatPeriode}
      mottattDato="10.10.2020"
      arbeidsgiverOpplysningerPerId={{}}
    />);
    wrapper.setState({ selectedItem: null });
    const rows = wrapper.find(Row);
    expect(rows).toHaveLength(3);
    const checkBox = wrapper.find(CheckboxField);
    expect(checkBox).toHaveLength(1);
    expect(checkBox.first().prop('name')).toEqual('manuellOverstyring');
    const uttakTimeLine = wrapper.find(Tidslinje);
    expect(uttakTimeLine).toHaveLength(1);
    const uttakTimeLineData = wrapper.find(UttakTimeLineData);
    expect(uttakTimeLineData).toHaveLength(0);
    const confirmKnapp = wrapper.find(Hovedknapp);
    expect(confirmKnapp).toHaveLength(0);
  });

  it('skal rendre uttak, med manuell overstyring', () => {
    const wrapper = shallow(<Uttak
      readOnly={false}
      formName="UttakForm"
      soknadDate="2018-03-02"
      familiehendelseDate="2018-02-02"
      endringsdato="2018-01-12"
      hovedsokerKjonnKode={KjønnkodeEnum.KVINNE}
      uttaksresultatActivity={uttakActivities as UttaksresultatActivity[]}
      uttakPerioder={uttakActivities as PeriodeMedClassName[]}
      reduxFormChange={sinon.spy()}
      reduxFormInitialize={sinon.spy()}
      submitting={false}
      isDirty={false}
      manuellOverstyring
      isApOpen={false}
      stonadskonto={stonadskonto}
      intl={intlMock}
      soknadsType="ST-001"
      harSoktOmFlerbarnsdager={false}
      annenForelderSoktOmFlerbarnsdager={false}
      tempUpdateStonadskontoer={sinon.spy()}
      alleKodeverk={{} as AlleKodeverk}
      behandlingUuid="999"
      behandlingsresultat={{} as Behandling['behandlingsresultat']}
      medsokerKjonnKode={KjønnkodeEnum.MANN}
      person={{} as Personoversikt}
      familiehendelse={{} as FamilieHendelseSamling}
      uttakPeriodeGrense={{} as UttakPeriodeGrense}
      ytelsefordeling={{} as Ytelsefordeling}
      behandlingType={behandlingType.FORSTEGANGSSOKNAD}
      behandlingStatus={behandlingStatus.OPPRETTET}
      employeeHasAccess
      uttaksresultat={{} as UttaksresultatPeriode}
      mottattDato="10.10.2020"
      arbeidsgiverOpplysningerPerId={{}}
    />);
    wrapper.setState({
      selectedItem: {
        ...uttakActivities[0],
        hovedsoker: true,
      },
    });
    const checkBox = wrapper.find(CheckboxField);
    expect(checkBox).toHaveLength(1);
    const formattedMessage = wrapper.find(FormattedMessage);
    expect(formattedMessage).toHaveLength(1);
    expect(formattedMessage.first().prop('id')).toEqual('Uttak.Confirm');
    expect(checkBox.first().prop('name')).toEqual('manuellOverstyring');
    const uttakTimeLine = wrapper.find(Tidslinje);
    expect(uttakTimeLine).toHaveLength(1);
    const uttakTimeLineData = wrapper.find(UttakTimeLineData);
    expect(uttakTimeLineData).toHaveLength(1);
    const confirmKnapp = wrapper.find(Hovedknapp);
    expect(confirmKnapp).toHaveLength(1);
    expect(confirmKnapp.first().prop('disabled')).toEqual(true);
  });

  it('skal rendre uttak, uten overstyrerrolle, uten aksjonspunkt', () => {
    const wrapper = shallow(<Uttak
      readOnly={false}
      formName="UttakForm"
      soknadDate="2018-03-02"
      familiehendelseDate="2018-02-02"
      endringsdato="2018-01-12"
      hovedsokerKjonnKode={KjønnkodeEnum.KVINNE}
      uttaksresultatActivity={uttakActivities as UttaksresultatActivity[]}
      uttakPerioder={[]}
      reduxFormChange={sinon.spy()}
      reduxFormInitialize={sinon.spy()}
      submitting={false}
      isDirty={false}
      manuellOverstyring={false}
      stonadskonto={stonadskonto}
      intl={intlMock}
      soknadsType="ST-001"
      harSoktOmFlerbarnsdager={false}
      annenForelderSoktOmFlerbarnsdager={false}
      tempUpdateStonadskontoer={sinon.spy()}
      alleKodeverk={{} as AlleKodeverk}
      behandlingUuid="999"
      behandlingsresultat={{} as Behandling['behandlingsresultat']}
      medsokerKjonnKode={KjønnkodeEnum.MANN}
      person={{} as Personoversikt}
      familiehendelse={{} as FamilieHendelseSamling}
      uttakPeriodeGrense={{} as UttakPeriodeGrense}
      ytelsefordeling={{} as Ytelsefordeling}
      behandlingType={behandlingType.FORSTEGANGSSOKNAD}
      behandlingStatus={behandlingStatus.OPPRETTET}
      employeeHasAccess={false}
      uttaksresultat={{} as UttaksresultatPeriode}
      mottattDato="10.10.2020"
      arbeidsgiverOpplysningerPerId={{}}
    />);
    wrapper.setState({
      selectedItem: {
        ...uttakActivities[0],
        hovedsoker: true,
      },
    });
    const checkBox = wrapper.find(CheckboxField);
    expect(checkBox).toHaveLength(0);
    const uttakTimeLine = wrapper.find(Tidslinje);
    expect(uttakTimeLine).toHaveLength(1);
    const uttakTimeLineData = wrapper.find(UttakTimeLineData);
    expect(uttakTimeLineData).toHaveLength(1);
    const confirmKnapp = wrapper.find(Hovedknapp);
    expect(confirmKnapp).toHaveLength(0);
    const formattedMessage = wrapper.find(FormattedMessage);
    expect(formattedMessage).toHaveLength(1);
    expect(formattedMessage.first().prop('id')).toEqual('Uttak.Overstyrt');
  });

  it('skal rendre uttak, med aksjonspunkt', () => {
    const aksjonspunkter = [{
      definisjon: aksjonspunktCodes.FASTSETT_UTTAKPERIODER,
      status: 'OPPR',
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: false,
      kanLoses: true,
      erAktivt: true,
    }] as Aksjonspunkt[];
    const wrapper = shallow(<Uttak
      readOnly={false}
      aksjonspunkter={aksjonspunkter}
      formName="UttakForm"
      soknadDate="2018-03-02"
      familiehendelseDate="2018-02-02"
      endringsdato="2018-01-12"
      hovedsokerKjonnKode={KjønnkodeEnum.KVINNE}
      uttaksresultatActivity={uttakActivities as UttaksresultatActivity[]}
      uttakPerioder={[]}
      reduxFormChange={sinon.spy()}
      reduxFormInitialize={sinon.spy()}
      submitting={false}
      isDirty={false}
      manuellOverstyring={false}
      isApOpen
      stonadskonto={stonadskonto}
      intl={intlMock}
      soknadsType="ST-001"
      harSoktOmFlerbarnsdager={false}
      annenForelderSoktOmFlerbarnsdager={false}
      tempUpdateStonadskontoer={sinon.spy()}
      alleKodeverk={{} as AlleKodeverk}
      behandlingUuid="999"
      behandlingsresultat={{} as Behandling['behandlingsresultat']}
      medsokerKjonnKode={KjønnkodeEnum.MANN}
      person={{} as Personoversikt}
      familiehendelse={{} as FamilieHendelseSamling}
      uttakPeriodeGrense={{} as UttakPeriodeGrense}
      ytelsefordeling={{} as Ytelsefordeling}
      behandlingType={behandlingType.FORSTEGANGSSOKNAD}
      behandlingStatus={behandlingStatus.OPPRETTET}
      employeeHasAccess={false}
      uttaksresultat={{} as UttaksresultatPeriode}
      mottattDato="10.10.2020"
      arbeidsgiverOpplysningerPerId={{}}
    />);
    wrapper.setState({
      selectedItem: {
        ...uttakActivities[0],
        hovedsoker: true,
      },
    });
    const checkBox = wrapper.find(CheckboxField);
    expect(checkBox).toHaveLength(0);
    const formattedMessage = wrapper.find(FormattedMessage);
    expect(formattedMessage).toHaveLength(1);
    expect(formattedMessage.first().prop('id')).toEqual('Uttak.Confirm');
    const uttakTimeLine = wrapper.find(Tidslinje);
    expect(uttakTimeLine).toHaveLength(1);
    const uttakTimeLineData = wrapper.find(UttakTimeLineData);
    expect(uttakTimeLineData).toHaveLength(1);
    const confirmKnapp = wrapper.find(Hovedknapp);
    expect(confirmKnapp).toHaveLength(1);
  });

  it('skal rendre uttak, med uttakTimeLineData', () => {
    const aksjonspunkter = [{
      definisjon: aksjonspunktCodes.FASTSETT_UTTAKPERIODER,
      status: 'UTFO',
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: false,
      kanLoses: true,
      erAktivt: true,
    }] as Aksjonspunkt[];
    const wrapper = shallow(<Uttak
      readOnly={false}
      aksjonspunkter={aksjonspunkter}
      formName="UttakForm"
      soknadDate="2018-03-02"
      familiehendelseDate="2018-02-02"
      endringsdato="2018-01-12"
      hovedsokerKjonnKode={KjønnkodeEnum.KVINNE}
      uttaksresultatActivity={uttakActivities as UttaksresultatActivity[]}
      uttakPerioder={uttakActivities as PeriodeMedClassName[]}
      reduxFormChange={sinon.spy()}
      reduxFormInitialize={sinon.spy()}
      submitting={false}
      isDirty={false}
      manuellOverstyring={false}
      isApOpen
      stonadskonto={stonadskonto}
      intl={intlMock}
      soknadsType="ST-001"
      harSoktOmFlerbarnsdager={false}
      annenForelderSoktOmFlerbarnsdager={false}
      tempUpdateStonadskontoer={sinon.spy()}
      alleKodeverk={{} as AlleKodeverk}
      behandlingUuid="999"
      behandlingsresultat={{} as Behandling['behandlingsresultat']}
      medsokerKjonnKode={KjønnkodeEnum.MANN}
      person={{} as Personoversikt}
      familiehendelse={{} as FamilieHendelseSamling}
      uttakPeriodeGrense={{} as UttakPeriodeGrense}
      ytelsefordeling={{} as Ytelsefordeling}
      behandlingType={behandlingType.FORSTEGANGSSOKNAD}
      behandlingStatus={behandlingStatus.OPPRETTET}
      employeeHasAccess
      uttaksresultat={{} as UttaksresultatPeriode}
      mottattDato="10.10.2020"
      arbeidsgiverOpplysningerPerId={{}}
    />);
    wrapper.setState({
      selectedItem: {
        ...uttakActivities[0],
        hovedsoker: true,
      },
    });
    expect(wrapper.state('selectedItem')).toEqual({
      ...uttakActivities[0],
      hovedsoker: true,
    });

    const uttakTimeLineData = wrapper.find(UttakTimeLineData);
    expect(uttakTimeLineData).toHaveLength(1);
    // TODO Kvifor feiler dette?
    /*
    const uttakTimeLine = wrapper.find(Tidslinje);
    uttakTimeLine.prop('openPeriodInfo')({ preventDefault: sinon.spy() });
    wrapper.update();
    expect(wrapper.state('selectedItem')).to.eql({
      ...uttakActivities[0],
      hovedsoker: true,
    });
    */

    // @ts-ignore
    uttakTimeLineData.prop('callbackForward')({ preventDefault() { return undefined; } });
    wrapper.update();
    expect(wrapper.state('selectedItem')).toEqual({
      ...uttakActivities[1],
    });

    // @ts-ignore
    uttakTimeLineData.prop('callbackBackward')({ preventDefault() { return undefined; } });
    wrapper.update();
    expect(wrapper.state('selectedItem')).toEqual({
      ...uttakActivities[0],
    });

    uttakTimeLineData.prop('callbackCancelSelectedActivity')();
    wrapper.update();
    expect(wrapper.state('selectedItem')).toBeUndefined();
  });
});
