import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Modal, Button, Heading } from '@navikt/ds-react';

import { RadioGroupPanel, Form, CheckboxPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { FagsakMarkeringKode } from '@navikt/fp-kodeverk';

import styles from './endreUtlandModal.module.css';
import { KodeverkMedNavn, Saksmarkering } from '@navikt/fp-types';

export type FormValues = {
  saksnummer: string;
  fagsakMarkeringer: string[];
};

interface OwnProps {
  saksnummer: string;
  fagsakMarkeringer?: Saksmarkering[];
  cancelEvent: () => void;
  submitCallback: (formData: FormValues) => void;
  fagsakMarkeringerKodeverk: KodeverkMedNavn[];
}

/**
 * EndreUtlandModal
 *
 * Denne modalen vises etter at en saksbehandler har valgt opprett ny 1.gangsbehandling i behandlingsmenyen.
 * Ved å trykke på ok skal ny behandling(1.gangsbehandling) av sak opprettes.
 */
const EndreUtlandModal: FunctionComponent<OwnProps> = ({
  submitCallback,
  cancelEvent,
  saksnummer,
  fagsakMarkeringer,
  fagsakMarkeringerKodeverk,
}) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: {
      saksnummer,
      fagsakMarkeringer: fagsakMarkeringer
        ? fagsakMarkeringer.map(m => m.fagsakMarkering)
        : [FagsakMarkeringKode.NASJONAL],
    },
  });

  return (
    <Form formMethods={formMethods} onSubmit={submitCallback}>
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
<<<<<<< Updated upstream
          <RadioGroupPanel
            name="fagsakMarkering"
=======
          <CheckboxPanel
            name="fagsakMarkeringer"
>>>>>>> Stashed changes
            hideLegend
            checkboxes={fagsakMarkeringerKodeverk.map(markering => ({
              label: markering.navn,
              value: markering.kode,
            }))}
            validate={[required]}
          />
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
    </Form>
  );
};

export default EndreUtlandModal;
