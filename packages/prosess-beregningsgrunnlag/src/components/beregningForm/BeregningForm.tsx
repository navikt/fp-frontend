import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { createSelector } from 'reselect';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AvsnittSkiller, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { Column, Row } from 'nav-frontend-grid';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';

import { Undertittel } from 'nav-frontend-typografi';
import {
  Aksjonspunkt,
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag as BeregningsgrunnlagProp,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
  FaktaOmBeregning,
  Kodeverk,
  SammenligningsgrunlagProp,
  Vilkar,
  YtelseGrunnlag,
} from '@fpsak-frontend/types';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import BesteberegningResultatGrunnlagPanel from '../besteberegning/BesteberegningResultatGrunnlagPanel';
import AvviksopplysningerPanel from '../fellesPaneler/AvvikopplysningerPanel';
import SkjeringspunktOgStatusPanel from '../fellesPaneler/SkjeringspunktOgStatusPanel';
import VurderOgFastsettSN from '../selvstendigNaeringsdrivende/VurderOgFastsettSN';
import { GrunnlagForAarsinntektPanelATImpl } from '../arbeidstaker/GrunnlagForAarsinntektPanelAT';
import { AksjonspunktBehandlerTidsbegrensetImpl } from '../arbeidstaker/AksjonspunktBehandlerTB';
import Beregningsgrunnlag from '../beregningsgrunnlagPanel/Beregningsgrunnlag';
import AksjonspunktBehandler from '../fellesPaneler/AksjonspunktBehandler';
import BeregningsresultatTable from '../beregningsresultatPanel/BeregningsresultatTable';
import AksjonspunktBehandlerFL from '../frilanser/AksjonspunktBehandlerFL';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import BeregningsgrunnlagValues from '../../types/BeregningsgrunnlagAksjonspunktTsType';
import { ATFLTidsbegrensetValues, ATFLValues } from '../../types/ATFLAksjonspunktTsType';
import { VurderOgFastsettValues } from '../../types/NaringAksjonspunktTsType';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';
import AksjonspunktTittel from '../fellesPaneler/AksjonspunktTittel';
import { DekningsgradAksjonspunktPanelImpl } from '../fellesPaneler/DekningsgradAksjonspunktPanel';
import { DekningsgradValues } from '../../types/DekningsgradAksjonspunktTsType';

// ------------------------------------------------------------------------------------------ //
// Variables
// ------------------------------------------------------------------------------------------ //

const formName = 'BeregningForm';
const {
  FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  VURDER_DEKNINGSGRAD,
} = aksjonspunktCodes;
// ------------------------------------------------------------------------------------------ //
// Methods
// ------------------------------------------------------------------------------------------ //

const gjelderBehandlingenBesteberegning = (faktaOmBeregning: FaktaOmBeregning): boolean => (faktaOmBeregning && faktaOmBeregning.faktaOmBeregningTilfeller
  ? faktaOmBeregning.faktaOmBeregningTilfeller.some((tilfelle) => tilfelle.kode === faktaOmBeregningTilfelle.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE)
  : false);

const erAutomatiskBesteberegnet = (ytelsesspesifiktGrunnlag: YtelseGrunnlag): boolean => !!ytelsesspesifiktGrunnlag?.besteberegninggrunnlag;

export const buildInitialValues = createSelector(
  [(ownProps: OwnProps) => ownProps.beregningsgrunnlag,
    (ownProps: OwnProps) => ownProps.gjeldendeAksjonspunkter],
  (beregningsgrunnlag: BeregningsgrunnlagProp, gjeldendeAksjonspunkter: Aksjonspunkt[]): BeregningsgrunnlagValues => {
    if (!beregningsgrunnlag || !beregningsgrunnlag.beregningsgrunnlagPeriode) {
      return undefined;
    }
    const allePerioder = beregningsgrunnlag.beregningsgrunnlagPeriode;
    const alleAndelerIForstePeriode = beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel;
    const arbeidstakerAndeler = alleAndelerIForstePeriode.filter((andel) => andel.aktivitetStatus.kode === aktivitetStatus.ARBEIDSTAKER);
    const frilanserAndeler = alleAndelerIForstePeriode.filter((andel) => andel.aktivitetStatus.kode === aktivitetStatus.FRILANSER);
    const selvstendigNaeringAndeler = alleAndelerIForstePeriode.filter((andel) => andel.aktivitetStatus.kode === aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE);
    return {
      ...Beregningsgrunnlag.buildInitialValues(gjeldendeAksjonspunkter),
      ...AksjonspunktBehandlerTidsbegrensetImpl.buildInitialValues(allePerioder),
      ...AksjonspunktBehandlerFL.buildInitialValues((frilanserAndeler)),
      ...VurderOgFastsettSN.buildInitialValues(selvstendigNaeringAndeler, gjeldendeAksjonspunkter),
      ...GrunnlagForAarsinntektPanelATImpl.buildInitialValues(arbeidstakerAndeler),
      ...DekningsgradAksjonspunktPanelImpl.buildInitialValues(beregningsgrunnlag, gjeldendeAksjonspunkter),
    };
  },
);

