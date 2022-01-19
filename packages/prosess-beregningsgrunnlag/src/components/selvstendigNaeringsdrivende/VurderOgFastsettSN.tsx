import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';

import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import { BeregningsgrunnlagAndel } from '@fpsak-frontend/types';
import VurderVarigEndretEllerNyoppstartetSN, { VurderVarigEndretEllerNyoppstartetSNImpl } from './VurderVarigEndretEllerNyoppstartetSN';
import FastsettSN, { FastsettSNImpl } from './FastsettSN';
import VurderVarigEndretTransformed, {
  NyIArbeidslivetruttoNæringTransformed,
  NyIArbeidslivetValues,
  VurderOgFastsettValues,
} from '../../types/NaringAksjonspunktTsType';

const FORM_NAME = 'BeregningForm';
const {
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
} = aksjonspunktCodes;

const finnSnAksjonspunkt = (aksjonspunkter: Aksjonspunkt[]): Aksjonspunkt | undefined => aksjonspunkter && aksjonspunkter.find(
  (ap) => ap.definisjon === VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE
    || ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
);

type MappedOwnProps = {
  erVarigEndretNaering?: boolean;
  isAksjonspunktClosed: boolean;
}

type OwnProps = {
    readOnly: boolean;
    erNyArbLivet: boolean;
    erVarigEndring: boolean;
    erNyoppstartet: boolean;
    endretTekst?: React.ReactNode;
    gjeldendeAksjonspunkter: Aksjonspunkt[];
};

interface StaticFunctions {
  buildInitialValues: (relevanteAndeler: BeregningsgrunnlagAndel[], gjeldendeAksjonspunkter: Aksjonspunkt[]) => VurderOgFastsettValues | NyIArbeidslivetValues;
  transformValues: (values: VurderOgFastsettValues | NyIArbeidslivetValues, gjeldendeAksjonspunkter: Aksjonspunkt[])
    => VurderVarigEndretTransformed | NyIArbeidslivetruttoNæringTransformed;
}

/**
 * VurderOgFastsettSNImpl
 *
 * Containerkomponent. Setter opp riktige forms basert på hvilket aksjonspunkt vi har og hva som er valgt i radioknapper
 */
export const VurderOgFastsettSNImpl: FunctionComponent<OwnProps & MappedOwnProps> & StaticFunctions = ({
  readOnly,
  erVarigEndretNaering,
  isAksjonspunktClosed,
  erNyArbLivet,
  erNyoppstartet,
  erVarigEndring,
  gjeldendeAksjonspunkter,
  endretTekst,
}) => {
  if (erNyArbLivet) {
    return (
      <FastsettSN
        readOnly={readOnly}
        isAksjonspunktClosed={isAksjonspunktClosed}
        gjeldendeAksjonspunkter={gjeldendeAksjonspunkter}
        erNyArbLivet={erNyArbLivet}
      />
    );
  }
  return (
    <>
      <VurderVarigEndretEllerNyoppstartetSN
        readOnly={readOnly}
        erVarigEndring={erVarigEndring}
        erNyoppstartet={erNyoppstartet}
        erVarigEndretNaering={erVarigEndretNaering}
        endretTekst={endretTekst}
      />
      {erVarigEndretNaering
      && (
        <FastsettSN
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
          gjeldendeAksjonspunkter={gjeldendeAksjonspunkter}
          erNyArbLivet={erNyArbLivet}
          endretTekst={endretTekst}
        />
      )}
    </>
  );
};

VurderOgFastsettSNImpl.defaultProps = {
  erVarigEndretNaering: undefined,
};

const mapStateToPropsFactory = (initialState: any, ownPropsStatic: OwnProps) => {
  const aksjonspunkt = finnSnAksjonspunkt(ownPropsStatic.gjeldendeAksjonspunkter);
  return (state: any): MappedOwnProps => ({
    erVarigEndretNaering: formValueSelector(FORM_NAME)(state, 'erVarigEndretNaering'),
    isAksjonspunktClosed: aksjonspunkt ? !isAksjonspunktOpen(aksjonspunkt.status) : false,
  });
};

VurderOgFastsettSNImpl.buildInitialValues = (relevanteAndeler: BeregningsgrunnlagAndel[],
  gjeldendeAksjonspunkter: Aksjonspunkt[]): VurderOgFastsettValues | NyIArbeidslivetValues => {
  if (hasAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, gjeldendeAksjonspunkter)) {
    return FastsettSNImpl.buildInitialValuesNyIArbeidslivet(relevanteAndeler, gjeldendeAksjonspunkter);
  }
  return {
    ...VurderVarigEndretEllerNyoppstartetSNImpl.buildInitialValues(relevanteAndeler, gjeldendeAksjonspunkter),
  };
};

VurderOgFastsettSNImpl.transformValues = (values: VurderOgFastsettValues | NyIArbeidslivetValues, gjeldendeAksjonspunkter: Aksjonspunkt[]):
  VurderVarigEndretTransformed | NyIArbeidslivetruttoNæringTransformed => {
  if (hasAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, gjeldendeAksjonspunkter)) {
    return FastsettSNImpl.transformValuesNyIArbeidslivet(values as Required<NyIArbeidslivetValues>);
  }
  return VurderVarigEndretEllerNyoppstartetSNImpl.transformValues(values as Required<VurderOgFastsettValues>);
};

const VurderOgFastsettSN = connect(mapStateToPropsFactory)(VurderOgFastsettSNImpl);

export default VurderOgFastsettSN;
