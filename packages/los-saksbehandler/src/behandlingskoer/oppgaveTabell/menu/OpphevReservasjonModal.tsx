import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Button, Heading, Modal as NavModal } from '@navikt/ds-react';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { Form, TextAreaField } from '@navikt/ft-form-hooks';
import { Oppgave } from '@navikt/fp-los-felles';

import { restApiHooks, RestApiPathsKeys } from '../../../data/fplosSaksbehandlerRestApi';

import styles from './opphevReservasjonModal.module.css';

const minLength3 = minLength(3);
const maxLength500 = maxLength(500);

type FormValues = {
  begrunnelse: string;
};

type Props = Readonly<{
  oppgave: Oppgave;
  closeModal: () => void;
  hentReserverteOppgaver: (params?: void, keepData?: boolean) => void;
}>;

/**
 * OpphevReservasjonModal
 *
 * Modal som lar en begrunne hvorfor en sak skal frigjøres.
 */
export const OpphevReservasjonModal = ({ closeModal, oppgave, hentReserverteOppgaver }: Props) => {
  const intl = useIntl();

  const { startRequest: opphevOppgavereservasjon } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.OPPHEV_OPPGAVERESERVASJON,
  );

  const opphevReservasjon = (formValues: FormValues) =>
    opphevOppgavereservasjon({ oppgaveId: oppgave.id, begrunnelse: formValues.begrunnelse }).then(() => {
      closeModal();
      hentReserverteOppgaver(undefined, true);
    });

  const formMethods = useForm<FormValues>();

  return (
    <Form formMethods={formMethods} onSubmit={opphevReservasjon}>
      <NavModal
        width="small"
        open
        aria-label={intl.formatMessage({ id: 'OpphevReservasjonModal.Begrunnelse' })}
        onClose={closeModal}
      >
        <NavModal.Header>
          <Heading size="small">
            <FormattedMessage id="OpphevReservasjonModal.Begrunnelse" />
          </Heading>
        </NavModal.Header>
        <NavModal.Body>
          <TextAreaField
            name="begrunnelse"
            label={intl.formatMessage({ id: 'OpphevReservasjonModal.Hjelpetekst' })}
            validate={[required, maxLength500, minLength3, hasValidText]}
            maxLength={500}
          />
        </NavModal.Body>
        <NavModal.Footer>
          <Button className={styles.submitButton} size="small" variant="primary" autoFocus>
            <FormattedMessage id="OpphevReservasjonModal.Ok" />
          </Button>
          <Button className={styles.cancelButton} size="small" variant="secondary" onClick={closeModal} type="button">
            <FormattedMessage id="OpphevReservasjonModal.Avbryt" />
          </Button>
        </NavModal.Footer>
      </NavModal>
    </Form>
  );
};
