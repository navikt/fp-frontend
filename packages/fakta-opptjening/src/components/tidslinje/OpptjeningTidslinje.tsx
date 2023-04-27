import React, { FunctionComponent, useMemo, useCallback } from 'react';
import moment from 'moment';

import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { KodeverkMedNavn, OpptjeningAktivitet } from '@navikt/fp-types';

import { Timeline } from '@navikt/ds-react-internal';
import {
  WalletIcon,
  HandHeartIcon,
  StrollerIcon,
  PersonPregnantIcon,
  StethoscopeIcon,
  EarthIcon,
  ExclamationmarkTriangleIcon,
  CheckmarkCircleIcon,
  XMarkOctagonIcon,
} from '@navikt/aksel-icons';
import { BodyShort, Label } from '@navikt/ds-react';
import { OpptjeningAktivitetType } from '@navikt/ft-kodeverk';
import { FormValues } from '../aktivitet/ValgtAktivitetForm';
import { finnOpptjeningFom, finnOpptjeningTom } from '../../utils/opptjeningDatoUtil';

const finnStatus = (erGodkjent: boolean): 'success' | 'warning' | 'danger' => {
  if (erGodkjent === false) {
    return 'danger';
  }
  if (erGodkjent === true) {
    return 'success';
  }
  return 'warning';
};

const AKTIVITET_TYPE_IKON_MAP = {
  [OpptjeningAktivitetType.ARBEID]: <WalletIcon width={20} height={20} />,
  [OpptjeningAktivitetType.AAP]: <HandHeartIcon width={20} height={20} />,
  [OpptjeningAktivitetType.DAGPENGER]: <HandHeartIcon width={20} height={20} />,
  [OpptjeningAktivitetType.FORELDREPENGER]: <StrollerIcon width={20} height={20} />,
  [OpptjeningAktivitetType.FRILANS]: <WalletIcon width={20} height={20} />,
  [OpptjeningAktivitetType.MILITAR_ELLER_SIVILTJENESTE]: <WalletIcon width={20} height={20} />,
  [OpptjeningAktivitetType.NARING]: <WalletIcon width={20} height={20} />,
  [OpptjeningAktivitetType.OMSORGSPENGER]: <HandHeartIcon width={20} height={20} />,
  [OpptjeningAktivitetType.OPPLARINGSPENGER]: <HandHeartIcon width={20} height={20} />,
  [OpptjeningAktivitetType.PLEIEPENGER]: <HandHeartIcon width={20} height={20} />,
  [OpptjeningAktivitetType.SVANGERSKAPSPENGER]: <PersonPregnantIcon width={20} height={20} />,
  [OpptjeningAktivitetType.SYKEPENGER]: <StethoscopeIcon width={20} height={20} />,
  [OpptjeningAktivitetType.UTENLANDSK_ARBEIDSFORHOLD]: <EarthIcon width={20} height={20} />,
  [OpptjeningAktivitetType.ETTERLONN_SLUTTPAKKE]: <WalletIcon width={20} height={20} />,
};

const PERIODE_STATUS_IKON_MAP = {
  danger: <XMarkOctagonIcon />,
  success: <CheckmarkCircleIcon />,
  warning: <ExclamationmarkTriangleIcon />,
};

interface Rad {
  id: number;
  label: string;
  aktivitetTypeKode: string;
  arbeidsforholdRef: string;
  arbeidsgiverReferanse: string;
}

const lagPerioder = (
  opptjeningperioder: OpptjeningAktivitet[],
  formVerdierForAlleAktiviteter: FormValues[],
  rader: Rad[],
  opptjeningFomDato: string,
  opptjeningTomDato: string,
) =>
  opptjeningperioder.map((opptjeningPeriode, index) => ({
    id: index,
    start: moment(finnOpptjeningFom(opptjeningPeriode.opptjeningFom, opptjeningFomDato, opptjeningTomDato)).toDate(),
    end: moment(finnOpptjeningTom(opptjeningPeriode.opptjeningTom, opptjeningFomDato, opptjeningTomDato)).toDate(),
    radId: rader.find(
      rad =>
        rad.aktivitetTypeKode === opptjeningPeriode.aktivitetType &&
        rad.arbeidsforholdRef === opptjeningPeriode.arbeidsforholdRef &&
        rad.arbeidsgiverReferanse === opptjeningPeriode.arbeidsgiverReferanse,
    ).id,
    status: finnStatus(formVerdierForAlleAktiviteter[index].erGodkjent),
  }));

