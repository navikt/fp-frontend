import React, { FunctionComponent, ReactElement } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { createSelector } from 'reselect';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AksjonspunktHelpTextHTML, AvsnittSkiller, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { Column, Row } from 'nav-frontend-grid';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';

import periodeAarsak from '@fpsak-frontend/kodeverk/src/periodeAarsak';
import { Undertittel } from 'nav-frontend-typografi';
import {
  Aksjonspunkt,
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag as BeregningsgrunnlagProp,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
  FaktaOmBeregning,
  Kodeverk,
  KodeverkMedNavn,
  SammenligningsgrunlagProp,
  Vilkar,
  YtelseGrunnlag,
} from '@fpsak-frontend/types';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import BesteberegningResultatGrunnlagPanel from '../besteberegning/BesteberegningResultatGrunnlagPanel';
import AvviksopplysningerPanel from '../fellesPaneler/AvvikopplysningerPanel';
import SkjeringspunktOgStatusPanel, { RADIO_GROUP_FIELD_DEKNINGSGRAD_NAVN } from '../fellesPaneler/SkjeringspunktOgStatusPanel';
import VurderOgFastsettSN from '../selvstendigNaeringsdrivende/VurderOgFastsettSN';
import { GrunnlagForAarsinntektPanelATImpl } from '../arbeidstaker/GrunnlagForAarsinntektPanelAT';
import { AksjonspunktBehandlerTidsbegrensetImpl } from '../arbeidstaker/AksjonspunktBehandlerTB';
import Beregningsgrunnlag, { TEKSTFELTNAVN_BEGRUNN_DEKNINGSGRAD_ENDRING } from '../beregningsgrunnlagPanel/Beregningsgrunnlag';
import AksjonspunktBehandler from '../fellesPaneler/AksjonspunktBehandler';
import BeregningsresultatTable from '../beregningsresultatPanel/BeregningsresultatTable';
import AksjonspunktBehandlerFL from '../frilanser/AksjonspunktBehandlerFL';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import DekningsgradTransformedValues from '../../types/DekningsgradAksjonspunktTsType';
import BeregningsgrunnlagValues from '../../types/BeregningsgrunnlagAksjonspunktTsType';
import { ATFLTidsbegrensetValues, ATFLValues } from '../../types/ATFLAksjonspunktTsType';
import { VurderOgFastsettValues } from '../../types/NæringAksjonspunktTsType';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';

// ------------------------------------------------------------------------------------------ //
// Variables
// ------------------------------------------------------------------------------------------ //

