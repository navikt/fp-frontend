import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, HStack, Label, Modal as NavModal } from '@navikt/ds-react';
import { RhfForm, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';

import styles from './notatModal.module.css';

const minLength3 = minLength(3);
const maxLength500 = maxLength(500);

type LagreFormValues = {
  notat: string;
};

interface Props {
  notat?: string;
  closeModal: () => void;
  flyttOppgavereservasjon: (params: { brukerIdent: string; begrunnelse: string }) => void;
  brukernavn: string;
}

/**
 * NotatModal
 *
 * Modal som lar en legge et notat til en oppgave som er reservert.
 */
export const NotatModal = ({ notat, closeModal, flyttOppgavereservasjon, brukernavn }: Props) => {
  const intl = useIntl();

  const lagreFormMethods = useForm<LagreFormValues>({
    defaultValues: { notat },
  });

  return (
    <NavModal
      className={styles.modal}
      open
      aria-label={intl.formatMessage({ id: 'NotatModal.SkrivNotat' })}
      onClose={closeModal}
    >
      <NavModal.Header>
        <Label size="small">
          <FormattedMessage id="NotatModal.SkrivNotat" />
        </Label>
      </NavModal.Header>
      <NavModal.Body>
        <RhfForm
          formMethods={lagreFormMethods}
          onSubmit={values => {
            closeModal();
            flyttOppgavereservasjon({
              brukerIdent: brukernavn,
              begrunnelse: values.notat,
            });
          }}
        >
          <RhfTextarea
            name="notat"
            control={lagreFormMethods.control}
            label={intl.formatMessage({ id: 'NotatModal.Notat' })}
            validate={[required, maxLength500, minLength3, hasValidText]}
            maxLength={500}
          />
          <HStack gap="2" justify="end">
            <Button className={styles.cancelButton} size="small" variant="secondary" onClick={closeModal} type="button">
              <FormattedMessage id="FlyttReservasjonModal.Avbryt" />
            </Button>
            <Button className={styles.submitButton} size="small" variant="primary">
              <FormattedMessage id="FlyttReservasjonModal.Ok" />
            </Button>
          </HStack>
        </RhfForm>
      </NavModal.Body>
    </NavModal>
  );
};