const harAksjonspunkt = (aksjonspunktKode: string, gjeldendeAksjonspunkter: Aksjonspunkt[]): boolean => gjeldendeAksjonspunkter !== undefined
  && gjeldendeAksjonspunkter !== null
  && gjeldendeAksjonspunkter.some((ap) => ap.definisjon.kode === aksjonspunktKode);

export const transformValues = (values: BeregningsgrunnlagValues,
  relevanteStatuser: RelevanteStatuserProp,
  alleAndelerIForstePeriode: BeregningsgrunnlagAndel[],
  gjeldendeAksjonspunkter: Aksjonspunkt[],
  allePerioder: BeregningsgrunnlagPeriodeProp[]) => {
  const aksjonspunkter = [];
  if (harAksjonspunkt(VURDER_DEKNINGSGRAD, gjeldendeAksjonspunkter)) {
    aksjonspunkter.push(DekningsgradAksjonspunktPanelImpl.transformValues(values as Required<DekningsgradValues>));
  }
  if (harAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS, gjeldendeAksjonspunkter)) {
    return aksjonspunkter.concat(Beregningsgrunnlag.transformATFLValues(values as ATFLValues, relevanteStatuser, alleAndelerIForstePeriode));
  }
  if (harAksjonspunkt(VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE, gjeldendeAksjonspunkter)
    || harAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, gjeldendeAksjonspunkter)) {
    return aksjonspunkter.concat([VurderOgFastsettSN.transformValues(values as VurderOgFastsettValues, gjeldendeAksjonspunkter)]);
  }
  if (harAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD, gjeldendeAksjonspunkter)) {
    return aksjonspunkter.concat(Beregningsgrunnlag.transformATFLTidsbegrensetValues(values as ATFLTidsbegrensetValues, allePerioder));
  }
  return aksjonspunkter;
};

const getSammenligningsgrunnlagsPrStatus = (bg: BeregningsgrunnlagProp): SammenligningsgrunlagProp[] => (bg.sammenligningsgrunnlagPrStatus
  ? bg.sammenligningsgrunnlagPrStatus
  : undefined);

const getStatusList = (beregningsgrunnlagPerioder: BeregningsgrunnlagPeriodeProp[]): Kodeverk[] => beregningsgrunnlagPerioder[0]
  .beregningsgrunnlagPrStatusOgAndel
  .filter((statusAndel) => statusAndel.erTilkommetAndel !== true)
  .map((statusAndel) => statusAndel.aktivitetStatus);

