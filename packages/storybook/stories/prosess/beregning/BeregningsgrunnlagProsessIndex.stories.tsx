import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import BeregningsgrunnlagProsessIndex from '@fpsak-frontend/prosess-beregningsgrunnlag';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import periodeAarsak from '@fpsak-frontend/kodeverk/src/periodeAarsak';
import sammenligningType from '@fpsak-frontend/kodeverk/src/sammenligningType';

import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import Behandling from '@fpsak-frontend/types/src/behandlingTsType';

import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import {
  Kodeverk, Vilkar, BeregningsgrunnlagPeriodeProp, SammenligningsgrunlagProp, BeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
} from '@fpsak-frontend/types';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import inntektAktivitetType from '@fpsak-frontend/kodeverk/src/inntektAktivitetType';
import alleKodeverk from '../../mocks/alleKodeverk.json';

const standardFom = '2019-09-16';
const standardTom = undefined;

type Writeable<T> = { -readonly [P in keyof T]: T[P] };
type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;
const lagPGIVerdier = () => ([
  {
    beløp: 124412,
    årstall: 2017,
  },
  {
    beløp: 98456,
    årstall: 2016,
  },
  {
    beløp: 9861482,
    årstall: 2015,
  },
]);
const lagAPMedKode = (kode: string): DeepWriteable<Aksjonspunkt> => ({
  definisjon: {
    kode,
    kodeverk: 'test',
  },
  status: {
    kode: 'OPPR',
    kodeverk: 'test',
  },
  begrunnelse: 'Dette er en begrunnelse',
  kanLoses: true,
  erAktivt: true,
  endretAv: 'B123456',
  endretTidspunkt: '2020-01-20',
});

const vilkarMedUtfall = (kode: string): Vilkar[] => [{
  vilkarType: {
    kode: vilkarType.BEREGNINGSGRUNNLAGVILKARET,
    kodeverk: 'vilkarType',
  },
  vilkarStatus: {
    kode,
    kodeverk: 'vilkarStatus',
  },
} as Vilkar];

const arbeidsgiverOpplysninger = {
  910909088: {
    identifikator: '910909088',
    navn: 'BEDRIFT AS',
    erPrivatPerson: false,
  },
};

const lagArbeidsforhold = (
  arbeidsgiverIdent: string,
  arbeidsforholdId: string,
  eksternArbeidsforholdId?: string,
  opphoersdato?: string,
  navn?: string,
  prosent?: number,
): BeregningsgrunnlagArbeidsforhold => ({
  arbeidsgiverIdent,
  startdato: '2018-10-09',
  opphoersdato,
  arbeidsforholdId,
  eksternArbeidsforholdId,
  arbeidsforholdType: {
    kode: 'ARBEID',
    kodeverk: 'OPPTJENING_AKTIVITET_TYPE',
  },
  refusjonPrAar: 360000,
  belopFraInntektsmeldingPrMnd: 30000,
  organisasjonstype: {
    kode: 'VIRKSOMHET',
    kodeverk: 'ORGANISASJONSTYPE',
  },
  stillingsProsent: prosent,
  stillingsNavn: navn,
});

const lagAndel = (
  aktivitetstatuskode: string,
  beregnetPrAar: number,
  erTidsbegrensetArbeidsforhold?: boolean,
  skalFastsetteGrunnlag = false,
  overstyrtPrAar?: number,
): DeepWriteable<BeregningsgrunnlagAndel> => ({
  aktivitetStatus: {
    kode: aktivitetstatuskode,
    kodeverk: 'AKTIVITET_STATUS',
  },
  beregningsperiodeFom: '2019-06-01',
  beregningsperiodeTom: '2019-08-31',
  beregnetPrAar,
  overstyrtPrAar,
  bruttoPrAar: overstyrtPrAar || beregnetPrAar,
  avkortetPrAar: 360000,
  redusertPrAar: 599000,
  erTidsbegrensetArbeidsforhold,
  skalFastsetteGrunnlag,
  andelsnr: 1,
  arbeidsforhold: {
    arbeidsgiverIdent: '910909088',
    startdato: '2018-10-09',
    arbeidsforholdId: '2a3c0f5c-3d70-447a-b0d7-cd242d5155bb',
    arbeidsforholdType: {
      kode: 'ARBEID',
      kodeverk: 'OPPTJENING_AKTIVITET_TYPE',
    },
    refusjonPrAar: 360000,
    belopFraInntektsmeldingPrMnd: 30000,
    organisasjonstype: {
      kode: 'VIRKSOMHET',
      kodeverk: 'ORGANISASJONSTYPE',
    },
  },
  lagtTilAvSaksbehandler: false,
  erTilkommetAndel: false,
});

const lagPeriode = (
  andelsliste: BeregningsgrunnlagAndel[],
  periodeAarsaker: Kodeverk[],
  fom: string,
  tom?: string,
  dagsats?: number,
): DeepWriteable<BeregningsgrunnlagPeriodeProp> => ({
  beregningsgrunnlagPeriodeFom: fom,
  beregningsgrunnlagPeriodeTom: tom,
  beregnetPrAar: 360000,
  bruttoPrAar: 360000,
  bruttoInkludertBortfaltNaturalytelsePrAar: 360000,
  avkortetPrAar: 360000,
  redusertPrAar: 360000,
  periodeAarsaker,
  dagsats,
  beregningsgrunnlagPrStatusOgAndel: andelsliste,
});

const lagSammenligningsGrunnlag = (
  kode: string,
  rapportertPrAar: number,
  avvikProsent: number,
  differanse: number,
): SammenligningsgrunlagProp => ({
  sammenligningsgrunnlagFom: '2018-09-01',
  sammenligningsgrunnlagTom: '2019-10-31',
  rapportertPrAar,
  avvikPromille: avvikProsent ? avvikProsent * 10 : 0,
  avvikProsent,
  sammenligningsgrunnlagType: {
    kode,
    kodeverk: 'test',
  },
  differanseBeregnet: differanse,
});

const lagPeriodeMedDagsats = (
  andelsliste: BeregningsgrunnlagAndel[],
  dagsats?: number,
): Writeable<BeregningsgrunnlagPeriodeProp> => lagPeriode(andelsliste, [], standardFom, undefined, dagsats);

const lagStandardPeriode = (andelsliste: BeregningsgrunnlagAndel[]) => lagPeriode(andelsliste, [], standardFom, standardTom);

const lagTidsbegrensetPeriode = (
  andelsliste: BeregningsgrunnlagAndel[],
  fom: string,
  tom: string,
): Writeable<BeregningsgrunnlagPeriodeProp> => lagPeriode(andelsliste, [{ kode: periodeAarsak.ARBEIDSFORHOLD_AVSLUTTET, kodeverk: '' }], fom, tom);

const lagStatus = (kode: string): Kodeverk => ({
  kode,
  kodeverk: 'AKTIVITET_STATUS',
});

type Inntekt = {
  inntektAktivitetType: Kodeverk,
  beløp: number;
}

type InntektOgPeriode = {
  fom: string;
  tom: string;
  inntekter: Inntekt[];
}

const inntektsgrunnlag = {
  måneder: [] as InntektOgPeriode[],
};

const lagATInntektsgrunnlag = (inntekt: number): Inntekt => ({
  inntektAktivitetType: {
    kode: inntektAktivitetType.ARBEID,
    kodeverk: 'INNTEKT_AKTIVITET_TYPE',
  },
  beløp: inntekt,
});

const lagYtelseInntektsgrunnlag = (inntekt: number): Inntekt => ({
  inntektAktivitetType: {
    kode: inntektAktivitetType.YTELSE,
    kodeverk: 'INNTEKT_AKTIVITET_TYPE',
  },
  beløp: inntekt,
});

const lagFLInntektsgrunnlag = (inntekt: number): Inntekt => ({
  inntektAktivitetType: {
    kode: inntektAktivitetType.FRILANS,
    kodeverk: 'INNTEKT_AKTIVITET_TYPE',
  },
  beløp: inntekt,
});

const lagMånedInntekt = (fom: string, tom: string, inntekter: Inntekt[]) => {
  const obj = {
    fom,
    tom,
    inntekter,
  };
  inntektsgrunnlag.måneder.push(obj);
};

