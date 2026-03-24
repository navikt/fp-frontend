import { useState } from 'react';

import { CalendarIcon, CheckmarkIcon } from '@navikt/aksel-icons';
import { Button, DatePicker, HStack, Loader } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { capitalizeFirstLetter, createIntl, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';

import { endreReservasjon } from '../api/fplosFellesApi';

import styles from './endreReservasjonDato.module.css';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  reservertTilTidspunkt: string;
  oppgaveId: number;
  invalidateQueryKeys: string[];
}

export const EndreReservasjonDato = ({ reservertTilTidspunkt, oppgaveId, invalidateQueryKeys }: Props) => {
  const queryClient = useQueryClient();
  const [openDatepicker, setOpenDatepicker] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (reserverTil: Date) => endreReservasjon(oppgaveId, dayjs(reserverTil).format(ISO_DATE_FORMAT)),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: invalidateQueryKeys });
      setOpenDatepicker(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    },
  });

  const { title, icon } = getState(isPending, showSuccess);

  return (
    <HStack gap="space-8" align="center" wrap={false}>
      <span className="w-[7ch]">{capitalizeFirstLetter(dayjs(reservertTilTidspunkt).format('dddd'))}</span>
      <DateLabel dateString={reservertTilTidspunkt} />
      <DatePicker
        mode="single"
        disableWeekends
        open={openDatepicker}
        selected={dayjs(reservertTilTidspunkt).toDate()}
        onSelect={date => (date ? mutateAsync(date) : null)}
        onClose={() => setOpenDatepicker(false)}
        fromDate={new Date()}
        toDate={dayjs().startOf('day').add(30, 'days').toDate()}
      >
        <Button
          variant="tertiary"
          size="small"
          onClick={() => {
            setOpenDatepicker(x => !x);
          }}
          aria-label={title}
          title={title}
          icon={icon}
          disabled={isPending}
          data-active={showSuccess}
        />
      </DatePicker>
    </HStack>
  );
};

const getState = (isPending: boolean, showSuccess: boolean) => {
  if (isPending) {
    return {
      title: intl.formatMessage({ id: 'EndreReservasjonDato.Lagrer' }),
      icon: <Loader size="small" aria-hidden />,
    };
  }
  if (showSuccess) {
    return {
      title: intl.formatMessage({ id: 'EndreReservasjonDato.Lagret' }),
      icon: <CheckmarkIcon aria-hidden className={styles['successIcon']} />,
    };
  }
  return {
    title: intl.formatMessage({ id: 'EndreReservasjonDato.ÅpneDatovelger' }),
    icon: <CalendarIcon aria-hidden />,
  };
};
