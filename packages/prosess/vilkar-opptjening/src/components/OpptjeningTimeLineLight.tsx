import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { CheckmarkCircleIcon, DoorOpenIcon, XMarkOctagonIcon } from '@navikt/aksel-icons';
import { Timeline } from '@navikt/ds-react';
import { ReadOnlyField } from '@navikt/ft-form-hooks';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';

import type { FastsattOpptjeningAktivitet } from '@navikt/fp-types';

import { TimeLineData } from './TimeLineData';

type Periode = {
  start: Date;
  end: Date;
  status: 'success' | 'danger' | 'info';
  opptjeningsperiode?: FastsattOpptjeningAktivitet;
};

const PERIODE_STATUS_IKON_MAP = {
  danger: <XMarkOctagonIcon />,
  success: <CheckmarkCircleIcon />,
  info: <DoorOpenIcon />,
} as Record<string, React.ReactElement>;

const getStatus = (klasseKode: FastsattOpptjeningAktivitet['klasse']) => {
  if (klasseKode === 'BEKREFTET_AVVIST') {
    return 'danger';
  }
  if (klasseKode === 'BEKREFTET_GODKJENT' || klasseKode === 'ANTATT_GODKJENT') {
    return 'success';
  }
  return 'info';
};

const lagTidslinjePerioder = (opptjeningsperioder: FastsattOpptjeningAktivitet[]): Periode[] =>
  opptjeningsperioder.map(
    (opptjeningsperiode): Periode => ({
      start: dayjs(opptjeningsperiode.fom).toDate(),
      end: dayjs(opptjeningsperiode.tom).toDate(),
      status: getStatus(opptjeningsperiode.klasse),
      opptjeningsperiode,
    }),
  );

const finnTitle = (status: 'success' | 'danger' | 'info'): string => {
  if (status === 'info') {
    return 'OpptjeningTimeLineLight.MellomliggendePeriode';
  }
  return status === 'success' ? 'OpptjeningTimeLineLight.Godkjent' : 'OpptjeningTimeLineLight.Avslatt';
};

interface Props {
  opptjeningPeriods: FastsattOpptjeningAktivitet[];
  opptjeningFomDate: string;
  opptjeningTomDate: string;
}

export const OpptjeningTimeLineLight = ({ opptjeningPeriods, opptjeningFomDate, opptjeningTomDate }: Props) => {
  const intl = useIntl();

  const sorterteOpptjeningsperioder = opptjeningPeriods.toSorted((a, b) => dayjs(a.fom).diff(dayjs(b.fom)));

  const perioder = lagTidslinjePerioder(sorterteOpptjeningsperioder);

  const [valgtPeriod, setValgtPeriod] = useState<Periode>();

  const velgPeriode = (startDato: string | undefined): void => {
    const valg = perioder.find(item => item.opptjeningsperiode?.fom === startDato);
    if (valg) {
      setValgtPeriod(valg);
    }
  };

  const lukkPeriode = (): void => {
    setValgtPeriod(undefined);
  };

  const velgNestePeriode = (): void => {
    const nyIndex = perioder.findIndex(oa => oa.opptjeningsperiode?.fom === valgtPeriod?.opptjeningsperiode?.fom) + 1;
    if (nyIndex < perioder.length) {
      setValgtPeriod(perioder[nyIndex]);
    }
  };

  const velgForrigePeriode = (): void => {
    const nyIndex = perioder.findIndex(oa => oa.opptjeningsperiode?.fom === valgtPeriod?.opptjeningsperiode?.fom) - 1;
    if (nyIndex >= 0) {
      setValgtPeriod(perioder[nyIndex]);
    }
  };

  return (
    <>
      <Timeline
        startDate={dayjs(opptjeningFomDate).subtract(1, 'months').toDate()}
        endDate={dayjs(opptjeningTomDate).add(10, 'days').toDate()}
      >
        <Timeline.Pin date={dayjs(opptjeningFomDate).toDate()}>
          <ReadOnlyField
            size="small"
            label={<FormattedMessage id="OpptjeningTimeLineLight.StartDato" />}
            value={<DateLabel dateString={opptjeningFomDate} />}
          />
        </Timeline.Pin>
        <Timeline.Pin date={dayjs(opptjeningTomDate).toDate()}>
          <ReadOnlyField
            size="small"
            label={<FormattedMessage id="OpptjeningTimeLineLight.SluttDato" />}
            value={<DateLabel dateString={opptjeningTomDate} />}
          />
        </Timeline.Pin>
        <Timeline.Row label="">
          {perioder.map(periode => (
            <Timeline.Period
              key={periode.opptjeningsperiode?.fom}
              start={periode.start}
              end={periode.end}
              status={periode.status}
              onSelectPeriod={() => velgPeriode(periode.opptjeningsperiode?.fom)}
              isActive={valgtPeriod?.opptjeningsperiode?.fom === periode.opptjeningsperiode?.fom}
              icon={PERIODE_STATUS_IKON_MAP[periode.status]}
              title={intl.formatMessage({ id: finnTitle(periode.status) })}
            />
          ))}
        </Timeline.Row>
      </Timeline>
      {valgtPeriod?.opptjeningsperiode && (
        <TimeLineData
          fastsattOpptjeningAktivitet={valgtPeriod.opptjeningsperiode}
          lukkPeriode={lukkPeriode}
          velgNestePeriode={velgNestePeriode}
          velgForrigePeriode={velgForrigePeriode}
        />
      )}
    </>
  );
};
