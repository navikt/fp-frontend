import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Button, Checkbox, Dialog } from '@navikt/ds-react';
import { RhfCheckboxGroup, RhfForm } from '@navikt/ft-form-hooks';

import type { KodeverkMedNavn, Saksmarkering } from '@navikt/fp-types';

export type FormValues = {
  saksnummer: string;
  fagsakMarkeringer: string[];
};

interface Props {
  saksnummer: string;
  fagsakMarkeringer?: Saksmarkering[];
  cancelEvent: () => void;
  submitCallback: (formData: FormValues) => void;
  fagsakMarkeringerKodeverk: KodeverkMedNavn<'FagsakMarkering'>[];
}

/**
 * EndreUtlandModal
 *
 * Denne modalen vises etter at en saksbehandler har valgt opprett ny 1.gangsbehandling i behandlingsmenyen.
 * Ved å trykke på ok skal ny behandling(1.gangsbehandling) av sak opprettes.
 */
export const EndreUtlandModal = ({
  submitCallback,
  cancelEvent,
  saksnummer,
  fagsakMarkeringer,
  fagsakMarkeringerKodeverk,
}: Props) => {
  const formMethods = useForm<FormValues>({
    defaultValues: {
      saksnummer,
      fagsakMarkeringer: fagsakMarkeringer ? fagsakMarkeringer.map(m => m.fagsakMarkering) : [],
    },
  });

  return (
    <Dialog open onOpenChange={cancelEvent} size="small">
      <Dialog.Popup width="small">
        <RhfForm formMethods={formMethods} onSubmit={submitCallback}>
          <Dialog.Header>
            <Dialog.Title>
              <FormattedMessage id="MenyEndreUtlandIndex.UtlandTittel" />
            </Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <RhfCheckboxGroup name="fagsakMarkeringer" control={formMethods.control} legend="" hideLegend>
              {fagsakMarkeringerKodeverk.map(markering => (
                <Checkbox key={markering.kode} value={markering.kode}>
                  {markering.navn}
                </Checkbox>
              ))}
            </RhfCheckboxGroup>
          </Dialog.Body>
          <Dialog.Footer>
            <Button size="small" variant="secondary" onClick={cancelEvent} type="button">
              <FormattedMessage id="MenyEndreUtlandIndex.Avbryt" />
            </Button>
            <Button size="small" variant="primary">
              <FormattedMessage id="MenyEndreUtlandIndex.Ok" />
            </Button>
          </Dialog.Footer>
        </RhfForm>
      </Dialog.Popup>
    </Dialog>
  );
};
