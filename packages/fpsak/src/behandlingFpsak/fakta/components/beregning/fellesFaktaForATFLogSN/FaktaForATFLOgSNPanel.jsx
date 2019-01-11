import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import faktaOmBeregningTilfelle, { vurderOgFastsettATFLTilfeller } from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import { createSelector } from 'reselect';
import {
  getAksjonspunkter,
  getBeregningsgrunnlag,
  getEndringBeregningsgrunnlagPerioder,
  getFaktaOmBeregning,
  getFaktaOmBeregningTilfellerKoder,
  getKortvarigeArbeidsforhold,
  getTilstøtendeYtelse,
  getKunYtelse,
  getBehandlingIsRevurdering,
  getVurderMottarYtelse,
} from 'behandlingFpsak/behandlingSelectors';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { ElementWrapper, VerticalSpacer } from '@fpsak-frontend/shared-components';
import TilstotendeYtelseForm, { harKunTilstotendeYtelse } from './tilstøtendeYtelse/TilstøtendeYtelseForm';
import TilstotendeYtelseIKombinasjon, { erTilstotendeYtelseIKombinasjon } from './tilstøtendeYtelse/TilstotendeYtelseIKombinasjon';
import TidsbegrensetArbeidsforholdForm from './tidsbegrensetArbeidsforhold/TidsbegrensetArbeidsforholdForm';
import NyoppstartetFLForm from './vurderOgFastsettATFL/forms/NyoppstartetFLForm';
import {
  setFaktaPanelForKunYtelse,
  transformValuesForKunYtelse,
  getKunYtelseValidation,
  buildInitialValuesKunYtelse,
} from './kunYtelse/FastsettBgKunYtelse';
import FastsettEndretBeregningsgrunnlag from './endringBeregningsgrunnlag/FastsettEndretBeregningsgrunnlag';
import {
  getHelpTextsEndringBG,
  harKunTilfellerSomStøtterEndringBG,
} from './endringBeregningsgrunnlag/EndretBeregningsgrunnlagUtils';
import LonnsendringForm from './vurderOgFastsettATFL/forms/LonnsendringForm';
import NyIArbeidslivetSNForm from './nyIArbeidslivet/NyIArbeidslivetSNForm';
import VurderOgFastsettATFL from './vurderOgFastsettATFL/VurderOgFastsettATFL';
import FastsettATFLInntektForm from './vurderOgFastsettATFL/forms/FastsettATFLInntektForm';
import FastsettBBFodendeKvinneForm from './besteberegningFodendeKvinne/FastsettBBFodendeKvinneForm';
import VurderEtterlonnSluttpakkeForm from './etterlønnSluttpakke/VurderEtterlonnSluttpakkeForm';
import FastsettEtterlonnSluttpakkeForm from './etterlønnSluttpakke/FastsettEtterlonnSluttpakkeForm';
import VurderMottarYtelseForm from './vurderOgFastsettATFL/forms/VurderMottarYtelseForm';


const {
  VURDER_FAKTA_FOR_ATFL_SN,
} = aksjonspunktCodes;

const hasAksjonspunkt = (aksjonspunktCode, aksjonspunkter) => aksjonspunkter.some(ap => ap.definisjon.kode === aksjonspunktCode);

export const getValidationFaktaForATFLOgSN = createSelector(
  [getFaktaOmBeregningTilfellerKoder, getEndringBeregningsgrunnlagPerioder, getAksjonspunkter, getKunYtelse, getVurderMottarYtelse],
  (aktivertePaneler, endringBGPerioder, aksjonspunkter, kunYtelse, vurderMottarYtelse) => (values) => {
    if (hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aksjonspunkter)) {
      return {
        ...FastsettEndretBeregningsgrunnlag.validate(values, endringBGPerioder, aktivertePaneler),
        ...TilstotendeYtelseForm.validate(values, aktivertePaneler),
        ...TilstotendeYtelseIKombinasjon.validate(values, endringBGPerioder, aktivertePaneler),
        ...getKunYtelseValidation(values, kunYtelse, endringBGPerioder, aktivertePaneler),
        ...VurderMottarYtelseForm.validate(values, vurderMottarYtelse),
      };
    }
    return null;
  },
);


export const lagHelpTextsForFakta = (aktivertePaneler) => {
  const helpTexts = [];
  if (!harKunTilfellerSomStøtterEndringBG(aktivertePaneler)) {
    helpTexts.push(<FormattedMessage key="VurderTidsbegrensetArbeidsforhold" id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning" />);
  }
  return helpTexts;
};

export const getHelpTextsFaktaForATFLOgSN = createSelector(
  [getFaktaOmBeregningTilfellerKoder, getAksjonspunkter, getHelpTextsEndringBG],
  (aktivertePaneler, aksjonspunkter, helpTextEndringBG) => (hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aksjonspunkter)
    ? helpTextEndringBG.concat(lagHelpTextsForFakta(aktivertePaneler))
    : []),
);

