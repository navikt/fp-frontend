import { useEffect, useState } from 'react';

import { CalendarIcon, CheckmarkIcon } from '@navikt/aksel-icons';
import { Button, DatePicker, HStack, Loader } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { capitalizeFirstLetter, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { ReservasjonStatusDto } from '@navikt/fp-types';

interface Props {
  reservertTilTidspunkt: string;
  endreReservasjon: (reserverTil: string) => Promise<ReservasjonStatusDto>;
}

export const EndreReservasjonDato = ({ reservertTilTidspunkt, endreReservasjon }: Props) => {
  const [openDatepicker, setOpenDatepicker] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSelect = async (date: Date) => {
    setIsPending(true);
    try {
      await endreReservasjon(dayjs(date).format(ISO_DATE_FORMAT));
      setOpenDatepicker(false);
      setShowSuccess(true);
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    if (!showSuccess) {
      return undefined;
    }
    const timer = setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [showSuccess]);

  const getButtonIcon = () => {
    if (isPending) {
      return <Loader size="small" title="Lagrer..." />;
    }
    if (showSuccess) {
      return <CheckmarkIcon title="Lagret" />;
    }
    return <CalendarIcon title="Åpne datovelger" />;
  };

  return (
    <HStack gap="space-8" align="center" wrap={false}>
      <span className="w-14">{capitalizeFirstLetter(dayjs(reservertTilTidspunkt).format('dddd'))}</span>
      <DateLabel dateString={reservertTilTidspunkt} />
      <DatePicker
        mode="single"
        disableWeekends
        selected={dayjs(reservertTilTidspunkt).toDate()}
        open={openDatepicker}
        onClose={() => setOpenDatepicker(false)}
        onSelect={date => (date ? handleSelect(date) : null)}
        fromDate={new Date()}
        toDate={dayjs().startOf('day').add(30, 'days').toDate()}
      >
        <Button
          variant="tertiary"
          size="small"
          onClick={() => {
            setOpenDatepicker(x => !x);
          }}
          icon={getButtonIcon()}
          disabled={isPending}
        />
      </DatePicker>
    </HStack>
  );
};
