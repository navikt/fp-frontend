import React, { Component, ReactElement } from 'react';
import { connect } from 'react-redux';
import {
  FormAction, initialize as reduxFormInitialize, InjectedFormProps, reduxForm,
} from 'redux-form';
import { createSelector } from 'reselect';
import { bindActionCreators, Dispatch } from 'redux';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Element } from 'nav-frontend-typografi';
import AlertStripe from 'nav-frontend-alertstriper';
import { Knapp } from 'nav-frontend-knapper';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import {
  AksjonspunktHelpTextTemp, VerticalSpacer, OverstyringKnapp, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';
import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import {
  ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, AvklarBeregningAktiviteterMap, AlleKodeverk,
} from '@fpsak-frontend/types';
import BeregningAktivitetAP, { AvklarBeregningsaktiviteterAP, OverstyrBeregningsaktiviteterAP }
  from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/BeregningAktivitetAP';
import { formNameAvklarAktiviteter, getFormInitialValuesForAvklarAktiviteter, getFormValuesForAvklarAktiviteter } from '../BeregningFormUtils';
import { erOverstyringAvBeregningsgrunnlag } from '../fellesFaktaForATFLogSN/BgFaktaUtils';
import VurderAktiviteterPanel from './VurderAktiviteterPanel';

import styles from './avklareAktiviteterPanel.less';
import AvklarAktiviteterValues from '../../typer/AvklarAktivitetTypes';

const {
  AVKLAR_AKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
} = aksjonspunktCodes;

export const BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME = 'begrunnelseAvklareAktiviteter';

export const MANUELL_OVERSTYRING_FIELD = 'manuellOverstyringBeregningAktiviteter';

const findAksjonspunktMedBegrunnelse = (aksjonspunkter: Aksjonspunkt[], kode: string): Aksjonspunkt => aksjonspunkter
  .filter((ap) => ap.definisjon === kode && ap.begrunnelse !== null)[0];

const getAvklarAktiviteter = createSelector(
  [(ownProps: OwnProps) => ownProps.beregningsgrunnlag.faktaOmBeregning],
  (faktaOmBeregning): AvklarBeregningAktiviteterMap => (faktaOmBeregning ? faktaOmBeregning.avklarAktiviteter : undefined),
);

export const erAvklartAktivitetEndret = createSelector(
  [(state, ownProps: OwnProps) => ownProps.aksjonspunkter,
    (state, ownProps) => ownProps.erOverstyrt,
    (state, ownProps: OwnProps) => getAvklarAktiviteter(ownProps),
    getFormValuesForAvklarAktiviteter,
    getFormInitialValuesForAvklarAktiviteter],
  (aksjonspunkter, erOverstyrt, avklarAktiviteter, values, initialValues) => {
    if (!hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter) && (!values || !values[MANUELL_OVERSTYRING_FIELD])) {
      return false;
    }
    if (!!values[MANUELL_OVERSTYRING_FIELD] !== hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, aksjonspunkter)) {
      return true;
    }
    let harEndring = false;
    if (values && avklarAktiviteter && avklarAktiviteter.aktiviteterTomDatoMapping) {
      harEndring = VurderAktiviteterPanel.hasValueChangedFromInitial(avklarAktiviteter.aktiviteterTomDatoMapping,
        values,
        initialValues,
        erOverstyrt);
    }
    if (values && !harEndring) {
      harEndring = initialValues[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] !== values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME];
    }
    return harEndring;
  },
);

const getHelpTextsAvklarAktiviteter = createSelector(
  [(ownProps: OwnProps) => ownProps.aksjonspunkter],
  (aksjonspunkter): ReactElement[] => (hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter)
    ? [<FormattedMessage key="VurderFaktaForBeregningen" id="BeregningInfoPanel.AksjonspunktHelpText.VurderAktiviteter" />]
    : []),
);

const skalViseSubmitKnappEllerBegrunnelse = (aksjonspunkter: Aksjonspunkt[],
  erOverstyrt: boolean): boolean => hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter) || erOverstyrt;

