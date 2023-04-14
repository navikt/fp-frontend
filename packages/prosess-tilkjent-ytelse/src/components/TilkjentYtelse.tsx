import React, { Component, RefObject } from 'react';
import moment from 'moment';
import { IntlShape } from 'react-intl';

import { calcDaysAndWeeks, DDMMYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { uttakPeriodeNavn, StonadskontoType } from '@navikt/fp-kodeverk';
import { ArbeidsgiverOpplysningerPerId, AlleKodeverk, Kjønnkode } from '@navikt/fp-types';
import { Timeline, TimeLineControl, TimeLineSokerEnsamSoker } from '@navikt/ft-tidslinje';

import TilkjentYtelseTimelineData, { PeriodeMedId } from './TilkjentYtelseTimelineData';

import styles from './tilkjentYtelse.module.css';

import './globalTidslinje.module.css';

type NyPeriode = {
  className: string;
  group: number;
  start: Date;
  end: moment.Moment;
  title: string;
} & PeriodeMedId;

const parseDateString = (dateString: Date | string): Date => moment(dateString, ISO_DATE_FORMAT).toDate();

const getOptions = (nyePerioder: NyPeriode[]): any => {
  const firstPeriod = nyePerioder[0];
  const lastPeriod = nyePerioder[nyePerioder.length - 1];

  return {
    end: moment(lastPeriod.tom).add(2, 'days').toDate(),
    locale: moment.locale('nb'),
    margin: { item: 10 },
    moment,
    orientation: { axis: 'top' },
    showCurrentTime: false,
    stack: false,
    start: moment(firstPeriod.fom).subtract(1, 'days').toDate(),
    tooltip: { followMouse: true },
    width: '100%',
    zoomMax: 1000 * 60 * 60 * 24 * 31 * 40,
    zoomMin: 1000 * 60 * 60 * 24 * 30,
  };
};

const gradertKlassenavn = 'gradert';
const innvilgetKlassenavn = 'innvilget';

const getStatusForPeriode = (periode: PeriodeMedId): string => {
  const graderteAndeler = periode.andeler.filter(andel => andel.uttak && andel.uttak.gradering === true);
  if (graderteAndeler.length === 0) {
    return innvilgetKlassenavn;
  }
  return gradertKlassenavn;
};

const createTooltipContent = (periodeType: string, intl: IntlShape, item: PeriodeMedId): string => {
  const daysAndWeeks = calcDaysAndWeeks(item.fom, item.tom);
  return `
  <p>
    ${moment(item.fom).format(DDMMYY_DATE_FORMAT)} - ${moment(item.tom).format(DDMMYY_DATE_FORMAT)}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     ${daysAndWeeks.formattedString}
    </br>
    ${periodeType}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ${intl.formatMessage(
      { id: 'Timeline.tooltip.dagsats' },
      {
        dagsats: item.dagsats,
      },
    )}
   </p>
`;
};

const findKorrektLabelForKvote = (stonadtype: string): string => {
  switch (stonadtype) {
    case StonadskontoType.FEDREKVOTE:
      return uttakPeriodeNavn.FEDREKVOTE;
    case StonadskontoType.MØDREKVOTE:
      return uttakPeriodeNavn.MØDREKVOTE;
    case StonadskontoType.FELLESPERIODE:
      return uttakPeriodeNavn.FELLESPERIODE;
    case StonadskontoType.FORELDREPENGER_FØR_FØDSEL:
      return uttakPeriodeNavn.FORELDREPENGER_FØR_FØDSEL;
    case StonadskontoType.FLERBARNSDAGER:
      return uttakPeriodeNavn.FLERBARNSDAGER;
    case StonadskontoType.FORELDREPENGER:
      return uttakPeriodeNavn.FORELDREPENGER;
    default:
      return '';
  }
};

// og grupp kan endres nor vi har en medsøkare
const addClassNameGroupIdToPerioder = (perioder: PeriodeMedId[], intl: IntlShape): NyPeriode[] => {
  const perioderMedClassName: NyPeriode[] = [];
  perioder.forEach(item => {
    const status = getStatusForPeriode(item);
    const copyOfItem = {
      ...item,
      className: status,
      group: 1,
      start: parseDateString(item.fom),
      end: moment(item.tom).add(1, 'days'),
      title: createTooltipContent(findKorrektLabelForKvote(item.andeler[0].uttak.stonadskontoType), intl, item),
    };
    perioderMedClassName.push(copyOfItem);
  });
  return perioderMedClassName;
};

const getCustomTimes = (soknadDate: string, familiehendelseDate: Date, lastPeriod: PeriodeMedId) => ({
  soknad: parseDateString(soknadDate),
  fodsel: parseDateString(familiehendelseDate),
  lastDateInSoknad: lastPeriod ? parseDateString(lastPeriod.tom) : parseDateString(moment().toDate()),
});

interface OwnProps {
  intl: IntlShape;
  items: PeriodeMedId[];
  groups: {
    id: number;
    content: string;
  }[];
  soknadDate: string;
  familiehendelseDate: Date;
  hovedsokerKjonnKode: Kjønnkode;
  isSoknadSvangerskapspenger: boolean;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

interface OwnState {
  selectedItem?: PeriodeMedId;
}

/**
 * TilkjentYtelse
 *
 * Presentationskomponent. Masserer data og populerer felten samt formatterar tidslinjen for tilkjent ytelse
 */
export class TilkjentYtelse extends Component<OwnProps, OwnState> {
  timelineRef: RefObject<any>;

  constructor(props: OwnProps) {
    super(props);

    this.state = {
      selectedItem: null,
    };

    this.selectHandler = this.selectHandler.bind(this);
    this.goForward = this.goForward.bind(this);
    this.goBackward = this.goBackward.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this.nextPeriod = this.nextPeriod.bind(this);
    this.prevPeriod = this.prevPeriod.bind(this);
    this.openPeriodInfo = this.openPeriodInfo.bind(this);

    this.timelineRef = React.createRef();
  }

  openPeriodInfo(): void {
    const {
      props: { items },
      state: { selectedItem },
    } = this;
    if (selectedItem) {
      this.setState({
        selectedItem: null,
      });
    } else {
      this.setState({
        selectedItem: items[0],
      });
    }
  }

  nextPeriod(): void {
    const {
      props: { items },
      state: { selectedItem: currentSelectedItem },
    } = this;
    const newIndex = items.findIndex(item => item.id === currentSelectedItem.id) + 1;
    if (newIndex < items.length) {
      const selectedItem = items[newIndex];
      this.setState({
        selectedItem,
      });
    }
  }

  prevPeriod(): void {
    const {
      props: { items },
      state: { selectedItem: currentSelectedItem },
    } = this;
    const newIndex = items.findIndex(item => item.id === currentSelectedItem.id) - 1;
    if (newIndex >= 0) {
      const selectedItem = items[newIndex];
      this.setState({
        selectedItem,
      });
    }
  }

  selectHandler(eventProps: { items: number[] }): void {
    const {
      props: { items },
    } = this;
    const selectedItem = items.find(item => item.id === eventProps.items[0]);
    this.setState({
      selectedItem,
    });
  }

  zoomIn(): void {
    this.timelineRef.current.zoomOut(0.5);
  }

  zoomOut(): void {
    this.timelineRef.current.zoomIn(0.5);
  }

  goForward(): void {
    const timeline = this.timelineRef.current;
    const currentWindowTimes = timeline.getWindow();
    const newWindowTimes = {
      start: new Date(currentWindowTimes.start).setDate(currentWindowTimes.start.getDate() + 42),
      end: new Date(currentWindowTimes.end).setDate(currentWindowTimes.end.getDate() + 42),
    };

    timeline.setWindow(newWindowTimes.start, newWindowTimes.end);
  }

  goBackward(): void {
    const timeline = this.timelineRef.current;
    const currentWindowTimes = timeline.getWindow();
    const newWindowTimes = {
      start: new Date(currentWindowTimes.start).setDate(currentWindowTimes.start.getDate() - 42),
      end: new Date(currentWindowTimes.end).setDate(currentWindowTimes.end.getDate() - 42),
    };

    timeline.setWindow(newWindowTimes.start, newWindowTimes.end);
  }

  render() {
    const {
      groups,
      items,
      soknadDate,
      familiehendelseDate,
      hovedsokerKjonnKode,
      intl,
      isSoknadSvangerskapspenger,
      alleKodeverk,
      arbeidsgiverOpplysningerPerId,
    } = this.props;

    const { selectedItem } = this.state;

    const lastPeriod = items[items.length - 1];
    const customTimes = getCustomTimes(soknadDate, familiehendelseDate, lastPeriod);
    const nyePerioder = addClassNameGroupIdToPerioder(items, intl);
    return (
      <>
        <FlexContainer>
          <FlexRow className={styles.timelineContainer}>
            <FlexColumn className={styles.sokerContainer}>
              <TimeLineSokerEnsamSoker hovedsokerKjonnKode={hovedsokerKjonnKode} />
            </FlexColumn>
            <FlexColumn className={styles.timelineWidth}>
              <div className={styles.timeLineWrapper}>
                <Timeline
                  ref={this.timelineRef}
                  options={getOptions(nyePerioder)}
                  // @ts-ignore Fiks
                  initialItems={nyePerioder}
                  initialGroups={groups}
                  customTimes={customTimes}
                  selectHandler={this.selectHandler}
                  selection={[selectedItem ? selectedItem.id : null]}
                />
              </div>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer eightPx />
          <FlexRow>
            <FlexColumn className={styles.ctrlCol}>
              <TimeLineControl
                goBackwardCallback={this.goBackward}
                goForwardCallback={this.goForward}
                zoomInCallback={this.zoomIn}
                zoomOutCallback={this.zoomOut}
                openPeriodInfo={this.openPeriodInfo}
              />
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
        {selectedItem && (
          <>
            <VerticalSpacer eightPx />
            <TilkjentYtelseTimelineData
              alleKodeverk={alleKodeverk}
              selectedItemStartDate={selectedItem.fom.toString()}
              selectedItemEndDate={selectedItem.tom.toString()}
              selectedItemData={selectedItem}
              callbackForward={this.nextPeriod}
              callbackBackward={this.prevPeriod}
              isSoknadSvangerskapspenger={isSoknadSvangerskapspenger}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            />
          </>
        )}
      </>
    );
  }
}

export default TilkjentYtelse;
