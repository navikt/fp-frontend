import React from 'react';
import { expect } from 'chai';

import { RadioOption } from '@fpsak-frontend/form';

import ArbeidsforholdRadioknapper from './ArbeidsforholdRadioknapper';
import ArbeidsforholdHandling from '../../kodeverk/arbeidsforholdHandling';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-fakta-arbeidsforhold';

const arbeidsforhold = {
  id: '1',
  arbeidsforholdId: '1231-2345',
  navn: 'Svendsen Eksos',
  arbeidsgiverIdentifikator: '1234567',
  arbeidsgiverIdentifiktorGUI: '1234567',
  fomDato: '2012-01-01',
  tomDato: '2025-01-01',
  kilde: {
    navn: 'aa-registeret',
  },
  mottattDatoInntektsmelding: undefined,
  brukArbeidsforholdet: true,
  erNyttArbeidsforhold: undefined,
  erstatterArbeidsforholdId: undefined,
  tilVurdering: true,
  skjaeringstidspunkt: '2019-01-01',
  lagtTilAvSaksbehandler: false,
  permisjoner: undefined,
  kanOppretteNyttArbforFraIM: false,
};

describe('<ArbeidsforholdRadioknapper>', () => {
  it('Skal ikke vise radioknapper for aktivt arbeidsforhold når mottatt IM', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding
      arbeidsforhold={arbeidsforhold}
      aktivtArbeidsforholdTillatUtenIM={false}
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
      behandlingId={1}
      behandlingVersjon={1}
    />);
    expect(wrapper.find('[name=\'arbeidsforholdHandlingField\']')).has.length(1);
    expect(wrapper.find('[name=\'aktivtArbeidsforholdHandlingField\']')).has.length(0);
  });
  it('skal vise radioknapper når aktivt arbeidsforhold, uten IM, fom før stp, tom etter stp', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding={false}
      arbeidsforhold={arbeidsforhold}
      aktivtArbeidsforholdTillatUtenIM={false}
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
      behandlingId={1}
      behandlingVersjon={1}
    />);
    expect(wrapper.find('[name=\'arbeidsforholdHandlingField\']')).has.length(1);
    expect(wrapper.find('[name=\'aktivtArbeidsforholdHandlingField\']')).has.length(1);
    const radioOptions = wrapper.find(RadioOption);
    expect(radioOptions).has.length(5);
    expect(radioOptions.get(0).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivt');
    expect(radioOptions.get(0).props.disabled).to.eql(false);
    expect(radioOptions.get(1).props.label.id).to.eql('PersonArbeidsforholdDetailForm.AvslaYtelseManglendeOpplysninger');
    expect(radioOptions.get(1).props.disabled).to.eql(false);
    expect(radioOptions.get(2).props.label.id).to.eql('PersonArbeidsforholdDetailForm.InntektIkkeMedIBeregningsgrunnlaget');
    expect(radioOptions.get(2).props.disabled).to.eql(false);
    expect(radioOptions.get(3).props.label.id).to.eql('PersonArbeidsforholdDetailForm.BenyttAInntektIBeregningsgrunnlag');
    expect(radioOptions.get(3).props.disabled).to.eql(true);
    expect(radioOptions.get(4).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdetErIkkeAktivt');
    expect(radioOptions.get(4).props.disabled).to.eql(true);
  });
  it('skal vise radioknapper når aktivt arbeidsforhold, uten IM, fom før stp, tom samtidig som stp', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding={false}
      arbeidsforhold={{
        ...arbeidsforhold,
        tomDato: '2019-01-01',
      }}
      aktivtArbeidsforholdTillatUtenIM={false}
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
      behandlingId={1}
      behandlingVersjon={1}
    />);
    const radiogroup = wrapper.find('[name=\'aktivtArbeidsforholdHandlingField\']');
    expect(radiogroup).has.length(1);
    const radioOptions = wrapper.find(RadioOption);
    expect(radioOptions).has.length(4);
    expect(radioOptions.get(0).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivt');
    expect(radioOptions.get(0).props.disabled).to.eql(false);
    expect(radioOptions.get(1).props.label.id).to.eql('PersonArbeidsforholdDetailForm.AvslaYtelseManglendeOpplysninger');
    expect(radioOptions.get(1).props.disabled).to.eql(false);
    expect(radioOptions.get(2).props.label.id).to.eql('PersonArbeidsforholdDetailForm.BenyttAInntektIBeregningsgrunnlag');
    expect(radioOptions.get(2).props.disabled).to.eql(true);
    expect(radioOptions.get(3).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdetErIkkeAktivt');
    expect(radioOptions.get(3).props.disabled).to.eql(true);
  });
  it('skal vise radioknapper når aktivt arbeidsforhold, uten IM, fom før stp, tom undefined', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding={false}
      arbeidsforhold={{
        ...arbeidsforhold,
        tomDato: undefined,
      }}
      aktivtArbeidsforholdTillatUtenIM={false}
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
      behandlingId={1}
      behandlingVersjon={1}
    />);
    const radiogroup = wrapper.find('[name=\'aktivtArbeidsforholdHandlingField\']');
    expect(radiogroup).has.length(1);
    const radioOptions = wrapper.find(RadioOption);
    expect(radioOptions).has.length(5);
    expect(radioOptions.get(0).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivt');
    expect(radioOptions.get(0).props.disabled).to.eql(false);
    expect(radioOptions.get(1).props.label.id).to.eql('PersonArbeidsforholdDetailForm.AvslaYtelseManglendeOpplysninger');
    expect(radioOptions.get(1).props.disabled).to.eql(false);
    expect(radioOptions.get(2).props.label.id).to.eql('PersonArbeidsforholdDetailForm.InntektIkkeMedIBeregningsgrunnlaget');
    expect(radioOptions.get(2).props.disabled).to.eql(false);
    expect(radioOptions.get(3).props.label.id).to.eql('PersonArbeidsforholdDetailForm.BenyttAInntektIBeregningsgrunnlag');
    expect(radioOptions.get(3).props.disabled).to.eql(true);
    expect(radioOptions.get(4).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdetErIkkeAktivt');
    expect(radioOptions.get(4).props.disabled).to.eql(true);
  });
  it('skal vise radioknapper når aktivt arbeidsforhold, uten IM, fom etter stp, tom undefined', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding={false}
      arbeidsforhold={{
        ...arbeidsforhold,
        fomDato: '2019-08-01',
        tomDato: undefined,
      }}
      aktivtArbeidsforholdTillatUtenIM={false}
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
      behandlingId={1}
      behandlingVersjon={1}
    />);
    const radiogroup = wrapper.find('[name=\'aktivtArbeidsforholdHandlingField\']');
    expect(radiogroup).has.length(1);
    const radioOptions = wrapper.find(RadioOption);
    expect(radioOptions).has.length(4);
    expect(radioOptions.get(0).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivt');
    expect(radioOptions.get(0).props.disabled).to.eql(false);
    expect(radioOptions.get(1).props.label.id).to.eql('PersonArbeidsforholdDetailForm.AvslaYtelseManglendeOpplysninger');
    expect(radioOptions.get(1).props.disabled).to.eql(false);
    expect(radioOptions.get(2).props.label.id).to.eql('PersonArbeidsforholdDetailForm.BenyttAInntektIBeregningsgrunnlag');
    expect(radioOptions.get(2).props.disabled).to.eql(true);
    expect(radioOptions.get(3).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdetErIkkeAktivt');
    expect(radioOptions.get(3).props.disabled).to.eql(true);
  });
  it('Skal vise enablet overstyrtTom picker, uten IM, tomDato lik stp, med brukJustertePerioder', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding={false}
      arbeidsforhold={{
        ...arbeidsforhold,
        tomDato: '2019-01-01',
        brukMedJustertPeriode: true,
      }}
      aktivtArbeidsforholdTillatUtenIM
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.OVERSTYR_TOM}
      behandlingId={1}
      behandlingVersjon={1}
    />);
    const overstyrtTom = wrapper.find('[name=\'overstyrtTom\']');
    expect(overstyrtTom).has.length(1);
    const radioOptions = wrapper.find('RadioOption');
    expect(radioOptions).has.length(2);
    expect(radioOptions.get(0).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivt');
    expect(radioOptions.get(0).props.disabled).to.eql(false);
    expect(radioOptions.get(1).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdetErIkkeAktivt');
    expect(radioOptions.get(1).props.disabled).to.eql(false);
  });
  it('Skal vise disablet overstyrtTom picker, uten IM, tomDato lik stp, ikke med brukJustertPerioder', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding={false}
      arbeidsforhold={{
        ...arbeidsforhold,
        tomDato: '2019-01-01',
        brukMedJustertPeriode: false,
      }}
      aktivtArbeidsforholdTillatUtenIM
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.OVERSTYR_TOM}
      behandlingId={1}
      behandlingVersjon={1}
    />);
    const overstyrtTom = wrapper.find('[name=\'overstyrtTom\']');
    expect(overstyrtTom).has.length(1);
    const radioOptions = wrapper.find('RadioOption');
    expect(radioOptions).has.length(2);
    expect(radioOptions.get(0).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivt');
    expect(radioOptions.get(0).props.disabled).to.eql(false);
    expect(radioOptions.get(1).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdetErIkkeAktivt');
    expect(radioOptions.get(1).props.disabled).to.eql(true);
  });
  it('Skal vise RadioOption for fjerning av arbeidsforhold når arbeidsforhold ikke fra AA-reg', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding={false}
      arbeidsforhold={{
        ...arbeidsforhold,
        kilde: {
          navn: 'noen-annet',
        },
      }}
      aktivtArbeidsforholdTillatUtenIM
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.FJERN_ARBEIDSFORHOLD}
      behandlingId={1}
      behandlingVersjon={1}
    />);
    const radioOptions = wrapper.find('RadioOption');
    expect(radioOptions).has.length(2);
    expect(radioOptions.get(0).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivt');
    expect(radioOptions.get(0).props.disabled).to.eql(false);
    expect(radioOptions.get(1).props.label.id).to.eql('PersonArbeidsforholdDetailForm.FjernArbeidsforholdet');
    expect(radioOptions.get(1).props.disabled).to.eql(false);
    expect(wrapper.find('[name=\'overstyrtTom\']')).has.length(0);
  });
  it('Skal vise RadioOption knapper som er enabled hvis lagt til av saksbehandler', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding={false}
      arbeidsforhold={{
        ...arbeidsforhold,
        lagtTilAvSaksbehandler: true,
      }}
      aktivtArbeidsforholdTillatUtenIM
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
      behandlingId={1}
      behandlingVersjon={1}
    />);
    const radiogroup = wrapper.find('[name=\'aktivtArbeidsforholdHandlingField\']');
    expect(radiogroup).has.length(1);
    const radioOptions = wrapper.find(RadioOption);
    expect(radioOptions).has.length(5);
    expect(radioOptions.get(0).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivt');
    expect(radioOptions.get(0).props.disabled).to.eql(false);
    expect(radioOptions.get(1).props.label.id).to.eql('PersonArbeidsforholdDetailForm.AvslaYtelseManglendeOpplysninger');
    expect(radioOptions.get(1).props.disabled).to.eql(true);
    expect(radioOptions.get(2).props.label.id).to.eql('PersonArbeidsforholdDetailForm.InntektIkkeMedIBeregningsgrunnlaget');
    expect(radioOptions.get(2).props.disabled).to.eql(true);
    expect(radioOptions.get(3).props.label.id).to.eql('PersonArbeidsforholdDetailForm.BenyttAInntektIBeregningsgrunnlag');
    expect(radioOptions.get(3).props.disabled).to.eql(false);
    expect(radioOptions.get(4).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdetErIkkeAktivt');
    expect(radioOptions.get(4).props.disabled).to.eql(true);
  });
  it('Skal vise utvidet RadioOptions for aktivt arbeidsforhold når arbeidsforholdet har permisjon uten tom og ikke mottatt IM', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding={false}
      arbeidsforhold={{
        ...arbeidsforhold,
        permisjoner: [
          {
            permisjonFom: '2018-10-10',
            permisjonTom: undefined,
            permisjonsprosent: 100,
          },
        ],
      }}
      aktivtArbeidsforholdTillatUtenIM
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
      behandlingId={1}
      behandlingVersjon={1}
    />);
    const radioOptions = wrapper.find('RadioOption');
    expect(radioOptions).has.length(5);
    expect(radioOptions.get(0).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon');
    expect(radioOptions.get(0).props.disabled).to.eql(false);
    expect(radioOptions.get(1).props.label.id).to.eql('PersonArbeidsforholdDetailForm.AvslaYtelseManglendeOpplysninger');
    expect(radioOptions.get(1).props.disabled).to.eql(false);
    expect(radioOptions.get(2).props.label.id).to.eql('PersonArbeidsforholdDetailForm.InntektIkkeMedIBeregningsgrunnlaget');
    expect(radioOptions.get(2).props.disabled).to.eql(false);
    expect(radioOptions.get(3).props.label.id).to.eql('PersonArbeidsforholdDetailForm.BenyttAInntektIBeregningsgrunnlag');
    expect(radioOptions.get(3).props.disabled).to.eql(false);
    expect(radioOptions.get(4).props.label.id).to.eql('PersonArbeidsforholdDetailForm.SokerErIPermisjon');
    expect(radioOptions.get(4).props.disabled).to.eql(false);
  });
  it('Skal ikke vise utvidet RadioOptions for aktivt arbeidsforhold når arbeidsforholdet har permisjon uten tom og mottatt IM', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding
      arbeidsforhold={{
        ...arbeidsforhold,
        permisjoner: [
          {
            permisjonFom: '2018-10-10',
            permisjonTom: undefined,
            permisjonsprosent: 100,
          },
        ],
      }}
      aktivtArbeidsforholdTillatUtenIM
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
      behandlingId={1}
      behandlingVersjon={1}
    />);
    const radioOptions = wrapper.find('RadioOption');
    expect(radioOptions).has.length(2);
    expect(radioOptions.get(0).props.disabled).to.eql(false);
    expect(radioOptions.get(0).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon');
    expect(radioOptions.get(1).props.disabled).to.eql(false);
    expect(radioOptions.get(1).props.label.id).to.eql('PersonArbeidsforholdDetailForm.SokerErIPermisjon');
  });
  it('Skal vise utvidet RadioOptions for aktivt arbeidsforhold når arbeidsforholdet har permisjon med tom og ikke mottatt IM', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding={false}
      arbeidsforhold={{
        ...arbeidsforhold,
        permisjoner: [
          {
            permisjonFom: '2018-10-10',
            permisjonTom: '2025-10-10',
            permisjonsprosent: 100,
          },
        ],
      }}
      aktivtArbeidsforholdTillatUtenIM
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
      behandlingId={1}
      behandlingVersjon={1}
    />);
    const radioOptions = wrapper.find('RadioOption');
    expect(radioOptions).has.length(5);
    expect(radioOptions.get(0).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon');
    expect(radioOptions.get(0).props.disabled).to.eql(false);
    expect(radioOptions.get(1).props.label.id).to.eql('PersonArbeidsforholdDetailForm.AvslaYtelseManglendeOpplysninger');
    expect(radioOptions.get(1).props.disabled).to.eql(false);
    expect(radioOptions.get(2).props.label.id).to.eql('PersonArbeidsforholdDetailForm.InntektIkkeMedIBeregningsgrunnlaget');
    expect(radioOptions.get(2).props.disabled).to.eql(false);
    expect(radioOptions.get(3).props.label.id).to.eql('PersonArbeidsforholdDetailForm.BenyttAInntektIBeregningsgrunnlag');
    expect(radioOptions.get(3).props.disabled).to.eql(false);
    expect(radioOptions.get(4).props.label.id).to.eql('PersonArbeidsforholdDetailForm.SokerErIPermisjon');
    expect(radioOptions.get(4).props.disabled).to.eql(false);
  });
  it('Skal ikke vise utvidet RadioOptions for aktivt arbeidsforhold når arbeidsforholdet har permisjon med tom og mottatt IM', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding
      arbeidsforhold={{
        ...arbeidsforhold,
        permisjoner: [
          {
            permisjonFom: '2018-10-10',
            permisjonTom: '2025-10-10',
            permisjonsprosent: 100,
          },
        ],
      }}
      aktivtArbeidsforholdTillatUtenIM
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
      behandlingId={1}
      behandlingVersjon={1}
    />);
    const radioOptions = wrapper.find('RadioOption');
    expect(radioOptions).has.length(2);
    expect(radioOptions.get(0).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon');
    expect(radioOptions.get(0).props.disabled).to.eql(false);
    expect(radioOptions.get(1).props.label.id).to.eql('PersonArbeidsforholdDetailForm.SokerErIPermisjon');
    expect(radioOptions.get(1).props.disabled).to.eql(false);
  });
  it('Skal vise utvidet RadioOptions for aktivt arbeidsforhold når arbeidsforholdet har flere permisjoner uten mottatt IM, '
    + 'samt disable knapp hvor saksbehandler kan velge at soeker er i permisjon', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding={false}
      arbeidsforhold={{
        ...arbeidsforhold,
        permisjoner: [
          {
            permisjonFom: '2018-10-10',
            permisjonTom: undefined,
            permisjonsprosent: 100,
          },
          {
            permisjonFom: '2018-10-10',
            permisjonTom: '2025-10-10',
            permisjonsprosent: 100,
          },
        ],
      }}
      aktivtArbeidsforholdTillatUtenIM
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
      behandlingId={1}
      behandlingVersjon={1}
    />);
    const radioOptions = wrapper.find('RadioOption');
    expect(radioOptions).has.length(5);
    expect(radioOptions.get(0).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon');
    expect(radioOptions.get(0).props.disabled).to.eql(false);
    expect(radioOptions.get(1).props.label.id).to.eql('PersonArbeidsforholdDetailForm.AvslaYtelseManglendeOpplysninger');
    expect(radioOptions.get(1).props.disabled).to.eql(false);
    expect(radioOptions.get(2).props.label.id).to.eql('PersonArbeidsforholdDetailForm.InntektIkkeMedIBeregningsgrunnlaget');
    expect(radioOptions.get(2).props.disabled).to.eql(false);
    expect(radioOptions.get(3).props.label.id).to.eql('PersonArbeidsforholdDetailForm.BenyttAInntektIBeregningsgrunnlag');
    expect(radioOptions.get(3).props.disabled).to.eql(false);
    expect(radioOptions.get(4).props.label.id).to.eql('PersonArbeidsforholdDetailForm.SokerErIPermisjon');
    expect(radioOptions.get(4).props.disabled).to.eql(true);
  });
  it('Skal vise utvidet RadioOptions for aktivt arbeidsforhold når arbeidsforholdet har flere permisjoner og mottatt IM, '
    + 'samt disable knapp hvor saksbehandler kan velge at soeker er i permisjon', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding
      arbeidsforhold={{
        ...arbeidsforhold,
        permisjoner: [
          {
            permisjonFom: '2018-10-10',
            permisjonTom: undefined,
            permisjonsprosent: 100,
          },
          {
            permisjonFom: '2018-10-10',
            permisjonTom: '2025-10-10',
            permisjonsprosent: 100,
          },
        ],
      }}
      aktivtArbeidsforholdTillatUtenIM
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
      behandlingId={1}
      behandlingVersjon={1}
    />);
    const radioOptions = wrapper.find('RadioOption');
    expect(radioOptions).has.length(2);
    expect(radioOptions.get(0).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon');
    expect(radioOptions.get(0).props.disabled).to.eql(false);
    expect(radioOptions.get(1).props.label.id).to.eql('PersonArbeidsforholdDetailForm.SokerErIPermisjon');
    expect(radioOptions.get(1).props.disabled).to.eql(true);
  });
  it('skal kun vise to RadioOptions når arbeidsforholdhandling er undefined', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding={false}
      arbeidsforhold={{
        ...arbeidsforhold,
      }}
      aktivtArbeidsforholdTillatUtenIM
      arbeidsforholdHandlingVerdi={undefined}
      behandlingId={1}
      behandlingVersjon={1}
    />);
    const radioOptions = wrapper.find('RadioOption');
    expect(radioOptions).has.length(2);
    expect(radioOptions.get(0).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivt');
    expect(radioOptions.get(0).props.disabled).to.eql(false);
    expect(radioOptions.get(1).props.label.id).to.eql('PersonArbeidsforholdDetailForm.ArbeidsforholdetErIkkeAktivt');
    expect(radioOptions.get(1).props.disabled).to.eql(true);
  });
});
