import React, { Component, ReactElement } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { createSelector } from 'reselect';
import {
  clearFields, FormAction, formValueSelector, InjectedFormProps, reduxForm,
} from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';
import {
  Element, Normaltekst, Undertekst, Undertittel,
} from 'nav-frontend-typografi';
import { Hovedknapp } from 'nav-frontend-knapper';

import { RadioGroupField, RadioOption, TextAreaField } from '@fpsak-frontend/form';
import {
  AksjonspunktHelpTextTemp, ArrowBox, Image, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import {
  getLanguageFromSprakkode, hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import tilbakekrevingVidereBehandling from '@fpsak-frontend/kodeverk/src/tilbakekrevingVidereBehandling';
import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import questionNormalUrl from '@fpsak-frontend/assets/images/question_normal.svg';
import questionHoverUrl from '@fpsak-frontend/assets/images/question_hover.svg';
import {
  Aksjonspunkt, DetaljertSimuleringResultat, Fagsak, Kodeverk, SimuleringResultat, TilbakekrevingValg,
} from '@fpsak-frontend/types';
import { VurderFeilutbetalingAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import AvregningSummary from './AvregningSummary';
import AvregningTable from './AvregningTable';

import styles from './avregningPanel.less';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);
const simuleringAksjonspunkt = AksjonspunktCode.VURDER_FEILUTBETALING;
const formName = 'AvregnigForm';
const IKKE_SEND = 'IKKE_SEND';

const createHelptextTooltip = (isForeldrepenger: boolean): ReactElement => (
  <FormattedMessage id={isForeldrepenger ? 'Avregning.HjelpetekstForeldrepenger' : 'Avregning.HjelpetekstEngangsstonad'} />
);

const getSimuleringResult = (simuleringResultat: SimuleringResultat, feilutbetaling: number): DetaljertSimuleringResultat | undefined => {
  if (!simuleringResultat) {
    return undefined;
  }
  return feilutbetaling === undefined || feilutbetaling ? simuleringResultat.simuleringResultat : simuleringResultat.simuleringResultatUtenInntrekk;
};

type FormValues = {
  videreBehandling?: string;
  varseltekst?: string;
  begrunnelse?: string;
}

interface PureOwnProps {
  fagsak: Fagsak;
  sprakkode: Kodeverk;
  aksjonspunkter: Aksjonspunkt[];
  simuleringResultat?: SimuleringResultat;
  tilbakekrevingvalg?: TilbakekrevingValg;
  submitCallback: (data: VurderFeilutbetalingAp) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  apCodes: string[];
  isApOpen: boolean;
  previewCallback: (mottaker: string, brevmalkode: string, fritekst: string) => Promise<any>;
}

interface MappedOwnProps {
  hasOpenTilbakekrevingsbehandling: boolean;
  isForeldrepenger: boolean;
  varseltekst?: string;
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
}

type Details = {
  id: number;
  show: boolean;
}

interface DispatchProps {
  clearFields: (form: string, keepTouched: boolean, persistentSubmitErrors: boolean, ...fields: string[]) => FormAction
}

interface OwnState {
  showDetails: Details[];
  feilutbetaling?: number;
}

type Props = PureOwnProps & MappedOwnProps & DispatchProps & WrappedComponentProps & InjectedFormProps;

export class AvregningPanelImpl extends Component<Props, OwnState> {
  static defaultProps = {
    simuleringResultat: null,
  };

  constructor(props: Props) {
    super(props);
    this.toggleDetails = this.toggleDetails.bind(this);
    this.resetFields = this.resetFields.bind(this);
    this.previewMessage = this.previewMessage.bind(this);

    this.state = {
      showDetails: [],
      feilutbetaling: undefined,
    };
  }

  toggleDetails(id: number): void {
    const { showDetails } = this.state;
    const tableIndex = showDetails.findIndex((table: Details) => table.id === id);
    let newShowDetailsArray = [];

    if (tableIndex !== -1) {
      const updatedTable = {
        id,
        show: !showDetails[tableIndex].show,
      };

      newShowDetailsArray = [
        ...showDetails.slice(0, tableIndex),
        updatedTable,
        ...showDetails.slice(tableIndex + 1, showDetails.length - 1),
      ];
    } else {
      newShowDetailsArray = showDetails.concat({
        id,
        show: true,
      });
    }
    this.setState({ showDetails: newShowDetailsArray });
  }

  resetFields(): void {
    const { clearFields: clearFormFields } = this.props;
    const fields = ['videreBehandling'];
    clearFormFields(formName, false, false, ...fields);
  }

  previewMessage(e: React.MouseEvent): void {
    const { varseltekst, previewCallback } = this.props;
    previewCallback('', dokumentMalType.TBKVAR, varseltekst || ' ');
    e.preventDefault();
  }

  render() {
    const { showDetails, feilutbetaling } = this.state;
    const {
      intl,
      simuleringResultat,
      isApOpen,
      apCodes,
      readOnly,
      sprakkode,
      isForeldrepenger,
      hasOpenTilbakekrevingsbehandling,
      ...formProps
    } = this.props;
    const simuleringResultatOption = getSimuleringResult(simuleringResultat, feilutbetaling);

    return (
      <>
        <Undertittel>
          <FormattedMessage id="Avregning.Title" />
        </Undertittel>
        <VerticalSpacer twentyPx />
        { simuleringResultatOption && (
          <div>
            <Row>
              <Column xs="12">
                <AksjonspunktHelpTextTemp isAksjonspunktOpen={isApOpen}>
                  {[<FormattedMessage id="Avregning.AksjonspunktHelpText.5084" key="vurderFeilutbetaling" />]}
                </AksjonspunktHelpTextTemp>
                <VerticalSpacer twentyPx />
                <AvregningSummary
                  fom={simuleringResultatOption.periodeFom}
                  tom={simuleringResultatOption.periodeTom}
                  feilutbetaling={simuleringResultatOption.sumFeilutbetaling}
                  etterbetaling={simuleringResultatOption.sumEtterbetaling}
                  inntrekk={simuleringResultatOption.sumInntrekk}
                  ingenPerioderMedAvvik={simuleringResultatOption.ingenPerioderMedAvvik}
                />
                <AvregningTable
                  showDetails={showDetails}
                  toggleDetails={this.toggleDetails}
                  simuleringResultat={simuleringResultatOption}
                  ingenPerioderMedAvvik={simuleringResultatOption.ingenPerioderMedAvvik}
                />
                <VerticalSpacer twentyPx />
                {hasOpenTilbakekrevingsbehandling && (
                  <Element>
                    <FormattedMessage id="Avregning.ApenTilbakekrevingsbehandling" />
                  </Element>
                )}
              </Column>
            </Row>
          </div>
        )}
        { !simuleringResultat && (
          <FormattedMessage id="Avregning.ingenData" />
        )}
        { apCodes[0] && (
          <div>
            <Row>
              <Column xs="12">
                <form onSubmit={formProps.handleSubmit}>
                  <Row>
                    <Column sm="6">
                      <TextAreaField
                        name="begrunnelse"
                        label={{ id: 'Avregning.vurdering' }}
                        validate={[required, minLength3, maxLength1500, hasValidText]}
                        maxLength={1500}
                        readOnly={readOnly}
                      />
                    </Column>
                    { apCodes[0] === AksjonspunktCode.VURDER_FEILUTBETALING && (
                      <Column sm="6">
                        <Undertekst><FormattedMessage id="Avregning.videreBehandling" /></Undertekst>
                        <VerticalSpacer eightPx />
                        <RadioGroupField name="videreBehandling" validate={[required]} direction="vertical" readOnly={readOnly}>
                          <RadioOption
                            label={<FormattedMessage id="Avregning.gjennomfør" />}
                            value={tilbakekrevingVidereBehandling.TILBAKEKR_INFOTRYGD}
                          >
                            <div className={styles.varsel}>
                              <ArrowBox alignOffset={20}>
                                <Row>
                                  <Column sm="10">
                                    <Normaltekst className={styles.bold}><FormattedMessage id="Avregning.varseltekst" /></Normaltekst>
                                  </Column>
                                  <Column sm="2">
                                    <Image
                                      tabIndex={0}
                                      src={questionNormalUrl}
                                      srcHover={questionHoverUrl}
                                      alt={intl.formatMessage({ id: 'Avregning.HjelpetekstForeldrepenger' })}
                                      tooltip={createHelptextTooltip(isForeldrepenger)}
                                    />
                                  </Column>
                                </Row>
                                <VerticalSpacer eightPx />
                                <TextAreaField
                                  name="varseltekst"
                                  label={{ id: 'Avregning.fritekst' }}
                                  validate={[required, minLength3, maxLength1500, hasValidText]}
                                  maxLength={1500}
                                  readOnly={readOnly}
                                  badges={[{
                                    type: 'fokus',
                                    text: getLanguageFromSprakkode(sprakkode),
                                    title: 'Malform.Beskrivelse',
                                  }]}
                                />
                                {!readOnly && (
                                  <>
                                    <VerticalSpacer fourPx />
                                    <a
                                      href=""
                                      onClick={this.previewMessage}
                                      className={styles.previewLink}
                                    >
                                      <FormattedMessage id="Messages.PreviewText" />
                                    </a>
                                  </>
                                )}
                              </ArrowBox>
                            </div>
                          </RadioOption>
                          <RadioOption
                            label={<FormattedMessage id="Avregning.OpprettMenIkkeSendVarsel" />}
                            value={`${tilbakekrevingVidereBehandling.TILBAKEKR_INFOTRYGD}${IKKE_SEND}`}
                          />
                          <RadioOption
                            label={<FormattedMessage id="Avregning.avvent" />}
                            value={tilbakekrevingVidereBehandling.TILBAKEKR_IGNORER}
                          />
                        </RadioGroupField>
                      </Column>
                    )}
                  </Row>
                  <Row>
                    <Column xs="6">
                      <Hovedknapp
                        mini
                        htmlType="button"
                        onClick={formProps.handleSubmit}
                        disabled={formProps.invalid || formProps.pristine || formProps.submitting || readOnly}
                        spinner={formProps.submitting}
                      >
                        <FormattedMessage id="SubmitButton.ConfirmInformation" />
                      </Hovedknapp>
                    </Column>
                  </Row>
                </form>
              </Column>
            </Row>
          </div>
        )}
      </>
    );
  }
}

export const transformValues = (values: FormValues): VurderFeilutbetalingAp => {
  const { videreBehandling, varseltekst, begrunnelse } = values;
  if (videreBehandling.endsWith(IKKE_SEND)) {
    return {
      kode: AksjonspunktCode.VURDER_FEILUTBETALING,
      begrunnelse,
      videreBehandling: tilbakekrevingVidereBehandling.TILBAKEKR_INFOTRYGD,
    };
  }

  return {
    kode: AksjonspunktCode.VURDER_FEILUTBETALING,
    begrunnelse,
    videreBehandling,
    varseltekst,
  };
};

const buildInitialValues = createSelector(
  [(_state, ownProps: PureOwnProps) => ownProps.tilbakekrevingvalg,
    (_state, ownProps: PureOwnProps) => ownProps.aksjonspunkter], (
    tilbakekrevingvalg, aksjonspunkter,
  ): FormValues => {
    const aksjonspunkt = aksjonspunkter.find((ap) => simuleringAksjonspunkt === ap.definisjon.kode);
    if (!aksjonspunkt || !tilbakekrevingvalg) {
      return undefined;
    }

    const harTypeIkkeSendt = !tilbakekrevingvalg.varseltekst
      && tilbakekrevingvalg.videreBehandling.kode === tilbakekrevingVidereBehandling.TILBAKEKR_INFOTRYGD;

    return {
      videreBehandling: harTypeIkkeSendt ? tilbakekrevingvalg.videreBehandling.kode + IKKE_SEND : tilbakekrevingvalg.videreBehandling.kode,
      varseltekst: tilbakekrevingvalg.varseltekst,
      begrunnelse: aksjonspunkt.begrunnelse,
    };
  },
);

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback],
(submitCallback) => (values: FormValues) => submitCallback(transformValues(values)));

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => {
  const { tilbakekrevingvalg, fagsak } = ownProps;
  const hasOpenTilbakekrevingsbehandling = tilbakekrevingvalg !== undefined
    && tilbakekrevingvalg.videreBehandling.kode === tilbakekrevingVidereBehandling.TILBAKEKR_OPPDATER;
  return {
    varseltekst: formValueSelector(formName)(state, 'varseltekst'),
    initialValues: buildInitialValues(state, ownProps),
    isForeldrepenger: fagsak.fagsakYtelseType.kode === fagsakYtelseType.FORELDREPENGER,
    hasOpenTilbakekrevingsbehandling,
    onSubmit: lagSubmitFn(ownProps),
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  ...bindActionCreators({
    clearFields,
  }, dispatch),
});

// @ts-ignore Fiks
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: formName,
  enableReinitialize: true,
  destroyOnUnmount: false,
})(injectIntl(AvregningPanelImpl)));
