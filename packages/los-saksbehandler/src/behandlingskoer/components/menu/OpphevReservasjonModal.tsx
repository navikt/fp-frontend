import React, { FunctionComponent, useCallback } from 'react';
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

type OwnProps = Readonly<{
  showModal: boolean;
  oppgave: Oppgave;
  cancel: () => void;
  toggleMenu: () => void;
  hentReserverteOppgaver: (params: any, keepData: boolean) => void;
}>;

/**
 * OpphevReservasjonModal
 *
 * Presentasjonskomponent. Modal som lar en begrunne hvorfor en sak skal frigjøres.
 */
const OpphevReservasjonModal: FunctionComponent<OwnProps> = ({
  showModal,
  cancel,
  oppgave,
  toggleMenu,
  hentReserverteOppgaver,
}) => {
  const intl = useIntl();
  const { startRequest: opphevOppgavereservasjon } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.OPPHEV_OPPGAVERESERVASJON,
  );

  const opphevReservasjonFn = useCallback(
    (begrunnelse: string) =>
      opphevOppgavereservasjon({ oppgaveId: oppgave.id, begrunnelse }).then(() => {
        toggleMenu();
        hentReserverteOppgaver({}, true);
      }),
    [oppgave.id],
  );

  const formMethods = useForm<FormValues>();

  return (
    <Form<FormValues> formMethods={formMethods} onSubmit={values => opphevReservasjonFn(values.begrunnelse)}>
      <NavModal
        width="small"
        open={showModal}
        aria-label={intl.formatMessage({ id: 'OpphevReservasjonModal.Begrunnelse' })}
        onClose={cancel}
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
          <Button className={styles.cancelButton} size="small" variant="secondary" onClick={cancel} type="button">
            <FormattedMessage id="OpphevReservasjonModal.Avbryt" />
          </Button>
        </NavModal.Footer>
      </NavModal>
    </Form>
  );
};

export default OpphevReservasjonModal;
