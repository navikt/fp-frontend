import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { Button, Detail, HStack, Label, Modal, VStack } from '@navikt/ds-react';
import { RhfForm, RhfTextarea, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';

import type { SaksbehandlerProfil } from '../typer/saksbehandlerProfilTsType';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

const minLength3 = minLength(3);
const maxLength500 = maxLength(500);
const minLength7 = minLength(7);
const maxLength7 = maxLength(7);

type FormValues = {
  brukerIdent: string;
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
  useEffect(
    () => () => {
      resetHentSaksbehandler();
    },
    [],
  );

  const lagreFormMethods = useForm<FormValues>({
    defaultValues: { begrunnelse: flyttetBegrunnelse },
  });

  const brukerIdentValue = lagreFormMethods.watch('brukerIdent');
  const begrunnelseValue = lagreFormMethods.watch('begrunnelse');

  return (
    <RawIntlProvider value={intl}>
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
            <VStack gap="space-8">
              <HStack gap="space-16" align="end">
                <RhfTextField
                  name="brukerIdent"
                  control={lagreFormMethods.control}
                  label={<FormattedMessage id="FlyttReservasjonModal.Brukerident" />}
                  validate={[required, minLength7, maxLength7]}
                  autoFocus
                />
                <Button
                  type="button"
                  size="small"
                  variant="primary"
                  onClick={() => hentSaksbehandler(brukerIdentValue)}
                  loading={hentSaksbehandlerIsPending}
                  disabled={!brukerIdentValue || hentSaksbehandlerIsPending}
                >
                  <FormattedMessage id="FlyttReservasjonModal.Sok" />
                </Button>
              </HStack>
              {hentSaksbehandlerIsSuccess && (
                <Detail>{saksbehandler?.navn ?? <FormattedMessage id="LeggTilSaksbehandlerForm.FinnesIkke" />}</Detail>
              )}
              <RhfTextarea
                size="small"
                name="begrunnelse"
                control={lagreFormMethods.control}
                label={<FormattedMessage id="FlyttReservasjonModal.Begrunn" />}
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
              disabled={!saksbehandler || !begrunnelseValue || begrunnelseValue.length < 3}
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
