import React, { FunctionComponent, useMemo } from 'react';
import moment from 'moment';
import { Column, Row } from 'nav-frontend-grid';

import { Timeline } from '@fpsak-frontend/tidslinje';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { KodeverkMedNavn, OpptjeningAktivitet } from '@fpsak-frontend/types';

import { FormValues } from '../aktivitet/ValgtAktivitetForm';
import DatoPanel from './DatoPanel';
import { finnOpptjeningFom, finnOpptjeningTom } from '../../utils/opptjeningDatoUtil';

import styles from './opptjeningTidslinje.less';

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

const classNameGenerator = (erGodkjent: boolean): string => {
  if (erGodkjent === false) {
    return 'avvistPeriode';
  }
  if (erGodkjent === true) {
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

const createItems = (
  opptjeningPeriods: OpptjeningAktivitet[],
  formVerdierForAlleAktiviteter: FormValues[],
  groups: Group[],
  opptjeningFomDato: string,
  opptjeningTomDato: string,
) => {
  const items = opptjeningPeriods.map((ap, index) => ({
    id: index,
    start: moment(finnOpptjeningFom(ap.opptjeningFom, opptjeningFomDato, opptjeningTomDato)),
    end: moment(finnOpptjeningTom(ap.opptjeningTom, opptjeningFomDato, opptjeningTomDato)),
    group: groups.find((g) => g.aktivitetTypeKode === ap.aktivitetType
      && g.arbeidsforholdRef === ap.arbeidsforholdRef && g.arbeidsgiverReferanse === ap.arbeidsgiverReferanse).id,
    className: classNameGenerator(formVerdierForAlleAktiviteter[index].erGodkjent),
    content: '',
    data: ap,
  }));
  return items.concat(standardItems(opptjeningFomDato, opptjeningTomDato));
};

const createGroups = (opptjeningPeriods: OpptjeningAktivitet[], opptjeningAktivitetTypes: KodeverkMedNavn[]) => {
  const duplicatesRemoved = opptjeningPeriods.reduce((accPeriods, period): Group[] => {
    const hasPeriod = accPeriods.some((p) => p.aktivitetType === period.aktivitetType
      && p.arbeidsforholdRef === period.arbeidsforholdRef && p.oppdragsgiverOrg === period.arbeidsgiverReferanse);
    if (!hasPeriod) accPeriods.push(period);
    return accPeriods;
  }, []);
  return duplicatesRemoved.map((activity: OpptjeningAktivitet, index: number) => ({
    id: index + 1,
    content: opptjeningAktivitetTypes.find((oat) => oat.kode === activity.aktivitetType).navn,
    aktivitetTypeKode: activity.aktivitetType,
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
  formVerdierForAlleAktiviteter: FormValues[];
  valgtAktivitetIndex?: number;
  opptjeningAktivitetTypes: KodeverkMedNavn[];
  setValgtAktivitetIndex: (periodeIndex: number) => void;
  opptjeningFomDato: string;
  opptjeningTomDato: string;
}

/**
 * OpptjeningTimeLine
 *
 * Formatterar tidslinjen for fakta/opptjening
 */
const OpptjeningTimeLine: FunctionComponent<OwnProps> = ({
  opptjeningPerioder,
  formVerdierForAlleAktiviteter,
  opptjeningFomDato,
  opptjeningTomDato,
  valgtAktivitetIndex,
  opptjeningAktivitetTypes,
  setValgtAktivitetIndex,
}) => {
  const groups = useMemo(() => createGroups(opptjeningPerioder, opptjeningAktivitetTypes), [opptjeningPerioder]);
  const items = useMemo(() => createItems(opptjeningPerioder, formVerdierForAlleAktiviteter, groups, opptjeningFomDato, opptjeningTomDato),
    [formVerdierForAlleAktiviteter]);

  const timelineRef = React.createRef();

  const selectHandler = (eventProps: any): void => {
    const selectedItem = items.find((item) => item.id === eventProps.items[0]);
    if (selectedItem) {
      setValgtAktivitetIndex(selectedItem.id);
    }
  };

  return (
    <div className="opptjening">
      <Row>
        <Column xs="12">
          <DatoPanel
            opptjeningFomDato={moment(opptjeningFomDato)
              .format(DDMMYYYY_DATE_FORMAT)}
            opptjeningTomDato={moment(opptjeningTomDato)
              .format(DDMMYYYY_DATE_FORMAT)}
          />
          <div className={styles.timelineContainer}>
            <div className={styles.timeLineWrapper}>
              <div className={styles.timeLine}>
                <Timeline
                  ref={timelineRef}
                  options={options(opptjeningFomDato, opptjeningTomDato)}
                  // @ts-ignore Fiks
                  initialItems={items}
                  customTimes={{ currentDate: new Date(opptjeningTomDato) }}
                  selectHandler={selectHandler}
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
};

export default OpptjeningTimeLine;
