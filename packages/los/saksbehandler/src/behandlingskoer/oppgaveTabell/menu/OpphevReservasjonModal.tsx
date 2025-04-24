import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Heading, Modal as NavModal } from '@navikt/ds-react';
import { Form, TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength } from '@navikt/ft-form-validators';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { Oppgave } from '@navikt/fp-los-felles';

import { LosUrl, postOpphevReservasjon } from '../../../data/fplosSaksbehandlerApi';

import styles from './opphevReservasjonModal.module.css';

const minLength3 = minLength(3);
const maxLength500 = maxLength(500);

type FormValues = {
  begrunnelse?: string;
};

type Props = Readonly<{
  oppgave: Oppgave;
  closeModal: () => void;
}>;

/**
 * OpphevReservasjonModal
 *
 * Modal som lar en begrunne hvorfor en sak skal frigjøres.
 */
export const OpphevReservasjonModal = ({ closeModal, oppgave }: Props) => {
  const intl = useIntl();
  const queryClient = useQueryClient();

  const { mutate: opphevOppgavereservasjon } = useMutation({
    mutationFn: (values: FormValues) =>
      postOpphevReservasjon(
        oppgave.id,
        values.begrunnelse ?? intl.formatMessage({ id: 'OpphevReservasjonModal.LagtTilbake' }),
      ),
    mutationKey: [LosUrl.RESERVERTE_OPPGAVER],
    onSuccess: () => {
      closeModal();
      queryClient.invalidateQueries({
        queryKey: [LosUrl.RESERVERTE_OPPGAVER],
      });
    },
  });

  const formMethods = useForm<FormValues>();

  return (
    <Form formMethods={formMethods} onSubmit={values => opphevOppgavereservasjon(values)}>
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
            validate={[maxLength500, minLength3, hasValidText]}
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
