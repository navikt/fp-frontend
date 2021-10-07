import React from 'react';
import { render, screen } from '@testing-library/react';

import * as Felles from '@fpsak-frontend/behandling-felles/src/utils/prosess/useStandardProsessPanelProps';
import {
  AksessRettigheter, Aksjonspunkt, Behandling, KjønnkodeEnum, Personoversikt, Stonadskonto, UttaksresultatPeriode, UttakStonadskontoer,
} from '@fpsak-frontend/types';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';

import { requestFpApi, FpBehandlingApiKeys } from '../data/fpBehandlingApi';
import UttakProsessStegInitPanel from './UttakProsessStegInitPanel';

const stonadskonto = {
  FORELDREPENGER_FØR_FØDSEL: {
    saldo: 30,
    maxDager: 30,
    aktivitetSaldoDtoList: [
    ],
  } as Stonadskonto,
  FELLESPERIODE: {
    saldo: 30,
    maxDager: 30,
    aktivitetSaldoDtoList: [
    ],
  } as Stonadskonto,
  MØDREKVOTE: {
    saldo: 40,
    maxDager: 30,
    aktivitetSaldoDtoList: [
    ],
  } as Stonadskonto,
  FEDREKVOTE: {
    saldo: 20,
    maxDager: 30,
    aktivitetSaldoDtoList: [
    ],
  } as Stonadskonto,
} as UttakStonadskontoer['stonadskontoer'];

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
  uuid: 'test-uuid',
  versjon: 1,
  behandlingÅrsaker: [],
  sprakkode: {
    kode: 'NO',
  },
  type: {
    kode: behandlingType.FORSTEGANGSSOKNAD,
    kodeverk: '',
  },
  status: {
    kode: behandlingStatus.OPPRETTET,
    kodeverk: '',
  },
  behandlingsresultat: {
  } as Behandling['behandlingsresultat'],
} as Behandling;

const lagRestApiMockData = () => [
  { key: FpBehandlingApiKeys.AKSJONSPUNKTER.name, data: [] },
  { key: FpBehandlingApiKeys.VILKAR.name, data: {} },
  {
    key: FpBehandlingApiKeys.SOKNAD.name,
    data: {
      soknadType: {
        kode: soknadType.FODSEL,
        kodeverk: '',
      },
      mottattDato: '2019-01-01',
    },
  },
  { key: FpBehandlingApiKeys.UTTAKSRESULTAT_PERIODER.name, data: uttaksresultatPerioder },
  { key: FpBehandlingApiKeys.UTTAK_PERIODE_GRENSE.name, data: {} },
  {
    key: FpBehandlingApiKeys.FAMILIEHENDELSE.name,
    data: {
      gjeldende: {
        brukAntallBarnFraTps: true,
        avklartBarn: [{
          fodselsdato: '2019-01-01',
        }],
      },
    },
  },
  { key: FpBehandlingApiKeys.YTELSEFORDELING.name, data: {} },
  { key: FpBehandlingApiKeys.UTTAK_STONADSKONTOER.name, data: { stonadskontoer: stonadskonto } },
  { key: FpBehandlingApiKeys.KREVER_SAMMENHENGENDE_UTTAK.name, data: { kreverSammenhengendeUttak: false } },
  { key: FpBehandlingApiKeys.STONADSKONTOER_GITT_UTTAKSPERIODER.name, data: undefined },
];

// @ts-ignore Fiks
const kodeverk = alleKodeverk as AlleKodeverk;

describe('<UttakProsessStegInitPanel>', () => {
  const submitCallback = jest.fn();
  jest.spyOn(Felles, 'default').mockImplementation(() => ({
    behandling,
    alleMerknaderFraBeslutter: {},
    submitCallback,
    status: vilkarUtfallType.IKKE_VURDERT,
    alleKodeverk: kodeverk,
    isReadOnly: false,
    readOnlySubmitButton: false,
    aksjonspunkter: [{
      definisjon: {
        kode: aksjonspunktCodes.FASTSETT_UTTAKPERIODER,
        kodeverk: '',
      },
      erAktivt: true,
      kanLoses: true,
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
    }] as Aksjonspunkt[],
    vilkar: [],
    isAksjonspunktOpen: true,
    setFormData: () => undefined,
  }));

  it('skal rendre komponent', async () => {
    const data = lagRestApiMockData();
    render(
      <RestApiMock data={data} requestApi={requestFpApi}>
        <UttakProsessStegInitPanel
          valgtProsessSteg="default"
          registrerProsessPanel={() => {}}
          arbeidsgiverOpplysningerPerId={{}}
          personoversikt={{
            bruker: {
              kjønn: {
                kode: KjønnkodeEnum.KVINNE,
                kodeverk: '',
              },
            },
          } as Personoversikt}
          rettigheter={{
            kanOverstyreAccess: {
              isEnabled: true,
            },
          } as AksessRettigheter}
          behandling={behandling}
        />
      </RestApiMock>,
    );

    expect(await screen.findAllByText('Uttak')).toHaveLength(2);
    expect(screen.getByText('Disponible stønadsdager (u/d)')).toBeInTheDocument();
  });
});
