import React, { FunctionComponent, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { FormattedMessage, useIntl } from 'react-intl';
import { Timeline } from '@navikt/ds-react-internal';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import {
  FigureOutwardIcon,
  SilhouetteIcon,
  FigureCombinationIcon,
  PlusIcon,
  MinusIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  PersonPregnantIcon,
  StrollerIcon,
  PercentIcon,
  DoorOpenIcon,
  PersonPencilIcon,
  PauseIcon,
} from '@navikt/aksel-icons';
import { BodyShort, Button, Label } from '@navikt/ds-react';
import { DateLabel, FloatRight, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { KjønnkodeEnum, PeriodeSoker } from '@navikt/fp-types';
import { behandlingStatus, oppholdArsakType, periodeResultatType, uttakPeriodeType } from '@navikt/fp-kodeverk';

import styles from './uttakTidslinje.module.css';

export type PeriodeSøkerMedTidslinjedata = {
  id: number;
  periode: PeriodeSoker;
  tomMoment: dayjs.Dayjs;
  hovedsoker: boolean;
  group: number;
};

export type TidslinjeTimes = {
  soknad: string;
  fodsel: string;
  revurdering: string;
  dodSoker: string;
};

const PERIODE_TYPE_IKON_MAP = {
  [uttakPeriodeType.MODREKVOTE]: <StrollerIcon />,
  [uttakPeriodeType.FEDREKVOTE]: <StrollerIcon />,
  [uttakPeriodeType.FELLESPERIODE]: <StrollerIcon />,
  [uttakPeriodeType.FORELDREPENGER]: <StrollerIcon />,
  [uttakPeriodeType.ANNET]: <StrollerIcon />,
  [uttakPeriodeType.FORELDREPENGER_FOR_FODSEL]: <PersonPregnantIcon />,
};

const PERIODE_TYPE_LABEL_MAP = {
  [uttakPeriodeType.MODREKVOTE]: 'UttakTidslinje.Modrekvote',
  [uttakPeriodeType.FEDREKVOTE]: 'UttakTidslinje.Fedrekvote',
  [uttakPeriodeType.FELLESPERIODE]: 'UttakTidslinje.Fellesperiode',
  [uttakPeriodeType.FORELDREPENGER]: 'UttakTidslinje.Foreldrepenger',
  [uttakPeriodeType.ANNET]: 'UttakTidslinje.Annet',
  [uttakPeriodeType.FORELDREPENGER_FOR_FODSEL]: 'UttakTidslinje.ForeldrepengerForFodsel',
};

const parseDateString = (dateString: string | dayjs.Dayjs): Date => dayjs(dateString, ISO_DATE_FORMAT).toDate();

const sortByDate = (a: PeriodeSøkerMedTidslinjedata, b: PeriodeSøkerMedTidslinjedata): number => {
  if (a.periode.fom < b.periode.fom) {
    return -1;
  }
  if (a.periode.fom > b.periode.fom) {
    return 1;
  }
  return 0;
};

type PeriodeMedStartOgSlutt = {
  start: Date;
  end: Date;
  status: 'success' | 'warning' | 'danger';
  periodeType: string;
  erGradert: boolean;
  erOpphold: boolean;
  harUtsettelse: boolean;
  begrunnelse?: string;
} & PeriodeSøkerMedTidslinjedata;

const getStatus = (periode: PeriodeSoker, tilknyttetStortinget: boolean): 'success' | 'warning' | 'danger' => {
  if (periode.gradertAktivitet && periode.graderingInnvilget) {
    return 'success';
  }
  if ('erOppfylt' in periode && periode.erOppfylt === false) {
    return 'danger';
  }
  if (
    ('erOppfylt' in periode && periode.erOppfylt === true) ||
    (periode.periodeResultatType === periodeResultatType.INNVILGET && !tilknyttetStortinget)
  ) {
    return 'success';
  }
  if (periode.periodeResultatType === periodeResultatType.MANUELL_BEHANDLING || tilknyttetStortinget) {
    return 'warning';
  }

  return 'danger';
};

const finnPeriodeType = (valgtPeriode: PeriodeSoker): string => {
  const kontoIkkeSatt = !valgtPeriode.periodeType && valgtPeriode.aktiviteter[0].stønadskontoType === '-';
  return kontoIkkeSatt ? '' : valgtPeriode.aktiviteter[0]?.stønadskontoType;
};

const formatPaneler = (
  tilknyttetStortinget: boolean,
  perioder: PeriodeSøkerMedTidslinjedata[] = [],
): PeriodeMedStartOgSlutt[] =>
  perioder.map(periode => ({
    ...periode,
    start: parseDateString(periode.periode.fom),
    end: parseDateString(periode.tomMoment),
    status: getStatus(periode.periode, tilknyttetStortinget),
    periodeType: finnPeriodeType(periode.periode),
    erGradert: periode.periode.gradertAktivitet && periode.periode.graderingInnvilget,
    erOpphold: periode.periode.oppholdÅrsak !== oppholdArsakType.UDEFINERT,
    harUtsettelse: periode.periode.utsettelseType !== '-',
    begrunnelse: periode.periode.begrunnelse,
  }));

const lagGruppeIder = (perioder: PeriodeSøkerMedTidslinjedata[] = []) =>
  perioder
    .reduce((accPerioder, periode) => {
      const harPeriode = accPerioder.some(p => p.group === periode.group);
      if (!harPeriode) accPerioder.push(periode);
      return accPerioder;
    }, [])
    .map(activity => activity.group);

const finnIkonGittKjønnkode = (kjønnKode: string, label: string) => {
  if (kjønnKode === KjønnkodeEnum.KVINNE) {
    return <FigureOutwardIcon width={20} height={20} title={label} />;
  }
  if (kjønnKode === KjønnkodeEnum.MANN) {
    return <SilhouetteIcon width={20} height={20} title={label} />;
  }
  return <FigureCombinationIcon width={20} height={20} title={label} />;
};

const finnIkon = (
  hovedsokerKjonnKode: string,
  medsokerKjonnKode: string,
  antallRader: number,
  radNr: number,
  label: string,
) => finnIkonGittKjønnkode(antallRader === 1 || radNr > 0 ? hovedsokerKjonnKode : medsokerKjonnKode, label);

const finnLabelGittKjønnkode = (kjønnKode: string) => {
  if (kjønnKode === KjønnkodeEnum.KVINNE) {
    return 'UttakTidslinje.Kvinne';
  }
  if (kjønnKode === KjønnkodeEnum.MANN) {
    return 'UttakTidslinje.Mann';
  }
  return 'UttakTidslinje.Ukjent';
};

const finnLabel = (hovedsokerKjonnKode: string, medsokerKjonnKode: string, antallRader: number, radNr: number) =>
  finnLabelGittKjønnkode(antallRader === 1 || radNr > 0 ? hovedsokerKjonnKode : medsokerKjonnKode);

type PinData = {
  dato: string;
  tekstIder: string[];
};

const slåSammenPinDataOmLikDato = (pinData: PinData[]): PinData[] =>
  pinData.reduce<PinData[]>((accData, data) => {
    const index = accData.findIndex(d => d.dato === data.dato);
    if (index !== -1) {
      return accData
        .filter((_d, i) => i !== index)
        .concat({
          dato: data.dato,
          tekstIder: data.tekstIder.concat(accData[index].tekstIder),
        });
    }
    return accData.concat(data);
  }, []);

const lagPinData = (tidslinjeTider: TidslinjeTimes): PinData[] => {
  const pinData = [] as PinData[];

  if (tidslinjeTider.dodSoker) {
    pinData.push({
      dato: tidslinjeTider.dodSoker,
      tekstIder: ['UttakTidslinje.DodSoker'],
    });
  }
  if (tidslinjeTider.fodsel) {
    pinData.push({
      dato: tidslinjeTider.fodsel,
      tekstIder: ['UttakTidslinje.Fodsel'],
    });
  }
  if (tidslinjeTider.revurdering) {
    pinData.push({
      dato: tidslinjeTider.revurdering,
      tekstIder: ['UttakTidslinje.Revurdering'],
    });
  }
  if (tidslinjeTider.soknad) {
    pinData.push({
      dato: tidslinjeTider.soknad,
      tekstIder: ['UttakTidslinje.Soknad'],
    });
  }

  return slåSammenPinDataOmLikDato(pinData);
};

const finnLabelForPeriode = (periode: PeriodeMedStartOgSlutt, behandlingStatusKode: string): string => {
  if (periode.erGradert) {
    return 'UttakTidslinje.GradertPeriode';
  }
  if (periode.begrunnelse && behandlingStatusKode === behandlingStatus.FATTER_VEDTAK) {
    return 'UttakTidslinje.ManueltEditert';
  }
  if (periode.harUtsettelse) {
    return 'UttakTidslinje.UtsettelsePeriode';
  }
  return periode.erOpphold ? 'UttakTidslinje.OppholdPeriode' : PERIODE_TYPE_LABEL_MAP[periode.periodeType];
};

const finnIkonForPeriode = (periode: PeriodeMedStartOgSlutt, behandlingStatusKode: string) => {
  if (periode.erGradert) {
    return <PercentIcon />;
  }
  if (periode.begrunnelse && behandlingStatusKode === behandlingStatus.FATTER_VEDTAK) {
    return <PersonPencilIcon />;
  }
  if (periode.harUtsettelse) {
    return <PauseIcon />;
  }
  return periode.erOpphold ? <DoorOpenIcon /> : PERIODE_TYPE_IKON_MAP[periode.periodeType];
};

interface TidslinjeProps {
  tidslinjeTider: TidslinjeTimes;
  hovedsokerKjonnKode: string;
  medsokerKjonnKode?: string;
  selectedPeriod?: PeriodeSøkerMedTidslinjedata;
  uttakPerioder: PeriodeSøkerMedTidslinjedata[];
  tilknyttetStortinget: boolean;
  setValgtPeriodeIndex: React.Dispatch<React.SetStateAction<number>>;
  behandlingStatusKode: string;
}

/**
 * UttakTidslinje
 *
 * Formaterer tidslinjen for uttak
 */
const UttakTidslinje: FunctionComponent<TidslinjeProps> = ({
  tidslinjeTider,
  hovedsokerKjonnKode,
  medsokerKjonnKode,
  selectedPeriod,
  uttakPerioder,
  tilknyttetStortinget,
  setValgtPeriodeIndex,
  behandlingStatusKode,
}) => {
  const intl = useIntl();

  const radIder = useMemo(() => lagGruppeIder(uttakPerioder), [uttakPerioder]);
  const perioder = useMemo(
    () => formatPaneler(tilknyttetStortinget, uttakPerioder),
    [tilknyttetStortinget, uttakPerioder],
  );

  const sorterteUttaksperioder = [...uttakPerioder].sort(sortByDate);

  const valgtPeriode = useMemo(
    () =>
      selectedPeriod
        ? {
            fom: selectedPeriod.periode.fom,
            tom: selectedPeriod.periode.tom,
            id: selectedPeriod.id,
          }
        : undefined,
    [selectedPeriod],
  );

  const pinData = lagPinData(tidslinjeTider);

  const originalFomDato = dayjs(sorterteUttaksperioder[0].periode.fom);
  const originalTomDato = dayjs(sorterteUttaksperioder[sorterteUttaksperioder.length - 1].periode.tom);

  const [fomDato, setFomDato] = useState(originalFomDato);
  const [tomDato, setTomDato] = useState(originalTomDato);

  const goBackward = () => {
    if (!fomDato.subtract(1, 'month').isBefore(originalFomDato)) {
      setFomDato(fomDato.subtract(1, 'month'));
      setTomDato(tomDato.subtract(1, 'month'));
    }
  };
  const goForward = () => {
    if (!tomDato.add(1, 'month').isAfter(originalTomDato)) {
      setFomDato(fomDato.add(1, 'month'));
      setTomDato(tomDato.add(1, 'month'));
    }
  };

  const zoomIn = () => {
    if (!fomDato.add(3, 'month').isAfter(tomDato)) {
      setFomDato(fomDato.add(1, 'month'));
      setTomDato(tomDato.subtract(1, 'month'));
    }
  };

  const zoomOut = () => {
    if (tomDato.add(1, 'month').diff(fomDato.subtract(1, 'month'), 'months') < 36) {
      setFomDato(fomDato.subtract(1, 'month'));
      setTomDato(tomDato.add(1, 'month'));
    }
  };

  return (
    <>
      <VerticalSpacer thirtyTwoPx />
      <Timeline
        startDate={dayjs(fomDato).subtract(1, 'days').toDate()}
        endDate={dayjs(tomDato).add(2, 'days').toDate()}
      >
        {pinData.map(data => (
          <Timeline.Pin key={data.dato} date={dayjs(data.dato).toDate()}>
            <Label size="small">
              {data.tekstIder.map(id => (
                <FormattedMessage key={id} id={id} />
              ))}
            </Label>
            <BodyShort size="small">
              <DateLabel dateString={data.dato} />
            </BodyShort>
          </Timeline.Pin>
        ))}
        {radIder.map((radId, index) => {
          const label = intl.formatMessage({
            id: finnLabel(hovedsokerKjonnKode, medsokerKjonnKode, radIder.length, index),
          });
          return (
            <Timeline.Row
              key={radId}
              label="-"
              icon={finnIkon(hovedsokerKjonnKode, medsokerKjonnKode, radIder.length, index, label)}
            >
              {perioder
                .filter(periode => periode.group === radId)
                .map(periode => (
                  <Timeline.Period
                    key={periode.id}
                    start={periode.start}
                    end={periode.end}
                    status={periode.status}
                    onSelectPeriod={() => setValgtPeriodeIndex(periode.id)}
                    isActive={periode.id === valgtPeriode?.id}
                    icon={finnIkonForPeriode(periode, behandlingStatusKode)}
                    title={intl.formatMessage({ id: finnLabelForPeriode(periode, behandlingStatusKode) })}
                  />
                ))}
            </Timeline.Row>
          );
        })}
      </Timeline>
      <VerticalSpacer twentyPx />
      <FloatRight>
        <Button
          className={styles.margin}
          size="small"
          icon={<PlusIcon aria-hidden />}
          onClick={zoomIn}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'UttakTidslinje.ZoomInn' })}
        />
        <Button
          className={styles.margin}
          size="small"
          icon={<MinusIcon aria-hidden />}
          onClick={zoomOut}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'UttakTidslinje.ZoomUt' })}
        />
        <Button
          className={styles.margin}
          size="small"
          icon={<ArrowLeftIcon aria-hidden />}
          onClick={goBackward}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'UttakTidslinje.ScrollTilVenstre' })}
        />
        <Button
          className={styles.margin}
          size="small"
          icon={<ArrowRightIcon aria-hidden />}
          onClick={goForward}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'UttakTidslinje.ScrollTilHogre' })}
        />
      </FloatRight>
    </>
  );
};

export default UttakTidslinje;
