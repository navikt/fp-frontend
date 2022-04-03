import React from 'react';
import { shallow } from 'enzyme';

import aktivitetStatuser from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import periodeAarsak from '@fpsak-frontend/kodeverk/src/periodeAarsak';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { AlleKodeverk, Beregningsgrunnlag } from '@fpsak-frontend/types';

import {
  FordelBeregningsgrunnlagForm,
  getFieldNameKey,
  mapAndel,
  mapTilFastsatteVerdier,
  slaaSammenPerioder,
  transformPerioder,
} from './FordelBeregningsgrunnlagForm';
import FordelBeregningsgrunnlagPeriodePanel from './FordelBeregningsgrunnlagPeriodePanel';
import messages from '../../../i18n/nb_NO.json';
import { FordelBeregningsgrunnlagAndelValues } from '../../types/FordelBeregningsgrunnlagPanelValues';

const intlMock = getIntlMock(messages);

const getKodeverknavn = (kode) => (kode === 'A' ? 'Arbeidstaker' : '');

const andel1 = {
  andelsnr: 1,
  fastsattBelop: null,
  readOnlyBelop: '10 000',
  skalRedigereInntekt: true,
  inntektskategori: 'ARBEIDSTAKER',
  nyAndel: false,
  skalKunneEndreRefusjon: false,
  lagtTilAvSaksbehandler: false,
  arbeidsforholdId: null,
  andel: 'Sopra Steria AS (2342342348)',
  aktivitetStatus: aktivitetStatuser.ARBEIDSTAKER,
};

const andel2 = {
  andelsnr: 2,
  fastsattBelop: '20 000',
  readOnlyBelop: '10 000',
  skalRedigereInntekt: true,
  skalKunneEndreRefusjon: false,
  refusjonskrav: '10 000',
  inntektskategori: 'ARBEIDSTAKER',
  nyAndel: false,
  lagtTilAvSaksbehandler: false,
  arbeidsforholdId: 'ri4j3f34rt3144',
  andel: 'Sopra Steria AS (2342342348)',
  aktivitetStatus: aktivitetStatuser.ARBEIDSTAKER,
  kilde: 'PROSESS',
};

const arbeidsforhold1 = {
  arbeidsforholdId: null,
  arbeidsforholdType: 'ARBEID',
  arbeidsgiverId: '914555825',
  arbeidsgiverNavn: 'ARBEIDSGIVER1 AS',
  belopFraInntektsmeldingPrMnd: 41667,
  opphoersdato: '2019-06-01',
  organisasjonstype: 'VIRKSOMHET',
  refusjonPrAar: 500004,
  startdato: '2016-08-01',
};

const arbeidsforhold2 = {
  arbeidsforholdId: 'd0101e6c-c54a-4db2-ac91-f5b0d86a6d3e',
  arbeidsforholdType: 'ARBEID',
  arbeidsgiverId: '996607852',
  arbeidsgiverNavn: 'ARBEIDSGIVER2 AS',
  belopFraInntektsmeldingPrMnd: 41667,
  organisasjonstype: 'VIRKSOMHET',
  refusjonPrAar: 500004,
  startdato: '2019-06-02',
};

const fordelAndel = {
  aktivitetStatus: 'AT',
  andelIArbeid: [0],
  andelsnr: 1,
  arbeidsforhold: arbeidsforhold1,
  inntektskategori: 'ARBEIDSTAKER',
  nyttArbeidsforhold: false,
};

const fordelAndel2 = {
  aktivitetStatus: 'AT',
  andelIArbeid: [0],
  andelsnr: 2,
  arbeidsforhold: arbeidsforhold2,
  inntektskategori: '-',
  nyttArbeidsforhold: true,
};

const agOpplysninger = {
  996607852: {
    identifikator: '996607852',
    navn: 'ARBEIDSGIVER2 AS',
    erPrivatPerson: false,
  },
  914555825: {
    navn: 'ARBEIDSGIVER1 AS',
    identifikator: '914555825',
    erPrivatPerson: false,
  },
};

