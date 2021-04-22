import React, { Component, MouseEvent, KeyboardEvent } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Timeline from 'react-visjs-timeline';
import { Column, Row } from 'nav-frontend-grid';

import { ISO_DATE_FORMAT } from '@fpsak-frontend/utils';
import { Kjønnkode } from '@fpsak-frontend/types';

import TimeLineControl from './components/TimeLineControl';
import TimeLineSoker from './components/TimeLineSoker';
import TimeLineSokerEnsamSoker from './components/TimeLineSokerEnsamSoker';

import styles from './tidslinje.less';
import EventProps from './eventPropsTsType';

interface Periode {
  fom: string;
  tom: string;
  id: string | number;
  className?: string;
  hoverText?: string;
  tomMoment: moment.Moment;
}

export type TidslinjeTimes = {
  soknad: string;
  fodsel: string;
  revurdering: string;
  dodSoker: string;
}

interface TidslinjeProps {
  customTimes: TidslinjeTimes;
  hovedsokerKjonnKode: Kjønnkode;
  medsokerKjonnKode?: Kjønnkode;
  openPeriodInfo: (event: MouseEvent | KeyboardEvent) => void;
  selectedPeriod?: Periode;
  selectPeriodCallback: (eventProps: EventProps) => void;
  uttakPerioder: Periode[];
  children?: React.ReactNode;
}

const getOptions = (customTimes: TidslinjeTimes, sortedUttakPeriods: Periode[]) => ({
  end: moment(sortedUttakPeriods[sortedUttakPeriods.length - 1].tom).add(2, 'days'),
  locale: moment.locale('nb'),
  margin: { item: 14 },
  max: moment(customTimes.fodsel).add(4, 'years'),
  min: moment.min([moment(customTimes.fodsel), moment(sortedUttakPeriods[0].fom)]).subtract(4, 'weeks'),
  moment,
  moveable: true,
  orientation: { axis: 'top' },
  showCurrentTime: false,
  stack: false,
  start: moment(sortedUttakPeriods[0].fom).subtract(1, 'days'),
  tooltip: { followMouse: true },
  verticalScroll: false,
  width: '100%',
  zoomable: true,
  zoomMax: 1000 * 60 * 60 * 24 * 31 * 40,
  zoomMin: 1000 * 60 * 60 * 24 * 30,
});

const parseDateString = (dateString: string | moment.Moment): Date => moment(dateString, ISO_DATE_FORMAT).toDate();

const sortByDate = (a: Periode, b: Periode): number => {
  if (a.fom < b.fom) {
    return -1;
  }
  if (a.fom > b.fom) {
    return 1;
  }
  return 0;
};

type PeriodeMedStartOgSlutt = {
 start: Date;
 end: Date;
} & Periode

const parseDates = (item: Periode): PeriodeMedStartOgSlutt => ({
  ...item,
  start: parseDateString(item.fom),
  end: parseDateString(item.tomMoment),
});

const formatItems = (periodItems: Periode[] = []): PeriodeMedStartOgSlutt[] => {
  const itemsWithDates = periodItems.map(parseDates);
  const formattedItemsArray: PeriodeMedStartOgSlutt[] = [];
  formattedItemsArray.length = 0;
  itemsWithDates.forEach((item) => {
    formattedItemsArray.push(item);
  });
  return formattedItemsArray;
};

const formatGroups = (periodItems: Periode[] = []) => {
  const duplicatesRemoved = periodItems.reduce<Periode[]>((accPeriods, period) => {
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

/**
 * Tidslinje
 *
 * Presentationskomponent. Masserer data og populerer felten samt formatterar tidslinjen for uttak
 */
class Tidslinje extends Component<TidslinjeProps> {
  timelineRef: React.RefObject<any>;

  constructor(props: TidslinjeProps) {
    super(props);

    this.goForward = this.goForward.bind(this);
    this.goBackward = this.goBackward.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);

    this.timelineRef = React.createRef();
  }

  componentDidMount(): void {
    // TODO Fjern når denne er retta: https://github.com/Lighthouse-io/react-visjs-timeline/issues/40
    // eslint-disable-next-line react/no-find-dom-node
    const node = ReactDOM.findDOMNode(this.timelineRef.current);
    if (node) {
      // @ts-ignore
      node.children[0].style.visibility = 'visible';
    }
  }

  zoomIn(): void {
    const timeline = this.timelineRef.current.$el;
    timeline.zoomIn(0.5);
  }

  zoomOut(): void {
    const timeline = this.timelineRef.current.$el;
    timeline.zoomOut(0.5);
  }

  goForward(): void {
    const timeline = this.timelineRef.current.$el;
    const currentWindowTimes = timeline.getWindow();
    const newWindowTimes = {
      start: new Date(currentWindowTimes.start).setDate(currentWindowTimes.start.getDate() + 42),
      end: new Date(currentWindowTimes.end).setDate(currentWindowTimes.end.getDate() + 42),
    };

    timeline.setWindow(newWindowTimes);
  }

  goBackward(): void {
    const timeline = this.timelineRef.current.$el;
    const currentWindowTimes = timeline.getWindow();
    const newWindowTimes = {
      start: new Date(currentWindowTimes.start).setDate(currentWindowTimes.start.getDate() - 42),
      end: new Date(currentWindowTimes.end).setDate(currentWindowTimes.end.getDate() - 42),
    };
    timeline.setWindow(newWindowTimes);
  }

  render() {
    const {
      children,
      customTimes,
      hovedsokerKjonnKode,
      medsokerKjonnKode,
      openPeriodInfo,
      selectedPeriod,
      selectPeriodCallback,
      uttakPerioder,
    } = this.props;
    const groups = formatGroups(uttakPerioder);
    const items = formatItems(uttakPerioder);
    return (
      <div className={styles.timelineContainer}>
        <Row>
          <Column xs="1" className={styles.sokerContainer}>
            {medsokerKjonnKode
              && (
                <TimeLineSoker
                  soker1KjonnKode={medsokerKjonnKode}
                  soker2KjonnKode={hovedsokerKjonnKode}
                />
              )}
            {!medsokerKjonnKode
              && (
                <TimeLineSokerEnsamSoker
                  hovedsokerKjonnKode={hovedsokerKjonnKode}
                />
              )}
          </Column>
          <Column xs="11">
            <div className={styles.timeLineWrapper}>
              <div className="uttakTimeline">
                <Timeline
                  ref={this.timelineRef}
                  options={getOptions(customTimes, [...uttakPerioder].sort(sortByDate))}
                  items={items}
                  groups={groups}
                  customTimes={customTimes}
                  selectHandler={selectPeriodCallback}
                  selection={[selectedPeriod ? selectedPeriod.id : null]}
                />
              </div>
            </div>
          </Column>
        </Row>
        <Row>
          <Column xs="12">
            <TimeLineControl
              goBackwardCallback={this.goBackward}
              goForwardCallback={this.goForward}
              zoomInCallback={this.zoomIn}
              zoomOutCallback={this.zoomOut}
              openPeriodInfo={openPeriodInfo}
              selectedPeriod={selectedPeriod}
            >
              {children}
            </TimeLineControl>
          </Column>
        </Row>
      </div>
    );
  }
}

export default Tidslinje;
