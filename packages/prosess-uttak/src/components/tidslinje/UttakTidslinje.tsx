import React, { FunctionComponent, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { Timeline } from '@navikt/ds-react-internal';
import { DDMMYY_DATE_FORMAT, ISO_DATE_FORMAT, calcDaysAndWeeks } from '@navikt/ft-utils';
import {
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
  FigureOutwardFillIcon,
  SilhouetteFillIcon,
} from '@navikt/aksel-icons';
import { BodyShort, Button, Label } from '@navikt/ds-react';
import { DateLabel, FloatRight, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { AlleKodeverk, Fagsak, PeriodeSoker } from '@navikt/fp-types';
import {
  KodeverkType,
  behandlingStatus,
  oppholdArsakType,
  periodeResultatType,
  relasjonsRolleType,
  uttakPeriodeType,
} from '@navikt/fp-kodeverk';

import styles from './uttakTidslinje.module.css';

export type PeriodeSøkerMedTidslinjedata = {
  id: number;
  periode: PeriodeSoker;
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
  start: string;
  end: string;
  status: 'success' | 'warning' | 'danger';
  periodeType: string;
  erGradert: boolean;
  erOpphold: boolean;
  harUtsettelse: boolean;
  begrunnelse?: string;
} & PeriodeSøkerMedTidslinjedata;

const getStatus = (periode: PeriodeSoker, tilknyttetStortinget: boolean): 'success' | 'warning' | 'danger' => {
  if (periode.periodeResultatType === periodeResultatType.MANUELL_BEHANDLING || tilknyttetStortinget) {
    return 'warning';
  }
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
    start: periode.periode.fom,
    end: periode.periode.tom,
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

const finnIkonGittKjønnkode = (rrType: string) => {
  if (rrType === relasjonsRolleType.MOR || rrType === relasjonsRolleType.MEDMOR) {
    return <FigureOutwardFillIcon width={20} height={20} color="var(--a-red-200)" />;
  }
  if (rrType === relasjonsRolleType.FAR) {
    return <SilhouetteFillIcon width={20} height={20} color="var(--a-blue-600)" />;
  }
  return <FigureCombinationIcon width={20} height={20} />;
};

const finnIkon = (fagsak: Fagsak, erHovedsøker: boolean) =>
  finnIkonGittKjønnkode(erHovedsøker ? fagsak.relasjonsRolleType : fagsak.annenpartBehandling.relasjonsRolleType);

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

const finnLabelForPeriode = (
  periode: PeriodeMedStartOgSlutt,
  behandlingStatusKode: string,
  intl: IntlShape,
): string => {
  const periodeString = `${dayjs(periode.start).format(DDMMYY_DATE_FORMAT)} - ${dayjs(periode.end).format(
    DDMMYY_DATE_FORMAT,
  )}`;
  const dager = calcDaysAndWeeks(
    dayjs(periode.start).format(ISO_DATE_FORMAT),
    dayjs(periode.end).format(ISO_DATE_FORMAT),
  ).formattedString;

  let periodeType = '';
  if (periode.periodeType !== '-') {
    periodeType = intl.formatMessage({ id: PERIODE_TYPE_LABEL_MAP[periode.periodeType] });
  }

  let type = '';
  if (periode.erGradert) {
    type = intl.formatMessage({ id: 'UttakTidslinje.GradertPeriode' });
  } else if (periode.harUtsettelse) {
    type = intl.formatMessage({ id: 'UttakTidslinje.UtsettelsePeriode' });
  } else if (periode.erOpphold) {
    type = intl.formatMessage({ id: 'UttakTidslinje.OppholdPeriode' });
  }

  const manueltEndret =
    periode.begrunnelse && behandlingStatusKode === behandlingStatus.FATTER_VEDTAK
      ? intl.formatMessage({ id: 'UttakTidslinje.ManueltEditert' })
      : '';

  // Rar formatering - Fiks når Tidslinja får støtte for formaterte tooltips
  return `Stønadskonto: ${periodeType}
Periode: ${periodeString}
Dager: ${dager}
${type}
${manueltEndret}`;
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

const finnRolle = (fagsak: Fagsak, alleKodeverk: AlleKodeverk, erHovedsøker: boolean): string | undefined => {
  const kodeverk = alleKodeverk[KodeverkType.RELASJONSROLLE_TYPE];
  const rrType = erHovedsøker ? fagsak.relasjonsRolleType : fagsak.annenpartBehandling.relasjonsRolleType;
  return kodeverk.find(k => k.kode === rrType)?.navn;
};

interface TidslinjeProps {
  tidslinjeTider: TidslinjeTimes;
  selectedPeriod?: PeriodeSøkerMedTidslinjedata;
  uttakPerioder: PeriodeSøkerMedTidslinjedata[];
  tilknyttetStortinget: boolean;
  setValgtPeriodeIndex: React.Dispatch<React.SetStateAction<number>>;
  behandlingStatusKode: string;
  fagsak: Fagsak;
  alleKodeverk: AlleKodeverk;
}

/**
 * UttakTidslinje
 *
 * Formaterer tidslinjen for uttak
 */
const UttakTidslinje: FunctionComponent<TidslinjeProps> = ({
  tidslinjeTider,
  selectedPeriod,
  uttakPerioder,
  tilknyttetStortinget,
  setValgtPeriodeIndex,
  behandlingStatusKode,
  fagsak,
  alleKodeverk,
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
            {data.tekstIder.map(id => (
              <Label key={id} size="small">
                <FormattedMessage id={id} />
              </Label>
            ))}
            <BodyShort size="small">
              <DateLabel dateString={data.dato} />
            </BodyShort>
          </Timeline.Pin>
        ))}
        {radIder.map((radId, index) => {
          const erHovedsøker = radIder.length === 1 || index > 0;
          return (
            <Timeline.Row
              key={radId}
              label={finnRolle(fagsak, alleKodeverk, erHovedsøker)}
              icon={finnIkon(fagsak, erHovedsøker)}
            >
              {perioder
                .filter(periode => periode.group === radId)
                .map(periode => (
                  <Timeline.Period
                    key={periode.id}
                    start={dayjs(periode.start).toDate()}
                    end={dayjs(periode.end).toDate()}
                    status={periode.status}
                    onSelectPeriod={() => setValgtPeriodeIndex(periode.id)}
                    isActive={periode.id === valgtPeriode?.id}
                    icon={finnIkonForPeriode(periode, behandlingStatusKode)}
                    title={finnLabelForPeriode(periode, behandlingStatusKode, intl)}
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
