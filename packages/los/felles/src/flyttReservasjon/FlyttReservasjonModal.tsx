import { Controller, useForm } from 'react-hook-form';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { Button, Label, Modal, UNSAFE_Combobox as Combobox, VStack } from '@navikt/ds-react';
import { RhfForm, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';

import type { SaksbehandlerDto } from '@navikt/fp-types';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

const minLength3 = minLength(3);
const maxLength500 = maxLength(500);

type FormValues = {
  brukerIdent: string;
  begrunnelse: string;
};

interface Props {
  flyttetBegrunnelse?: string;
  closeModal: () => void;
  flyttOppgavereservasjon: (params: { brukerIdent: string; begrunnelse: string }) => void;
  tilgjengeligeSaksbehandlere: SaksbehandlerDto[];
}

/**
 * FlyttReservasjonModal
 *
 * Modal som lar en søke opp en saksbehandler som saken skal flyttes til. En kan også begrunne hvorfor saken skal flyttes.
 */
export const FlyttReservasjonModal = ({
  flyttetBegrunnelse,
  closeModal,
  flyttOppgavereservasjon,
  tilgjengeligeSaksbehandlere,
}: Props) => {
  const formMethods = useForm<FormValues>({
    defaultValues: { begrunnelse: flyttetBegrunnelse },
  });

  const saksbehandlerOptions = tilgjengeligeSaksbehandlere.map(s => ({
    value: s.brukerIdent,
    label: `${s.navn} (${s.brukerIdent})`,
  }));

  return (
    <RawIntlProvider value={intl}>
      <RhfForm
        formMethods={formMethods}
        onSubmit={values => {
          closeModal();
          flyttOppgavereservasjon({
            brukerIdent: values.brukerIdent,
            begrunnelse: values.begrunnelse,
          });
        }}
      >
        <Modal
          open
          onClose={closeModal}
          aria-label={intl.formatMessage({ id: 'FlyttReservasjonModal.FlyttReservasjon' })}
        >
          <Modal.Header>
            <Label size="medium">
              <FormattedMessage id="FlyttReservasjonModal.FlyttReservasjon" />
            </Label>
          </Modal.Header>
          <Modal.Body>
            <VStack gap="space-16">
              <Controller
                control={formMethods.control}
                name="brukerIdent"
                rules={{
                  required: intl.formatMessage({ id: 'FlyttReservasjonModal.ManglerSaksbehandler' }),
                }}
                render={({ field, fieldState: { error } }) => (
                  <Combobox
                    size="small"
                    error={error?.message}
                    label={<FormattedMessage id="FlyttReservasjonModal.Saksbehandler" />}
                    options={saksbehandlerOptions}
                    autoFocus
                    ref={field.ref}
                    name={field.name}
                    onBlur={field.onBlur}
                    onToggleSelected={(option, isSelected) => field.onChange(isSelected ? option : undefined)}
                  />
                )}
              />

              <RhfTextarea
                size="small"
                name="begrunnelse"
                control={formMethods.control}
                label={<FormattedMessage id="FlyttReservasjonModal.Notat" />}
                validate={[required, maxLength500, minLength3, hasValidText]}
                maxLength={500}
              />
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              size="small"
              variant="primary"
              loading={formMethods.formState.isSubmitting}
              disabled={!formMethods.formState.isDirty}
            >
              <FormattedMessage id="Label.Ok" />
            </Button>
            <Button size="small" variant="secondary" onClick={closeModal} type="button">
              <FormattedMessage id="Label.Avbryt" />
            </Button>
          </Modal.Footer>
        </Modal>
      </RhfForm>
    </RawIntlProvider>
  );
};
