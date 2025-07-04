import React, { type ReactElement, type ReactNode, useState } from 'react';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DoorOpenIcon,
  FigureCombinationIcon,
  FigureOutwardFillIcon,
  MinusIcon,
  PauseIcon,
  PercentIcon,
  PersonPencilIcon,
  PersonPregnantIcon,
  PlusIcon,
  SilhouetteFillIcon,
  StrollerIcon,
} from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Label, Timeline, VStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { calcDaysAndWeeks, ISO_DATE_FORMAT, periodFormat } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import {
  BehandlingStatus,
  OppholdArsakType,
  PeriodeResultatType,
  RelasjonsRolleType,
  UttakPeriodeType,
} from '@navikt/fp-kodeverk';
import type { AlleKodeverk, AnnenforelderUttakEøsPeriode, Fagsak, PeriodeSoker } from '@navikt/fp-types';

export type PeriodeSøkerMedTidslinjedata = {
  id: number;
  periode: PeriodeSoker | AnnenforelderUttakEøsPeriode;
  hovedsoker: boolean;
  group: number;
};

export type TidslinjeTimes = {
  soknad: string;
  fodsel?: string;
  revurdering?: string;
  dodSoker?: string;
};

const PERIODE_TYPE_IKON_MAP = {
  [UttakPeriodeType.MODREKVOTE]: <StrollerIcon />,
  [UttakPeriodeType.FEDREKVOTE]: <StrollerIcon />,
  [UttakPeriodeType.FELLESPERIODE]: <StrollerIcon />,
  [UttakPeriodeType.FORELDREPENGER]: <StrollerIcon />,
  [UttakPeriodeType.FORELDREPENGER_FOR_FODSEL]: <PersonPregnantIcon />,
} as Record<string, ReactNode>;

const PERIODE_TYPE_LABEL_MAP = {
  [UttakPeriodeType.MODREKVOTE]: 'UttakTidslinje.Modrekvote',
  [UttakPeriodeType.FEDREKVOTE]: 'UttakTidslinje.Fedrekvote',
  [UttakPeriodeType.FELLESPERIODE]: 'UttakTidslinje.Fellesperiode',
  [UttakPeriodeType.FORELDREPENGER]: 'UttakTidslinje.Foreldrepenger',
  [UttakPeriodeType.FORELDREPENGER_FOR_FODSEL]: 'UttakTidslinje.ForeldrepengerForFodsel',
} as Record<string, string>;

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
  status: 'success' | 'warning' | 'danger' | 'info';
  periodeType: string;
  erGradert: boolean;
  erOpphold: boolean;
  harUtsettelse: boolean;
  begrunnelse?: string;
} & PeriodeSøkerMedTidslinjedata;

const erEøsPeriode = (periode: PeriodeSoker | AnnenforelderUttakEøsPeriode) => 'trekkdager' in periode;

const getStatus = (
  periode: PeriodeSoker | AnnenforelderUttakEøsPeriode,
  tilknyttetStortinget: boolean,
): 'success' | 'warning' | 'danger' | 'info' => {
  if (erEøsPeriode(periode)) {
    return 'info';
  }

  if (periode.periodeResultatType === PeriodeResultatType.MANUELL_BEHANDLING || tilknyttetStortinget) {
    return 'warning';
  }
  if (
    periode.gradertAktivitet &&
    periode.graderingInnvilget &&
    periode.periodeResultatType === PeriodeResultatType.INNVILGET
  ) {
    return 'success';
  }
  if ('erOppfylt' in periode && periode.erOppfylt === false) {
    return 'danger';
  }
  if (
    ('erOppfylt' in periode && periode.erOppfylt === true) ||
    (periode.periodeResultatType === PeriodeResultatType.INNVILGET && !tilknyttetStortinget)
  ) {
    return 'success';
  }

  return 'danger';
};

const finnPeriodeType = (valgtPeriode: PeriodeSoker | AnnenforelderUttakEøsPeriode): string => {
  if (erEøsPeriode(valgtPeriode)) {
    return valgtPeriode.trekkonto;
  }
  const kontoIkkeSatt =
    valgtPeriode.aktiviteter.length === 0 ||
    (!valgtPeriode.periodeType && valgtPeriode.aktiviteter[0].stønadskontoType === '-');
  return !kontoIkkeSatt && valgtPeriode.aktiviteter[0]?.stønadskontoType
    ? valgtPeriode.aktiviteter[0]?.stønadskontoType
    : '';
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
    erGradert: erEøsPeriode(periode.periode)
      ? false
      : !!periode.periode.gradertAktivitet && !!periode.periode.graderingInnvilget,
    erOpphold: erEøsPeriode(periode.periode) ? false : periode.periode.oppholdÅrsak !== OppholdArsakType.UDEFINERT,
    harUtsettelse: erEøsPeriode(periode.periode) ? false : periode.periode.utsettelseType !== '-',
    begrunnelse: erEøsPeriode(periode.periode) ? '' : periode.periode.begrunnelse,
  }));

