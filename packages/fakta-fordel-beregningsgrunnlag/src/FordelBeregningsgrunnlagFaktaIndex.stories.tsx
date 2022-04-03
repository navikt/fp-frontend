import React from 'react';
import { action } from '@storybook/addon-actions';

import inntektskategorier from '@fpsak-frontend/kodeverk/src/inntektskategorier';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import FordelBeregningsgrunnlagFaktaIndex from '@fpsak-frontend/fakta-fordel-beregningsgrunnlag';
import periodeAarsak from '@fpsak-frontend/kodeverk/src/periodeAarsak';
import {
  Behandling,
  Beregningsgrunnlag,
  FaktaOmFordeling,
  ArbeidsforholdTilFordeling,
  BeregningsgrunnlagPeriodeProp,
  BeregningsgrunnlagAndel,
  FordelBeregningsgrunnlagPeriode,
  FordelBeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
} from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import { Story } from '@storybook/react';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import FaktaAksjonspunkt, { ProsessAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import {
  bgUtenDelvisRefusjon as vurderRefusjonBG,
  bgMedDelvisRefusjon as vurderDelvisRefBG,
  aksjonspunkt as vurderRefusjonAP,
} from '../testdata/VurderRefusjon';
import { beregningsgrunnlag as bgArbeidOgGradertNæring, aksjonspunkt as apArbeidOgGradertNæring } from '../testdata/ArbeidOgGradertNaring';
import { beregningsgrunnlag as bgMedNaturalytelse, aksjonspunkt as apMedNaturalytelse } from '../testdata/NyttArbeidOgNaturalytelse';

type Writeable<T> = { -readonly [P in keyof T]: T[P] };

const agOpplysninger = {
  123456789: {
    navn: 'Arbeidsgiveren',
    identifikator: '123456789',
    erPrivatPerson: false,
  },
  123456700: {
    navn: 'Arbeidsgiveren',
    identifikator: '123456700',
    erPrivatPerson: false,
  },
  922745943: {
    navn: 'Arbeidsgiveren',
    identifikator: '922745943',
    erPrivatPerson: false,
  },
  883551222: {
    navn: 'Arbeidsgiveren',
    identifikator: '883551222',
    erPrivatPerson: false,
  },
  991945970: {
    navn: 'Arbeidsgiveren',
    identifikator: '991945970',
    erPrivatPerson: false,
  },
  999999999: {
    navn: 'KATOLSK KEBAB A/S',
    identifikator: '999999999',
    erPrivatPerson: false,
  },
  999999998: {
    navn: 'JENS MAGNE',
    identifikator: '999999998',
    erPrivatPerson: true,
    fødselsdato: '2000-01-01',
  },
  910909088: {
    navn: 'BEDRIFT AS',
    identifikator: '910909088',
    erPrivatPerson: false,
  },
};

const behandling = {
  uuid: '1',
  versjon: 1,
  type: 'BT-003',
} as Behandling;

const merknaderFraBeslutter = {
  notAccepted: false,
};

const fordelAP = ([{
  definisjon: aksjonspunktCodes.FORDEL_BEREGNINGSGRUNNLAG,
  status: 'OPPR',
  erAktivt: true,
  kanLoses: true,
}]);

export default {
  title: 'fakta/fakta-fordel-beregningsgrunnlag',
  component: FordelBeregningsgrunnlagFaktaIndex,
};

const Template: Story<{
  readOnly: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt) => Promise<void>;
}> = ({
  readOnly,
  beregningsgrunnlag,
  submitCallback,
  aksjonspunkter,
}) => (
  <FordelBeregningsgrunnlagFaktaIndex
    behandling={behandling}
    beregningsgrunnlag={beregningsgrunnlag}
    aksjonspunkter={aksjonspunkter}
    submitCallback={submitCallback}
    readOnly={readOnly}
    alleKodeverk={alleKodeverk as any}
    arbeidsgiverOpplysningerPerId={agOpplysninger}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    harApneAksjonspunkter={!!aksjonspunkter}
    submittable
  />
);