type OwnProps = {
    readOnly: boolean;
    gjeldendeAksjonspunkter: Aksjonspunkt[];
    relevanteStatuser: RelevanteStatuserProp;
    submitCallback: (...args: any[]) => any;
    readOnlySubmitButton: boolean;
    beregningsgrunnlag: BeregningsgrunnlagProp;
    alleKodeverk: AlleKodeverk;
    vilkaarBG: Vilkar;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

// ------------------------------------------------------------------------------------------ //
// Component : BeregningFormImpl
// ------------------------------------------------------------------------------------------ //
/**
 *
 * BeregningForm
 *
 * Fungerer som den overordnene formen for beregningkomponentene og håndterer alt av submits
 * relatert til beregning.
 *
 */
export const BeregningFormImpl: FunctionComponent<OwnProps & InjectedFormProps> = ({
  readOnly,
  beregningsgrunnlag,
  gjeldendeAksjonspunkter,
  relevanteStatuser,
  readOnlySubmitButton,
  alleKodeverk,
  vilkaarBG,
  arbeidsgiverOpplysningerPerId,
  ...formProps
}) => {
  const {
    dekningsgrad, skjaeringstidspunktBeregning, beregningsgrunnlagPeriode, faktaOmBeregning,
    ytelsesspesifiktGrunnlag,
  } = beregningsgrunnlag;
  const gjelderBesteberegning = gjelderBehandlingenBesteberegning(faktaOmBeregning);
  const gjelderAutomatiskBesteberegning = erAutomatiskBesteberegnet(ytelsesspesifiktGrunnlag);

  const sammenligningsgrunnlagPrStatus = getSammenligningsgrunnlagsPrStatus(beregningsgrunnlag);
  const aktivitetStatusList = getStatusList(beregningsgrunnlagPeriode);
  const harAksjonspunkter = gjeldendeAksjonspunkter && gjeldendeAksjonspunkter.length > 0;
  return (
    <form onSubmit={formProps.handleSubmit} className={beregningStyles.beregningForm}>
      { harAksjonspunkter
        && (
          <>
            <VerticalSpacer eightPx />
            <AksjonspunktTittel aksjonspunkter={gjeldendeAksjonspunkter} beregningsgrunnlag={beregningsgrunnlag} />
          </>

        )}
      <Row>
        <Column xs="12" md="6">
          <Undertittel className={beregningStyles.panelLeft}>
            <FormattedMessage id="Beregningsgrunnlag.Title.Beregning" />
          </Undertittel>
          <VerticalSpacer twentyPx />
          <SkjeringspunktOgStatusPanel
            alleKodeverk={alleKodeverk}
            aktivitetStatusList={aktivitetStatusList}
            skjeringstidspunktDato={skjaeringstidspunktBeregning}
          />
          { relevanteStatuser.skalViseBeregningsgrunnlag && (
            <>
              <Beregningsgrunnlag
                relevanteStatuser={relevanteStatuser}
                allePerioder={beregningsgrunnlagPeriode}
                gjelderBesteberegning={gjelderBesteberegning}
                alleKodeverk={alleKodeverk}
                skjeringstidspunktDato={skjaeringstidspunktBeregning}
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                sammenligningsGrunnlagInntekter={beregningsgrunnlag.inntektsgrunnlag}
              />
            </>
          )}
          <VerticalSpacer twentyPx />
          {gjelderAutomatiskBesteberegning && (
            <BesteberegningResultatGrunnlagPanel
              besteMåneder={ytelsesspesifiktGrunnlag.besteberegninggrunnlag.besteMåneder}
              periode={beregningsgrunnlagPeriode[0]}
            />
          )}
        </Column>
        <Column xs="12" md="6">
          <div className={beregningStyles.paragrafSkiller}>
            <AvsnittSkiller spaceAbove spaceUnder dividerParagraf />
          </div>
          <Undertittel className={beregningStyles.panelRight}>
            <FormattedMessage id="Beregningsgrunnlag.Title.Fastsettelse" />
          </Undertittel>
          <VerticalSpacer twentyPx />

          <AvviksopplysningerPanel
            sammenligningsgrunnlagPrStatus={sammenligningsgrunnlagPrStatus}
            relevanteStatuser={relevanteStatuser}
            allePerioder={beregningsgrunnlagPeriode}
            harAksjonspunkter={harAksjonspunkter}
            gjelderBesteberegning={gjelderBesteberegning}
          />
          {harAksjonspunkter
          && (
            <>
              <AvsnittSkiller spaceAbove spaceUnder rightPanel />
              <AksjonspunktBehandler
                readOnly={readOnly}
                readOnlySubmitButton={readOnlySubmitButton}
                formName={formName}
                allePerioder={beregningsgrunnlagPeriode}
                alleKodeverk={alleKodeverk}
                aksjonspunkter={gjeldendeAksjonspunkter}
                relevanteStatuser={relevanteStatuser}
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
              />
            </>
          )}
          <>
            <AvsnittSkiller spaceAbove spaceUnder rightPanel />
            <BeregningsresultatTable
              beregningsgrunnlagPerioder={beregningsgrunnlag.beregningsgrunnlagPeriode}
              dekningsgrad={dekningsgrad}
              vilkaarBG={vilkaarBG}
              aktivitetStatusList={aktivitetStatusList}
              grunnbelop={beregningsgrunnlag.grunnbeløp}
              ytelseGrunnlag={beregningsgrunnlag.ytelsesspesifiktGrunnlag}
            />
          </>

        </Column>
      </Row>
    </form>
  );
};

const lagSubmitFn = createSelector([
  (ownProps: OwnProps) => ownProps.gjeldendeAksjonspunkter,
  (ownProps: OwnProps) => ownProps.relevanteStatuser,
  (ownProps: OwnProps) => ownProps.submitCallback,
  (ownProps: OwnProps) => ownProps.beregningsgrunnlag],
(gjeldendeAksjonspunkter, relevanteStatuser, submitCallback, beregningsgrunnlag) => {
  const allePerioder = beregningsgrunnlag ? beregningsgrunnlag.beregningsgrunnlagPeriode : [];
  const alleAndelerIForstePeriode = allePerioder && allePerioder.length > 0
    ? allePerioder[0].beregningsgrunnlagPrStatusOgAndel : [];

  return (values) => submitCallback(transformValues(values, relevanteStatuser, alleAndelerIForstePeriode, gjeldendeAksjonspunkter,
    allePerioder));
});

const mapStateToProps = (state, ownProps) => ({
  onSubmit: lagSubmitFn(ownProps),
  initialValues: buildInitialValues(ownProps),
});

const BeregningForm = connect(mapStateToProps)(reduxForm({
  form: formName,
  destroyOnUnmount: false,
})(BeregningFormImpl));

export default BeregningForm;
