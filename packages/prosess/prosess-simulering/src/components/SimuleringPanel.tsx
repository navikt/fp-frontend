import { type ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Button, Heading, HStack, Label, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode, TilbakekrevingVidereBehandling } from '@navikt/fp-kodeverk';
import type {
  Aksjonspunkt,
  ArbeidsgiverOpplysningerPerId,
  SimuleringResultat,
  TilbakekrevingValg,
} from '@navikt/fp-types';
import type { KontrollerEtterbetalingTilSøkerAP, VurderFeilutbetalingAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData, usePanelDataContext } from '@navikt/fp-utils';

import {
  buildInitialValues as buildInitialValuesEtterbetaling,
  EtterbetalingSøkerForm,
  transformValues as transformValuesEtterbetaling,
} from './EtterbetalingSøkerForm';
import { SimuleringSummary } from './SimuleringSummary';
import { SimuleringTable } from './SimuleringTable';
import {
  buildInitialValues as buildInitialValuesTilbakekrev,
  TilbakekrevSøkerForm,
  transformValues as transformValuesTilbakekrev,
} from './TilbakekrevSøkerForm';

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

const harAksjonspunkt = (aksjonspunkter: Aksjonspunkt[], kode: string): boolean =>
  aksjonspunkter.some(ap => ap.definisjon === kode);

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
  if (harAksjonspunkt(aksjonspunkter, AksjonspunktKode.VURDER_FEILUTBETALING)) {
    aksjonspunkterTilSubmit.push(transformValuesTilbakekrev(values));
  }
  if (harAksjonspunkt(aksjonspunkter, AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER)) {
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
      finnAksjonspunkt(aksjonspunkter, AksjonspunktKode.VURDER_FEILUTBETALING),
      tilbakekrevingvalg,
    ),
    ...buildInitialValuesEtterbetaling(
      finnAksjonspunkt(aksjonspunkter, AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER),
    ),
  };
};

const lagAksjonspunktTitler = (aksjonspunkter: Aksjonspunkt[]): ReactElement[] => {
  const elementer: ReactElement[] = [];
  if (harAksjonspunkt(aksjonspunkter, AksjonspunktKode.VURDER_FEILUTBETALING)) {
    elementer.push(<FormattedMessage id="Simulering.AksjonspunktHelpText.5084" key="vurderFeilutbetaling" />);
  }
  if (harAksjonspunkt(aksjonspunkter, AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER)) {
    elementer.push(<FormattedMessage id="Simulering.Etterbetaling.Tittel" key="kontrollerFeilutbetaling" />);
  }
  return elementer;
};

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  simuleringResultat?: SimuleringResultat;
  tilbakekrevingvalg?: TilbakekrevingValg;
  previewFptilbakeCallback: (params: { mottaker: string; fritekst: string }) => void;
}

export const SimuleringPanel = ({
  simuleringResultat,
  previewFptilbakeCallback,
  tilbakekrevingvalg,
  arbeidsgiverOpplysningerPerId,
}: Props) => {
  const { aksjonspunkterForPanel, submitCallback, isReadOnly, harÅpneAksjonspunkter, fagsak, behandling } =
    usePanelDataContext<SimuleringAksjonspunkt[]>();

  const { formData, setFormData } = useFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(aksjonspunkterForPanel, tilbakekrevingvalg),
  });

  const { formState } = formMethods;

  const [showDetails, setShowDetails] = useState<Details[]>([]);

  const hasOpenTilbakekrevingsbehandling =
    tilbakekrevingvalg !== undefined &&
    tilbakekrevingvalg.videreBehandling === TilbakekrevingVidereBehandling.TILBAKEKR_OPPDATER;

  const toggleDetaljer = hentToggleDetaljer(showDetails, setShowDetails);

  const simuleringResultatOption = simuleringResultat?.simuleringResultat;
  const skalHaForm =
    harAksjonspunkt(aksjonspunkterForPanel, AksjonspunktKode.VURDER_FEILUTBETALING) ||
    harAksjonspunkt(aksjonspunkterForPanel, AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER);
  const aksjonspunktTittler = harÅpneAksjonspunkter ? lagAksjonspunktTitler(aksjonspunkterForPanel) : [];
  return (
    <VStack gap="8">
      <Heading size="small">
        <FormattedMessage id="Simulering.Title" />
      </Heading>
      {simuleringResultatOption && (
        <>
          {aksjonspunktTittler.length > 0 &&
            aksjonspunktTittler.map(tittel => (
              <div key={tittel.key}>
                <AksjonspunktHelpTextHTML>{[tittel]}</AksjonspunktHelpTextHTML>
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
          onSubmit={(values: FormValues) => submitCallback(transformValues(values, aksjonspunkterForPanel))}
          setDataOnUnmount={setFormData}
        >
          <VStack gap="4">
            <TilbakekrevSøkerForm
              aksjonspunkt={finnAksjonspunkt(aksjonspunkterForPanel, AksjonspunktKode.VURDER_FEILUTBETALING)}
              fagsak={fagsak}
              previewCallback={previewFptilbakeCallback}
              readOnly={isReadOnly}
              sprakkode={behandling.sprakkode}
            />
            <EtterbetalingSøkerForm
              readOnly={isReadOnly}
              aksjonspunkt={finnAksjonspunkt(
                aksjonspunkterForPanel,
                AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER,
              )}
            />
            <HStack>
              <Button
                size="small"
                variant="primary"
                disabled={!formState.isDirty || formState.isSubmitting || isReadOnly}
                loading={formState.isSubmitting}
              >
                <FormattedMessage id="SubmitButton.ConfirmInformation" />
              </Button>
            </HStack>
          </VStack>
        </Form>
      )}
    </VStack>
  );
};
