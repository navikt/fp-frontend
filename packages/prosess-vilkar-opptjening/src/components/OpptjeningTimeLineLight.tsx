import React, { FunctionComponent, useState, useMemo, useCallback } from 'react';
import dayjs from 'dayjs';
import { BodyShort, Label, Timeline } from '@navikt/ds-react';
import { FormattedMessage, useIntl } from 'react-intl';
import { DoorOpenIcon, CheckmarkCircleIcon, XMarkOctagonIcon } from '@navikt/aksel-icons';

import { FastsattOpptjeningAktivitet } from '@navikt/fp-types';

import { DateLabel, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import opptjeningAktivitetKlassifisering from '../kodeverk/opptjeningAktivitetKlassifisering';
import TimeLineData from './TimeLineData';

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

const finnTitle = (status: 'success' | 'danger' | 'info'): string => {
  if (status === 'info') {
    return 'OpptjeningTimeLineLight.MellomliggendePeriode';
  }
  return status === 'success' ? 'OpptjeningTimeLineLight.Godkjent' : 'OpptjeningTimeLineLight.Avslatt';
};

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
  const intl = useIntl();

  const sorterteOpptjeningsperioder = useMemo(
    () => [...opptjeningPeriods].sort((a, b) => dayjs(a.fom).diff(dayjs(b.fom))),
    [opptjeningPeriods],
  );
  const perioder = useMemo(() => lagTidslinjePerioder(sorterteOpptjeningsperioder), [sorterteOpptjeningsperioder]);

  const [valgtPeriod, setValgtPeriode] = useState<Periode>();

  const velgPeriode = (startDato: string | undefined): void => {
    const valg = perioder.find(item => item.opptjeningsperiode?.fom === startDato);
    if (valg) {
      setValgtPeriode(valg);
    }
  };

  const lukkPeriode = useCallback((): void => {
    setValgtPeriode(undefined);
  }, []);

  const velgNestePeriode = useCallback((): void => {
    if (perioder) {
      const nyIndex = perioder.findIndex(oa => oa.opptjeningsperiode?.fom === valgtPeriod?.opptjeningsperiode?.fom) + 1;
      if (nyIndex < perioder.length) {
        setValgtPeriode(perioder[nyIndex]);
      }
    }
  }, [perioder, valgtPeriod, setValgtPeriode]);

  const velgForrigePeriode = useCallback((): void => {
    if (perioder) {
      const nyIndex = perioder.findIndex(oa => oa.opptjeningsperiode?.fom === valgtPeriod?.opptjeningsperiode?.fom) - 1;
      if (nyIndex >= 0) {
        setValgtPeriode(perioder[nyIndex]);
      }
    }
  }, [perioder, valgtPeriod, setValgtPeriode]);

  return (
    <>
      <VerticalSpacer twentyPx />
      <Timeline
        startDate={dayjs(opptjeningFomDate).subtract(1, 'months').toDate()}
        endDate={dayjs(opptjeningTomDate).add(10, 'days').toDate()}
      >
        <Timeline.Pin date={dayjs(opptjeningFomDate).toDate()}>
          <Label size="small">
            <FormattedMessage id="OpptjeningTimeLineLight.StartDato" />
          </Label>
          <BodyShort size="small">
            <DateLabel dateString={opptjeningFomDate} />
          </BodyShort>
        </Timeline.Pin>
        <Timeline.Pin date={dayjs(opptjeningTomDate).toDate()}>
          <Label size="small">
            <FormattedMessage id="OpptjeningTimeLineLight.SluttDato" />
          </Label>
          <BodyShort size="small">
            <DateLabel dateString={opptjeningTomDate} />
          </BodyShort>
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
      <VerticalSpacer sixteenPx />
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

export default OpptjeningTimeLineLight;
