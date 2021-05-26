import React, { Component, ReactNode } from 'react';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
  clearFields, change, getFormValues, InjectedFormProps, reduxForm, formValueSelector,
} from 'redux-form';
import moment from 'moment';
import { Column, Row } from 'nav-frontend-grid';
import {
  Element, Normaltekst, Undertekst,
} from 'nav-frontend-typografi';
import { Hovedknapp } from 'nav-frontend-knapper';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import { TextAreaField, CheckboxField } from '@fpsak-frontend/form';
import { VerticalSpacer, AksjonspunktHelpTextTemp, FaktaGruppe } from '@fpsak-frontend/shared-components';
import {
  DDMMYYYY_DATE_FORMAT, hasValidText, maxLength, minLength, required, getKodeverknavnFn, decodeHtmlEntity,
} from '@fpsak-frontend/utils';
import {
  Aksjonspunkt, FeilutbetalingFakta, AlleKodeverk, FeilutbetalingAarsak, AlleKodeverkTilbakekreving,
} from '@fpsak-frontend/types';
import { AvklartFaktaFeilutbetalingAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import FeilutbetalingPerioderTable from './FeilutbetalingPerioderTable';

import styles from './feilutbetalingInfoPanel.less';

const formName = 'FaktaFeilutbetalingForm';
const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  begrunnelse?: string;
  perioder?: {
    fom: string;
    tom: string;
    årsak?: string;
  }[];
}

interface PureOwnProps {
  feilutbetalingFakta: FeilutbetalingFakta;
  feilutbetalingAarsak: FeilutbetalingAarsak;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: AvklartFaktaFeilutbetalingAp) => Promise<void>;
  hasOpenAksjonspunkter: boolean;
  readOnly: boolean;
  alleKodeverk: AlleKodeverkTilbakekreving;
  fpsakKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

interface MappedOwnProps {
  årsaker: FeilutbetalingAarsak['hendelseTyper'];
  behandlePerioderSamlet: boolean;
  formValues: FormValues;
  initialValues: FormValues;
  onSubmit: (values: FormValues) => void;
}

interface DispatchProps {
  clearFields: any;
}

export class FeilutbetalingInfoPanelImpl extends Component<PureOwnProps & MappedOwnProps & DispatchProps & InjectedFormProps> {
  constructor(props: PureOwnProps & MappedOwnProps & DispatchProps & InjectedFormProps) {
    super(props);
    this.onChangeÅrsak = this.onChangeÅrsak.bind(this);
    this.onChangeUnderÅrsak = this.onChangeUnderÅrsak.bind(this);
  }

  onChangeÅrsak(event: ReactNode, elementId: number, årsak: string): void {
    const {
      clearFields: clearFormFields, change: changeValue, formValues, behandlePerioderSamlet,
    } = this.props;

    if (behandlePerioderSamlet) {
      const { perioder } = formValues;
      // @ts-ignore Fiks
      const { value: nyÅrsak } = event.target;

      for (let i = 0; i < perioder.length; i += 1) {
        if (i !== elementId) {
          const { årsak: periodeÅrsak } = perioder[i];
          const fields = [`perioder.${i}.${periodeÅrsak}`];
          clearFormFields(formName, false, false, ...fields);
          changeValue(`perioder.${i}.årsak`, nyÅrsak);
        }
      }
    }

    const fieldArray = [`perioder.${elementId}.${årsak}`];
    clearFormFields(formName, false, false, ...fieldArray);
  }

  onChangeUnderÅrsak(event: ReactNode, elementId: number, årsak: string): void {
    const {
      change: changeValue, formValues, behandlePerioderSamlet,
    } = this.props;

    if (behandlePerioderSamlet) {
      const { perioder } = formValues;
      // @ts-ignore Fiks
      const { value: nyUnderÅrsak } = event.target;

      for (let i = 0; i < perioder.length; i += 1) {
        const { årsak: elementÅrsak } = perioder[i];
        /*
          Passer på at man endrer bare for perioder med samme årsak.
          Just in case noen har klikket av behandlePerioderSamlet, endret årsak og underÅrsak på element, og så klikket på behandlePerioderSamlet igjen.
        */
        if (i !== elementId && elementÅrsak === årsak) {
          changeValue(`perioder.${i}.${årsak}.underÅrsak`, nyUnderÅrsak);
        }
      }
    }
  }

