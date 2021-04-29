import React from 'react';
import { isRequiredMessage } from '@fpsak-frontend/utils';
import { metaMock, MockFieldsWithContent } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import { SelectField } from '@fpsak-frontend/form';
import { TableRow } from '@fpsak-frontend/shared-components';
import { Element } from 'nav-frontend-typografi';
import beregningsgrunnlagAndeltyper from '@fpsak-frontend/kodeverk/src/beregningsgrunnlagAndeltyper';
import { skalIkkjeVereHoegereEnnRefusjonFraInntektsmelding } from '../ValidateAndelerUtils';
import { lagBelopKolonne, RenderFordelBGFieldArrayImpl } from './RenderFordelBGFieldArray';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

const inntektskategorier = [
  {
    kode: 'ARBEIDSTAKER',
    navn: 'Arbeidstaker',
    kodeverk: 'test',
  },
  {
    kode: 'SELVSTENDIG_NÆRINGSDRIVENDE',
    navn: 'Selvstendig næringsdrivende',
    kodeverk: 'test',
  },
];

const getKodeverknavn = () => undefined;

const andel = {
  nyAndel: true,
  fordelingForrigeBehandling: 0,
  fastsattBelop: '0',
  lagtTilAvSaksbehandler: true,
  refusjonskravFraInntektsmelding: 0,
  belopFraInntektsmelding: null,
  skalRedigereInntekt: true,
};
const fields = new MockFieldsWithContent('endringPeriode0', [andel]);
const arbeidstakerNavn = 'Hansens bil og brems AS';
const siste4SifferIArbeidsforholdId = '4352';
const arbeidstakerAndelsnr = 1;
const arbeidsgiverId = '12338';
const arbeidsforholdList = [{
  nyttArbeidsforhold: false,
  beregningsperiodeTom: '2016-01-01',
  beregningsperiodeFom: '2016-03-31',
  arbeidsgiverId,
  startDato: '2016-01-01',
  opphoersdato: '2018-04-01',
  arbeidsforholdId: '12142223323',
  eksternArbeidsforholdId: `345${siste4SifferIArbeidsforholdId}`,
  andelsnr: arbeidstakerAndelsnr,
}];

const agOplysninger = {
  12338: {
    identifikator: arbeidsgiverId,
    navn: arbeidstakerNavn,
    erPrivatPerson: false,
  },
  14235235235: {
    navn: 'Test',
    identifikator: '14235235235',
    erPrivatPerson: false,
  },
};