const lagBGAndel = (andelsnr: number, aktivitetstatuskode: string, beregnet: number): Writeable<BeregningsgrunnlagAndel> => ({
  aktivitetStatus: aktivitetstatuskode,
  beregningsperiodeFom: '2019-06-01',
  beregningsperiodeTom: '2019-08-31',
  beregnetPrAar: beregnet,
  bruttoPrAar: beregnet,
  andelsnr,
  erTilkommetAndel: false,
});

const lagBGPeriode = (andelsliste: BeregningsgrunnlagAndel[], periodeAarsaker: string[], fom: string, tom?: string): BeregningsgrunnlagPeriodeProp => {
  const sum = andelsliste.reduce((acc, andel) => acc + (andel.beregnetPrAar ? andel.beregnetPrAar : 0), 0);
  return {
    beregningsgrunnlagPeriodeFom: fom,
    beregningsgrunnlagPeriodeTom: tom,
    beregnetPrAar: sum,
    bruttoPrAar: sum,
    bruttoInkludertBortfaltNaturalytelsePrAar: sum,
    periodeAarsaker,
    beregningsgrunnlagPrStatusOgAndel: andelsliste,
  };
};

const lagBG = (perioder: BeregningsgrunnlagPeriodeProp[], faktaOmFordeling: FaktaOmFordeling): Beregningsgrunnlag => ({
  skjaeringstidspunktBeregning: '2019-09-16',
  aktivitetStatus: [],
  dekningsgrad: null,
  grunnbeløp: null,
  erOverstyrtInntekt: null,
  beregningsgrunnlagPeriode: perioder,
  ledetekstBrutto: 'Brutto beregningsgrunnlag',
  ledetekstAvkortet: 'Avkortet beregningsgrunnlag (6G=599148)',
  ledetekstRedusert: 'Redusert beregningsgrunnlag (100%)',
  halvG: 49929,
  hjemmel: 'F_14_7_8_30',
  faktaOmFordeling,
  årsinntektVisningstall: 360000,
} as Beregningsgrunnlag);

const lagFaktaOmFordeling = (arbfor: ArbeidsforholdTilFordeling[], perioder: FordelBeregningsgrunnlagPeriode[]): FaktaOmFordeling => ({
  fordelBeregningsgrunnlag: {
    arbeidsforholdTilFordeling: arbfor,
    fordelBeregningsgrunnlagPerioder: perioder,
  },
});

const lagArbforTilFordeling = (arbGiverId: string, arbId: string, refKrav: number, refKravFom: string): ArbeidsforholdTilFordeling => ({
  arbeidsforholdId: arbId,
  arbeidsforholdType: 'ARBEID',
  arbeidsgiverIdent: arbGiverId,
  eksternArbeidsforholdId: 'ARB001-001',
  opphoersdato: '2020-10-27',
  organisasjonstype: 'VIRKSOMHET',
  perioderMedGraderingEllerRefusjon: [
    {
      erRefusjon: true,
      erGradering: false,
      fom: refKravFom,
    },
  ],
  refusjonPrAar: refKrav,
  startdato: '2019-11-27',
});

const mapIKKode = (bgStatus: string): string => {
  switch (bgStatus) {
    case 'AT':
      return inntektskategorier.ARBEIDSTAKER;
    case 'AAP':
      return inntektskategorier.ARBEIDSAVKLARINGSPENGER;
    case 'FL':
      return inntektskategorier.FRILANSER;
    case 'SN':
      return inntektskategorier.SELVSTENDIG_NÆRINGSDRIVENDE;
    default:
      return inntektskategorier.UDEFINERT;
  }
};

const lagFordelingsandel = (andelsnr: number, status: string, ref: number, fordelt: number): Writeable<FordelBeregningsgrunnlagAndel> => ({
  aktivitetStatus: status,
  andelsnr,
  arbeidsforholdType: '-',
  andelIArbeid: [0],
  fordeltPrAar: fordelt,
  inntektskategori: mapIKKode(status),
  lagtTilAvSaksbehandler: false,
  nyttArbeidsforhold: false,
  refusjonskravFraInntektsmeldingPrAar: ref,
  refusjonskravPrAar: ref,
});

