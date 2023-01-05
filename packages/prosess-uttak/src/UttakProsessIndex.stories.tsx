import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { AksjonspunktStatus } from '@navikt/ft-kodeverk';

import UttakProsessIndex from '@fpsak-frontend/prosess-uttak';
import {
  Behandling, FamilieHendelseSamling, Personoversikt, Soknad, UttaksresultatPeriode, UttakStonadskontoer,
} from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ProsessAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import aksjonspunktType from '@fpsak-frontend/kodeverk/src/aksjonspunktType';
import { Aksjonspunkt } from '@navikt/ft-types';

const åpentAksjonspunkt = [{
  definisjon: AksjonspunktCode.FASTSETT_UTTAKPERIODER,
  status: AksjonspunktStatus.OPPRETTET,
  toTrinnsBehandling: true,
  aksjonspunktType: aksjonspunktType.MANUELL,
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
  342352362: {
    referanse: '342352362',
    identifikator: '342352362',
    navn: 'Lagt til av saksbehandler',
    fødselsdato: null,
    erPrivatPerson: false,
  },
  910909088: {
    referanse: '910909088',
    identifikator: '910909088',
    navn: 'BEDRIFT AS',
    fødselsdato: null,
    erPrivatPerson: false,
  },
};

export default {
  title: 'prosess/prosess-uttak',
  component: UttakProsessIndex,
};

const Template: Story<{
  submitCallback?: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  stønadskontoer?: UttakStonadskontoer;
  kanOverstyre?: boolean;
  isReadOnly?: boolean;
  uttaksresultatPerioder: UttaksresultatPeriode;
  aksjonspunkter?: Aksjonspunkt[];
}> = ({
  submitCallback = action('button-click') as (data: any) => Promise<any>,
  stønadskontoer = uttakStonadskontoer,
  uttaksresultatPerioder,
  kanOverstyre = false,
  isReadOnly = false,
  aksjonspunkter = [],
}) => (
  <UttakProsessIndex
    behandling={behandling}
    uttaksresultatPerioder={uttaksresultatPerioder}
    uttakStonadskontoer={stønadskontoer}
    aksjonspunkter={aksjonspunkter}
    familiehendelse={familiehendelse}
    soknad={soknad}
    personoversikt={personoversikt}
    ytelsefordeling={ytelsefordeling}
    alleKodeverk={alleKodeverk as any}
    kanOverstyre={kanOverstyre}
    submitCallback={submitCallback}
    isReadOnly={isReadOnly}
    readOnlySubmitButton={false}
    oppdaterStønadskontoer={(v) => {
      action('button-click')(v);
      return Promise.resolve(stønadskontoer);
    }}
    isAksjonspunktOpen
    status="test"
    vilkar={[]}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
  />
);

export const PeriodeMedGraderingUtenAksjonspunkt = Template.bind({});
PeriodeMedGraderingUtenAksjonspunkt.args = {
  isReadOnly: true,
  kanOverstyre: true,
  uttaksresultatPerioder: {
    perioderSøker: [{
      fom: '2019-10-11',
      tom: '2019-10-31',
      aktiviteter: [{
        stønadskontoType: 'FORELDREPENGER_FØR_FØDSEL',
        prosentArbeid: 0,
        arbeidsforholdId: 'efaf22ef-76aa-4576-8c96-92bd31af8815',
        eksternArbeidsforholdId: 'ARB001-001',
        arbeidsgiverReferanse: '910909088',
        utbetalingsgrad: 100,
        uttakArbeidType: 'ORDINÆRT_ARBEID',
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
      mottattDato: '2019-11-01',
      gradertAktivitet: null,
    }, {
      fom: '2019-11-01',
      tom: '2019-12-12',
      aktiviteter: [{
        stønadskontoType: 'MØDREKVOTE',
        prosentArbeid: 0,
        arbeidsforholdId: 'efaf22ef-76aa-4576-8c96-92bd31af8815',
        eksternArbeidsforholdId: 'ARB001-001',
        arbeidsgiverReferanse: '910909088',
        utbetalingsgrad: 100,
        uttakArbeidType: 'ORDINÆRT_ARBEID',
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
      mottattDato: '2019-11-01',
      gradertAktivitet: null,
    }, {
      fom: '2019-12-13',
      tom: '2020-01-23',
      aktiviteter: [{
        stønadskontoType: 'MØDREKVOTE',
        prosentArbeid: 50,
        arbeidsforholdId: 'efaf22ef-76aa-4576-8c96-92bd31af8815',
        eksternArbeidsforholdId: 'ARB001-001',
        arbeidsgiverReferanse: '910909088',
        utbetalingsgrad: 50,
        uttakArbeidType: 'ORDINÆRT_ARBEID',
        gradering: true,
        trekkdagerDesimaler: 15.0,
      }],
      periodeResultatType: 'INNVILGET',
      begrunnelse: null,
      periodeResultatÅrsak: '2031',
      manuellBehandlingÅrsak: '-',
      graderingAvslagÅrsak: '-',
      flerbarnsdager: false,
      samtidigUttak: false,
      samtidigUttaksprosent: null,
      graderingInnvilget: true,
      periodeType: 'MØDREKVOTE',
      utsettelseType: '-',
      oppholdÅrsak: '-',
      mottattDato: '2019-11-01',
      gradertAktivitet: {
        stønadskontoType: 'MØDREKVOTE',
        prosentArbeid: 50,
        arbeidsforholdId: 'efaf22ef-76aa-4576-8c96-92bd31af8815',
        eksternArbeidsforholdId: 'ARB001-001',
        arbeidsgiverReferanse: '910909088',
        utbetalingsgrad: 50,
        uttakArbeidType: 'ORDINÆRT_ARBEID',
        gradering: true,
        trekkdagerDesimaler: 15.0,
      },
    }, {
      fom: '2020-01-24',
      tom: '2020-02-13',
      aktiviteter: [{
        stønadskontoType: '-',
        prosentArbeid: 100,
        arbeidsforholdId: 'efaf22ef-76aa-4576-8c96-92bd31af8815',
        eksternArbeidsforholdId: 'ARB001-001',
        arbeidsgiverReferanse: '910909088',
        utbetalingsgrad: 0,
        uttakArbeidType: 'ORDINÆRT_ARBEID',
        gradering: false,
        trekkdagerDesimaler: 0.0,
      }],
      periodeResultatType: 'INNVILGET',
      begrunnelse: null,
      periodeResultatÅrsak: '2011',
      manuellBehandlingÅrsak: '-',
      graderingAvslagÅrsak: '-',
      flerbarnsdager: false,
      samtidigUttak: false,
      samtidigUttaksprosent: null,
      graderingInnvilget: false,
      periodeType: '-',
      utsettelseType: 'ARBEID',
      oppholdÅrsak: '-',
      mottattDato: '2019-11-01',
      gradertAktivitet: null,
    }, {
      fom: '2020-02-14',
      tom: '2020-02-20',
      aktiviteter: [{
        stønadskontoType: 'FELLESPERIODE',
        prosentArbeid: 0,
        arbeidsforholdId: 'efaf22ef-76aa-4576-8c96-92bd31af8815',
        eksternArbeidsforholdId: 'ARB001-001',
        arbeidsgiverReferanse: '910909088',
        utbetalingsgrad: 100,
        uttakArbeidType: 'ORDINÆRT_ARBEID',
        gradering: false,
        trekkdagerDesimaler: 5.0,
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
      mottattDato: '2020-01-24',
      gradertAktivitet: null,
    }],
    perioderAnnenpart: [],
    annenForelderHarRett: true,
    aleneomsorg: false,
    årsakFilter: { kreverSammenhengendeUttak: true, utenMinsterett: true, søkerErMor: true },
  },
};

export const AksjonspunktIRevurdering = Template.bind({});
AksjonspunktIRevurdering.args = {
  aksjonspunkter: åpentAksjonspunkt,
  uttaksresultatPerioder: {
    perioderSøker: [{
      fom: '2019-10-11',
      tom: '2019-10-31',
      aktiviteter: [{
        stønadskontoType: 'FORELDREPENGER_FØR_FØDSEL',
        prosentArbeid: 0,
        arbeidsforholdId: '0716ce9f-d93d-40cd-a52c-c7c569995948',
        eksternArbeidsforholdId: 'ARB001-001',
        arbeidsgiverReferanse: '910909088',
        utbetalingsgrad: 100,
        uttakArbeidType: 'ORDINÆRT_ARBEID',
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
      mottattDato: '2019-09-20',
      gradertAktivitet: null,
    }, {
      fom: '2019-11-01',
      tom: '2019-12-12',
      aktiviteter: [{
        stønadskontoType: 'MØDREKVOTE',
        prosentArbeid: 0,
        arbeidsforholdId: '0716ce9f-d93d-40cd-a52c-c7c569995948',
        eksternArbeidsforholdId: 'ARB001-001',
        arbeidsgiverReferanse: '910909088',
        utbetalingsgrad: 100,
        uttakArbeidType: 'ORDINÆRT_ARBEID',
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
      mottattDato: '2019-09-20',
      gradertAktivitet: null,
    }, {
      fom: '2019-12-13',
      tom: '2019-12-26',
      aktiviteter: [{
        stønadskontoType: 'MØDREKVOTE',
        prosentArbeid: 100,
        arbeidsforholdId: '0716ce9f-d93d-40cd-a52c-c7c569995948',
        eksternArbeidsforholdId: 'ARB001-001',
        arbeidsgiverReferanse: '910909088',
        utbetalingsgrad: null,
        uttakArbeidType: 'ORDINÆRT_ARBEID',
        gradering: false,
        trekkdagerDesimaler: 10.0,
      }],
      periodeResultatType: 'MANUELL_BEHANDLING',
      begrunnelse: null,
      periodeResultatÅrsak: '4082',
      manuellBehandlingÅrsak: '5010',
      graderingAvslagÅrsak: '-',
      flerbarnsdager: false,
      samtidigUttak: false,
      samtidigUttaksprosent: null,
      graderingInnvilget: false,
      periodeType: '-',
      utsettelseType: 'ARBEID',
      oppholdÅrsak: '-',
      mottattDato: '2019-12-27',
      gradertAktivitet: null,
    }, {
      fom: '2019-12-27',
      tom: '2020-01-09',
      aktiviteter: [{
        stønadskontoType: '-',
        prosentArbeid: 100,
        arbeidsforholdId: '0716ce9f-d93d-40cd-a52c-c7c569995948',
        eksternArbeidsforholdId: 'ARB001-001',
        arbeidsgiverReferanse: '910909088',
        utbetalingsgrad: 0,
        uttakArbeidType: 'ORDINÆRT_ARBEID',
        gradering: false,
        trekkdagerDesimaler: 0.0,
      }],
      periodeResultatType: 'INNVILGET',
      begrunnelse: null,
      periodeResultatÅrsak: '2011',
      manuellBehandlingÅrsak: '-',
      graderingAvslagÅrsak: '-',
      flerbarnsdager: false,
      samtidigUttak: false,
      samtidigUttaksprosent: null,
      graderingInnvilget: false,
      periodeType: '-',
      utsettelseType: 'ARBEID',
      oppholdÅrsak: '-',
      mottattDato: '2019-12-27',
      gradertAktivitet: null,
    }],
    perioderAnnenpart: [],
    annenForelderHarRett: true,
    aleneomsorg: false,
    årsakFilter: { kreverSammenhengendeUttak: true, utenMinsterett: true, søkerErMor: true },
  },
};

export const ProsessUttakToParter = Template.bind({});
ProsessUttakToParter.args = {
  aksjonspunkter: åpentAksjonspunkt,
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
