import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Label, Modal } from '@navikt/ds-react';
import { RhfForm, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { flyttReservasjon, LosUrl } from '../../../../../data/fplosSaksbehandlerApi';

const minLength3 = minLength(3);
const maxLength500 = maxLength(500);

type LagreFormValues = {
  notat: string;
};

interface Props {
  begrunnelse?: string;
  closeModal: () => void;
  oppgaveId: number;
  brukerIdent: string;
}

/**
 * NotatModal
 *
 * Modal som lar en legge et notat til en oppgave som er reservert.
 */
export const NotatModal = ({ begrunnelse, oppgaveId, closeModal, brukerIdent }: Props) => {
  const intl = useIntl();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (values: LagreFormValues) => flyttReservasjon(oppgaveId, brukerIdent, values.notat),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: [LosUrl.RESERVERTE_OPPGAVER] });
      closeModal();
    },
  });

  const formMethods = useForm<LagreFormValues>({
    defaultValues: { notat: begrunnelse },
  });

  return (
    <RhfForm formMethods={formMethods} onSubmit={values => mutate(values)}>
      <Modal width="small" open aria-label={intl.formatMessage({ id: 'NotatModal.SkrivNotat' })} onClose={closeModal}>
        <Modal.Header>
          <Label size="medium">
            <FormattedMessage id="NotatModal.SkrivNotat" />
          </Label>
        </Modal.Header>
        <Modal.Body>
          <RhfTextarea
            name="notat"
            control={formMethods.control}
            label={<FormattedMessage id="NotatModal.Notat" />}
            validate={[required, maxLength500, minLength3, hasValidText]}
            maxLength={500}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button size="small" variant="primary">
            <FormattedMessage id="Label.Ok" />
          </Button>
          <Button size="small" variant="secondary" onClick={closeModal} type="button">
            <FormattedMessage id="Label.Avbryt" />
          </Button>
        </Modal.Footer>
      </Modal>
    </RhfForm>
  );
};
