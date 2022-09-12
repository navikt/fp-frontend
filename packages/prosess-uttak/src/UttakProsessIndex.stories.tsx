import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import UttakProsessIndex from '@fpsak-frontend/prosess-uttak';
import {
  Behandling, FamilieHendelseSamling, Personoversikt, Soknad, UttaksresultatPeriode, UttakStonadskontoer,
} from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { ProsessAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

const aksjonspunkter = [{
  definisjon: '5071',
  status: 'OPPR',
  toTrinnsBehandling: true,
  aksjonspunktType: 'MANU',
  kanLoses: true,
  erAktivt: true,
}];

const familiehendelse = {
  gjeldende: {
    skjaringstidspunkt: '2019-11-04',
    avklartBarn: [{
      fodselsdato: '2019-11-04',
    }],
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
      aktivitetSaldoDtoList: [{
        aktivitetIdentifikator: {
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          arbeidsgiverReferanse: '910909088',
        },
        saldo: 50,
      }],
      gyldigForbruk: true,
    },
    MØDREKVOTE: {
      stonadskontotype: 'MØDREKVOTE',
      maxDager: 75,
      saldo: 35,
      aktivitetSaldoDtoList: [{
        aktivitetIdentifikator: {
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          arbeidsgiverReferanse: '910909088',
        },
        saldo: 35,
      }],
      gyldigForbruk: true,
    },
    FELLESPERIODE: {
      stonadskontotype: 'FELLESPERIODE',
      maxDager: 80,
      saldo: 80,
      aktivitetSaldoDtoList: [{
        aktivitetIdentifikator: {
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          arbeidsgiverReferanse: '910909088',
        },
        saldo: 80,
      }],
      gyldigForbruk: true,
    },
    FORELDREPENGER_FØR_FØDSEL: {
      stonadskontotype: 'FORELDREPENGER_FØR_FØDSEL',
      maxDager: 15,
      saldo: 0,
      aktivitetSaldoDtoList: [{
        aktivitetIdentifikator: {
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          arbeidsgiverReferanse: '910909088',
        },
        saldo: 0,
      }],
      gyldigForbruk: true,
    },
  },
} as UttakStonadskontoer;

const soknad = {
  soknadType: 'ST-001',
  mottattDato: '2019-11-18',
  fodselsdatoer: {
    1: '2019-11-04',
  } as {[key: number]: string},
  søknadsfrist: {
    mottattDato: '2019-11-18',
    utledetSøknadsfrist: '2020-01-31',
    søknadsperiodeStart: '2019-10-14',
    søknadsperiodeSlutt: '2020-02-02',
    dagerOversittetFrist: -74,
  },
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
    skalAvklareAnnenForelderRettEØS: false,
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

export default {
  title: 'prosess/prosess-uttak',
  component: UttakProsessIndex,
};

const Template: Story<{
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  uttaksresultatPerioder: UttaksresultatPeriode;
}> = ({
  submitCallback,
  uttaksresultatPerioder,
}) => (
  <UttakProsessIndex
    behandling={behandling}
    uttaksresultatPerioder={uttaksresultatPerioder}
    uttakStonadskontoer={uttakStonadskontoer}
    aksjonspunkter={aksjonspunkter}
    familiehendelse={familiehendelse}
    soknad={soknad}
    personoversikt={personoversikt}
    ytelsefordeling={ytelsefordeling}
    alleKodeverk={alleKodeverk as any}
    employeeHasAccess
    submitCallback={submitCallback}
    isReadOnly={false}
    readOnlySubmitButton={false}
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
  />
);

export const ProsessUttak = Template.bind({});
ProsessUttak.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  uttaksresultatPerioder: {
    perioderSøker: [{
      fom: '2019-10-14',
      tom: '2019-11-03',
      aktiviteter: [{
        stønadskontoType: 'FORELDREPENGER_FØR_FØDSEL',
        prosentArbeid: 0,
        arbeidsgiverReferanse: '910909088',
        utbetalingsgrad: 100,
        uttakArbeidType: 'ORDINÆRT_ARBEID',
        gradering: false,
        trekkdagerDesimaler: 15,
      }],
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
    }, {
      fom: '2019-11-04',
      tom: '2019-12-15',
      aktiviteter: [{
        stønadskontoType: 'MØDREKVOTE',
        prosentArbeid: 0,
        arbeidsgiverReferanse: '910909088',
        utbetalingsgrad: 100,
        uttakArbeidType: 'ORDINÆRT_ARBEID',
        gradering: false,
        trekkdagerDesimaler: 30,
      }],
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
      aktiviteter: [{
        stønadskontoType: 'MØDREKVOTE',
        prosentArbeid: 0,
        arbeidsgiverReferanse: '910909088',
        utbetalingsgrad: 100,
        uttakArbeidType: 'ORDINÆRT_ARBEID',
        gradering: false,
        trekkdagerDesimaler: 10,
      }],
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
    }, {
      fom: '2019-12-30',
      tom: '2020-02-02',
      aktiviteter: [{
        stønadskontoType: 'FEDREKVOTE',
        prosentArbeid: 0,
        arbeidsgiverReferanse: '910909088',
        uttakArbeidType: 'ORDINÆRT_ARBEID',
        gradering: false,
        trekkdagerDesimaler: 25,
      }],
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
    }],
    perioderAnnenpart: [],
    annenForelderHarRett: true,
    aleneomsorg: false,
    årsakFilter: {
      kreverSammenhengendeUttak: false,
      utenMinsterett: false,
      søkerErMor: true,
    },
  },
};

