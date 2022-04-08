import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import periodeAarsak from '@fpsak-frontend/kodeverk/src/periodeAarsak';
import sammenligningType from '@fpsak-frontend/kodeverk/src/sammenligningType';

import Behandling from '@fpsak-frontend/types/src/behandlingTsType';

import Beregningsgrunnlag, { Inntektsgrunnlag, Næring } from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import {
  Vilkar, BeregningsgrunnlagPeriodeProp, SammenligningsgrunlagProp, BeregningsgrunnlagAndel, BeregningsgrunnlagArbeidsforhold,
} from '@fpsak-frontend/types';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import inntektAktivitetType from '@fpsak-frontend/kodeverk/src/inntektAktivitetType';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { ProsessAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import moment from 'moment';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import BeregningsgrunnlagProsessIndex from './BeregningsgrunnlagProsessIndex';

const STP = '2021-01-01';

const førSTP = (dager: number): string => moment(STP).subtract(dager, 'days').format(ISO_DATE_FORMAT);
const etterSTP = (dager: number): string => moment(STP).add(dager, 'days').format(ISO_DATE_FORMAT);

const bgpFom = '2022-03-01';
const bgpTom = '2022-05-31';

type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const lagNæring = (varigEndring: boolean, nyoppstartet: boolean): Næring => ({
  begrunnelse: 'Jeg utvidet virksomheten fra en ren frisørsalong til også å tilby hudpleie. '
    + 'Jeg jobbet opprinnelig alene men har ansatt to stykker i løpet av det siste året',
  endringsdato: '2016-05-01',
  erNyoppstartet: nyoppstartet,
  erVarigEndret: varigEndring,
  kanRegnskapsførerKontaktes: true,
  oppgittInntekt: 474257,
  oppstartsdato: '2015-11-01',
  orgnr: '910909088',
  regnskapsførerNavn: 'Regnskapsfører Regn S. Fører',
  regnskapsførerTlf: '99999999',
  utenlandskvirksomhetsnavn: undefined,
  virksomhetType: 'ANNEN',
});

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

const lagSNMedPGI = (andelnr: number, beregnet: number, overstyrt: number, skalFastsettGrunnlag: boolean,
  erNyIArbeidslivet?: boolean, næring?: Næring) : BeregningsgrunnlagAndel => ({
  aktivitetStatus: aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
  beregningsperiodeFom: '2019-01-01',
  beregningsperiodeTom: '2021-12-31',
  beregnetPrAar: beregnet,
  overstyrtPrAar: overstyrt,
  bruttoPrAar: overstyrt || beregnet,
  avkortetPrAar: 360000,
  redusertPrAar: 599000,
  erNyIArbeidslivet,
  skalFastsetteGrunnlag: skalFastsettGrunnlag,
  andelsnr: andelnr,
  lagtTilAvSaksbehandler: false,
  erTilkommetAndel: false,
  pgiVerdier: lagPGIVerdier(),
  næringer: næring ? [næring] : [lagNæring(!!overstyrt, false)],
} as BeregningsgrunnlagAndel);

const lagAPMedKode = (kode: string, begrunnelse?: string): DeepWriteable<Aksjonspunkt> => ({
  definisjon: kode,
  status: begrunnelse ? 'UTFO' : 'OPPR',
  begrunnelse,
  kanLoses: true,
  erAktivt: true,
  endretAv: 'B123456',
  endretTidspunkt: førSTP(5),
});

const vilkarMedUtfall = (kode: string): Vilkar[] => [{
  vilkarType: vilkarType.BEREGNINGSGRUNNLAGVILKARET,
  vilkarStatus: kode,
} as Vilkar];

const arbeidsgiverOpplysninger = {
  999999996: {
    identifikator: '999999996',
    navn: 'BEDRIFT AS',
    erPrivatPerson: false,
  },
  999999999: {
    identifikator: '999999999',
    navn: 'Andeby bank',
    erPrivatPerson: false,
  },
  999999998: {
    identifikator: '999999998',
    navn: 'Gardslien transport og Gardiner AS',
    erPrivatPerson: false,
  },
  999999997: {
    identifikator: '999999997',
    navn: 'Svaneby sykehjem',
    erPrivatPerson: false,
  },

};

const lagArbeidsforhold = (
  arbeidsgiverIdent: string,
  arbeidsforholdId: string,
  eksternArbeidsforholdId?: string,
  bortfaltNaturalytelse?: number,
  tilkommetNaturalytelse?: number,
): BeregningsgrunnlagArbeidsforhold => ({
  arbeidsgiverIdent,
  arbeidsforholdId,
  eksternArbeidsforholdId,
  arbeidsforholdType: 'ARBEID',
  refusjonPrAar: 360000,
  belopFraInntektsmeldingPrMnd: 30000,
  organisasjonstype: 'VIRKSOMHET',
  stillingsProsent: 100,
  stillingsNavn: 'Beregningsmann',
  startdato: førSTP(400),
  naturalytelseBortfaltPrÅr: bortfaltNaturalytelse,
  naturalytelseTilkommetPrÅr: tilkommetNaturalytelse,
  opphoersdato: '2070-12-31',
});

const malArbeidsorhold = (): BeregningsgrunnlagArbeidsforhold => lagArbeidsforhold('999999996', null, null);

const lagArbeidsandel = (andelnr: number,
  arbeid: BeregningsgrunnlagArbeidsforhold,
  beregnet: number,
  overstyrt: number,
  skalFastsette: boolean,
  erTidsbegrenset: boolean): BeregningsgrunnlagAndel => ({
  aktivitetStatus: aktivitetStatus.ARBEIDSTAKER,
  beregningsperiodeFom: bgpFom,
  beregningsperiodeTom: bgpTom,
  beregnetPrAar: beregnet,
  overstyrtPrAar: overstyrt,
  bruttoPrAar: overstyrt || beregnet,
  avkortetPrAar: 360000,
  redusertPrAar: 599000,
  erTidsbegrensetArbeidsforhold: erTidsbegrenset,
  skalFastsetteGrunnlag: skalFastsette,
  andelsnr: andelnr,
  arbeidsforhold: arbeid,
  lagtTilAvSaksbehandler: false,
  erTilkommetAndel: false,
});

const malArbeidsandel = (): BeregningsgrunnlagAndel => lagArbeidsandel(1, malArbeidsorhold(), 200000, null, false, false);

const lagFrilansandel = (andelnr: number, beregnet: number, overstyrt: number, skalFastsette: boolean): BeregningsgrunnlagAndel => ({
  aktivitetStatus: aktivitetStatus.FRILANSER,
  beregningsperiodeFom: '2019-06-01',
  beregningsperiodeTom: '2019-08-31',
  beregnetPrAar: beregnet,
  overstyrtPrAar: overstyrt,
  bruttoPrAar: overstyrt || beregnet,
  avkortetPrAar: 360000,
  redusertPrAar: 599000,
  skalFastsetteGrunnlag: skalFastsette,
  andelsnr: andelnr,
  lagtTilAvSaksbehandler: false,
  erTilkommetAndel: false,
  arbeidsforhold: malArbeidsorhold(),
});

const lagGenerellAndel = (andelnr: number, status: string, beregnet: number): BeregningsgrunnlagAndel => ({
  aktivitetStatus: status,
  beregningsperiodeFom: '2019-06-01',
  beregningsperiodeTom: '2019-08-31',
  beregnetPrAar: beregnet,
  bruttoPrAar: beregnet,
  avkortetPrAar: beregnet,
  redusertPrAar: beregnet,
  andelsnr: andelnr,
  lagtTilAvSaksbehandler: false,
  erTilkommetAndel: false,
});

const lagTBAndel = (andelnr: number, arbeidsgiverIdent: string, beregnet: number): BeregningsgrunnlagAndel => {
  const arbfor = lagArbeidsforhold(arbeidsgiverIdent, null, null);
  return lagArbeidsandel(andelnr, arbfor, beregnet, null, true, true);
};

const lagPeriode = (
  andelsliste: BeregningsgrunnlagAndel[],
  periodeAarsaker: string[],
  fom: string,
  tom?: string,
  dagsats?: number,
): BeregningsgrunnlagPeriodeProp => ({
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

const malPeriode = (andelsliste: BeregningsgrunnlagAndel[]): BeregningsgrunnlagPeriodeProp => lagPeriode(andelsliste, [], STP, null, 999);

const lagSammenligningsGrunnlag = (
  kode: string,
  rapportertPrAar: number,
  avvikProsent: number,
  differanse: number,
): SammenligningsgrunlagProp => ({
  sammenligningsgrunnlagFom: førSTP(365),
  sammenligningsgrunnlagTom: førSTP(1),
  rapportertPrAar,
  avvikPromille: avvikProsent ? avvikProsent * 10 : 0,
  avvikProsent,
  sammenligningsgrunnlagType: kode,
  differanseBeregnet: differanse,
});

const malSGGrunnlagAvvik = () => lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 200000, 30, -150000);
const malSGGrunnlag = () => lagSammenligningsGrunnlag(sammenligningType.ATFLSN, 200000, 0, 0);

type Inntekt = {
  inntektAktivitetType: string,
  beløp: number;
}

type InntektOgPeriode = {
  fom: string;
  tom: string;
  inntekter: Inntekt[];
}

const lagATInntektsgrunnlag = (inntekt: number): Inntekt => ({
  inntektAktivitetType: inntektAktivitetType.ARBEID,
  beløp: inntekt,
});

const lagYtelseInntektsgrunnlag = (inntekt: number): Inntekt => ({
  inntektAktivitetType: inntektAktivitetType.YTELSE,
  beløp: inntekt,
});

const lagFLInntektsgrunnlag = (inntekt: number): Inntekt => ({
  inntektAktivitetType: inntektAktivitetType.FRILANS,
  beløp: inntekt,
});

const lagMånedInntekt = (fom: string, tom: string, inntekter: Inntekt[]): InntektOgPeriode => ({
  fom,
  tom,
  inntekter,
});

const lagInntektsgrunnlag = (): Inntektsgrunnlag => {
  const måneder = [];
  måneder.push(lagMånedInntekt('2020-01-01', '2020-01-31', [lagATInntektsgrunnlag(35000), lagYtelseInntektsgrunnlag(4000), lagFLInntektsgrunnlag(0)]));
  måneder.push(lagMånedInntekt('2020-02-01', '2020-02-28', [lagATInntektsgrunnlag(70000), lagYtelseInntektsgrunnlag(6000), lagFLInntektsgrunnlag(5000)]));
  måneder.push(lagMånedInntekt('2020-03-01', '2020-03-31', [lagATInntektsgrunnlag(40000), lagYtelseInntektsgrunnlag(7000), lagFLInntektsgrunnlag(12000)]));
  måneder.push(lagMånedInntekt('2020-04-01', '2020-04-30', [lagATInntektsgrunnlag(50000), lagYtelseInntektsgrunnlag(20000), lagFLInntektsgrunnlag(45000)]));
  måneder.push(lagMånedInntekt('2020-05-01', '2020-05-31', [lagATInntektsgrunnlag(37000), lagYtelseInntektsgrunnlag(10000), lagFLInntektsgrunnlag(30000)]));
  måneder.push(lagMånedInntekt('2020-06-01', '2020-06-30', [lagATInntektsgrunnlag(45000), lagYtelseInntektsgrunnlag(5000), lagFLInntektsgrunnlag(20000)]));
  måneder.push(lagMånedInntekt('2020-07-01', '2020-07-31', [lagATInntektsgrunnlag(25000), lagYtelseInntektsgrunnlag(3000), lagFLInntektsgrunnlag(25000)]));
  måneder.push(lagMånedInntekt('2020-08-01', '2020-08-31', [lagATInntektsgrunnlag(33000), lagYtelseInntektsgrunnlag(7000), lagFLInntektsgrunnlag(0)]));
  måneder.push(lagMånedInntekt('2020-09-01', '2020-09-30', [lagATInntektsgrunnlag(25000), lagYtelseInntektsgrunnlag(6000), lagFLInntektsgrunnlag(33000)]));
  måneder.push(lagMånedInntekt('2020-10-01', '2020-10-31', [lagATInntektsgrunnlag(8000), lagYtelseInntektsgrunnlag(20000), lagFLInntektsgrunnlag(1000)]));
  måneder.push(lagMånedInntekt('2020-11-01', '2020-11-30', [lagATInntektsgrunnlag(54000), lagYtelseInntektsgrunnlag(1000), lagFLInntektsgrunnlag(25000)]));
  måneder.push(lagMånedInntekt('2020-12-01', '2020-12-31', [lagATInntektsgrunnlag(47000), lagYtelseInntektsgrunnlag(0), lagFLInntektsgrunnlag(10000)]));
  return {
    måneder,
  } as Inntektsgrunnlag;
};

const lagBG = (
  perioder: BeregningsgrunnlagPeriodeProp[],
  statuser: string[],
  inntektsgrunnlag: Inntektsgrunnlag,
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp,
): Beregningsgrunnlag => {
  const beregningsgrunnlag = {
    skjaeringstidspunktBeregning: STP,
    aktivitetStatus: statuser,
    beregningsgrunnlagPeriode: perioder,
    dekningsgrad: 80,
    grunnbeløp: 99858,
    sammenligningsgrunnlagPrStatus: sammenligningsgrunnlagPrStatus ? [sammenligningsgrunnlagPrStatus] : null,
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
    erOverstyrtInntekt: false,
    inntektsgrunnlag,
  };
  return beregningsgrunnlag;
};

export default {
  title: 'prosess/prosess-beregningsgrunnlag',
  component: BeregningsgrunnlagProsessIndex,
};

const Template: Story<{
  readOnly: boolean;
  vilkar: Vilkar[],
  beregningsgrunnlag: Beregningsgrunnlag;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
}> = ({
  readOnly,
  vilkar,
  beregningsgrunnlag,
  submitCallback,
  aksjonspunkter,
}) => (
  <BeregningsgrunnlagProsessIndex
    behandling={behandling}
    beregningsgrunnlag={beregningsgrunnlag}
    aksjonspunkter={aksjonspunkter}
    submitCallback={submitCallback}
    isReadOnly={readOnly}
    readOnlySubmitButton={false}
    isAksjonspunktOpen
    vilkar={vilkar}
    alleKodeverk={alleKodeverk as any}
    status=""
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
  />
);

export const JusterDekningsgradAP = Template.bind({});
JusterDekningsgradAP.args = {
  aksjonspunkter: [lagAPMedKode(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS), lagAPMedKode(aksjonspunktCodes.VURDER_DEKNINGSGRAD)],
  readOnly: false,
  beregningsgrunnlag: lagBG([malPeriode([lagArbeidsandel(1, malArbeidsorhold(),
    200000, null, true, false)])], ['AT'], lagInntektsgrunnlag(), malSGGrunnlagAvvik()),
  vilkar: vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerUtenAvvik = Template.bind({});
ArbeidstakerUtenAvvik.args = {
  aksjonspunkter: [],
  readOnly: false,
  beregningsgrunnlag: lagBG([malPeriode([lagArbeidsandel(1, malArbeidsorhold(),
    200000, null, false, false)])], ['AT'], null, malSGGrunnlag()),
  vilkar: vilkarMedUtfall(vilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const BrukersAndelUtenAvvik = Template.bind({});
BrukersAndelUtenAvvik.args = {
  aksjonspunkter: [],
  readOnly: false,
  beregningsgrunnlag: lagBG([malPeriode([malArbeidsandel(),
    lagGenerellAndel(1, aktivitetStatus.BRUKERS_ANDEL, 200000)])], ['AT, BA'], null, malSGGrunnlag()),
  vilkar: vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerMedAvvik = Template.bind({});
ArbeidstakerMedAvvik.args = {
  aksjonspunkter: [lagAPMedKode(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
  readOnly: false,
  beregningsgrunnlag: lagBG([malPeriode([lagArbeidsandel(1, malArbeidsorhold(),
    200000, null, true, false)])], ['AT'], null, malSGGrunnlagAvvik()),
  vilkar: vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerFrilansMedAvvik = Template.bind({});
ArbeidstakerFrilansMedAvvik.args = {
  aksjonspunkter: [lagAPMedKode(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
  readOnly: false,
  beregningsgrunnlag: lagBG([malPeriode([lagArbeidsandel(1, malArbeidsorhold(),
    200000, null, true, false), lagFrilansandel(1,
    200000, null, true)])], ['AT_FL'], null, malSGGrunnlagAvvik()),
  vilkar: vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const Militær = Template.bind({});
Militær.args = {
  aksjonspunkter: [],
  readOnly: false,
  beregningsgrunnlag: lagBG([malPeriode([lagGenerellAndel(1, aktivitetStatus.MILITAER_ELLER_SIVIL, 300000)])], ['MS'], null),
  vilkar: vilkarMedUtfall(vilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const SelvstendigNæringsdrivendeMedAksjonspunkt = Template.bind({});
SelvstendigNæringsdrivendeMedAksjonspunkt.args = {
  aksjonspunkter: [lagAPMedKode(aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE)],
  readOnly: false,
  beregningsgrunnlag: lagBG([malPeriode([lagSNMedPGI(1, 200000, null, true, false,
    lagNæring(true, false))])], ['SN'], null, malSGGrunnlagAvvik()),
  vilkar: vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const MangeTidsbegrensetArbeidsforholdMedAvvik = Template.bind({});
MangeTidsbegrensetArbeidsforholdMedAvvik.args = {
  aksjonspunkter: [lagAPMedKode(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD)],
  readOnly: false,
  beregningsgrunnlag: {
    beregningsgrunnlagPeriode: [lagPeriode([lagTBAndel(1, '999999999', 100000),
      lagTBAndel(2, '999999998', 250000), lagTBAndel(3, '999999997', 5000),
      lagFrilansandel(4, 4500, null, true)], [], STP, etterSTP(20)),
    lagPeriode([lagTBAndel(1, '999999999', 100000),
      lagTBAndel(2, '999999998', 250000), lagTBAndel(3, '999999997', 5000),
      lagFrilansandel(4, 4500, null, true)], [periodeAarsak.ARBEIDSFORHOLD_AVSLUTTET], etterSTP(21), etterSTP(35)),
    lagPeriode([lagTBAndel(1, '999999999', 100000),
      lagTBAndel(2, '999999998', 250000), lagTBAndel(3, '999999997', 5000),
      lagFrilansandel(4, 4500, null, true)], [periodeAarsak.ARBEIDSFORHOLD_AVSLUTTET], etterSTP(36), etterSTP(40))],
    sammenligningsgrunnlagPrStatus: [malSGGrunnlagAvvik()],
    skjaeringstidspunktBeregning: STP,
    dekningsgrad: 100,
    aktivitetStatus: ['AT_FL'],
  } as Beregningsgrunnlag,
  vilkar: vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const TidsbegrensetArbeidsforholdMedAvvik = Template.bind({});
TidsbegrensetArbeidsforholdMedAvvik.args = {
  aksjonspunkter: [lagAPMedKode(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD)],
  readOnly: false,
  beregningsgrunnlag: {
    beregningsgrunnlagPeriode: [lagPeriode([lagTBAndel(1, '999999999', 100000)], [], STP, etterSTP(20)),
      lagPeriode([lagTBAndel(1, '999999999', 100000)], [periodeAarsak.ARBEIDSFORHOLD_AVSLUTTET], etterSTP(21), etterSTP(35))],
    sammenligningsgrunnlagPrStatus: [malSGGrunnlagAvvik()],
    skjaeringstidspunktBeregning: STP,
    dekningsgrad: 100,
    aktivitetStatus: ['AT'],
  } as Beregningsgrunnlag,
  vilkar: vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerFrilanserOgSelvstendigNæringsdrivende = Template.bind({});
ArbeidstakerFrilanserOgSelvstendigNæringsdrivende.args = {
  aksjonspunkter: [lagAPMedKode(aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE)],
  readOnly: false,
  beregningsgrunnlag: lagBG([malPeriode([lagSNMedPGI(1, 200000, null, true),
    lagArbeidsandel(2, malArbeidsorhold(), 150000, null, false, false),
    lagFrilansandel(3, 200000, null, false)])], ['AT_FL_SN'], null, malSGGrunnlagAvvik()),
  vilkar: vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const NaturalYtelse = Template.bind({});
NaturalYtelse.args = {
  aksjonspunkter: [],
  readOnly: false,
  beregningsgrunnlag: {
    beregningsgrunnlagPeriode: [lagPeriode([lagArbeidsandel(1,
      lagArbeidsforhold('999999999', null, null, 5000, null),
      100000, null, false, false)], [], STP, etterSTP(20)),
    lagPeriode([lagArbeidsandel(1,
      lagArbeidsforhold('999999999', null, null, 4000, null),
      100000, null, false, false)], [], etterSTP(21), etterSTP(30)),
    lagPeriode([lagArbeidsandel(1,
      lagArbeidsforhold('999999999', null, null, 3000, null),
      100000, null, false, false)], [], etterSTP(31), etterSTP(50)),
    lagPeriode([lagArbeidsandel(1,
      lagArbeidsforhold('999999999', null, null, 2000, null),
      100000, null, false, false)], [], etterSTP(51), etterSTP(200))],
    sammenligningsgrunnlag: malSGGrunnlag(),
    skjaeringstidspunktBeregning: STP,
    dekningsgrad: 100,
    aktivitetStatus: ['AT'],
  } as Beregningsgrunnlag,
  vilkar: vilkarMedUtfall(vilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const Dagpenger = Template.bind({});
Dagpenger.args = {
  aksjonspunkter: [],
  readOnly: false,
  beregningsgrunnlag: lagBG([malPeriode([lagGenerellAndel(1, aktivitetStatus.DAGPENGER, 300000)])], ['DP'], null),
  vilkar: vilkarMedUtfall(vilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const GraderingPåBeregningsgrunnlagUtenPenger = Template.bind({});
GraderingPåBeregningsgrunnlagUtenPenger.args = {
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG,
    status: 'UTFO',
    begrunnelse: 'her var det noe galt en gang',
    kanLoses: true,
    erAktivt: true,
    endretAv: 'B123456',
    endretTidspunkt: førSTP(5),
  }],
  readOnly: true,
  beregningsgrunnlag: lagBG([malPeriode([malArbeidsandel()])], ['AT'], null, malSGGrunnlag()),
  vilkar: vilkarMedUtfall(vilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerDagpengerOgSelvstendigNæringsdrivendeUtenAksjonspunkt = Template.bind({});
ArbeidstakerDagpengerOgSelvstendigNæringsdrivendeUtenAksjonspunkt.args = {
  aksjonspunkter: [],
  readOnly: false,
  beregningsgrunnlag: lagBG([malPeriode([lagSNMedPGI(1, 200000, null, false),
    lagArbeidsandel(2, malArbeidsorhold(), 150000, null, false, false),
    lagGenerellAndel(3, aktivitetStatus.DAGPENGER, 200000)])], ['AT_SN', 'DP'], null, malSGGrunnlag()),
  vilkar: vilkarMedUtfall(vilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerMed3Arbeidsforhold2ISammeOrganisasjon = Template.bind({});
ArbeidstakerMed3Arbeidsforhold2ISammeOrganisasjon.args = {
  aksjonspunkter: [],
  readOnly: false,
  beregningsgrunnlag: lagBG([malPeriode([lagArbeidsandel(1, lagArbeidsforhold('999999999', 'abc123abc123abc123', 'abc123abc123abc123'),
    150000, null, false, false),
  lagArbeidsandel(2, lagArbeidsforhold('999999999', 'osifgjoiwqhøqeh', 'osifgjoiwqhøqeh'),
    150000, null, false, false),
  lagArbeidsandel(2, lagArbeidsforhold('999999998', 'osifgjoiwqhøqeh', 'osifgjoiwqhøqeh'),
    150000, null, false, false)])],
  ['AT'], null, malSGGrunnlag()),
  vilkar: vilkarMedUtfall(vilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerAvslagHalvG = Template.bind({});
ArbeidstakerAvslagHalvG.args = {
  aksjonspunkter: [],
  readOnly: false,
  beregningsgrunnlag: lagBG([malPeriode([lagArbeidsandel(1, malArbeidsorhold(), 30000, null, false, false)])],
    ['AT'], null, malSGGrunnlag()),
  vilkar: vilkarMedUtfall(vilkarUtfallType.IKKE_OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerMedAksjonspunktBehandlet = Template.bind({});
ArbeidstakerMedAksjonspunktBehandlet.args = {
  aksjonspunkter: [lagAPMedKode(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS, 'Dette er en begrunnelse')],
  readOnly: true,
  beregningsgrunnlag: lagBG([malPeriode([lagArbeidsandel(1, malArbeidsorhold(), 30000, 333333, true, false)])],
    ['AT'], null, malSGGrunnlagAvvik()),
  vilkar: vilkarMedUtfall(vilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const FrilansMedAvvik = Template.bind({});
FrilansMedAvvik.args = {
  aksjonspunkter: [lagAPMedKode(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
  readOnly: false,
  beregningsgrunnlag: lagBG([malPeriode([lagFrilansandel(1, 200000, null, true)])],
    ['FL'], null, malSGGrunnlagAvvik()),
  vilkar: vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const SelvstendigNæringsdrivendeUtenAksjonspunkt = Template.bind({});
SelvstendigNæringsdrivendeUtenAksjonspunkt.args = {
  aksjonspunkter: [],
  readOnly: false,
  beregningsgrunnlag: lagBG([malPeriode([lagSNMedPGI(1, 200000, null, false, false, lagNæring(false, false))])],
    ['SN'], null, null),
  vilkar: vilkarMedUtfall(vilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const SelvstendigNæringsdrivendeNyoppstartetAksjonspunkt = Template.bind({});
SelvstendigNæringsdrivendeNyoppstartetAksjonspunkt.args = {
  aksjonspunkter: [lagAPMedKode(aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE)],
  readOnly: false,
  beregningsgrunnlag: lagBG([malPeriode([lagSNMedPGI(1, 200000, null, true, false, lagNæring(false, true))])],
    ['SN'], null, malSGGrunnlagAvvik()),
  vilkar: vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const SelvstendigNæringsdrivendNyIArbeidslivet = Template.bind({});
SelvstendigNæringsdrivendNyIArbeidslivet.args = {
  aksjonspunkter: [lagAPMedKode(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET)],
  readOnly: false,
  beregningsgrunnlag: lagBG([malPeriode([lagSNMedPGI(1, 200000, null, true, true, lagNæring(false, false))])],
    ['SN'], null, null),
  vilkar: vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerOgSelvstendigNæringsdrivendeSnStorreEnnAtOgStorreEnn6g = Template.bind({});
ArbeidstakerOgSelvstendigNæringsdrivendeSnStorreEnnAtOgStorreEnn6g.args = {
  aksjonspunkter: [],
  readOnly: false,
  beregningsgrunnlag: lagBG([malPeriode([lagSNMedPGI(1, 600000, null, false, false, lagNæring(false, false)),
    lagArbeidsandel(2, malArbeidsorhold(), 200000, null, false, false)])],
  ['AT_SN'], null, null),
  vilkar: vilkarMedUtfall(vilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const YtelseFraNav = Template.bind({});
YtelseFraNav.args = {
  aksjonspunkter: [],
  readOnly: false,
  beregningsgrunnlag: lagBG([malPeriode([lagGenerellAndel(1, aktivitetStatus.KUN_YTELSE, 325845)])],
    ['kun_YTELSE'], null, null),
  vilkar: vilkarMedUtfall(vilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerOgAAPMedAksjonspunkt = Template.bind({});
ArbeidstakerOgAAPMedAksjonspunkt.args = {
  aksjonspunkter: [lagAPMedKode(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
  readOnly: false,
  beregningsgrunnlag: lagBG([malPeriode([lagArbeidsandel(1, malArbeidsorhold(), 325845, null, true, false),
    lagGenerellAndel(1, aktivitetStatus.ARBEIDSAVKLARINGSPENGER, 100000)])],
  ['KUN_YTELSE', 'AT'], null, malSGGrunnlagAvvik()),
  vilkar: vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const FrilansDagpengerOgSelvstendigNæringsdrivende = Template.bind({});
FrilansDagpengerOgSelvstendigNæringsdrivende.args = {
  aksjonspunkter: [lagAPMedKode(aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE)],
  readOnly: false,
  beregningsgrunnlag: lagBG([malPeriode([lagFrilansandel(1, 100500, null, false),
    lagSNMedPGI(2, 500000, null, true, false, lagNæring(false, true)),
    lagGenerellAndel(3, aktivitetStatus.DAGPENGER, 100500)])],
  ['FL_SN', 'DP'], null, malSGGrunnlagAvvik()),
  vilkar: vilkarMedUtfall(vilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