const lagKunATInntektsgrunnlag = () => {
  lagMånedInntekt('2020-01-01', '2020-01-31', [lagATInntektsgrunnlag(35000), lagYtelseInntektsgrunnlag(4000), lagFLInntektsgrunnlag(0)]);
  lagMånedInntekt('2020-02-01', '2020-02-28', [lagATInntektsgrunnlag(70000), lagYtelseInntektsgrunnlag(6000), lagFLInntektsgrunnlag(5000)]);
  lagMånedInntekt('2020-03-01', '2020-03-31', [lagATInntektsgrunnlag(40000), lagYtelseInntektsgrunnlag(7000), lagFLInntektsgrunnlag(12000)]);
  lagMånedInntekt('2020-04-01', '2020-04-30', [lagATInntektsgrunnlag(50000), lagYtelseInntektsgrunnlag(20000), lagFLInntektsgrunnlag(45000)]);
  lagMånedInntekt('2020-05-01', '2020-05-31', [lagATInntektsgrunnlag(37000), lagYtelseInntektsgrunnlag(10000), lagFLInntektsgrunnlag(30000)]);
  lagMånedInntekt('2020-06-01', '2020-06-30', [lagATInntektsgrunnlag(45000), lagYtelseInntektsgrunnlag(5000), lagFLInntektsgrunnlag(20000)]);
  lagMånedInntekt('2020-07-01', '2020-07-31', [lagATInntektsgrunnlag(25000), lagYtelseInntektsgrunnlag(3000), lagFLInntektsgrunnlag(25000)]);
  lagMånedInntekt('2020-08-01', '2020-08-31', [lagATInntektsgrunnlag(33000), lagYtelseInntektsgrunnlag(7000), lagFLInntektsgrunnlag(0)]);
  lagMånedInntekt('2020-09-01', '2020-09-30', [lagATInntektsgrunnlag(25000), lagYtelseInntektsgrunnlag(6000), lagFLInntektsgrunnlag(33000)]);
  lagMånedInntekt('2020-10-01', '2020-10-31', [lagATInntektsgrunnlag(8000), lagYtelseInntektsgrunnlag(20000), lagFLInntektsgrunnlag(1000)]);
  lagMånedInntekt('2020-11-01', '2020-11-30', [lagATInntektsgrunnlag(54000), lagYtelseInntektsgrunnlag(1000), lagFLInntektsgrunnlag(25000)]);
  lagMånedInntekt('2020-12-01', '2020-12-31', [lagATInntektsgrunnlag(47000), lagYtelseInntektsgrunnlag(0), lagFLInntektsgrunnlag(10000)]);
};

const lagBG = (
  perioder: BeregningsgrunnlagPeriodeProp[],
  statuser: Kodeverk[],
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[],
): DeepWriteable<Beregningsgrunnlag> => {
  const beregningsgrunnlag = {
    skjaeringstidspunktBeregning: '2019-09-16',
    aktivitetStatus: statuser,
    beregningsgrunnlagPeriode: perioder,
    dekningsgrad: 80,
    grunnbeløp: 99858,
    sammenligningsgrunnlagPrStatus,
    ledetekstBrutto: 'Brutto beregningsgrunnlag',
    ledetekstAvkortet: 'Avkortet beregningsgrunnlag (6G=599148)',
    ledetekstRedusert: 'Redusert beregningsgrunnlag (100%)',
    halvG: 49929,
    faktaOmBeregning: {
      andelerForFaktaOmBeregning: [],
    },
    hjemmel: {
      kode: 'F_14_7_8_30',
      kodeverk: 'BG_HJEMMEL',
    },
    årsinntektVisningstall: 360000,
    inntektsgrunnlag,
  };
  return beregningsgrunnlag;
};

export default {
  title: 'prosess/prosess-beregningsgrunnlag',
  component: BeregningsgrunnlagProsessIndex,
  decorators: [withKnobs],
};

export const arbeidstakerUtenAvvik = () => {
  const andeler = [lagAndel('AT', 450000, false, false)];
  const perioder = [lagPeriodeMedDagsats(andeler, 1384.6153)];
  const statuser = [lagStatus('AT')];
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 330257, 6.2, -30257)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg as Beregningsgrunnlag)}
      aksjonspunkter={object('aksjonspunkter', [])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};

export const brukersAndelUtenAvvik = () => {
  const andeler = [
    lagAndel('BA', 34230, false, false),
    lagAndel('AT', 534230, false, false),
  ];
  const perioder = [lagPeriodeMedDagsats(andeler, 2340)];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = 564000;
  delete perioder[0].redusertPrAar;
  delete perioder[0].avkortetPrAar;

  const statuser = [lagStatus('BA'), lagStatus('AT')];
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 474257, 26.2, -67059)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 80;
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg as Beregningsgrunnlag)}
      aksjonspunkter={object('aksjonspunkter', [])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};

export const arbeidstakerMedAvvik = () => {
  lagKunATInntektsgrunnlag();
  const andeler = [lagAndel('AT', 300000, false, false)];
  andeler[0].skalFastsetteGrunnlag = true;
  const perioder = [lagStandardPeriode(andeler)];
  const statuser = [lagStatus('AT')];
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 465000, 35.48, -165000)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.skjaeringstidspunktBeregning = '2021-01-01';
  const ap = lagAPMedKode(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS);
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling) as Behandling}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', true)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};

export const arbeidstakerFrilansMedAvvikMedGradering = () => {
  const andeler = [
    lagAndel('AT', 551316, false, false),
    lagAndel('FL', 596000, false, false),
  ];
  andeler[0].skalFastsetteGrunnlag = true;
  andeler[1].skalFastsetteGrunnlag = false;
  const perioder = [lagStandardPeriode(andeler)];
  const statuser = [lagStatus('AT'), lagStatus('FL')];
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.AT, 140000, 0, 77000),
    lagSammenligningsGrunnlag(sammenligningType.FL, 180000, 16.242342, 11000),
  ];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.andelerMedGraderingUtenBG = andeler;
  const ap = lagAPMedKode(aksjonspunktCodes.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG);
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};

export const militær = () => {
  const andeler = [
    lagAndel('AT', 110232, false, false),
    lagAndel('MS', 300000, false, false)];
  const perioder = [lagPeriodeMedDagsats(andeler, 1234)];
  const statuser = [lagStatus('AT'), lagStatus('MS')];
  const bg = lagBG(perioder, statuser);
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};

export const selvstendigNæringsdrivende = () => {
  const andeler = [lagAndel('SN', 300000, false, true)];
  const perioder = [lagPeriodeMedDagsats(andeler)];
  const statuser = [lagStatus('SN')];
  const pgi = lagPGIVerdier();
  andeler[0].pgiVerdier = pgi;
  andeler[0].pgiSnitt = 154985;
  andeler[0].erNyIArbeidslivet = false;

  const næringer = [
    {
      begrunnelse: 'Jeg utvidet virksomheten fra en ren frisørsalong til også å tilby hudpleie. '
        + 'Jeg jobbet opprinnelig alene men har ansatt to stykker i løpet av det siste året',
      endringsdato: '2016-05-01',
      erNyoppstartet: false,
      erVarigEndret: true,
      kanRegnskapsførerKontaktes: true,
      oppgittInntekt: 474257,
      oppstartsdato: '2015-11-01',
      orgnr: '910909088',
      regnskapsførerNavn: 'Regnskapsfører Regn S. Fører',
      regnskapsførerTlf: '99999999',
      utenlandskvirksomhetsnavn: undefined,
      virksomhetType: { kode: 'ANNEN', kodeverk: 'VIRKSOMHET_TYPE' },
    },
    {
      begrunnelse: 'Endringsbeskrivelse',
      endringsdato: '2019-11-22',
      erNyoppstartet: false,
      erVarigEndret: false,
      kanRegnskapsførerKontaktes: false,
      oppgittInntekt: undefined,
      oppstartsdato: '2015-11-01',
      opphoersdato: '201-03-01',
      orgnr: '910909077',
      utenlandskvirksomhetsnavn: undefined,
      virksomhetType: { kode: 'JORDBRUK_SKOGBRUK', kodeverk: 'VIRKSOMHET_TYPE' },
      virksomhetNavn: 'Berit Jensen',
    },
  ];
  andeler[0].næringer = næringer;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 474257, 26.21243, -177059)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);

  const ap = lagAPMedKode(aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};

export const tidsbegrensetArbeidsforholdMedAvvik = () => {
  const andeler = [
    lagAndel('AT', 300000, false, true),
    lagAndel('AT', 132250, true, true),
    lagAndel('AT', 140250, true, true),
    lagAndel('FL', 133250)];
  const nyArbeidsgiverOpplysningerPerId = {
    ...arbeidsgiverOpplysninger,
    987654321: {
      identifikator: '987654321',
      navn: 'Andeby bank',
      erPrivatPerson: false,
    },
    9478541223: {
      identifikator: '9478541223',
      navn: 'Gardslien transport og Gardiner AS',
      erPrivatPerson: false,
    },
    93178545: {
      identifikator: '93178545',
      navn: 'Svaneby sykehjem',
      erPrivatPerson: false,
    },
  };

  andeler[0].arbeidsforhold = lagArbeidsforhold('987654321', 'sdefsef-swdefsdf-sdf-sdfdsf-ddsdf', '100');
  andeler[1].arbeidsforhold = lagArbeidsforhold('9478541223', 'sdefsef-swdefsdf-sdf-sdfdsf-98das',
    '200',
    '2019-11-11',
    'Butikkmedarbeider',
    60);
  andeler[2].arbeidsforhold = lagArbeidsforhold('93178545', 'sdefsef-swdefsdf-sdf-sdfdsf-dfaf845', '300');
  const perioder = [lagPeriode(andeler, [], '2019-09-16', '2019-09-29'),
    lagTidsbegrensetPeriode(andeler, '2019-09-30', '2019-10-15'),
    lagPeriode(andeler, [{ kode: periodeAarsak.ARBEIDSFORHOLD_AVSLUTTET, kodeverk: '' }], '2019-10-15')];
  const statuser = [lagStatus('AT_FL')];
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 474257, 26.2, 77059)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  const ap = lagAPMedKode(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD);
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={nyArbeidsgiverOpplysningerPerId}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};

