import React, {
  useCallback, useMemo, FunctionComponent, ReactElement,
} from 'react';
import dayjs from 'dayjs';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { BehandlingType, NavBrukerKjonn } from '@navikt/ft-kodeverk';
import { Kjønnkode } from '@navikt/ft-types';
import {
  calcDays, calcDaysAndWeeks, DDMMYY_DATE_FORMAT, ISO_DATE_FORMAT,
} from '@navikt/ft-utils';

import {
  Behandling,
  FamilieHendelseSamling,
  Personoversikt,
  Soknad,
  FamilieHendelse,
  Ytelsefordeling,
  AlleKodeverk,
  PeriodeSoker,
} from '@fpsak-frontend/types';
import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import oppholdArsakType, { oppholdArsakMapper } from '@fpsak-frontend/kodeverk/src/oppholdArsakType';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { uttakPeriodeNavn } from '@fpsak-frontend/kodeverk/src/uttakPeriodeType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import periodeResultatType from '@fpsak-frontend/kodeverk/src/periodeResultatType';

import UttakTidslinje, { EventProps, PeriodeSøkerMedTidslinjedata, TidslinjeTimes } from './UttakTidslinje';
import UttakTidslinjeHjelpetekster from './UttakTidslinjeHjelpetekster';

const godkjentKlassenavn = 'godkjentPeriode';
const avvistKlassenavn = 'avvistPeriode';
const endretClassnavn = 'endretPeriode';

const finnSøknadsdato = (
  søknad: Soknad,
): string => {
  const { mottattDato } = søknad;
  const søknadsdato = søknad.søknadsfrist?.mottattDato || søknad.mottattDato;
  if (dayjs(mottattDato) < dayjs(søknadsdato)) {
    return mottattDato;
  }
  return søknadsdato;
};

const getFodselTerminDato = (
  søknad: Soknad,
  gjeldendeFamiliehendelse: FamilieHendelse,
): string => {
  if (gjeldendeFamiliehendelse && gjeldendeFamiliehendelse.avklartBarn && gjeldendeFamiliehendelse.avklartBarn.length > 0) {
    return gjeldendeFamiliehendelse.avklartBarn[0].fodselsdato;
  }
  const { fodselsdatoer, termindato, adopsjonFodelsedatoer } = søknad;
  if (fodselsdatoer && Object.keys(fodselsdatoer).length > 0) {
    return Object.values(fodselsdatoer)[0];
  }
  if (termindato) {
    return termindato;
  }
  if (adopsjonFodelsedatoer && Object.keys(adopsjonFodelsedatoer).length > 0) {
    return Object.values(adopsjonFodelsedatoer)[0];
  }
  return undefined;
};

const finnTidslinjeTider = (
  behandling: Behandling,
  søknad: Soknad,
  familiehendelse: FamilieHendelseSamling,
  ytelsefordeling: Ytelsefordeling,
  personoversikt: Personoversikt,
): TidslinjeTimes => {
  const gjeldendeFamiliehendelse = familiehendelse?.gjeldende;
  const familiehendelseDate = getFodselTerminDato(søknad, gjeldendeFamiliehendelse);
  const endringsdato = ytelsefordeling.endringsdato ? ytelsefordeling.endringsdato : undefined;
  const endredFodselsDato = gjeldendeFamiliehendelse && gjeldendeFamiliehendelse.avklartBarn && gjeldendeFamiliehendelse.avklartBarn.length > 0
    ? gjeldendeFamiliehendelse.avklartBarn[0].fodselsdato : undefined;
  const fødselsdato = søknad.soknadType === soknadType.FODSEL ? (endredFodselsDato || familiehendelseDate) : søknad.omsorgsovertakelseDato;
  const isRevurdering = behandling.type === BehandlingType.REVURDERING;

  const barnFraTps = familiehendelse.register ? familiehendelse.register.avklartBarn : [];
  const dodeBarn = gjeldendeFamiliehendelse
    && !gjeldendeFamiliehendelse.brukAntallBarnFraTps
    && gjeldendeFamiliehendelse.avklartBarn
    && gjeldendeFamiliehendelse.avklartBarn.length > 0
    ? gjeldendeFamiliehendelse.avklartBarn.filter((barn) => barn.dodsdato) : barnFraTps.filter((barn) => barn.dodsdato);

  const customTimesBuilder = {
    soknad: finnSøknadsdato(søknad),
    fodsel: fødselsdato,
    revurdering: isRevurdering ? endringsdato : '1950-01-01',
    dodSoker: personoversikt?.bruker?.dødsdato ? personoversikt.bruker.dødsdato : '1950-01-01',
  };

  dodeBarn.forEach((barn, index: number) => {
    Object.defineProperty(customTimesBuilder, `barndod${index}`, {
      value: dayjs(barn.dodsdato, ISO_DATE_FORMAT).toDate(), enumerable: true,
    });
  });
  return customTimesBuilder;
};