const lagGruppeIder = (perioder: PeriodeSøkerMedTidslinjedata[] = []) => {
  if (perioder.every(p => !p.hovedsoker)) {
    return [1, 2];
  }

  return perioder
    .reduce<PeriodeSøkerMedTidslinjedata[]>((accPerioder, periode) => {
      const harPeriode = accPerioder.some(p => p.group === periode.group);
      if (!harPeriode) accPerioder.push(periode);
      return accPerioder;
    }, [])
    .map(activity => activity.group);
};

const finnIkon = (fagsak: Fagsak, erHovedsøker: boolean, annenpartEøs: boolean) => {
  if (!erHovedsøker && annenpartEøs) {
    return <FigureCombinationIcon width={20} height={20} />;
  }
  const rrType = erHovedsøker ? fagsak.relasjonsRolleType : fagsak.annenpartBehandling!.relasjonsRolleType;
  if (rrType === RelasjonsRolleType.MOR || rrType === RelasjonsRolleType.MEDMOR) {
    return <FigureOutwardFillIcon width={20} height={20} color="var(--ax-danger-300)" />;
  }
  if (rrType === RelasjonsRolleType.FAR) {
    return <SilhouetteFillIcon width={20} height={20} color="var(--ax-accent-700)" />;
  }
  return <FigureCombinationIcon width={20} height={20} />;
};

type PinData = {
  dato: string;
  datoITidslinjen: string;
  tekstIder: string[];
};

const finnSisteDato = (familiehendelseDato: string, førstePeriodeFom: dayjs.Dayjs): string =>
  dayjs(familiehendelseDato).isBefore(førstePeriodeFom)
    ? førstePeriodeFom.subtract(1, 'days').format(ISO_DATE_FORMAT)
    : familiehendelseDato;

const slåSammenPinDataOmLikDato = (pinData: PinData[]): PinData[] =>
  pinData.reduce<PinData[]>((accData, data) => {
    const index = accData.findIndex(d => d.datoITidslinjen === data.datoITidslinjen);
    if (index !== -1) {
      return accData
        .filter((_d, i) => i !== index)
        .concat({
          dato: data.dato,
          datoITidslinjen: data.datoITidslinjen,
          tekstIder: data.tekstIder.concat(accData[index].tekstIder),
        });
    }
    return accData.concat(data);
  }, []);

const lagPinData = (tidslinjeTider: TidslinjeTimes, fomDato: dayjs.Dayjs): PinData[] => {
  const pinData = new Array<PinData>();

  if (tidslinjeTider.dodSoker) {
    pinData.push({
      dato: tidslinjeTider.dodSoker,
      datoITidslinjen: finnSisteDato(tidslinjeTider.dodSoker, fomDato),
      tekstIder: ['UttakTidslinje.DodSoker'],
    });
  }
  if (tidslinjeTider.fodsel) {
    pinData.push({
      dato: tidslinjeTider.fodsel,
      datoITidslinjen: finnSisteDato(tidslinjeTider.fodsel, fomDato),
      tekstIder: ['UttakTidslinje.Fodsel'],
    });
  }
  if (tidslinjeTider.revurdering) {
    pinData.push({
      dato: tidslinjeTider.revurdering,
      datoITidslinjen: finnSisteDato(tidslinjeTider.revurdering, fomDato),
      tekstIder: ['UttakTidslinje.Revurdering'],
    });
  }
  if (tidslinjeTider.soknad) {
    pinData.push({
      dato: tidslinjeTider.soknad,
      datoITidslinjen: finnSisteDato(tidslinjeTider.soknad, fomDato),
      tekstIder: ['UttakTidslinje.Soknad'],
    });
  }

  return slåSammenPinDataOmLikDato(pinData);
};

const finnLabelForPeriode = (
  periode: PeriodeMedStartOgSlutt,
  behandlingStatusKode: string,
  intl: IntlShape,
): ReactElement => {
  const periodeString = periodFormat(periode.start, periode.end);
  const dager = calcDaysAndWeeks(periode.start, periode.end).formattedString;

  let periodeType = '';
  if (periode.periodeType !== '-' && periode.periodeType !== '') {
    periodeType = intl.formatMessage({ id: PERIODE_TYPE_LABEL_MAP[periode.periodeType] });
  }

  //TODO HEr må ein da inn få vist data for EØS periodane

  let type = '';
  if (periode.erGradert) {
    type = intl.formatMessage({ id: 'UttakTidslinje.GradertPeriode' });
  } else if (periode.harUtsettelse) {
    type = intl.formatMessage({ id: 'UttakTidslinje.UtsettelsePeriode' });
  } else if (periode.erOpphold) {
    type = intl.formatMessage({ id: 'UttakTidslinje.OppholdPeriode' });
  }

  const manueltEndret =
    periode.begrunnelse && behandlingStatusKode === BehandlingStatus.FATTER_VEDTAK
      ? intl.formatMessage({ id: 'UttakTidslinje.ManueltEditert' })
      : '';

  return (
    <>
      <BodyShort>
        <FormattedMessage id="UttakTidslinje.Stonadskonto" values={{ periodeType: periodeType || '-' }} />
      </BodyShort>
      <BodyShort>
        <FormattedMessage id="UttakTidslinje.Periode" values={{ periodeString }} />
      </BodyShort>
      <VStack gap="space-8">
        <BodyShort>
          <FormattedMessage id="UttakTidslinje.Dager" values={{ dager }} />
        </BodyShort>
        {type}
      </VStack>
      {manueltEndret}
    </>
  );
};

