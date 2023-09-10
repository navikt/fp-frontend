import React, { FunctionComponent, ReactElement, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Label, BodyShort, Heading, Button } from '@navikt/ds-react';

import { RadioGroupPanel, TextAreaField, Form } from '@navikt/ft-form-hooks';
import {
  AksjonspunktHelpTextTemp,
  ArrowBox,
  VerticalSpacer,
  FlexContainer,
  FlexRow,
  FlexColumn,
  Tooltip,
} from '@navikt/ft-ui-komponenter';
import { getLanguageFromSprakkode } from '@navikt/ft-utils';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { fagsakYtelseType, AksjonspunktCode, tilbakekrevingVidereBehandling } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Fagsak, SimuleringResultat, TilbakekrevingValg } from '@navikt/fp-types';
import { VurderFeilutbetalingAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import { QuestionmarkDiamondIcon } from '@navikt/aksel-icons';
import AvregningSummary from './AvregningSummary';
import AvregningTable from './AvregningTable';

import styles from './avregningPanel.module.css';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);
const IKKE_SEND = 'IKKE_SEND';

const lagHjelpetekstTooltip = (isForeldrepenger: boolean): ReactElement => (
  <FormattedMessage
    id={isForeldrepenger ? 'Avregning.HjelpetekstForeldrepenger' : 'Avregning.HjelpetekstEngangsstonad'}
  />
);

type Details = {
  id: number;
  show: boolean;
};

type FormValues = {
  videreBehandling?: string;
  varseltekst?: string;
  begrunnelse?: string;
};

