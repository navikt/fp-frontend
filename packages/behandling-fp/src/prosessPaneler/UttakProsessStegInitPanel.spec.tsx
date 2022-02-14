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
          stønadskontoType: 'FORELDREPENGER_FØR_FØDSEL',
          prosentArbeid: 0,
          arbeidsforholdId: null,
          eksternArbeidsforholdId: null,
          arbeidsgiverReferanse: '910909088',
          utbetalingsgrad: 100,
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          gradering: false,
          trekkdagerDesimaler: 15,
        },
      ],
      periodeResultatType: 'INNVILGET',
      begrunnelse: null,
      periodeUtfallÅrsak: '2006',
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
      gradertAktivitet: null,
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
  sprakkode: 'NO',
  type: behandlingType.FORSTEGANGSSOKNAD,
  status: behandlingStatus.OPPRETTET,
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
      definisjon: aksjonspunktCodes.FASTSETT_UTTAKPERIODER,
      erAktivt: true,
      kanLoses: true,
      status: aksjonspunktStatus.OPPRETTET,
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
              kjønn: KjønnkodeEnum.KVINNE,
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
