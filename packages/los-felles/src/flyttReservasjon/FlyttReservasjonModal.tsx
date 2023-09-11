import React, { FunctionComponent, useEffect, useCallback } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Label, Button, BodyShort, Modal as NavModal } from '@navikt/ds-react';
import { Form, TextAreaField, InputField } from '@navikt/ft-form-hooks';
import { VerticalSpacer, FlexContainer, FlexRow, FlexColumn } from '@navikt/ft-ui-komponenter';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';

import { RestApiState } from '@navikt/fp-rest-api-hooks';

import SaksbehandlerForFlytting from '../typer/saksbehandlerForFlyttingTsType';

import styles from './flyttReservasjonModal.module.css';

const minLength3 = minLength(3);
const maxLength500 = maxLength(500);
const minLength7 = minLength(7);
const maxLength7 = maxLength(7);

const formatText = (state: RestApiState, intl: IntlShape, saksbehandler?: SaksbehandlerForFlytting): string => {
  if (state === RestApiState.SUCCESS && !saksbehandler) {
    return intl.formatMessage({ id: 'LeggTilSaksbehandlerForm.FinnesIkke' });
  }

  return saksbehandler ? `${saksbehandler.navn}, ${saksbehandler.avdelingsnavn.join(', ')}` : '';
};

type SøkFormValues = {
  brukerIdent: string;
};
type LagreFormValues = {
  begrunnelse: string;
};

interface OwnProps {
  showModal: boolean;
  oppgaveId: number;
  closeModal: () => void;
  toggleMenu: () => void;
  hentReserverteOppgaver: (params: any, keepData: boolean) => void;
  flyttOppgavereservasjon: (params: { oppgaveId: number; brukerIdent: string; begrunnelse: string }) => Promise<void>;
  hentSaksbehandler: (params: { brukerIdent: string }) => Promise<SaksbehandlerForFlytting | undefined>;
  hentSaksbehandlerState: RestApiState;
  saksbehandler?: SaksbehandlerForFlytting;
  resetHentSaksbehandler: () => void;
}

/**
 * FlyttReservasjonModal
 *
 * Modal som lar en søke opp en saksbehandler som saken skal flyttes til. En kan også begrunne hvorfor saken skal flyttes.
 */
const FlyttReservasjonModal: FunctionComponent<OwnProps> = ({
  showModal,
  closeModal,
  oppgaveId,
  toggleMenu,
  hentReserverteOppgaver,
  flyttOppgavereservasjon,
  hentSaksbehandler,
  hentSaksbehandlerState,
  saksbehandler,
  resetHentSaksbehandler,
}) => {
  const intl = useIntl();

  const finnSaksbehandler = useCallback((brukerIdent: string) => hentSaksbehandler({ brukerIdent }), []);

  const flyttReservasjon = useCallback(
    (brukerident: string, begrunnelse: string) =>
      flyttOppgavereservasjon({
        oppgaveId,
        brukerIdent: brukerident,
        begrunnelse,
      }).then(() => hentReserverteOppgaver({}, true)),
    [],
  );

  useEffect(
    () => () => {
      resetHentSaksbehandler();
    },
    [],
  );

  const søkFormMethods = useForm<SøkFormValues>();
  const brukerIdentValue = søkFormMethods.watch('brukerIdent');

  const lagreFormMethods = useForm<LagreFormValues>();
  const begrunnelseValue = lagreFormMethods.watch('begrunnelse');

  return (
    <NavModal
      className={styles.modal}
      open={showModal}
      aria-label={intl.formatMessage({ id: 'FlyttReservasjonModal.FlyttReservasjon' })}
      onClose={closeModal}
    >
      <NavModal.Header>
        <Label size="small">
          <FormattedMessage id="FlyttReservasjonModal.FlyttReservasjon" />
        </Label>
      </NavModal.Header>
      <NavModal.Body>
        <Form<SøkFormValues> formMethods={søkFormMethods} onSubmit={values => finnSaksbehandler(values.brukerIdent)}>
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <InputField
                  name="brukerIdent"
                  label={intl.formatMessage({ id: 'FlyttReservasjonModal.Brukerident' })}
                  validate={[required, minLength7, maxLength7]}
                  autoFocus
                  autoComplete
                />
              </FlexColumn>
              <FlexColumn className={styles.buttonDiv}>
                <Button
                  size="small"
                  variant="primary"
                  loading={hentSaksbehandlerState === RestApiState.LOADING}
                  disabled={!brukerIdentValue || hentSaksbehandlerState === RestApiState.LOADING}
                >
                  <FormattedMessage id="FlyttReservasjonModal.Sok" />
                </Button>
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
          {hentSaksbehandlerState === RestApiState.SUCCESS && (
            <>
              <BodyShort size="small">{formatText(hentSaksbehandlerState, intl, saksbehandler)}</BodyShort>
              <VerticalSpacer sixteenPx />
            </>
          )}
        </Form>
        <VerticalSpacer sixteenPx />
        <Form<LagreFormValues>
          formMethods={lagreFormMethods}
          onSubmit={values => {
            toggleMenu();
            flyttReservasjon(saksbehandler ? saksbehandler.brukerIdent : '', values.begrunnelse);
          }}
        >
          <TextAreaField
            name="begrunnelse"
            label={intl.formatMessage({ id: 'FlyttReservasjonModal.Begrunn' })}
            validate={[required, maxLength500, minLength3, hasValidText]}
            maxLength={500}
          />
          <VerticalSpacer sixteenPx />
          <NavModal.Footer>
            <Button
              className={styles.submitButton}
              size="small"
              variant="primary"
              disabled={!saksbehandler || !begrunnelseValue || begrunnelseValue.length < 3}
            >
              <FormattedMessage id="FlyttReservasjonModal.Ok" />
            </Button>
            <Button className={styles.cancelButton} size="small" variant="secondary" onClick={closeModal} type="button">
              <FormattedMessage id="FlyttReservasjonModal.Avbryt" />
            </Button>
          </NavModal.Footer>
        </Form>
      </NavModal.Body>
    </NavModal>
  );
};

export default FlyttReservasjonModal;