export const arbeidstakerFrilanserOgSelvstendigNæringsdrivende = () => {
  const andeler = [
    lagAndel('SN', 300000, false, true),
    lagAndel('AT', 130250),
    lagAndel('FL', 230250)];
  const pgi = lagPGIVerdier();
  andeler[0].pgiVerdier = pgi;
  andeler[0].pgiSnitt = 154985;
  const perioder = [lagStandardPeriode(andeler)];
  const statuser = [lagStatus('AT_FL_SN')];
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 474257, 26.2, 77059)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  const ap = lagAPMedKode(aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};

export const naturalYtelse = () => {
  const andel1MedFrafall = lagAndel('AT', 240000);
  const andel1MedMerFrafall = lagAndel('AT', 240000);
  const andel2UtenFrafall = lagAndel('AT', 740000, undefined, false, 744000);
  const andel2MedFrafall = lagAndel('AT', 740000, undefined, false, 744000);
  const andel3UtenFrafall = lagAndel('AT', 750000, undefined, false, 755000);
  const andel3MedFrafall = lagAndel('AT', 750000, undefined, false, 755000);
  const nyArbeidsgiverOpplysningerPerId = {
    ...arbeidsgiverOpplysninger,
    987654321: {
      identifikator: '9109090881',
      navn: 'BEDRIFT AS 1',
      erPrivatPerson: false,
    },
    9478541223: {
      identifikator: '9109090882',
      navn: 'BEDRIFT AS 2',
      erPrivatPerson: false,
    },
    93178545: {
      identifikator: '9109090883',
      navn: 'BEDRIFT AS 3',
      erPrivatPerson: false,
    },
  };

  if (andel1MedFrafall.arbeidsforhold && andel1MedMerFrafall.arbeidsforhold) {
    andel1MedFrafall.arbeidsforhold.arbeidsgiverIdent = '9109090881';
    andel1MedFrafall.arbeidsforhold.naturalytelseBortfaltPrÅr = 1231;
    andel1MedMerFrafall.arbeidsforhold.arbeidsgiverIdent = '9109090881';
    andel1MedMerFrafall.arbeidsforhold.naturalytelseBortfaltPrÅr = 5000;
  }
  if (andel2UtenFrafall.arbeidsforhold && andel2MedFrafall.arbeidsforhold) {
    andel2UtenFrafall.arbeidsforhold.arbeidsgiverIdent = '9109090882';
    andel2UtenFrafall.arbeidsforhold.naturalytelseBortfaltPrÅr = undefined;
    andel2MedFrafall.arbeidsforhold.arbeidsgiverIdent = '9109090882';
    andel2MedFrafall.arbeidsforhold.naturalytelseBortfaltPrÅr = 2321;
  }
  if (andel3UtenFrafall.arbeidsforhold && andel3MedFrafall.arbeidsforhold) {
    andel3UtenFrafall.arbeidsforhold.arbeidsgiverIdent = '9109090883';
    andel3UtenFrafall.arbeidsforhold.naturalytelseBortfaltPrÅr = undefined;
    andel3MedFrafall.arbeidsforhold.arbeidsgiverIdent = '9109090883';
    andel3MedFrafall.arbeidsforhold.naturalytelseBortfaltPrÅr = 3231;
  }
  const statuser = [lagStatus('AT')];
  const periode1 = lagPeriode([{ ...andel1MedFrafall }, { ...andel2UtenFrafall }, { ...andel3UtenFrafall }],
    [{ kode: periodeAarsak.NATURALYTELSE_BORTFALT, kodeverk: '' }],
    '2019-03-21',
    '2019-05-31',
    4432);
  const periode2 = lagPeriode([{ ...andel1MedFrafall }, { ...andel2MedFrafall }, { ...andel3UtenFrafall }],
    [{ kode: periodeAarsak.NATURALYTELSE_BORTFALT, kodeverk: '' }],
    '2019-06-01',
    '2019-07-30',
    2432);
  const periode3 = lagPeriode([{ ...andel1MedFrafall }, { ...andel2MedFrafall }, { ...andel3MedFrafall }],
    [{ kode: periodeAarsak.NATURALYTELSE_BORTFALT, kodeverk: '' }],
    '2019-08-01',
    '2019-09-30',
    3432);
  const periode4 = lagPeriode([{ ...andel1MedMerFrafall }, { ...andel2MedFrafall }, { ...andel3MedFrafall }],
    [{ kode: periodeAarsak.NATURALYTELSE_BORTFALT, kodeverk: '' }],
    '2019-10-01',
    '9999-12-31',
    3432);

  const perioder = [
    periode1,
    periode2,
    periode3,
    periode4,
  ];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = 432000;
  perioder[0].redusertPrAar = 399148;
  perioder[1].bruttoInkludertBortfaltNaturalytelsePrAar = 732000;
  perioder[1].redusertPrAar = 499148;
  perioder[1].avkortetPrAar = 599148;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 474257, 26.2, -79059)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 80;
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={nyArbeidsgiverOpplysningerPerId}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};

export const arbeidstakerDagpengerOgSelvstendigNæringsdrivende = () => {
  const andeler = [
    lagAndel('AT', 596000),
    lagAndel('DP', 331000),
    lagAndel('SN', 331000),
  ];
  const pgi = lagPGIVerdier();
  andeler[2].pgiVerdier = pgi;
  andeler[2].pgiSnitt = 154985;
  const statuser = [lagStatus('AT_SN'), lagStatus('DP')];
  const perioder = [lagPeriodeMedDagsats(andeler, 923)];
  const bg = lagBG(perioder, statuser);
  bg.dekningsgrad = 80;
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};

export const graderingPåBeregningsgrunnlagUtenPenger = () => {
  const andeler = [
    lagAndel('SN', 300000),
    lagAndel('AT', 137250),
    lagAndel('FL', 130250)];
  const pgi = lagPGIVerdier();
  andeler[0].pgiVerdier = pgi;
  andeler[0].pgiSnitt = 654985;
  // const perioder = [lagStandardPeriode(andeler)];
  const perioder = [lagPeriodeMedDagsats(andeler, 12345)];
  const statuser = [lagStatus('AT_FL_SN')];
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 474257, 26.2, -77059)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.andelerMedGraderingUtenBG = andeler;
  const ap = lagAPMedKode(aksjonspunktCodes.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG);
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const arbeidstakerOgSelvstendigNæringsdrivendeUtenAkjsonspunkt = () => {
  const andeler = [
    lagAndel('SN', 328105),
    lagAndel('AT', 72194),
  ];
  const pgi = lagPGIVerdier();
  andeler[0].pgiVerdier = pgi;
  andeler[0].pgiSnitt = 400299;

  const perioder = [lagPeriodeMedDagsats(andeler, andeler[0].pgiSnitt / 260)];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = andeler[0].pgiSnitt;

  const statuser = [lagStatus('AT_SN')];
  const næringer = [{
    begrunnelse: 'Endringsbeskrivelse',
    endringsdato: '2019-11-22',
    erNyIArbeidslivet: false,
    erNyoppstartet: false,
    erVarigEndret: false,
    kanRegnskapsførerKontaktes: false,
    oppgittInntekt: 1500000,
    oppstartsdato: undefined,
    orgnr: '910909088',
    regnskapsførerNavn: 'Regnar Regnskap',
    regnskapsførerTlf: '99999999',
    utenlandskvirksomhetsnavn: undefined,
    virksomhetType: { kode: 'ANNEN', kodeverk: 'VIRKSOMHET_TYPE' },
    kode: 'ANNEN',
    kodeverk: 'VIRKSOMHET_TYPE',
  }];
  andeler[0].næringer = næringer;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 474257, 26.2, -77059)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 100;
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};