const lagFordelPeriode = (
  fordelAndeler: FordelBeregningsgrunnlagAndel[],
  graderingEllerRef: boolean,
  skalKunneEndreRef: boolean,
  fom: string,
  tom?: string,
): FordelBeregningsgrunnlagPeriode => ({
  fom,
  fordelBeregningsgrunnlagAndeler: fordelAndeler,
  skalRedigereInntekt: graderingEllerRef,
  skalPreutfyllesMedBeregningsgrunnlag: false,
  skalKunneEndreRefusjon: skalKunneEndreRef,
  tom,
});

const lagArbeidsforhold = (arbeidsgiverId: string, arbeidsforholdId: string, refKrav: number): BeregningsgrunnlagArbeidsforhold => ({
  arbeidsgiverIdent: arbeidsgiverId,
  startdato: '2018-10-09',
  arbeidsforholdId,
  arbeidsforholdType: 'ARBEID',
  refusjonPrAar: refKrav,
  organisasjonstype: 'VIRKSOMHET',
});

export const ArbeidOgGradertNæringUtenBeregningsgrunnlag = Template.bind({});
ArbeidOgGradertNæringUtenBeregningsgrunnlag.args = {
  aksjonspunkter: apArbeidOgGradertNæring,
  readOnly: false,
  beregningsgrunnlag: bgArbeidOgGradertNæring,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

// export const tilkommetArbeidMedFlyttingAvNaturalytelse = () => (
//   <FordelBeregningsgrunnlagFaktaIndex
//     behandling={behandling}
//     alleKodeverk={alleKodeverk as any}
//     alleMerknaderFraBeslutter={{
//       [aksjonspunktCodes.FORDEL_BEREGNINGSGRUNNLAG]: merknaderFraBeslutter,
//     }}
//     submitCallback={action('button-click') as (data: any) => Promise<any>}
//     readOnly={false}
//     beregningsgrunnlag={bgMedNaturalytelse}
//     aksjonspunkter={apMedNaturalytelse}
//     harApneAksjonspunkter
//     submittable
//     arbeidsgiverOpplysningerPerId={agOpplysninger}
//     setFormData={() => undefined}
//   />
// );
//
// export const aapOgRefusjon = () => {
//   const førsteAndeler = [lagFordelingsandel(1, 'AAP', 0, 0)];
//   const førstePeriode = lagFordelPeriode(førsteAndeler, false, false, '2019-08-05', '2019-11-26');
//   const andreAndeler = [lagFordelingsandel(2, 'AAP', 0, 0), lagFordelingsandel(1, 'AT', 0, 0)];
//   const arbeidsforhold = lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000);
//   andreAndeler[1].arbeidsforhold = arbeidsforhold;
//   const andrePeriode = lagFordelPeriode(andreAndeler, true, false, '2019-11-27');
//   const arbfor = lagArbforTilFordeling('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000, '2019-11-27');
//   const faktaOmFordeling = lagFaktaOmFordeling([arbfor], [førstePeriode, andrePeriode]);
//
//   const førsteBGPeriode = lagBGPeriode([lagBGAndel(1, 'AAP', 100000)], [], '2019-08-05', '2019-11-26');
//   const atAndel = lagBGAndel(1, 'AT', 300000);
//   atAndel.arbeidsforhold = arbeidsforhold;
//   const aapAndel = lagBGAndel(2, 'AAP', 100000);
//   const andreBGPperiode = lagBGPeriode([aapAndel, atAndel], [periodeAarsak.ENDRING_I_REFUSJONSKRAV], '2019-11-27');
//   const bg = lagBG([førsteBGPeriode, andreBGPperiode], faktaOmFordeling);
//   return (
//     <FordelBeregningsgrunnlagFaktaIndex
//       behandling={behandling}
//       alleKodeverk={alleKodeverk as any}
//       alleMerknaderFraBeslutter={{
//         [aksjonspunktCodes.FORDEL_BEREGNINGSGRUNNLAG]: merknaderFraBeslutter,
//       }}
//       submitCallback={action('button-click') as (data: any) => Promise<any>}
//       readOnly={false}
//       beregningsgrunnlag={bg}
//       aksjonspunkter={fordelAP}
//       harApneAksjonspunkter
//       submittable
//       arbeidsgiverOpplysningerPerId={agOpplysninger}
//       setFormData={() => undefined}
//     />
//   );
// };
//
// export const kanEndreRefusjonskrav = () => {
//   const førsteAndeler = [lagFordelingsandel(1, 'AAP', 0, 0)];
//   const førstePeriode = lagFordelPeriode(førsteAndeler, false, false, '2019-08-05', '2019-11-26');
//   const andreAndeler = [lagFordelingsandel(2, 'AAP', 0, 0), lagFordelingsandel(1, 'AT', 300000, 0)];
//   const arbeidsforhold = lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000);
//   andreAndeler[1].arbeidsforhold = arbeidsforhold;
//   const andrePeriode = lagFordelPeriode(andreAndeler, true, true, '2019-11-27');
//   const arbfor = lagArbforTilFordeling('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000, '2019-11-27');
//   const faktaOmFordeling = lagFaktaOmFordeling([arbfor], [førstePeriode, andrePeriode]);
//
//   const førsteBGPeriode = lagBGPeriode([lagBGAndel(1, 'AAP', 100000)], [], '2019-08-05', '2019-11-26');
//   const atAndel = lagBGAndel(1, 'AT', 300000);
//   atAndel.arbeidsforhold = arbeidsforhold;
//   const aapAndel = lagBGAndel(2, 'AAP', 100000);
//   const andreBGPperiode = lagBGPeriode([aapAndel, atAndel], [periodeAarsak.ENDRING_I_REFUSJONSKRAV], '2019-11-27');
//   const bg = lagBG([førsteBGPeriode, andreBGPperiode], faktaOmFordeling);
//   return (
//     <FordelBeregningsgrunnlagFaktaIndex
//       behandling={behandling}
//       alleKodeverk={alleKodeverk as any}
//       alleMerknaderFraBeslutter={{
//         [aksjonspunktCodes.FORDEL_BEREGNINGSGRUNNLAG]: merknaderFraBeslutter,
//       }}
//       submitCallback={action('button-click') as (data: any) => Promise<any>}
//       readOnly={false}
//       beregningsgrunnlag={bg}
//       aksjonspunkter={fordelAP}
//       harApneAksjonspunkter
//       submittable
//       arbeidsgiverOpplysningerPerId={agOpplysninger}
//       setFormData={() => undefined}
//     />
//   );
// };
//
// export const skalSlåSammenNaturalytelseperioder = () => {
//   const arbeidsforholdEn = lagArbeidsforhold('965847123', 'AD-ASD-ADF-SADGF-ASGASDF-ÅTYIUOH', 500000);
//   const arbeidsforholdTo = lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000);
//
//   // Første periode
//   const førsteFordelAndel = lagFordelingsandel(1, 'AT', 0, 0);
//   førsteFordelAndel.arbeidsforhold = arbeidsforholdEn;
//   const førstePeriode = lagFordelPeriode([førsteFordelAndel], false, false, '2019-08-05', '2019-11-26');
//   const førsteBGAndel = lagBGAndel(1, 'AT', 100000);
//   førsteBGAndel.arbeidsforhold = arbeidsforholdEn;
//   const førsteBGPeriode = lagBGPeriode([førsteBGAndel], [], '2019-08-05', '2019-11-26');
//
//   // Andre periode
//   const andreFordelAndel = lagFordelingsandel(1, 'AT', 0, 0);
//   andreFordelAndel.arbeidsforhold = arbeidsforholdEn;
//   const andrePeriode = lagFordelPeriode([andreFordelAndel], false, false, '2019-11-27', '2019-12-05');
//   const andreBGAndel = lagBGAndel(1, 'AT', 100000);
//   andreBGAndel.arbeidsforhold = arbeidsforholdEn;
//   const andreBGPperiode = lagBGPeriode([andreBGAndel], [periodeAarsak.NATURALYTELSE_BORTFALT], '2019-11-27', '2019-12-05');
//
//   // Tredje periode
//   const tredjeAndeler = [lagFordelingsandel(1, 'AT', 0, 0), lagFordelingsandel(2, 'AT', 300000, 0)];
//   tredjeAndeler[0].arbeidsforhold = arbeidsforholdEn;
//   tredjeAndeler[1].arbeidsforhold = arbeidsforholdTo;
//   const tredjePeriode = lagFordelPeriode(tredjeAndeler, true, true, '2019-12-06');
//   const atAndel = lagBGAndel(1, 'AT', 100000);
//   atAndel.arbeidsforhold = arbeidsforholdEn;
//   const atAndelTo = lagBGAndel(2, 'AT', 300000);
//   atAndelTo.arbeidsforhold = arbeidsforholdTo;
//   const tredjeBGPeriode = lagBGPeriode([atAndel, atAndelTo], [periodeAarsak.ENDRING_I_REFUSJONSKRAV], '2019-12-06');
//
//   const arbfor = lagArbforTilFordeling('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000, '2019-12-06');
//   const faktaOmFordeling = lagFaktaOmFordeling([arbfor], [førstePeriode, andrePeriode, tredjePeriode]);
//
//   const bg = lagBG([førsteBGPeriode, andreBGPperiode, tredjeBGPeriode], faktaOmFordeling);
//   return (
//     <FordelBeregningsgrunnlagFaktaIndex
//       behandling={behandling}
//       alleKodeverk={alleKodeverk as any}
//       alleMerknaderFraBeslutter={{
//         [aksjonspunktCodes.FORDEL_BEREGNINGSGRUNNLAG]: merknaderFraBeslutter,
//       }}
//       submitCallback={action('button-click') as (data: any) => Promise<any>}
//       readOnly={false}
//       beregningsgrunnlag={bg}
//       aksjonspunkter={fordelAP}
//       harApneAksjonspunkter
//       submittable
//       arbeidsgiverOpplysningerPerId={agOpplysninger}
//       setFormData={() => undefined}
//     />
//   );
// };
//
// export const viseVurderTilkommetRefusjonskrav = () => (
//   <FordelBeregningsgrunnlagFaktaIndex
//     behandling={behandling}
//     alleKodeverk={alleKodeverk as any}
//     alleMerknaderFraBeslutter={{
//       [aksjonspunktCodes.VURDER_REFUSJON_BERGRUNN]: merknaderFraBeslutter,
//     }}
//     submitCallback={action('button-click') as (data: any) => Promise<any>}
//     readOnly={false}
//     beregningsgrunnlag={vurderRefusjonBG}
//     aksjonspunkter={vurderRefusjonAP}
//     harApneAksjonspunkter
//     submittable
//     arbeidsgiverOpplysningerPerId={agOpplysninger}
//     setFormData={() => undefined}
//   />
// );
//
// export const skalVurdereTilkommetØktRefusjonPåTidligereInnvilgetDelvisRefusjon = () => (
//   <FordelBeregningsgrunnlagFaktaIndex
//     behandling={behandling}
//     alleKodeverk={alleKodeverk as any}
//     alleMerknaderFraBeslutter={{
//       [aksjonspunktCodes.VURDER_REFUSJON_BERGRUNN]: merknaderFraBeslutter,
//     }}
//     submitCallback={action('button-click') as (data: any) => Promise<any>}
//     readOnly={false}
//     beregningsgrunnlag={vurderDelvisRefBG}
//     aksjonspunkter={vurderRefusjonAP}
//     harApneAksjonspunkter
//     submittable
//     arbeidsgiverOpplysningerPerId={agOpplysninger}
//     setFormData={() => undefined}
//   />
// );