const finnStønadskontoNavn = (
  periodeSøker: PeriodeSoker,
  alleKodeverk: AlleKodeverk,
): ReactElement | string => {
  if (periodeSøker.utsettelseType && periodeSøker.utsettelseType !== '-') {
    return (<FormattedMessage id="Timeline.tooltip.slutt" />);
  }

  if (periodeSøker.aktiviteter.length > 0 && periodeSøker.aktiviteter[0].stønadskontoType) {
    return alleKodeverk[KodeverkType.STOENADSKONTOTYPE].find((k) => k.kode === periodeSøker.aktiviteter[0].stønadskontoType)?.navn;
  }

  if (periodeSøker.oppholdÅrsak !== oppholdArsakType.UDEFINERT) {
    const stonadskonto = oppholdArsakMapper[periodeSøker.oppholdÅrsak];
    return uttakPeriodeNavn[stonadskonto];
  }

  return '';
};

const lagTooltipTekst = (
  alleKodeverk: AlleKodeverk,
  intl: IntlShape,
  periode: PeriodeSoker,
): string => {
  const stønadskontoNavn = finnStønadskontoNavn(periode, alleKodeverk);
  return (`
    <p>
      ${dayjs(periode.fom).format(DDMMYY_DATE_FORMAT)} - ${dayjs(periode.tom).format(DDMMYY_DATE_FORMAT)}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       ${intl.formatMessage({ id: calcDaysAndWeeks(periode.fom, periode.tom).id },
      {
        weeks: calcDaysAndWeeks(periode.fom, periode.tom).weeks,
        days: calcDaysAndWeeks(periode.fom, periode.tom).days,
      })}
        </br>
        ${periode.utsettelseType && periode.utsettelseType !== '-'
      ? intl.formatMessage({ id: 'Timeline.tooltip.utsettelsePeriode' }) : stønadskontoNavn}
     </p>
  `);
};

const getStatusClassNameForHovedsøker = (
  periode: PeriodeSoker,
  tilknyttetStortinget: boolean,
): string => {
  if ('erOppfylt' in periode && periode.erOppfylt === false) {
    return avvistKlassenavn;
  }
  if (('erOppfylt' in periode && periode.erOppfylt === true) || (periode.periodeResultatType === periodeResultatType.INNVILGET
    && !tilknyttetStortinget)) {
    return godkjentKlassenavn;
  }
  if (periode.periodeResultatType === periodeResultatType.MANUELL_BEHANDLING || tilknyttetStortinget) {
    return 'undefined';
  }
  return avvistKlassenavn;
};

const getStatusClassnameForMedsøker = (
  periode: PeriodeSoker,
  tilknyttetStortinget: boolean,
): string => (periode.periodeResultatType === periodeResultatType.INNVILGET && !tilknyttetStortinget
  ? godkjentKlassenavn : avvistKlassenavn);

const leggTidslinjedataTilPeriode = (
  erHovedsøker: boolean,
  hovedsøkerPerioder: PeriodeSoker[],
  annenpartPerioder: PeriodeSoker[],
  intl: IntlShape,
  behandlingStatusKode: string,
  alleKodeverk: AlleKodeverk,
  tilknyttetStortinget: boolean,
): PeriodeSøkerMedTidslinjedata[] => {
  const perioder = erHovedsøker ? hovedsøkerPerioder : annenpartPerioder;

  return perioder.map((periode, index) => {
    const opphold = periode.oppholdÅrsak !== oppholdArsakType.UDEFINERT;

    const gradertClassName = periode.gradertAktivitet && periode.graderingInnvilget ? 'gradert' : '';

    const statusClassName = erHovedsøker
      ? getStatusClassNameForHovedsøker(periode, tilknyttetStortinget)
      : getStatusClassnameForMedsøker(periode, tilknyttetStortinget);
    const oppholdStatusClassName = statusClassName === 'undefined' ? 'opphold-manuell' : 'opphold';

    const isEndretClassName = periode.begrunnelse
      && behandlingStatusKode === behandlingStatus.FATTER_VEDTAK ? endretClassnavn : '';

    return {
      periode,
      id: index,
      tomMoment: dayjs(periode.tom).add(1, 'days'),
      className: opphold ? oppholdStatusClassName : `${statusClassName} ${isEndretClassName} ${gradertClassName}`,
      hovedsoker: erHovedsøker,
      group: annenpartPerioder.length > 0 && erHovedsøker ? 2 : 1,
      title: lagTooltipTekst(alleKodeverk, intl, periode),
    };
  });
};

