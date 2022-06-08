import React from 'react';
import { action } from '@storybook/addon-actions';

import UttakProsessIndex from '@fpsak-frontend/prosess-uttak';
import {
  Behandling, FamilieHendelseSamling, Personoversikt, Soknad, UttakStonadskontoer,
} from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

export default {
  title: 'prosess/prosess-uttak',
  component: UttakProsessIndex,
};

const aksjonspunkter = [
  {
    definisjon: '5071',
    status: 'OPPR',
    toTrinnsBehandling: true,
    aksjonspunktType: 'MANU',
    kanLoses: true,
    erAktivt: true,
  },
];

const familiehendelse = {
  gjeldende: {
    skjaringstidspunkt: '2019-11-04',
    avklartBarn: [
      {
        fodselsdato: '2019-11-04',
      },
    ],
  },
} as FamilieHendelseSamling;

const behandling = {
  uuid: '1',
  versjon: 1,
  type: 'BT-002',
  behandlingsresultat: {
    skjæringstidspunkt: {
      dato: '2019-10-14',
    },
  },
  status: 'UTRED',
  sprakkode: '-',
} as Behandling;

const uttakStonadskontoer = {
  tapteDagerFpff: 1,
  stonadskontoer: {
    FEDREKVOTE: {
      stonadskontotype: 'FEDREKVOTE',
      maxDager: 75,
      saldo: 50,
      aktivitetSaldoDtoList: [
        {
          aktivitetIdentifikator: {
            uttakArbeidType: 'ORDINÆRT_ARBEID',
            arbeidsgiverReferanse: '910909088',
          },
          saldo: 50,
        },
      ],
      gyldigForbruk: true,
    },
    MØDREKVOTE: {
      stonadskontotype: 'MØDREKVOTE',
      maxDager: 75,
      saldo: 35,
      aktivitetSaldoDtoList: [
        {
          aktivitetIdentifikator: {
            uttakArbeidType: 'ORDINÆRT_ARBEID',
            arbeidsgiverReferanse: '910909088',
          },
          saldo: 35,
        },
      ],
      gyldigForbruk: true,
    },
    FELLESPERIODE: {
      stonadskontotype: 'FELLESPERIODE',
      maxDager: 80,
      saldo: 80,
      aktivitetSaldoDtoList: [
        {
          aktivitetIdentifikator: {
            uttakArbeidType: 'ORDINÆRT_ARBEID',
            arbeidsgiverReferanse: '910909088',
          },
          saldo: 80,
        },
      ],
      gyldigForbruk: true,
    },
    FORELDREPENGER_FØR_FØDSEL: {
      stonadskontotype: 'FORELDREPENGER_FØR_FØDSEL',
      maxDager: 15,
      saldo: 0,
      aktivitetSaldoDtoList: [
        {
          aktivitetIdentifikator: {
            uttakArbeidType: 'ORDINÆRT_ARBEID',
            arbeidsgiverReferanse: '910909088',
          },
          saldo: 0,
        },
      ],
      gyldigForbruk: true,
    },
  },
} as UttakStonadskontoer;

