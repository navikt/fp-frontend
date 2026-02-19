import { useForm } from 'react-hook-form';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { Button, Label, Modal as NavModal } from '@navikt/ds-react';
import { RhfDatepicker, RhfForm } from '@navikt/ft-form-hooks';
import { dateAfterOrEqualToToday, dateBeforeOrEqual, hasValidDate } from '@navikt/ft-form-validators';
import { createIntl, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

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
  const søkFormMethods = useForm<FormValues>({
    defaultValues: {
      reserverTil: reserverTilDefault ? dayjs(reserverTilDefault).format(ISO_DATE_FORMAT) : '',
    },
  });

  return (
    <RawIntlProvider value={intl}>
      <RhfForm<FormValues>
        formMethods={søkFormMethods}
        onSubmit={values => endreOppgavereservasjon(values.reserverTil)}
      >
        <NavModal
          open
          aria-label={intl.formatMessage({ id: 'OppgaveReservasjonEndringDatoModal.Header' })}
          onClose={closeModal}
        >
          <NavModal.Header>
            <Label size="medium">
              <FormattedMessage id="OppgaveReservasjonEndringDatoModal.Header" />
            </Label>
          </NavModal.Header>
          <NavModal.Body>
            <RhfDatepicker
              name="reserverTil"
              control={søkFormMethods.control}
              label={<FormattedMessage id="OppgaveReservasjonEndringDatoModal.ReserverTil" />}
              validate={[hasValidDate, dateAfterOrEqualToToday, dateBeforeOrEqual(thirtyDaysFromNow())]}
              fromDate={new Date()}
              toDate={thirtyDaysFromNow().toDate()}
            />
          </NavModal.Body>
          <NavModal.Footer>
            <Button size="small" type="submit">
              <FormattedMessage id="Label.Ok" />
            </Button>
            <Button size="small" variant="secondary" onClick={closeModal} type="button">
              <FormattedMessage id="Label.Avbryt" />
            </Button>
          </NavModal.Footer>
        </NavModal>
      </RhfForm>
    </RawIntlProvider>
  );
};
