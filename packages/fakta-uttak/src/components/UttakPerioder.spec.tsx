import React from 'react';
import sinon from 'sinon';
import { FormattedMessage } from 'react-intl';
import { Knapp } from 'nav-frontend-knapper';

import { FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import { AksjonspunktHelpTextHTML } from '@fpsak-frontend/shared-components';
import { FamilieHendelseSamling, Kodeverk, Personoversikt } from '@fpsak-frontend/types';

import { UttakPerioder } from './UttakPerioder';
import UttakSlettPeriodeModal from './UttakSlettPeriodeModal';
import UttakNyPeriode from './UttakNyPeriode';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-fakta-uttak';

const reduxFormChange = sinon.spy();
const reduxFormReset = sinon.spy();
const getKodeverknavn = sinon.spy();
const familiehendelse = {
  gjeldende: {
    skjaringstidspunkt: '2019-08-01',
    avklartBarn: [
      {
        fodselsdato: '2019-08-01',
        dodsdato: null,
      },
    ],
    brukAntallBarnFraTps: false,
    dokumentasjonForeligger: true,
    termindato: '2019-08-01',
    antallBarnTermin: 1,
    utstedtdato: null,
    morForSykVedFodsel: null,
    vedtaksDatoSomSvangerskapsuke: null,
  },
} as FamilieHendelseSamling;

describe('<UttakPerioder>', () => {
  it('skal vise uttak UttakPerioder', () => {
    const wrapper = shallowWithIntl(
      <UttakPerioder
        readOnly
        hasOpenAksjonspunkter
        behandlingFormPrefix="UttakFaktaForm"
        perioder={[]}
        openForms={false}
        reduxFormChange={reduxFormChange}
        reduxFormReset={reduxFormReset}
        submitting={false}
        initialValues={{}}
        personoversikt={{} as Personoversikt}
        uttakPeriodeVurderingTyper={[]}
        aksjonspunkter={[]}
        hasRevurderingOvertyringAp={false}
        kanOverstyre={false}
        getKodeverknavn={getKodeverknavn}
        faktaArbeidsforhold={[]}
        behandlingId={1}
        behandlingVersjon={1}
        behandlingStatus={{} as Kodeverk}
        alleKodeverk={{}}
        familiehendelse={familiehendelse}
        førsteUttaksdato="2018-01-12"
        arbeidsgiverOpplysningerPerId={{}}
        submittable
      />,
    );

    const fieldArray = wrapper.find('FieldArray');
    const flexContainer = wrapper.find('FlexContainer');
    const flexRow = wrapper.find('FlexRow');
    const flexColumn = wrapper.find('FlexColumn');
    const element = wrapper.find('Element');
    const uttakNyPeriode = wrapper.find('UttakNyPeriode');
    const uttakSlettPeriodeModal = wrapper.find('UttakSlettPeriodeModal');
    expect(fieldArray).toHaveLength(1);
    expect(flexContainer).toHaveLength(2);
    expect(flexRow).toHaveLength(2);
    expect(flexColumn).toHaveLength(3);
    expect(element).toHaveLength(1);
    expect(uttakNyPeriode).toHaveLength(0);
    expect(uttakSlettPeriodeModal).toHaveLength(0);
  });

  it('skal vise UttakNyPeriode og disable knapper når isNyPeriodeFormOpen er true', () => {
    const wrapper = shallowWithIntl(
      <UttakPerioder
        readOnly
        hasOpenAksjonspunkter
        behandlingFormPrefix="UttakFaktaForm"
        perioder={[]}
        openForms={false}
        reduxFormChange={reduxFormChange}
        reduxFormReset={reduxFormReset}
        submitting={false}
        initialValues={{}}
        personoversikt={{} as Personoversikt}
        uttakPeriodeVurderingTyper={[]}
        aksjonspunkter={[]}
        hasRevurderingOvertyringAp={false}
        kanOverstyre={false}
        getKodeverknavn={getKodeverknavn}
        faktaArbeidsforhold={[]}
        behandlingId={1}
        behandlingVersjon={1}
        behandlingStatus={{} as Kodeverk}
        alleKodeverk={{}}
        familiehendelse={familiehendelse}
        førsteUttaksdato="2018-01-12"
        arbeidsgiverOpplysningerPerId={{}}
        submittable
      />,
    );

    wrapper.setState({ isNyPeriodeFormOpen: true });
    const fieldArray = wrapper.find('FieldArray');
    const flexContainer = wrapper.find('FlexContainer');
    const uttakSlettPeriodeModal = wrapper.find('UttakSlettPeriodeModal');
    const uttakNyPeriode = wrapper.find(UttakNyPeriode);
    const hovedknapp = wrapper.find(FaktaSubmitButton);
    const knapp = wrapper.find(Knapp);
    expect(hovedknapp.prop('isReadOnly')).toBe(true);
    expect(knapp.prop('disabled')).toBe(true);
    expect(fieldArray).toHaveLength(1);
    expect(flexContainer).toHaveLength(2);
    expect(uttakSlettPeriodeModal).toHaveLength(0);
    expect(uttakNyPeriode).toHaveLength(1);
  });

  it('skal vise UttakSlettPeriodeModal når showModalSlettPeriode er true', () => {
    const wrapper = shallowWithIntl(
      <UttakPerioder
        readOnly
        hasOpenAksjonspunkter
        behandlingFormPrefix="UttakFaktaForm"
        perioder={[]}
        openForms={false}
        reduxFormChange={reduxFormChange}
        reduxFormReset={reduxFormReset}
        submitting={false}
        initialValues={{}}
        personoversikt={{} as Personoversikt}
        uttakPeriodeVurderingTyper={[]}
        aksjonspunkter={[]}
        hasRevurderingOvertyringAp={false}
        kanOverstyre={false}
        getKodeverknavn={getKodeverknavn}
        faktaArbeidsforhold={[]}
        behandlingId={1}
        behandlingVersjon={1}
        behandlingStatus={{} as Kodeverk}
        alleKodeverk={{}}
        familiehendelse={familiehendelse}
        førsteUttaksdato="2018-01-12"
        arbeidsgiverOpplysningerPerId={{}}
        submittable
      />,
    );

    wrapper.setState({ showModalSlettPeriode: true });
    const fieldArray = wrapper.find('FieldArray');
    const flexContainer = wrapper.find('FlexContainer');
    const uttakNyPeriode = wrapper.find('UttakNyPeriode');
    const uttakSlettPeriodeModal = wrapper.find(UttakSlettPeriodeModal);
    expect(fieldArray).toHaveLength(1);
    expect(flexContainer).toHaveLength(2);
    expect(uttakNyPeriode).toHaveLength(0);
    expect(uttakSlettPeriodeModal).toHaveLength(0);
  });

  it('skal disable knapper når disableButtons er true', () => {
    const wrapper = shallowWithIntl(
      <UttakPerioder
        readOnly
        hasOpenAksjonspunkter
        behandlingFormPrefix="UttakFaktaForm"
        perioder={[]}
        openForms={false}
        reduxFormChange={reduxFormChange}
        reduxFormReset={reduxFormReset}
        submitting={false}
        initialValues={{}}
        personoversikt={{} as Personoversikt}
        uttakPeriodeVurderingTyper={[]}
        aksjonspunkter={[]}
        hasRevurderingOvertyringAp={false}
        kanOverstyre={false}
        getKodeverknavn={getKodeverknavn}
        faktaArbeidsforhold={[]}
        behandlingId={1}
        behandlingVersjon={1}
        behandlingStatus={{} as Kodeverk}
        alleKodeverk={{}}
        familiehendelse={familiehendelse}
        førsteUttaksdato="2018-01-12"
        arbeidsgiverOpplysningerPerId={{}}
        submittable
      />,
    );

    const hovedknapp = wrapper.find(FaktaSubmitButton);
    const knapp = wrapper.find(Knapp);
    expect(hovedknapp.prop('isReadOnly')).toBe(true);
    expect(knapp.prop('disabled')).toBe(true);
  });

  it('skal disable knapper når readOnly er true', () => {
    const wrapper = shallowWithIntl(
      <UttakPerioder
        readOnly
        hasOpenAksjonspunkter
        behandlingFormPrefix="UttakFaktaForm"
        perioder={[]}
        openForms={false}
        reduxFormChange={reduxFormChange}
        reduxFormReset={reduxFormReset}
        submitting={false}
        initialValues={{}}
        personoversikt={{} as Personoversikt}
        uttakPeriodeVurderingTyper={[]}
        aksjonspunkter={[]}
        hasRevurderingOvertyringAp={false}
        kanOverstyre={false}
        getKodeverknavn={getKodeverknavn}
        faktaArbeidsforhold={[]}
        behandlingId={1}
        behandlingVersjon={1}
        behandlingStatus={{} as Kodeverk}
        alleKodeverk={{}}
        familiehendelse={familiehendelse}
        førsteUttaksdato="2018-01-12"
        arbeidsgiverOpplysningerPerId={{}}
        submittable
      />,
    );

    const hovedknapp = wrapper.find(FaktaSubmitButton);
    const knapp = wrapper.find(Knapp);
    expect(hovedknapp.prop('isReadOnly')).toBe(true);
    expect(knapp.prop('disabled')).toBe(true);
  });

  it('skal ikke disable knapper når openForms og readOnly er false', () => {
    const wrapper = shallowWithIntl(
      <UttakPerioder
        readOnly={false}
        hasOpenAksjonspunkter
        behandlingFormPrefix="UttakFaktaForm"
        perioder={[]}
        openForms={false}
        reduxFormChange={reduxFormChange}
        reduxFormReset={reduxFormReset}
        submitting={false}
        initialValues={{}}
        personoversikt={{} as Personoversikt}
        uttakPeriodeVurderingTyper={[]}
        aksjonspunkter={[]}
        hasRevurderingOvertyringAp={false}
        kanOverstyre={false}
        getKodeverknavn={getKodeverknavn}
        faktaArbeidsforhold={[]}
        behandlingId={1}
        behandlingVersjon={1}
        behandlingStatus={{} as Kodeverk}
        alleKodeverk={{}}
        familiehendelse={familiehendelse}
        førsteUttaksdato="2018-01-12"
        arbeidsgiverOpplysningerPerId={{}}
        submittable
      />,
    );

    const hovedknapp = wrapper.find(FaktaSubmitButton);
    const knapp = wrapper.find(Knapp);
    expect(hovedknapp.prop('isReadOnly')).toBe(false);
    expect(knapp.prop('disabled')).toBe(false);
  });

  it('skal vise AksjonspunktHelpText når readOnly er false', () => {
    const wrapper = shallowWithIntl(
      <UttakPerioder
        readOnly={false}
        hasOpenAksjonspunkter
        behandlingFormPrefix="UttakFaktaForm"
        perioder={[]}
        openForms={false}
        reduxFormChange={reduxFormChange}
        reduxFormReset={reduxFormReset}
        submitting={false}
        initialValues={{}}
        personoversikt={{} as Personoversikt}
        uttakPeriodeVurderingTyper={[]}
        aksjonspunkter={[
          {
            aksjonspunktType: {
              kode: 'MANU',
              kodeverk: 'AKSJONSPUNKT_TYPE',
            },
            begrunnelse: null,
            besluttersBegrunnelse: null,
            definisjon: {
              kode: '5071',
              kodeverk: '',
            },
            erAktivt: true,
            kanLoses: true,
            status: {
              kode: 'OPPR',
              kodeverk: 'AKSJONSPUNKT_STATUS',
            },
            toTrinnsBehandling: true,
            toTrinnsBehandlingGodkjent: null,
            vilkarType: null,
            vurderPaNyttArsaker: [],
          },
        ]}
        hasRevurderingOvertyringAp={false}
        kanOverstyre={false}
        getKodeverknavn={getKodeverknavn}
        faktaArbeidsforhold={[]}
        behandlingId={1}
        behandlingVersjon={1}
        behandlingStatus={{} as Kodeverk}
        alleKodeverk={{}}
        familiehendelse={familiehendelse}
        førsteUttaksdato="2018-01-12"
        arbeidsgiverOpplysningerPerId={{}}
        submittable
      />,
    );

    const aksjonspunktHelpText = wrapper.find(AksjonspunktHelpTextHTML);
    expect(aksjonspunktHelpText).toHaveLength(1);
    const formattedMessage = aksjonspunktHelpText.find(FormattedMessage);
    expect(formattedMessage.prop('id')).toEqual('UttakInfoPanel.Aksjonspunkt.5071');
    expect(formattedMessage.prop('values')).toEqual({ value: '12.01.2018' });
  });

  it('skal vise nyPeriode skjema onClick på knappen', () => {
    const wrapper = shallowWithIntl(
      <UttakPerioder
        readOnly={false}
        hasOpenAksjonspunkter
        behandlingFormPrefix="UttakFaktaForm"
        perioder={[]}
        openForms={false}
        reduxFormChange={reduxFormChange}
        reduxFormReset={reduxFormReset}
        submitting={false}
        initialValues={{}}
        personoversikt={{} as Personoversikt}
        uttakPeriodeVurderingTyper={[]}
        aksjonspunkter={[]}
        hasRevurderingOvertyringAp={false}
        kanOverstyre={false}
        getKodeverknavn={getKodeverknavn}
        faktaArbeidsforhold={[]}
        behandlingId={1}
        behandlingVersjon={1}
        behandlingStatus={{} as Kodeverk}
        alleKodeverk={{}}
        familiehendelse={familiehendelse}
        førsteUttaksdato="2018-01-12"
        arbeidsgiverOpplysningerPerId={{}}
        submittable
      />,
    );

    const knapp = wrapper.find(Knapp);
    expect(knapp.length).toBe(1);
    knapp.simulate('click');
    wrapper.update();
    const uttakNyPeriode = wrapper.find(UttakNyPeriode);
    expect(uttakNyPeriode.length).toBe(1);
  });
});
