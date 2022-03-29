import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';

import { Form } from '@fpsak-frontend/form-hooks';
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
  BeregningsgrunnlagPeriodeProp,
  FaktaOmBeregning,
  SammenligningsgrunlagProp,
  Vilkar,
  YtelseGrunnlag,
} from '@fpsak-frontend/types';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import BeregningsgrunnlagResultatAP from '@fpsak-frontend/types-avklar-aksjonspunkter/src/prosess/BeregningsgrunnlagAP';
import BesteberegningResultatGrunnlagPanel from '../besteberegning/BesteberegningResultatGrunnlagPanel';
import AvviksopplysningerPanel from '../fellesPaneler/AvvikopplysningerPanel';
import SkjeringspunktOgStatusPanel from '../fellesPaneler/SkjeringspunktOgStatusPanel';
import AksjonspunktBehandlerSN from '../selvstendigNaeringsdrivende/AksjonspunktsbehandlerSN';
import GrunnlagForAarsinntektPanelAT from '../arbeidstaker/GrunnlagForAarsinntektPanelAT';
import AksjonspunktBehandlerTidsbegrenset from '../arbeidstaker/AksjonspunktBehandlerTB';
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
import { DekningsgradAksjonspunktPanel } from '../fellesPaneler/DekningsgradAksjonspunktPanel';
import DekningsgradValues from '../../types/DekningsgradAksjonspunktTsType';

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
  ? faktaOmBeregning.faktaOmBeregningTilfeller.some((tilfelle) => tilfelle === faktaOmBeregningTilfelle.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE)
  : false);

const erAutomatiskBesteberegnet = (ytelsesspesifiktGrunnlag: YtelseGrunnlag): boolean => !!ytelsesspesifiktGrunnlag?.besteberegninggrunnlag;

export const buildInitialValues = (beregningsgrunnlag: BeregningsgrunnlagProp,
  gjeldendeAksjonspunkter: Aksjonspunkt[]): BeregningsgrunnlagValues => {
  if (!beregningsgrunnlag || !beregningsgrunnlag.beregningsgrunnlagPeriode) {
    return undefined;
  }
  const allePerioder = beregningsgrunnlag.beregningsgrunnlagPeriode;
  const alleAndelerIForstePeriode = beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel;
  const arbeidstakerAndeler = alleAndelerIForstePeriode.filter((andel) => andel.aktivitetStatus === aktivitetStatus.ARBEIDSTAKER);
  const frilanserAndeler = alleAndelerIForstePeriode.filter((andel) => andel.aktivitetStatus === aktivitetStatus.FRILANSER);
  const selvstendigNaeringAndeler = alleAndelerIForstePeriode.filter((andel) => andel.aktivitetStatus === aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE);
  return {
    ...Beregningsgrunnlag.buildInitialValues(gjeldendeAksjonspunkter),
    ...AksjonspunktBehandlerTidsbegrenset.buildInitialValues(allePerioder),
    ...AksjonspunktBehandlerFL.buildInitialValues((frilanserAndeler)),
    ...AksjonspunktBehandlerSN.buildInitialValues(selvstendigNaeringAndeler, gjeldendeAksjonspunkter),
    ...GrunnlagForAarsinntektPanelAT.buildInitialValues(arbeidstakerAndeler),
    ...DekningsgradAksjonspunktPanel.buildInitialValues(beregningsgrunnlag, gjeldendeAksjonspunkter),
  };
};

const harAksjonspunkt = (aksjonspunktKode: string, gjeldendeAksjonspunkter: Aksjonspunkt[]): boolean => gjeldendeAksjonspunkter !== undefined
  && gjeldendeAksjonspunkter !== null
  && gjeldendeAksjonspunkter.some((ap) => ap.definisjon === aksjonspunktKode);