const spacer = (hasShownPanel) => {
  if (hasShownPanel) {
    return <VerticalSpacer twentyPx />;
  }
  return {};
};


const getFaktaPanels = (readOnly, formName, tilfeller, isAksjonspunktClosed, showTableCallback) => {
  const faktaPanels = [];
  let hasShownPanel = false;

  if (erTilstotendeYtelseIKombinasjon(tilfeller)) {
    return [<TilstotendeYtelseIKombinasjon
      key="kombinasjonTY"
      readOnly={readOnly}
      formName={formName}
      tilfeller={tilfeller}
      isAksjonspunktClosed={isAksjonspunktClosed}
      showTableCallback={showTableCallback}
    />];
  }
  tilfeller.forEach((tilfelle) => {
    if (tilfelle === faktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD) {
      hasShownPanel = true;
      faktaPanels.push(
        <ElementWrapper key={tilfelle}>
          <TidsbegrensetArbeidsforholdForm
            readOnly={readOnly}
            isAksjonspunktClosed={isAksjonspunktClosed}
          />
        </ElementWrapper>,
      );
    }
    if (tilfelle === faktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET) {
      hasShownPanel = true;
      faktaPanels.push(
        <ElementWrapper key={tilfelle}>
          {spacer(hasShownPanel)}
          <NyIArbeidslivetSNForm
            readOnly={readOnly}
            isAksjonspunktClosed={isAksjonspunktClosed}
          />
        </ElementWrapper>,
      );
    }
    if (tilfelle === faktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE) {
      hasShownPanel = true;
      faktaPanels.push(
        <ElementWrapper key={tilfelle}>
          {spacer(hasShownPanel)}
          <VurderEtterlonnSluttpakkeForm
            readOnly={readOnly}
            isAksjonspunktClosed={isAksjonspunktClosed}
            formName={formName}
          />
        </ElementWrapper>,
      );
    }
  });
  if (tilfeller.filter(tilfelle => vurderOgFastsettATFLTilfeller.indexOf(tilfelle) !== -1).length !== 0) {
    faktaPanels.push(
      <ElementWrapper key="VurderOgFastsettATFL">
        {spacer(true)}
        <VurderOgFastsettATFL
          readOnly={readOnly}
          formName={formName}
          isAksjonspunktClosed={isAksjonspunktClosed}
          tilfeller={tilfeller}
        />
      </ElementWrapper>,
    );
  }
  if (tilfeller.includes(faktaOmBeregningTilfelle.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE)) {
    faktaPanels.push(
      <ElementWrapper key="BBFodendeKvinne">
        {spacer(true)}
        <FastsettBBFodendeKvinneForm
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
          tilfeller={tilfeller}
          formName={formName}
        />
      </ElementWrapper>,
    );
  }
  if (tilfeller.includes(faktaOmBeregningTilfelle.FASTSETT_ENDRET_BEREGNINGSGRUNNLAG) && !tilfeller.includes(faktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE)) {
    hasShownPanel = true;
    faktaPanels.push(
      <ElementWrapper key={faktaOmBeregningTilfelle.FASTSETT_ENDRET_BEREGNINGSGRUNNLAG}>
        {spacer(hasShownPanel)}
        <FastsettEndretBeregningsgrunnlag
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
        />
      </ElementWrapper>,
    );
  }
  setFaktaPanelForKunYtelse(faktaPanels, tilfeller, readOnly, formName, isAksjonspunktClosed);

  if (harKunTilstotendeYtelse(tilfeller)) {
    faktaPanels.push(
      <ElementWrapper key="TilstotendeYtelse">
        <TilstotendeYtelseForm
          readOnly={readOnly}
          formName={formName}
        />
      </ElementWrapper>,
    );
  }
  return faktaPanels;
};

/**
 * FaktaForArbeidstakerFLOgSNPanel
 *
 * Container komponent.. Inneholder paneler for felles faktaavklaring for aksjonspunktet Vurder fakta for arbeidstaker, frilans og selvstendig næringsdrivende
 */
export const FaktaForATFLOgSNPanelImpl = ({
  readOnly,
  formName,
  aktivePaneler,
  isAksjonspunktClosed,
  showTableCallback,
}) => (
  <div>
    {getFaktaPanels(readOnly, formName, aktivePaneler, isAksjonspunktClosed, showTableCallback).map(panelOrSpacer => panelOrSpacer)}
  </div>
);