const hentToggleDetaljer =
  (showDetails: Details[], setShowDetails: (details: Details[]) => void) =>
  (id: number): void => {
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

const transformValues = (values: FormValues): VurderFeilutbetalingAp => {
  const { videreBehandling, varseltekst, begrunnelse } = values;
  if (videreBehandling && videreBehandling.endsWith(IKKE_SEND)) {
    return {
      kode: AksjonspunktCode.VURDER_FEILUTBETALING,
      begrunnelse,
      videreBehandling: tilbakekrevingVidereBehandling.TILBAKEKR_INFOTRYGD,
    };
  }

  return {
    kode: AksjonspunktCode.VURDER_FEILUTBETALING,
    begrunnelse,
    videreBehandling: videreBehandling!,
    varseltekst,
  };
};

const buildInitialValues = (
  aksjonspunkt?: Aksjonspunkt,
  tilbakekrevingvalg?: TilbakekrevingValg,
): FormValues | undefined => {
  if (!aksjonspunkt || !tilbakekrevingvalg) {
    return undefined;
  }

  const harTypeIkkeSendt =
    !tilbakekrevingvalg.varseltekst &&
    tilbakekrevingvalg.videreBehandling === tilbakekrevingVidereBehandling.TILBAKEKR_INFOTRYGD;

  return {
    videreBehandling: harTypeIkkeSendt
      ? tilbakekrevingvalg.videreBehandling + IKKE_SEND
      : tilbakekrevingvalg.videreBehandling,
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

  const aksjonspunkt = aksjonspunkter.find(ap => ap.definisjon === AksjonspunktCode.VURDER_FEILUTBETALING);

  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(aksjonspunkt, tilbakekrevingvalg),
  });

  const varseltekst = formMethods.watch('varseltekst');

  const { formState } = formMethods;

  const [showDetails, setShowDetails] = useState<Details[]>([]);

  const isForeldrepenger = fagsak.fagsakYtelseType === fagsakYtelseType.FORELDREPENGER;

  const hasOpenTilbakekrevingsbehandling =
    tilbakekrevingvalg !== undefined &&
    tilbakekrevingvalg.videreBehandling === tilbakekrevingVidereBehandling.TILBAKEKR_OPPDATER;

  const previewMessage = useCallback(
    (e: React.MouseEvent): void => {
      previewCallback('', varseltekst || ' ');
      e.preventDefault();
    },
    [varseltekst],
  );

  const toggleDetaljer = hentToggleDetaljer(showDetails, setShowDetails);

  const simuleringResultatOption = simuleringResultat?.simuleringResultat;

  return (
    <>
      <Heading size="small">
        <FormattedMessage id="Avregning.Title" />
      </Heading>
      <VerticalSpacer twentyPx />
      {simuleringResultatOption && (
        <>
          {aksjonspunkt && (
            <>
              <AksjonspunktHelpTextTemp isAksjonspunktOpen={isApOpen}>
                {[<FormattedMessage id="Avregning.AksjonspunktHelpText.5084" key="vurderFeilutbetaling" />]}
              </AksjonspunktHelpTextTemp>
              <VerticalSpacer twentyPx />
            </>
          )}
          <AvregningSummary
            fom={simuleringResultatOption.periode?.fom}
            tom={simuleringResultatOption.periode?.tom}
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
            <Label size="small">
              <FormattedMessage id="Avregning.ApenTilbakekrevingsbehandling" />
            </Label>
          )}
        </>
      )}
      {!simuleringResultat && <FormattedMessage id="Avregning.ingenData" />}
      {aksjonspunkt && (
        <Form
          formMethods={formMethods}
          onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
          setDataOnUnmount={setFormData}
        >
          <FlexContainer>
            <FlexRow>
              <FlexColumn className={styles.col}>
                <TextAreaField
                  name="begrunnelse"
                  label={intl.formatMessage({ id: 'Avregning.vurdering' })}
                  validate={[required, minLength3, maxLength1500, hasValidText]}
                  maxLength={1500}
                  readOnly={readOnly}
                />
              </FlexColumn>
              <FlexColumn className={styles.col}>
                <RadioGroupPanel
                  name="videreBehandling"
                  label={<FormattedMessage id="Avregning.videreBehandling" />}
                  validate={[required]}
                  isReadOnly={readOnly}
                  radios={[
                    {
                      value: tilbakekrevingVidereBehandling.TILBAKEKR_INFOTRYGD,
                      label: <FormattedMessage id="Avregning.gjennomfør" />,
                      element: (
                        <div className={styles.varsel}>
                          <VerticalSpacer eightPx />
                          <ArrowBox alignOffset={20}>
                            <FlexContainer>
                              <FlexRow>
                                <FlexColumn>
                                  <BodyShort size="small" className={styles.bold}>
                                    <FormattedMessage id="Avregning.varseltekst" />
                                  </BodyShort>
                                </FlexColumn>
                                <FlexColumn>
                                  <Tooltip content={lagHjelpetekstTooltip(isForeldrepenger)}>
                                    <QuestionmarkDiamondIcon className={styles.helpTextImage} />
                                  </Tooltip>
                                </FlexColumn>
                              </FlexRow>
                            </FlexContainer>
                            <VerticalSpacer eightPx />
                            <TextAreaField
                              name="varseltekst"
                              label={intl.formatMessage({ id: 'Avregning.fritekst' })}
                              validate={[required, minLength3, maxLength1500, hasValidText]}
                              maxLength={1500}
                              readOnly={readOnly}
                              badges={[
                                {
                                  type: 'info',
                                  titleText: getLanguageFromSprakkode(sprakkode),
                                },
                              ]}
                            />
                            {!readOnly && (
                              <>
                                <VerticalSpacer fourPx />
                                <a href="" onClick={previewMessage} className={styles.previewLink}>
                                  <FormattedMessage id="Messages.PreviewText" />
                                </a>
                              </>
                            )}
                          </ArrowBox>
                        </div>
                      ),
                    },
                    {
                      value: `${tilbakekrevingVidereBehandling.TILBAKEKR_INFOTRYGD}${IKKE_SEND}`,
                      label: <FormattedMessage id="Avregning.OpprettMenIkkeSendVarsel" />,
                    },
                    {
                      value: tilbakekrevingVidereBehandling.TILBAKEKR_IGNORER,
                      label: <FormattedMessage id="Avregning.avvent" />,
                    },
                  ]}
                />
              </FlexColumn>
            </FlexRow>
            <FlexRow>
              <FlexColumn>
                <Button
                  size="small"
                  variant="primary"
                  disabled={!formState.isDirty || formState.isSubmitting || readOnly}
                  loading={formState.isSubmitting}
                >
                  <FormattedMessage id="SubmitButton.ConfirmInformation" />
                </Button>
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        </Form>
      )}
    </>
  );
};

export default AvregningPanel;
