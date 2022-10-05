import React, { MouseEvent, FunctionComponent, useCallback } from 'react';
import { injectIntl, WrappedComponentProps, FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Panel, Button } from '@navikt/ds-react';
import { dateAfterOrEqual, dateBeforeOrEqual, hasValidDate } from '@navikt/ft-form-validators';
import { Form, Datepicker } from '@navikt/ft-form-hooks';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import Modal from '../../../../components/Modal';
import { RestApiPathsKeys, restApiHooks } from '../../../../data/fplosSaksbehandlerRestApi';

import styles from './oppgaveReservasjonEndringDatoModal.less';

const thirtyDaysFromNow = () => {
  const result = new Date();
  result.setDate(new Date().getDate() + 30);
  return result;
};

type FormValues = {
  reserverTil: string;
}

interface OwnProps {
  showModal: boolean;
  closeModal: (event: MouseEvent<HTMLButtonElement>) => void;
  reserverTilDefault?: string;
  oppgaveId: number;
  endreReserverasjonState: () => void;
  hentReserverteOppgaver: (params: any, keepData: boolean) => void;
}

/**
 * OppgaveReservasjonEndringDatoModal.
 */
const OppgaveReservasjonEndringDatoModal: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  showModal,
  closeModal,
  reserverTilDefault,
  oppgaveId,
  hentReserverteOppgaver,
  endreReserverasjonState,
}) => {
  const { startRequest: endreOppgavereservasjon } = restApiHooks.useRestApiRunner(RestApiPathsKeys.ENDRE_OPPGAVERESERVASJON);

  const endreOppgaveReservasjonFn = useCallback((reserverTil: string) => endreOppgavereservasjon({ oppgaveId, reserverTil })
    .then(() => {
      endreReserverasjonState();
      hentReserverteOppgaver({}, true);
    }),
  []);

  const lagDefaultValues = useCallback((reserverTil?: string) => ({
    reserverTil: (reserverTil && reserverTil.length >= 10) ? reserverTil.substr(0, 10) : '',
  }), []);

  const søkFormMethods = useForm<FormValues>({
    defaultValues: lagDefaultValues(reserverTilDefault),
  });

  return (
    <Modal
      className={styles.modal}
      open={showModal}
      closeButton={false}
      aria-label={intl.formatMessage({ id: 'OppgaveReservasjonEndringDatoModal.Header' })}
      onClose={closeModal as () => void}
    >
      <Form<FormValues> formMethods={søkFormMethods} onSubmit={(values) => endreOppgaveReservasjonFn(values.reserverTil)}>
        <Panel className={styles.panel}>
          <h3>
            <FormattedMessage id="OppgaveReservasjonEndringDatoModal.Header" />
          </h3>
          <Datepicker
            label=""
            name="reserverTil"
            validate={[hasValidDate, dateAfterOrEqual(new Date()), dateBeforeOrEqual(thirtyDaysFromNow())]}
            disabledDays={{ before: new Date(), after: thirtyDaysFromNow() }}
          />
          <div className={styles.buttonBox}>
            <FlexContainer>
              <FlexRow className={styles.buttonRow}>
                <FlexColumn>
                  <Button
                    size="small"
                    variant="secondary"
                    className={styles.button}
                    autoFocus
                  >
                    <FormattedMessage id="OppgaveReservasjonEndringDatoModal.Ok" />
                  </Button>
                </FlexColumn>
                <FlexColumn>
                  <Button
                    size="small"
                    variant="secondary"
                    className={styles.button}
                    onClick={closeModal}
                    type="button"
                  >
                    <FormattedMessage id="OppgaveReservasjonEndringDatoModal.Avbryt" />
                  </Button>
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
          </div>
        </Panel>
      </Form>
    </Modal>
  );
};

export default injectIntl(OppgaveReservasjonEndringDatoModal);
