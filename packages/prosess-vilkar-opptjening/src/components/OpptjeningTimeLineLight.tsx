import React, { Component, RefObject } from 'react';
import moment from 'moment';

import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { Timeline, TimeLineNavigation } from '@navikt/ft-tidslinje';
import { FastsattOpptjeningAktivitet } from '@navikt/fp-types';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import opptjeningAktivitetKlassifisering from '../kodeverk/opptjeningAktivitetKlassifisering';
import DateContainer from './DateContainer';
import styles from './opptjeningTimeLineLight.module.css';
import TimeLineData from './TimeLineData';

import './globalTidslinje.module.css';

type Item = {
  id?: number;
  start: moment.Moment;
  end: moment.Moment;
  className: string;
  content: string;
  data?: FastsattOpptjeningAktivitet;
  group?: number;
};

// Desse må alltid vare med for rett skala av tidslinjen
const standardItems = (opptjeningFomDate: string, opptjeningTomDate: string): Item[] => [
  {
    id: 1000,
    start: moment(opptjeningFomDate).startOf('month'),
    end: moment(opptjeningFomDate).startOf('month'),
    content: '',
    group: 1,
    className: styles.hiddenpast,
  },
  {
    id: 1001,
    start: moment(opptjeningTomDate).endOf('month'),
    end: moment(opptjeningTomDate).endOf('month'),
    content: '',
    group: 1,
    className: styles.hiddenpast,
  },
];

const classNameGenerator = (klasseKode: string): string => {
  if (
    klasseKode === opptjeningAktivitetKlassifisering.BEKREFTET_AVVIST ||
    klasseKode === opptjeningAktivitetKlassifisering.ANTATT_AVVIST
  ) {
    return 'avvistPeriode';
  }
  if (
    klasseKode === opptjeningAktivitetKlassifisering.BEKREFTET_GODKJENT ||
    klasseKode === opptjeningAktivitetKlassifisering.ANTATT_GODKJENT
  ) {
    return 'godkjentPeriode';
  }
  return 'mellomliggendePeriode';
};

const createItems = (
  opptjeningPeriods: FastsattOpptjeningAktivitet[],
  opptjeningFomDate: string,
  opptjeningTomDate: string,
): Item[] => {
  const items = opptjeningPeriods.map(
    (ap): Item => ({
      start: moment(ap.fom),
      end: moment(ap.tom),
      className: classNameGenerator(ap.klasse),
      content: '',
      data: ap,
      group: 1,
    }),
  );
  return items.concat(standardItems(opptjeningFomDate, opptjeningTomDate));
};

const groups = [{ id: 1, content: '' }];

const options = (opptjeningFomDate: string, opptjeningTomDate: string): any => ({
  end: moment(opptjeningTomDate).endOf('month').toDate(),
  locale: moment.locale('nb'),
  margin: { item: 10 },
  max: moment(opptjeningTomDate).endOf('month').toDate(),
  min: moment(opptjeningFomDate).startOf('month').toDate(),
  moment,
  moveable: false,
  orientation: { axis: 'top' },
  showCurrentTime: true,
  stack: false,
  start: moment(opptjeningFomDate).startOf('month').toDate(),
  verticalScroll: false,
  width: '100%',
  zoomable: false,
});

interface OwnProps {
  opptjeningPeriods: FastsattOpptjeningAktivitet[];
  opptjeningFomDate: string;
  opptjeningTomDate: string;
}

interface OwnState {
  items?: Item[];
  selectedPeriod?: Item;
}

class OpptjeningTimeLineLight extends Component<OwnProps, OwnState> {
  timelineRef: RefObject<any>;

  constructor(props: OwnProps) {
    super(props);

    this.state = {
      items: undefined,
      selectedPeriod: undefined,
    };

    this.selectHandler = this.selectHandler.bind(this);
    this.openPeriodInfo = this.openPeriodInfo.bind(this);
    this.selectNextPeriod = this.selectNextPeriod.bind(this);
    this.selectPrevPeriod = this.selectPrevPeriod.bind(this);

    this.timelineRef = React.createRef();
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount(): void {
    const { opptjeningPeriods, opptjeningFomDate, opptjeningTomDate } = this.props;
    const unsortedItems = [...opptjeningPeriods].sort((a, b) => moment(a.fom).diff(moment(b.fom)));
    const items = createItems(unsortedItems, opptjeningFomDate, opptjeningTomDate);
    this.setState({ items });
  }

  selectHandler(eventProps: { items: number[] }): void {
    const { items } = this.state;
    const selectedItem = items.find(item => item.id === eventProps.items[0]);
    if (selectedItem) {
      this.setState({
        selectedPeriod: selectedItem,
      });
    }
  }

  openPeriodInfo(event: React.MouseEvent): void {
    const { selectedPeriod, items } = this.state;
    event.preventDefault();
    const currentSelectedItem = selectedPeriod;
    if (currentSelectedItem) {
      this.setState({
        selectedPeriod: undefined,
      });
    } else if (items) {
      const selectedItem = items[0];
      this.setState({
        selectedPeriod: selectedItem,
      });
    }
  }

  selectNextPeriod(event: React.MouseEvent): void {
    const { selectedPeriod, items } = this.state;
    event.preventDefault();
    if (items) {
      const newIndex = items.findIndex(oa => oa.id === selectedPeriod?.id) + 1;
      if (newIndex < items.length - 2) {
        this.setState(state => ({
          ...state,
          selectedPeriod: items[newIndex],
        }));
      }
    }
  }

  selectPrevPeriod(event: React.MouseEvent): void {
    const { selectedPeriod, items } = this.state;
    event.preventDefault();
    if (items) {
      const newIndex = items.findIndex(oa => oa.id === selectedPeriod?.id) - 1;
      if (newIndex >= 0) {
        this.setState(state => ({
          ...state,
          selectedPeriod: items[newIndex],
        }));
      }
    }
  }

  render() {
    const { opptjeningFomDate, opptjeningTomDate } = this.props;
    const { selectedPeriod, items } = this.state;
    return (
      <div className="opptjening">
        <div className="timeLineLight">
          <VerticalSpacer sixteenPx />
          <DateContainer
            opptjeningFomDate={moment(opptjeningFomDate, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT)}
            opptjeningTomDate={moment(opptjeningTomDate, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT)}
          />
          <div className={styles.timelineContainer}>
            <div className={styles.timeLineWrapper}>
              <div className={styles.timeLine}>
                <Timeline
                  ref={this.timelineRef}
                  options={options(opptjeningFomDate, opptjeningTomDate)}
                  // @ts-ignore Fiks
                  initialItems={items}
                  initialGroups={groups}
                  customTimes={{ currentDate: new Date(opptjeningTomDate) }}
                  selectHandler={this.selectHandler}
                  selection={[selectedPeriod ? selectedPeriod.id : undefined]}
                />
              </div>
              <div className={styles.floatRight}>
                <TimeLineNavigation openPeriodInfo={this.openPeriodInfo} />
              </div>
              {selectedPeriod?.data && (
                <TimeLineData
                  fastsattOpptjeningAktivitet={selectedPeriod.data}
                  selectNextPeriod={this.selectNextPeriod}
                  selectPrevPeriod={this.selectPrevPeriod}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OpptjeningTimeLineLight;
