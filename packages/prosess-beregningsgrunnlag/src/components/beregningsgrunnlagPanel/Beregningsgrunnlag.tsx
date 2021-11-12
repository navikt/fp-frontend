import React, { FunctionComponent, ReactElement } from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { removeSpacesFromNumber } from '@fpsak-frontend/utils';

import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagPeriodeProp,
  BeregningsgrunnlagAndel, Inntektsgrunnlag, AlleKodeverk,
} from '@fpsak-frontend/types';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import YtelserFraInfotrygd from '../tilstotendeYtelser/YtelserFraInfotrygd';
import GrunnlagForAarsinntektPanelSN from '../selvstendigNaeringsdrivende/GrunnlagForAarsinntektPanelSN';
import TilstotendeYtelser from '../tilstotendeYtelser/TilstotendeYtelser';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';

import MilitaerPanel from '../militar/MilitaerPanel';
import { AksjonspunktBehandlerTidsbegrensetImpl } from '../arbeidstaker/AksjonspunktBehandlerTB';
import AksjonspunktBehandlerAT from '../arbeidstaker/AksjonspunktBehandlerAT';

import GrunnlagForAarsinntektPanelFL from '../frilanser/GrunnlagForAarsinntektPanelFL';
import SammenlignsgrunnlagAOrdningen from '../fellesPaneler/SammenligningsgrunnlagAOrdningen';
import GrunnlagForAarsinntektPanelAT from '../arbeidstaker/GrunnlagForAarsinntektPanelAT';

import NaeringsopplysningsPanel from '../selvstendigNaeringsdrivende/NaeringsOpplysningsPanel';
import beregningStyles from './beregningsgrunnlag.less';
import {
  ATFLTransformedValues,
  ATFLDekningsgradBegrunnelseValues, ATFLTidsbegrensetValues, ATFLValues, ATFLTidsbegrensetTransformedValues,
} from '../../types/ATFLAksjonspunktTsType';

export const TEKSTFELTNAVN_BEGRUNN_DEKNINGSGRAD_ENDRING = 'begrunnDekningsgradEndring';

const {
  FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
} = aksjonspunktCodes;

const finnAksjonspunktForATFL = (gjeldendeAksjonspunkter: Aksjonspunkt[]): Aksjonspunkt => gjeldendeAksjonspunkter && gjeldendeAksjonspunkter.find(
  (ap) => ap.definisjon.kode === FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS
  || ap.definisjon.kode === FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
);

const finnAlleAndelerIFørstePeriode = (allePerioder: BeregningsgrunnlagPeriodeProp[]): BeregningsgrunnlagAndel[] => {
  if (allePerioder && allePerioder.length > 0) {
    return allePerioder[0].beregningsgrunnlagPrStatusOgAndel;
  }
  return undefined;
};

const createRelevantePaneler = (alleAndelerIForstePeriode : BeregningsgrunnlagAndel[],
  relevanteStatuser: RelevanteStatuserProp,
  allePerioder: BeregningsgrunnlagPeriodeProp[],
  gjelderBesteberegning: boolean,
  alleKodeverk: AlleKodeverk,
  sammenligningsGrunnlagInntekter: Inntektsgrunnlag,
  skjeringstidspunktDato: string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): ReactElement => ( // NOSONAR TODO splitte i flere komponenter?
    <div className={beregningStyles.panelLeft}>
      { relevanteStatuser.isArbeidstaker
      && (
        <GrunnlagForAarsinntektPanelAT
          alleAndelerIFørstePeriode={alleAndelerIForstePeriode}
          allePerioder={allePerioder}
          alleKodeverk={alleKodeverk}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
      )}
      { relevanteStatuser.isFrilanser
    && (
      <GrunnlagForAarsinntektPanelFL
        alleAndeler={alleAndelerIForstePeriode}
      />
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
        <MilitaerPanel
          alleAndeler={alleAndelerIForstePeriode}
        />
      )}
      {(relevanteStatuser.harAndreTilstotendeYtelser)
      && (
        <YtelserFraInfotrygd
          bruttoPrAar={allePerioder[0].bruttoPrAar}
        />
      )}

      { relevanteStatuser.isSelvstendigNaeringsdrivende
      && (
        <>
          <GrunnlagForAarsinntektPanelSN
            alleAndeler={alleAndelerIForstePeriode}
          />
          <NaeringsopplysningsPanel
            alleAndelerIForstePeriode={alleAndelerIForstePeriode}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
        </>
      )}
      { !relevanteStatuser.isSelvstendigNaeringsdrivende
      && sammenligningsGrunnlagInntekter
      && skjeringstidspunktDato
      && (relevanteStatuser.isFrilanser || relevanteStatuser.isArbeidstaker)
      && (
        <SammenlignsgrunnlagAOrdningen
          sammenligningsGrunnlagInntekter={sammenligningsGrunnlagInntekter}
          skjeringstidspunktDato={skjeringstidspunktDato}
        />
      )}
    </div>
);

