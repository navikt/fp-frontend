import React, {
  useRef, MouseEvent, KeyboardEvent, FunctionComponent, useMemo, useCallback,
} from 'react';
import moment from 'moment';
import dayjs from 'dayjs';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { Kjønnkode } from '@navikt/ft-types';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import {
  TimeLineControl, TimeLineSoker, TimeLineSokerEnsamSoker, Timeline,
} from '@navikt/ft-tidslinje';

import { PeriodeSoker } from '@navikt/fp-types';

import styles from './uttakTidslinje.less';

import './globalTidslinje.less';

export interface EventProps {
  items: number[];
  event: Event;
}

export type PeriodeSøkerMedTidslinjedata = {
  id: number;
  periode: PeriodeSoker;
  tomMoment: dayjs.Dayjs;
  className: string;
  hovedsoker: boolean;
  group: number;
  title: string;
};

export type TidslinjeTimes = {
  soknad: string;
  fodsel: string;
  revurdering: string;
  dodSoker: string;
};

const getOptions = (
  customTimes: TidslinjeTimes,
  sortedUttakPeriods: PeriodeSøkerMedTidslinjedata[],
) => ({
  end: moment(sortedUttakPeriods[sortedUttakPeriods.length - 1].periode.tom)
    .add(2, 'days')
    .toDate(),
  locale: moment.locale('nb'),
  margin: { item: 14 },
  max: moment(customTimes.fodsel).add(4, 'years').toDate(),
  min: moment
    .min([moment(customTimes.fodsel), moment(sortedUttakPeriods[0].periode.fom)])
    .subtract(4, 'weeks')
    .toDate(),
  moment,
  moveable: true,
  orientation: { axis: 'top' },
  showCurrentTime: false,
  stack: false,
  start: moment(sortedUttakPeriods[0].periode.fom).subtract(1, 'days').toDate(),
  tooltip: { followMouse: true },
  verticalScroll: false,
  width: '100%',
  zoomable: true,
  zoomMax: 1000 * 60 * 60 * 24 * 31 * 40,
  zoomMin: 1000 * 60 * 60 * 24 * 30,
});

const parseDateString = (dateString: string | dayjs.Dayjs): Date => dayjs(dateString, ISO_DATE_FORMAT).toDate();

const sortByDate = (
  a: PeriodeSøkerMedTidslinjedata,
  b: PeriodeSøkerMedTidslinjedata,
): number => {
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
} & PeriodeSøkerMedTidslinjedata;

const formatItems = (
  perioder: PeriodeSøkerMedTidslinjedata[] = [],
): PeriodeMedStartOgSlutt[] => {
  const itemsWithDates = perioder.map((periode) => ({
    ...periode,
    start: parseDateString(periode.periode.fom),
    end: parseDateString(periode.tomMoment),
  }));
  const formattedItemsArray: PeriodeMedStartOgSlutt[] = [];
  formattedItemsArray.length = 0;
  itemsWithDates.forEach((item) => {
    formattedItemsArray.push(item);
  });
  return formattedItemsArray;
};

const formatGroups = (
  perioder: PeriodeSøkerMedTidslinjedata[] = [],
) => {
  const duplicatesRemoved = perioder.reduce((accPeriods, period) => {
    // @ts-ignore Fiks
    const hasPeriod = accPeriods.some((p) => p.group === period.group);
    if (!hasPeriod) accPeriods.push(period);
    return accPeriods;
  }, []);
  return duplicatesRemoved.map((activity) => ({
    // @ts-ignore Fiks
    id: activity.group,
    content: '',
  }));
};

