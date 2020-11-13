import React, { Component, RefObject } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Timeline from 'react-visjs-timeline';
import { Column, Row } from 'nav-frontend-grid';

import { DDMMYYYY_DATE_FORMAT, isEqual } from '@fpsak-frontend/utils';
import { KodeverkMedNavn } from '@fpsak-frontend/types';

import DateContainer from './DateContainer';
import CustomOpptjeningAktivitet, { NyOpptjeningAktivitet } from '../../CustomOpptjeningAktivitet';

import styles from './opptjeningTimeLine.less';

// Desse må alltid vare med for rett skala av tidslinjen då den alltid skall vare 10 månader fra skjæringstidpunkten
const standardItems = (opptjeningFomDato: string, opptjeningTomDato: string) => {
  const items = [
    {
      id: 1000,
      start: moment(opptjeningFomDato)
        .subtract(1, 'months')
        .startOf('month'),
      end: moment(opptjeningFomDato)
        .subtract(1, 'months')
        .startOf('month'),
      group: 1,
      className: styles.hiddenpast,
      content: '',
      data: undefined,
    }, {
      id: 1001,
      start: moment(opptjeningTomDato)
        .add(1, 'months')
        .endOf('month'),
      end: moment(opptjeningTomDato)
        .add(1, 'months')
        .endOf('month'),
      group: 1,
      className: styles.hiddenpast,
      content: '',
      data: undefined,
    },
  ];
  return items;
};

const classNameGenerator = (ap: CustomOpptjeningAktivitet): string => {
  if (ap.erGodkjent === false) {
    return 'avvistPeriode';
  }
  if (ap.erGodkjent === true) {
    return 'godkjentPeriode';
  }
  return 'undefined';
};

interface Group {
  id: number;
  content: string;
  aktivitetTypeKode: string;
  arbeidsforholdRef: string;
  arbeidsgiverReferanse: string;
}

const createItems = (opptjeningPeriods: CustomOpptjeningAktivitet[], groups: Group[], opptjeningFomDato: string, opptjeningTomDato: string) => {
  const items = opptjeningPeriods.map((ap: CustomOpptjeningAktivitet) => ({
    id: ap.id,
    start: moment(ap.opptjeningFom),
    end: moment(ap.opptjeningTom),
    group: groups.find((g) => g.aktivitetTypeKode === ap.aktivitetType.kode
      && g.arbeidsforholdRef === ap.arbeidsforholdRef && g.arbeidsgiverReferanse === ap.arbeidsgiverReferanse).id,
    className: classNameGenerator(ap),
    content: '',
    data: ap,
  }));
  return items.concat(standardItems(opptjeningFomDato, opptjeningTomDato));
};

const createGroups = (opptjeningPeriods: CustomOpptjeningAktivitet[], opptjeningAktivitetTypes: KodeverkMedNavn[]) => {
  const duplicatesRemoved = opptjeningPeriods.reduce((accPeriods: any, period: CustomOpptjeningAktivitet): Group[] => {
    const hasPeriod = accPeriods.some((p) => p.aktivitetType.kode === period.aktivitetType.kode
      && p.arbeidsforholdRef === period.arbeidsforholdRef && p.oppdragsgiverOrg === period.arbeidsgiverReferanse);
    if (!hasPeriod) accPeriods.push(period);
    return accPeriods;
  }, []);
  return duplicatesRemoved.map((activity: CustomOpptjeningAktivitet, index: number) => ({
    id: index + 1,
    content: opptjeningAktivitetTypes.find((oat: any) => oat.kode === activity.aktivitetType.kode).navn,
    aktivitetTypeKode: activity.aktivitetType.kode,
    arbeidsforholdRef: activity.arbeidsforholdRef,
    arbeidsgiverReferanse: activity.arbeidsgiverReferanse,
  }));
};

