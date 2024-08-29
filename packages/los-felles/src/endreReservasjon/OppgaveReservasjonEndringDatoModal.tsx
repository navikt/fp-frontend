import React, { FunctionComponent, MouseEvent, useCallback, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { Button, Heading, Modal as NavModal } from '@navikt/ds-react';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { dateAfterOrEqual, dateBeforeOrEqual, hasValidDate } from '@navikt/ft-form-validators';
import { Datepicker, Form } from '@navikt/ft-form-hooks';

import Oppgave from '../typer/oppgaveTsType';

const thirtyDaysFromNow = () => {
  const result = new Date();
  result.setDate(new Date().getDate() + 30);
  return result;
};

type FormValues = {
  reserverTil: string;
};

interface OwnProps {
  showModal: boolean;
  closeModal: (event: MouseEvent<HTMLButtonElement>) => void;
  reserverTilDefault?: string;
  oppgaveId: number;
  endreReserverasjonState: () => void;
  hentReserverteOppgaver: (params: any, keepData: boolean) => void;
  endreOppgavereservasjon: (input: { oppgaveId: number; reserverTil: string }) => Promise<Oppgave[] | undefined>;
}

/**
 * OppgaveReservasjonEndringDatoModal.
 */
const OppgaveReservasjonEndringDatoModal: FunctionComponent<OwnProps> = ({
                                                                           showModal,
                                                                           closeModal,
                                                                           reserverTilDefault,
                                                                           oppgaveId,
                                                                           hentReserverteOppgaver,
                                                                           endreReserverasjonState,
                                                                           endreOppgavereservasjon,
                                                                         }) => {
  const intl = useIntl();

  const endreOppgaveReservasjonFn = useCallback(
    (reserverTil: string) =>
      endreOppgavereservasjon({ oppgaveId, reserverTil }).then(() => {
        endreReserverasjonState();
        hentReserverteOppgaver({}, true);
      }),
    [],
  );

  const defaultValues = useMemo(
    () => ({
      reserverTil: reserverTilDefault ? dayjs(reserverTilDefault).format(ISO_DATE_FORMAT) : '',
    }),
    [reserverTilDefault],
  );

  const søkFormMethods = useForm<FormValues>({
    defaultValues,
  });

  return (
    <Form<FormValues> formMethods={søkFormMethods} onSubmit={values => endreOppgaveReservasjonFn(values.reserverTil)}>
      <NavModal
        width="small"
        open={showModal}
        aria-label={intl.formatMessage({ id: 'OppgaveReservasjonEndringDatoModal.Header' })}
        onClose={closeModal as () => void}
      >
        <NavModal.Header>
          <Heading size="small">
            <FormattedMessage id="OppgaveReservasjonEndringDatoModal.Header" />
          </Heading>
        </NavModal.Header>
        <NavModal.Body>
          <Datepicker
            label=""
            name="reserverTil"
            validate={[hasValidDate, dateAfterOrEqual(new Date()), dateBeforeOrEqual(thirtyDaysFromNow())]}
            fromDate={new Date()}
            toDate={thirtyDaysFromNow()}
          />
        </NavModal.Body>
        <NavModal.Footer>
          <Button size="small">
            <FormattedMessage id="OppgaveReservasjonEndringDatoModal.Ok" />
          </Button>
          <Button size="small" variant="secondary" onClick={closeModal} type="button">
            <FormattedMessage id="OppgaveReservasjonEndringDatoModal.Avbryt" />
          </Button>
        </NavModal.Footer>
      </NavModal>
    </Form>
  );
};

export default OppgaveReservasjonEndringDatoModal;