export const arbeidstakerOgFrilansOgSelvstendigNæringsdrivendeMedAksjonspunktBehandlet = () => {
  const andeler = [
    lagAndel('SN', 331000, undefined, true),
    lagAndel('AT', 355000),
    lagAndel('FL', 311000),
  ];
  const pgi = lagPGIVerdier();
  andeler[0].pgiVerdier = pgi;
  andeler[0].pgiSnitt = 654985;
  // const perioder = [lagStandardPeriode(andeler)];
  const perioder = [lagPeriodeMedDagsats(andeler, 1844)];
  perioder[0].avkortetPrAar = 599148;
  perioder[0].redusertPrAar = 379318;
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = 1347316;

  const statuser = [lagStatus('AT_FL_SN')];
  const næringer = [{
    begrunnelse: 'Endringsbeskrivelse',
    endringsdato: '2019-11-22',
    erNyIArbeidslivet: false,
    erNyoppstartet: true,
    erVarigEndret: true,
    kanRegnskapsførerKontaktes: false,
    oppgittInntekt: 1500000,
    oppstartsdato: undefined,
    orgnr: '910909088',
    regnskapsførerNavn: 'Regnar Regnskap',
    regnskapsførerTlf: '99999999',
    utenlandskvirksomhetsnavn: undefined,
    virksomhetType: { kode: 'ANNEN', kodeverk: 'VIRKSOMHET_TYPE' },
    kode: 'ANNEN',
    kodeverk: 'VIRKSOMHET_TYPE',
  }];
  andeler[0].næringer = næringer;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 474257, 26.2, -77059)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 80;
  const ap = lagAPMedKode(aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};

export const arbeidstakerDagpengerOgSelvstendigNæringsdrivendeUtenAksjonspunkt = () => {
  const andeler = [
    lagAndel('SN', 107232),
    lagAndel('DP', 143000),
    lagAndel('FL', 343000),
  ];

  const perioder = [lagPeriodeMedDagsats(andeler, 1844)];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = 450326;
  perioder[0].avkortetPrAar = 599148;
  const pgi = lagPGIVerdier();
  andeler[0].pgiVerdier = pgi;
  andeler[0].pgiSnitt = 754985;
  const statuser = [lagStatus('FL_SN'), lagStatus('DP')];
  const næringer = [{
    begrunnelse: 'Endringsbeskrivelse',
    endringsdato: '2019-11-22',
    erNyIArbeidslivet: false,
    erNyoppstartet: true,
    erVarigEndret: true,
    kanRegnskapsførerKontaktes: false,
    oppgittInntekt: 1500000,
    oppstartsdato: undefined,
    orgnr: '910909088',
    regnskapsførerNavn: 'Regnar Regnskap',
    regnskapsførerTlf: '99999999',
    utenlandskvirksomhetsnavn: undefined,
    virksomhetType: { kode: 'DAGMAMMA', kodeverk: 'VIRKSOMHET_TYPE' },
    kode: 'ANNEN',
    kodeverk: 'VIRKSOMHET_TYPE',
  }];
  andeler[0].næringer = næringer;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 474257, 26.2, -77059)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 100;
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.IKKE_OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};

export const arbeidstakerMed3Arbeidsforhold2ISammeOrganisasjonSide3 = () => {
  const andeler = [
    lagAndel('AT', 395232, false, false),
    lagAndel('AT', 78000, false, false),
    lagAndel('AT', 88084, false, false),
  ];
  const nyArbeidsgiverOpplysningerPerId = {
    ...arbeidsgiverOpplysninger,
    9478541223: {
      identifikator: '9478541223',
      navn: 'Gardslien transport og Gardiner',
      erPrivatPerson: false,
    },
    9478541255: {
      identifikator: '9478541255',
      navn: 'Aldersheimen Omsorg',
      erPrivatPerson: false,
    },
  };
  andeler[0].arbeidsforhold = lagArbeidsforhold('9478541223', 'sdefsef-swdefsdf-sdf-sdfdsf-98das');
  andeler[1].arbeidsforhold = lagArbeidsforhold('9478541255', 'sdefsef-swdefsdf-sdf-sdfdsf-98das', '100', undefined, 'Assistent', 30);
  andeler[2].arbeidsforhold = lagArbeidsforhold('9478541255',
    'sdefsef-swdefsdf-sdf-sdfdsf-dfaf845',
    '200',
    '2019-11-11',
    'Assistent',
    17.5);
  const perioder = [lagPeriodeMedDagsats(andeler, 1696)];
  perioder[0].redusertPrAar = 441053;
  const statuser = [lagStatus('AT')];
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 474257, 16.2, 77059)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={nyArbeidsgiverOpplysningerPerId}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};

export const arbeidstakerAvslagHalvGSide4 = () => {
  const andeler = [
    lagAndel('AT', 32232, false, false),
  ];
  const nyArbeidsgiverOpplysningerPerId = {
    ...arbeidsgiverOpplysninger,
    123456789: {
      identifikator: '123456789',
      navn: 'Gardslien transport og Gardiner',
      erPrivatPerson: false,
    },
  };
  andeler[0].arbeidsforhold = lagArbeidsforhold('123456789',
    'sdefsef-swdefsdf-sdf-sdfdsf-98das',
    '324243533',
    '',
    'Butikkkmedarbeider',
    75);
  const perioder = [lagPeriodeMedDagsats(andeler, 1844)];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = 450326;
  const statuser = [lagStatus('AT')];

  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, -42673, 26.2, -7131)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 100;
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.IKKE_OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={nyArbeidsgiverOpplysningerPerId}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};

