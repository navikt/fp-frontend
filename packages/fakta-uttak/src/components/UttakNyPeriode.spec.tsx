import React from 'react';
import { FormattedMessage } from 'react-intl';
import sinon from 'sinon';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import {
  CheckboxField, DecimalField, PeriodpickerField, SelectField, TextAreaField,
} from '@fpsak-frontend/form';
import { AlleKodeverk, FaktaArbeidsforhold, Personoversikt } from '@fpsak-frontend/types';
import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';

import { NyPeriode, UttakNyPeriode } from './UttakNyPeriode';
import messages from '../../i18n/nb_NO.json';

const periodeTyper = [{ kode: 'FELLESPERIODE', navn: 'Fellesperioden', kodeverk: 'UTTAK_PERIODE_TYPE' },
  { kode: 'MØDREKVOTE', navn: 'Mødrekvoten', kodeverk: 'UTTAK_PERIODE_TYPE' },
  { kode: 'FEDREKVOTE', navn: 'Fedrekvoten', kodeverk: 'UTTAK_PERIODE_TYPE' },
  { kode: 'FORELDREPENGER', navn: 'Foreldrepenger', kodeverk: 'UTTAK_PERIODE_TYPE' },
  { kode: 'ANNET', navn: 'Andre typer som f.eks utsettelse', kodeverk: 'UTTAK_PERIODE_TYPE' },
  { kode: 'FORELDREPENGER_FØR_FØDSEL', navn: 'Foreldrepenger før fødsel', kodeverk: 'UTTAK_PERIODE_TYPE' },
];

const utsettelseÅrsaker = [{ kode: 'LOVBESTEMT_FERIE', navn: 'Lovbestemt ferie', kodeverk: 'UTSETTELSE_AARSAK_TYPE' },
  { kode: 'SYKDOM', navn: 'Avhengig av hjelp grunnet sykdom', kodeverk: 'UTSETTELSE_AARSAK_TYPE' },
  { kode: 'ARBEID', navn: 'Arbeid', kodeverk: 'UTSETTELSE_AARSAK_TYPE' },
  { kode: 'INSTITUSJONSOPPHOLD_SØKER', navn: 'Søker er innlagt i helseinstitusjon', kodeverk: 'UTSETTELSE_AARSAK_TYPE' },
  { kode: 'INSTITUSJONSOPPHOLD_BARNET', navn: 'Barn er innlagt i helseinstitusjon', kodeverk: 'UTSETTELSE_AARSAK_TYPE' },
];

const overføringÅrsaker = [{
  kode: 'INSTITUSJONSOPPHOLD_ANNEN_FORELDER',
  navn: 'Den andre foreldren er innlagt i helseinstitusjon',
  kodeverk: 'OVERFOERING_AARSAK_TYPE',
}, {
  kode: 'SYKDOM_ANNEN_FORELDER',
  navn: 'Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna',
  kodeverk: 'OVERFOERING_AARSAK_TYPE',
}, {
  kode: 'IKKE_RETT_ANNEN_FORELDER',
  navn: 'Den andre foreldren har ikke rett',
  kodeverk: 'OVERFOERING_AARSAK_TYPE',
}, {
  kode: 'ALENEOMSORG',
  navn: 'Søker har aleneomsorg',
  kodeverk: 'OVERFOERING_AARSAK_TYPE',
}];

const nyPeriode = {
  fom: '2018-02-01',
  tom: '2018-03-05',
} as NyPeriode;

const andeler = [{
  arbeidsgiverReferanse: '973861778',
  arbeidType: 'ORDINÆRT_ARBEID',
}];

const arbeidsgiverOpplysningerPerId = {
  973861778: {
    erPrivatPerson: false,
    identifikator: '973861778',
    navn: 'STATOIL ASA AVD STATOIL SOKKELVIRKSOMHETS',
  },
};

const sokerKjonn = navBrukerKjonn.MANN;

const newPeriodeResetCallback = sinon.spy();
const getKodeverknavn = sinon.spy();

