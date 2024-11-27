import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Heading, Modal as NavModal } from '@navikt/ds-react';
import { Datepicker, Form } from '@navikt/ft-form-hooks';
import { dateAfterOrEqualToToday, dateBeforeOrEqual, hasValidDate } from '@navikt/ft-form-validators';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import Oppgave from '../typer/oppgaveTsType';

const thirtyDaysFromNow = (): dayjs.Dayjs => {
  return dayjs().startOf('day').add(30, 'days');
};

type FormValues = {
  reserverTil: string;
};

interface Props {
  closeModal: () => void;
  reserverTilDefault?: string;
  oppgaveId: number;
  endreReserverasjonState: () => void;
  hentReserverteOppgaver: (params: any, keepData: boolean) => void;
  endreOppgavereservasjon: (input: { oppgaveId: number; reserverTil: string }) => Promise<Oppgave[] | undefined>;
}

export const OppgaveReservasjonEndringDatoModal = ({
  closeModal,
  reserverTilDefault,
  oppgaveId,
  hentReserverteOppgaver,
  endreReserverasjonState,
  endreOppgavereservasjon,
}: Props) => {
  const intl = useIntl();

  const endreOppgaveReservasjonFn = (reserverTil: string) =>
    endreOppgavereservasjon({ oppgaveId, reserverTil }).then(() => {
      endreReserverasjonState();
      hentReserverteOppgaver({}, true);
      closeModal();
    });

  const søkFormMethods = useForm<FormValues>({
    defaultValues: {
      reserverTil: reserverTilDefault ? dayjs(reserverTilDefault).format(ISO_DATE_FORMAT) : '',
    },
  });

  return (
    <Form<FormValues> formMethods={søkFormMethods} onSubmit={values => endreOppgaveReservasjonFn(values.reserverTil)}>
      <NavModal
        width="small"
        open
        aria-label={intl.formatMessage({ id: 'OppgaveReservasjonEndringDatoModal.Header' })}
        onClose={closeModal}
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
            validate={[hasValidDate, dateAfterOrEqualToToday, dateBeforeOrEqual(thirtyDaysFromNow())]}
            fromDate={new Date()}
            toDate={thirtyDaysFromNow().toDate()}
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
