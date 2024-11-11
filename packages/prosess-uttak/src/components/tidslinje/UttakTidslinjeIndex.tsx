import React, { useMemo, FunctionComponent } from 'react';
import dayjs from 'dayjs';
import { calcDays, ISO_DATE_FORMAT } from '@navikt/ft-utils';

import {
  Behandling,
  FamilieHendelseSamling,
  Personoversikt,
  Soknad,
  FamilieHendelse,
  Ytelsefordeling,
  PeriodeSoker,
  Fagsak,
  AlleKodeverk,
} from '@navikt/fp-types';
import {
  soknadType,
  oppholdArsakType,
  oppholdArsakMapper,
  behandlingType as BehandlingType,
} from '@navikt/fp-kodeverk';

import UttakTidslinje, { PeriodeSøkerMedTidslinjedata, TidslinjeTimes } from './UttakTidslinje';

const finnSøknadsdato = (søknad: Soknad): string => {
  const { mottattDato } = søknad;
  const søknadsdato = søknad.søknadsfrist?.mottattDato || søknad.mottattDato;
  if (dayjs(mottattDato) < dayjs(søknadsdato)) {
    return mottattDato;
  }
  return søknadsdato;
};

const getFodselTerminDato = (søknad: Soknad, gjeldendeFamiliehendelse: FamilieHendelse): string | undefined => {
  if (gjeldendeFamiliehendelse?.avklartBarn && gjeldendeFamiliehendelse.avklartBarn.length > 0) {
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
  const endredFodselsDato =
    gjeldendeFamiliehendelse?.avklartBarn && gjeldendeFamiliehendelse.avklartBarn.length > 0
      ? gjeldendeFamiliehendelse.avklartBarn[0].fodselsdato
      : undefined;
  const fødselsdato =
    søknad.soknadType === soknadType.FODSEL ? endredFodselsDato || familiehendelseDate : søknad.omsorgsovertakelseDato;
  const isRevurdering = behandling.type === BehandlingType.REVURDERING;

  const barnFraTps = familiehendelse.register?.avklartBarn ? familiehendelse.register.avklartBarn : [];
  const dodeBarn =
    gjeldendeFamiliehendelse &&
    !gjeldendeFamiliehendelse.brukAntallBarnFraTps &&
    gjeldendeFamiliehendelse.avklartBarn &&
    gjeldendeFamiliehendelse.avklartBarn.length > 0
      ? gjeldendeFamiliehendelse.avklartBarn.filter(barn => barn.dodsdato)
      : barnFraTps.filter(barn => barn.dodsdato);

  const customTimesBuilder = {
    soknad: finnSøknadsdato(søknad),
    fodsel: fødselsdato,
    revurdering: isRevurdering ? endringsdato : undefined,
    dodSoker: personoversikt?.bruker?.dødsdato ? personoversikt.bruker.dødsdato : undefined,
  };

  dodeBarn.forEach((barn, index: number) => {
    Object.defineProperty(customTimesBuilder, `barndod${index}`, {
      value: dayjs(barn.dodsdato, ISO_DATE_FORMAT).toDate(),
      enumerable: true,
    });
  });
  return customTimesBuilder;
};

const leggTidslinjedataTilPeriode = (
  erHovedsøker: boolean,
  hovedsøkerPerioder: PeriodeSoker[],
  annenpartPerioder: PeriodeSoker[],
): PeriodeSøkerMedTidslinjedata[] => {
  const perioder = erHovedsøker ? hovedsøkerPerioder : annenpartPerioder;

  return perioder.map((periode, index) => ({
    periode,
    id: index,
    tomMoment: dayjs(periode.tom).add(1, 'days'),
    hovedsoker: erHovedsøker,
    group: annenpartPerioder.length > 0 && erHovedsøker ? 2 : 1,
  }));
};

const lagUttakMedOpphold = (perioderSøker: PeriodeSoker[]): PeriodeSoker[] =>
  perioderSøker.map(uttak => {
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
  tilknyttetStortinget: boolean;
  setValgtPeriodeIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  fagsak: Fagsak;
  alleKodeverk: AlleKodeverk;
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
  tilknyttetStortinget,
  setValgtPeriodeIndex,
  fagsak,
  alleKodeverk,
}) => {
  const uttakMedOpphold = lagUttakMedOpphold(perioderSøker);

  const hovedsøkerPerioder = leggTidslinjedataTilPeriode(true, uttakMedOpphold, perioderAnnenpart);
  const annenForelderPerioder = leggTidslinjedataTilPeriode(false, uttakMedOpphold, perioderAnnenpart);

  const alleUttaksperioderMedId = useMemo(
    () =>
      annenForelderPerioder.concat(
        hovedsøkerPerioder.map(p => ({
          ...p,
          id: p.id + annenForelderPerioder.length,
        })),
      ),
    [hovedsøkerPerioder, annenForelderPerioder],
  );

  const tidslinjeTider = useMemo(
    () => finnTidslinjeTider(behandling, søknad, familiehendelse, ytelsefordeling, personoversikt),
    [behandling, søknad, familiehendelse, ytelsefordeling, personoversikt],
  );

  return (
    <UttakTidslinje
      tidslinjeTider={tidslinjeTider}
      selectedPeriod={valgtPeriodeIndex !== undefined ? alleUttaksperioderMedId[valgtPeriodeIndex] : undefined}
      uttakPerioder={alleUttaksperioderMedId}
      tilknyttetStortinget={tilknyttetStortinget}
      setValgtPeriodeIndex={setValgtPeriodeIndex}
      behandlingStatusKode={behandling.status}
      fagsak={fagsak}
      alleKodeverk={alleKodeverk}
    />
  );
};

export default UttakTidslinjeIndex;
