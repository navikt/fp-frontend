import React from 'react';
import { FormattedMessage } from 'react-intl';

import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import periodeAarsak from '@fpsak-frontend/kodeverk/src/periodeAarsak';
import { formatCurrencyNoKr } from '@fpsak-frontend/utils';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { AlleKodeverk, BeregningsgrunnlagPeriodeProp } from '@fpsak-frontend/types';
import {
  AksjonspunktBehandlerTidsbegrensetImpl as UnwrappedForm, createInputFieldKey, createTableData, getIsAksjonspunktClosed,
} from './AksjonspunktBehandlerTB';
import messages from '../../../i18n/nb_NO.json';

const firstCol = {
  erTidsbegrenset: true,
  isEditable: false,
  tabellInnhold: 'Arbeidsgiver 1',
  inputfieldKey: '',
};

const secondCol = {
  erTidsbegrenset: false,
  isEditable: true,
  tabellInnhold: '100000',
  inputfieldKey: '',
};

const thirdCol = {
  erTidsbegrenset: false,
  isEditable: true,
  tabellInnhold: '100000',
  inputfieldKey: 'DetteErBareEnTest',
};

const fourthCol = {
  erTidsbegrenset: false,
  isEditable: true,
  tabellInnhold: '100000',
  inputfieldKey: 'detteErOgsåBareEnTest',
};

const mockTableData = {
  arbeidsgiver1: [firstCol, secondCol, thirdCol, fourthCol],
};

const mockbruttoPerodeList = [
  {
    brutto: 560500,
    periode: 'beregnetInntekt_2019-09-16_2019-09-29',
  },
  { brutto: 0, periode: '2019-09-16_2019-09-29' },
  { brutto: 0, periode: '2019-09-30_2019-10-15' },
  { brutto: 0, periode: '2019-10-15_null' },
];

const beregnetPrAarAndelEn = 250000;
const overstyrtPrAarAndelEn = 100000;

const beregnetPrAarAndelTo = 100000;
const overstyrtPrAarAndelTo = 200000;