describe('<FordelBeregningsgrunnlagForm>', () => {
  it('skal vise 2 perioder', () => {
    const bgAndel1 = {
      andelsnr: 1,
      aktivitetStatus: 'AT',
      arbeidsforhold: arbeidsforhold1,
      beregnetPrAar: 500004,
      bruttoPrAar: 500004,
      inntektskategori: 'ARBEIDSTAKER',
    };

    const bgAndel2 = {
      aktivitetStatus: 'AT',
      andelsnr: 2,
      arbeidsforhold: arbeidsforhold2,
      beregnetPrAar: null,
      bruttoPrAar: null,
      inntektskategori: '-',
    };

    const periode1 = {
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      fom: '2019-04-01',
      skalRedigereInntekt: false,
      skalPreutfyllesMedBeregningsgrunnlag: false,
      skalKunneEndreRefusjon: false,
      tom: '2019-06-01',
    };
    const periode2 = {
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      fom: '2019-04-01',
      skalRedigereInntekt: false,
      skalPreutfyllesMedBeregningsgrunnlag: false,
      skalKunneEndreRefusjon: false,
      tom: '2019-06-01',
    };
    const periode3 = {
      fordelBeregningsgrunnlagAndeler: [fordelAndel, fordelAndel2],
      fom: '2019-06-02',
      skalRedigereInntekt: true,
      skalPreutfyllesMedBeregningsgrunnlag: false,
      skalKunneEndreRefusjon: false,
      tom: null,
    };

    const bgPeriode1 = {
      andelerLagtTilManueltIForrige: [],
      beregnetPrAar: 500004,
      beregningsgrunnlagPeriodeFom: '2019-03-30',
      beregningsgrunnlagPeriodeTom: '2019-03-31',
      periodeAarsaker: [],
      beregningsgrunnlagPrStatusOgAndel: [bgAndel1],
    };
    const bgPeriode2 = {
      andelerLagtTilManueltIForrige: [],
      beregnetPrAar: 500004,
      beregningsgrunnlagPeriodeFom: '2019-04-01',
      beregningsgrunnlagPeriodeTom: '2019-06-01',
      periodeAarsaker: ['NATURALYTELSE_BORTFALT'],
      beregningsgrunnlagPrStatusOgAndel: [bgAndel1],
    };
    const bgPeriode3 = {
      andelerLagtTilManueltIForrige: [],
      beregnetPrAar: 500004,
      beregningsgrunnlagPeriodeFom: '2019-06-02',
      beregningsgrunnlagPeriodeTom: null,
      periodeAarsaker: ['ENDRING_I_REFUSJONSKRAV'],
      beregningsgrunnlagPrStatusOgAndel: [bgAndel1, bgAndel2],
    };
    const perioder = [periode1, periode2, periode3];
    const bgPerioder = [bgPeriode1, bgPeriode2, bgPeriode3];

    const bt = 'BT-003';

    const wrapper = shallow(<FordelBeregningsgrunnlagForm
      perioder={perioder}
      bgPerioder={bgPerioder}
      isAksjonspunktClosed={false}
      readOnly={false}
      beregningsgrunnlag={{} as Beregningsgrunnlag}
      alleKodeverk={{} as AlleKodeverk}
      behandlingType={bt}
      arbeidsgiverOpplysningerPerId={agOpplysninger}
    />);

    const periodePanel = wrapper.find(FordelBeregningsgrunnlagPeriodePanel);
    expect(periodePanel.length).toBe(2);
    const fieldName1 = periodePanel.get(0).props.fordelBGFieldArrayName;
    const fom1 = periodePanel.get(0).props.fom;
    const andeler1 = perioder.find(({ fom }) => fom === fom1).fordelBeregningsgrunnlagAndeler;
    const fieldName2 = periodePanel.get(1).props.fordelBGFieldArrayName;
    const fom2 = periodePanel.get(1).props.fom;
    const andeler2 = perioder.find(({ fom }) => fom === fom2).fordelBeregningsgrunnlagAndeler;

    const bg = {
      aktivitetStatus: ['AT'],
      beregningsgrunnlagPeriode: [bgPeriode1, bgPeriode2, bgPeriode3],
      skjaeringstidspunktBeregning: '2019-03-30',
      dekningsgrad: null,
      grunnbeløp: null,
      erOverstyrtInntekt: false,
    } as Beregningsgrunnlag;

    const initialValues = FordelBeregningsgrunnlagForm.buildInitialValues(perioder, bg, getKodeverknavn, agOpplysninger);
    expect(initialValues[fieldName1].length).toBe(andeler1.length);
    expect(initialValues[fieldName2].length).toBe(andeler2.length);

    const values = {};
    values[getFieldNameKey(0)] = initialValues[fieldName1];
    values[getFieldNameKey(1)] = initialValues[fieldName2];
    const errors = FordelBeregningsgrunnlagForm.validate(intlMock, values, perioder, bg, getKodeverknavn, agOpplysninger);
    expect(errors[getFieldNameKey(0)]).toBe(null);
    expect(errors[getFieldNameKey(1)]).not.toHaveLength(0);
  });

  it('skal returnere liste med en periode om kun en periode i grunnlag', () => {
    const perioder = [{
      fom: '01-01-2019',
      tom: null,
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      skalRedigereInntekt: true,
      skalPreutfyllesMedBeregningsgrunnlag: false,
    }];
    const bgPerioder = [{
      beregningsgrunnlagPeriodeFom: '01-01-2019',
      beregningsgrunnlagPeriodeTom: null,
      periodeAarsaker: [periodeAarsak.ENDRING_I_REFUSJONSKRAV],
    }];
    const nyePerioder = slaaSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(1);
    expect(nyePerioder[0].fom).toBe('01-01-2019');
    expect(nyePerioder[0].tom).toBe(null);
  });

  it('skal returnere liste med en periode om andre periode har naturalytelse tilkommet', () => {
    const perioder = [{
      fom: '01-01-2019',
      tom: '01-02-2019',
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      skalRedigereInntekt: true,
      skalPreutfyllesMedBeregningsgrunnlag: false,
    },
    {
      fom: '02-02-2019',
      tom: null,
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      skalRedigereInntekt: true,
      skalPreutfyllesMedBeregningsgrunnlag: false,
    }];
    const bgPerioder = [{
      beregningsgrunnlagPeriodeFom: '01-01-2019',
      beregningsgrunnlagPeriodeTom: '01-02-2019',
      periodeAarsaker: [periodeAarsak.ENDRING_I_REFUSJONSKRAV],
    },
    {
      beregningsgrunnlagPeriodeFom: '02-02-2019',
      beregningsgrunnlagPeriodeTom: null,
      periodeAarsaker: [periodeAarsak.NATURALYTELSE_TILKOMMER],
    }];
    const nyePerioder = slaaSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(1);
    expect(nyePerioder[0].fom).toBe('01-01-2019');
    expect(nyePerioder[0].tom).toBe(null);
  });

  it('skal returnere liste med en periode om andre periode har naturalytelse bortfalt', () => {
    const perioder = [{
      fom: '01-01-2019',
      tom: '01-02-2019',
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      skalRedigereInntekt: true,
      skalPreutfyllesMedBeregningsgrunnlag: false,
    },
    {
      fom: '02-02-2019',
      tom: null,
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      skalRedigereInntekt: true,
      skalPreutfyllesMedBeregningsgrunnlag: false,
    }];
    const bgPerioder = [{
      beregningsgrunnlagPeriodeFom: '01-01-2019',
      beregningsgrunnlagPeriodeTom: '01-02-2019',
      periodeAarsaker: [periodeAarsak.ENDRING_I_REFUSJONSKRAV],
    },
    {
      beregningsgrunnlagPeriodeFom: '02-02-2019',
      beregningsgrunnlagPeriodeTom: null,
      periodeAarsaker: [periodeAarsak.NATURALYTELSE_BORTFALT],
    }];
    const nyePerioder = slaaSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(1);
    expect(nyePerioder[0].fom).toBe('01-01-2019');
    expect(nyePerioder[0].tom).toBe(null);
  });

  it('skal returnere liste med en periode om andre periode har avsluttet arbeidsforhold uten endring i bruttoPrÅr', () => {
    const perioder = [{
      fom: '01-01-2019',
      tom: '01-02-2019',
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      skalRedigereInntekt: true,
      skalPreutfyllesMedBeregningsgrunnlag: false,
    },
    {
      fom: '02-02-2019',
      tom: null,
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      skalRedigereInntekt: true,
      skalPreutfyllesMedBeregningsgrunnlag: false,
    }];
    const bgPerioder = [{
      beregningsgrunnlagPeriodeFom: '01-01-2019',
      beregningsgrunnlagPeriodeTom: '01-02-2019',
      bruttoPrAar: 120000,
      periodeAarsaker: [periodeAarsak.ENDRING_I_REFUSJONSKRAV],
    },
    {
      beregningsgrunnlagPeriodeFom: '02-02-2019',
      beregningsgrunnlagPeriodeTom: null,
      bruttoPrAar: 120000,
      periodeAarsaker: [periodeAarsak.ARBEIDSFORHOLD_AVSLUTTET],
    }];
    const nyePerioder = slaaSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(1);
    expect(nyePerioder[0].fom).toBe('01-01-2019');
    expect(nyePerioder[0].tom).toBe(null);
  });

  it('skal returnere liste med to perioder om andre periode har avsluttet arbeidsforhold med endring i bruttoPrÅr', () => {
    const perioder = [{
      fom: '01-01-2019',
      tom: '01-02-2019',
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      skalRedigereInntekt: true,
      skalPreutfyllesMedBeregningsgrunnlag: false,
    },
    {
      fom: '02-02-2019',
      tom: null,
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      skalRedigereInntekt: true,
      skalPreutfyllesMedBeregningsgrunnlag: false,
    }];
    const bgPerioder = [{
      beregningsgrunnlagPeriodeFom: '01-01-2019',
      beregningsgrunnlagPeriodeTom: '01-02-2019',
      bruttoPrAar: 120000,
      periodeAarsaker: [periodeAarsak.ENDRING_I_REFUSJONSKRAV],
    },
    {
      beregningsgrunnlagPeriodeFom: '02-02-2019',
      beregningsgrunnlagPeriodeTom: null,
      bruttoPrAar: 130000,
      periodeAarsaker: [periodeAarsak.ARBEIDSFORHOLD_AVSLUTTET],
    }];
    const nyePerioder = slaaSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(2);
    expect(nyePerioder[0].fom).toBe('01-01-2019');
    expect(nyePerioder[0].tom).toBe('01-02-2019');
    expect(nyePerioder[1].fom).toBe('02-02-2019');
    expect(nyePerioder[1].tom).toBe(null);
  });

  it('skal returnere liste med to perioder om andre periode har opphør av gradering', () => {
    const perioder = [{
      fom: '01-01-2019',
      tom: '01-02-2019',
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      skalRedigereInntekt: true,
      skalPreutfyllesMedBeregningsgrunnlag: false,
    },
    {
      fom: '02-02-2019',
      tom: null,
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      skalRedigereInntekt: true,
      skalPreutfyllesMedBeregningsgrunnlag: false,
    }];
    const bgPerioder = [{
      beregningsgrunnlagPeriodeFom: '01-01-2019',
      beregningsgrunnlagPeriodeTom: '01-02-2019',
      bruttoPrAar: 120000,
      periodeAarsaker: [periodeAarsak.ENDRING_I_REFUSJONSKRAV],
    },
    {
      beregningsgrunnlagPeriodeFom: '02-02-2019',
      beregningsgrunnlagPeriodeTom: null,
      bruttoPrAar: 120000,
      periodeAarsaker: [periodeAarsak.GRADERING_OPPHOERER],
    }];
    const nyePerioder = slaaSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(2);
    expect(nyePerioder[0].fom).toBe('01-01-2019');
    expect(nyePerioder[0].tom).toBe('01-02-2019');
    expect(nyePerioder[1].fom).toBe('02-02-2019');
    expect(nyePerioder[1].tom).toBe(null);
  });

  it('skal returnere liste med to perioder om andre periode har opphør av refusjon', () => {
    const perioder = [{
      fom: '01-01-2019',
      tom: '01-02-2019',
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      skalRedigereInntekt: true,
      skalPreutfyllesMedBeregningsgrunnlag: false,
    },
    {
      fom: '02-02-2019',
      tom: null,
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      skalRedigereInntekt: false,
      skalPreutfyllesMedBeregningsgrunnlag: false,
    }];
    const bgPerioder = [{
      beregningsgrunnlagPeriodeFom: '01-01-2019',
      beregningsgrunnlagPeriodeTom: '01-02-2019',
      bruttoPrAar: 120000,
      periodeAarsaker: [periodeAarsak.ENDRING_I_REFUSJONSKRAV],
    },
    {
      beregningsgrunnlagPeriodeFom: '02-02-2019',
      beregningsgrunnlagPeriodeTom: null,
      bruttoPrAar: 120000,
      periodeAarsaker: [periodeAarsak.REFUSJON_OPPHOERER],
    }];
    const nyePerioder = slaaSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(2);
    expect(nyePerioder[0].fom).toBe('01-01-2019');
    expect(nyePerioder[0].tom).toBe('01-02-2019');
    expect(nyePerioder[1].fom).toBe('02-02-2019');
    expect(nyePerioder[1].tom).toBe(null);
  });

  it('skal returnere liste med to perioder om andre periode har endring i refusjon', () => {
    const perioder = [{
      fom: '01-01-2019',
      tom: '01-02-2019',
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      skalRedigereInntekt: false,
      skalPreutfyllesMedBeregningsgrunnlag: false,
    },
    {
      fom: '02-02-2019',
      tom: null,
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      skalRedigereInntekt: true,
      skalPreutfyllesMedBeregningsgrunnlag: false,
    }];
    const bgPerioder = [{
      beregningsgrunnlagPeriodeFom: '01-01-2019',
      beregningsgrunnlagPeriodeTom: '01-02-2019',
      bruttoPrAar: 120000,
      periodeAarsaker: [],
    },
    {
      beregningsgrunnlagPeriodeFom: '02-02-2019',
      beregningsgrunnlagPeriodeTom: null,
      bruttoPrAar: 120000,
      periodeAarsaker: [periodeAarsak.ENDRING_I_REFUSJONSKRAV],
    }];
    const nyePerioder = slaaSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(2);
    expect(nyePerioder[0].fom).toBe('01-01-2019');
    expect(nyePerioder[0].tom).toBe('01-02-2019');
    expect(nyePerioder[1].fom).toBe('02-02-2019');
    expect(nyePerioder[1].tom).toBe(null);
  });

  it('skal returnere liste med to perioder om andre periode har gradering', () => {
    const perioder = [{
      fom: '01-01-2019',
      tom: '01-02-2019',
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      skalRedigereInntekt: true,
      skalPreutfyllesMedBeregningsgrunnlag: false,
    },
    {
      fom: '02-02-2019',
      tom: null,
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      skalRedigereInntekt: true,
      skalPreutfyllesMedBeregningsgrunnlag: false,
    }];
    const bgPerioder = [{
      beregningsgrunnlagPeriodeFom: '01-01-2019',
      beregningsgrunnlagPeriodeTom: '01-02-2019',
      bruttoPrAar: 120000,
      periodeAarsaker: [],
    },
    {
      beregningsgrunnlagPeriodeFom: '02-02-2019',
      beregningsgrunnlagPeriodeTom: null,
      bruttoPrAar: 120000,
      periodeAarsaker: [periodeAarsak.GRADERING],
    }];
    const nyePerioder = slaaSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(2);
    expect(nyePerioder[0].fom).toBe('01-01-2019');
    expect(nyePerioder[0].tom).toBe('01-02-2019');
    expect(nyePerioder[1].fom).toBe('02-02-2019');
    expect(nyePerioder[1].tom).toBe(null);
  });

  it('skal ikkje validere om det ikkje finnes perioder', () => {
    const values = {};
    const fordelBGPerioder = [];
    const beregningsgrunnlag = {} as Beregningsgrunnlag;
    const errors = FordelBeregningsgrunnlagForm.validate(intlMock, values, fordelBGPerioder, beregningsgrunnlag, getKodeverknavn, agOpplysninger);
    expect(Object.keys(errors)).toHaveLength(0);
  });

  it('skal validere 1 periode', () => {
    const values = {};
    values[getFieldNameKey(0)] = [andel1, andel2];
    const fordelBGPerioder = [{ fom: '2018-01-01', tom: null }];
    const beregningsgrunnlag = {
      beregningsgrunnlagPeriode: [{
        periodeAarsaker: [],
        beregningsgrunnlagPeriodeFom: '2018-01-01',
        beregningsgrunnlagPrStatusOgAndel: [],
      }],
    } as Beregningsgrunnlag;
    const errors = FordelBeregningsgrunnlagForm.validate(intlMock, values, fordelBGPerioder, beregningsgrunnlag, getKodeverknavn, agOpplysninger);
    expect(errors[getFieldNameKey(0)]).not.toHaveLength(0);
  });

  it('skal validere 2 perioder', () => {
    const values = {};
    values[getFieldNameKey(0)] = [andel1, andel2];
    values[getFieldNameKey(1)] = [andel1, andel2];
    const fordelBGPerioder = [{ fom: '2018-01-01', tom: '2018-07-01' }, { fom: '2018-07-02', tom: null }];
    const beregningsgrunnlag = {
      beregningsgrunnlagPeriode: [{
        periodeAarsaker: [],
        beregningsgrunnlagPeriodeFom: '2018-01-01',
        beregningsgrunnlagPrStatusOgAndel: [],
      },
      {
        periodeAarsaker: [periodeAarsak.ENDRING_I_REFUSJONSKRAV],
        beregningsgrunnlagPeriodeFom: '2018-07-02',
        beregningsgrunnlagPrStatusOgAndel: [],
      }],
    } as Beregningsgrunnlag;
    const errors = FordelBeregningsgrunnlagForm.validate(intlMock, values, fordelBGPerioder, beregningsgrunnlag, getKodeverknavn, agOpplysninger);
    expect(errors[getFieldNameKey(0)]).not.toHaveLength(0);
    expect(errors[getFieldNameKey(1)]).not.toHaveLength(0);
  });

  it('skal mappe andel til fastsatte verdier uten endring i refusjon', () => {
    const fastsatteVerdier = mapTilFastsatteVerdier(andel2 as FordelBeregningsgrunnlagAndelValues);
    expect(fastsatteVerdier.fastsattÅrsbeløpInklNaturalytelse).toBe(20000);
    expect(fastsatteVerdier.refusjonPrÅr).toBe(null);
    expect(fastsatteVerdier.inntektskategori).toBe('ARBEIDSTAKER');
  });

  it('skal mappe andel til fastsatte verdier med endring i refusjon', () => {
    const andel = { ...andel2, skalKunneEndreRefusjon: true };
    const fastsatteVerdier = mapTilFastsatteVerdier(andel as FordelBeregningsgrunnlagAndelValues);
    expect(fastsatteVerdier.fastsattÅrsbeløpInklNaturalytelse).toBe(20000);
    expect(fastsatteVerdier.refusjonPrÅr).toBe(10000);
    expect(fastsatteVerdier.inntektskategori).toBe('ARBEIDSTAKER');
  });

  it('skal mappe verdier fra andel', () => {
    const verdier = mapAndel(andel2 as FordelBeregningsgrunnlagAndelValues);
    expect(verdier.fastsatteVerdier.fastsattÅrsbeløpInklNaturalytelse).toBe(20000);
    expect(verdier.fastsatteVerdier.refusjonPrÅr).toBe(null);
    expect(verdier.fastsatteVerdier.inntektskategori).toBe('ARBEIDSTAKER');
    expect(verdier.lagtTilAvSaksbehandler).toBe(false);
    expect(verdier.nyAndel).toBe(false);
    expect(verdier.arbeidsforholdId).toBe('ri4j3f34rt3144');
  });

  it('skal transforme perioder for submit', () => {
    const bgPerioder = [{
      beregningsgrunnlagPeriodeFom: '2018-01-01',
      beregningsgrunnlagPeriodeTom: '2018-06-01',
      periodeAarsaker: [],
    },
    {
      beregningsgrunnlagPeriodeFom: '2018-06-02',
      beregningsgrunnlagPeriodeTom: null,
      periodeAarsaker: [periodeAarsak.ENDRING_I_REFUSJONSKRAV],
    }];
    const fordelBGPerioder = [
      {
        fom: '2018-01-01',
        tom: '2018-06-01',
        skalRedigereInntekt: false,
        skalPreutfyllesMedBeregningsgrunnlag: false,
      },
      {
        fom: '2018-06-02',
        tom: null,
        skalRedigereInntekt: true,
        skalPreutfyllesMedBeregningsgrunnlag: false,
      },
    ];
    const values = {};
    values[getFieldNameKey(0)] = [{ ...andel1 }, { ...andel2 }];
    values[getFieldNameKey(1)] = [{ ...andel1, fastsattBelop: '10 000' }, andel2];
    const perioder = transformPerioder(fordelBGPerioder, values, bgPerioder);
    expect(perioder.length).toBe(1);
    expect(perioder[0].fom).toBe('2018-06-02');
    expect(perioder[0].tom).toBe(null);
    expect(perioder[0].andeler.length).toBe(2);

    expect(perioder[0].andeler[0].fastsatteVerdier.fastsattÅrsbeløpInklNaturalytelse).toBe(10000);
    expect(perioder[0].andeler[0].fastsatteVerdier.refusjonPrÅr).toBe(null);
    expect(perioder[0].andeler[0].fastsatteVerdier.inntektskategori).toBe('ARBEIDSTAKER');
    expect(perioder[0].andeler[0].lagtTilAvSaksbehandler).toBe(false);
    expect(perioder[0].andeler[0].nyAndel).toBe(false);
    expect(perioder[0].andeler[0].arbeidsforholdId).toBe(null);

    expect(perioder[0].andeler[1].fastsatteVerdier.fastsattÅrsbeløpInklNaturalytelse).toBe(20000);
    expect(perioder[0].andeler[1].fastsatteVerdier.refusjonPrÅr).toBe(null);
    expect(perioder[0].andeler[1].fastsatteVerdier.inntektskategori).toBe('ARBEIDSTAKER');
    expect(perioder[0].andeler[1].lagtTilAvSaksbehandler).toBe(false);
    expect(perioder[0].andeler[1].nyAndel).toBe(false);
    expect(perioder[0].andeler[1].arbeidsforholdId).toBe('ri4j3f34rt3144');
  });

  it('skal transforme perioder for submit når perioder er slått sammen', () => {
    const bgPerioder = [{
      beregningsgrunnlagPeriodeFom: '2018-01-01',
      beregningsgrunnlagPeriodeTom: '2018-06-01',
      periodeAarsaker: [periodeAarsak.ENDRING_I_REFUSJONSKRAV],
    },
    {
      beregningsgrunnlagPeriodeFom: '2018-06-02',
      beregningsgrunnlagPeriodeTom: '2018-10-01',
      periodeAarsaker: [periodeAarsak.NATURALYTELSE_TILKOMMER],
    },
    {
      beregningsgrunnlagPeriodeFom: '2018-10-02',
      beregningsgrunnlagPeriodeTom: null,
      periodeAarsaker: [periodeAarsak.REFUSJON_OPPHOERER],
    }];
    const fordelBGPerioder = [
      {
        fom: '2018-01-01',
        tom: '2018-06-01',
        skalRedigereInntekt: true,
        skalPreutfyllesMedBeregningsgrunnlag: false,
      },
      {
        fom: '2018-06-02',
        tom: '2018-10-01',
        skalRedigereInntekt: true,
        skalPreutfyllesMedBeregningsgrunnlag: false,
      },
      {
        fom: '2018-10-02',
        tom: null,
        skalRedigereInntekt: false,
        skalPreutfyllesMedBeregningsgrunnlag: false,
      },

    ];
    const values = {};
    values[getFieldNameKey(0)] = [{ ...andel1, fastsattBelop: '10 000' }, andel2];
    values[getFieldNameKey(1)] = [{ ...andel1 }, { ...andel2 }];

    const perioder = transformPerioder(fordelBGPerioder, values, bgPerioder);
    expect(perioder.length).toBe(2);
    expect(perioder[0].fom).toBe('2018-01-01');
    expect(perioder[0].tom).toBe('2018-06-01');
    expect(perioder[0].andeler.length).toBe(2);

    expect(perioder[0].andeler[0].fastsatteVerdier.fastsattÅrsbeløpInklNaturalytelse).toBe(10000);
    expect(perioder[0].andeler[0].fastsatteVerdier.refusjonPrÅr).toBe(null);
    expect(perioder[0].andeler[0].fastsatteVerdier.inntektskategori).toBe('ARBEIDSTAKER');
    expect(perioder[0].andeler[0].lagtTilAvSaksbehandler).toBe(false);
    expect(perioder[0].andeler[0].nyAndel).toBe(false);
    expect(perioder[0].andeler[0].arbeidsforholdId).toBe(null);

    expect(perioder[0].andeler[1].fastsatteVerdier.fastsattÅrsbeløpInklNaturalytelse).toBe(20000);
    expect(perioder[0].andeler[1].fastsatteVerdier.refusjonPrÅr).toBe(null);
    expect(perioder[0].andeler[1].fastsatteVerdier.inntektskategori).toBe('ARBEIDSTAKER');
    expect(perioder[0].andeler[1].lagtTilAvSaksbehandler).toBe(false);
    expect(perioder[0].andeler[1].nyAndel).toBe(false);
    expect(perioder[0].andeler[1].arbeidsforholdId).toBe('ri4j3f34rt3144');

    expect(perioder[1].fom).toBe('2018-06-02');
    expect(perioder[1].tom).toBe('2018-10-01');
    expect(perioder[1].andeler.length).toBe(2);

    expect(perioder[1].andeler[0].fastsatteVerdier.fastsattÅrsbeløpInklNaturalytelse).toBe(10000);
    expect(perioder[1].andeler[0].fastsatteVerdier.refusjonPrÅr).toBe(null);
    expect(perioder[1].andeler[0].fastsatteVerdier.inntektskategori).toBe('ARBEIDSTAKER');
    expect(perioder[1].andeler[0].lagtTilAvSaksbehandler).toBe(false);
    expect(perioder[1].andeler[0].nyAndel).toBe(false);
    expect(perioder[1].andeler[0].arbeidsforholdId).toBe(null);

    expect(perioder[1].andeler[1].fastsatteVerdier.fastsattÅrsbeløpInklNaturalytelse).toBe(20000);
    expect(perioder[1].andeler[1].fastsatteVerdier.refusjonPrÅr).toBe(null);
    expect(perioder[1].andeler[1].fastsatteVerdier.inntektskategori).toBe('ARBEIDSTAKER');
    expect(perioder[1].andeler[1].lagtTilAvSaksbehandler).toBe(false);
    expect(perioder[1].andeler[1].nyAndel).toBe(false);
    expect(perioder[1].andeler[1].arbeidsforholdId).toBe('ri4j3f34rt3144');
  });

  it('skal transforme perioder for submit når periode er slått sammen og inkluderer siste periode', () => {
    const bgPerioder = [{
      beregningsgrunnlagPeriodeFom: '2018-01-01',
      beregningsgrunnlagPeriodeTom: '2018-06-01',
      periodeAarsaker: [],
    },
    {
      beregningsgrunnlagPeriodeFom: '2018-06-02',
      beregningsgrunnlagPeriodeTom: '2018-10-01',
      periodeAarsaker: [periodeAarsak.ENDRING_I_REFUSJONSKRAV],
    },
    {
      beregningsgrunnlagPeriodeFom: '2018-10-02',
      beregningsgrunnlagPeriodeTom: null,
      periodeAarsaker: [periodeAarsak.NATURALYTELSE_TILKOMMER],
    }];
    const fordelBGPerioder = [
      {
        fom: '2018-01-01',
        tom: '2018-06-01',
        skalRedigereInntekt: false,
        skalPreutfyllesMedBeregningsgrunnlag: false,
      },
      {
        fom: '2018-06-02',
        tom: '2018-10-01',
        skalRedigereInntekt: true,
        skalPreutfyllesMedBeregningsgrunnlag: false,
      },
      {
        fom: '2018-10-02',
        tom: null,
        skalRedigereInntekt: true,
        skalPreutfyllesMedBeregningsgrunnlag: false,
      },

    ];
    const values = {};
    values[getFieldNameKey(0)] = [{ ...andel1 }, { ...andel2 }];
    values[getFieldNameKey(1)] = [{ ...andel1, fastsattBelop: '10 000' }, andel2];

    const perioder = transformPerioder(fordelBGPerioder, values, bgPerioder);

    expect(perioder.length).toBe(2);
    expect(perioder[0].fom).toBe('2018-06-02');
    expect(perioder[0].tom).toBe('2018-10-01');
    expect(perioder[0].andeler.length).toBe(2);

    expect(perioder[0].andeler[0].fastsatteVerdier.fastsattÅrsbeløpInklNaturalytelse).toBe(10000);
    expect(perioder[0].andeler[0].fastsatteVerdier.refusjonPrÅr).toBe(null);
    expect(perioder[0].andeler[0].fastsatteVerdier.inntektskategori).toBe('ARBEIDSTAKER');
    expect(perioder[0].andeler[0].lagtTilAvSaksbehandler).toBe(false);
    expect(perioder[0].andeler[0].nyAndel).toBe(false);
    expect(perioder[0].andeler[0].arbeidsforholdId).toBe(null);

    expect(perioder[0].andeler[1].fastsatteVerdier.fastsattÅrsbeløpInklNaturalytelse).toBe(20000);
    expect(perioder[0].andeler[1].fastsatteVerdier.refusjonPrÅr).toBe(null);
    expect(perioder[0].andeler[1].fastsatteVerdier.inntektskategori).toBe('ARBEIDSTAKER');
    expect(perioder[0].andeler[1].lagtTilAvSaksbehandler).toBe(false);
    expect(perioder[0].andeler[1].nyAndel).toBe(false);
    expect(perioder[0].andeler[1].arbeidsforholdId).toBe('ri4j3f34rt3144');

    expect(perioder[1].fom).toBe('2018-10-02');
    expect(perioder[1].tom).toBe(null);
    expect(perioder[1].andeler.length).toBe(2);

    expect(perioder[1].andeler[0].fastsatteVerdier.fastsattÅrsbeløpInklNaturalytelse).toBe(10000);
    expect(perioder[1].andeler[0].fastsatteVerdier.refusjonPrÅr).toBe(null);
    expect(perioder[1].andeler[0].fastsatteVerdier.inntektskategori).toBe('ARBEIDSTAKER');
    expect(perioder[1].andeler[0].lagtTilAvSaksbehandler).toBe(false);
    expect(perioder[1].andeler[0].nyAndel).toBe(false);
    expect(perioder[1].andeler[0].arbeidsforholdId).toBe(null);

    expect(perioder[1].andeler[1].fastsatteVerdier.fastsattÅrsbeløpInklNaturalytelse).toBe(20000);
    expect(perioder[1].andeler[1].fastsatteVerdier.refusjonPrÅr).toBe(null);
    expect(perioder[1].andeler[1].fastsatteVerdier.inntektskategori).toBe('ARBEIDSTAKER');
    expect(perioder[1].andeler[1].lagtTilAvSaksbehandler).toBe(false);
    expect(perioder[1].andeler[1].nyAndel).toBe(false);
    expect(perioder[1].andeler[1].arbeidsforholdId).toBe('ri4j3f34rt3144');
  });

  it('skal transforme perioder for submit når 2 perioder i midten er slått sammen, totalt 4 perioder', () => {
    const bgPerioder = [{
      beregningsgrunnlagPeriodeFom: '2018-01-01',
      beregningsgrunnlagPeriodeTom: '2018-06-01',
      periodeAarsaker: [],
    },
    {
      beregningsgrunnlagPeriodeFom: '2018-06-02',
      beregningsgrunnlagPeriodeTom: '2018-10-01',
      periodeAarsaker: [periodeAarsak.ENDRING_I_REFUSJONSKRAV],
    },
    {
      beregningsgrunnlagPeriodeFom: '2018-10-02',
      beregningsgrunnlagPeriodeTom: '2018-11-01',
      periodeAarsaker: [periodeAarsak.NATURALYTELSE_TILKOMMER],
    },
    {
      beregningsgrunnlagPeriodeFom: '2018-11-02',
      beregningsgrunnlagPeriodeTom: null,
      periodeAarsaker: [periodeAarsak.REFUSJON_OPPHOERER],
    }];
    const fordelBGPerioder = [
      {
        fom: '2018-01-01',
        tom: '2018-06-01',
        skalRedigereInntekt: false,
        skalPreutfyllesMedBeregningsgrunnlag: false,
      },
      {
        fom: '2018-06-02',
        tom: '2018-10-01',
        skalRedigereInntekt: true,
        skalPreutfyllesMedBeregningsgrunnlag: false,
      },
      {
        fom: '2018-10-02',
        tom: '2018-11-01',
        skalRedigereInntekt: true,
        skalPreutfyllesMedBeregningsgrunnlag: false,
      },
      {
        fom: '2018-11-02',
        tom: null,
        skalRedigereInntekt: false,
        skalPreutfyllesMedBeregningsgrunnlag: false,
      },
    ];
    const values = {};
    values[getFieldNameKey(0)] = [{ ...andel1 }, { ...andel2 }];
    values[getFieldNameKey(1)] = [{ ...andel1, fastsattBelop: '10 000' }, andel2];

    const perioder = transformPerioder(fordelBGPerioder, values, bgPerioder);

    expect(perioder.length).toBe(2);
    expect(perioder[0].fom).toBe('2018-06-02');
    expect(perioder[0].tom).toBe('2018-10-01');
    expect(perioder[0].andeler.length).toBe(2);

    expect(perioder[0].andeler[0].fastsatteVerdier.fastsattÅrsbeløpInklNaturalytelse).toBe(10000);
    expect(perioder[0].andeler[0].fastsatteVerdier.refusjonPrÅr).toBe(null);
    expect(perioder[0].andeler[0].fastsatteVerdier.inntektskategori).toBe('ARBEIDSTAKER');
    expect(perioder[0].andeler[0].lagtTilAvSaksbehandler).toBe(false);
    expect(perioder[0].andeler[0].nyAndel).toBe(false);
    expect(perioder[0].andeler[0].arbeidsforholdId).toBe(null);

    expect(perioder[0].andeler[1].fastsatteVerdier.fastsattÅrsbeløpInklNaturalytelse).toBe(20000);
    expect(perioder[0].andeler[1].fastsatteVerdier.refusjonPrÅr).toBe(null);
    expect(perioder[0].andeler[1].fastsatteVerdier.inntektskategori).toBe('ARBEIDSTAKER');
    expect(perioder[0].andeler[1].lagtTilAvSaksbehandler).toBe(false);
    expect(perioder[0].andeler[1].nyAndel).toBe(false);
    expect(perioder[0].andeler[1].arbeidsforholdId).toBe('ri4j3f34rt3144');

    expect(perioder[1].fom).toBe('2018-10-02');
    expect(perioder[1].tom).toBe('2018-11-01');
    expect(perioder[1].andeler.length).toBe(2);

    expect(perioder[1].andeler[0].fastsatteVerdier.fastsattÅrsbeløpInklNaturalytelse).toBe(10000);
    expect(perioder[1].andeler[0].fastsatteVerdier.refusjonPrÅr).toBe(null);
    expect(perioder[1].andeler[0].fastsatteVerdier.inntektskategori).toBe('ARBEIDSTAKER');
    expect(perioder[1].andeler[0].lagtTilAvSaksbehandler).toBe(false);
    expect(perioder[1].andeler[0].nyAndel).toBe(false);
    expect(perioder[1].andeler[0].arbeidsforholdId).toBe(null);

    expect(perioder[1].andeler[1].fastsatteVerdier.fastsattÅrsbeløpInklNaturalytelse).toBe(20000);
    expect(perioder[1].andeler[1].fastsatteVerdier.refusjonPrÅr).toBe(null);
    expect(perioder[1].andeler[1].fastsatteVerdier.inntektskategori).toBe('ARBEIDSTAKER');
    expect(perioder[1].andeler[1].lagtTilAvSaksbehandler).toBe(false);
    expect(perioder[1].andeler[1].nyAndel).toBe(false);
    expect(perioder[1].andeler[1].arbeidsforholdId).toBe('ri4j3f34rt3144');
  });
});