const uttaksresultatPerioder = {
  perioderSøker: [
    {
      fom: '2019-10-14',
      tom: '2019-11-03',
      aktiviteter: [
        {
          stønadskontoType: 'FORELDREPENGER_FØR_FØDSEL',
          prosentArbeid: 0,
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: 100,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 15,
        },
      ],
      periodeResultatType: 'INNVILGET',
      periodeResultatÅrsak: '2006',
      manuellBehandlingÅrsak: '-',
      graderingAvslagÅrsak: '-',
      flerbarnsdager: false,
      samtidigUttak: false,
      graderingInnvilget: false,
      periodeType: 'FORELDREPENGER_FØR_FØDSEL',
      utsettelseType: '-',
      oppholdÅrsak: '-',
    },
    {
      fom: '2019-11-04',
      tom: '2019-12-15',
      aktiviteter: [
        {
          stønadskontoType: 'MØDREKVOTE',
          prosentArbeid: 0,
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: 100,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 30,
        },
      ],
      periodeResultatType: 'INNVILGET',
      periodeResultatÅrsak: '2003',
      manuellBehandlingÅrsak: '-',
      graderingAvslagÅrsak: '-',
      flerbarnsdager: false,
      samtidigUttak: false,
      graderingInnvilget: false,
      periodeType: 'MØDREKVOTE',
      utsettelseType: '-',
      oppholdÅrsak: '-',
    },
    {
      fom: '2019-12-16',
      tom: '2019-12-29',
      aktiviteter: [
        {
          stønadskontoType: 'MØDREKVOTE',
          prosentArbeid: 0,
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: 100,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 10,
        },
      ],
      periodeResultatType: 'INNVILGET',
      periodeResultatÅrsak: '2003',
      manuellBehandlingÅrsak: '-',
      graderingAvslagÅrsak: '-',
      flerbarnsdager: false,
      samtidigUttak: false,
      graderingInnvilget: false,
      periodeType: 'MØDREKVOTE',
      utsettelseType: '-',
      oppholdÅrsak: '-',
    },
    {
      fom: '2019-12-30',
      tom: '2020-02-02',
      aktiviteter: [
        {
          stønadskontoType: 'FEDREKVOTE',
          prosentArbeid: 0,
          arbeidsgiverReferanse: '910909088',
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 25,
        },
      ],
      periodeResultatType: 'MANUELL_BEHANDLING',
      periodeResultatÅrsak: '4007',
      manuellBehandlingÅrsak: '5002',
      graderingAvslagÅrsak: '-',
      flerbarnsdager: false,
      samtidigUttak: false,
      graderingInnvilget: false,
      periodeType: 'FEDREKVOTE',
      utsettelseType: '-',
      oppholdÅrsak: '-',
    },
  ],
  perioderAnnenpart: [],
  annenForelderHarRett: true,
  søkerErMor: true,
  aleneomsorg: false,
};

const uttakPeriodeGrense = {
  mottattDato: '2019-11-18',
  soknadsfristForForsteUttaksdato: '2020-01-31',
  soknadsperiodeStart: '2019-10-14',
  soknadsperiodeSlutt: '2020-02-02',
  antallDagerLevertForSent: -74,
};

const soknad = {
  soknadType: 'ST-001',
  mottattDato: '2019-11-18',
  fodselsdatoer: {
    1: '2019-11-04',
  } as {[key: number]: string},
} as Soknad;

const personoversikt = {
  bruker: {
    kjønn: 'K',
  },
} as Personoversikt;

const ytelsefordeling = {
  annenforelderHarRettDto: {
    avklarAnnenforelderMottarUføretrygd: false,
  },
  rettigheterAnnenforelder: {
    skalAvklareAnnenforelderUføretrygd: false,
    skalAvklareAnnenforelderStønadEØS: false,
  },
  endringsdato: '2019-10-14',
  gjeldendeDekningsgrad: 100,
  førsteUttaksdato: '2019-10-14',
};

const arbeidsgiverOpplysningerPerId = {
  910909088: {
    erPrivatPerson: false,
    identifikator: '910909088',
    navn: 'BEDRIFT AS',
  },
};

export const visProsessUttak = () => (
  <UttakProsessIndex
    behandling={behandling}
    uttaksresultatPerioder={uttaksresultatPerioder}
    uttakStonadskontoer={uttakStonadskontoer}
    aksjonspunkter={aksjonspunkter}
    familiehendelse={familiehendelse}
    soknad={soknad}
    personoversikt={personoversikt}
    uttakPeriodeGrense={uttakPeriodeGrense}
    ytelsefordeling={ytelsefordeling}
    alleKodeverk={alleKodeverk as any}
    employeeHasAccess
    submitCallback={action('button-click') as () => Promise<any>}
    isReadOnly={false}
    readOnlySubmitButton
    tempUpdateStonadskontoer={action('button-click') as (params: {
      behandlingUuid: string;
      perioder: any;
    }) => Promise<any>}
    isAksjonspunktOpen
    status="test"
    vilkar={[]}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    kreverSammenhengendeUttak={{ kreverSammenhengendeUttak: true }}
  />
);
