import { type ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Button, Heading, Label, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import type {
  Aksjonspunkt,
  ArbeidsgiverOpplysningerPerId,
  SimuleringResultat,
  TilbakekrevingValg,
} from '@navikt/fp-types';
import type { KontrollerEtterbetalingTilSøkerAP, VurderFeilutbetalingAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { harAksjonspunkt, useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import type { EtterbetalingSøkerFormValues, FeilutbetalingFormValues } from '../types/FormValues';
import { EtterbetalingSøkerForm } from './EtterbetalingSøkerForm';
import { SimuleringSummary } from './SimuleringSummary';
import { SimuleringTable } from './SimuleringTable';
import { TilbakekrevSøkerForm } from './TilbakekrevSøkerForm';

type Details = {
  id: number;
  show: boolean;
};

type FormValues = FeilutbetalingFormValues | EtterbetalingSøkerFormValues;

type SimuleringAksjonspunkt = VurderFeilutbetalingAp | KontrollerEtterbetalingTilSøkerAP;

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
  const { aksjonspunkterForPanel, submitCallback, isReadOnly, harÅpentAksjonspunkt, fagsak, behandling } =
    // @ts-expect-error Johannes ser på denne - mismatch mellom type i ft-repo og generert type
    usePanelDataContext<SimuleringAksjonspunkt[]>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(aksjonspunkterForPanel, tilbakekrevingvalg),
  });

  const { formState } = formMethods;

  const [showDetails, setShowDetails] = useState<Details[]>([]);

  const hasOpenTilbakekrevingsbehandling =
    tilbakekrevingvalg !== undefined && tilbakekrevingvalg.videreBehandling === 'TILBAKEKR_OPPDATER';

  const toggleDetaljer = hentToggleDetaljer(showDetails, setShowDetails);

  const simuleringResultatOption = simuleringResultat?.simuleringResultat;
  const skalHaForm = harAksjonspunkt('5084', aksjonspunkterForPanel) || harAksjonspunkt('5029', aksjonspunkterForPanel);
  const aksjonspunktTittler = harÅpentAksjonspunkt ? lagAksjonspunktTitler(aksjonspunkterForPanel) : [];
  return (
    <VStack gap="space-32">
      <Heading size="small" level="2">
        <FormattedMessage id="Simulering.Title" />
      </Heading>
      {simuleringResultatOption && (
        <>
          {aksjonspunktTittler.length > 0 &&
            aksjonspunktTittler.map(tittel => (
              <div key={tittel.key}>
                <AksjonspunktHelpTextHTML>{tittel}</AksjonspunktHelpTextHTML>
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
        <RhfForm
          formMethods={formMethods}
          onSubmit={(values: FormValues) => submitCallback(transformValues(values, aksjonspunkterForPanel))}
          setDataOnUnmount={setMellomlagretFormData}
        >
          <VStack gap="space-16">
            <TilbakekrevSøkerForm
              aksjonspunkt={finnAksjonspunkt(aksjonspunkterForPanel, '5084')}
              fagsak={fagsak}
              previewCallback={previewFptilbakeCallback}
              readOnly={isReadOnly}
              språkkode={behandling.språkkode}
            />
            <EtterbetalingSøkerForm
              readOnly={isReadOnly}
              aksjonspunkt={finnAksjonspunkt(aksjonspunkterForPanel, '5029')}
            />
            <div>
              <Button
                size="small"
                variant="primary"
                disabled={!formState.isDirty || formState.isSubmitting || isReadOnly}
                loading={formState.isSubmitting}
              >
                <FormattedMessage id="SubmitButton.ConfirmInformation" />
              </Button>
            </div>
          </VStack>
        </RhfForm>
      )}
    </VStack>
  );
};

const finnAksjonspunkt = (aksjonspunkter: Aksjonspunkt[], kode: string) =>
  aksjonspunkter.find(ap => ap.definisjon === kode);

const hentToggleDetaljer =
  (showDetails: Details[], setShowDetails: (details: Details[]) => void) =>
  (id: number): void => {
    const tableIndex = showDetails.findIndex((table: Details) => table.id === id);
    let newShowDetailsArray = [];

    if (tableIndex === -1) {
      newShowDetailsArray = showDetails.concat({
        id,
        show: true,
      });
    } else {
      const updatedTable = {
        id,
        show: !showDetails[tableIndex]?.show,
      };

      newShowDetailsArray = [
        ...showDetails.slice(0, tableIndex),
        updatedTable,
        ...showDetails.slice(tableIndex + 1, -1),
      ];
    }
    setShowDetails(newShowDetailsArray);
  };

const transformValues = (values: FormValues, aksjonspunkter: Aksjonspunkt[]): SimuleringAksjonspunkt[] => {
  const aksjonspunkterTilSubmit: SimuleringAksjonspunkt[] = [];
  if (harAksjonspunkt('5084', aksjonspunkter) && 'videreBehandling' in values) {
    aksjonspunkterTilSubmit.push(TilbakekrevSøkerForm.transformValues(values));
  }
  if (harAksjonspunkt('5029', aksjonspunkter) && 'begrunnelseEtterbetaling' in values) {
    aksjonspunkterTilSubmit.push(EtterbetalingSøkerForm.transformValues(values));
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
    ...TilbakekrevSøkerForm.initialValues(finnAksjonspunkt(aksjonspunkter, '5084'), tilbakekrevingvalg),
    ...EtterbetalingSøkerForm.initialValues(finnAksjonspunkt(aksjonspunkter, '5029')),
  };
};

const lagAksjonspunktTitler = (aksjonspunkter: Aksjonspunkt[]): ReactElement[] => {
  const elementer: ReactElement[] = [];
  if (harAksjonspunkt('5084', aksjonspunkter)) {
    elementer.push(<FormattedMessage id="Simulering.AksjonspunktHelpText.5084" key="vurderFeilutbetaling" />);
  }
  if (harAksjonspunkt('5029', aksjonspunkter)) {
    elementer.push(<FormattedMessage id="Simulering.Etterbetaling.Tittel" key="kontrollerFeilutbetaling" />);
  }
  return elementer;
};
