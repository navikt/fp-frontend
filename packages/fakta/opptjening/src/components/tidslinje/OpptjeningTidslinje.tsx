import { type ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

import {
  CheckmarkCircleIcon,
  EarthIcon,
  ExclamationmarkTriangleIcon,
  HandHeartIcon,
  PersonPregnantIcon,
  StethoscopeIcon,
  StrollerIcon,
  WalletIcon,
  XMarkOctagonIcon,
} from '@navikt/aksel-icons';
import { Timeline } from '@navikt/ds-react';
import { DateLabel, LabeledValue } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';

import type { KodeverkMedNavn, Opptjening, OpptjeningAktivitet, OpptjeningAktivitetType } from '@navikt/fp-types';

import { finnOpptjeningFom, finnOpptjeningTom } from '../../utils/opptjeningDatoUtil';
import { type FormValues } from '../aktivitet/ValgtAktivitetForm';

const finnStatus = (erGodkjent: boolean | undefined): 'success' | 'warning' | 'danger' => {
  if (erGodkjent === false) {
    return 'danger';
  }
  if (erGodkjent === true) {
    return 'success';
  }
  return 'warning';
};

const AKTIVITET_TYPE_IKON_MAP: Record<OpptjeningAktivitetType, ReactNode> = {
  ARBEID: <WalletIcon aria-hidden />,
  AAP: <HandHeartIcon aria-hidden />,
  DAGPENGER: <HandHeartIcon aria-hidden />,
  FORELDREPENGER: <StrollerIcon aria-hidden />,
  FRILANS: <WalletIcon aria-hidden />,
  MILITÆR_ELLER_SIVILTJENESTE: <WalletIcon aria-hidden />,
  NÆRING: <WalletIcon aria-hidden />,
  OMSORGSPENGER: <HandHeartIcon aria-hidden />,
  OPPLÆRINGSPENGER: <HandHeartIcon aria-hidden />,
  PLEIEPENGER: <HandHeartIcon aria-hidden />,
  SVANGERSKAPSPENGER: <PersonPregnantIcon aria-hidden />,
  SYKEPENGER: <StethoscopeIcon />,
  UTENLANDSK_ARBEIDSFORHOLD: <EarthIcon aria-hidden />,
  ETTERLØNN_SLUTTPAKKE: <WalletIcon aria-hidden />,
  FRILOPP: undefined,
  FRISINN: undefined,
  VENTELØNN_VARTPENGER: undefined,
  VIDERE_ETTERUTDANNING: undefined,
  UTDANNINGSPERMISJON: undefined,
  '-': undefined,
};

const PERIODE_STATUS_IKON_MAP = {
  danger: <XMarkOctagonIcon aria-hidden />,
  success: <CheckmarkCircleIcon aria-hidden />,
  warning: <ExclamationmarkTriangleIcon aria-hidden />,
};

interface Rad {
  id: number;
  label: string;
  aktivitetTypeKode: OpptjeningAktivitetType;
  arbeidsforholdRef?: string;
  arbeidsgiverReferanse?: string;
}

const lagPerioder = (
  opptjeningperioder: OpptjeningAktivitet[],
  formVerdierForAlleAktiviteter: FormValues[],
  rader: Rad[],
  opptjeningFomDato?: string,
  opptjeningTomDato?: string,
) =>
  opptjeningperioder.map((opptjeningPeriode, index) => ({
    id: index,
    start: dayjs(finnOpptjeningFom(opptjeningPeriode.opptjeningFom, opptjeningFomDato, opptjeningTomDato)).toDate(),
    end: dayjs(finnOpptjeningTom(opptjeningPeriode.opptjeningTom, opptjeningFomDato, opptjeningTomDato)).toDate(),
    radId: rader.find(
      rad =>
        rad.aktivitetTypeKode === opptjeningPeriode.aktivitetType &&
        rad.arbeidsforholdRef === opptjeningPeriode.arbeidsforholdRef &&
        rad.arbeidsgiverReferanse === opptjeningPeriode.arbeidsgiverReferanse,
    )?.id,
    status: finnStatus(formVerdierForAlleAktiviteter[index]!.erGodkjent),
  }));

const lagRader = (
  opptjeningPeriods: OpptjeningAktivitet[],
  opptjeningAktivitetTypes: KodeverkMedNavn<'OpptjeningAktivitetType'>[],
): Rad[] => {
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
  return duplicatesRemoved.map<Rad>((activity: OpptjeningAktivitet, index: number) => {
    const type = opptjeningAktivitetTypes.find(oat => oat.kode === activity.aktivitetType);
    const label = type?.kode === 'AAP' ? type.kode : type?.navn;
    return {
      id: index + 1,
      label: label ?? '',
      aktivitetTypeKode: activity.aktivitetType,
      arbeidsforholdRef: activity.arbeidsforholdRef,
      arbeidsgiverReferanse: activity.arbeidsgiverReferanse,
    };
  });
};

interface Props {
  opptjeningPerioder: OpptjeningAktivitet[];
  formVerdierForAlleAktiviteter: FormValues[];
  valgtAktivitetIndex?: number;
  opptjeningAktivitetTypes: KodeverkMedNavn<'OpptjeningAktivitetType'>[];
  setValgtAktivitetIndex: (periodeIndex: number) => void;
  fastsattOpptjening?: Opptjening['fastsattOpptjening'];
}

export const OpptjeningTidslinje = ({
  opptjeningPerioder,
  formVerdierForAlleAktiviteter,
  fastsattOpptjening,
  valgtAktivitetIndex,
  opptjeningAktivitetTypes,
  setValgtAktivitetIndex,
}: Props) => {
  const opptjeningFomDato = fastsattOpptjening?.opptjeningFom;
  const opptjeningTomDato = fastsattOpptjening?.opptjeningTom;

  const rader = lagRader(opptjeningPerioder, opptjeningAktivitetTypes);
  const perioder = lagPerioder(
    opptjeningPerioder,
    formVerdierForAlleAktiviteter,
    rader,
    opptjeningFomDato,
    opptjeningTomDato,
  );

  const velgPeriode = (periodeId: number): void => {
    const valgtPeriode = perioder.find(item => item.id === periodeId);
    if (valgtPeriode) {
      setValgtAktivitetIndex(valgtPeriode.id);
    }
  };

  if (!opptjeningFomDato || !opptjeningTomDato) {
    return null;
  }

  return (
    <Timeline
      startDate={dayjs(opptjeningFomDato).subtract(1, 'months').toDate()}
      endDate={dayjs(opptjeningTomDato).add(10, 'days').toDate()}
    >
      <Timeline.Pin date={dayjs(opptjeningFomDato).toDate()}>
        <LabeledValue
          size="small"
          label={<FormattedMessage id="OpptjeningTidslinje.StartDato" />}
          value={<DateLabel dateString={opptjeningFomDato} />}
        />
      </Timeline.Pin>
      <Timeline.Pin date={dayjs(opptjeningTomDato).toDate()}>
        <LabeledValue
          size="small"
          label={<FormattedMessage id="OpptjeningTidslinje.SluttDato" />}
          value={<DateLabel dateString={opptjeningTomDato} />}
        />
      </Timeline.Pin>
      {rader.map(rad => (
        <Timeline.Row key={rad.id} label={rad.label} icon={AKTIVITET_TYPE_IKON_MAP[rad.aktivitetTypeKode]}>
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
      {rader.length === 0 && (
        <Timeline.Row label="">
          <></>
        </Timeline.Row>
      )}
    </Timeline>
  );
};