const buildInitialValues = (aksjonspunkter: Aksjonspunkt[],
  avklarAktiviteter: AvklarBeregningAktiviteterMap,
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  harOverstyrt = false): AvklarAktiviteterValues => {
  const harAvklarAksjonspunkt = hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter);
  const erOverstyrt = hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, aksjonspunkter);
  let aktiviteterValues;
  if (avklarAktiviteter && avklarAktiviteter.aktiviteterTomDatoMapping) {
    aktiviteterValues = VurderAktiviteterPanel.buildInitialValues(avklarAktiviteter.aktiviteterTomDatoMapping,
      alleKodeverk, erOverstyrt, harAvklarAksjonspunkt, arbeidsgiverOpplysningerPerId);
  }
  const overstyrAksjonspunktMedBegrunnelse = findAksjonspunktMedBegrunnelse(aksjonspunkter, OVERSTYRING_AV_BEREGNINGSAKTIVITETER);
  const aksjonspunktMedBegrunnelse = findAksjonspunktMedBegrunnelse(aksjonspunkter, AVKLAR_AKTIVITETER);
  const begrunnelse = erOverstyrt ? overstyrAksjonspunktMedBegrunnelse : aksjonspunktMedBegrunnelse;
  return {
    [MANUELL_OVERSTYRING_FIELD]: erOverstyrt || harOverstyrt,
    aksjonspunkter,
    avklarAktiviteter,
    aktiviteterValues,
    ...FaktaBegrunnelseTextField.buildInitialValues(begrunnelse, BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME),
  };
};

const hasOpenAksjonspunkt = (kode: string, aksjonspunkter: Aksjonspunkt[]): boolean => aksjonspunkter.some((ap) => ap.definisjon === kode
  && isAksjonspunktOpen(ap.status));

const hasOpenAvklarAksjonspunkter = (aksjonspunkter: Aksjonspunkt[]): boolean => hasOpenAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter)
|| hasOpenAksjonspunkt(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, aksjonspunkter);

const skalSkjuleKomponent = (aksjonspunkter: Aksjonspunkt[],
  kanOverstyre: boolean,
  erOverstyrt: boolean): boolean => !hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter) && !kanOverstyre && !erOverstyrt;

const skalViseSubmitknappInneforBorderBox = (harAndreAksjonspunkterIPanel: boolean,
  erOverstyrt: boolean,
  erBgOverstyrt: boolean,
  aksjonspunkter: Aksjonspunkt[]): boolean => (harAndreAksjonspunkterIPanel || erOverstyrt || erBgOverstyrt) && !hasOpenAvklarAksjonspunkter(aksjonspunkter);

const skalViseSubmitknappForPanel = (harAndreAksjonspunkterIPanel: boolean,
  erOverstyrt: boolean,
  erBgOverstyrt: boolean,
  aksjonspunkter: Aksjonspunkt[]): boolean => !skalViseSubmitknappInneforBorderBox(harAndreAksjonspunkterIPanel, erOverstyrt, erBgOverstyrt, aksjonspunkter)
    && skalViseSubmitKnappEllerBegrunnelse(aksjonspunkter, erOverstyrt);

const skalViseAktiviteterTabell = (aksjonspunkter: Aksjonspunkt[],
  kanOverstyre: boolean,
  erOverstyrt: boolean): boolean => hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter) || kanOverstyre || erOverstyrt;

const harBlittOverstyrt = (erOverstyrtKnappTrykket: boolean,
  aksjonspunkter: Aksjonspunkt[],
  readOnly: boolean): boolean => erOverstyrtKnappTrykket || hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, aksjonspunkter) || readOnly;

const erSubmittable = (submittable: boolean,
  submitEnabled: boolean,
  formProps: InjectedFormProps): boolean => submittable && submitEnabled && !formProps.error;

const skalViseOverstyringsknapp = (kanOverstyre: boolean,
  erOverstyrt: boolean): boolean => kanOverstyre || erOverstyrt;

