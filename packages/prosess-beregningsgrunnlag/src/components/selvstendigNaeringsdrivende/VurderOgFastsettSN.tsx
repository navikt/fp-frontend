import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { behandlingFormValueSelector } from '@fpsak-frontend/form';
import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';

import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import { BeregningsgrunnlagAndel } from '@fpsak-frontend/types';
import VurderVarigEndretEllerNyoppstartetSN, { varigEndringRadioname, VurderVarigEndretEllerNyoppstartetSNImpl } from './VurderVarigEndretEllerNyoppstartetSN';
import FastsettSN, { FastsettSNImpl } from './FastsettSN';

const FORM_NAME = 'BeregningForm';
const {
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
} = aksjonspunktCodes;

const finnSnAksjonspunkt = (aksjonspunkter: Aksjonspunkt[]): Aksjonspunkt => aksjonspunkter && aksjonspunkter.find(
  (ap) => ap.definisjon.kode === VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE
    || ap.definisjon.kode === FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
);

type OwnProps = {
    readOnly: boolean;
    erVarigEndretNaering?: boolean;
    isAksjonspunktClosed: boolean;
    erNyArbLivet: boolean;
    erVarigEndring: boolean;
    erNyoppstartet: boolean;
    endretTekst?: React.ReactNode;
    gjeldendeAksjonspunkter: Aksjonspunkt[];
};

interface StaticFunctions {
  buildInitialValues?: (relevanteAndeler: BeregningsgrunnlagAndel[], gjeldendeAksjonspunkter: Aksjonspunkt[]) => any;
  transformValues?: (values: any, gjeldendeAksjonspunkter: Aksjonspunkt[]) => any;
}

/**
 * VurderOgFastsettSNImpl
 *
 * Containerkomponent. Setter opp riktige forms basert på hvilket aksjonspunkt vi har og hva som er valgt i radioknapper
 */
export const VurderOgFastsettSNImpl: FunctionComponent<OwnProps> & StaticFunctions = ({
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

const mapStateToPropsFactory = (initialState, ownPropsStatic) => {
  const aksjonspunkt = finnSnAksjonspunkt(ownPropsStatic.gjeldendeAksjonspunkter);
  return (state, ownProps) => ({
    erVarigEndretNaering: behandlingFormValueSelector(FORM_NAME, ownProps.behandlingId, ownProps.behandlingVersjon)(
      state, 'erVarigEndretNaering',
    ),
    isAksjonspunktClosed: !isAksjonspunktOpen(aksjonspunkt.status.kode),
  });
};

const VurderOgFastsettSN = connect(mapStateToPropsFactory)(VurderOgFastsettSNImpl);

VurderOgFastsettSN.buildInitialValues = (relevanteAndeler, gjeldendeAksjonspunkter) => ({
  ...VurderVarigEndretEllerNyoppstartetSNImpl.buildInitialValues(relevanteAndeler, gjeldendeAksjonspunkter),
  ...FastsettSNImpl.buildInitialValues(relevanteAndeler, gjeldendeAksjonspunkter),
});

const transformValuesMedVarigEndretNyoppstartet = (values, gjeldendeAksjonspunkter) => {
  // Utgått aksjonspunkt som må håndteres intill data er migrert
  if (hasAksjonspunkt(FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE, gjeldendeAksjonspunkter)) {
    const aksjonspunkter = [{
      kode: VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
      ...VurderVarigEndretEllerNyoppstartetSNImpl.transformValues(values),
    }];
    aksjonspunkter.push({
      kode: FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
      ...FastsettSNImpl.transformValuesMedBegrunnelse(values),
    });
    return aksjonspunkter;
  }
  return [{
    kode: VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
    ...VurderVarigEndretEllerNyoppstartetSNImpl.transformValues(values),
  }];
};

VurderOgFastsettSN.transformValues = (values, gjeldendeAksjonspunkter) => {
  if (hasAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, gjeldendeAksjonspunkter)) {
    return [{
      kode: FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
      ...FastsettSNImpl.transformValuesMedBegrunnelse(values),
    }];
  }
  if (values[varigEndringRadioname]) {
    return transformValuesMedVarigEndretNyoppstartet(values, gjeldendeAksjonspunkter);
  }
  return [{
    kode: VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
    ...VurderVarigEndretEllerNyoppstartetSNImpl.transformValues(values),
  }];
};

export default VurderOgFastsettSN;