const lagRader = (opptjeningPeriods: OpptjeningAktivitet[], opptjeningAktivitetTypes: KodeverkMedNavn[]): Rad[] => {
  const duplicatesRemoved = opptjeningPeriods.reduce<OpptjeningAktivitet[]>((accPeriods, period) => {
    const hasPeriod = accPeriods.some(
      p =>
        p.aktivitetType === period.aktivitetType &&
        p.arbeidsforholdRef === period.arbeidsforholdRef &&
        p.arbeidsgiverReferanse === period.arbeidsgiverReferanse,
    );
    if (!hasPeriod) accPeriods.push(period);
    return accPeriods;
  }, []);
  const rader = duplicatesRemoved.map((activity: OpptjeningAktivitet, index: number) => ({
    id: index + 1,
    label: opptjeningAktivitetTypes.find(oat => oat.kode === activity.aktivitetType).navn,
    aktivitetTypeKode: activity.aktivitetType,
    arbeidsforholdRef: activity.arbeidsforholdRef,
    arbeidsgiverReferanse: activity.arbeidsgiverReferanse,
  }));

  return [...rader].sort((r1, r2) => r1.label.localeCompare(r2.label));
};

interface OwnProps {
  opptjeningPerioder: OpptjeningAktivitet[];
  formVerdierForAlleAktiviteter: FormValues[];
  valgtAktivitetIndex?: number;
  opptjeningAktivitetTypes: KodeverkMedNavn[];
  setValgtAktivitetIndex: (periodeIndex: number) => void;
  opptjeningFomDato: string;
  opptjeningTomDato: string;
}

const OpptjeningTimeLine: FunctionComponent<OwnProps> = ({
  opptjeningPerioder,
  formVerdierForAlleAktiviteter,
  opptjeningFomDato,
  opptjeningTomDato,
  valgtAktivitetIndex,
  opptjeningAktivitetTypes,
  setValgtAktivitetIndex,
}) => {
  const rader = useMemo(() => lagRader(opptjeningPerioder, opptjeningAktivitetTypes), [opptjeningPerioder]);
  const perioder = useMemo(
    () => lagPerioder(opptjeningPerioder, formVerdierForAlleAktiviteter, rader, opptjeningFomDato, opptjeningTomDato),
    [formVerdierForAlleAktiviteter],
  );

  const velgPeriode = useCallback(
    (periodeId: number): void => {
      const valgtPeriode = perioder.find(item => item.id === periodeId);
      if (valgtPeriode) {
        setValgtAktivitetIndex(valgtPeriode.id);
      }
    },
    [perioder, setValgtAktivitetIndex],
  );

  return (
    <Timeline
      startDate={moment(opptjeningFomDato).subtract(1, 'months').toDate()}
      endDate={moment(opptjeningTomDato).add(10, 'days').toDate()}
    >
      <Timeline.Pin date={moment(opptjeningFomDato).toDate()}>
        <Label size="small">Startdato opptjeningsperiode</Label>
        <BodyShort size="small">{moment(opptjeningFomDato).format(DDMMYYYY_DATE_FORMAT)}</BodyShort>
      </Timeline.Pin>
      {rader.map(rad => (
        <Timeline.Row label={rad.label} icon={AKTIVITET_TYPE_IKON_MAP[rad.aktivitetTypeKode]}>
          {perioder
            .filter(periode => periode.radId === rad.id)
            .map(periode => (
              <Timeline.Period
                key={periode.id}
                start={periode.start}
                end={periode.end}
                status={periode.status}
                icon={PERIODE_STATUS_IKON_MAP[periode.status]}
                onSelectPeriod={() => velgPeriode(periode.id)}
                isActive={valgtAktivitetIndex === periode.id}
                statusLabel={rad.label}
              />
            ))}
        </Timeline.Row>
      ))}
      <Timeline.Pin date={moment(opptjeningTomDato).toDate()}>
        <Label size="small">Sluttdato opptjeningsperiode</Label>
        <BodyShort size="small">{moment(opptjeningTomDato).format(DDMMYYYY_DATE_FORMAT)}</BodyShort>
      </Timeline.Pin>
    </Timeline>
  );
};

export default OpptjeningTimeLine;
