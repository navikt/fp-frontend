import React, { FunctionComponent, useMemo, useCallback } from 'react';

import { KodeverkMedNavn, OpptjeningAktivitet } from '@navikt/fp-types';
import dayjs from 'dayjs';

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
import { BodyShort, Label, Timeline } from '@navikt/ds-react';
import { opptjeningAktivitetType as OpptjeningAktivitetType } from '@navikt/fp-kodeverk';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { DateLabel } from '@navikt/ft-ui-komponenter';
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
    start: dayjs(finnOpptjeningFom(opptjeningPeriode.opptjeningFom, opptjeningFomDato, opptjeningTomDato)).toDate(),
    end: dayjs(finnOpptjeningTom(opptjeningPeriode.opptjeningTom, opptjeningFomDato, opptjeningTomDato)).toDate(),
    radId: rader.find(
      rad =>
        rad.aktivitetTypeKode === opptjeningPeriode.aktivitetType &&
        rad.arbeidsforholdRef === opptjeningPeriode.arbeidsforholdRef &&
        rad.arbeidsgiverReferanse === opptjeningPeriode.arbeidsgiverReferanse,
    ).id,
    status: finnStatus(formVerdierForAlleAktiviteter[index].erGodkjent),
  }));

const lagRader = (
  opptjeningPeriods: OpptjeningAktivitet[],
  opptjeningAktivitetTypes: KodeverkMedNavn[],
  intl: IntlShape,
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
  return duplicatesRemoved.map((activity: OpptjeningAktivitet, index: number) => {
    const type = opptjeningAktivitetTypes.find(oat => oat.kode === activity.aktivitetType);
    return {
      id: index + 1,
      label:
        type.kode === OpptjeningAktivitetType.AAP ? intl.formatMessage({ id: 'OpptjeningTidslinje.Aap' }) : type.navn,
      aktivitetTypeKode: activity.aktivitetType,
      arbeidsforholdRef: activity.arbeidsforholdRef,
      arbeidsgiverReferanse: activity.arbeidsgiverReferanse,
    };
  });
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
  const intl = useIntl();
  const rader = useMemo(() => lagRader(opptjeningPerioder, opptjeningAktivitetTypes, intl), [opptjeningPerioder]);
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
      startDate={dayjs(opptjeningFomDato).subtract(1, 'months').toDate()}
      endDate={dayjs(opptjeningTomDato).add(10, 'days').toDate()}
    >
      <Timeline.Pin date={dayjs(opptjeningFomDato).toDate()}>
        <Label size="small">
          <FormattedMessage id="OpptjeningTidslinje.StartDato" />
        </Label>
        <BodyShort size="small">
          <DateLabel dateString={opptjeningFomDato} />
        </BodyShort>
      </Timeline.Pin>
      <Timeline.Pin date={dayjs(opptjeningTomDato).toDate()}>
        <Label size="small">
          <FormattedMessage id="OpptjeningTidslinje.SluttDato" />
        </Label>
        <BodyShort size="small">
          <DateLabel dateString={opptjeningTomDato} />
        </BodyShort>
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
    </Timeline>
  );
};

export default OpptjeningTimeLine;
