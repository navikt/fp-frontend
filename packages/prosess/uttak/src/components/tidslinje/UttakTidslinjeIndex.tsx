import React from 'react';

import { calcDays } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type {
  AlleKodeverk,
  AnnenforelderUttakEøsPeriode,
  BehandlingFpSak,
  Fagsak,
  FamilieHendelse,
  OppholdÅrsakType,
  PeriodeSoker,
  Personoversikt,
  Soknad,
  UttakPeriodeType,
} from '@navikt/fp-types';

import { type PeriodeSøkerMedTidslinjedata, type TidslinjeTimes, UttakTidslinje } from './UttakTidslinje';

//TODO (TOR) Dette er vel mapping mellom kodeverk? Bør i sofall bruka kodeverk-enums
const OppholdArsakMapper = {
  '-': '-',
  UTTAK_MØDREKVOTE_ANNEN_FORELDER: 'MØDREKVOTE',
  UTTAK_FEDREKVOTE_ANNEN_FORELDER: 'FEDREKVOTE',
  UTTAK_FELLESP_ANNEN_FORELDER: 'FELLESPERIODE',
  UTTAK_FORELDREPENGER_ANNEN_FORELDER: 'FORELDREPENGER',
} as Record<OppholdÅrsakType, UttakPeriodeType>;

const finnSøknadsdato = (søknad: Soknad): string => {
  const { mottattDato } = søknad;
  const søknadsdato = søknad.søknadsfrist.mottattDato ?? søknad.mottattDato;
  if (dayjs(mottattDato) < dayjs(søknadsdato)) {
    return mottattDato;
  }
  return søknadsdato;
};

const utledFamiliehendelseDato = (gjeldendeFamiliehendelse: FamilieHendelse): string | undefined => {
  return (
    gjeldendeFamiliehendelse.adopsjon?.omsorgsovertakelseDato ||
    gjeldendeFamiliehendelse.fødselTermin?.fødselsdato ||
    gjeldendeFamiliehendelse.fødselTermin?.termindato ||
    undefined
  );
};

const finnTidslinjeTider = (
  behandling: BehandlingFpSak,
  søknad: Soknad,
  familiehendelse: FamilieHendelse,
  personoversikt: Personoversikt,
  endringsdato: string,
): TidslinjeTimes => {
  const familiehendelseDato = utledFamiliehendelseDato(familiehendelse);

  const isRevurdering = behandling.type === 'BT-004';

  return {
    soknad: finnSøknadsdato(søknad),
    fodsel: familiehendelseDato,
    revurdering: isRevurdering ? endringsdato : undefined,
    dodSoker: personoversikt.bruker.dødsdato,
  };
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

    if (uttak.oppholdÅrsak !== '-') {
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
  behandling: BehandlingFpSak;
  søknad: Soknad;
  personoversikt: Personoversikt;
  perioderSøker: PeriodeSoker[];
  perioderAnnenpart: PeriodeSoker[] | AnnenforelderUttakEøsPeriode[];
  valgtPeriodeIndex: number | undefined;
  familiehendelse: FamilieHendelse;
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