  render() {
    const {
      hasOpenAksjonspunkter,
      feilutbetalingFakta,
      årsaker,
      readOnly,
      alleMerknaderFraBeslutter,
      alleKodeverk,
      fpsakKodeverk,
      ...formProps
    } = this.props;

    const getKodeverknavn = getKodeverknavnFn(alleKodeverk, kodeverkTyper);
    const getFpsakKodeverknavn = getKodeverknavnFn(fpsakKodeverk, kodeverkTyper);
    const feilutbetaling = feilutbetalingFakta.behandlingFakta;

    return (
      <>
        <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter}>
          {[<FormattedMessage key="1" id="FeilutbetalingInfoPanel.Aksjonspunkt" />]}
        </AksjonspunktHelpTextTemp>
        <VerticalSpacer sixteenPx />
        <form onSubmit={formProps.handleSubmit}>
          <Row className={styles.smallMarginBottom}>
            <Column xs="12" md="6">
              <Row className={styles.smallMarginBottom}>
                <Column xs="12">
                  <Element>
                    <FormattedMessage id="FeilutbetalingInfoPanel.Feilutbetaling" />
                  </Element>
                </Column>
              </Row>
              <Row>
                <Column xs="12" md="4">
                  <Row>
                    <Column xs="12">
                      <Undertekst className={styles.undertekstMarginBottom}>
                        <FormattedMessage id="FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling" />
                      </Undertekst>
                      <Normaltekst className={styles.smallPaddingRight}>
                        {`${moment(feilutbetaling.totalPeriodeFom)
                          .format(DDMMYYYY_DATE_FORMAT)} - ${
                          moment(feilutbetaling.totalPeriodeTom)
                            .format(DDMMYYYY_DATE_FORMAT)}`}
                      </Normaltekst>
                    </Column>
                  </Row>
                </Column>
                <Column xs="12" md="4">
                  <Row>
                    <Column xs="12">
                      <Undertekst className={styles.undertekstMarginBottom}>
                        <FormattedMessage id="FeilutbetalingInfoPanel.FeilutbetaltBeløp" />
                      </Undertekst>
                      <Normaltekst className={styles.redText}>
                        {feilutbetaling.aktuellFeilUtbetaltBeløp}
                      </Normaltekst>
                    </Column>
                  </Row>
                </Column>
                <Column xs="12" md="4">
                  <Row>
                    <Column xs="12">
                      <Undertekst className={styles.undertekstMarginBottom}>
                        <FormattedMessage id="FeilutbetalingInfoPanel.TidligereVarseltBeløp" />
                      </Undertekst>
                      <Normaltekst className={styles.smallPaddingRight}>
                        {feilutbetaling.tidligereVarseltBeløp
                          ? feilutbetaling.tidligereVarseltBeløp : <FormattedMessage id="FeilutbetalingInfoPanel.IkkeVarslet" />}
                      </Normaltekst>
                    </Column>
                  </Row>
                </Column>
              </Row>
              <Row className={styles.smallMarginTop}>
                <Column xs="11">
                  <CheckboxField
                    name="behandlePerioderSamlet"
                    label={{ id: 'FeilutbetalingInfoPanel.BehandlePerioderSamlet' }}
                    readOnly={readOnly}
                  />
                </Column>
              </Row>
              <Row className={styles.smallMarginTop}>
                <Column xs="11">
                  <FaktaGruppe
                    merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodesTilbakekreving.AVKLAR_FAKTA_FOR_FEILUTBETALING]}
                    withoutBorder
                  >
                    <FeilutbetalingPerioderTable
                      perioder={feilutbetaling.perioder}
                      formName={formName}
                      årsaker={årsaker}
                      readOnly={readOnly}
                      onChangeÅrsak={this.onChangeÅrsak}
                      onChangeUnderÅrsak={this.onChangeUnderÅrsak}
                    />
                  </FaktaGruppe>
                </Column>
              </Row>
            </Column>
            <Column xs="12" md="6">
              <Row className={styles.smallMarginBottom}>
                <Column xs="12">
                  <Element>
                    <FormattedMessage id="FeilutbetalingInfoPanel.Revurdering" />
                  </Element>
                </Column>
              </Row>
              <Row>
                <Column xs="6">
                  <Undertekst className={styles.undertekstMarginBottom}>
                    <FormattedMessage id="FeilutbetalingInfoPanel.Årsaker" />
                  </Undertekst>
                  { feilutbetaling.behandlingÅrsaker && (
                    <Normaltekst className={styles.smallPaddingRight}>
                      {feilutbetaling.behandlingÅrsaker.map((ba) => getFpsakKodeverknavn(ba.behandlingArsakType)).join(', ')}
                    </Normaltekst>
                  )}
                </Column>
                {feilutbetaling.datoForRevurderingsvedtak && (
                  <Column xs="6">
                    <Undertekst className={styles.undertekstMarginBottom}>
                      <FormattedMessage id="FeilutbetalingInfoPanel.DatoForRevurdering" />
                    </Undertekst>
                    <Normaltekst className={styles.smallPaddingRight}>
                      {moment(feilutbetaling.datoForRevurderingsvedtak)
                        .format(DDMMYYYY_DATE_FORMAT)}
                    </Normaltekst>
                  </Column>
                )}
              </Row>
              <Row className={styles.smallMarginTop}>
                <Column xs="6">
                  <Undertekst className={styles.undertekstMarginBottom}>
                    <FormattedMessage id="FeilutbetalingInfoPanel.Resultat" />
                  </Undertekst>
                  {feilutbetaling.behandlingsresultat && (
                    <Normaltekst className={styles.smallPaddingRight}>
                      {getFpsakKodeverknavn(feilutbetaling.behandlingsresultat.type)}
                    </Normaltekst>
                  )}
                </Column>
                <Column xs="6">
                  <Undertekst className={styles.undertekstMarginBottom}>
                    <FormattedMessage id="FeilutbetalingInfoPanel.Konsekvens" />
                  </Undertekst>
                  {feilutbetaling.behandlingsresultat && (
                    <Normaltekst className={styles.smallPaddingRight}>
                      {feilutbetaling.behandlingsresultat.konsekvenserForYtelsen.map((ba) => getFpsakKodeverknavn(ba)).join(', ')}
                    </Normaltekst>
                  )}
                </Column>
              </Row>
              <Row className={styles.smallMarginTop}>
                <Column xs="6">
                  <Undertekst className={styles.undertekstMarginBottom}>
                    <FormattedMessage id="FeilutbetalingInfoPanel.Tilbakekrevingsvalg" />
                  </Undertekst>
                  {feilutbetaling.tilbakekrevingValg && (
                    <Normaltekst className={styles.smallPaddingRight}>
                      {getKodeverknavn(feilutbetaling.tilbakekrevingValg.videreBehandling)}
                    </Normaltekst>
                  )}
                </Column>
              </Row>
            </Column>
          </Row>
          <Row>
            <Column md="6">
              <TextAreaField
                name="begrunnelse"
                label={{ id: 'FeilutbetalingInfoPanel.Begrunnelse' }}
                validate={[required, minLength3, maxLength1500, hasValidText]}
                maxLength={1500}
                readOnly={readOnly}
              />
            </Column>
          </Row>
          <VerticalSpacer eightPx />
          <Row>
            <Column md="6">
              <Hovedknapp
                mini
                htmlType="button"
                onClick={formProps.handleSubmit}
                disabled={readOnly || formProps.pristine || formProps.submitting}
                spinner={formProps.submitting}
              >
                <FormattedMessage id="FeilutbetalingInfoPanel.Confirm" />
              </Hovedknapp>
            </Column>
          </Row>
        </form>
      </>
    );
  }
}