const formName = 'BeregningForm';
const {
  FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
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

const harPerioderMedAvsluttedeArbeidsforhold = (allePerioder: BeregningsgrunnlagPeriodeProp[]): boolean => allePerioder
  .some(({ periodeAarsaker }) => periodeAarsaker
  && periodeAarsaker.some(({ kode }) => kode === periodeAarsak.ARBEIDSFORHOLD_AVSLUTTET));

const findAksjonspunktHelpTekst = (gjeldendeAksjonspunkt: Aksjonspunkt, erVarigEndring: boolean, erNyArbLivet: boolean, erNyoppstartet: boolean): string => {
  switch (gjeldendeAksjonspunkt.definisjon.kode) {
    case FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:
      return 'Beregningsgrunnlag.Helptext.Arbeidstaker2';
    case VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:
      if (erVarigEndring) {
        return 'Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.VarigEndring';
      }
      if (erNyoppstartet) {
        return 'Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.Nyoppstartet';
      }
      return 'Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende2';
    case FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:
      return 'Beregningsgrunnlag.Helptext.TidsbegrensetArbeidsforhold2';
    case FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE:
      return 'Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende2';
    case FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:
      return 'Beregningsgrunnlag.Helptext.NyIArbeidslivetSN2';
    case VURDER_DEKNINGSGRAD:
      return 'Beregningsgrunnlag.Helptext.BarnetHarDødDeFørsteSeksUkene';
    default:
      return 'Beregningsgrunnlag.Helptext.Ukjent';
  }
};

const lagAksjonspunktHelpText = (gjeldendeAksjonspunkter: Aksjonspunkt[],
  avvikProsent: number,
  alleAndelerIForstePeriode: BeregningsgrunnlagAndel[]): ReactElement => {
  if (gjeldendeAksjonspunkter === undefined || gjeldendeAksjonspunkter === null) {
    return undefined;
  }
  const vurderDekninsgradAksjonspunkt = gjeldendeAksjonspunkter.filter((ap) => ap.definisjon.kode === VURDER_DEKNINGSGRAD);
  const sorterteAksjonspunkter = vurderDekninsgradAksjonspunkt.concat(gjeldendeAksjonspunkter);
  const apneAksjonspunkt = sorterteAksjonspunkter.filter((ap) => isAksjonspunktOpen(ap.status.kode));
  const erDetMinstEttApentAksjonspunkt = apneAksjonspunkt.length > 0;
  const snAndel = alleAndelerIForstePeriode.find((andel) => andel.aktivitetStatus.kode === aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE);
  const erVarigEndring = snAndel && snAndel.næringer && snAndel.næringer.some((naring) => naring.erVarigEndret === true);
  const erNyoppstartet = snAndel && snAndel.næringer && snAndel.næringer.some((naring) => naring.erNyoppstartet === true);
  const erNyArbLivet = snAndel && snAndel.erNyIArbeidslivet;
  return (
    <div>
      { erDetMinstEttApentAksjonspunkt && (
        <>
          <AksjonspunktHelpTextHTML>
            { apneAksjonspunkt.map((ap) => (
              <FormattedMessage
                key={ap.definisjon.kode}
                id={findAksjonspunktHelpTekst(ap, erVarigEndring, erNyArbLivet, erNyoppstartet)}
                values={{ verdi: avvikProsent, b: (chunks) => <b>{chunks}</b>, br: <br /> }}
              />
            ))}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer thirtyTwoPx />
        </>
      )}

    </div>
  );
};

export const buildInitialValues = createSelector(
  [(ownProps: OwnProps) => ownProps.beregningsgrunnlag,
    (ownProps: OwnProps) => ownProps.gjeldendeAksjonspunkter],
  (beregningsgrunnlag: BeregningsgrunnlagProp, gjeldendeAksjonspunkter: Aksjonspunkt[]): BeregningsgrunnlagValues => {
    if (!beregningsgrunnlag || !beregningsgrunnlag.beregningsgrunnlagPeriode) {
      return undefined;
    }
    const allePerioder = beregningsgrunnlag.beregningsgrunnlagPeriode;
    const gjeldendeDekningsgrad = beregningsgrunnlag.dekningsgrad;
    const alleAndelerIForstePeriode = beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel;
    const arbeidstakerAndeler = alleAndelerIForstePeriode.filter((andel) => andel.aktivitetStatus.kode === aktivitetStatus.ARBEIDSTAKER);
    const frilanserAndeler = alleAndelerIForstePeriode.filter((andel) => andel.aktivitetStatus.kode === aktivitetStatus.FRILANSER);
    const selvstendigNaeringAndeler = alleAndelerIForstePeriode.filter((andel) => andel.aktivitetStatus.kode === aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE);
    const initialValues = {
      ...Beregningsgrunnlag.buildInitialValues(gjeldendeAksjonspunkter),
      ...AksjonspunktBehandlerTidsbegrensetImpl.buildInitialValues(allePerioder),
      ...AksjonspunktBehandlerFL.buildInitialValues((frilanserAndeler)),
      ...VurderOgFastsettSN.buildInitialValues(selvstendigNaeringAndeler, gjeldendeAksjonspunkter),
      ...GrunnlagForAarsinntektPanelATImpl.buildInitialValues(arbeidstakerAndeler),
      ...SkjeringspunktOgStatusPanel.buildInitialValues(gjeldendeDekningsgrad, gjeldendeAksjonspunkter),
    };
    return initialValues;
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
  const vurderDekningsgradAksjonspunkt = {
    kode: VURDER_DEKNINGSGRAD,
    begrunnelse: values[TEKSTFELTNAVN_BEGRUNN_DEKNINGSGRAD_ENDRING],
    dekningsgrad: values[RADIO_GROUP_FIELD_DEKNINGSGRAD_NAVN],
  } as DekningsgradTransformedValues;
  if (harAksjonspunkt(VURDER_DEKNINGSGRAD, gjeldendeAksjonspunkter)) {
    aksjonspunkter.push(vurderDekningsgradAksjonspunkt);
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

const finnAlleAndelerIFørstePeriode = (allePerioder: BeregningsgrunnlagPeriodeProp[]): BeregningsgrunnlagAndel[] => {
  if (allePerioder && allePerioder.length > 0) {
    return allePerioder[0].beregningsgrunnlagPrStatusOgAndel;
  }
  return undefined;
};

const getAvviksprosent = (sammenligningsgrunnlagPrStatus: SammenligningsgrunlagProp[]): number => {
  if (!sammenligningsgrunnlagPrStatus) {
    return undefined;
  }
  const avvikElem = sammenligningsgrunnlagPrStatus.find((status) => status.avvikProsent > 25);
  const avvikProsent = avvikElem && avvikElem.avvikProsent ? avvikElem.avvikProsent : 0;
  if (avvikProsent || avvikProsent === 0) {
    return Number((avvikProsent).toFixed(1));
  }
  return undefined;
};

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
    alleKodeverk: {[key: string]: KodeverkMedNavn[]};
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
  const avvikProsent = getAvviksprosent(sammenligningsgrunnlagPrStatus);
  const aktivitetStatusList = getStatusList(beregningsgrunnlagPeriode);
  const tidsBegrensetInntekt = harPerioderMedAvsluttedeArbeidsforhold(beregningsgrunnlagPeriode);
  const harAksjonspunkter = gjeldendeAksjonspunkter && gjeldendeAksjonspunkter.length > 0;
  const alleAndelerIForstePeriode = finnAlleAndelerIFørstePeriode(beregningsgrunnlagPeriode);

  return (
    <form onSubmit={formProps.handleSubmit} className={beregningStyles.beregningForm}>
      { gjeldendeAksjonspunkter
        && (
          <>
            <VerticalSpacer eightPx />
            { lagAksjonspunktHelpText(gjeldendeAksjonspunkter, avvikProsent, alleAndelerIForstePeriode)}
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
                tidsBegrensetInntekt={tidsBegrensetInntekt}
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
