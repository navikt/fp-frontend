import React, { FunctionComponent } from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { removeSpacesFromNumber } from '@fpsak-frontend/utils';

import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagPeriodeProp,
  KodeverkMedNavn,
  RelevanteStatuserProp,
} from '@fpsak-frontend/types';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import YtelserFraInfotrygd from '../tilstotendeYtelser/YtelserFraInfotrygd';
import GrunnlagForAarsinntektPanelSN from '../selvstendigNaeringsdrivende/GrunnlagForAarsinntektPanelSN';
import TilstotendeYtelser from '../tilstotendeYtelser/TilstotendeYtelser';

import MilitaerPanel from '../militær/MilitaerPanel';
import { AksjonspunktBehandlerTidsbegrensetImpl } from '../arbeidstaker/AksjonspunktBehandlerTB';
import GrunnlagForAarsinntektPanelFL from '../frilanser/GrunnlagForAarsinntektPanelFL';
import SammenlignsgrunnlagAOrdningen from '../fellesPaneler/SammenligningsgrunnlagAOrdningen';
import GrunnlagForAarsinntektPanelAT from '../arbeidstaker/GrunnlagForAarsinntektPanelAT';

import NaeringsopplysningsPanel from '../selvstendigNaeringsdrivende/NaeringsOpplysningsPanel';
import beregningStyles from './beregningsgrunnlag.less';

// ------------------------------------------------------------------------------------------ //
// Variables
// ------------------------------------------------------------------------------------------ //

export const TEKSTFELTNAVN_BEGRUNN_DEKNINGSGRAD_ENDRING = 'begrunnDekningsgradEndring';

const {
  FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  VURDER_DEKNINGSGRAD,
} = aksjonspunktCodes;

// ------------------------------------------------------------------------------------------ //
// Methods
// ------------------------------------------------------------------------------------------ //

const finnAksjonspunktForATFL = (gjeldendeAksjonspunkter) => gjeldendeAksjonspunkter && gjeldendeAksjonspunkter.find(
  (ap) => ap.definisjon.kode === FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS
  || ap.definisjon.kode === FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
);

const finnAksjonspunktForVurderDekningsgrad = (gjeldendeAksjonspunkter) => gjeldendeAksjonspunkter
  && gjeldendeAksjonspunkter.find((ap) => ap.definisjon.kode === VURDER_DEKNINGSGRAD);

const finnAlleAndelerIFørstePeriode = (allePerioder) => {
  if (allePerioder && allePerioder.length > 0) {
    return allePerioder[0].beregningsgrunnlagPrStatusOgAndel;
  }
  return undefined;
};

const createRelevantePaneler = (alleAndelerIForstePeriode,
  gjeldendeAksjonspunkter,
  relevanteStatuser,
  allePerioder,
  readOnly,
  gjelderBesteberegning,
  behandlingId,
  behandlingVersjon,
  alleKodeverk,
  sammenligningsGrunnlagInntekter,
  skjeringstidspunktDato,
  arbeidsgiverOpplysningerPerId) => (
    <div className={beregningStyles.panelLeft}>
      { relevanteStatuser.isArbeidstaker
      && (
        <>
          <GrunnlagForAarsinntektPanelAT
            alleAndeler={alleAndelerIForstePeriode}
            aksjonspunkter={gjeldendeAksjonspunkter}
            allePerioder={allePerioder}
            readOnly={readOnly}
            isKombinasjonsstatus={relevanteStatuser.isKombinasjonsstatus}
            alleKodeverk={alleKodeverk}
            behandlingId={behandlingId}
            behandlingVersjon={behandlingVersjon}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
        </>
      )}
      { relevanteStatuser.isFrilanser
    && (
      <>
        <GrunnlagForAarsinntektPanelFL
          alleAndeler={alleAndelerIForstePeriode}
        />
      </>
    )}
      {(relevanteStatuser.harDagpengerEllerAAP)
      && (
        <div>
          <TilstotendeYtelser
            alleAndeler={alleAndelerIForstePeriode}
            relevanteStatuser={relevanteStatuser}
            gjelderBesteberegning={gjelderBesteberegning}
          />
        </div>
      )}
      {(relevanteStatuser.isMilitaer)
      && (
        <>
          <MilitaerPanel
            alleAndeler={alleAndelerIForstePeriode}
          />
        </>
      )}
      {(relevanteStatuser.harAndreTilstotendeYtelser)
      && (
        <>
          <YtelserFraInfotrygd
            bruttoPrAar={allePerioder[0].bruttoPrAar}
          />
        </>
      )}

      { relevanteStatuser.isSelvstendigNaeringsdrivende
      && (
        <>
          <GrunnlagForAarsinntektPanelSN
            alleAndeler={alleAndelerIForstePeriode}
          />
          <NaeringsopplysningsPanel
            alleAndelerIForstePeriode={alleAndelerIForstePeriode}
          />
        </>
      )}
      { !relevanteStatuser.isSelvstendigNaeringsdrivende
      && sammenligningsGrunnlagInntekter
      && skjeringstidspunktDato
      && (relevanteStatuser.isFrilanser || relevanteStatuser.isArbeidstaker)
      && (
        <>
          <SammenlignsgrunnlagAOrdningen
            sammenligningsGrunnlagInntekter={sammenligningsGrunnlagInntekter}
            relevanteStatuser={relevanteStatuser}
            skjeringstidspunktDato={skjeringstidspunktDato}
          />
        </>
      )}
    </div>
);

