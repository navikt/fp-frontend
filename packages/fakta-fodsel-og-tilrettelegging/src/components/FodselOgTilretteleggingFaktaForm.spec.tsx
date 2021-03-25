import React from 'react';
import { AlertStripeFeil, AlertStripeInfo } from 'nav-frontend-alertstriper';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { DatepickerField, TextAreaField } from '@fpsak-frontend/form';
import { FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import { Arbeidsforhold as IayArbeidsforhold } from '@fpsak-frontend/types';

import { FodselOgTilretteleggingFaktaForm, validateForm } from './FodselOgTilretteleggingFaktaForm';
import TilretteleggingArbeidsforholdSection from './tilrettelegging/TilretteleggingArbeidsforholdSection';
import shallowWithIntl, { intlMock } from '../../i18n/intl-enzyme-test-helper-fakta-fodsel-og-tilrettelegging';
import FodselOgTilrettelegging from '../types/fodselOgTilretteleggingTsType';
import ArbeidsforholdFodselOgTilrettelegging from '../types/arbeidsforholdFodselOgTilretteleggingTsType';

const arbeidsgiverOpplysningerPerId = {
  910909088: {
    erPrivatPerson: false,
    identifikator: '910909088',
    navn: 'BEDRIFT AS',
  },
  555864629: {
    erPrivatPerson: false,
    identifikator: '555864629',
    navn: 'WWW.EIENDOMSDRIFT.CC SA',
  },
};

const arbeidsforhold = [
  {
    internArbeidsforholdReferanse: '0f70f2f2-79f8-4cc0-8929-be25ef2be878',
    arbeidsgiverReferanse: '910909088',
    begrunnelse: null,
    opplysningerOmRisiko: null,
    opplysningerOmTilrettelegging: null,
    skalBrukes: true,
    tilretteleggingBehovFom: '2019-09-15',
    tilretteleggingDatoer: [],
    tilretteleggingId: 1000303,
  },
  {
    internArbeidsforholdReferanse: 'fb74d757-6bd3-4ed3-a1f4-c2424ebb64d5',
    arbeidsgiverReferanse: '910909088',
    begrunnelse: null,
    opplysningerOmRisiko: null,
    opplysningerOmTilrettelegging: null,
    skalBrukes: true,
    tilretteleggingBehovFom: '2019-09-15',
    tilretteleggingDatoer: [],
    tilretteleggingId: 1000304,
  },
] as ArbeidsforholdFodselOgTilrettelegging[];

const uttakArbeidTyper = [];

const formProps = {
  error: 'SOME_ERROR',
};

describe('<FodselOgTilretteleggingFaktaForm>', () => {
  it('skal vise faktaform med begrunnelsefelt og fodseldato', () => {
    const wrapper = shallowWithIntl(<FodselOgTilretteleggingFaktaForm
      intl={intlMock}
      behandlingId={1}
      behandlingVersjon={1}
      hasOpenAksjonspunkter={false}
      readOnly
      fødselsdato=""
      submittable
      arbeidsforhold={arbeidsforhold}
      iayArbeidsforhold={[]}
      erOverstyrer
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      svangerskapspengerTilrettelegging={{} as FodselOgTilrettelegging}
      aksjonspunkter={[]}
      submitCallback={() => undefined}
      validate={() => undefined}
      onSubmit={() => undefined}
      uttakArbeidTyper={uttakArbeidTyper}
      {...reduxFormPropsMock}
    />);

    const tilretteleggingArbeidsforholdSection = wrapper.find(TilretteleggingArbeidsforholdSection);
    expect(tilretteleggingArbeidsforholdSection).toHaveLength(2);
    const datepicker = wrapper.find(DatepickerField);
    expect(datepicker).toHaveLength(1);
    const begrunnelsefelt = wrapper.find(TextAreaField);
    expect(begrunnelsefelt).toHaveLength(1);
    const submitButton = wrapper.find(FaktaSubmitButton);
    expect(submitButton).toHaveLength(1);
    const alertStripe = wrapper.find(AlertStripeFeil);
    expect(alertStripe).toHaveLength(0);
  });

  it('skal vise faktaform med fødelsedato', () => {
    const wrapper = shallowWithIntl(<FodselOgTilretteleggingFaktaForm
      intl={intlMock}
      behandlingId={1}
      behandlingVersjon={1}
      hasOpenAksjonspunkter={false}
      readOnly
      fødselsdato="20.10.2019"
      submittable
      arbeidsforhold={arbeidsforhold}
      iayArbeidsforhold={[]}
      erOverstyrer
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      svangerskapspengerTilrettelegging={{} as FodselOgTilrettelegging}
      aksjonspunkter={[]}
      submitCallback={() => undefined}
      validate={() => undefined}
      onSubmit={() => undefined}
      uttakArbeidTyper={uttakArbeidTyper}
      {...reduxFormPropsMock}
    />);

    const tilretteleggingArbeidsforholdSection = wrapper.find(TilretteleggingArbeidsforholdSection);
    expect(tilretteleggingArbeidsforholdSection).toHaveLength(2);
    const datepicker = wrapper.find(DatepickerField);
    expect(datepicker).toHaveLength(2);
    const begrunnelsefelt = wrapper.find(TextAreaField);
    expect(begrunnelsefelt).toHaveLength(1);
    const submitButton = wrapper.find(FaktaSubmitButton);
    expect(submitButton).toHaveLength(1);
    const alertStripe = wrapper.find(AlertStripeFeil);
    expect(alertStripe).toHaveLength(0);
  });

  it('skal vise AlertStripe når formprops.error er satt', () => {
    const wrapper = shallowWithIntl(<FodselOgTilretteleggingFaktaForm
      intl={intlMock}
      behandlingId={1}
      behandlingVersjon={1}
      hasOpenAksjonspunkter={false}
      readOnly
      fødselsdato="20.10.2019"
      submittable
      arbeidsforhold={arbeidsforhold}
      iayArbeidsforhold={[]}
      erOverstyrer
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      svangerskapspengerTilrettelegging={{} as FodselOgTilrettelegging}
      aksjonspunkter={[]}
      submitCallback={() => undefined}
      validate={() => undefined}
      onSubmit={() => undefined}
      uttakArbeidTyper={uttakArbeidTyper}
      {...reduxFormPropsMock}
      {...formProps}
    />);

    const tilretteleggingArbeidsforholdSection = wrapper.find(TilretteleggingArbeidsforholdSection);
    expect(tilretteleggingArbeidsforholdSection).toHaveLength(2);
    const datepicker = wrapper.find(DatepickerField);
    expect(datepicker).toHaveLength(2);
    const begrunnelsefelt = wrapper.find(TextAreaField);
    expect(begrunnelsefelt).toHaveLength(1);
    const submitButton = wrapper.find(FaktaSubmitButton);
    expect(submitButton).toHaveLength(1);
    const alertStripe = wrapper.find(AlertStripeFeil);
    expect(alertStripe).toHaveLength(1);
  });

  it('skal validere OK', () => {
    const values = {
      termindato: '2020-01-01',
      'BEDRIFT AS9109090880f70f2f2-79f8-4cc0-8929-be25ef2be878': {
        skalBrukes: true,
        tilretteleggingBehovFom: '2019-01-01',
        tilretteleggingDatoer: [{
          fom: '2019-01-01',
        }],
      },
      'BEDRIFT AS910909088fb74d757-6bd3-4ed3-a1f4-c2424ebb64d5': {
        skalBrukes: true,
        tilretteleggingBehovFom: '2019-01-01',
        tilretteleggingDatoer: [{
          fom: '2019-01-01',
        }],
      },
    };
    const errors = validateForm(values, arbeidsforhold, arbeidsgiverOpplysningerPerId, uttakArbeidTyper, intlMock);

    expect(errors).toEqual({});
  });

  it('skal vise feilmelding når ingen arbeidsforhold skal brukes', () => {
    const values = {
      termindato: '2020-01-01',
      'BEDRIFT AS9109090880f70f2f2-79f8-4cc0-8929-be25ef2be878': {
        skalBrukes: false,
        tilretteleggingBehovFom: '2019-01-01',
        tilretteleggingDatoer: [{
          fom: '2019-01-01',
        }],
      },
      'BEDRIFT AS910909088fb74d757-6bd3-4ed3-a1f4-c2424ebb64d5': {
        skalBrukes: false,
        tilretteleggingDatoer: [{
          fom: '2019-01-02',
        }],
      },
    };
    const errors = validateForm(values, arbeidsforhold, arbeidsgiverOpplysningerPerId, uttakArbeidTyper, intlMock);

    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    expect(errors._error).toEqual('Minst en tilrettelegging må brukes.');
  });

  it('skal finne duplikate datoer innenfor et arbeidsforhold', () => {
    const values = {
      termindato: '2020-01-01',
      'BEDRIFT AS9109090880f70f2f2-79f8-4cc0-8929-be25ef2be878': {
        skalBrukes: true,
        tilretteleggingBehovFom: '2019-01-01',
        tilretteleggingDatoer: [{
          fom: '2019-01-01',
        }, {
          fom: '2019-01-01',
        }],
      },
      'BEDRIFT AS910909088fb74d757-6bd3-4ed3-a1f4-c2424ebb64d5': {
        skalBrukes: true,
        tilretteleggingBehovFom: '2019-01-01',
        tilretteleggingDatoer: [{
          fom: '2019-01-01',
        }, {
          fom: '2019-01-04',
        }],
      },
    };
    const errors = validateForm(values, arbeidsforhold, arbeidsgiverOpplysningerPerId, uttakArbeidTyper, intlMock);

    expect(errors).toEqual({
      'BEDRIFT AS9109090880f70f2f2-79f8-4cc0-8929-be25ef2be878': {
        tilretteleggingDatoer: [{
          fom: 'Flere like datoer.',
        }, {
          fom: 'Flere like datoer.',
        }],
      },
    });
  });

  it('skal ikke kunne godkjenne arbeidsforhold som har tilretteleggingBehovFom etter termindato', () => {
    const values = {
      termindato: '2018-01-01',
      'BEDRIFT AS9109090880f70f2f2-79f8-4cc0-8929-be25ef2be878': {
        skalBrukes: true,
        tilretteleggingBehovFom: '2019-01-01',
        tilretteleggingDatoer: [{
          fom: '2019-01-01',
        }],
      },
    };
    const errors = validateForm(values, arbeidsforhold, arbeidsgiverOpplysningerPerId, uttakArbeidTyper, intlMock);

    expect(errors).toEqual({
      termindato: 'Termindato er før eller lik dato jordmor/lege oppgir at søker trenger tilrettelegging. Kontroller opplysningene i saken.',
      'BEDRIFT AS9109090880f70f2f2-79f8-4cc0-8929-be25ef2be878': {
        tilretteleggingBehovFom: 'Termindato er før eller lik dato jordmor/lege oppgir at søker trenger tilrettelegging. Kontroller opplysningene i saken.',
      },
    });
  });

  it('skal ikke kunne godkjenne arbeidsforhold som har tilretteleggingBehovFom lik termindato', () => {
    const values = {
      termindato: '2019-01-01',
      'BEDRIFT AS9109090880f70f2f2-79f8-4cc0-8929-be25ef2be878': {
        skalBrukes: true,
        tilretteleggingBehovFom: '2019-01-01',
        tilretteleggingDatoer: [{
          fom: '2019-01-01',
        }],
      },
    };
    const errors = validateForm(values, arbeidsforhold, arbeidsgiverOpplysningerPerId, uttakArbeidTyper, intlMock);

    expect(errors).toEqual({
      termindato: 'Termindato er før eller lik dato jordmor/lege oppgir at søker trenger tilrettelegging. Kontroller opplysningene i saken.',
      'BEDRIFT AS9109090880f70f2f2-79f8-4cc0-8929-be25ef2be878': {
        tilretteleggingBehovFom: 'Termindato er før eller lik dato jordmor/lege oppgir at søker trenger tilrettelegging. Kontroller opplysningene i saken.',
      },
    });
  });

  it('skal kunne godkjenne arbeidsforhold som har tilretteleggingBehovFom før termindato', () => {
    const values = {
      termindato: '2020-01-01',
      'BEDRIFT AS9109090880f70f2f2-79f8-4cc0-8929-be25ef2be878': {
        skalBrukes: true,
        tilretteleggingBehovFom: '2019-01-01',
        tilretteleggingDatoer: [{
          fom: '2019-01-01',
        }],
      },
    };
    const errors = validateForm(values, arbeidsforhold, arbeidsgiverOpplysningerPerId, uttakArbeidTyper, intlMock);

    expect(errors).toEqual({});
  });

  it('skal vise alert-info når arbeidsgiver ikke finnes i arbeidsforhold i inntektArbeidYtelse', () => {
    const iayArbeidsforhold = [{
      id: '555864629-null',
      arbeidsgiverReferanse: '555864629',
      kilde: {
        navn: 'AA-Registeret',
      },
      stillingsprosent: 100.00,
      skjaeringstidspunkt: '2020-01-30',
      mottattDatoInntektsmelding: '2020-01-28',
      fomDato: '2016-01-28',
      ikkeRegistrertIAaRegister: false,
      tilVurdering: false,
      vurderOmSkalErstattes: false,
      brukArbeidsforholdet: true,
      fortsettBehandlingUtenInntektsmelding: false,
      erNyttArbeidsforhold: false,
      erEndret: false,
      brukMedJustertPeriode: false,
      lagtTilAvSaksbehandler: false,
      basertPaInntektsmelding: false,
      permisjoner: [],
    }] as IayArbeidsforhold[];

    const wrapper = shallowWithIntl(<FodselOgTilretteleggingFaktaForm
      intl={intlMock}
      behandlingId={1}
      behandlingVersjon={1}
      hasOpenAksjonspunkter={false}
      readOnly
      fødselsdato="20.10.2019"
      submittable
      arbeidsforhold={arbeidsforhold}
      iayArbeidsforhold={iayArbeidsforhold}
      erOverstyrer
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      svangerskapspengerTilrettelegging={{} as FodselOgTilrettelegging}
      aksjonspunkter={[]}
      submitCallback={() => undefined}
      validate={() => undefined}
      onSubmit={() => undefined}
      uttakArbeidTyper={uttakArbeidTyper}
      {...reduxFormPropsMock}
    />);

    expect(wrapper.find(AlertStripeInfo)).toHaveLength(1);
  });

  it('skal vise alert-info når arbeidsgiver finnes i arbeidsforhold men arbeidsforholdet er før tilretteleggingBehovFom', () => {
    const iayArbeidsforhold = [{
      id: '910909088-null',
      arbeidsgiverReferanse: '910909088',
      kilde: {
        navn: 'AA-Registeret',
      },
      stillingsprosent: 100.00,
      skjaeringstidspunkt: '2020-01-30',
      mottattDatoInntektsmelding: '2020-01-28',
      fomDato: '2016-01-28',
      tomDato: '2019-09-14',
      ikkeRegistrertIAaRegister: false,
      tilVurdering: false,
      vurderOmSkalErstattes: false,
      brukArbeidsforholdet: true,
      fortsettBehandlingUtenInntektsmelding: false,
      erNyttArbeidsforhold: false,
      erEndret: false,
      brukMedJustertPeriode: false,
      lagtTilAvSaksbehandler: false,
      basertPaInntektsmelding: false,
      permisjoner: [],
    }] as IayArbeidsforhold[];

    const wrapper = shallowWithIntl(<FodselOgTilretteleggingFaktaForm
      intl={intlMock}
      behandlingId={1}
      behandlingVersjon={1}
      hasOpenAksjonspunkter={false}
      readOnly
      fødselsdato="20.10.2019"
      submittable
      arbeidsforhold={arbeidsforhold}
      iayArbeidsforhold={iayArbeidsforhold}
      erOverstyrer
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      svangerskapspengerTilrettelegging={{} as FodselOgTilrettelegging}
      aksjonspunkter={[]}
      submitCallback={() => undefined}
      validate={() => undefined}
      onSubmit={() => undefined}
      uttakArbeidTyper={uttakArbeidTyper}
      {...reduxFormPropsMock}
    />);

    expect(wrapper.find(AlertStripeInfo)).toHaveLength(1);
  });

  it('skal ikke vise alert-info når arbeidsgiver finnes i arbeidsforhold i inntektArbeidYtelse og er innenfor intervall', () => {
    const iayArbeidsforhold = [{
      id: '910909088-null',
      arbeidsgiverReferanse: '910909088',
      kilde: {
        navn: 'AA-Registeret',
      },
      stillingsprosent: 100.00,
      skjaeringstidspunkt: '2020-01-30',
      mottattDatoInntektsmelding: '2020-01-28',
      fomDato: '2016-01-28',
      ikkeRegistrertIAaRegister: false,
      tilVurdering: false,
      vurderOmSkalErstattes: false,
      brukArbeidsforholdet: true,
      fortsettBehandlingUtenInntektsmelding: false,
      erNyttArbeidsforhold: false,
      erEndret: false,
      brukMedJustertPeriode: false,
      lagtTilAvSaksbehandler: false,
      basertPaInntektsmelding: false,
      permisjoner: [],
      kanOppretteNyttArbforFraIM: false,
    }] as IayArbeidsforhold[];

    const wrapper = shallowWithIntl(<FodselOgTilretteleggingFaktaForm
      intl={intlMock}
      behandlingId={1}
      behandlingVersjon={1}
      hasOpenAksjonspunkter={false}
      readOnly
      fødselsdato="20.10.2019"
      submittable
      arbeidsforhold={arbeidsforhold}
      iayArbeidsforhold={iayArbeidsforhold}
      erOverstyrer
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      svangerskapspengerTilrettelegging={{} as FodselOgTilrettelegging}
      aksjonspunkter={[]}
      submitCallback={() => undefined}
      validate={() => undefined}
      onSubmit={() => undefined}
      uttakArbeidTyper={uttakArbeidTyper}
      {...reduxFormPropsMock}
    />);

    expect(wrapper.find(AlertStripeInfo)).toHaveLength(0);
  });
});