export const arbeidstakerMedAksjonspunktSide5 = () => {
  const andeler = [lagAndel('AT', 348576, false, true)];
  andeler[0].arbeidsforhold = lagArbeidsforhold('123456789',
    'sdefsef-swdefsdf-sdf-sdfdsf-98das',
    undefined,
    undefined,
    'Fabrikkmedarbeider',
    75);
  const nyArbeidsgiverOpplysningerPerId = {
    ...arbeidsgiverOpplysninger,
    123456789: {
      identifikator: '123456789',
      navn: 'Bedriften & Sønn AS',
      erPrivatPerson: false,
    },
  };
  const perioder = [lagStandardPeriode(andeler)];
  const statuser = [lagStatus('AT')];
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.AT, 169647, 105.4, 178929),
  ];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  const ap = lagAPMedKode(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS);
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={nyArbeidsgiverOpplysningerPerId}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const arbeidstakerMedAksjonspunktBehandletSide6 = () => {
  const andeler = [lagAndel('AT', 348576, false, true)];
  andeler[0].overstyrtPrAar = 522864;
  andeler[0].bruttoPrAar = 522864;

  const perioder = [lagPeriodeMedDagsats(andeler, 441053 / 260)];
  const statuser = [lagStatus('AT')];
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.AT, 169647, 105.4, 178929),
  ];
  perioder[0].redusertPrAar = 441053;
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  const ap = lagAPMedKode(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS);
  ap.begrunnelse = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    + ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  ap.status.kode = 'UTFO';
  ap.endretAv = 'B123456';
  ap.endretTidspunkt = '2020-01-20';
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', true)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const tidsbegrensetArbeidsforholdMedAksjonspunktkSide7 = () => {
  const andeler = [
    lagAndel('AT', 395232, false, true),
    lagAndel('AT', 156084, true, true),
  ];
  const nyArbeidsgiverOpplysningerPerId = {
    ...arbeidsgiverOpplysninger,
    9478541223: {
      identifikator: '9478541223',
      navn: 'Gardslien transport og Gardiner AS',
      erPrivatPerson: false,
    },
    93178545: {
      identifikator: '93178545',
      navn: 'Aldersheimen Omsorg',
      erPrivatPerson: false,
    },
  };
  andeler[0].arbeidsforhold = lagArbeidsforhold('9478541223', 'sdefsef-swdefsdf-sdf-sdfdsf-98das',
    '100',
    undefined,
    'Butikkmedarbeider',
    60);
  andeler[1].arbeidsforhold = lagArbeidsforhold('93178545',
    'sdefsef-swdefsdf-sdf-sdfdsf-dfaf845',
    '200',
    '2019-11-11',
    'Assistent',
    30);
  const perioder = [lagPeriode(andeler, [], '2019-09-16', '2019-09-29'),
    lagTidsbegrensetPeriode(andeler, '2019-09-30', '2019-10-15'),
  ];
  const statuser = [lagStatus('AT')];
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 404257, 36.4, 147059)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  const ap = lagAPMedKode(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD);
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={nyArbeidsgiverOpplysningerPerId}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const tidsbegrensetArbeidsforholdMedAksjonspunktBehandletSide7 = () => {
  const andeler = [
    lagAndel('AT', 395232, false, true),
    lagAndel('AT', 156084, true, true),
  ];
  const nyArbeidsgiverOpplysningerPerId = {
    ...arbeidsgiverOpplysninger,
    9478541223: {
      identifikator: '9478541223',
      navn: 'Gardslien transport og Gardiner AS',
      erPrivatPerson: false,
    },
    93178545: {
      identifikator: '93178545',
      navn: 'Aldersheimen Omsorg',
      erPrivatPerson: false,
    },
  };
  andeler[0].arbeidsforhold = lagArbeidsforhold('9478541223', 'sdefsef-swdefsdf-sdf-sdfdsf-98das',
    '100',
    undefined,
    'Butikkmedarbeider',
    60);
  andeler[1].arbeidsforhold = lagArbeidsforhold('93178545',
    'sdefsef-swdefsdf-sdf-sdfdsf-dfaf845',
    '200',
    '2019-11-11', 'Assistent', 30);
  const klonetAndeler = JSON.parse(JSON.stringify(andeler));
  const perioder = [lagPeriode(andeler, [], '2019-09-16', '2019-09-29'),
    lagTidsbegrensetPeriode(klonetAndeler, '2019-09-30', '2019-10-15'),
  ];

  perioder[0].dagsats = 1696;
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = 551316;
  perioder[0].bruttoPrAar = 551316;
  perioder[0].redusertPrAar = 441053;
  perioder[1].dagsats = 1216;
  perioder[1].bruttoInkludertBortfaltNaturalytelsePrAar = 395232;
  perioder[1].bruttoPrAar = 395232;
  perioder[1].redusertPrAar = 316187;

  if (perioder[0].beregningsgrunnlagPrStatusOgAndel && perioder[1].beregningsgrunnlagPrStatusOgAndel) {
    perioder[0].beregningsgrunnlagPrStatusOgAndel[0].overstyrtPrAar = 395232;
    perioder[0].beregningsgrunnlagPrStatusOgAndel[1].overstyrtPrAar = 156084;
    perioder[1].beregningsgrunnlagPrStatusOgAndel[0].overstyrtPrAar = 395232;
    perioder[1].beregningsgrunnlagPrStatusOgAndel[0].bruttoPrAar = 395232;
    perioder[1].beregningsgrunnlagPrStatusOgAndel[1].overstyrtPrAar = 0;
    perioder[1].beregningsgrunnlagPrStatusOgAndel[1].bruttoPrAar = 0;
  }

  const statuser = [lagStatus('AT')];
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 404257, 36.4, 147059)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  const ap = lagAPMedKode(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD);
  ap.begrunnelse = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    + ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  ap.status.kode = 'UTFO';

  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={nyArbeidsgiverOpplysningerPerId}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const FrilansSide8 = () => {
  const andeler = [lagAndel('FL', 551316, undefined, false)];
  const perioder = [lagPeriodeMedDagsats(andeler, 1696)];
  perioder[0].redusertPrAar = 441053;
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = 441053;
  const statuser = [lagStatus('FL')];
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.FL, 474257, 16.2, 77059),
  ];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const FrilansMedAksjonspunktSide9 = () => {
  const andeler = [lagAndel('FL', 671316, false)];
  andeler[0].skalFastsetteGrunnlag = true;

  const perioder = [lagStandardPeriode(andeler)];
  const statuser = [lagStatus('FL')];
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.FL, 504257, 33.1, 167000),
  ];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  const ap = lagAPMedKode(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS);
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const arbeidstakerFrilansMedAksjonspunktSide10 = () => {
  const andeler = [
    lagAndel('AT', 551316, false, false),
    lagAndel('FL', 596000, false, true)];
  const perioder = [lagStandardPeriode(andeler)];
  const statuser = [lagStatus('AT_FL')];
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.AT, 474257, 16.2, 77059),
    lagSammenligningsGrunnlag(sammenligningType.FL, 159000, 274.8135, 437000),
  ];

  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  const ap = lagAPMedKode(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS);
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const arbeidstakerFrilansMedAksjonspunktBehandletSide11 = () => {
  const andeler = [
    lagAndel('AT', 551316, false, false),
    lagAndel('FL', 596000, false, true)];
  andeler[1].overstyrtPrAar = 159000;
  andeler[1].bruttoPrAar = 159000;
  const perioder = [lagPeriodeMedDagsats(andeler, 1843)];
  const statuser = [lagStatus('AT'), lagStatus('FL')];
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.AT, 474257, 16.2, 77059),
    lagSammenligningsGrunnlag(sammenligningType.FL, 159000, 274.8135, 437000),
  ];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  const ap = lagAPMedKode(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS);
  ap.begrunnelse = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    + ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  ap.status.kode = 'UTFO';
  perioder[0].redusertPrAar = 479318;
  perioder[0].avkortetPrAar = 599148;
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = 710316;
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', true)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};

export const SelvstendigNæringsdrivendeUtenVarigEndringIkkeNyoppstartetSide12 = () => {
  const andeler = [
    lagAndel('SN', 631129, undefined, false),
  ];
  const pgi = lagPGIVerdier();
  andeler[0].pgiVerdier = pgi;
  andeler[0].pgiSnitt = 631129;

  const perioder = [lagPeriodeMedDagsats(andeler, 599148 / 260)];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = andeler[0].pgiSnitt;
  perioder[0].avkortetPrAar = 599148;

  const statuser = [lagStatus('SN')];
  const næringer = [{
    begrunnelse: '',
    endringsdato: '2019-11-22',
    erNyIArbeidslivet: false,
    erNyoppstartet: false,
    erVarigEndret: false,
    kanRegnskapsførerKontaktes: false,
    oppgittInntekt: 1500000,
    oppstartsdato: undefined,
    orgnr: '910909088',
    regnskapsførerNavn: 'Regnar Regnskap',
    regnskapsførerTlf: '99999999',
    utenlandskvirksomhetsnavn: undefined,
    virksomhetType: { kode: 'ANNEN', kodeverk: 'VIRKSOMHET_TYPE' },
    kode: 'ANNEN',
    kodeverk: 'VIRKSOMHET_TYPE',
  }];
  andeler[0].næringer = næringer;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 474257, 26.2, -77059)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 100;
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};