FaktaForATFLOgSNPanelImpl.propTypes = {
  readOnly: PropTypes.bool.isRequired,
  aktivePaneler: PropTypes.arrayOf(PropTypes.string).isRequired,
  formName: PropTypes.string.isRequired,
  isAksjonspunktClosed: PropTypes.bool.isRequired,
  showTableCallback: PropTypes.func.isRequired,
};

const setInntektValues = (values, faktaOmBeregning, aktivePaneler, endringBGPerioder) => {
  if (aktivePaneler.includes(faktaOmBeregningTilfelle.TILSTOTENDE_YTELSE)) {
    const faktor = faktaOmBeregning.tilstøtendeYtelse.skalReduseres ? parseInt(faktaOmBeregning.tilstøtendeYtelse.dekningsgrad, 10) / 100 : 1;
    if (aktivePaneler.includes(faktaOmBeregningTilfelle.FASTSETT_ENDRET_BEREGNINGSGRUNNLAG)) {
      return {
        faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.TILSTOTENDE_YTELSE, faktaOmBeregningTilfelle.FASTSETT_ENDRET_BEREGNINGSGRUNNLAG],
        ...TilstotendeYtelseIKombinasjon.transformValues(values, faktor, faktaOmBeregning.tilstøtendeYtelse.erBesteberegning, endringBGPerioder, aktivePaneler),
      };
    }
    return {
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.TILSTOTENDE_YTELSE],
      ...TilstotendeYtelseForm.transformValues(values, faktor, faktaOmBeregning.tilstøtendeYtelse.erBesteberegning),
    };
  }
  if (aktivePaneler.includes(faktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE)) {
    return transformValuesForKunYtelse(values, faktaOmBeregning.kunYtelse, endringBGPerioder, aktivePaneler);
  }
  if (aktivePaneler.includes(faktaOmBeregningTilfelle.FASTSETT_ENDRET_BEREGNINGSGRUNNLAG)) {
    return {
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.FASTSETT_ENDRET_BEREGNINGSGRUNNLAG],
      ...FastsettEndretBeregningsgrunnlag.transformValues(values, endringBGPerioder),
    };
  }
  if (aktivePaneler.includes(faktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)) {
    return {
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],
      ...FastsettATFLInntektForm.transformValues(values, faktaOmBeregning, faktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),
    };
  }
  if (aktivePaneler.includes(faktaOmBeregningTilfelle.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE)) {
    return {
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE],
      ...FastsettBBFodendeKvinneForm.transformValues(values, faktaOmBeregning),
    };
  }
  return { faktaOmBeregningTilfeller: [] };
};


const setValuesForVurderFakta = (aktivePaneler, values, endringBGPerioder, kortvarigeArbeidsforhold, faktaOmBeregning) => {
  const beg = values.begrunnelse;
  let vurderFaktaValues = {
    kode: aksjonspunktCodes.VURDER_FAKTA_FOR_ATFL_SN,
    begrunnelse: beg === undefined ? null : beg,
    ...setInntektValues(values, faktaOmBeregning, aktivePaneler, endringBGPerioder),
  };

  aktivePaneler.forEach((kode) => {
    if (kode === faktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET) {
      vurderFaktaValues.faktaOmBeregningTilfeller.push(faktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET);
      vurderFaktaValues = {
        ...vurderFaktaValues,
        ...NyIArbeidslivetSNForm.transformValues(values),
      };
    }
    if (kode === faktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD) {
      vurderFaktaValues.faktaOmBeregningTilfeller.push(faktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD);
      vurderFaktaValues = {
        ...vurderFaktaValues,
        ...TidsbegrensetArbeidsforholdForm.transformValues(values, kortvarigeArbeidsforhold),
      };
    }
    if (kode === faktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL) {
      vurderFaktaValues.faktaOmBeregningTilfeller.push(faktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL);
      vurderFaktaValues = {
        ...vurderFaktaValues,
        ...NyoppstartetFLForm.nyOppstartetFLInntekt(values, aktivePaneler, vurderFaktaValues),
        ...NyoppstartetFLForm.transformValues(values),
      };
    }
    if (kode === faktaOmBeregningTilfelle.VURDER_LONNSENDRING) {
      vurderFaktaValues.faktaOmBeregningTilfeller.push(faktaOmBeregningTilfelle.VURDER_LONNSENDRING);
      vurderFaktaValues = {
        ...vurderFaktaValues,
        ...LonnsendringForm.lonnendringFastsatt(values, aktivePaneler, faktaOmBeregning, vurderFaktaValues),
        ...LonnsendringForm.transformValues(values),
      };
    }
    if (kode === faktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE) {
      vurderFaktaValues.faktaOmBeregningTilfeller.push(faktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE);
      vurderFaktaValues = {
        ...vurderFaktaValues,
        ...VurderEtterlonnSluttpakkeForm.etterlonnSluttpakkeInntekt(values, aktivePaneler, vurderFaktaValues),
        ...VurderEtterlonnSluttpakkeForm.transformValues(values),
      };
    }
    if (kode === faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE) {
      vurderFaktaValues.faktaOmBeregningTilfeller.push(faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE);
      vurderFaktaValues = {
        ...vurderFaktaValues,
        ...VurderMottarYtelseForm.transformValues(values, faktaOmBeregning, aktivePaneler, vurderFaktaValues),
      };
    }
  });
  return [vurderFaktaValues];
};