export const transformValues = (values: BeregningsgrunnlagValues,
  relevanteStatuser: RelevanteStatuserProp,
  gjeldendeAksjonspunkter: Aksjonspunkt[],
  allePerioder: BeregningsgrunnlagPeriodeProp[]): BeregningsgrunnlagResultatAP[] => {
  allePerioder.sort((p1, p2) => p1.beregningsgrunnlagPeriodeFom.localeCompare(p2.beregningsgrunnlagPeriodeFom));
  const alleAndelerIFørstePeriode = allePerioder.length > 0 ? allePerioder[0].beregningsgrunnlagPrStatusOgAndel : [];

  const aksjonspunkter = [];
  if (harAksjonspunkt(VURDER_DEKNINGSGRAD, gjeldendeAksjonspunkter)) {
    aksjonspunkter.push(DekningsgradAksjonspunktPanel.transformValues(values as Required<DekningsgradValues>));
  }
  if (harAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS, gjeldendeAksjonspunkter)) {
    return aksjonspunkter.concat(Beregningsgrunnlag.transformATFLValues(values as ATFLValues, relevanteStatuser, alleAndelerIFørstePeriode));
  }
  if (harAksjonspunkt(VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE, gjeldendeAksjonspunkter)
    || harAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, gjeldendeAksjonspunkter)) {
    return aksjonspunkter.concat([AksjonspunktBehandlerSN.transformValues(values as VurderOgFastsettValues, gjeldendeAksjonspunkter)]);
  }
  if (harAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD, gjeldendeAksjonspunkter)) {
    return aksjonspunkter.concat(Beregningsgrunnlag.transformATFLTidsbegrensetValues(values as ATFLTidsbegrensetValues, allePerioder));
  }
  return aksjonspunkter;
};

const getSammenligningsgrunnlagsPrStatus = (bg: BeregningsgrunnlagProp): SammenligningsgrunlagProp[] => (bg.sammenligningsgrunnlagPrStatus
  ? bg.sammenligningsgrunnlagPrStatus
  : undefined);

const getStatusList = (beregningsgrunnlagPerioder: BeregningsgrunnlagPeriodeProp[]): string[] => beregningsgrunnlagPerioder[0]
  .beregningsgrunnlagPrStatusOgAndel
  .filter((statusAndel) => statusAndel.erTilkommetAndel !== true)
  .map((statusAndel) => statusAndel.aktivitetStatus);

type OwnProps = {
  readOnly: boolean;
  gjeldendeAksjonspunkter: Aksjonspunkt[];
  relevanteStatuser: RelevanteStatuserProp;
  submitCallback: (aksjonspunktData: BeregningsgrunnlagResultatAP[]) => Promise<void>;
  readOnlySubmitButton: boolean;
  beregningsgrunnlag: BeregningsgrunnlagProp;
  alleKodeverk: AlleKodeverk;
  vilkaarBG: Vilkar;
  formData?: BeregningsgrunnlagValues;
  setFormData: (data: BeregningsgrunnlagValues) => void,
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
const BeregningForm: FunctionComponent<OwnProps> = ({
  readOnly,
  beregningsgrunnlag,
  gjeldendeAksjonspunkter,
  relevanteStatuser,
  readOnlySubmitButton,
  alleKodeverk,
  vilkaarBG,
  formData,
  setFormData,
  submitCallback,
  arbeidsgiverOpplysningerPerId,
}) => {
  const {
    dekningsgrad, skjaeringstidspunktBeregning, beregningsgrunnlagPeriode, faktaOmBeregning,
    ytelsesspesifiktGrunnlag,
  } = beregningsgrunnlag;
  const formMethods = useForm<BeregningsgrunnlagValues>({
    defaultValues: formData || buildInitialValues(beregningsgrunnlag, gjeldendeAksjonspunkter),
  });

  const gjelderBesteberegning = gjelderBehandlingenBesteberegning(faktaOmBeregning);
  const gjelderAutomatiskBesteberegning = erAutomatiskBesteberegnet(ytelsesspesifiktGrunnlag);

  const sammenligningsgrunnlagPrStatus = getSammenligningsgrunnlagsPrStatus(beregningsgrunnlag);
  const aktivitetStatusList = getStatusList(beregningsgrunnlagPeriode);
  const harAksjonspunkter = gjeldendeAksjonspunkter && gjeldendeAksjonspunkter.length > 0;
  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values) => submitCallback(transformValues(values, relevanteStatuser, gjeldendeAksjonspunkter, beregningsgrunnlag.beregningsgrunnlagPeriode))}
      setDataOnUnmount={setFormData}
    >
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
            <Beregningsgrunnlag
              relevanteStatuser={relevanteStatuser}
              allePerioder={beregningsgrunnlagPeriode}
              gjelderBesteberegning={gjelderBesteberegning}
              alleKodeverk={alleKodeverk}
              skjeringstidspunktDato={skjaeringstidspunktBeregning}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
              sammenligningsGrunnlagInntekter={beregningsgrunnlag.inntektsgrunnlag}
            />
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
                isSubmitting={formMethods.formState.isSubmitting}
                isDirty={formMethods.formState.isDirty}
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
    </Form>
  );
};

export default BeregningForm;
