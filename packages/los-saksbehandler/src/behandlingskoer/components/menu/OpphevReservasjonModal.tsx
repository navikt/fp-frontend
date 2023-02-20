import React, { FunctionComponent, useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Button, Heading, Modal as NavModal } from '@navikt/ds-react';
import {
  hasValidText, maxLength, minLength, required,
} from '@navikt/ft-form-validators';
import { Form, TextAreaField } from '@navikt/ft-form-hooks';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { Oppgave } from '@navikt/fp-los-felles';

import { restApiHooks, RestApiPathsKeys } from '../../../data/fplosSaksbehandlerRestApi';

import styles from './opphevReservasjonModal.less';

const minLength3 = minLength(3);
const maxLength500 = maxLength(500);

type FormValues = {
  begrunnelse: string;
}

type OwnProps = Readonly<{
  showModal: boolean;
  oppgave: Oppgave;
  cancel: () => void;
  toggleMenu: () => void;
  hentReserverteOppgaver: (params: any, keepData: boolean) => void;
}>;

/**
 * OpphevReservasjonModal
 *
 * Presentasjonskomponent. Modal som lar en begrunne hvorfor en sak skal frigjøres.
 */
const OpphevReservasjonModal: FunctionComponent<OwnProps> = ({
  showModal,
  cancel,
  oppgave,
  toggleMenu,
  hentReserverteOppgaver,
}) => {
  const intl = useIntl();
  const { startRequest: opphevOppgavereservasjon } = restApiHooks.useRestApiRunner(RestApiPathsKeys.OPPHEV_OPPGAVERESERVASJON);

  const opphevReservasjonFn = useCallback((begrunnelse: string) => opphevOppgavereservasjon({ oppgaveId: oppgave.id, begrunnelse })
    .then(() => {
      toggleMenu();
      hentReserverteOppgaver({}, true);
    }),
  [oppgave.id]);

  const formMethods = useForm<FormValues>();

  return (
    <NavModal
      className={styles.modal}
      open={showModal}
      closeButton={false}
      aria-label={intl.formatMessage({ id: 'OpphevReservasjonModal.Begrunnelse' })}
      onClose={cancel}
    >
      <NavModal.Content>
        <Form<FormValues> formMethods={formMethods} onSubmit={(values) => opphevReservasjonFn(values.begrunnelse)}>
          <Heading size="small"><FormattedMessage id="OpphevReservasjonModal.Begrunnelse" /></Heading>
          <TextAreaField
            name="begrunnelse"
            label={intl.formatMessage({ id: 'OpphevReservasjonModal.Hjelpetekst' })}
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
                  autoFocus
                >
                  <FormattedMessage id="OpphevReservasjonModal.Ok" />
                </Button>
              </FlexColumn>
              <FlexColumn>
                <Button
                  className={styles.cancelButton}
                  size="small"
                  variant="secondary"
                  onClick={cancel}
                  type="button"
                >
                  <FormattedMessage id="OpphevReservasjonModal.Avbryt" />
                </Button>
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        </Form>
      </NavModal.Content>
    </NavModal>
  );
};

export default OpphevReservasjonModal;
