import React, { FunctionComponent, useState, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Label, Heading, Button } from '@navikt/ds-react';

import { Form } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AksjonspunktCode, tilbakekrevingVidereBehandling } from '@navikt/fp-kodeverk';
import {
  Aksjonspunkt,
  Fagsak,
  SimuleringResultat,
  TilbakekrevingValg,
  ArbeidsgiverOpplysningerPerId,
} from '@navikt/fp-types';
import { KontrollerEtterbetalingTilSøkerAP, VurderFeilutbetalingAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import SimuleringSummary from './SimuleringSummary';
import SimuleringTable from './SimuleringTable';

import TilbakekrevSøkerForm, {
  buildInitialValues as buildInitialValuesTilbakekrev,
  transformValues as transformValuesTilbakekrev,
} from './TilbakekrevSøkerForm';

import EtterbetalingSøkerForm, {
  buildInitialValues as buildInitialValuesEtterbetaling,
  transformValues as transformValuesEtterbetaling,
} from './EtterbetalingSøkerForm';

type Details = {
  id: number;
  show: boolean;
};

type FormValues = {
  videreBehandling?: string;
  varseltekst?: string;
  begrunnelse?: string;
};

type SimuleringAksjonspunkt = VurderFeilutbetalingAp | KontrollerEtterbetalingTilSøkerAP;

const finnAksjonspunkt = (aksjonspunkter: Aksjonspunkt[], kode: string) =>
  aksjonspunkter.find(ap => ap.definisjon === kode);

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

const transformValues = (values: FormValues, aksjonspunkter: Aksjonspunkt[]): SimuleringAksjonspunkt[] => {
  const aksjonspunkterTilSubmit: SimuleringAksjonspunkt[] = [];
  if (finnAksjonspunkt(aksjonspunkter, AksjonspunktCode.VURDER_FEILUTBETALING)) {
    aksjonspunkterTilSubmit.push(transformValuesTilbakekrev(values));
  }
  if (finnAksjonspunkt(aksjonspunkter, AksjonspunktCode.KONTROLLER_STOR_ETTERBETALING_SØKER)) {
    aksjonspunkterTilSubmit.push(transformValuesEtterbetaling(values));
  }
  return aksjonspunkterTilSubmit;
};

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  tilbakekrevingvalg?: TilbakekrevingValg,
): FormValues | undefined => {
  if (aksjonspunkter.length === 0) {
    return undefined;
  }
  return {
    ...buildInitialValuesTilbakekrev(
      finnAksjonspunkt(aksjonspunkter, AksjonspunktCode.VURDER_FEILUTBETALING),
      tilbakekrevingvalg,
    ),
    ...buildInitialValuesEtterbetaling(
      finnAksjonspunkt(aksjonspunkter, AksjonspunktCode.KONTROLLER_STOR_ETTERBETALING_SØKER),
    ),
  };
};

const lagAksjonspunktTitler = (aksjonspunkter: Aksjonspunkt[]): ReactElement[] => {
  const elementer: ReactElement[] = [];
  if (finnAksjonspunkt(aksjonspunkter, AksjonspunktCode.VURDER_FEILUTBETALING)) {
    elementer.push(<FormattedMessage id="Simulering.AksjonspunktHelpText.5084" key="vurderFeilutbetaling" />);
  }
  if (finnAksjonspunkt(aksjonspunkter, AksjonspunktCode.KONTROLLER_STOR_ETTERBETALING_SØKER)) {
    elementer.push(<FormattedMessage id="Simulering.Etterbetaling.Tittel" key="kontrollerFeilutbetaling" />);
  }
  return elementer;
};