const lagUttakMedOpphold = (
  perioderSøker: PeriodeSoker[],
): PeriodeSoker[] => perioderSøker.map((uttak) => {
  const { ...uttakPerioder } = uttak;

  if (uttak.oppholdÅrsak !== oppholdArsakType.UDEFINERT) {
    const stonadskonto = oppholdArsakMapper[uttak.oppholdÅrsak];
    const oppholdInfo = {
      stønadskontoType: stonadskonto,
      trekkdagerDesimaler: calcDays(uttak.fom, uttak.tom),
    };
    uttakPerioder.aktiviteter = [oppholdInfo];
  }
  return uttakPerioder;
});

interface OwnProps {
  behandling: Behandling;
  søknad: Soknad;
  personoversikt: Personoversikt;
  perioderSøker: PeriodeSoker[];
  perioderAnnenpart: PeriodeSoker[];
  valgtPeriodeIndex: number | undefined;
  familiehendelse: FamilieHendelseSamling;
  ytelsefordeling: Ytelsefordeling;
  alleKodeverk: AlleKodeverk;
  tilknyttetStortinget: boolean;
  setValgtPeriodeIndex: (valgtPeriodeIndex: number | undefined) => void;
}

const UttakTidslinjeIndex: FunctionComponent<OwnProps> = ({
  behandling,
  søknad,
  personoversikt,
  perioderSøker,
  perioderAnnenpart,
  valgtPeriodeIndex,
  familiehendelse,
  ytelsefordeling,
  alleKodeverk,
  tilknyttetStortinget,
  setValgtPeriodeIndex,
}) => {
  const intl = useIntl();

  const uttakMedOpphold = lagUttakMedOpphold(perioderSøker);

  const hovedsøkerPerioder = leggTidslinjedataTilPeriode(
    true, uttakMedOpphold, perioderAnnenpart, intl, behandling.status, alleKodeverk, tilknyttetStortinget,
  );
  const annenForelderPerioder = leggTidslinjedataTilPeriode(
    false, uttakMedOpphold, perioderAnnenpart, intl, behandling.status, alleKodeverk, tilknyttetStortinget,
  );

  const sorterteUttaksperioder = useMemo(() => (annenForelderPerioder.concat(hovedsøkerPerioder.map((p) => ({
    ...p,
    id: p.id + annenForelderPerioder.length,
  })))), [hovedsøkerPerioder, annenForelderPerioder]);

  const viseUttakMedsoker = perioderAnnenpart.length > 0;
  const medsøkerKjønnKode = (viseUttakMedsoker && personoversikt && personoversikt.annenPart) ? personoversikt.annenPart.kjønn as Kjønnkode : undefined;
  // hvis ukjent annenpart og annenpart uttak, vis ukjent ikon
  const medsokerKjonnKode = viseUttakMedsoker && medsøkerKjønnKode === undefined ? NavBrukerKjonn.UDEFINERT : medsøkerKjønnKode;

  const tidslinjeTider = useMemo(() => finnTidslinjeTider(behandling, søknad, familiehendelse, ytelsefordeling, personoversikt),
    [behandling, søknad, familiehendelse, ytelsefordeling, personoversikt]);

  const velgPeriode = useCallback((eventProps: EventProps) => {
    const periodeIndex = sorterteUttaksperioder.findIndex((item) => item.id === eventProps.items[0]);
    const valgtPeriode = valgtPeriodeIndex ? sorterteUttaksperioder[valgtPeriodeIndex] : undefined;

    if (valgtPeriode?.periode.fom !== sorterteUttaksperioder[periodeIndex]?.periode.fom) {
      setValgtPeriodeIndex(periodeIndex);
    } else {
      setValgtPeriodeIndex(undefined);
    }
    eventProps.event.preventDefault();
  }, [sorterteUttaksperioder, valgtPeriodeIndex]);

  const åpneFørstePeriodeEllerLukk = useCallback(() => setValgtPeriodeIndex(valgtPeriodeIndex ? undefined : 0), [valgtPeriodeIndex]);

  return (
    <UttakTidslinje
      tidslinjeTider={tidslinjeTider}
      hovedsokerKjonnKode={personoversikt ? personoversikt.bruker.kjønn as Kjønnkode : undefined}
      medsokerKjonnKode={medsokerKjonnKode}
      openPeriodInfo={åpneFørstePeriodeEllerLukk}
      selectedPeriod={valgtPeriodeIndex ? sorterteUttaksperioder[valgtPeriodeIndex] : undefined}
      selectPeriodCallback={velgPeriode}
      uttakPerioder={sorterteUttaksperioder}
    >
      <UttakTidslinjeHjelpetekster />
    </UttakTidslinje>
  );
};

export default UttakTidslinjeIndex;