type OwnProps = {
    readOnly: boolean;
    submittable: boolean;
    harAndreAksjonspunkterIPanel: boolean;
    alleKodeverk: AlleKodeverk;
    beregningsgrunnlag: Beregningsgrunnlag;
    aksjonspunkter: Aksjonspunkt[];
    erOverstyrer: boolean;
    submitCallback: (aksjonspunktData: AvklarBeregningsaktiviteterAP | OverstyrBeregningsaktiviteterAP) => Promise<void>;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

type MappedOwnProps = {
  formValues?: AvklarAktiviteterValues;
  onSubmit: (formValues: AvklarAktiviteterValues) => void;
  kanOverstyre: boolean;
  helpText: React.ReactNode[];
  isAksjonspunktClosed: boolean;
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  hasBegrunnelse: boolean;
  erOverstyrt: boolean;
  erBgOverstyrt: boolean;
  validate: (values: AvklarAktiviteterValues) => any;
  initialValues: AvklarAktiviteterValues;
}

type OwnState = {
  submitEnabled: boolean;
  erOverstyrtKnappTrykket: boolean;
}

interface DispatchProps {
  reduxFormInitialize: (form: string, data: AvklarAktiviteterValues) => FormAction;
}

/**
 * AvklareAktiviteterPanel
 *
 * Container komponent.. Inneholder panel for å avklare om aktivitet fra opptjening skal tas med i beregning
 */

export class AvklareAktiviteterPanelImpl extends Component<OwnProps & InjectedFormProps & WrappedComponentProps & MappedOwnProps & DispatchProps, OwnState> {
  constructor(props: OwnProps & InjectedFormProps & WrappedComponentProps & MappedOwnProps & DispatchProps) {
    super(props);
    this.state = {
      submitEnabled: false,
      erOverstyrtKnappTrykket: false,
    };
  }

  componentDidMount() {
    const { submitEnabled } = this.state;
    if (!submitEnabled) {
      this.setState({
        submitEnabled: true,
      });
    }
  }

  initializeAktiviteter() {
    const {
      reduxFormInitialize: formInitialize,
      avklarAktiviteter, aksjonspunkter, alleKodeverk, arbeidsgiverOpplysningerPerId,
    } = this.props;
    const { erOverstyrtKnappTrykket } = this.state;
    this.setState((state) => ({
      ...state,
      erOverstyrtKnappTrykket: !erOverstyrtKnappTrykket,
    }));
    formInitialize(formNameAvklarAktiviteter, buildInitialValues(aksjonspunkter, avklarAktiviteter,
      alleKodeverk, arbeidsgiverOpplysningerPerId, !erOverstyrtKnappTrykket));
  }

  render() {
    const {
      props: {
        intl,
        readOnly,
        isAksjonspunktClosed,
        submittable,
        hasBegrunnelse,
        helpText,
        harAndreAksjonspunkterIPanel,
        erOverstyrt,
        aksjonspunkter,
        kanOverstyre,
        erBgOverstyrt,
        alleKodeverk,
        formValues,
        arbeidsgiverOpplysningerPerId,
        ...formProps
      },
      state: {
        submitEnabled,
        erOverstyrtKnappTrykket,
      },
    } = this;
    if (skalSkjuleKomponent(aksjonspunkter, kanOverstyre, erOverstyrt)) {
      return null;
    }
    const avklarAktiviteter = getAvklarAktiviteter(this.props);
    const overskriftOgKnapp = (
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Element className={styles.avsnittOverskrift}>
              <FormattedMessage id="AvklarAktivitetPanel.Overskrift" />
            </Element>
          </FlexColumn>
          {skalViseOverstyringsknapp(kanOverstyre, erOverstyrt) && (
          <FlexColumn>
            <OverstyringKnapp
              onClick={() => this.initializeAktiviteter()}
              erOverstyrt={harBlittOverstyrt(erOverstyrtKnappTrykket, aksjonspunkter, readOnly)}
            />
          </FlexColumn>
          )}
        </FlexRow>
      </FlexContainer>
    );

    if (!skalViseAktiviteterTabell(aksjonspunkter, kanOverstyre, erOverstyrt)) {
      return (
        <>
          <form onSubmit={formProps.handleSubmit}>
            {overskriftOgKnapp}
            <VerticalSpacer sixteenPx />
          </form>
          {harAndreAksjonspunkterIPanel && <VerticalSpacer twentyPx />}
        </>
      );
    }
    return (
      <>
        <form onSubmit={formProps.handleSubmit}>
          {overskriftOgKnapp}
          <VerticalSpacer sixteenPx />
          {hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter) && (
            <AksjonspunktHelpTextTemp isAksjonspunktOpen={!isAksjonspunktClosed}>{helpText}</AksjonspunktHelpTextTemp>
          )}
          {formProps.error && (
            <>
              <VerticalSpacer sixteenPx />
              <AlertStripe type="feil">
                <FormattedMessage id={formProps.error} />
              </AlertStripe>
            </>
          )}
          {erOverstyrt && (
            <Element>
              <FormattedMessage id="AvklareAktiviteter.OverstyrerAktivitetAdvarsel" />
            </Element>
          )}
          <VerticalSpacer twentyPx />
          {avklarAktiviteter && avklarAktiviteter.aktiviteterTomDatoMapping && (
            <VurderAktiviteterPanel
              aktiviteterTomDatoMapping={avklarAktiviteter.aktiviteterTomDatoMapping}
              readOnly={readOnly}
              isAksjonspunktClosed={isAksjonspunktClosed}
              erOverstyrt={erOverstyrt}
              alleKodeverk={alleKodeverk}
              values={formValues}
              harAksjonspunkt={hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter)}
              formNameAvklarAktiviteter={formNameAvklarAktiviteter}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            />
          )}
          <VerticalSpacer twentyPx />
          {skalViseSubmitKnappEllerBegrunnelse(aksjonspunkter, erOverstyrt) && (
            <>
              <FaktaBegrunnelseTextField
                name={BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME}
                isSubmittable={submittable}
                isReadOnly={readOnly}
                hasBegrunnelse={hasBegrunnelse}
              />
              {skalViseSubmitknappInneforBorderBox(harAndreAksjonspunkterIPanel, erOverstyrt, erBgOverstyrt, aksjonspunkter) && (
              <>
                <VerticalSpacer twentyPx />
                <FlexContainer>
                  <FlexRow>
                    <FlexColumn>
                      { /* @ts-ignore Fiks cannot be used as a JSX component */ }
                      <FaktaSubmitButton
                        buttonText={intl.formatMessage({ id: erOverstyrt ? 'AvklarAktivitetPanel.OverstyrText' : 'AvklarAktivitetPanel.ButtonText' })}
                        formName={formProps.form}
                        isSubmittable={erSubmittable(submittable, submitEnabled, formProps)}
                        isReadOnly={readOnly}
                        hasOpenAksjonspunkter={!isAksjonspunktClosed}
                      />
                    </FlexColumn>
                    {kanOverstyre && !hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, aksjonspunkter) && (
                    <FlexColumn>
                      <Knapp
                        htmlType="button"
                        spinner={formProps.submitting}
                        disabled={formProps.submitting}
                        onClick={() => this.initializeAktiviteter()}
                        mini
                      >
                        <FormattedMessage id="AvklareAktiviteter.Avbryt" />
                      </Knapp>
                    </FlexColumn>
                    )}
                  </FlexRow>
                </FlexContainer>
              </>
              )}
            </>
          )}
          {skalViseSubmitknappForPanel(harAndreAksjonspunkterIPanel, erOverstyrt, erBgOverstyrt, aksjonspunkter) && (
            <>
              <VerticalSpacer twentyPx />
              { /* @ts-ignore Fiks cannot be used as a JSX component */ }
              <FaktaSubmitButton
                buttonText={erOverstyrt ? intl.formatMessage({ id: 'AvklarAktivitetPanel.OverstyrText' }) : undefined}
                formName={formProps.form}
                isSubmittable={erSubmittable(submittable, submitEnabled, formProps)}
                isReadOnly={readOnly}
                hasOpenAksjonspunkter={!isAksjonspunktClosed}
              />
            </>
          )}
        </form>
        {harAndreAksjonspunkterIPanel && <VerticalSpacer twentyPx />}
      </>
    );
  }
}