describe('<RenderFordelBGFieldArray>', () => {
  it('skal ha selectvalues med Ytelse når kun ytelse', () => {
    const forventetArbeidstakerString = `${arbeidstakerNavn} (${arbeidsgiverId})...${siste4SifferIArbeidsforholdId}`;
    const wrapper = shallowWithIntl(<RenderFordelBGFieldArrayImpl
      fields={fields}
      intl={intlMock}
      meta={metaMock}
      inntektskategoriKoder={inntektskategorier}
      arbeidsforholdList={arbeidsforholdList}
      readOnly={false}
      isAksjonspunktClosed={false}
      periodeUtenAarsak={false}
      harKunYtelse
      erRevurdering={false}
      getKodeverknavn={getKodeverknavn}
      arbeidsgiverOpplysningerPerId={agOplysninger}
      alleKodeverk={{}}
      behandlingType={null}
      beregningsgrunnlag={{}}
    />, messages);

    const selectFields = wrapper.find(SelectField);
    expect(selectFields).toHaveLength(2);
    const selectValuesArbeidsforhold = selectFields.first().prop('selectValues');
    expect(selectValuesArbeidsforhold).toHaveLength(2);
    expect(selectValuesArbeidsforhold[0].props.value).toBe(arbeidstakerAndelsnr.toString());
    expect(selectValuesArbeidsforhold[0].props.children).toBe(forventetArbeidstakerString);
    expect(selectValuesArbeidsforhold[1].props.value).toBe(beregningsgrunnlagAndeltyper.BRUKERS_ANDEL);
  });

  it('skal ikkje selectvalues med Ytelse når ikkje kun ytelse', () => {
    const forventetArbeidstakerString = `${arbeidstakerNavn} (${arbeidsgiverId})...${siste4SifferIArbeidsforholdId}`;
    const wrapper = shallowWithIntl(<RenderFordelBGFieldArrayImpl
      fields={fields}
      intl={intlMock}
      meta={metaMock}
      inntektskategoriKoder={inntektskategorier}
      arbeidsforholdList={arbeidsforholdList}
      readOnly={false}
      isAksjonspunktClosed={false}
      harKunYtelse={false}
      periodeUtenAarsak={false}
      erRevurdering={false}
      getKodeverknavn={getKodeverknavn}
      arbeidsgiverOpplysningerPerId={agOplysninger}
      alleKodeverk={{}}
      behandlingType={null}
      beregningsgrunnlag={{}}
    />, messages);

    const selectFields = wrapper.find(SelectField);
    expect(selectFields).toHaveLength(2);
    const selectValuesArbeidsforhold = selectFields.first().prop('selectValues');
    expect(selectValuesArbeidsforhold).toHaveLength(1);
    expect(selectValuesArbeidsforhold[0].props.value).toBe(arbeidstakerAndelsnr.toString());
    expect(selectValuesArbeidsforhold[0].props.children).toBe(forventetArbeidstakerString);
  });

  it('skal ikkje vise rapportert inntekt om minst en andel som tilkommer før stp ikkje har register opplysning tilgjengelig', () => {
    const andelMedRapportertInntekt = {
      nyAndel: false,
      fordelingForrigeBehandling: 0,
      fastsattBelop: '0',
      lagtTilAvSaksbehandler: true,
      refusjonskravFraInntektsmelding: 0,
      belopFraInntektsmelding: null,
      skalRedigereInntekt: true,
      registerInntekt: '10 000',
      arbeidsperiodeFom: '2016-01-01',
    };
    const andelUtenRapportertInntekt = {
      nyAndel: false,
      fordelingForrigeBehandling: 0,
      fastsattBelop: '0',
      lagtTilAvSaksbehandler: true,
      refusjonskravFraInntektsmelding: 0,
      belopFraInntektsmelding: null,
      skalRedigereInntekt: true,
      registerInntekt: '',
      arbeidsperiodeFom: '2016-01-01',
    };
    const fields2 = new MockFieldsWithContent('endringPeriode1', [andelMedRapportertInntekt, andelUtenRapportertInntekt]);
    const wrapper = shallowWithIntl(<RenderFordelBGFieldArrayImpl
      fields={fields2}
      intl={intlMock}
      meta={metaMock}
      inntektskategoriKoder={inntektskategorier}
      arbeidsforholdList={arbeidsforholdList}
      readOnly={false}
      isAksjonspunktClosed={false}
      harKunYtelse={false}
      periodeUtenAarsak={false}
      erRevurdering={false}
      getKodeverknavn={getKodeverknavn}
      arbeidsgiverOpplysningerPerId={agOplysninger}
      alleKodeverk={{}}
      behandlingType={null}
      beregningsgrunnlag={{}}
    />, messages);

    const rows = wrapper.find(TableRow);
    const elements = rows.find(Element);
    expect(elements.first().props().children).toBe('');
  });

  it('skal vise beregningsgrunnlagPrAar', () => {
    const andelMedRapportertInntekt = {
      nyAndel: false,
      fordelingForrigeBehandling: 0,
      fastsattBelop: '0',
      lagtTilAvSaksbehandler: true,
      refusjonskravFraInntektsmelding: 0,
      belopFraInntektsmelding: null,
      skalRedigereInntekt: true,
      beregningsgrunnlagPrAar: '10 000',
      arbeidsperiodeFom: '2016-01-01',
    };
    const andelMedRapportertInntekt2 = {
      nyAndel: false,
      fordelingForrigeBehandling: 0,
      fastsattBelop: '0',
      lagtTilAvSaksbehandler: true,
      refusjonskravFraInntektsmelding: 0,
      belopFraInntektsmelding: null,
      skalRedigereInntekt: true,
      beregningsgrunnlagPrAar: '20 000',
      arbeidsperiodeFom: '2016-01-01',
    };
    const fields2 = new MockFieldsWithContent('endringPeriode1', [andelMedRapportertInntekt, andelMedRapportertInntekt2]);
    const wrapper = shallowWithIntl(<RenderFordelBGFieldArrayImpl
      fields={fields2}
      intl={intlMock}
      meta={metaMock}
      inntektskategoriKoder={inntektskategorier}
      arbeidsforholdList={arbeidsforholdList}
      readOnly={false}
      isAksjonspunktClosed={false}
      harKunYtelse={false}
      periodeUtenAarsak={false}
      erRevurdering={false}
      getKodeverknavn={getKodeverknavn}
      arbeidsgiverOpplysningerPerId={agOplysninger}
      alleKodeverk={{}}
      behandlingType={null}
      beregningsgrunnlag={{}}
    />, messages);

    const rows = wrapper.find(TableRow);
    const elements = rows.find(Element);
    expect(elements.first().props().children).toBe('30 000');
  });

  it('skal vise sum av beregningsgrunnlagPrAar', () => {
    const andelMedBeregningsgrunnlagPrAar = {
      nyAndel: false,
      fordelingForrigeBehandling: 0,
      fastsattBelop: '0',
      lagtTilAvSaksbehandler: true,
      refusjonskravFraInntektsmelding: 0,
      belopFraInntektsmelding: null,
      skalRedigereInntekt: true,
      beregningsgrunnlagPrAar: '10 000',
      arbeidsperiodeFom: '2016-01-01',
    };
    const andelMedBeregningsgrunnlagPrAar2 = {
      nyAndel: false,
      fordelingForrigeBehandling: 0,
      fastsattBelop: '0',
      lagtTilAvSaksbehandler: true,
      refusjonskravFraInntektsmelding: 0,
      belopFraInntektsmelding: null,
      skalRedigereInntekt: true,
      beregningsgrunnlagPrAar: '20 000',
      arbeidsperiodeFom: '2016-01-01',
    };

    const andelUtenBeregningsgrunnlagPrAar = {
      nyAndel: true,
      fordelingForrigeBehandling: 0,
      fastsattBelop: '0',
      lagtTilAvSaksbehandler: true,
      refusjonskravFraInntektsmelding: 0,
      belopFraInntektsmelding: null,
      skalRedigereInntekt: true,
      beregningsgrunnlagPrAar: '',
      arbeidsperiodeFom: '2016-01-01',
    };

    const fields2 = new MockFieldsWithContent('endringPeriode1', [andelMedBeregningsgrunnlagPrAar,
      andelMedBeregningsgrunnlagPrAar2, andelUtenBeregningsgrunnlagPrAar]);
    const wrapper = shallowWithIntl(<RenderFordelBGFieldArrayImpl
      fields={fields2}
      intl={intlMock}
      meta={metaMock}
      inntektskategoriKoder={inntektskategorier}
      arbeidsforholdList={arbeidsforholdList}
      readOnly={false}
      isAksjonspunktClosed={false}
      harKunYtelse={false}
      periodeUtenAarsak={false}
      erRevurdering={false}
      getKodeverknavn={getKodeverknavn}
      arbeidsgiverOpplysningerPerId={agOplysninger}
      alleKodeverk={{}}
      behandlingType={null}
      beregningsgrunnlag={{}}
    />, messages);

    const rows = wrapper.find(TableRow);
    const elements = rows.find(Element);
    expect(elements.first().props().children).toBe('30 000');
  });

  it('skal validere eksisterende andeler uten errors', () => {
    const values = [];
    const andel1 = {
      refusjonskrav: '10 000',
      fastsattBelop: '100 000',
      belopFraInntektsmelding: 100000,
      skalKunneEndreRefusjon: false,
      aktivitetstatus: 'ARBEIDSTAKER',
      andel: 'Visningsnavn for virksomhet',
      skalRedigereInntekt: true,
      inntektskategori: 'ARBEIDSTAKER',
      refusjonskravFraInntektsmelding: 10000,
    };
    values.push(andel1);
    const errors = RenderFordelBGFieldArrayImpl.validate(intlMock, values, 100000,
      getKodeverknavn, 97000, undefined, false, agOplysninger);
    expect(errors).toBe(null);
  });

  it('skal returnerer ingen errors for ingen refusjonskrav når skalKunneEndreRefusjon er false', () => {
    const values = [];
    const andel1 = {
      refusjonskrav: '',
      fastsattBelop: '100 000',
      belopFraInntektsmelding: 100000,
      skalKunneEndreRefusjon: false,
      aktivitetstatus: 'ARBEIDSTAKER',
      andel: 'Visningsnavn for virksomhet',
      skalRedigereInntekt: true,
      inntektskategori: 'ARBEIDSTAKER',
      refusjonskravFraInntektsmelding: 10000,
    };
    values.push(andel1);
    const errors = RenderFordelBGFieldArrayImpl.validate(intlMock, values, 100000,
      getKodeverknavn, 97000, undefined, false, agOplysninger);
    expect(errors).toBe(null);
  });

  it('skal returnerer errors for ingen refusjonskrav når skalKunneEndreRefusjon er true', () => {
    const values = [];
    const andel1 = {
      refusjonskrav: '',
      fastsattBelop: '100 000',
      belopFraInntektsmelding: 100000,
      skalKunneEndreRefusjon: true,
      aktivitetstatus: 'ARBEIDSTAKER',
      andel: 'Visningsnavn for virksomhet',
      skalRedigereInntekt: true,
      inntektskategori: 'ARBEIDSTAKER',
      refusjonskravFraInntektsmelding: 10000,
    };
    values.push(andel1);
    const errors = RenderFordelBGFieldArrayImpl.validate(intlMock, values, 100000,
      getKodeverknavn, 97000, undefined, false, agOplysninger);
    expect(errors[0].refusjonskrav).toBe(isRequiredMessage());
  });

  const arbeidsgiverInfo = {
    arbeidsgiverNavn: 'Test',
    arbeidsgiverId: '14235235235',
    arbeidsforholdId: '82389r32fe9343tr',
    eksternArbeidsforholdId: '234567',
  };

  const arbeidsgiverstring = 'Test (14235235235)...4567';

  it('skal returnerer errors for refusjonskrav når det ikkje er mottatt refusjonskrav i inntektsmelding', () => {
    const values = [];
    const andel1 = {
      ...arbeidsgiverInfo,
      refusjonskrav: '10 000',
      fastsattBelop: '100 000',
      belopFraInntektsmelding: 100000,
      skalKunneEndreRefusjon: true,
      aktivitetstatus: 'ARBEIDSTAKER',
      andel: 'Visningsnavn for virksomhet',
      skalRedigereInntekt: true,
      inntektskategori: 'ARBEIDSTAKER',
      refusjonskravFraInntektsmelding: null,
    };
    values.push(andel1);
    const errors = RenderFordelBGFieldArrayImpl.validate(intlMock, values, 100000,
      getKodeverknavn, 97000, undefined, true, agOplysninger);
    const expected = skalIkkjeVereHoegereEnnRefusjonFraInntektsmelding(arbeidsgiverstring);
    /* eslint no-underscore-dangle: ["error", { "allow": ["_error"] }] */
    expect(errors._error.props.id).toBe(expected[0].id);
    expect(errors._error.props.values.arbeidsgiver).toBe(arbeidsgiverstring);
  });

  it('skal returnerer errors for refusjonskrav når refusjonskrav er 0 i inntektsmelding', () => {
    const values = [];
    const andel1 = {
      ...arbeidsgiverInfo,
      refusjonskrav: '10 000',
      fastsattBelop: '100 000',
      belopFraInntektsmelding: 100000,
      skalKunneEndreRefusjon: true,
      aktivitetstatus: 'ARBEIDSTAKER',
      andel: 'Visningsnavn for virksomhet',
      skalRedigereInntekt: true,
      inntektskategori: 'ARBEIDSTAKER',
      refusjonskravFraInntektsmelding: 0,
    };
    values.push(andel1);
    const errors = RenderFordelBGFieldArrayImpl.validate(intlMock, values, 100000,
      getKodeverknavn, 97000, undefined, true, agOplysninger);
    const expected = skalIkkjeVereHoegereEnnRefusjonFraInntektsmelding(arbeidsgiverstring);
    /* eslint no-underscore-dangle: ["error", { "allow": ["_error"] }] */
    expect(errors._error.props.id).toBe(expected[0].id);
    expect(errors._error.props.values.arbeidsgiver).toBe(arbeidsgiverstring);
  });

  it('skal returnerer errors for fastsattbeløp når ikkje oppgitt', () => {
    const values = [];
    const andel1 = {
      refusjonskrav: '10 000',
      fastsattBelop: '',
      belopFraInntektsmelding: 100000,
      skalKunneEndreRefusjon: true,
      aktivitetstatus: 'ARBEIDSTAKER',
      andel: 'Visningsnavn for virksomhet',
      skalRedigereInntekt: true,
      inntektskategori: 'ARBEIDSTAKER',
      refusjonskravFraInntektsmelding: 10000,
      nyttArbeidsforhold: false,
    };
    values.push(andel1);
    const errors = RenderFordelBGFieldArrayImpl.validate(intlMock, values, 100000,
      getKodeverknavn, 97000, undefined, false, agOplysninger);
    expect(errors[0].fastsattBelop).toBe(isRequiredMessage());
  });

  it('skal gi error om inntektkategori ikkje er oppgitt', () => {
    const values = [];
    const andel1 = {
      refusjonskrav: '10 000',
      fastsattBelop: '100 000',
      belopFraInntektsmelding: 100000,
      skalKunneEndreRefusjon: true,
      aktivitetstatus: 'ARBEIDSTAKER',
      andel: 'Visningsnavn for virksomhet',
      skalRedigereInntekt: true,
      inntektskategori: '',
      refusjonskravFraInntektsmelding: 10000,
    };
    values.push(andel1);
    const errors = RenderFordelBGFieldArrayImpl.validate(intlMock, values, 100000,
      getKodeverknavn, 97000, undefined, false, agOplysninger);
    expect(errors[0].inntektskategori).toBe(isRequiredMessage());
  });

  it('skal gi error om andel ikkje er valgt for nye andeler', () => {
    const values = [];
    const andel1 = {
      refusjonskrav: '10 000',
      fastsattBelop: '100 000',
      belopFraInntektsmelding: 100000,
      skalKunneEndreRefusjon: true,
      aktivitetstatus: 'ARBEIDSTAKER',
      andel: '',
      skalRedigereInntekt: true,
      inntektskategori: '',
      refusjonskravFraInntektsmelding: 10000,
      nyAndel: true,
    };
    values.push(andel1);
    const errors = RenderFordelBGFieldArrayImpl.validate(intlMock, values, 100000,
      getKodeverknavn, 97000, undefined, false, agOplysninger);
    expect(errors[0].andel).toBe(isRequiredMessage());
  });

  it('skal ikkje gi error for perioder som ikkje krever manuell behandling', () => {
    const values = [];
    const andel1 = {
      refusjonskrav: '10 000',
      fastsattBelop: '100 000',
      belopFraInntektsmelding: 100000,
      skalKunneEndreRefusjon: true,
      aktivitetstatus: 'ARBEIDSTAKER',
      andel: '',
      skalRedigereInntekt: false,
      inntektskategori: '',
      refusjonskravFraInntektsmelding: 10000,
      nyAndel: true,
    };
    values.push(andel1);
    const errors = RenderFordelBGFieldArrayImpl.validate(intlMock, values, 100000,
      getKodeverknavn, 97000, undefined, false, agOplysninger);
    expect(errors).toBe(null);
  });

  it('lagBelopKolonne skal gi readOnly beløp om andel ikke skal redigere inntekt og det er ikkje er readOnly', () => {
    const belopKolonne = lagBelopKolonne('test', false, true, false);
    expect(belopKolonne.props.className).toBeUndefined();
    expect(belopKolonne.props.children.props.name).toBe('test.readOnlyBelop');
    expect(belopKolonne.props.children.props.isEdited).toBe(false);
  });

  it('lagBelopKolonne skal ikkje gi readOnly beløp om andel ikke skal redigere inntekt og det er readOnly', () => {
    const belopKolonne = lagBelopKolonne('test', true, true, false);
    expect(belopKolonne.props.className).toBe('rightAlignInput');
    expect(belopKolonne.props.children.props.name).toBe('test.fastsattBelop');
    expect(belopKolonne.props.children.props.isEdited).toBe(false);
    expect(belopKolonne.props.children.props.readOnly).toBe(true);
  });

  it('lagBelopKolonne skal ikkje gi readOnly beløp om andel skal redigere inntekt i uten readOnly', () => {
    const belopKolonne = lagBelopKolonne('test', false, false, false);
    expect(belopKolonne.props.className).toBe('rightAlignInput');
    expect(belopKolonne.props.children.props.name).toBe('test.fastsattBelop');
    expect(belopKolonne.props.children.props.isEdited).toBe(false);
    expect(belopKolonne.props.children.props.readOnly).toBe(false);
  });

  it('lagBelopKolonne skal gi fastsattBeløp med isEdited true om andel skal redigere inntekt i readOnly med aksjonspunkt lukket', () => {
    const belopKolonne = lagBelopKolonne('test', true, false, true);
    expect(belopKolonne.props.className).toBe('rightAlignInput');
    expect(belopKolonne.props.children.props.name).toBe('test.fastsattBelop');
    expect(belopKolonne.props.children.props.isEdited).toBe(true);
    expect(belopKolonne.props.children.props.readOnly).toBe(true);
  });

  it('lagBelopKolonne skal gi fastsattBeløp versjon med isEdited false om andel ikkje skal redigere inntekt i readOnly med aksjonspunkt lukket', () => {
    const belopKolonne = lagBelopKolonne('test', true, true, true);
    expect(belopKolonne.props.className).toBe('rightAlignInput');
    expect(belopKolonne.props.children.props.name).toBe('test.fastsattBelop');
    expect(belopKolonne.props.children.props.isEdited).toBe(false);
    expect(belopKolonne.props.children.props.readOnly).toBe(true);
  });
});