const options = (opptjeningFomDato: string, opptjeningTomDato: string) => ({
  end: moment(opptjeningTomDato).add(1, 'months').endOf('month'),
  locale: moment.locale('nb'),
  margin: { item: 10 },
  max: moment(opptjeningTomDato).endOf('month'),
  min: moment(opptjeningFomDato).startOf('month'),
  moment,
  moveable: false,
  orientation: { axis: 'top' },
  showCurrentTime: false,
  stack: false,
  start: moment(opptjeningFomDato).subtract(1, 'months').startOf('month'),
  verticalScroll: false,
  width: '100%',
  zoomable: false,
});

interface OwnProps {
  opptjeningPeriods: CustomOpptjeningAktivitet[];
  selectedPeriod?: CustomOpptjeningAktivitet | NyOpptjeningAktivitet;
  opptjeningAktivitetTypes: KodeverkMedNavn[];
  selectPeriodCallback: (...args: any[]) => any;
  opptjeningFomDato: string;
  opptjeningTomDato: string;
}

interface OwnState {
  groups: any[];
  items: any[];
}

/**
 * OpptjeningTimeLine
 *
 * Presentationskomponent. Masserer data og populerer felten samt formatterar tidslinjen for fakta/opptjening
 */
class OpptjeningTimeLine extends Component<OwnProps, OwnState> {
  timelineRef: RefObject<any>;

  constructor(props: OwnProps) {
    super(props);

    this.state = {
      groups: undefined,
      items: undefined,
    };
    this.selectHandler = this.selectHandler.bind(this);
    this.timelineRef = React.createRef();
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount(): void {
    const {
      opptjeningAktivitetTypes, opptjeningPeriods, opptjeningFomDato, opptjeningTomDato,
    } = this.props;
    const groups = createGroups(opptjeningPeriods, opptjeningAktivitetTypes);
    const items = createItems(opptjeningPeriods, groups, opptjeningFomDato, opptjeningTomDato);
    this.setState({
      groups,
      items,
    });
  }

  componentDidMount(): void {
    // TODO Fjern når denne er retta: https://github.com/Lighthouse-io/react-visjs-timeline/issues/40
    // eslint-disable-next-line react/no-find-dom-node
    const node = ReactDOM.findDOMNode(this.timelineRef.current);
    if (node) {
      node.children[0].style.visibility = 'visible';
    }
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps: OwnProps): void {
    const { opptjeningPeriods } = this.props;
    if (!isEqual(opptjeningPeriods, nextProps.opptjeningPeriods)) {
      const groups = createGroups(nextProps.opptjeningPeriods, nextProps.opptjeningAktivitetTypes);
      const items = createItems(nextProps.opptjeningPeriods, groups, nextProps.opptjeningFomDato, nextProps.opptjeningTomDato);
      this.setState({
        groups,
        items,
      });
    }
  }

  selectHandler(eventProps: any): void {
    const { selectPeriodCallback } = this.props;
    const { items } = this.state;
    const selectedItem = items.find((item) => item.id === eventProps.items[0]);
    if (selectedItem) {
      selectPeriodCallback(selectedItem.data);
    }
  }

  render() {
    const { opptjeningFomDato, opptjeningTomDato, selectedPeriod } = this.props;
    const { items, groups } = this.state;
    return (
      <div className="opptjening">
        <Row>
          <Column xs="12">
            <DateContainer
              opptjeningFomDato={moment(opptjeningFomDato)
                .format(DDMMYYYY_DATE_FORMAT)}
              opptjeningTomDato={moment(opptjeningTomDato)
                .format(DDMMYYYY_DATE_FORMAT)}
            />
            <div className={styles.timelineContainer}>
              <div className={styles.timeLineWrapper}>
                <div className={styles.timeLine}>
                  <Timeline
                    ref={this.timelineRef}
                    options={options(opptjeningFomDato, opptjeningTomDato)}
                    items={items}
                    customTimes={{ currentDate: new Date(opptjeningTomDato) }}
                    selectHandler={this.selectHandler}
                    groups={groups}
                    selection={[selectedPeriod ? selectedPeriod.id : undefined]}
                  />
                </div>
              </div>
            </div>
          </Column>
        </Row>
      </div>
    );
  }
}

export default OpptjeningTimeLine;