const skalKunneLoseAksjonspunkt = (skalOverstyre: boolean,
  aksjonspunkter: Aksjonspunkt[]): boolean => skalOverstyre || hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter);

const validate = (values: AvklarAktiviteterValues): any => {
  const { avklarAktiviteter } = values;
  if (avklarAktiviteter) {
    const erOverstyrt = values[MANUELL_OVERSTYRING_FIELD];
    return VurderAktiviteterPanel.validate(values, avklarAktiviteter.aktiviteterTomDatoMapping, erOverstyrt);
  }
  return {};
};

export const transformValues = (values: AvklarAktiviteterValues): BeregningAktivitetAP => {
  const { aksjonspunkter, avklarAktiviteter } = values;
  const skalOverstyre = values[MANUELL_OVERSTYRING_FIELD];
  if (skalKunneLoseAksjonspunkt(skalOverstyre, aksjonspunkter)) {
    const vurderAktiviteterTransformed = VurderAktiviteterPanel.transformValues(values, avklarAktiviteter.aktiviteterTomDatoMapping, skalOverstyre);
    const beg = values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME];
    return {
      kode: skalOverstyre ? OVERSTYRING_AV_BEREGNINGSAKTIVITETER : AVKLAR_AKTIVITETER,
      begrunnelse: beg === undefined ? null : beg,
      ...vurderAktiviteterTransformed,
    };
  }
  return null;
};

