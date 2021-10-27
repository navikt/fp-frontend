import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import moment from 'moment';
import { Column, Row } from 'nav-frontend-grid';
import {
  Element, Normaltekst, Undertekst,
} from 'nav-frontend-typografi';
import { Hovedknapp } from 'nav-frontend-knapper';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import { TextAreaField, CheckboxField, Form } from '@fpsak-frontend/form-hooks';
import { VerticalSpacer, AksjonspunktHelpTextTemp, FaktaGruppe } from '@fpsak-frontend/shared-components';
import {
  DDMMYYYY_DATE_FORMAT, hasValidText, maxLength, minLength, required, getKodeverknavnFn, decodeHtmlEntity,
} from '@fpsak-frontend/utils';
import {
  Aksjonspunkt, FeilutbetalingFakta, AlleKodeverk, FeilutbetalingAarsak, AlleKodeverkTilbakekreving,
} from '@fpsak-frontend/types';
import { AvklartFaktaFeilutbetalingAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import FeilutbetalingPerioderFieldArray, { FormValues as PeriodeFormValues } from './FeilutbetalingPerioderFieldArray';

import styles from './feilutbetalingInfoPanel.less';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  begrunnelse?: string;
  behandlePerioderSamlet?: boolean;
} & PeriodeFormValues;

const sorterPerioder = (
  feilutbetalingFakta: FeilutbetalingFakta,
) => ([...feilutbetalingFakta.behandlingFakta.perioder].sort((a, b) => moment(a.fom).diff(moment(b.fom))));

const buildInitialValues = (feilutbetalingFakta: FeilutbetalingFakta): FormValues => {
  const { behandlingFakta: { begrunnelse } } = feilutbetalingFakta;
  return {
    begrunnelse: decodeHtmlEntity(begrunnelse),
    perioder: sorterPerioder(feilutbetalingFakta)
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
};

const transformValues = (values: FormValues, årsaker: FeilutbetalingAarsak['hendelseTyper']): AvklartFaktaFeilutbetalingAp => {
  const feilutbetalingFakta = values.perioder.map((periode) => {
    const feilutbetalingÅrsak = årsaker.find((el) => el.hendelseType.kode === periode.årsak);
    const feilutbetalingUnderÅrsak = feilutbetalingÅrsak.hendelseUndertyper.find((el) => el.kode === periode[periode.årsak]?.underÅrsak);

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

const getSortedFeilutbetalingArsaker = (feilutbetalingArsaker: FeilutbetalingAarsak): FeilutbetalingAarsak['hendelseTyper'] => {
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
};

interface OwnProps {
  feilutbetalingFakta: FeilutbetalingFakta;
  feilutbetalingAarsak: FeilutbetalingAarsak;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: AvklartFaktaFeilutbetalingAp) => Promise<void>;
  hasOpenAksjonspunkter: boolean;
  readOnly: boolean;
  alleKodeverk: AlleKodeverkTilbakekreving;
  fpsakKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  formData?: FormValues,
  setFormData: (data: FormValues) => void,
}

const FeilutbetalingInfoPanel: FunctionComponent<OwnProps> = ({
  hasOpenAksjonspunkter,
  feilutbetalingAarsak,
  feilutbetalingFakta,
  readOnly,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  fpsakKodeverk,
  formData,
  setFormData,
  submitCallback,
}) => {
  const intl = useIntl();

  const getKodeverknavn = getKodeverknavnFn(alleKodeverk, kodeverkTyper);
  const getFpsakKodeverknavn = getKodeverknavnFn(fpsakKodeverk, kodeverkTyper);
  const feilutbetaling = feilutbetalingFakta.behandlingFakta;

  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(feilutbetalingFakta),
  });

  const behandlePerioderSamlet = formMethods.watch('behandlePerioderSamlet');

  const årsaker = getSortedFeilutbetalingArsaker(feilutbetalingAarsak);

  return (
    <>
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter}>
        {[<FormattedMessage key="1" id="FeilutbetalingInfoPanel.Aksjonspunkt" />]}
      </AksjonspunktHelpTextTemp>
      <VerticalSpacer sixteenPx />
      <Form
        formMethods={formMethods}
        onSubmit={(values: FormValues) => submitCallback(transformValues(values, årsaker))}
        setDataOnUnmount={setFormData}
      >
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
                  label={intl.formatMessage({ id: 'FeilutbetalingInfoPanel.BehandlePerioderSamlet' })}
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
                  <FeilutbetalingPerioderFieldArray
                    perioder={sorterPerioder(feilutbetalingFakta)}
                    behandlePerioderSamlet={behandlePerioderSamlet}
                    årsaker={årsaker}
                    readOnly={readOnly}
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
              label={intl.formatMessage({ id: 'FeilutbetalingInfoPanel.Begrunnelse' })}
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
              disabled={readOnly || !formMethods.formState.isDirty || formMethods.formState.isSubmitting}
              spinner={formMethods.formState.isSubmitting}
            >
              <FormattedMessage id="FeilutbetalingInfoPanel.Confirm" />
            </Hovedknapp>
          </Column>
        </Row>
      </Form>
    </>
  );
};

export default FeilutbetalingInfoPanel;