const beregningsgrunnlagPerioder = [
  {
    periodeAarsaker: [],
    beregningsgrunnlagPeriodeFom: '2018-06-01',
    beregningsgrunnlagPeriodeTom: '2018-06-30',
    beregningsgrunnlagPrStatusOgAndel: [
      {
        aktivitetStatus: {
          kode: aktivitetStatus.ARBEIDSTAKER,
        },
        erTidsbegrensetArbeidsforhold: true,
        beregnetPrAar: beregnetPrAarAndelEn,
        overstyrtPrAar: overstyrtPrAarAndelEn,
        arbeidsforhold: {
          arbeidsgiverIdent: '123',
          arbeidsforholdId: '123',
          eksternArbeidsforholdId: '345678',
        },
        andelsnr: 1,
      },
      {
        aktivitetStatus: {
          kode: aktivitetStatus.ARBEIDSTAKER,
        },
        erTidsbegrensetArbeidsforhold: true,
        beregnetPrAar: beregnetPrAarAndelTo,
        overstyrtPrAar: overstyrtPrAarAndelTo,
        arbeidsforhold: {
          arbeidsgiverIdent: '456',
          arbeidsforholdId: '456',
          eksternArbeidsforholdId: '567890',
        },
        andelsnr: 2,
      },
    ],
  } as BeregningsgrunnlagPeriodeProp,
  {
    periodeAarsaker: [{ kode: periodeAarsak.ARBEIDSFORHOLD_AVSLUTTET }],
    beregningsgrunnlagPeriodeFom: '2018-07-01',
    beregningsgrunnlagPeriodeTom: '2018-07-31',
    beregningsgrunnlagPrStatusOgAndel: [
      {
        aktivitetStatus: {
          kode: aktivitetStatus.ARBEIDSTAKER,
        },
        erTidsbegrensetArbeidsforhold: true,
        beregnetPrAar: beregnetPrAarAndelEn,
        overstyrtPrAar: overstyrtPrAarAndelEn,
        arbeidsforhold: {
          arbeidsgiverIdent: '123',
          arbeidsforholdId: '123',
          eksternArbeidsforholdId: '345678',
        },
        andelsnr: 1,
      },
      {
        aktivitetStatus: {
          kode: aktivitetStatus.ARBEIDSTAKER,
        },
        erTidsbegrensetArbeidsforhold: true,
        beregnetPrAar: beregnetPrAarAndelTo,
        overstyrtPrAar: overstyrtPrAarAndelTo,
        arbeidsforhold: {
          arbeidsgiverIdent: '456',
          arbeidsforholdId: '456',
          eksternArbeidsforholdId: '567890',
        },
        andelsnr: 2,
      },
    ],
  } as BeregningsgrunnlagPeriodeProp,
  {
    periodeAarsaker: [{ kode: periodeAarsak.ARBEIDSFORHOLD_AVSLUTTET }],
    beregningsgrunnlagPeriodeFom: '2018-08-01',
    beregningsgrunnlagPrStatusOgAndel: [
      {
        aktivitetStatus: {
          kode: aktivitetStatus.ARBEIDSTAKER,
        },
        erTidsbegrensetArbeidsforhold: true,
        beregnetPrAar: beregnetPrAarAndelEn,
        overstyrtPrAar: overstyrtPrAarAndelEn,
        arbeidsforhold: {
          arbeidsgiverIdent: '123',
          arbeidsforholdId: '123',
          eksternArbeidsforholdId: '345678',
        },
        andelsnr: 1,
      },
      {
        aktivitetStatus: {
          kode: aktivitetStatus.ARBEIDSTAKER,
        },
        erTidsbegrensetArbeidsforhold: true,
        beregnetPrAar: beregnetPrAarAndelTo,
        overstyrtPrAar: overstyrtPrAarAndelTo,
        arbeidsforhold: {
          arbeidsgiverIdent: '123',
          arbeidsforholdId: '456',
          eksternArbeidsforholdId: '567890',
        },
        andelsnr: 2,
      },
    ],
  } as BeregningsgrunnlagPeriodeProp,
  {
    periodeAarsaker: [{ kode: periodeAarsak.REFUSJON_OPPHOERER }],
    beregningsgrunnlagPeriodeFom: '2019-01-01',
    beregningsgrunnlagPrStatusOgAndel: [
      {
        aktivitetStatus: {
          kode: aktivitetStatus.ARBEIDSTAKER,
        },
        erTidsbegrensetArbeidsforhold: true,
        beregnetPrAar: beregnetPrAarAndelEn,
        overstyrtPrAar: overstyrtPrAarAndelEn,
        arbeidsforhold: {
          arbeidsgiverIdent: '123',
          arbeidsforholdId: '123',
          eksternArbeidsforholdId: '345678',
        },
        andelsnr: 1,
      },
      {
        aktivitetStatus: {
          kode: aktivitetStatus.ARBEIDSTAKER,
        },
        erTidsbegrensetArbeidsforhold: true,
        beregnetPrAar: beregnetPrAarAndelTo,
        overstyrtPrAar: overstyrtPrAarAndelTo,
        arbeidsforhold: {
          arbeidsgiverIdent: '123',
          arbeidsforholdId: '456',
          eksternArbeidsforholdId: '567890',
        },
        andelsnr: 2,
      },
    ],
  } as BeregningsgrunnlagPeriodeProp,
];
const keyForPeriodeOgAndel = (periodeNr, andelNr) => createInputFieldKey(
  beregningsgrunnlagPerioder[periodeNr].beregningsgrunnlagPrStatusOgAndel[andelNr],
  beregningsgrunnlagPerioder[periodeNr],
);

const arbeidsgiverOpplysningerPerId = {
  123: {
    erPrivatPerson: false,
    identifikator: '123',
    referanse: '123',
    navn: 'arbeidsgiver',
  },
  456: {
    erPrivatPerson: false,
    identifikator: '456',
    referanse: '123',
    navn: 'arbeidsgiver',
  },
};