export const buildInitialValuesAvklarAktiviteter = createSelector([(ownProps: OwnProps) => ownProps.aksjonspunkter,
  (ownProps: OwnProps) => getAvklarAktiviteter(ownProps),
  (ownProps: OwnProps) => ownProps.alleKodeverk,
  (ownProps: OwnProps) => ownProps.arbeidsgiverOpplysningerPerId], buildInitialValues);

const skalKunneOverstyre = (erOverstyrer: boolean,
  aksjonspunkter: Aksjonspunkt[]): boolean => erOverstyrer && !hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter);

const getIsAksjonspunktClosed = createSelector([(ownProps: OwnProps) => ownProps.aksjonspunkter],
  (alleAp): boolean => {
    const relevantOpenAps = alleAp.filter((ap) => ap.definisjon === aksjonspunktCodes.AVKLAR_AKTIVITETER
    || ap.definisjon === aksjonspunktCodes.OVERSTYRING_AV_BEREGNINGSAKTIVITETER)
      .filter((ap) => isAksjonspunktOpen(ap.status));
    return relevantOpenAps.length === 0;
  });

const lagSubmitFn = createSelector([
  (ownProps: OwnProps) => ownProps.submitCallback],
(submitCallback) => (values: AvklarAktiviteterValues): Promise<void> => submitCallback(transformValues(values)));

const mapStateToProps = (state, ownProps: OwnProps): MappedOwnProps => {
  const values = getFormValuesForAvklarAktiviteter(state);
  const initialValues = buildInitialValuesAvklarAktiviteter(ownProps);
  return ({
    initialValues,
    validate,
    formValues: values,
    onSubmit: lagSubmitFn(ownProps),
    kanOverstyre: skalKunneOverstyre(ownProps.erOverstyrer, ownProps.aksjonspunkter),
    helpText: getHelpTextsAvklarAktiviteter(ownProps),
    isAksjonspunktClosed: getIsAksjonspunktClosed(ownProps),
    avklarAktiviteter: getAvklarAktiviteter(ownProps),
    hasBegrunnelse: initialValues && !!initialValues[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME],
    erOverstyrt: !!values && values[MANUELL_OVERSTYRING_FIELD],
    // @ts-ignore FIX reselect
    erBgOverstyrt: erOverstyringAvBeregningsgrunnlag(state, ownProps),
  });
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  ...bindActionCreators({
    reduxFormInitialize,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: formNameAvklarAktiviteter,
  destroyOnUnmount: false,
// @ts-ignore
})(injectIntl(AvklareAktiviteterPanelImpl)));
