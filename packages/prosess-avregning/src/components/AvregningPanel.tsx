import React, {
  FunctionComponent, ReactElement, useState, useCallback,
} from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import {
  Element, Normaltekst, Undertekst, Undertittel,
} from 'nav-frontend-typografi';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Image } from '@navikt/fp-react-components';

import {
  RadioGroupField, RadioOption, TextAreaField, Form,
} from '@fpsak-frontend/form-hooks';
import {
  AksjonspunktHelpTextTemp, ArrowBox, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import {
  getLanguageFromSprakkode, hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import tilbakekrevingVidereBehandling from '@fpsak-frontend/kodeverk/src/tilbakekrevingVidereBehandling';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import questionNormalUrl from '@fpsak-frontend/assets/images/question_normal.svg';
import questionHoverUrl from '@fpsak-frontend/assets/images/question_hover.svg';
import {
  Aksjonspunkt, Fagsak, SimuleringResultat, TilbakekrevingValg,
} from '@fpsak-frontend/types';
import { VurderFeilutbetalingAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import AvregningSummary from './AvregningSummary';
import AvregningTable from './AvregningTable';

import styles from './avregningPanel.less';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);
const IKKE_SEND = 'IKKE_SEND';

const lagHjelpetekstTooltip = (
  isForeldrepenger: boolean,
): ReactElement => (
  <FormattedMessage id={isForeldrepenger ? 'Avregning.HjelpetekstForeldrepenger' : 'Avregning.HjelpetekstEngangsstonad'} />
);

type Details = {
  id: number;
  show: boolean;
}

type FormValues = {
  videreBehandling?: string;
  varseltekst?: string;
  begrunnelse?: string;
}

const hentToggleDetaljer = (
  showDetails: Details[],
  setShowDetails: (details: Details[]) => void,
) => (
  id: number,
): void => {
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
  setShowDetails(newShowDetailsArray);
};

const transformValues = (
  values: FormValues,
): VurderFeilutbetalingAp => {
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

const buildInitialValues = (
  aksjonspunkt: Aksjonspunkt,
  tilbakekrevingvalg?: TilbakekrevingValg,
): FormValues => {
  if (!aksjonspunkt || !tilbakekrevingvalg) {
    return undefined;
  }

  const harTypeIkkeSendt = !tilbakekrevingvalg.varseltekst
    && tilbakekrevingvalg.videreBehandling === tilbakekrevingVidereBehandling.TILBAKEKR_INFOTRYGD;

  return {
    videreBehandling: harTypeIkkeSendt ? tilbakekrevingvalg.videreBehandling + IKKE_SEND : tilbakekrevingvalg.videreBehandling,
    varseltekst: tilbakekrevingvalg.varseltekst,
    begrunnelse: aksjonspunkt.begrunnelse,
  };
};

interface OwnProps {
  fagsak: Fagsak;
  sprakkode: string;
  aksjonspunkter: Aksjonspunkt[];
  simuleringResultat?: SimuleringResultat;
  tilbakekrevingvalg?: TilbakekrevingValg;
  submitCallback: (data: VurderFeilutbetalingAp) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  isApOpen: boolean;
  previewCallback: (mottaker: string, fritekst: string) => Promise<any>;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

const AvregningPanel: FunctionComponent<OwnProps> = ({
  simuleringResultat,
  isApOpen,
  readOnly,
  sprakkode,
  previewCallback,
  formData,
  setFormData,
  submitCallback,
  tilbakekrevingvalg,
  aksjonspunkter,
  fagsak,
}) => {
  const intl = useIntl();

  const aksjonspunkt = aksjonspunkter.find((ap) => ap.definisjon === AksjonspunktCode.VURDER_FEILUTBETALING);

  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(aksjonspunkt, tilbakekrevingvalg),
  });

  const varseltekst = formMethods.watch('varseltekst');

  const { formState } = formMethods;

  const [showDetails, setShowDetails] = useState<Details[]>([]);

  const isForeldrepenger = fagsak.fagsakYtelseType === fagsakYtelseType.FORELDREPENGER;

  const hasOpenTilbakekrevingsbehandling = tilbakekrevingvalg !== undefined
    && tilbakekrevingvalg.videreBehandling === tilbakekrevingVidereBehandling.TILBAKEKR_OPPDATER;

  const previewMessage = useCallback((e: React.MouseEvent): void => {
    previewCallback('', varseltekst || ' ');
    e.preventDefault();
  }, [varseltekst]);

  const toggleDetaljer = hentToggleDetaljer(showDetails, setShowDetails);

  const simuleringResultatOption = simuleringResultat?.simuleringResultat;

  return (
    <>
      <Undertittel>
        <FormattedMessage id="Avregning.Title" />
      </Undertittel>
      <VerticalSpacer twentyPx />
      {simuleringResultatOption && (
        <Row>
          <Column xs="12">
            {aksjonspunkt && (
              <>
                <AksjonspunktHelpTextTemp isAksjonspunktOpen={isApOpen}>
                  {[<FormattedMessage id="Avregning.AksjonspunktHelpText.5084" key="vurderFeilutbetaling" />]}
                </AksjonspunktHelpTextTemp>
                <VerticalSpacer twentyPx />
              </>
            )}
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
              toggleDetails={toggleDetaljer}
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
      )}
      {!simuleringResultat && (
        <FormattedMessage id="Avregning.ingenData" />
      )}
      {aksjonspunkt && (
        <Row>
          <Column xs="12">
            <Form
              formMethods={formMethods}
              onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
              setDataOnUnmount={setFormData}
            >
              <Row>
                <Column sm="6">
                  <TextAreaField
                    name="begrunnelse"
                    label={intl.formatMessage({ id: 'Avregning.vurdering' })}
                    validate={[required, minLength3, maxLength1500, hasValidText]}
                    maxLength={1500}
                    readOnly={readOnly}
                  />
                </Column>
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
                                tooltip={lagHjelpetekstTooltip(isForeldrepenger)}
                              />
                            </Column>
                          </Row>
                          <VerticalSpacer eightPx />
                          <TextAreaField
                            name="varseltekst"
                            label={intl.formatMessage({ id: 'Avregning.fritekst' })}
                            validate={[required, minLength3, maxLength1500, hasValidText]}
                            maxLength={1500}
                            readOnly={readOnly}
                            badges={[{
                              type: 'fokus',
                              text: getLanguageFromSprakkode(sprakkode),
                              titleText: intl.formatMessage({ id: 'Malform.Beskrivelse' }),
                            }]}
                          />
                          {!readOnly && (
                            <>
                              <VerticalSpacer fourPx />
                              <a
                                href=""
                                onClick={previewMessage}
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
              </Row>
              <Row>
                <Column xs="6">
                  <Hovedknapp
                    mini
                    htmlType="submit"
                    disabled={!formState.isDirty || formState.isSubmitting || readOnly}
                    spinner={formState.isSubmitting}
                  >
                    <FormattedMessage id="SubmitButton.ConfirmInformation" />
                  </Hovedknapp>
                </Column>
              </Row>
            </Form>
          </Column>
        </Row>
      )}
    </>
  );
};

export default AvregningPanel;
