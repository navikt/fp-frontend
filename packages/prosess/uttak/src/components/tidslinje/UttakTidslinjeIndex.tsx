import React from 'react';

import { calcDays, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { BehandlingTypeEnum, OppholdArsakType, SoknadType } from '@navikt/fp-kodeverk';
import type {
  AlleKodeverk,
  AnnenforelderUttakEøsPeriode,
  Behandling,
  Fagsak,
  FamilieHendelse,
  FamilieHendelseSamling,
  foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OppholdÅrsak,
  foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_UttakPeriodeType,
  PeriodeSoker,
  Personoversikt,
  Soknad,
} from '@navikt/fp-types';

import { type PeriodeSøkerMedTidslinjedata, type TidslinjeTimes, UttakTidslinje } from './UttakTidslinje';

//TODO (TOR) Dette er vel mapping mellom kodeverk? Bør i sofall bruka kodeverk-enums
const OppholdArsakMapper = {
  '-': '-',
  UTTAK_MØDREKVOTE_ANNEN_FORELDER: 'MØDREKVOTE',
  UTTAK_FEDREKVOTE_ANNEN_FORELDER: 'FEDREKVOTE',
  UTTAK_FELLESP_ANNEN_FORELDER: 'FELLESPERIODE',
  UTTAK_FORELDREPENGER_ANNEN_FORELDER: 'FORELDREPENGER',
} as Record<
  foreldrepenger_behandlingslager_behandling_ytelsefordeling_årsak_OppholdÅrsak,
  foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_UttakPeriodeType
>;

const finnSøknadsdato = (søknad: Soknad): string => {
  const { mottattDato } = søknad;
  const søknadsdato = søknad.søknadsfrist?.mottattDato ?? søknad.mottattDato;
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
  personoversikt: Personoversikt,
  endringsdato: string,
): TidslinjeTimes => {
  const gjeldendeFamiliehendelse = familiehendelse?.gjeldende;
  const familiehendelseDate = getFodselTerminDato(søknad, gjeldendeFamiliehendelse);
  const endredFodselsDato =
    gjeldendeFamiliehendelse?.avklartBarn && gjeldendeFamiliehendelse.avklartBarn.length > 0
      ? gjeldendeFamiliehendelse.avklartBarn[0].fodselsdato
      : undefined;
  const fødselsdato =
    søknad.soknadType === SoknadType.FODSEL
      ? (endredFodselsDato ?? familiehendelseDate)
      : søknad.omsorgsovertakelseDato;
  const isRevurdering = behandling.type === BehandlingTypeEnum.REVURDERING;

  const barnFraTps = familiehendelse.register?.avklartBarn ?? [];
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
    dodSoker: personoversikt?.bruker?.dødsdato ?? undefined,
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
  annenpartPerioder: PeriodeSoker[] | AnnenforelderUttakEøsPeriode[],
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

    if (uttak.oppholdÅrsak !== OppholdArsakType.UDEFINERT) {
      const stonadskonto = OppholdArsakMapper[uttak.oppholdÅrsak];
      const oppholdInfo = {
        stønadskontoType: stonadskonto,
        trekkdagerDesimaler: calcDays(uttak.fom, uttak.tom),
      };
      uttakPerioder.aktiviteter = [oppholdInfo];
    }
    return uttakPerioder;
  });

interface Props {
  behandling: Behandling;
  søknad: Soknad;
  personoversikt: Personoversikt;
  perioderSøker: PeriodeSoker[];
  perioderAnnenpart: PeriodeSoker[] | AnnenforelderUttakEøsPeriode[];
  valgtPeriodeIndex: number | undefined;
  familiehendelse: FamilieHendelseSamling;
  endringsdato: string;
  tilknyttetStortinget: boolean;
  setValgtPeriodeIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  fagsak: Fagsak;
  alleKodeverk: AlleKodeverk;
}

export const UttakTidslinjeIndex = ({
  behandling,
  søknad,
  personoversikt,
  perioderSøker,
  perioderAnnenpart,
  valgtPeriodeIndex,
  familiehendelse,
  endringsdato,
  tilknyttetStortinget,
  setValgtPeriodeIndex,
  fagsak,
  alleKodeverk,
}: Props) => {
  const uttakMedOpphold = lagUttakMedOpphold(perioderSøker);

  const hovedsøkerPerioder = leggTidslinjedataTilPeriode(true, uttakMedOpphold, perioderAnnenpart);
  const annenForelderPerioder = leggTidslinjedataTilPeriode(false, uttakMedOpphold, perioderAnnenpart);

  const alleUttaksperioderMedId = annenForelderPerioder.concat(
    hovedsøkerPerioder.map(p => ({
      ...p,
      id: p.id + annenForelderPerioder.length,
    })),
  );

  const tidslinjeTider = finnTidslinjeTider(behandling, søknad, familiehendelse, personoversikt, endringsdato);

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