describe('<AksjonspunktBehandlerTB>', () => {
  it('Skal teste tabellen får korrekte rader', () => {
    const wrapper = shallowWithIntl(<UnwrappedForm
      readOnly={false}
      tableData={mockTableData}
      isAksjonspunktClosed={false}
      bruttoPrPeriodeList={mockbruttoPerodeList}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      aksjonspunkter={[]}
      alleKodeverk={{} as AlleKodeverk}
      allePerioder={[]}
      formName="test"
    />, messages);
    const dataRows = wrapper.findWhere((node) => node.key() === 'arbeidsgiver1');
    const arbeidsgiverNavn = dataRows.first().find('Normaltekst');
    expect(arbeidsgiverNavn.first().childAt(0).text()).toBe(mockTableData.arbeidsgiver1[0].tabellInnhold);
    const editableFields = mockTableData.arbeidsgiver1.filter((periode) => periode.isEditable === true);
    expect(editableFields).toHaveLength(mockTableData.arbeidsgiver1.length - 1);
    const sumRows = wrapper.find('#bruttoPrPeriodeRad');
    const sumCols = sumRows.first().find('td');
    expect(sumCols).toHaveLength(mockTableData.arbeidsgiver1.length);
    expect(sumCols.first().find(FormattedMessage).first().props().id).toBe('Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerTB.SumPeriode');
  });
  it('Skal teste at initial values bygges korrekt', () => {
    const expectedInitialValues = {};
    // Første periode
    expectedInitialValues[keyForPeriodeOgAndel(0, 0)] = formatCurrencyNoKr(overstyrtPrAarAndelEn);
    expectedInitialValues[keyForPeriodeOgAndel(0, 1)] = formatCurrencyNoKr(overstyrtPrAarAndelTo);
    // Andre periode
    expectedInitialValues[keyForPeriodeOgAndel(1, 0)] = formatCurrencyNoKr(overstyrtPrAarAndelEn);
    expectedInitialValues[keyForPeriodeOgAndel(1, 1)] = formatCurrencyNoKr(overstyrtPrAarAndelTo);
    // Tredje periode
    expectedInitialValues[keyForPeriodeOgAndel(2, 0)] = formatCurrencyNoKr(overstyrtPrAarAndelEn);
    expectedInitialValues[keyForPeriodeOgAndel(2, 1)] = formatCurrencyNoKr(overstyrtPrAarAndelTo);
    const initialValues = UnwrappedForm.buildInitialValues(beregningsgrunnlagPerioder);
    expect(initialValues).toEqual(expectedInitialValues);
  });
  it('Skal teste at selector lager forventet objekt ut av en liste med beregningsgrunnlagperioder '
    + 'som inneholder kortvarige arbeidsforhold når vi har aksjonspunkt', () => {
    const expectedResultObjectWhenWeHaveAksjonspunkt = {
      arbeidsgiver123: [
        {
          erTidsbegrenset: true,
          isEditable: false,
          tabellInnhold: 'arbeidsgiver (123)...5678',
          inputfieldKey: '',
        },
        {
          erTidsbegrenset: false,
          isEditable: true,
          tabellInnhold: formatCurrencyNoKr(overstyrtPrAarAndelEn),
          inputfieldKey: 'inntektField_123_1_2018-06-01',
        },
        {
          erTidsbegrenset: false,
          isEditable: true,
          tabellInnhold: formatCurrencyNoKr(overstyrtPrAarAndelEn),
          inputfieldKey: 'inntektField_123_1_2018-07-01',
        },
        {
          erTidsbegrenset: false,
          isEditable: true,
          tabellInnhold: formatCurrencyNoKr(overstyrtPrAarAndelEn),
          inputfieldKey: 'inntektField_123_1_2018-08-01',
        },
      ],
      arbeidsgiver456: [
        {
          erTidsbegrenset: true,
          isEditable: false,
          tabellInnhold: 'arbeidsgiver (456)...7890',
          inputfieldKey: '',
        },
        {
          erTidsbegrenset: false,
          isEditable: true,
          tabellInnhold: formatCurrencyNoKr(overstyrtPrAarAndelTo),
          inputfieldKey: 'inntektField_456_2_2018-06-01',
        },
        {
          erTidsbegrenset: false,
          isEditable: true,
          tabellInnhold: formatCurrencyNoKr(overstyrtPrAarAndelTo),
          inputfieldKey: 'inntektField_456_2_2018-07-01',
        },
        {
          erTidsbegrenset: false,
          isEditable: true,
          tabellInnhold: formatCurrencyNoKr(overstyrtPrAarAndelTo),
          inputfieldKey: 'inntektField_456_2_2018-08-01',
        },
      ],
    };
    const selectorData = createTableData.resultFunc(beregningsgrunnlagPerioder, {} as AlleKodeverk, arbeidsgiverOpplysningerPerId);
    expect(selectorData).toEqual(expectedResultObjectWhenWeHaveAksjonspunkt);
  });
  it('Skal teste at selector henter ut om aksjonspunktet er lukket eller ikke', () => {
    const korrektApLukket = [{
      kanLoses: false,
      erAktivt: true,
      definisjon: {
        kode: aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
        kodeverk: 'test',
      },
      status: {
        kode: aksjonspunktStatus.UTFORT,
        kodeverk: 'test',
      },
    }];
    const korrektApApent = [{
      kanLoses: true,
      erAktivt: true,
      definisjon: {
        kode: aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
        kodeverk: 'test',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: 'test',
      },
    }];
    const selectorDataLukket = getIsAksjonspunktClosed.resultFunc(korrektApLukket);
    expect(selectorDataLukket).toBe(true);
    const selectorDataApent = getIsAksjonspunktClosed.resultFunc(korrektApApent);
    expect(selectorDataApent).toBe(false);
  });
  it('Skal teste transformValues metode', () => {
    const formValues = {};
    // Første periode
    formValues[keyForPeriodeOgAndel(0, 0)] = '100 000';
    formValues[keyForPeriodeOgAndel(0, 1)] = '200 000';

    // Andre periode
    formValues[keyForPeriodeOgAndel(1, 0)] = '100 000';
    formValues[keyForPeriodeOgAndel(1, 1)] = '250 000';

    // Tredje periode
    formValues[keyForPeriodeOgAndel(2, 0)] = '100 000';
    formValues[keyForPeriodeOgAndel(2, 1)] = '500 000';

    const expectedTransformedValues = [
      {
        periodeFom: beregningsgrunnlagPerioder[0].beregningsgrunnlagPeriodeFom,
        periodeTom: beregningsgrunnlagPerioder[0].beregningsgrunnlagPeriodeTom,
        fastsatteTidsbegrensedeAndeler: [
          {
            andelsnr: 1,
            bruttoFastsattInntekt: 100000,
          },
          {
            andelsnr: 2,
            bruttoFastsattInntekt: 200000,
          },
        ],
      },
      {
        periodeFom: beregningsgrunnlagPerioder[1].beregningsgrunnlagPeriodeFom,
        periodeTom: beregningsgrunnlagPerioder[1].beregningsgrunnlagPeriodeTom,
        fastsatteTidsbegrensedeAndeler: [
          {
            andelsnr: 1,
            bruttoFastsattInntekt: 100000,
          },
          {
            andelsnr: 2,
            bruttoFastsattInntekt: 250000,
          },
        ],
      },
      {
        periodeFom: beregningsgrunnlagPerioder[2].beregningsgrunnlagPeriodeFom,
        periodeTom: undefined,
        fastsatteTidsbegrensedeAndeler: [
          {
            andelsnr: 1,
            bruttoFastsattInntekt: 100000,
          },
          {
            andelsnr: 2,
            bruttoFastsattInntekt: 500000,
          },
        ],
      },
    ];
    const transformedValues = UnwrappedForm.transformValues(formValues, beregningsgrunnlagPerioder);
    expect(transformedValues).toEqual(expectedTransformedValues);
  });

  it('Skal teste buildInitialValues metode', () => {
    const expectedInitialValues = {};
    // Første periode
    expectedInitialValues[keyForPeriodeOgAndel(0, 0)] = formatCurrencyNoKr(overstyrtPrAarAndelEn);
    expectedInitialValues[keyForPeriodeOgAndel(0, 1)] = formatCurrencyNoKr(overstyrtPrAarAndelTo);
    // Andre periode
    expectedInitialValues[keyForPeriodeOgAndel(1, 0)] = formatCurrencyNoKr(overstyrtPrAarAndelEn);
    expectedInitialValues[keyForPeriodeOgAndel(1, 1)] = formatCurrencyNoKr(overstyrtPrAarAndelTo);
    // Tredje periode
    expectedInitialValues[keyForPeriodeOgAndel(2, 0)] = formatCurrencyNoKr(overstyrtPrAarAndelEn);
    expectedInitialValues[keyForPeriodeOgAndel(2, 1)] = formatCurrencyNoKr(overstyrtPrAarAndelTo);

    const initialValues = UnwrappedForm.buildInitialValues(beregningsgrunnlagPerioder);
    expect(initialValues).toEqual(expectedInitialValues);
  });
});