export const SelvstendigNæringsdrivendeMedVarigEndringSide13 = () => {
  const andeler = [
    lagAndel('SN', 631129),
  ];
  const pgi = lagPGIVerdier();
  andeler[0].pgiVerdier = pgi;
  andeler[0].pgiSnitt = 631129;

  const perioder = [lagPeriodeMedDagsats(andeler, 599148 / 260)];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = andeler[0].pgiSnitt;
  perioder[0].avkortetPrAar = 599148;

  const statuser = [lagStatus('SN')];
  const næringer = [{
    begrunnelse: 'Jeg utvidet virksomheten fra en ren frisørsalong til også å tilby hudpleie.'
      + ' Jeg jobbet opprinnelig alene men har ansatt to stykker i løpet av det siste året',
    endringsdato: '2019-11-22',
    erNyIArbeidslivet: false,
    erNyoppstartet: false,
    erVarigEndret: true,
    kanRegnskapsførerKontaktes: false,
    oppgittInntekt: 755000,
    oppstartsdato: undefined,
    orgnr: '910909088',
    regnskapsførerNavn: 'Regnar Regnskap',
    regnskapsførerTlf: '99999999',
    utenlandskvirksomhetsnavn: undefined,
    virksomhetType: { kode: 'ANNEN', kodeverk: 'VIRKSOMHET_TYPE' },
    virksomhetNavn: 'Jensen frisør og hudpleie',
    kode: 'ANNEN',
    kodeverk: 'VIRKSOMHET_TYPE',
  },
  {
    begrunnelse: 'Endringsbeskrivelse',
    endringsdato: '2019-11-22',
    erNyoppstartet: false,
    erVarigEndret: false,
    kanRegnskapsførerKontaktes: false,
    oppgittInntekt: undefined,
    oppstartsdato: '2015-11-01',
    opphoersdato: '2010-03-01',
    orgnr: '910909077',
    utenlandskvirksomhetsnavn: undefined,
    virksomhetType: { kode: 'JORDBRUK_SKOGBRUK', kodeverk: 'VIRKSOMHET_TYPE' },
    virksomhetNavn: 'Berit Jensen',
  },
  ];
  andeler[0].næringer = næringer;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 755000, 18, -113871)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 100;
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const SelvstendigNæringsdrivendeMedVarigEndringMedAksjonspunktSide14 = () => {
  const andeler = [
    lagAndel('SN', 531000, undefined, true),
  ];
  const pgi = lagPGIVerdier();
  andeler[0].pgiVerdier = pgi;
  andeler[0].pgiSnitt = 631129;

  const perioder = [lagPeriodeMedDagsats(andeler)];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = andeler[0].pgiSnitt;
  delete perioder[0].redusertPrAar;
  delete perioder[0].avkortetPrAar;

  const statuser = [lagStatus('SN')];
  const næringer = [{
    begrunnelse: 'Jeg utvidet virksomheten fra en ren frisørsalong til også å tilby hudpleie. '
      + 'Jeg jobbet opprinnelig alene men har ansatt to stykker i løpet av det siste året',
    endringsdato: '2019-05-01',
    erNyIArbeidslivet: false,
    erNyoppstartet: false,
    erVarigEndret: true,
    kanRegnskapsførerKontaktes: false,
    oppgittInntekt: 900000,
    oppstartsdato: undefined,
    orgnr: '910909088',
    regnskapsførerNavn: 'Regnar Regnskap',
    regnskapsførerTlf: '99999999',
    utenlandskvirksomhetsnavn: undefined,
    virksomhetType: { kode: 'ANNEN', kodeverk: 'VIRKSOMHET_TYPE' },
    kode: 'ANNEN',
    kodeverk: 'VIRKSOMHET_TYPE',
  }];
  andeler[0].næringer = næringer;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 900000, 29.9, -268871)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 100;
  const ap = lagAPMedKode(aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const SelvstendigNæringsdrivendeMedVarigEndringMedAksjonspunktUtførtSide15 = () => {
  const andeler = [
    lagAndel('SN', 531000, undefined, true),
  ];
  const pgi = lagPGIVerdier();
  andeler[0].pgiVerdier = pgi;
  andeler[0].pgiSnitt = 631129;
  andeler[0].overstyrtPrAar = 522864;
  const perioder = [lagPeriodeMedDagsats(andeler, 522864 / 260)];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = andeler[0].overstyrtPrAar;
  delete perioder[0].redusertPrAar;
  delete perioder[0].avkortetPrAar;

  const statuser = [lagStatus('SN')];
  const næringer = [{
    begrunnelse: 'Jeg utvidet virksomheten fra en ren frisørsalong til også å tilby hudpleie. '
      + 'Jeg jobbet opprinnelig alene men har ansatt to stykker i løpet av det siste året',
    endringsdato: '2019-05-01',
    erNyIArbeidslivet: false,
    erNyoppstartet: false,
    erVarigEndret: true,
    kanRegnskapsførerKontaktes: false,
    oppgittInntekt: 900000,
    oppstartsdato: undefined,
    orgnr: '910909088',
    regnskapsførerNavn: 'Regnar Regnskap',
    regnskapsførerTlf: '99999999',
    utenlandskvirksomhetsnavn: undefined,
    virksomhetType: { kode: 'ANNEN', kodeverk: 'VIRKSOMHET_TYPE' },
    kode: 'ANNEN',
    kodeverk: 'VIRKSOMHET_TYPE',
  }];
  andeler[0].næringer = næringer;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 900000, 29.9, -268871)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 100;
  const ap = lagAPMedKode(aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);
  ap.begrunnelse = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    + ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  ap.status.kode = 'UTFO';
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', true)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', true)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const SelvstendigNæringsdrivendeNyoppstartetMedAksjonspunktSide16 = () => {
  const andeler = [
    lagAndel('SN', 531000, undefined, true),
  ];
  const pgi = lagPGIVerdier();
  andeler[0].pgiVerdier = pgi;
  andeler[0].pgiSnitt = 174544;
  andeler[0].overstyrtPrAar = 522864;
  const perioder = [lagPeriodeMedDagsats(andeler)];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = andeler[0].pgiSnitt;
  delete perioder[0].redusertPrAar;
  delete perioder[0].avkortetPrAar;

  const statuser = [lagStatus('SN')];
  const næringer = [{
    begrunnelse: '',
    endringsdato: '2019-05-01',
    erNyIArbeidslivet: false,
    erNyoppstartet: true,
    erVarigEndret: false,
    kanRegnskapsførerKontaktes: false,
    oppgittInntekt: 350000,
    oppstartsdato: '2019-05-01',
    orgnr: '910909088',
    regnskapsførerNavn: 'Regnar Regnskap',
    regnskapsførerTlf: '99999999',
    utenlandskvirksomhetsnavn: undefined,
    virksomhetType: { kode: 'ANNEN', kodeverk: 'VIRKSOMHET_TYPE' },
    kode: 'ANNEN',
    kodeverk: 'VIRKSOMHET_TYPE',
  }];
  andeler[0].næringer = næringer;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 350000, 50.1, -113871)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 100;
  const ap = lagAPMedKode(aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);

  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const SelvstendigNæringsdrivendeNyINæringslivetMedAksjonspunktSide17 = () => {
  const andeler = [
    lagAndel('SN', 531000, undefined, true),
  ];
  const pgi = lagPGIVerdier();
  andeler[0].pgiVerdier = pgi;
  andeler[0].pgiSnitt = 174544;
  andeler[0].overstyrtPrAar = 780342;
  andeler[0].erNyIArbeidslivet = true;
  const perioder = [lagPeriodeMedDagsats(andeler)];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = andeler[0].pgiSnitt;
  delete perioder[0].redusertPrAar;
  delete perioder[0].avkortetPrAar;

  const statuser = [lagStatus('SN')];
  const næringer = [{
    begrunnelse: '',
    endringsdato: '2019-05-01',
    erNyIArbeidslivet: true,
    erNyoppstartet: false,
    erVarigEndret: false,
    kanRegnskapsførerKontaktes: false,
    oppgittInntekt: 350000,
    oppstartsdato: '2019-05-01',
    orgnr: '910909088',
    regnskapsførerNavn: 'Regnar Regnskap',
    regnskapsførerTlf: '99999999',
    utenlandskvirksomhetsnavn: undefined,
    virksomhetType: { kode: 'ANNEN', kodeverk: 'VIRKSOMHET_TYPE' },
    kode: 'ANNEN',
    kodeverk: 'VIRKSOMHET_TYPE',
  }];
  andeler[0].næringer = næringer;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 300000, 50.1, -113871)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 100;
  const ap = lagAPMedKode(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET);

  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', true)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const arbeidstakerOgSelvstendigNæringsdrivendeSnStorreEnnAtOgStorreEnn6gDekningsgrad80Side18 = () => {
  const andeler = [
    lagAndel('SN', 158806),
    lagAndel('AT', 472194),
  ];
  const pgi = lagPGIVerdier();
  andeler[0].pgiVerdier = pgi;
  andeler[0].pgiSnitt = 631129;
  const perioder = [lagPeriodeMedDagsats(andeler, 479318 / 260)];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = andeler[0].pgiSnitt;
  perioder[0].avkortetPrAar = 599148;
  perioder[0].redusertPrAar = 479318;

  const statuser = [lagStatus('AT_SN')];
  const næringer = [{
    begrunnelse: 'Endringsbeskrivelse',
    endringsdato: '2019-11-22',
    erNyIArbeidslivet: false,
    erNyoppstartet: false,
    erVarigEndret: false,
    kanRegnskapsførerKontaktes: false,
    oppgittInntekt: undefined,
    oppstartsdato: undefined,
    orgnr: '910909088',
    regnskapsførerNavn: 'Regnar Regnskap',
    regnskapsførerTlf: '99999999',
    utenlandskvirksomhetsnavn: undefined,
    virksomhetType: { kode: 'ANNEN', kodeverk: 'VIRKSOMHET_TYPE' },
    kode: 'ANNEN',
    kodeverk: 'VIRKSOMHET_TYPE',
  }];
  andeler[0].næringer = næringer;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 474257, 26.2, -77059)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 80;
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const arbeidstakerOgSelvstendigNæringsdrivendeSnMindreEnnAtOgStorreEnn6gDekningsgrad80Side19 = () => {
  const andeler = [
    lagAndel('SN', 531000),
    lagAndel('AT', 814363),
  ];
  const pgi = lagPGIVerdier();
  andeler[0].pgiVerdier = pgi;
  andeler[0].pgiSnitt = 631129;

  const perioder = [lagPeriodeMedDagsats(andeler, 479318 / 260)];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = andeler[1].bruttoPrAar;
  perioder[0].avkortetPrAar = 599148;
  perioder[0].redusertPrAar = 479318;

  const statuser = [lagStatus('AT_SN')];
  const næringer = [{
    begrunnelse: 'Endringsbeskrivelse',
    endringsdato: '2019-11-22',
    erNyIArbeidslivet: false,
    erNyoppstartet: false,
    erVarigEndret: false,
    kanRegnskapsførerKontaktes: false,
    oppgittInntekt: 1500000,
    oppstartsdato: undefined,
    orgnr: '910909088',
    regnskapsførerNavn: 'Regnar Regnskap',
    regnskapsførerTlf: '99999999',
    utenlandskvirksomhetsnavn: undefined,
    virksomhetType: { kode: 'ANNEN', kodeverk: 'VIRKSOMHET_TYPE' },
    kode: 'ANNEN',
    kodeverk: 'VIRKSOMHET_TYPE',
  }];
  andeler[0].næringer = næringer;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 474257, 26.2, -77059)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 80;
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};