export const transformValuesFaktaForATFLOgSN = createSelector(
  [getFaktaOmBeregningTilfellerKoder, getEndringBeregningsgrunnlagPerioder, getKortvarigeArbeidsforhold, getAksjonspunkter, getFaktaOmBeregning],
  (aktivePaneler, endringBGPerioder, kortvarigeArbeidsforhold, aksjonspunkter, faktaOmBeregning) => (values) => {
    let aksjonspunkterMedValues = [];
    if (hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aksjonspunkter)) {
      aksjonspunkterMedValues = setValuesForVurderFakta(aktivePaneler, values, endringBGPerioder, kortvarigeArbeidsforhold, faktaOmBeregning);
    }
    return aksjonspunkterMedValues;
  },
);


export const buildInitialValuesFaktaForATFLOgSN = createSelector(
  [getEndringBeregningsgrunnlagPerioder, getBeregningsgrunnlag,
    getKortvarigeArbeidsforhold, getAksjonspunkter, getTilstøtendeYtelse, getKunYtelse,
    getFaktaOmBeregningTilfellerKoder, getBehandlingIsRevurdering, getVurderMottarYtelse],
  (endringBGPerioder, beregningsgrunnlag, kortvarigeArbeidsforhold, aksjonspunkter, tilstotendeYtelse, kunYtelse,
    tilfeller, isRevurdering, vurderMottarYtelse) => {
    const vurderFaktaAP = aksjonspunkter ? aksjonspunkter.find(ap => ap.definisjon.kode === VURDER_FAKTA_FOR_ATFL_SN) : undefined;
    if (!vurderFaktaAP) {
      return {};
    }
    return {
      ...TidsbegrensetArbeidsforholdForm.buildInitialValues(kortvarigeArbeidsforhold),
      ...NyIArbeidslivetSNForm.buildInitialValues(beregningsgrunnlag),
      ...FastsettEndretBeregningsgrunnlag.buildInitialValues(endringBGPerioder, tilfeller),
      ...LonnsendringForm.buildInitialValues(beregningsgrunnlag),
      ...NyoppstartetFLForm.buildInitialValues(beregningsgrunnlag),
      ...FastsettATFLInntektForm.buildInitialValues(beregningsgrunnlag),
      ...FastsettBBFodendeKvinneForm.buildInitialValues(beregningsgrunnlag),
      ...TilstotendeYtelseForm.buildInitialValues(tilstotendeYtelse, endringBGPerioder),
      ...TilstotendeYtelseIKombinasjon.buildInitialValues(tilstotendeYtelse, endringBGPerioder, tilfeller),
      ...buildInitialValuesKunYtelse(kunYtelse, endringBGPerioder, isRevurdering, tilfeller),
      ...VurderEtterlonnSluttpakkeForm.buildInitialValues(beregningsgrunnlag, vurderFaktaAP),
      ...FastsettEtterlonnSluttpakkeForm.buildInitialValues(beregningsgrunnlag),
      ...VurderMottarYtelseForm.buildInitialValues(vurderMottarYtelse),
    };
  },
);


const mapStateToProps = (state) => {
  const aktivePaneler = getFaktaOmBeregningTilfellerKoder(state) ? getFaktaOmBeregningTilfellerKoder(state) : [];
  const alleAp = getAksjonspunkter(state);
  const relevantAp = alleAp.filter(ap => ap.definisjon.kode === aksjonspunktCodes.VURDER_FAKTA_FOR_ATFL_SN);
  const isAksjonspunktClosed = relevantAp.length === 0 ? undefined : !isAksjonspunktOpen(relevantAp[0].status.kode);
  return {
    isAksjonspunktClosed,
    aktivePaneler,
  };
};

export default connect(mapStateToProps)(FaktaForATFLOgSNPanelImpl);
