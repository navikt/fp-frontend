import React, { Component, RefObject } from 'react';
import moment from 'moment';
import { Column, Row } from 'nav-frontend-grid';

import { Timeline } from '@fpsak-frontend/tidslinje';
import { DDMMYYYY_DATE_FORMAT, isEqual, addDaysToDate } from '@fpsak-frontend/utils';
import { KodeverkMedNavn, OpptjeningAktivitet } from '@fpsak-frontend/types';

import DateContainer from './DateContainer';

import styles from './opptjeningTimeLine.less';

// Desse må alltid vare med for rett skala av tidslinjen då den alltid skall vare 10 månader fra skjæringstidpunkten
const standardItems = (opptjeningFomDato: string, opptjeningTomDato: string) => [
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

const classNameGenerator = (ap: OpptjeningAktivitet): string => {
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

const addDay = (date: string): string => addDaysToDate(date, 1);
const getOpptjeningsperiodeIfEqual = (
  activityDate: string, opptjeningsperiodeDate: string,
): string => (moment(addDay(activityDate)).isSame(opptjeningsperiodeDate) ? opptjeningsperiodeDate : activityDate);

const finnOpptjeningFom = (
  opptjeningFom: string,
  opptjeningsperiodeFom: string,
  opptjeningsperiodeTom: string,
) => (moment(opptjeningFom).isBefore(opptjeningsperiodeFom)
  ? opptjeningsperiodeFom
  : getOpptjeningsperiodeIfEqual(opptjeningFom, opptjeningsperiodeTom));

const finnOpptjeningTom = (
  opptjeningTom: string,
  opptjeningsperiodeFom: string,
  opptjeningsperiodeTom: string,
) => (moment(opptjeningTom).isAfter(opptjeningsperiodeTom)
  ? opptjeningsperiodeTom
  : getOpptjeningsperiodeIfEqual(opptjeningTom, opptjeningsperiodeFom));

const createItems = (opptjeningPeriods: OpptjeningAktivitet[], groups: Group[], opptjeningFomDato: string, opptjeningTomDato: string) => {
  const items = opptjeningPeriods.map((ap, index) => ({
    id: index,
    start: moment(finnOpptjeningFom(ap.opptjeningFom, opptjeningFomDato, opptjeningTomDato)),
    end: moment(finnOpptjeningTom(ap.opptjeningTom, opptjeningFomDato, opptjeningTomDato)),
    group: groups.find((g) => g.aktivitetTypeKode === ap.aktivitetType.kode
      && g.arbeidsforholdRef === ap.arbeidsforholdRef && g.arbeidsgiverReferanse === ap.arbeidsgiverReferanse).id,
    className: classNameGenerator(ap),
    content: '',
    data: ap,
  }));
  return items.concat(standardItems(opptjeningFomDato, opptjeningTomDato));
};

const createGroups = (opptjeningPeriods: OpptjeningAktivitet[], opptjeningAktivitetTypes: KodeverkMedNavn[]) => {
  const duplicatesRemoved = opptjeningPeriods.reduce((accPeriods: any, period): Group[] => {
    const hasPeriod = accPeriods.some((p) => p.aktivitetType.kode === period.aktivitetType.kode
      && p.arbeidsforholdRef === period.arbeidsforholdRef && p.oppdragsgiverOrg === period.arbeidsgiverReferanse);
    if (!hasPeriod) accPeriods.push(period);
    return accPeriods;
  }, []);
  return duplicatesRemoved.map((activity: OpptjeningAktivitet, index: number) => ({
    id: index + 1,
    content: opptjeningAktivitetTypes.find((oat) => oat.kode === activity.aktivitetType.kode).navn,
    aktivitetTypeKode: activity.aktivitetType.kode,
    arbeidsforholdRef: activity.arbeidsforholdRef,
    arbeidsgiverReferanse: activity.arbeidsgiverReferanse,
  }));
};

const options = (opptjeningFomDato: string, opptjeningTomDato: string) => ({
  end: moment(opptjeningTomDato).add(1, 'months').endOf('month').toDate(),
  locale: moment.locale('nb'),
  margin: { item: 10 },
  max: moment(opptjeningTomDato).endOf('month').toDate(),
  min: moment(opptjeningFomDato).startOf('month').toDate(),
  moment,
  moveable: false,
  orientation: { axis: 'top' },
  showCurrentTime: false,
  stack: false,
  start: moment(opptjeningFomDato).subtract(1, 'months').startOf('month').toDate(),
  verticalScroll: false,
  width: '100%',
  zoomable: false,
});

interface OwnProps {
  opptjeningPerioder: OpptjeningAktivitet[];
  valgtAktivitetIndex?: number;
  opptjeningAktivitetTypes: KodeverkMedNavn[];
  setValgtAktivitetIndex: (periodeIndex: number) => void;
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
      opptjeningAktivitetTypes, opptjeningPerioder, opptjeningFomDato, opptjeningTomDato,
    } = this.props;
    const groups = createGroups(opptjeningPerioder, opptjeningAktivitetTypes);
    const items = createItems(opptjeningPerioder, groups, opptjeningFomDato, opptjeningTomDato);
    this.setState({
      groups,
      items,
    });
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps: OwnProps): void {
    const { opptjeningPerioder } = this.props;
    if (!isEqual(opptjeningPerioder, nextProps.opptjeningPerioder)) {
      const groups = createGroups(nextProps.opptjeningPerioder, nextProps.opptjeningAktivitetTypes);
      const items = createItems(nextProps.opptjeningPerioder, groups, nextProps.opptjeningFomDato, nextProps.opptjeningTomDato);
      this.setState({
        groups,
        items,
      });
    }
  }

  timelineRef: RefObject<any>;

  selectHandler(eventProps: any): void {
    const { setValgtAktivitetIndex } = this.props;
    const { items } = this.state;
    const selectedItem = items.find((item) => item.id === eventProps.items[0]);
    if (selectedItem) {
      setValgtAktivitetIndex(selectedItem.id);
    }
  }

  render() {
    const { opptjeningFomDato, opptjeningTomDato, valgtAktivitetIndex } = this.props;
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
                    initialItems={items}
                    customTimes={{ currentDate: new Date(opptjeningTomDato) }}
                    selectHandler={this.selectHandler}
                    initialGroups={groups}
                    selection={[valgtAktivitetIndex]}
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
