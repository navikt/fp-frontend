import React, { MouseEvent, KeyboardEvent, FunctionComponent, useMemo } from 'react';
import dayjs from 'dayjs';
import { FormattedMessage, useIntl } from 'react-intl';
import { Timeline } from '@navikt/ds-react-internal';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import {
  FigureOutwardIcon,
  SilhouetteIcon,
  FigureCombinationIcon,
  ExclamationmarkTriangleIcon,
  CheckmarkCircleIcon,
  XMarkOctagonIcon,
} from '@navikt/aksel-icons';
import { BodyShort, Label } from '@navikt/ds-react';
import { Kjønnkode } from '@navikt/ft-types';
import { DateLabel, FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { TimeLineControl } from '@navikt/ft-tidslinje';

import { KjønnkodeEnum, PeriodeSoker } from '@navikt/fp-types';
import { oppholdArsakType, periodeResultatType } from '@navikt/fp-kodeverk';

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

const PERIODE_STATUS_IKON_MAP = {
  danger: <XMarkOctagonIcon />,
  success: <CheckmarkCircleIcon />,
  warning: <ExclamationmarkTriangleIcon />,
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
  status: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
} & PeriodeSøkerMedTidslinjedata;

const getStatus = (
  periode: PeriodeSoker,
  tilknyttetStortinget: boolean,
): 'success' | 'warning' | 'danger' | 'info' | 'neutral' => {
  const opphold = periode.oppholdÅrsak !== oppholdArsakType.UDEFINERT;
  if (opphold) {
    return 'neutral';
  }
  if (periode.gradertAktivitet && periode.graderingInnvilget) {
    return 'info';
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

const formatPaneler = (
  tilknyttetStortinget: boolean,
  perioder: PeriodeSøkerMedTidslinjedata[] = [],
): PeriodeMedStartOgSlutt[] =>
  perioder.map(periode => ({
    ...periode,
    start: parseDateString(periode.periode.fom),
    end: parseDateString(periode.tomMoment),
    status: getStatus(periode.periode, tilknyttetStortinget),
  }));

const lagGruppeIder = (perioder: PeriodeSøkerMedTidslinjedata[] = []) =>
  perioder
    .reduce((accPerioder, periode) => {
      const harPeriode = accPerioder.some(p => p.group === periode.group);
      if (!harPeriode) accPerioder.push(periode);
      return accPerioder;
    }, [])
    .map(activity => activity.group);

const finnIkonGittKjønnkode = (kjønnKode: Kjønnkode) => {
  if (kjønnKode === KjønnkodeEnum.KVINNE) {
    return <FigureOutwardIcon width={20} height={20} />;
  }
  if (kjønnKode === KjønnkodeEnum.MANN) {
    return <SilhouetteIcon width={20} height={20} />;
  }
  return <FigureCombinationIcon width={20} height={20} />;
};

const finnIkon = (hovedsokerKjonnKode: Kjønnkode, medsokerKjonnKode: Kjønnkode, antallRader: number, radNr: number) =>
  finnIkonGittKjønnkode(antallRader === 1 || radNr > 0 ? hovedsokerKjonnKode : medsokerKjonnKode);

const finnLabelGittKjønnkode = (kjønnKode: Kjønnkode) => {
  if (kjønnKode === KjønnkodeEnum.KVINNE) {
    return 'UttakTidslinje.Kvinne';
  }
  if (kjønnKode === KjønnkodeEnum.MANN) {
    return 'UttakTidslinje.Mann';
  }
  return 'UttakTidslinje.Ukjent';
};

const finnLabel = (hovedsokerKjonnKode: Kjønnkode, medsokerKjonnKode: Kjønnkode, antallRader: number, radNr: number) =>
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

interface TidslinjeProps {
  tidslinjeTider: TidslinjeTimes;
  hovedsokerKjonnKode: Kjønnkode;
  medsokerKjonnKode?: Kjønnkode;
  openPeriodInfo: (event: MouseEvent | KeyboardEvent) => void;
  selectedPeriod?: PeriodeSøkerMedTidslinjedata;
  uttakPerioder: PeriodeSøkerMedTidslinjedata[];
  children?: React.ReactNode;
  tilknyttetStortinget: boolean;
  setValgtPeriodeIndex: React.Dispatch<React.SetStateAction<number>>;
}

/**
 * UttakTidslinje
 *
 * Formaterer tidslinjen for uttak
 */
const UttakTidslinje: FunctionComponent<TidslinjeProps> = ({
  children,
  tidslinjeTider,
  hovedsokerKjonnKode,
  medsokerKjonnKode,
  openPeriodInfo,
  selectedPeriod,
  uttakPerioder,
  tilknyttetStortinget,
  setValgtPeriodeIndex,
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

  return (
    <>
      <VerticalSpacer sixteenPx />
      <Timeline
        startDate={dayjs(sorterteUttaksperioder[0].periode.fom).subtract(1, 'days').toDate()}
        endDate={dayjs(sorterteUttaksperioder[sorterteUttaksperioder.length - 1].periode.tom)
          .add(2, 'days')
          .toDate()}
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
        {radIder.map((radId, index) => (
          <Timeline.Row
            key={radId}
            label={intl.formatMessage({ id: finnLabel(hovedsokerKjonnKode, medsokerKjonnKode, radIder.length, index) })}
            icon={finnIkon(hovedsokerKjonnKode, medsokerKjonnKode, radIder.length, index)}
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
                  icon={PERIODE_STATUS_IKON_MAP[periode.status]}
                />
              ))}
          </Timeline.Row>
        ))}
        <Timeline.Zoom>
          <Timeline.Zoom.Button label="6 mnd" interval="month" count={6} />
          <Timeline.Zoom.Button label="1 år" interval="year" count={1} />
        </Timeline.Zoom>
      </Timeline>
      <VerticalSpacer thirtyTwoPx />
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.ctrlCol}>
            <TimeLineControl
              goBackwardCallback={() => undefined}
              goForwardCallback={() => undefined}
              zoomInCallback={() => undefined}
              zoomOutCallback={() => undefined}
              openPeriodInfo={openPeriodInfo}
              selectedPeriod={valgtPeriode}
            >
              {children}
            </TimeLineControl>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </>
  );
};

export default UttakTidslinje;
