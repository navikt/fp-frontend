import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Button, HStack, Modal, VStack } from '@navikt/ds-react';
import { RhfForm, RhfTextarea, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';

import type { SaksbehandlerProfil } from '../typer/saksbehandlerProfilTsType';

const minLength3 = minLength(3);
const maxLength500 = maxLength(500);
const minLength7 = minLength(7);
const maxLength7 = maxLength(7);

type SøkFormValues = {
  brukerIdent: string;
};
type LagreFormValues = {
  begrunnelse: string;
};

interface Props {
  flyttetBegrunnelse?: string;
  closeModal: () => void;
  flyttOppgavereservasjon: (params: { brukerIdent: string; begrunnelse: string }) => void;
  hentSaksbehandler: (brukerIdent: string) => void;
  hentSaksbehandlerIsPending: boolean;
  hentSaksbehandlerIsSuccess: boolean;
  saksbehandler?: SaksbehandlerProfil;
  resetHentSaksbehandler: () => void;
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
  hentSaksbehandler,
  hentSaksbehandlerIsPending,
  hentSaksbehandlerIsSuccess,
  saksbehandler,
  resetHentSaksbehandler,
}: Props) => {
  const intl = useIntl();

  useEffect(
    () => () => {
      resetHentSaksbehandler();
    },
    [],
  );

  const søkFormMethods = useForm<SøkFormValues>();
  const brukerIdentValue = søkFormMethods.watch('brukerIdent');

  const lagreFormMethods = useForm<LagreFormValues>({
    defaultValues: { begrunnelse: flyttetBegrunnelse },
  });
  const begrunnelseValue = lagreFormMethods.watch('begrunnelse');

  return (
    <Modal
      open
      onClose={closeModal}
      header={{ heading: intl.formatMessage({ id: 'FlyttReservasjonModal.FlyttReservasjon' }), size: 'small' }}
    >
      <Modal.Body>
        <VStack gap="space-16">
          <RhfForm
            formMethods={søkFormMethods}
            onSubmit={(formValues: SøkFormValues) => hentSaksbehandler(formValues.brukerIdent)}
          >
            <HStack gap="space-16" align="end">
              <RhfTextField
                name="brukerIdent"
                control={søkFormMethods.control}
                label={<FormattedMessage id="FlyttReservasjonModal.Brukerident" />}
                validate={[required, minLength7, maxLength7]}
                autoFocus
              />
              <Button
                size="small"
                variant="primary"
                loading={hentSaksbehandlerIsPending}
                disabled={!brukerIdentValue || hentSaksbehandlerIsPending}
              >
                <FormattedMessage id="FlyttReservasjonModal.Sok" />
              </Button>
            </HStack>
            {hentSaksbehandlerIsSuccess && (
              <BodyShort size="small">
                {saksbehandler?.navn ?? <FormattedMessage id="LeggTilSaksbehandlerForm.FinnesIkke" />}
              </BodyShort>
            )}
          </RhfForm>
          <RhfForm
            formMethods={lagreFormMethods}
            onSubmit={values => {
              closeModal();
              flyttOppgavereservasjon({
                brukerIdent: saksbehandler ? saksbehandler.brukerIdent : '',
                begrunnelse: values.begrunnelse,
              });
            }}
          >
            <RhfTextarea
              name="begrunnelse"
              control={lagreFormMethods.control}
              label={<FormattedMessage id="FlyttReservasjonModal.Begrunn" />}
              validate={[required, maxLength500, minLength3, hasValidText]}
              maxLength={500}
            />
            <HStack gap="space-8" justify="end">
              <Button size="small" variant="secondary" onClick={closeModal} type="button">
                <FormattedMessage id="Label.Avbryt" />
              </Button>
              <Button
                type="submit"
                size="small"
                variant="primary"
                disabled={!saksbehandler || !begrunnelseValue || begrunnelseValue.length < 3}
              >
                <FormattedMessage id="Label.Ok" />
              </Button>
            </HStack>
          </RhfForm>
        </VStack>
      </Modal.Body>
    </Modal>
  );
};
