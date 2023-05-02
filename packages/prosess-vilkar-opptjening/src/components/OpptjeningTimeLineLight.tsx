import React, { FunctionComponent, useState, useMemo, useCallback } from 'react';
import { Timeline } from '@navikt/ds-react-internal';
import dayjs from 'dayjs';
import { BodyShort, Label } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';
import { ExclamationmarkTriangleIcon, CheckmarkCircleIcon, XMarkOctagonIcon } from '@navikt/aksel-icons';

import { TimeLineNavigation } from '@navikt/ft-tidslinje';
import { FastsattOpptjeningAktivitet } from '@navikt/fp-types';

import { DateLabel, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import opptjeningAktivitetKlassifisering from '../kodeverk/opptjeningAktivitetKlassifisering';
import TimeLineData from './TimeLineData';

import styles from './opptjeningTimeLineLight.module.css';

type Periode = {
  start: Date;
  end: Date;
  status: 'success' | 'danger' | 'info';
  opptjeningsperiode?: FastsattOpptjeningAktivitet;
};

const PERIODE_STATUS_IKON_MAP = {
  danger: <XMarkOctagonIcon />,
  success: <CheckmarkCircleIcon />,
  warning: <ExclamationmarkTriangleIcon />,
};

const getStatus = (klasseKode: string): 'success' | 'danger' | 'info' => {
  if (
    klasseKode === opptjeningAktivitetKlassifisering.BEKREFTET_AVVIST ||
    klasseKode === opptjeningAktivitetKlassifisering.ANTATT_AVVIST
  ) {
    return 'danger';
  }
  if (
    klasseKode === opptjeningAktivitetKlassifisering.BEKREFTET_GODKJENT ||
    klasseKode === opptjeningAktivitetKlassifisering.ANTATT_GODKJENT
  ) {
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

interface OwnProps {
  opptjeningPeriods: FastsattOpptjeningAktivitet[];
  opptjeningFomDate: string;
  opptjeningTomDate: string;
}

const OpptjeningTimeLineLight: FunctionComponent<OwnProps> = ({
  opptjeningPeriods,
  opptjeningFomDate,
  opptjeningTomDate,
}) => {
  const sorterteOpptjeningsperioder = useMemo(
    () => [...opptjeningPeriods].sort((a, b) => dayjs(a.fom).diff(dayjs(b.fom))),
    [opptjeningPeriods],
  );
  const perioder = useMemo(() => lagTidslinjePerioder(sorterteOpptjeningsperioder), [sorterteOpptjeningsperioder]);

  const [valgtPeriod, setValgtPeriode] = useState<Periode>();

  const velgPeriode = (startDato: string): void => {
    const valg = perioder.find(item => item.opptjeningsperiode.fom === startDato);
    if (valg) {
      setValgtPeriode(valg);
    }
  };

  const åpnePeriodeinfo = useCallback(
    (event: React.MouseEvent): void => {
      event.preventDefault();
      if (valgtPeriod) {
        setValgtPeriode(undefined);
      } else if (perioder) {
        setValgtPeriode(perioder[0]);
      }
    },
    [valgtPeriod, setValgtPeriode, perioder],
  );

  const velgNestePeriode = useCallback(
    (event: React.MouseEvent): void => {
      event.preventDefault();
      if (perioder) {
        const nyIndex = perioder.findIndex(oa => oa.opptjeningsperiode.fom === valgtPeriod?.opptjeningsperiode.fom) + 1;
        if (nyIndex < perioder.length - 2) {
          setValgtPeriode(perioder[nyIndex]);
        }
      }
    },
    [perioder, valgtPeriod, setValgtPeriode],
  );

  const velgForrigePeriode = useCallback(
    (event: React.MouseEvent): void => {
      event.preventDefault();
      if (perioder) {
        const nyIndex = perioder.findIndex(oa => oa.opptjeningsperiode.fom === valgtPeriod?.opptjeningsperiode.fom) - 1;
        if (nyIndex >= 0) {
          setValgtPeriode(perioder[nyIndex]);
        }
      }
    },
    [perioder, valgtPeriod, setValgtPeriode],
  );

  return (
    <>
      <VerticalSpacer sixteenPx />
      <Timeline
        startDate={dayjs(opptjeningFomDate).subtract(1, 'months').toDate()}
        endDate={dayjs(opptjeningTomDate).add(10, 'days').toDate()}
      >
        <Timeline.Pin date={dayjs(opptjeningFomDate).toDate()}>
          <Label size="small">
            <FormattedMessage id="OpptjeningTimeLineLight.SluttDato" />
          </Label>
          <BodyShort size="small">
            <DateLabel dateString={opptjeningFomDate} />
          </BodyShort>
        </Timeline.Pin>
        <Timeline.Row label="">
          {perioder.map(periode => (
            <Timeline.Period
              key={periode.opptjeningsperiode.fom}
              start={periode.start}
              end={periode.end}
              status={periode.status}
              onSelectPeriod={() => velgPeriode(periode.opptjeningsperiode.fom)}
              isActive={valgtPeriod?.opptjeningsperiode?.fom === periode.opptjeningsperiode.fom}
              icon={PERIODE_STATUS_IKON_MAP[periode.status]}
            />
          ))}
        </Timeline.Row>
        <Timeline.Pin date={dayjs(opptjeningTomDate).toDate()}>
          <Label size="small">
            <FormattedMessage id="OpptjeningTimeLineLight.StartDato" />
          </Label>
          <BodyShort size="small">
            <DateLabel dateString={opptjeningTomDate} />
          </BodyShort>
        </Timeline.Pin>
      </Timeline>
      <VerticalSpacer sixteenPx />
      <div className={styles.floatRight}>
        <TimeLineNavigation openPeriodInfo={åpnePeriodeinfo} />
      </div>
      {valgtPeriod?.opptjeningsperiode && (
        <TimeLineData
          fastsattOpptjeningAktivitet={valgtPeriod.opptjeningsperiode}
          selectNextPeriod={velgNestePeriode}
          selectPrevPeriod={velgForrigePeriode}
        />
      )}
    </>
  );
};

export default OpptjeningTimeLineLight;