const buildInitialValues = createSelector([
  (ownProps: PureOwnProps) => ownProps.feilutbetalingFakta], (feilutbetalingFakta): FormValues => {
  const { behandlingFakta } = feilutbetalingFakta;
  const { perioder, begrunnelse } = behandlingFakta;
  return {
    begrunnelse: decodeHtmlEntity(begrunnelse),
    perioder: [...perioder].sort((a, b) => moment(a.fom).diff(moment(b.fom)))
      .map((p) => {
        const {
          fom, tom, feilutbetalingÅrsakDto,
        } = p;

        const period = { fom, tom };

        if (!feilutbetalingÅrsakDto) {
          return period;
        }

        const {
          hendelseType,
          hendelseUndertype,
        } = feilutbetalingÅrsakDto;

        return {
          ...period,
          årsak: hendelseType.kode,
          [hendelseType.kode]: {
            underÅrsak: hendelseUndertype ? hendelseUndertype.kode : null,
          },
        };
      }),
  };
});

const getSortedFeilutbetalingArsaker = createSelector([
  (ownProps: PureOwnProps) => ownProps.feilutbetalingAarsak], (feilutbetalingArsaker): FeilutbetalingAarsak['hendelseTyper'] => {
  const { hendelseTyper } = feilutbetalingArsaker;
  return hendelseTyper.sort((ht1, ht2) => {
    const hendelseType1 = ht1.hendelseType.navn;
    const hendelseType2 = ht2.hendelseType.navn;
    const hendelseType1ErParagraf = hendelseType1.startsWith('§');
    const hendelseType2ErParagraf = hendelseType2.startsWith('§');
    const ht1v = hendelseType1ErParagraf ? hendelseType1.replace(/\D/g, '') : hendelseType1;
    const ht2v = hendelseType2ErParagraf ? hendelseType2.replace(/\D/g, '') : hendelseType2;
    // @ts-ignore Kan ein ikkje alltid bruka localeCompare?
    return hendelseType1ErParagraf && hendelseType2ErParagraf ? ht1v - ht2v : ht1v.localeCompare(ht2v);
  });
});

