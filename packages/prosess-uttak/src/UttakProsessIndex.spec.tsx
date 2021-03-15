import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt, Behandling, Fagsak, FamilieHendelseSamling, Personoversikt,
  Soknad, UttakPeriodeGrense, UttaksresultatPeriode, UttakStonadskontoer, Ytelsefordeling,
} from '@fpsak-frontend/types';

import UttakPanel from './components/UttakPanel';
import UttakProsessIndex from './UttakProsessIndex';

describe('<UttakProsessIndex>', () => {
  const fagsak = {
    saksnummer: '123',
    fagsakYtelseType: {
      kode: fagsakYtelseType.FORELDREPENGER,
    },
  } as Fagsak;

  const uttaksresultatPerioder = {
    perioderSøker: [
      {
        fom: '2019-10-05',
        tom: '2019-10-25',
        aktiviteter: [
          {
            stønadskontoType: {
              kode: 'FORELDREPENGER_FØR_FØDSEL',
              kodeverk: 'STOENADSKONTOTYPE',
            },
            prosentArbeid: 0,
            arbeidsforholdId: null,
            eksternArbeidsforholdId: null,
            arbeidsgiverReferanse: '910909088',
            utbetalingsgrad: 100,
            uttakArbeidType: {
              kode: 'ORDINÆRT_ARBEID',
              kodeverk: 'UTTAK_ARBEID_TYPE',
            },
            gradering: false,
            trekkdagerDesimaler: 15,
          },
        ],
        periodeResultatType: {
          kode: 'INNVILGET',
          kodeverk: 'PERIODE_RESULTAT_TYPE',
        },
        begrunnelse: null,
        periodeResultatÅrsak: {
          kode: '2006',
          navn: '§14-10: Innvilget foreldrepenger før fødsel',
          kodeverk: 'INNVILGET_AARSAK',
          gyldigFom: '2000-01-01',
          gyldigTom: '9999-12-31',
        },
        manuellBehandlingÅrsak: {
          kode: '-',
          kodeverk: 'MANUELL_BEHANDLING_AARSAK',
        },
        graderingAvslagÅrsak: {
          kode: '-',
          navn: 'Ikke definert',
          kodeverk: 'GRADERING_AVSLAG_AARSAK',
          gyldigFom: '2000-01-01',
          gyldigTom: '9999-12-31',
        },
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: null,
        graderingInnvilget: false,
        periodeType: {
          kode: 'FORELDREPENGER_FØR_FØDSEL',
          kodeverk: 'UTTAK_PERIODE_TYPE',
        },
        utsettelseType: {
          kode: '-',
          kodeverk: 'UTTAK_UTSETTELSE_TYPE',
        },
        oppholdÅrsak: {
          kode: '-',
          kodeverk: 'OPPHOLD_AARSAK_TYPE',
        },
        gradertAktivitet: null,
        graderingsAvslagÅrsakLovhjemmel: null,
      },
    ],
    perioderAnnenpart: [],
    annenForelderHarRett: true,
    aleneomsorg: false,
  } as UttaksresultatPeriode;

  const behandling = {
    id: 1,
    versjon: 1,
    sprakkode: {
      kode: 'NO',
    },
    type: {
      kode: '1',
      kodeverk: '1',
    },
    behandlingsresultat: {
    } as Behandling['behandlingsresultat'],
    status: {
      kode: '1',
      kodeverk: '1',
    },
  } as Behandling;

  const aksjonspunkter = [{
    definisjon: {
      kode: aksjonspunktCodes.VURDER_FEILUTBETALING,
    },
    status: {
      kode: '1',
      kodeverk: '1',
    },
  }] as Aksjonspunkt[];

  const arbeidsgiverOpplysningerPerId = {
    910909088: {
      erPrivatPerson: false,
      identifikator: '910909088',
      navn: 'BEDRIFT AS',
    },
  };

  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<UttakProsessIndex
      fagsak={fagsak}
      behandling={behandling}
      aksjonspunkter={aksjonspunkter}
      submitCallback={sinon.spy()}
      isReadOnly={false}
      readOnlySubmitButton={false}
      isAksjonspunktOpen
      uttakStonadskontoer={{} as UttakStonadskontoer}
      soknad={{} as Soknad}
      familiehendelse={{} as FamilieHendelseSamling}
      uttaksresultatPerioder={uttaksresultatPerioder}
      personoversikt={{} as Personoversikt}
      alleKodeverk={{}}
      employeeHasAccess
      tempUpdateStonadskontoer={sinon.spy()}
      uttakPeriodeGrense={{} as UttakPeriodeGrense}
      ytelsefordeling={{} as Ytelsefordeling}
      status=""
      vilkar={[]}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      alleMerknaderFraBeslutter={{}}
    />);
    expect(wrapper.find(UttakPanel)).toHaveLength(1);
  });
});