export const arbeidstakerOgSelvstendigNæringsdrivendeMedAPVarigEndringSide20 = () => {
  const andeler = [
    lagAndel('SN', 531000, undefined, true),
    lagAndel('AT', 551316),
  ];
  const pgi = lagPGIVerdier();
  andeler[0].pgiVerdier = pgi;
  andeler[0].pgiSnitt = 631129;

  const perioder = [lagPeriodeMedDagsats(andeler)];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = andeler[1].bruttoPrAar;

  const statuser = [lagStatus('AT_SN')];
  const næringer = [{
    begrunnelse: 'Endringsbeskrivelse',
    endringsdato: '2019-11-22',
    erNyIArbeidslivet: false,
    erNyoppstartet: false,
    erVarigEndret: true,
    kanRegnskapsførerKontaktes: false,
    oppgittInntekt: 900000,
    oppstartsdato: undefined,
    orgnr: '910909088',
    regnskapsførerNavn: 'Regnar Regnskap',
    regnskapsførerTlf: '99999999',
    utenlandskvirksomhetsnavn: undefined,
    virksomhetType: { kode: 'ANNEN', kodeverk: 'VIRKSOMHET_TYPE' },
    kode: 'ANNEN',
    kodeverk: 'VIRKSOMHET_TYPE',
  }];
  andeler[0].næringer = næringer;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 900000, 29.9, -268871)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  delete bg.dekningsgrad;
  const ap = lagAPMedKode(aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const arbeidstakerOgSelvstendigNæringsdrivendeMedVarigEndringApBehandletSide21 = () => {
  const andeler = [
    lagAndel('SN', 531000, undefined, true),
    lagAndel('AT', 551316),
  ];
  const pgi = lagPGIVerdier();
  andeler[0].pgiVerdier = pgi;
  andeler[0].pgiSnitt = 631129;
  andeler[0].overstyrtPrAar = 780342;
  andeler[0].beregnetPrAar = 631129;
  const perioder = [lagPeriodeMedDagsats(andeler, 1843)];

  perioder[0].redusertPrAar = 479318;
  perioder[0].beregnetPrAar = 631129;
  perioder[0].avkortetPrAar = 599148;
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = 1331658;
  const statuser = [lagStatus('AT_SN')];
  const næringer = [{
    begrunnelse: 'Endringsbeskrivelse',
    endringsdato: '2019-11-22',
    erNyIArbeidslivet: false,
    erNyoppstartet: false,
    erVarigEndret: true,
    kanRegnskapsførerKontaktes: false,
    oppgittInntekt: 900000,
    oppstartsdato: undefined,
    orgnr: '910909088',
    regnskapsførerNavn: 'Regnar Regnskap',
    regnskapsførerTlf: '99999999',
    utenlandskvirksomhetsnavn: undefined,
    virksomhetType: { kode: 'ANNEN', kodeverk: 'VIRKSOMHET_TYPE' },
    kode: 'ANNEN',
    kodeverk: 'VIRKSOMHET_TYPE',
  }];
  andeler[0].næringer = næringer;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 900000, 29.9, -268871)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 80;
  const ap = lagAPMedKode(aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);
  ap.begrunnelse = 'Endring eller nyoppstartet begrunnelse';
  ap.status.kode = 'UTFO';
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', true)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', true)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const arbeidstakerOgSelvstendigNæringsdrivendeAtStorreEnnSNSide22 = () => {
  const andeler = [
    lagAndel('SN', 0, undefined, true, 780342),
    lagAndel('AT', 851316),
  ];
  const pgi = lagPGIVerdier();
  andeler[0].pgiVerdier = pgi;
  andeler[0].pgiSnitt = 631129;
  andeler[0].overstyrtPrAar = 780342;
  andeler[0].beregnetPrAar = 631129;
  const perioder = [lagPeriodeMedDagsats(andeler, 1843)];

  perioder[0].redusertPrAar = 479318;
  perioder[0].beregnetPrAar = 631129;
  perioder[0].avkortetPrAar = 599148;
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = 1331658;
  const statuser = [lagStatus('AT_SN')];
  const næringer = [{
    begrunnelse: 'Endringsbeskrivelse',
    endringsdato: '2019-11-22',
    erNyIArbeidslivet: false,
    erNyoppstartet: false,
    erVarigEndret: true,
    kanRegnskapsførerKontaktes: false,
    oppgittInntekt: 900000,
    oppstartsdato: undefined,
    orgnr: '910909088',
    regnskapsførerNavn: 'Regnar Regnskap',
    regnskapsførerTlf: '99999999',
    utenlandskvirksomhetsnavn: undefined,
    virksomhetType: { kode: 'ANNEN', kodeverk: 'VIRKSOMHET_TYPE' },
    kode: 'ANNEN',
    kodeverk: 'VIRKSOMHET_TYPE',
  }];
  andeler[0].næringer = næringer;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 900000, 29.9, -268871)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 80;
  const ap = lagAPMedKode(aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);
  ap.begrunnelse = 'Endring eller nyoppstartet begrunnelse';
  ap.status.kode = 'UTFO';
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', true)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', true)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const arbeidstakerFrilansOgSelvstendigNæringsdrivendeMedApOgVarigEndringSide23 = () => {
  const andeler = [
    lagAndel('SN', 531000, undefined, true),
    lagAndel('AT', 24000),
    lagAndel('FL', 596000),
  ];
  const pgi = lagPGIVerdier();
  andeler[0].pgiVerdier = pgi;
  andeler[0].pgiSnitt = 631129;

  const perioder = [lagPeriodeMedDagsats(andeler)];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = andeler[1].bruttoPrAar;

  const statuser = [lagStatus('AT_FL_SN')];
  const næringer = [{
    begrunnelse: 'Endringsbeskrivelse',
    endringsdato: '2019-11-22',
    erNyIArbeidslivet: false,
    erNyoppstartet: false,
    erVarigEndret: true,
    kanRegnskapsførerKontaktes: false,
    oppgittInntekt: 900000,
    oppstartsdato: undefined,
    orgnr: '910909088',
    regnskapsførerNavn: 'Regnar Regnskap',
    regnskapsførerTlf: '99999999',
    utenlandskvirksomhetsnavn: undefined,
    virksomhetType: { kode: 'ANNEN', kodeverk: 'VIRKSOMHET_TYPE' },
    kode: 'ANNEN',
    kodeverk: 'VIRKSOMHET_TYPE',
  }];
  andeler[0].næringer = næringer;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 900000, 29.9, -268871)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  delete bg.dekningsgrad;
  const ap = lagAPMedKode(aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const arbeidstakerFrilansOgSelvstendigNæringsdrivendeMedApOgVarigEndringSide24 = () => {
  const andeler = [
    lagAndel('SN', 531000, undefined, true),
    lagAndel('AT', 24000, undefined),
    lagAndel('FL', 596000, undefined),
  ];
  const pgi = lagPGIVerdier();
  andeler[0].pgiVerdier = pgi;
  andeler[0].pgiSnitt = 631129;
  andeler[0].overstyrtPrAar = 780342;
  andeler[0].beregnetPrAar = 631129;

  const perioder = [lagPeriodeMedDagsats(andeler, 1843)];

  perioder[0].redusertPrAar = 479318;
  perioder[0].beregnetPrAar = 631129;
  perioder[0].avkortetPrAar = 599148;
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = 1400342;

  const statuser = [lagStatus('AT_FL_SN')];
  const næringer = [{
    begrunnelse: 'Jeg utvidet virksomheten fra en ren frisørsalong til også å tilby hudpleie.'
      + ' Jeg jobbet opprinnelig alene men har ansatt to stykker i løpet av det siste året',
    endringsdato: '2019-11-22',
    erNyIArbeidslivet: false,
    erNyoppstartet: false,
    erVarigEndret: true,
    kanRegnskapsførerKontaktes: false,
    oppgittInntekt: 900000,
    oppstartsdato: undefined,
    orgnr: '910909088',
    regnskapsførerNavn: 'Regnar Regnskap',
    regnskapsførerTlf: '99999999',
    utenlandskvirksomhetsnavn: undefined,
    virksomhetNavn: 'Jensen frisør og hudpleie',
    virksomhetType: { kode: 'ANNEN', kodeverk: 'VIRKSOMHET_TYPE' },
    kode: 'ANNEN',
    kodeverk: 'VIRKSOMHET_TYPE',
  }];
  andeler[0].næringer = næringer;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 900000, 29.9, -268871)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 80;
  const ap = lagAPMedKode(aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);
  ap.begrunnelse = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    + ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  ap.status.kode = 'UTFO';
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', true)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', true)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const arbeidstakerFrilansOgSelvstendigNæringsdrivendeMedAPVarigEndringSnMindreEnnATFLSide25 = () => {
  const andeler = [
    lagAndel('SN', 531000, undefined, true),
    lagAndel('AT', 551316),
    lagAndel('FL', 596000),
  ];
  const pgi = lagPGIVerdier();
  andeler[0].pgiVerdier = pgi;
  andeler[0].pgiSnitt = 631129;
  andeler[0].overstyrtPrAar = 780342;
  andeler[0].beregnetPrAar = 631129;

  const perioder = [lagPeriodeMedDagsats(andeler, 1843)];

  perioder[0].redusertPrAar = 479318;
  perioder[0].beregnetPrAar = 631129;
  perioder[0].avkortetPrAar = 599148;
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = 1147342;

  const statuser = [lagStatus('AT_FL_SN')];
  const næringer = [{
    begrunnelse: 'Jeg utvidet virksomheten fra en ren frisørsalong til også å tilby hudpleie.'
      + ' Jeg jobbet opprinnelig alene men har ansatt to stykker i løpet av det siste året',
    endringsdato: '2019-10-20',
    erNyIArbeidslivet: false,
    erNyoppstartet: false,
    erVarigEndret: true,
    kanRegnskapsførerKontaktes: false,
    oppgittInntekt: 900000,
    oppstartsdato: undefined,
    orgnr: '910909088',
    regnskapsførerNavn: 'Regnar Regnskap',
    regnskapsførerTlf: '99999999',
    utenlandskvirksomhetsnavn: undefined,
    virksomhetNavn: 'Jensen frisør og hudpleie',
    virksomhetType: { kode: 'ANNEN', kodeverk: 'VIRKSOMHET_TYPE' },
    kode: 'ANNEN',
    kodeverk: 'VIRKSOMHET_TYPE',
  }];
  andeler[0].næringer = næringer;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 900000, 29.9, -268871)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 80;
  const ap = lagAPMedKode(aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);
  ap.begrunnelse = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    + ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  ap.status.kode = 'UTFO';
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', true)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', true)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const YtelseFraNavSide26 = () => {
  const andeler = [
    lagAndel('KUN_YTELSE', 395232),
  ];
  const statuser = [lagStatus('KUN_YTELSE')];
  const perioder = [lagPeriodeMedDagsats(andeler, 1215)];
  perioder[0].redusertPrAar = 316000;
  perioder[0].bruttoPrAar = 395232;
  const bg = lagBG(perioder, statuser);
  bg.dekningsgrad = 80;
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const arbeidstakerOgAAPMedAksjonspunktSide27 = () => {
  const andeler = [
    lagAndel('AT', 107232, false, true),
    lagAndel('AAP', 272304, false)];
  const perioder = [lagPeriodeMedDagsats(andeler, 1234)];
  const statuser = [lagStatus('AT'), lagStatus('AAP')];
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 313536, 65.8, -206304)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  const ap = lagAPMedKode(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS);

  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const arbeidstakerOgAAPMedAksjonspunktOppfyltSide27 = () => {
  const andeler = [
    lagAndel('AT', 107232, false, true),
    lagAndel('AAP', 272304, false)];
  andeler[0].overstyrtPrAar = 167000;
  const nyArbeidsgiverOpplysningerPerId = {
    ...arbeidsgiverOpplysninger,
    987654321: {
      identifikator: '987654321',
      navn: 'Gardslien transport og Gardiner',
      erPrivatPerson: false,
    },
  };
  andeler[0].arbeidsforhold = lagArbeidsforhold('987654321', 'sdefsef-swdefsdf-sdf-sdfdsf-ddsdf');
  const perioder = [lagPeriodeMedDagsats(andeler, 379536 / 260)];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = 379536;
  delete perioder[0].redusertPrAar;
  const statuser = [lagStatus('AT'), lagStatus('AAP')];
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 313536, 65.8, -206304)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 100;
  const ap = lagAPMedKode(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS);
  ap.begrunnelse = 'Endring  begrunnelse';
  ap.status.kode = 'UTFO';
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={nyArbeidsgiverOpplysningerPerId}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const arbeidstakerDagpengerMedBesteberegningSide28 = () => {
  const andeler = [
    lagAndel('DP', 343094),
    lagAndel('AT', 107232),
  ];

  const perioder = [lagPeriodeMedDagsats(andeler, 1732)];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = 450326;
  perioder[0].avkortetPrAar = 599148;

  const statuser = [lagStatus('AT'), lagStatus('DP')];
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 474257, 26.2, -77059)];

  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  if (bg.faktaOmBeregning) {
    bg.faktaOmBeregning.faktaOmBeregningTilfeller = [{ kode: faktaOmBeregningTilfelle.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE, kodeverk: '' }];
  }
  bg.dekningsgrad = 100;
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const frilansDagpengerOgSelvstendigNæringsdrivendeSide29 = () => {
  const andeler = [
    lagAndel('FL', 40824),
    lagAndel('DP', 272304),
    lagAndel('SN', 318001),
  ];
  const pgi = lagPGIVerdier();
  andeler[2].pgiVerdier = pgi;
  andeler[2].pgiSnitt = 631129;
  const statuser = [lagStatus('FL_SN'), lagStatus('DP')];
  const perioder = [lagPeriodeMedDagsats(andeler, 479318 / 260)];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = 631129;
  perioder[0].redusertPrAar = 479318;
  perioder[0].beregnetPrAar = 631129;
  perioder[0].avkortetPrAar = 599148;
  const bg = lagBG(perioder, statuser);
  bg.dekningsgrad = 80;
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const frilansDagpengerOgSelvstendigNæringsdrivendeFnOgDpOverstigerSNSide30 = () => {
  const andeler = [
    lagAndel('FL', 40824),
    lagAndel('DP', 272304),
    lagAndel('SN', 112447),
  ];
  const pgi = lagPGIVerdier();
  andeler[2].pgiVerdier = pgi;
  andeler[2].pgiSnitt = 112447;
  const statuser = [lagStatus('FL_SN'), lagStatus('DP')];
  const perioder = [lagPeriodeMedDagsats(andeler, 313128 / 260)];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = 313128;
  perioder[0].beregnetPrAar = 313128;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 57000, 1007.2, -574129)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 100;
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const ArbeidstagerDagpengerOgSelvstendigNæringsdrivendeATOgDpOverstigerSN = () => {
  const andeler = [
    lagAndel('AT', 40824),
    lagAndel('DP', 272304),
    lagAndel('SN', 112447),
  ];
  const pgi = lagPGIVerdier();
  andeler[2].pgiVerdier = pgi;
  andeler[2].pgiSnitt = 112447;
  const statuser = [lagStatus('AT_SN'), lagStatus('DP')];
  const perioder = [lagPeriodeMedDagsats(andeler, 313128 / 260)];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = 313128;
  perioder[0].beregnetPrAar = 313128;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 57000, 1007.2, -574129)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 100;
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const frilansDagpengerOgSelvstendigNæringsdrivendeMedAksjonspunktSide31 = () => {
  const andeler = [
    lagAndel('FL', 40824),
    lagAndel('DP', 272304),
    lagAndel('SN', 631129, undefined, true),
  ];
  const pgi = lagPGIVerdier();
  andeler[2].pgiVerdier = pgi;
  andeler[2].pgiSnitt = 631129;
  const næringer = [{
    begrunnelse: 'Endringsbeskrivelse',
    endringsdato: '2019-11-22',
    erNyIArbeidslivet: false,
    erNyoppstartet: false,
    erVarigEndret: true,
    kanRegnskapsførerKontaktes: false,
    oppgittInntekt: 57000,
    oppstartsdato: undefined,
    orgnr: '910909088',
    regnskapsførerNavn: 'Regnar Regnskap',
    regnskapsførerTlf: '99999999',
    utenlandskvirksomhetsnavn: undefined,
    virksomhetType: { kode: 'ANNEN', kodeverk: 'VIRKSOMHET_TYPE' },
    kode: 'ANNEN',
    kodeverk: 'VIRKSOMHET_TYPE',
  }];
  andeler[2].næringer = næringer;
  const statuser = [lagStatus('FL_SN'), lagStatus('DP')];
  const perioder = [lagPeriodeMedDagsats(andeler, 313128 / 260)];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = 313128;
  perioder[0].beregnetPrAar = 313128;
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 57000, 1007.2, -574129)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 100;
  const ap = lagAPMedKode(aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);

  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [ap as Aksjonspunkt])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
export const militærOgSiviltjenesteSide33 = () => {
  const andeler = [
    lagAndel('AT', 155232, false),
    lagAndel('MS', 144342, false)];
  const perioder = [lagPeriodeMedDagsats(andeler, 922)];
  perioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = 299574;
  perioder[0].redusertPrAar = 239659;
  const statuser = [lagStatus('AT'), lagStatus('MS')];
  const sammenligningsgrunnlagPrStatus = [
    lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 30000, 17.2, -574129)];
  const bg = lagBG(perioder, statuser, sammenligningsgrunnlagPrStatus);
  bg.dekningsgrad = 80;
  return (
    <BeregningsgrunnlagProsessIndex
      behandling={object('behandling', behandling)}
      beregningsgrunnlag={object('beregningsgrunnlag', bg)}
      aksjonspunkter={object('aksjonspunkter', [])}
      submitCallback={action('button-click') as () => Promise<any>}
      isReadOnly={boolean('readOnly', false)}
      readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
      isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
      vilkar={object('vilkår', vilkarMedUtfall(vilkarUtfallType.OPPFYLT))}
      alleKodeverk={alleKodeverk as any}
      status=""
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />
  );
};
