import React, { Button, Heading, Modal } from '@navikt/ds-react';
import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { CheckboxPanel, Form } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import { KodeverkMedNavn, Saksmarkering } from '@navikt/fp-types';
import styles from './endreUtlandModal.module.css';

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
      fagsakMarkeringer: fagsakMarkeringer ? fagsakMarkeringer.map(m => m.fagsakMarkering) : [],
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
          <CheckboxPanel
            name="fagsakMarkeringer"
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
