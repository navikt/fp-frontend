import React, { useEffect } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Label, Button, BodyShort, Modal as NavModal, HStack, VStack } from '@navikt/ds-react';
import { Form, TextAreaField, InputField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import SaksbehandlerProfil from '../typer/saksbehandlerProfilTsType';

import { RestApiState } from '@navikt/fp-rest-api-hooks';

import styles from './flyttReservasjonModal.module.css';

const minLength3 = minLength(3);
const maxLength500 = maxLength(500);
const minLength7 = minLength(7);
const maxLength7 = maxLength(7);

const formatText = (state: RestApiState, intl: IntlShape, saksbehandler?: SaksbehandlerProfil): string => {
  if (state === RestApiState.SUCCESS && !saksbehandler) {
    return intl.formatMessage({ id: 'LeggTilSaksbehandlerForm.FinnesIkke' });
  }

  return saksbehandler ? `${saksbehandler.navn}` : '';
};

type SøkFormValues = {
  brukerIdent: string;
};
type LagreFormValues = {
  begrunnelse: string;
};

interface Props {
  oppgaveId: number;
  flyttetBegrunnelse?: string;
  closeModal: () => void;
  hentReserverteOppgaver: (params: any, keepData: boolean) => void;
  flyttOppgavereservasjon: (params: { oppgaveId: number; brukerIdent: string; begrunnelse: string }) => Promise<void>;
  hentSaksbehandler: (params: { brukerIdent: string }) => Promise<SaksbehandlerProfil | undefined>;
  hentSaksbehandlerState: RestApiState;
  saksbehandler?: SaksbehandlerProfil;
  resetHentSaksbehandler: () => void;
}

/**
 * FlyttReservasjonModal
 *
 * Modal som lar en søke opp en saksbehandler som saken skal flyttes til. En kan også begrunne hvorfor saken skal flyttes.
 */
export const FlyttReservasjonModal = ({
  oppgaveId,
  flyttetBegrunnelse,
  closeModal,
  hentReserverteOppgaver,
  flyttOppgavereservasjon,
  hentSaksbehandler,
  hentSaksbehandlerState,
  saksbehandler,
  resetHentSaksbehandler,
}: Props) => {
  const intl = useIntl();

  const finnSaksbehandler = (formValues: SøkFormValues) => hentSaksbehandler({ brukerIdent: formValues.brukerIdent });

  const flyttReservasjon = (brukerident: string, begrunnelse: string) =>
    flyttOppgavereservasjon({
      oppgaveId,
      brukerIdent: brukerident,
      begrunnelse,
    }).then(() => hentReserverteOppgaver({}, true));

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
    <NavModal
      className={styles.modal}
      open
      aria-label={intl.formatMessage({ id: 'FlyttReservasjonModal.FlyttReservasjon' })}
      onClose={closeModal}
    >
      <NavModal.Header>
        <Label size="small">
          <FormattedMessage id="FlyttReservasjonModal.FlyttReservasjon" />
        </Label>
      </NavModal.Header>
      <NavModal.Body>
        <VStack gap="4">
          <Form formMethods={søkFormMethods} onSubmit={finnSaksbehandler}>
            <HStack gap="4" align="end">
              <InputField
                name="brukerIdent"
                label={intl.formatMessage({ id: 'FlyttReservasjonModal.Brukerident' })}
                validate={[required, minLength7, maxLength7]}
                autoFocus
                autoComplete
              />
              <Button
                size="small"
                variant="primary"
                loading={hentSaksbehandlerState === RestApiState.LOADING}
                disabled={!brukerIdentValue || hentSaksbehandlerState === RestApiState.LOADING}
              >
                <FormattedMessage id="FlyttReservasjonModal.Sok" />
              </Button>
            </HStack>
            {hentSaksbehandlerState === RestApiState.SUCCESS && (
              <>
                <BodyShort size="small">{formatText(hentSaksbehandlerState, intl, saksbehandler)}</BodyShort>
              </>
            )}
          </Form>
          <Form
            formMethods={lagreFormMethods}
            onSubmit={values => {
              closeModal();
              flyttReservasjon(saksbehandler ? saksbehandler.brukerIdent : '', values.begrunnelse);
            }}
          >
            <TextAreaField
              name="begrunnelse"
              label={intl.formatMessage({ id: 'FlyttReservasjonModal.Begrunn' })}
              validate={[required, maxLength500, minLength3, hasValidText]}
              maxLength={500}
            />
            <HStack gap="2" justify="end">
              <Button
                className={styles.cancelButton}
                size="small"
                variant="secondary"
                onClick={closeModal}
                type="button"
              >
                <FormattedMessage id="FlyttReservasjonModal.Avbryt" />
              </Button>
              <Button
                className={styles.submitButton}
                size="small"
                variant="primary"
                disabled={!saksbehandler || !begrunnelseValue || begrunnelseValue.length < 3}
              >
                <FormattedMessage id="FlyttReservasjonModal.Ok" />
              </Button>
            </HStack>
          </Form>
        </VStack>
      </NavModal.Body>
    </NavModal>
  );
};