interface TidslinjeProps {
  tidslinjeTider: TidslinjeTimes;
  hovedsokerKjonnKode: Kjønnkode;
  medsokerKjonnKode?: Kjønnkode;
  openPeriodInfo: (event: MouseEvent | KeyboardEvent) => void;
  selectedPeriod?: PeriodeSøkerMedTidslinjedata;
  selectPeriodCallback: (eventProps: EventProps) => void;
  uttakPerioder: PeriodeSøkerMedTidslinjedata[];
  children?: React.ReactNode;
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
  selectPeriodCallback,
  uttakPerioder,
}) => {
  const timelineRef = useRef<any>();

  const zoomIn = useCallback(() => {
    if (timelineRef.current) {
      timelineRef.current.zoomIn(0.5);
    }
  }, [timelineRef]);

  const zoomOut = useCallback(() => {
    if (timelineRef.current) {
      timelineRef.current.zoomOut(0.5);
    }
  }, [timelineRef]);

  const goForward = useCallback(() => {
    const timeline = timelineRef.current;
    if (timeline) {
      const currentWindowTimes = timeline.getWindow();
      const newWindowTimes = {
        start: new Date(currentWindowTimes.start).setDate(currentWindowTimes.start.getDate() + 42),
        end: new Date(currentWindowTimes.end).setDate(currentWindowTimes.end.getDate() + 42),
      };

      timeline.setWindow(newWindowTimes.start, newWindowTimes.end);
    }
  }, [timelineRef]);

  const goBackward = useCallback(() => {
    const timeline = timelineRef.current;
    if (timeline) {
      const currentWindowTimes = timeline.getWindow();
      const newWindowTimes = {
        start: new Date(currentWindowTimes.start).setDate(currentWindowTimes.start.getDate() - 42),
        end: new Date(currentWindowTimes.end).setDate(currentWindowTimes.end.getDate() - 42),
      };
      timeline.setWindow(newWindowTimes.start, newWindowTimes.end);
    }
  }, [timelineRef]);

  const groups = useMemo(() => formatGroups(uttakPerioder), [uttakPerioder]);
  const items = useMemo(() => formatItems(uttakPerioder), [uttakPerioder]);
  const options = useMemo(() => getOptions(tidslinjeTider, [...uttakPerioder].sort(sortByDate)), [tidslinjeTider, uttakPerioder]);

  const valgtPeriode = useMemo(() => (selectedPeriod ? {
    fom: selectedPeriod.periode.fom,
    tom: selectedPeriod.periode.tom,
    id: selectedPeriod.id,
    className: selectedPeriod.className,
    hoverText: selectedPeriod.title,
  } : undefined), [selectedPeriod]);

  return (
    <FlexContainer>
      <VerticalSpacer sixteenPx />
      <FlexRow className={styles.timelineContainer}>
        <FlexColumn className={styles.sokerContainer}>
          {medsokerKjonnKode && (
            <TimeLineSoker soker1KjonnKode={medsokerKjonnKode} soker2KjonnKode={hovedsokerKjonnKode} />
          )}
          {!medsokerKjonnKode && (
            <TimeLineSokerEnsamSoker hovedsokerKjonnKode={hovedsokerKjonnKode} />
          )}
        </FlexColumn>
        <FlexColumn className={styles.timelineWidth}>
          <div className={medsokerKjonnKode ? styles.timeLineWrapperTwo : styles.timeLineWrapper}>
            <div className="uttakTimeline">
              <Timeline
                ref={timelineRef}
                options={options}
                // @ts-ignore
                initialItems={items}
                initialGroups={groups}
                customTimes={tidslinjeTider}
                selectHandler={selectPeriodCallback}
                selection={valgtPeriode ? [valgtPeriode.id] : undefined}
              />
            </div>
          </div>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      <FlexRow>
        <FlexColumn className={styles.ctrlCol}>
          <TimeLineControl
            goBackwardCallback={goBackward}
            goForwardCallback={goForward}
            zoomInCallback={zoomIn}
            zoomOutCallback={zoomOut}
            openPeriodInfo={openPeriodInfo}
            selectedPeriod={valgtPeriode}
          >
            {children}
          </TimeLineControl>
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
  );
};

export default UttakTidslinje;