const finnIkonForPeriode = (periode: PeriodeMedStartOgSlutt, behandlingStatusKode: string) => {
  if (periode.erGradert) {
    return <PercentIcon />;
  }
  if (periode.begrunnelse && behandlingStatusKode === BehandlingStatus.FATTER_VEDTAK) {
    return <PersonPencilIcon />;
  }
  if (periode.harUtsettelse) {
    return <PauseIcon />;
  }
  return periode.erOpphold ? <DoorOpenIcon /> : PERIODE_TYPE_IKON_MAP[periode.periodeType];
};

const finnRolle = (
  fagsak: Fagsak,
  alleKodeverk: AlleKodeverk,
  erHovedsøker: boolean,
  annenpartEøs: boolean,
): string => {
  if (!erHovedsøker && annenpartEøs) {
    return 'EØS';
  }
  const kodeverk = alleKodeverk['RelasjonsRolleType'];
  const rrType = erHovedsøker ? fagsak.relasjonsRolleType : fagsak.annenpartBehandling!.relasjonsRolleType;
  return kodeverk.find(k => k.kode === rrType)?.navn ?? '-';
};

interface TidslinjeProps {
  tidslinjeTider: TidslinjeTimes;
  selectedPeriod?: PeriodeSøkerMedTidslinjedata;
  uttakPerioder: PeriodeSøkerMedTidslinjedata[];
  tilknyttetStortinget: boolean;
  setValgtPeriodeIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  behandlingStatusKode: string;
  fagsak: Fagsak;
  alleKodeverk: AlleKodeverk;
}

/**
 * UttakTidslinje
 *
 * Formaterer tidslinjen for uttak
 */
export const UttakTidslinje = ({
  tidslinjeTider,
  selectedPeriod,
  uttakPerioder,
  tilknyttetStortinget,
  setValgtPeriodeIndex,
  behandlingStatusKode,
  fagsak,
  alleKodeverk,
}: TidslinjeProps) => {
  const intl = useIntl();

  const radIder = lagGruppeIder(uttakPerioder);
  const perioder = formatPaneler(tilknyttetStortinget, uttakPerioder);
  const annenpartEøs = uttakPerioder.some(p => erEøsPeriode(p.periode));

  const sorterteUttaksperioder = [...uttakPerioder].sort(sortByDate);

  const valgtPeriode = selectedPeriod
    ? {
        fom: selectedPeriod.periode.fom,
        tom: selectedPeriod.periode.tom,
        id: selectedPeriod.id,
      }
    : undefined;

  const originalFomDato = dayjs(sorterteUttaksperioder[0].periode.fom);
  const originalTomDato = dayjs(sorterteUttaksperioder[sorterteUttaksperioder.length - 1].periode.tom);

  const pinData = lagPinData(tidslinjeTider, originalFomDato);

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
    <VStack gap="space-24">
      <Timeline startDate={dayjs(fomDato).toDate()} endDate={dayjs(tomDato).add(1, 'days').toDate()}>
        {pinData.map(data => (
          <Timeline.Pin key={data.dato} date={dayjs(data.datoITidslinjen).toDate()}>
            <VStack gap="space-4">
              {data.tekstIder.map(id => (
                <Label size="small" key={id}>
                  <FormattedMessage id={id} />
                </Label>
              ))}
            </VStack>
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
              label={finnRolle(fagsak, alleKodeverk, erHovedsøker, annenpartEøs)}
              icon={finnIkon(fagsak, erHovedsøker, annenpartEøs)}
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
                    placement={index === 0 ? 'top' : 'bottom'}
                  >
                    {finnLabelForPeriode(periode, behandlingStatusKode, intl)}
                  </Timeline.Period>
                ))}
            </Timeline.Row>
          );
        })}
      </Timeline>
      <HStack gap="space-8" justify="end">
        <Button
          size="small"
          icon={<PlusIcon aria-hidden />}
          onClick={zoomIn}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'UttakTidslinje.ZoomInn' })}
        />
        <Button
          size="small"
          icon={<MinusIcon aria-hidden />}
          onClick={zoomOut}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'UttakTidslinje.ZoomUt' })}
        />
        <Button
          size="small"
          icon={<ArrowLeftIcon aria-hidden />}
          onClick={goBackward}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'UttakTidslinje.ScrollTilVenstre' })}
        />
        <Button
          size="small"
          icon={<ArrowRightIcon aria-hidden />}
          onClick={goForward}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'UttakTidslinje.ScrollTilHogre' })}
        />
      </HStack>
    </VStack>
  );
};