const transformValues = (values: FormValues, årsaker: FeilutbetalingAarsak['hendelseTyper']): AvklartFaktaFeilutbetalingAp => {
  const feilutbetalingFakta = values.perioder.map((periode) => {
    const feilutbetalingÅrsak = årsaker.find((el) => el.hendelseType.kode === periode.årsak);
    const findUnderÅrsakObjekt = (underÅrsak) => feilutbetalingÅrsak.hendelseUndertyper.find((el) => el.kode === underÅrsak);
    const feilutbetalingUnderÅrsak = findUnderÅrsakObjekt(periode[periode.årsak].underÅrsak);

    return {
      fom: periode.fom,
      tom: periode.tom,
      årsak: {
        hendelseType: feilutbetalingÅrsak.hendelseType,
        hendelseUndertype: feilutbetalingUnderÅrsak,
      },
    };
  });

  return {
    kode: aksjonspunktCodesTilbakekreving.AVKLAR_FAKTA_FOR_FEILUTBETALING,
    begrunnelse: values.begrunnelse,
    feilutbetalingFakta,
  };
};

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback,
  getSortedFeilutbetalingArsaker],
(submitCallback, årsaker) => (values: FormValues) => submitCallback(transformValues(values, årsaker)));

const mapStateToPropsFactory = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  årsaker: getSortedFeilutbetalingArsaker(ownProps),
  initialValues: buildInitialValues(ownProps),
  behandlePerioderSamlet: formValueSelector(formName)(state, 'behandlePerioderSamlet'),
  formValues: getFormValues(formName)(state) || {},
  onSubmit: lagSubmitFn(ownProps),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  ...bindActionCreators({
    clearFields,
    change,
  }, dispatch),
});

const FeilutbetalingForm = reduxForm({
  form: formName,
  destroyOnUnmount: false,
})(FeilutbetalingInfoPanelImpl);
export default connect(mapStateToPropsFactory, mapDispatchToProps)(FeilutbetalingForm);