export const ProsessUttakToParter = Template.bind({});
ProsessUttakToParter.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  uttaksresultatPerioder: {
    perioderSøker: [{
      fom: '2022-04-04',
      tom: '2022-04-15',
      aktiviteter: [{
        stønadskontoType: 'FEDREKVOTE',
        prosentArbeid: 0,
        arbeidsforholdId: null,
        eksternArbeidsforholdId: null,
        arbeidsgiverReferanse: '896929119',
        utbetalingsgrad: 100,
        uttakArbeidType: 'ORDINÆRT_ARBEID',
        gradering: false,
        trekkdagerDesimaler: 10.0,
      }],
      periodeResultatType: 'INNVILGET',
      begrunnelse: null,
      periodeResultatÅrsak: '2003',
      manuellBehandlingÅrsak: '-',
      graderingAvslagÅrsak: '-',
      flerbarnsdager: false,
      samtidigUttak: true,
      samtidigUttaksprosent: 100,
      graderingInnvilget: false,
      periodeType: 'FEDREKVOTE',
      utsettelseType: '-',
      oppholdÅrsak: '-',
      mottattDato: '2022-07-04',
      gradertAktivitet: null,
    }, {
      fom: '2022-07-18',
      tom: '2022-07-29',
      aktiviteter: [{
        stønadskontoType: 'FELLESPERIODE',
        prosentArbeid: 0,
        arbeidsforholdId: null,
        eksternArbeidsforholdId: null,
        arbeidsgiverReferanse: '896929119',
        utbetalingsgrad: 100,
        uttakArbeidType: 'ORDINÆRT_ARBEID',
        gradering: false,
        trekkdagerDesimaler: 10.0,
      }],
      periodeResultatType: 'INNVILGET',
      begrunnelse: null,
      periodeResultatÅrsak: '2002',
      manuellBehandlingÅrsak: '-',
      graderingAvslagÅrsak: '-',
      flerbarnsdager: false,
      samtidigUttak: false,
      samtidigUttaksprosent: null,
      graderingInnvilget: false,
      periodeType: 'FELLESPERIODE',
      utsettelseType: '-',
      oppholdÅrsak: '-',
      mottattDato: '2022-07-04',
      gradertAktivitet: null,
    }],
    perioderAnnenpart: [{
      fom: '2022-03-14',
      tom: '2022-04-01',
      aktiviteter: [{
        stønadskontoType: 'FORELDREPENGER_FØR_FØDSEL',
        prosentArbeid: 0,
        arbeidsforholdId: null,
        eksternArbeidsforholdId: null,
        arbeidsgiverReferanse: null,
        utbetalingsgrad: 100,
        uttakArbeidType: 'FRILANS',
        gradering: false,
        trekkdagerDesimaler: 15.0,
      }],
      periodeResultatType: 'INNVILGET',
      begrunnelse: null,
      periodeResultatÅrsak: '2006',
      manuellBehandlingÅrsak: '-',
      graderingAvslagÅrsak: '-',
      flerbarnsdager: false,
      samtidigUttak: false,
      samtidigUttaksprosent: null,
      graderingInnvilget: false,
      periodeType: 'FORELDREPENGER_FØR_FØDSEL',
      utsettelseType: '-',
      oppholdÅrsak: '-',
      mottattDato: '2022-06-22',
      gradertAktivitet: null,
    }, {
      fom: '2022-04-04',
      tom: '2022-05-15',
      aktiviteter: [{
        stønadskontoType: 'MØDREKVOTE',
        prosentArbeid: 0,
        arbeidsforholdId: null,
        eksternArbeidsforholdId: null,
        arbeidsgiverReferanse: null,
        utbetalingsgrad: 100,
        uttakArbeidType: 'FRILANS',
        gradering: false,
        trekkdagerDesimaler: 30.0,
      }],
      periodeResultatType: 'INNVILGET',
      begrunnelse: null,
      periodeResultatÅrsak: '2003',
      manuellBehandlingÅrsak: '-',
      graderingAvslagÅrsak: '-',
      flerbarnsdager: false,
      samtidigUttak: false,
      samtidigUttaksprosent: null,
      graderingInnvilget: false,
      periodeType: 'MØDREKVOTE',
      utsettelseType: '-',
      oppholdÅrsak: '-',
      mottattDato: '2022-06-22',
      gradertAktivitet: null,
    }, {
      fom: '2022-05-16',
      tom: '2022-07-15',
      aktiviteter: [{
        stønadskontoType: 'MØDREKVOTE',
        prosentArbeid: 0,
        arbeidsforholdId: null,
        eksternArbeidsforholdId: null,
        arbeidsgiverReferanse: null,
        utbetalingsgrad: 100,
        uttakArbeidType: 'FRILANS',
        gradering: false,
        trekkdagerDesimaler: 45.0,
      }],
      periodeResultatType: 'INNVILGET',
      begrunnelse: null,
      periodeResultatÅrsak: '2003',
      manuellBehandlingÅrsak: '-',
      graderingAvslagÅrsak: '-',
      flerbarnsdager: false,
      samtidigUttak: false,
      samtidigUttaksprosent: null,
      graderingInnvilget: false,
      periodeType: 'MØDREKVOTE',
      utsettelseType: '-',
      oppholdÅrsak: '-',
      mottattDato: '2022-06-22',
      gradertAktivitet: null,
    }, {
      fom: '2022-07-18',
      tom: '2022-11-04',
      aktiviteter: [{
        stønadskontoType: 'FELLESPERIODE',
        prosentArbeid: 0,
        arbeidsforholdId: null,
        eksternArbeidsforholdId: null,
        arbeidsgiverReferanse: null,
        utbetalingsgrad: 100,
        uttakArbeidType: 'FRILANS',
        gradering: false,
        trekkdagerDesimaler: 80.0,
      }],
      periodeResultatType: 'INNVILGET',
      begrunnelse: null,
      periodeResultatÅrsak: '2002',
      manuellBehandlingÅrsak: '-',
      graderingAvslagÅrsak: '-',
      flerbarnsdager: false,
      samtidigUttak: false,
      samtidigUttaksprosent: null,
      graderingInnvilget: false,
      periodeType: 'FELLESPERIODE',
      utsettelseType: '-',
      oppholdÅrsak: '-',
      mottattDato: '2022-06-22',
      gradertAktivitet: null,
    }],
    annenForelderHarRett: true,
    aleneomsorg: false,
    årsakFilter: {
      kreverSammenhengendeUttak: false,
      utenMinsterett: false,
      søkerErMor: false,
    },
  },
};
