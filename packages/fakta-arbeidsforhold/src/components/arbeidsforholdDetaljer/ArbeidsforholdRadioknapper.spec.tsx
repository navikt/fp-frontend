import React from 'react';

import { RadioOption } from '@fpsak-frontend/form';
import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import ArbeidsforholdRadioknapper from './ArbeidsforholdRadioknapper';
import ArbeidsforholdHandling from '../../kodeverk/arbeidsforholdHandling';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

const arbeidsforhold = {
  id: '1',
  arbeidsforholdId: '1231-2345',
  arbeidsgiverReferanse: '1234567',
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
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper.WrappedComponent
      intl={intlMock}
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding
      arbeidsforhold={arbeidsforhold}
      aktivtArbeidsforholdTillatUtenIM={false}
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
    />, messages);
    expect(wrapper.find('[name=\'arbeidsforholdHandlingField\']')).toHaveLength(1);
    expect(wrapper.find('[name=\'aktivtArbeidsforholdHandlingField\']')).toHaveLength(0);
  });
  it('skal vise radioknapper når aktivt arbeidsforhold, uten IM, fom før stp, tom etter stp', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper.WrappedComponent
      intl={intlMock}
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding={false}
      arbeidsforhold={arbeidsforhold}
      aktivtArbeidsforholdTillatUtenIM={false}
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
    />, messages);
    expect(wrapper.find('[name=\'arbeidsforholdHandlingField\']')).toHaveLength(1);
    expect(wrapper.find('[name=\'aktivtArbeidsforholdHandlingField\']')).toHaveLength(1);
    const radioOptions = wrapper.find(RadioOption);
    expect(radioOptions).toHaveLength(5);
    expect(radioOptions.get(0).props.label.id).toEqual('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivt');
    expect(radioOptions.get(0).props.disabled).toEqual(false);
    expect(radioOptions.get(1).props.label.id).toEqual('PersonArbeidsforholdDetailForm.AvslaYtelseManglendeOpplysninger');
    expect(radioOptions.get(1).props.disabled).toEqual(false);
    expect(radioOptions.get(2).props.label.id).toEqual('PersonArbeidsforholdDetailForm.InntektIkkeMedIBeregningsgrunnlaget');
    expect(radioOptions.get(2).props.disabled).toEqual(false);
    expect(radioOptions.get(3).props.label.id).toEqual('PersonArbeidsforholdDetailForm.BenyttAInntektIBeregningsgrunnlag');
    expect(radioOptions.get(3).props.disabled).toEqual(true);
    expect(radioOptions.get(4).props.label.id).toEqual('PersonArbeidsforholdDetailForm.ArbeidsforholdetErIkkeAktivt');
    expect(radioOptions.get(4).props.disabled).toEqual(true);
  });
  it('skal vise radioknapper når aktivt arbeidsforhold, uten IM, fom før stp, tom samtidig som stp', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper.WrappedComponent
      intl={intlMock}
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding={false}
      arbeidsforhold={{
        ...arbeidsforhold,
        tomDato: '2019-01-01',
      }}
      aktivtArbeidsforholdTillatUtenIM={false}
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
    />, messages);
    const radiogroup = wrapper.find('[name=\'aktivtArbeidsforholdHandlingField\']');
    expect(radiogroup).toHaveLength(1);
    const radioOptions = wrapper.find(RadioOption);
    expect(radioOptions).toHaveLength(4);
    expect(radioOptions.get(0).props.label.id).toEqual('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivt');
    expect(radioOptions.get(0).props.disabled).toEqual(false);
    expect(radioOptions.get(1).props.label.id).toEqual('PersonArbeidsforholdDetailForm.AvslaYtelseManglendeOpplysninger');
    expect(radioOptions.get(1).props.disabled).toEqual(false);
    expect(radioOptions.get(2).props.label.id).toEqual('PersonArbeidsforholdDetailForm.BenyttAInntektIBeregningsgrunnlag');
    expect(radioOptions.get(2).props.disabled).toEqual(true);
    expect(radioOptions.get(3).props.label.id).toEqual('PersonArbeidsforholdDetailForm.ArbeidsforholdetErIkkeAktivt');
    expect(radioOptions.get(3).props.disabled).toEqual(true);
  });
  it('skal vise radioknapper når aktivt arbeidsforhold, uten IM, fom før stp, tom undefined', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper.WrappedComponent
      intl={intlMock}
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding={false}
      arbeidsforhold={{
        ...arbeidsforhold,
        tomDato: undefined,
      }}
      aktivtArbeidsforholdTillatUtenIM={false}
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
    />, messages);
    const radiogroup = wrapper.find('[name=\'aktivtArbeidsforholdHandlingField\']');
    expect(radiogroup).toHaveLength(1);
    const radioOptions = wrapper.find(RadioOption);
    expect(radioOptions).toHaveLength(5);
    expect(radioOptions.get(0).props.label.id).toEqual('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivt');
    expect(radioOptions.get(0).props.disabled).toEqual(false);
    expect(radioOptions.get(1).props.label.id).toEqual('PersonArbeidsforholdDetailForm.AvslaYtelseManglendeOpplysninger');
    expect(radioOptions.get(1).props.disabled).toEqual(false);
    expect(radioOptions.get(2).props.label.id).toEqual('PersonArbeidsforholdDetailForm.InntektIkkeMedIBeregningsgrunnlaget');
    expect(radioOptions.get(2).props.disabled).toEqual(false);
    expect(radioOptions.get(3).props.label.id).toEqual('PersonArbeidsforholdDetailForm.BenyttAInntektIBeregningsgrunnlag');
    expect(radioOptions.get(3).props.disabled).toEqual(true);
    expect(radioOptions.get(4).props.label.id).toEqual('PersonArbeidsforholdDetailForm.ArbeidsforholdetErIkkeAktivt');
    expect(radioOptions.get(4).props.disabled).toEqual(true);
  });
  it('skal vise radioknapper når aktivt arbeidsforhold, uten IM, fom etter stp, tom undefined', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper.WrappedComponent
      intl={intlMock}
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
    />, messages);
    const radiogroup = wrapper.find('[name=\'aktivtArbeidsforholdHandlingField\']');
    expect(radiogroup).toHaveLength(1);
    const radioOptions = wrapper.find(RadioOption);
    expect(radioOptions).toHaveLength(4);
    expect(radioOptions.get(0).props.label.id).toEqual('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivt');
    expect(radioOptions.get(0).props.disabled).toEqual(false);
    expect(radioOptions.get(1).props.label.id).toEqual('PersonArbeidsforholdDetailForm.AvslaYtelseManglendeOpplysninger');
    expect(radioOptions.get(1).props.disabled).toEqual(false);
    expect(radioOptions.get(2).props.label.id).toEqual('PersonArbeidsforholdDetailForm.BenyttAInntektIBeregningsgrunnlag');
    expect(radioOptions.get(2).props.disabled).toEqual(true);
    expect(radioOptions.get(3).props.label.id).toEqual('PersonArbeidsforholdDetailForm.ArbeidsforholdetErIkkeAktivt');
    expect(radioOptions.get(3).props.disabled).toEqual(true);
  });
  it('Skal vise enablet overstyrtTom picker, uten IM, tomDato lik stp, med brukJustertePerioder', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper.WrappedComponent
      intl={intlMock}
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
    />, messages);
    const overstyrtTom = wrapper.find('[name=\'overstyrtTom\']');
    expect(overstyrtTom).toHaveLength(1);
    const radioOptions = wrapper.find('RadioOption');
    expect(radioOptions).toHaveLength(2);
    expect(radioOptions.get(0).props.label.id).toEqual('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivt');
    expect(radioOptions.get(0).props.disabled).toEqual(false);
    expect(radioOptions.get(1).props.label.id).toEqual('PersonArbeidsforholdDetailForm.ArbeidsforholdetErIkkeAktivt');
    expect(radioOptions.get(1).props.disabled).toEqual(false);
  });
  it('Skal vise disablet overstyrtTom picker, uten IM, tomDato lik stp, ikke med brukJustertPerioder', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper.WrappedComponent
      intl={intlMock}
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
    />, messages);
    const overstyrtTom = wrapper.find('[name=\'overstyrtTom\']');
    expect(overstyrtTom).toHaveLength(1);
    const radioOptions = wrapper.find('RadioOption');
    expect(radioOptions).toHaveLength(2);
    expect(radioOptions.get(0).props.label.id).toEqual('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivt');
    expect(radioOptions.get(0).props.disabled).toEqual(false);
    expect(radioOptions.get(1).props.label.id).toEqual('PersonArbeidsforholdDetailForm.ArbeidsforholdetErIkkeAktivt');
    expect(radioOptions.get(1).props.disabled).toEqual(true);
  });
  it('Skal vise RadioOption for fjerning av arbeidsforhold når arbeidsforhold ikke fra AA-reg', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper.WrappedComponent
      intl={intlMock}
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
    />, messages);
    const radioOptions = wrapper.find('RadioOption');
    expect(radioOptions).toHaveLength(2);
    expect(radioOptions.get(0).props.label.id).toEqual('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivt');
    expect(radioOptions.get(0).props.disabled).toEqual(false);
    expect(radioOptions.get(1).props.label.id).toEqual('PersonArbeidsforholdDetailForm.FjernArbeidsforholdet');
    expect(radioOptions.get(1).props.disabled).toEqual(false);
    expect(wrapper.find('[name=\'overstyrtTom\']')).toHaveLength(0);
  });
  it('Skal vise RadioOption knapper som er enabled hvis lagt til av saksbehandler', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper.WrappedComponent
      intl={intlMock}
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding={false}
      arbeidsforhold={{
        ...arbeidsforhold,
        lagtTilAvSaksbehandler: true,
      }}
      aktivtArbeidsforholdTillatUtenIM
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
    />, messages);
    const radiogroup = wrapper.find('[name=\'aktivtArbeidsforholdHandlingField\']');
    expect(radiogroup).toHaveLength(1);
    const radioOptions = wrapper.find(RadioOption);
    expect(radioOptions).toHaveLength(5);
    expect(radioOptions.get(0).props.label.id).toEqual('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivt');
    expect(radioOptions.get(0).props.disabled).toEqual(false);
    expect(radioOptions.get(1).props.label.id).toEqual('PersonArbeidsforholdDetailForm.AvslaYtelseManglendeOpplysninger');
    expect(radioOptions.get(1).props.disabled).toEqual(true);
    expect(radioOptions.get(2).props.label.id).toEqual('PersonArbeidsforholdDetailForm.InntektIkkeMedIBeregningsgrunnlaget');
    expect(radioOptions.get(2).props.disabled).toEqual(true);
    expect(radioOptions.get(3).props.label.id).toEqual('PersonArbeidsforholdDetailForm.BenyttAInntektIBeregningsgrunnlag');
    expect(radioOptions.get(3).props.disabled).toEqual(false);
    expect(radioOptions.get(4).props.label.id).toEqual('PersonArbeidsforholdDetailForm.ArbeidsforholdetErIkkeAktivt');
    expect(radioOptions.get(4).props.disabled).toEqual(true);
  });
  it('Skal vise utvidet RadioOptions for aktivt arbeidsforhold når arbeidsforholdet har permisjon uten tom og ikke mottatt IM', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper.WrappedComponent
      intl={intlMock}
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
    />, messages);
    const radioOptions = wrapper.find('RadioOption');
    expect(radioOptions).toHaveLength(5);
    expect(radioOptions.get(0).props.label.id).toEqual(
      'PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon',
    );
    expect(radioOptions.get(0).props.disabled).toEqual(false);
    expect(radioOptions.get(1).props.label.id).toEqual('PersonArbeidsforholdDetailForm.AvslaYtelseManglendeOpplysninger');
    expect(radioOptions.get(1).props.disabled).toEqual(false);
    expect(radioOptions.get(2).props.label.id).toEqual('PersonArbeidsforholdDetailForm.InntektIkkeMedIBeregningsgrunnlaget');
    expect(radioOptions.get(2).props.disabled).toEqual(false);
    expect(radioOptions.get(3).props.label.id).toEqual('PersonArbeidsforholdDetailForm.BenyttAInntektIBeregningsgrunnlag');
    expect(radioOptions.get(3).props.disabled).toEqual(false);
    expect(radioOptions.get(4).props.label.id).toEqual('PersonArbeidsforholdDetailForm.SokerErIPermisjon');
    expect(radioOptions.get(4).props.disabled).toEqual(false);
  });
  it('Skal ikke vise utvidet RadioOptions for aktivt arbeidsforhold når arbeidsforholdet har permisjon uten tom og mottatt IM', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper.WrappedComponent
      intl={intlMock}
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
    />, messages);
    const radioOptions = wrapper.find('RadioOption');
    expect(radioOptions).toHaveLength(2);
    expect(radioOptions.get(0).props.disabled).toEqual(false);
    expect(radioOptions.get(0).props.label.id).toEqual(
      'PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon',
    );
    expect(radioOptions.get(1).props.disabled).toEqual(false);
    expect(radioOptions.get(1).props.label.id).toEqual('PersonArbeidsforholdDetailForm.SokerErIPermisjon');
  });
  it('Skal vise utvidet RadioOptions for aktivt arbeidsforhold når arbeidsforholdet har permisjon med tom og ikke mottatt IM', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper.WrappedComponent
      intl={intlMock}
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
    />, messages);
    const radioOptions = wrapper.find('RadioOption');
    expect(radioOptions).toHaveLength(5);
    expect(radioOptions.get(0).props.label.id).toEqual(
      'PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon',
    );
    expect(radioOptions.get(0).props.disabled).toEqual(false);
    expect(radioOptions.get(1).props.label.id).toEqual('PersonArbeidsforholdDetailForm.AvslaYtelseManglendeOpplysninger');
    expect(radioOptions.get(1).props.disabled).toEqual(false);
    expect(radioOptions.get(2).props.label.id).toEqual('PersonArbeidsforholdDetailForm.InntektIkkeMedIBeregningsgrunnlaget');
    expect(radioOptions.get(2).props.disabled).toEqual(false);
    expect(radioOptions.get(3).props.label.id).toEqual('PersonArbeidsforholdDetailForm.BenyttAInntektIBeregningsgrunnlag');
    expect(radioOptions.get(3).props.disabled).toEqual(false);
    expect(radioOptions.get(4).props.label.id).toEqual('PersonArbeidsforholdDetailForm.SokerErIPermisjon');
    expect(radioOptions.get(4).props.disabled).toEqual(false);
  });
  it('Skal ikke vise utvidet RadioOptions for aktivt arbeidsforhold når arbeidsforholdet har permisjon med tom og mottatt IM', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper.WrappedComponent
      intl={intlMock}
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
    />, messages);
    const radioOptions = wrapper.find('RadioOption');
    expect(radioOptions).toHaveLength(2);
    expect(radioOptions.get(0).props.label.id).toEqual(
      'PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon',
    );
    expect(radioOptions.get(0).props.disabled).toEqual(false);
    expect(radioOptions.get(1).props.label.id).toEqual('PersonArbeidsforholdDetailForm.SokerErIPermisjon');
    expect(radioOptions.get(1).props.disabled).toEqual(false);
  });
  it('Skal vise utvidet RadioOptions for aktivt arbeidsforhold når arbeidsforholdet har flere permisjoner uten mottatt IM, '
    + 'samt disable knapp hvor saksbehandler kan velge at soeker er i permisjon', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper.WrappedComponent
      intl={intlMock}
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
    />, messages);
    const radioOptions = wrapper.find('RadioOption');
    expect(radioOptions).toHaveLength(5);
    expect(radioOptions.get(0).props.label.id).toEqual(
      'PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon',
    );
    expect(radioOptions.get(0).props.disabled).toEqual(false);
    expect(radioOptions.get(1).props.label.id).toEqual('PersonArbeidsforholdDetailForm.AvslaYtelseManglendeOpplysninger');
    expect(radioOptions.get(1).props.disabled).toEqual(false);
    expect(radioOptions.get(2).props.label.id).toEqual('PersonArbeidsforholdDetailForm.InntektIkkeMedIBeregningsgrunnlaget');
    expect(radioOptions.get(2).props.disabled).toEqual(false);
    expect(radioOptions.get(3).props.label.id).toEqual('PersonArbeidsforholdDetailForm.BenyttAInntektIBeregningsgrunnlag');
    expect(radioOptions.get(3).props.disabled).toEqual(false);
    expect(radioOptions.get(4).props.label.id).toEqual('PersonArbeidsforholdDetailForm.SokerErIPermisjon');
    expect(radioOptions.get(4).props.disabled).toEqual(true);
  });
  it('Skal vise utvidet RadioOptions for aktivt arbeidsforhold når arbeidsforholdet har flere permisjoner og mottatt IM, '
    + 'samt disable knapp hvor saksbehandler kan velge at soeker er i permisjon', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper.WrappedComponent
      intl={intlMock}
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
    />, messages);
    const radioOptions = wrapper.find('RadioOption');
    expect(radioOptions).toHaveLength(2);
    expect(radioOptions.get(0).props.label.id).toEqual(
      'PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon',
    );
    expect(radioOptions.get(0).props.disabled).toEqual(false);
    expect(radioOptions.get(1).props.label.id).toEqual('PersonArbeidsforholdDetailForm.SokerErIPermisjon');
    expect(radioOptions.get(1).props.disabled).toEqual(true);
  });
  it('skal kun vise to RadioOptions når arbeidsforholdhandling er undefined', () => {
    const wrapper = shallowWithIntl(<ArbeidsforholdRadioknapper.WrappedComponent
      intl={intlMock}
      readOnly={false}
      formName=""
      hasReceivedInntektsmelding={false}
      arbeidsforhold={{
        ...arbeidsforhold,
      }}
      aktivtArbeidsforholdTillatUtenIM
      arbeidsforholdHandlingVerdi={undefined}
    />, messages);
    const radioOptions = wrapper.find('RadioOption');
    expect(radioOptions).toHaveLength(2);
    expect(radioOptions.get(0).props.label.id).toEqual('PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivt');
    expect(radioOptions.get(0).props.disabled).toEqual(false);
    expect(radioOptions.get(1).props.label.id).toEqual('PersonArbeidsforholdDetailForm.ArbeidsforholdetErIkkeAktivt');
    expect(radioOptions.get(1).props.disabled).toEqual(true);
  });
});