describe('<UttakNyPeriode>', () => {
  it('skal vise skjema for ny utakksperiode', () => {
    const wrapper = shallowWithIntl(<UttakNyPeriode
      newPeriodeResetCallback={newPeriodeResetCallback}
      utsettelseÅrsaker={utsettelseÅrsaker}
      overføringÅrsaker={overføringÅrsaker}
      andeler={andeler}
      nyPeriode={nyPeriode}
      sokerKjonn={sokerKjonn}
      nyPeriodeDisabledDaysFom="2018-05-20"
      alleKodeverk={{} as AlleKodeverk}
      getKodeverknavn={getKodeverknavn}
      periodeTyper={periodeTyper}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      newPeriodeCallback={() => undefined}
      onSubmit={() => undefined}
      uttakPeriodeVurderingTyper={[]}
      faktaArbeidsforhold={{} as FaktaArbeidsforhold[]}
      personoversikt={{} as Personoversikt}
      {...reduxFormPropsMock}
    />, messages);

    const title = wrapper.find(FormattedMessage).first();
    expect(title.prop('id')).toBe('UttakInfoPanel.NyPeriode');

    const periodpicker = wrapper.find(PeriodpickerField);
    expect(periodpicker).toHaveLength(1);

    const select = wrapper.find(SelectField);
    expect(select).toHaveLength(1);

    const checkbox = wrapper.find(CheckboxField);
    expect(checkbox).toHaveLength(2);

    const textAreaField = wrapper.find(TextAreaField);
    expect(textAreaField).toHaveLength(1);

    const okKnapp = wrapper.find('Hovedknapp');
    expect(okKnapp).toHaveLength(1);
    expect(okKnapp.prop('mini')).toBe(true);
    expect(okKnapp.prop('htmlType')).toEqual('button');
    expect(okKnapp.prop('onClick')).toEqual(reduxFormPropsMock.handleSubmit);
    expect(okKnapp.find(FormattedMessage).prop('id')).toBe('UttakInfoPanel.Oppdater');

    const avbrytKnapp = wrapper.find(Knapp);
    expect(avbrytKnapp).toHaveLength(1);
    expect(avbrytKnapp.prop('mini')).toBe(true);

    expect(avbrytKnapp.prop('onClick')).toEqual(newPeriodeResetCallback);
    expect(avbrytKnapp.find(FormattedMessage).prop('id')).toBe('UttakInfoPanel.Avbryt');
  });

  it('Skal regne ut og vise antall dager i valgt periode', () => {
    const wrapper = shallowWithIntl(<UttakNyPeriode
      newPeriodeResetCallback={newPeriodeResetCallback}
      utsettelseÅrsaker={utsettelseÅrsaker}
      overføringÅrsaker={overføringÅrsaker}
      andeler={andeler}
      nyPeriode={nyPeriode}
      sokerKjonn={sokerKjonn}
      nyPeriodeDisabledDaysFom="2018-05-20"
      alleKodeverk={{} as AlleKodeverk}
      getKodeverknavn={getKodeverknavn}
      periodeTyper={periodeTyper}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      newPeriodeCallback={() => undefined}
      onSubmit={() => undefined}
      uttakPeriodeVurderingTyper={[]}
      faktaArbeidsforhold={{} as FaktaArbeidsforhold[]}
      personoversikt={{} as Personoversikt}
      {...reduxFormPropsMock}
    />, messages);

    const weeksAndDays = wrapper.find(FormattedMessage).at(1);
    expect(weeksAndDays.prop('id')).toEqual('UttakInfoPanel.AntallFlereDagerOgFlereUker');
    expect(weeksAndDays.prop('values')).toEqual({
      weeks: '4',
      days: '3',
    });
  });

  it('skal vise dropdown for årsak til overføring av kvote hvis søker er kvinne og stønadskonto er FEDREKVOTE', () => {
    const wrapper = shallowWithIntl(<UttakNyPeriode
      newPeriodeResetCallback={newPeriodeResetCallback}
      utsettelseÅrsaker={utsettelseÅrsaker}
      overføringÅrsaker={overføringÅrsaker}
      andeler={andeler}
      nyPeriode={nyPeriode}
      sokerKjonn={sokerKjonn}
      nyPeriodeDisabledDaysFom="2018-05-20"
      alleKodeverk={{} as AlleKodeverk}
      getKodeverknavn={getKodeverknavn}
      periodeTyper={periodeTyper}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      newPeriodeCallback={() => undefined}
      onSubmit={() => undefined}
      uttakPeriodeVurderingTyper={[]}
      faktaArbeidsforhold={{} as FaktaArbeidsforhold[]}
      personoversikt={{} as Personoversikt}
      {...reduxFormPropsMock}
    />, messages);
    wrapper.setProps({
      // @ts-ignore Fiks
      nyPeriode: {
        periodeType: 'MØDREKVOTE',
      } as NyPeriode,
    });
    const input = wrapper.find(SelectField);
    expect(input).toHaveLength(2);
  });

  it('skal vise dropdown for årsak for utsettelsen hvis type uttak er satt til utsettelse', () => {
    const wrapper = shallowWithIntl(<UttakNyPeriode
      newPeriodeResetCallback={newPeriodeResetCallback}
      utsettelseÅrsaker={utsettelseÅrsaker}
      overføringÅrsaker={overføringÅrsaker}
      andeler={andeler}
      nyPeriode={nyPeriode}
      sokerKjonn={sokerKjonn}
      nyPeriodeDisabledDaysFom="2018-05-20"
      alleKodeverk={{} as AlleKodeverk}
      getKodeverknavn={getKodeverknavn}
      periodeTyper={periodeTyper}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      newPeriodeCallback={() => undefined}
      onSubmit={() => undefined}
      uttakPeriodeVurderingTyper={[]}
      faktaArbeidsforhold={{} as FaktaArbeidsforhold[]}
      personoversikt={{} as Personoversikt}
      {...reduxFormPropsMock}
    />, messages);
    wrapper.setProps({
      // @ts-ignore Fiks
      nyPeriode: {
        typeUttak: 'utsettelse',
      },
    });
    const select = wrapper.find(SelectField);
    expect(select).toHaveLength(2);
  });

  it('skal vise graderingandel hvis type uttak er gradert for og validere at graderingen er et heltall', () => {
    const wrapper = shallowWithIntl(<UttakNyPeriode
      newPeriodeResetCallback={newPeriodeResetCallback}
      utsettelseÅrsaker={utsettelseÅrsaker}
      overføringÅrsaker={overføringÅrsaker}
      andeler={andeler}
      nyPeriode={nyPeriode}
      sokerKjonn={sokerKjonn}
      nyPeriodeDisabledDaysFom="2018-05-20"
      alleKodeverk={{} as AlleKodeverk}
      getKodeverknavn={getKodeverknavn}
      periodeTyper={periodeTyper}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      newPeriodeCallback={() => undefined}
      onSubmit={() => undefined}
      uttakPeriodeVurderingTyper={[]}
      faktaArbeidsforhold={{} as FaktaArbeidsforhold[]}
      personoversikt={{} as Personoversikt}
      {...reduxFormPropsMock}
    />, messages);
    wrapper.setProps({
      // @ts-ignore Fiks
      nyPeriode: {
        typeUttak: 'gradert',
      },
    });
    const input = wrapper.find(DecimalField);
    expect(input).toHaveLength(1);
  });

  it('skal vise prosentandel for samtidig uttak hvis samtidig uttak er valgt og validere at det er et heltall', () => {
    const wrapper = shallowWithIntl(<UttakNyPeriode
      newPeriodeResetCallback={newPeriodeResetCallback}
      utsettelseÅrsaker={utsettelseÅrsaker}
      overføringÅrsaker={overføringÅrsaker}
      andeler={andeler}
      nyPeriode={nyPeriode}
      sokerKjonn={sokerKjonn}
      nyPeriodeDisabledDaysFom="2018-05-20"
      alleKodeverk={{} as AlleKodeverk}
      getKodeverknavn={getKodeverknavn}
      periodeTyper={periodeTyper}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      newPeriodeCallback={() => undefined}
      onSubmit={() => undefined}
      uttakPeriodeVurderingTyper={[]}
      faktaArbeidsforhold={{} as FaktaArbeidsforhold[]}
      personoversikt={{} as Personoversikt}
      {...reduxFormPropsMock}
    />, messages);
    wrapper.setProps({
      // @ts-ignore Fiks
      nyPeriode: {
        samtidigUttakNyPeriode: true,
      },
    });
    const input = wrapper.find(DecimalField);
    expect(input).toHaveLength(1);
  });

  it('Skal sende inn ny periode når man klikker på Oppdater', () => {
    const wrapper = shallowWithIntl(<UttakNyPeriode
      newPeriodeResetCallback={newPeriodeResetCallback}
      utsettelseÅrsaker={utsettelseÅrsaker}
      overføringÅrsaker={overføringÅrsaker}
      andeler={andeler}
      nyPeriode={nyPeriode}
      sokerKjonn={sokerKjonn}
      nyPeriodeDisabledDaysFom="2018-05-20"
      alleKodeverk={{} as AlleKodeverk}
      getKodeverknavn={getKodeverknavn}
      periodeTyper={periodeTyper}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      newPeriodeCallback={() => undefined}
      onSubmit={() => undefined}
      uttakPeriodeVurderingTyper={[]}
      faktaArbeidsforhold={{} as FaktaArbeidsforhold[]}
      personoversikt={{} as Personoversikt}
      {...reduxFormPropsMock}
    />, messages);
    wrapper.setProps({
      // @ts-ignore Fiks
      nyPeriode: {
        periodeType: 'FEDREKVOTE',
      },
    });
    const okKnapp = wrapper.find(Hovedknapp);
    okKnapp.simulate('click');
    expect(reduxFormPropsMock.handleSubmit.called).toBe(true);
  });
});
