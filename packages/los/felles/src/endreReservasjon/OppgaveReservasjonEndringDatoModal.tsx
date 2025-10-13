import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Heading, Modal as NavModal } from '@navikt/ds-react';
import { RhfDatepicker, RhfForm } from '@navikt/ft-form-hooks';
import { dateAfterOrEqualToToday, dateBeforeOrEqual, hasValidDate } from '@navikt/ft-form-validators';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

const thirtyDaysFromNow = (): dayjs.Dayjs => {
  return dayjs().startOf('day').add(30, 'days');
};

type FormValues = {
  reserverTil: string;
};

interface Props {
  closeModal: () => void;
  reserverTilDefault?: string;
  endreOppgavereservasjon: (reserverTil: string) => void;
}

export const OppgaveReservasjonEndringDatoModal = ({
  closeModal,
  reserverTilDefault,
  endreOppgavereservasjon,
}: Props) => {
  const intl = useIntl();

  const søkFormMethods = useForm<FormValues>({
    defaultValues: {
      reserverTil: reserverTilDefault ? dayjs(reserverTilDefault).format(ISO_DATE_FORMAT) : '',
    },
  });

  return (
    <RhfForm<FormValues> formMethods={søkFormMethods} onSubmit={values => endreOppgavereservasjon(values.reserverTil)}>
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
          <RhfDatepicker
            name="reserverTil"
            control={søkFormMethods.control}
            label=""
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
    </RhfForm>
  );
};