interface OwnProps {
  fagsak: Fagsak;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  sprakkode: string;
  aksjonspunkter: Aksjonspunkt[];
  simuleringResultat?: SimuleringResultat;
  tilbakekrevingvalg?: TilbakekrevingValg;
  submitCallback: (data: SimuleringAksjonspunkt[]) => Promise<void>;
  readOnly: boolean;
  isApOpen: boolean;
  readOnlySubmitButton: boolean;
  previewCallback: (mottaker: string, fritekst: string) => Promise<any>;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

const SimuleringPanel: FunctionComponent<OwnProps> = ({
  simuleringResultat,
  readOnly,
  sprakkode,
  previewCallback,
  formData,
  setFormData,
  submitCallback,
  isApOpen,
  tilbakekrevingvalg,
  aksjonspunkter,
  fagsak,
  arbeidsgiverOpplysningerPerId,
}) => {
  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(aksjonspunkter, tilbakekrevingvalg),
  });

  const { formState } = formMethods;

  const [showDetails, setShowDetails] = useState<Details[]>([]);

  const hasOpenTilbakekrevingsbehandling =
    tilbakekrevingvalg !== undefined &&
    tilbakekrevingvalg.videreBehandling === tilbakekrevingVidereBehandling.TILBAKEKR_OPPDATER;

  const toggleDetaljer = hentToggleDetaljer(showDetails, setShowDetails);

  const simuleringResultatOption = simuleringResultat?.simuleringResultat;
  const skalHaForm =
    finnAksjonspunkt(aksjonspunkter, AksjonspunktCode.VURDER_FEILUTBETALING) ||
    finnAksjonspunkt(aksjonspunkter, AksjonspunktCode.KONTROLLER_STOR_ETTERBETALING_SØKER);
  const aksjonspunktTittler = isApOpen ? lagAksjonspunktTitler(aksjonspunkter) : [];
  return (
    <>
      <Heading size="small">
        <FormattedMessage id="Simulering.Title" />
      </Heading>
      <VerticalSpacer twentyPx />
      {simuleringResultatOption && (
        <>
          {aksjonspunktTittler.length > 0 &&
            aksjonspunktTittler.map(tittel => (
              <div key={tittel.key}>
                <AksjonspunktHelpTextHTML>{[tittel]}</AksjonspunktHelpTextHTML>
                <VerticalSpacer sixteenPx />
              </div>
            ))}
          <SimuleringSummary
            fom={simuleringResultatOption.periode.fom}
            tom={simuleringResultatOption.periode.tom}
            feilutbetaling={simuleringResultatOption.sumFeilutbetaling}
            etterbetaling={simuleringResultatOption.sumEtterbetaling}
            inntrekk={simuleringResultatOption.sumInntrekk}
            ingenPerioderMedAvvik={simuleringResultatOption.ingenPerioderMedAvvik}
          />
          <SimuleringTable
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            showDetails={showDetails}
            toggleDetails={toggleDetaljer}
            simuleringResultat={simuleringResultatOption}
            ingenPerioderMedAvvik={simuleringResultatOption.ingenPerioderMedAvvik}
          />
          <VerticalSpacer twentyPx />
          {hasOpenTilbakekrevingsbehandling && (
            <Label size="small">
              <FormattedMessage id="Simulering.ApenTilbakekrevingsbehandling" />
            </Label>
          )}
        </>
      )}
      {!simuleringResultat && <FormattedMessage id="Simulering.ingenData" />}
      {skalHaForm && (
        <Form
          formMethods={formMethods}
          onSubmit={(values: FormValues) => submitCallback(transformValues(values, aksjonspunkter))}
          setDataOnUnmount={setFormData}
        >
          <TilbakekrevSøkerForm
            aksjonspunkt={finnAksjonspunkt(aksjonspunkter, AksjonspunktCode.VURDER_FEILUTBETALING)}
            fagsak={fagsak}
            previewCallback={previewCallback}
            readOnly={readOnly}
            sprakkode={sprakkode}
            formData={formData}
            tilbakekrevingvalg={tilbakekrevingvalg}
          />
          <VerticalSpacer sixteenPx />
          <EtterbetalingSøkerForm
            readOnly={readOnly}
            aksjonspunkt={finnAksjonspunkt(aksjonspunkter, AksjonspunktCode.KONTROLLER_STOR_ETTERBETALING_SØKER)}
          />
          <VerticalSpacer sixteenPx />
          <Button
            size="small"
            variant="primary"
            disabled={!formState.isDirty || formState.isSubmitting || readOnly}
            loading={formState.isSubmitting}
          >
            <FormattedMessage id="SubmitButton.ConfirmInformation" />
          </Button>
        </Form>
      )}
    </>
  );
};

export default SimuleringPanel;
