import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Label, Modal as NavModal } from '@navikt/ds-react';
import { RhfForm, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';

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
      <NavModal
        width="small"
        open
        aria-label={intl.formatMessage({ id: 'NotatModal.SkrivNotat' })}
        onClose={closeModal}
      >
        <NavModal.Header>
          <Label size="medium">
            <FormattedMessage id="NotatModal.SkrivNotat" />
          </Label>
        </NavModal.Header>
        <NavModal.Body>
          <RhfTextarea
            name="notat"
            control={lagreFormMethods.control}
            label={<FormattedMessage id="NotatModal.Notat" />}
            validate={[required, maxLength500, minLength3, hasValidText]}
            maxLength={500}
          />
        </NavModal.Body>
        <NavModal.Footer>
          <Button size="small" variant="primary">
            <FormattedMessage id="Label.Ok" />
          </Button>
          <Button size="small" variant="secondary" onClick={closeModal} type="button">
            <FormattedMessage id="Label.Avbryt" />
          </Button>
        </NavModal.Footer>
      </NavModal>
    </RhfForm>
  );
};