interface StaticFunctions {
  buildInitialValues?: (gjeldendeAksjonspunkter: Aksjonspunkt[]) => ATFLDekningsgradBegrunnelseValues;
  transformATFLValues: (values: ATFLValues,
                        relevanteStatuser: RelevanteStatuserProp,
                        alleAndelerIFørstePeriode: BeregningsgrunnlagAndel[]) => ATFLTransformedValues;
  transformATFLTidsbegrensetValues: (values: ATFLTidsbegrensetValues, allePerioder: BeregningsgrunnlagPeriodeProp[]) => ATFLTidsbegrensetTransformedValues;
}

type OwnProps = {
    relevanteStatuser: RelevanteStatuserProp;
    allePerioder?: BeregningsgrunnlagPeriodeProp[];
    gjelderBesteberegning: boolean;
    alleKodeverk: AlleKodeverk;
    sammenligningsGrunnlagInntekter?: Inntektsgrunnlag;
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
  relevanteStatuser,
  allePerioder,
  gjelderBesteberegning,
  alleKodeverk,
  sammenligningsGrunnlagInntekter,
  skjeringstidspunktDato,
  arbeidsgiverOpplysningerPerId,
}) => {
  const alleAndelerIForstePeriode = finnAlleAndelerIFørstePeriode(allePerioder);
  return (
    createRelevantePaneler(
      alleAndelerIForstePeriode,
      relevanteStatuser,
      allePerioder,
      gjelderBesteberegning,
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

Beregningsgrunnlag.buildInitialValues = (gjeldendeAksjonspunkter: Aksjonspunkt[]): ATFLDekningsgradBegrunnelseValues => {
  const aksjonspunktATFL = finnAksjonspunktForATFL(gjeldendeAksjonspunkter);
  return {
    ATFLVurdering: (aksjonspunktATFL) ? aksjonspunktATFL.begrunnelse : '',
  };
};

Beregningsgrunnlag.transformATFLValues = (values: ATFLValues,
  relevanteStatuser: RelevanteStatuserProp,
  alleAndelerIFørstePeriode: BeregningsgrunnlagAndel[]): ATFLTransformedValues => ({
  kode: FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  begrunnelse: values.ATFLVurdering,
  inntektPrAndelList: AksjonspunktBehandlerAT.transformValues(values, relevanteStatuser, alleAndelerIFørstePeriode),
  inntektFrilanser: values.inntektFrilanser !== undefined ? removeSpacesFromNumber(values.inntektFrilanser) : null,
});

Beregningsgrunnlag.transformATFLTidsbegrensetValues = (values: ATFLTidsbegrensetValues,
  allePerioder: BeregningsgrunnlagPeriodeProp[]): ATFLTidsbegrensetTransformedValues => ({
  kode: FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  begrunnelse: values.ATFLVurdering,
  fastsatteTidsbegrensedePerioder: AksjonspunktBehandlerTidsbegrensetImpl.transformValues(values, allePerioder),
  frilansInntekt: values.inntektFrilanser !== undefined ? removeSpacesFromNumber(values.inntektFrilanser) : null,
});

export default Beregningsgrunnlag;
