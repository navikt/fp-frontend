import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Checkbox, Heading, Modal } from '@navikt/ds-react';
import { RhfCheckboxGroup, RhfForm } from '@navikt/ft-form-hooks';

import type { KodeverkMedNavn, Saksmarkering } from '@navikt/fp-types';

import styles from './endreUtlandModal.module.css';

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
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: {
      saksnummer,
      fagsakMarkeringer: fagsakMarkeringer ? fagsakMarkeringer.map(m => m.fagsakMarkering) : [],
    },
  });

  return (
    <RhfForm formMethods={formMethods} onSubmit={submitCallback}>
      <Modal
        className={styles.modal}
        open
        aria-label={intl.formatMessage({ id: 'MenyEndreUtlandIndex.UtlandTittel' })}
        onClose={cancelEvent}
      >
        <Modal.Header>
          <Heading size="small">
            <FormattedMessage id="MenyEndreUtlandIndex.UtlandTittel" />
          </Heading>
        </Modal.Header>
        <Modal.Body>
          <RhfCheckboxGroup name="fagsakMarkeringer" control={formMethods.control} hideLegend>
            {fagsakMarkeringerKodeverk.map(markering => (
              <Checkbox key={markering.kode} value={markering.kode}>
                {markering.navn}
              </Checkbox>
            ))}
          </RhfCheckboxGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button size="small" variant="primary">
            <FormattedMessage id="MenyEndreUtlandIndex.Ok" />
          </Button>
          <Button size="small" variant="secondary" onClick={cancelEvent} type="button">
            <FormattedMessage id="MenyEndreUtlandIndex.Avbryt" />
          </Button>
        </Modal.Footer>
      </Modal>
    </RhfForm>
  );
};
