import React, { FunctionComponent, useEffect, useCallback } from 'react';
import {
  injectIntl, WrappedComponentProps, FormattedMessage, IntlShape,
} from 'react-intl';
import { useForm } from 'react-hook-form';
import { Label, Button, BodyShort } from '@navikt/ds-react';
import { Form, TextAreaField, InputField } from '@navikt/ft-form-hooks';
import {
  VerticalSpacer, FlexContainer, FlexRow, FlexColumn,
} from '@navikt/ft-ui-komponenter';
import {
  hasValidText, maxLength, minLength, required,
} from '@navikt/ft-form-validators';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import { restApiHooks, RestApiPathsKeys } from '../../../data/fplosRestApi';
import Modal from '../../../components/Modal';
import SaksbehandlerForFlytting from '../../../typer/saksbehandlerForFlyttingTsType';

import styles from './flyttReservasjonModal.less';

const minLength3 = minLength(3);
const maxLength500 = maxLength(500);
const minLength7 = minLength(7);
const maxLength7 = maxLength(7);

const formatText = (state: RestApiState, intl: IntlShape, saksbehandler?: SaksbehandlerForFlytting): string => {
  if (state === RestApiState.SUCCESS && !saksbehandler) {
    return intl.formatMessage({ id: 'LeggTilSaksbehandlerForm.FinnesIkke' });
  }

  return saksbehandler
    ? `${saksbehandler.navn}, ${saksbehandler.avdelingsnavn.join(', ')}`
    : '';
};

type SøkFormValues = {
  brukerIdent: string;
}
type LagreFormValues = {
  begrunnelse: string;
}

interface OwnProps {
  showModal: boolean;
  oppgaveId: number;
  closeModal: () => void;
  toggleMenu: () => void;
  hentReserverteOppgaver: (params: any, keepData: boolean) => void;
}

/**
 * FlyttReservasjonModal
 *
 * Presentasjonskomponent. Modal som lar en søke opp en saksbehandler som saken skal flyttes til. En kan også begrunne hvorfor saken skal flyttes.
 */
export const FlyttReservasjonModal: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  showModal,
  closeModal,
  oppgaveId,
  toggleMenu,
  hentReserverteOppgaver,
}) => {
  const {
    startRequest, state, data: saksbehandler, resetRequestData,
  } = restApiHooks.useRestApiRunner(RestApiPathsKeys.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK);
  const finnSaksbehandler = useCallback((brukerIdent: string) => startRequest(brukerIdent), []);

  const { startRequest: flyttOppgavereservasjon } = restApiHooks.useRestApiRunner(RestApiPathsKeys.FLYTT_RESERVASJON);
  const flyttReservasjon = useCallback((brukerident: string, begrunnelse: string) => flyttOppgavereservasjon({
    oppgaveId, brukerIdent: brukerident, begrunnelse,
  }).then(() => hentReserverteOppgaver({}, true)),
  []);

  useEffect(() => () => {
    resetRequestData();
  }, []);

  const søkFormMethods = useForm<SøkFormValues>();
  const brukerIdentValue = søkFormMethods.watch('brukerIdent');

  const lagreFormMethods = useForm<LagreFormValues>();
  const begrunnelseValue = lagreFormMethods.watch('begrunnelse');

  return (
    <Modal
      className={styles.modal}
      open={showModal}
      closeButton={false}
      aria-label={intl.formatMessage({ id: 'FlyttReservasjonModal.FlyttReservasjon' })}
      onClose={closeModal}
    >
      <Form<SøkFormValues> formMethods={søkFormMethods} onSubmit={(values) => finnSaksbehandler(values.brukerIdent)}>
        <Label size="small">
          <FormattedMessage id="FlyttReservasjonModal.FlyttReservasjon" />
        </Label>
        <VerticalSpacer eightPx />
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
                loading={state === RestApiState.LOADING}
                disabled={!brukerIdentValue || state === RestApiState.LOADING}
              >
                <FormattedMessage id="FlyttReservasjonModal.Sok" />
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
        {state === RestApiState.SUCCESS && (
          <>
            <BodyShort size="small">{formatText(state, intl, saksbehandler)}</BodyShort>
            <VerticalSpacer sixteenPx />
          </>
        )}
      </Form>
      <VerticalSpacer sixteenPx />
      <Form<LagreFormValues>
        formMethods={lagreFormMethods}
        onSubmit={(values) => {
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
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Button
                className={styles.submitButton}
                size="small"
                variant="primary"
                disabled={!saksbehandler || (!begrunnelseValue || begrunnelseValue.length < 3)}
              >
                {intl.formatMessage({ id: 'FlyttReservasjonModal.Ok' })}
              </Button>
            </FlexColumn>
            <FlexColumn>
              <Button
                className={styles.cancelButton}
                size="small"
                variant="primary"
                onClick={closeModal}
                type="button"
              >
                {intl.formatMessage({ id: 'FlyttReservasjonModal.Avbryt' })}
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </Form>
    </Modal>
  );
};

export default injectIntl(FlyttReservasjonModal);