interface StaticFunctions {
  buildInitialValues?: (gjeldendeAksjonspunkter: Aksjonspunkt[]) => any;
  transformValues: (values: any, allePerioder: BeregningsgrunnlagPeriodeProp[]) => any;
}

type OwnProps = {
    readOnly: boolean;
    gjeldendeAksjonspunkter: Aksjonspunkt[];
    relevanteStatuser: RelevanteStatuserProp;
    allePerioder?: BeregningsgrunnlagPeriodeProp[];
    gjelderBesteberegning: boolean;
    behandlingId: number;
    behandlingVersjon: number;
    alleKodeverk: {[key: string]: KodeverkMedNavn[]};
    sammenligningsGrunnlagInntekter?: any[];
    skjeringstidspunktDato?: string;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

// ------------------------------------------------------------------------------------------ //
// Component : BeregningsgrunnlagImpl
// ------------------------------------------------------------------------------------------ //
/**
 * Beregningsgrunnlag
 *
 * Presentasjonsskomponent. Holder på alle komponenter relatert til å vise beregningsgrunnlaget til de forskjellige
 * statusene og viser disse samlet i en faktagruppe.
 */
const Beregningsgrunnlag: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  relevanteStatuser,
  gjeldendeAksjonspunkter,
  allePerioder,
  gjelderBesteberegning,
  behandlingId,
  behandlingVersjon,
  alleKodeverk,
  sammenligningsGrunnlagInntekter,
  skjeringstidspunktDato,
  arbeidsgiverOpplysningerPerId,
}) => {
  const alleAndelerIForstePeriode = finnAlleAndelerIFørstePeriode(allePerioder);
  return (
    createRelevantePaneler(
      alleAndelerIForstePeriode,
      gjeldendeAksjonspunkter,
      relevanteStatuser,
      allePerioder,
      readOnly,
      gjelderBesteberegning,
      behandlingId,
      behandlingVersjon,
      alleKodeverk,
      sammenligningsGrunnlagInntekter,
      skjeringstidspunktDato,
      arbeidsgiverOpplysningerPerId,
    )
  );
};

Beregningsgrunnlag.defaultProps = {
  allePerioder: undefined,
  sammenligningsGrunnlagInntekter: undefined,
  skjeringstidspunktDato: undefined,
};

Beregningsgrunnlag.buildInitialValues = (gjeldendeAksjonspunkter) => {
  const aksjonspunktATFL = finnAksjonspunktForATFL(gjeldendeAksjonspunkter);
  const aksjonspunktVurderDekninsgrad = finnAksjonspunktForVurderDekningsgrad(gjeldendeAksjonspunkter);
  return {
    ATFLVurdering: (aksjonspunktATFL) ? aksjonspunktATFL.begrunnelse : '',
    [TEKSTFELTNAVN_BEGRUNN_DEKNINGSGRAD_ENDRING]: (aksjonspunktVurderDekninsgrad) ? aksjonspunktVurderDekninsgrad.begrunnelse : '',
  };
};
Beregningsgrunnlag.transformValues = (values, allePerioder) => ({
  kode: FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  begrunnelse: values.ATFLVurdering,
  fastsatteTidsbegrensedePerioder: AksjonspunktBehandlerTidsbegrensetImpl.transformValues(values, allePerioder),
  frilansInntekt: values.inntektFrilanser !== undefined ? removeSpacesFromNumber(values.inntektFrilanser) : null,
});

export default Beregningsgrunnlag;
