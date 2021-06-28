import React from 'react';
import { action } from '@storybook/addon-actions';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import TotrinnskontrollSakIndex from '@fpsak-frontend/sak-totrinnskontroll';
import {
  Behandling, BehandlingÅrsak, KlageVurdering, TotrinnskontrollSkjermlenkeContext,
} from '@fpsak-frontend/types';

import withRouterProvider from '../../decorators/withRouter';

import alleKodeverk from '../mocks/alleKodeverk.json';

const data = [{
  skjermlenkeType: 'FORMKRAV_KLAGE_NFP',
  totrinnskontrollAksjonspunkter: [{
    aksjonspunktKode: '5082',
    opptjeningAktiviteter: [],
    beregningDto: {
      fastsattVarigEndringNaering: false,
      faktaOmBeregningTilfeller: [{
        kode: '',
        kodeverk: '',
      }],
    },
    vurderPaNyttArsaker: [],
    uttakPerioder: [],
    arbeidforholdDtos: [],
  }],
}] as TotrinnskontrollSkjermlenkeContext[];

const dataReadOnly = [{
  skjermlenkeType: 'FORMKRAV_KLAGE_NFP',
  totrinnskontrollAksjonspunkter: [
    {
      aksjonspunktKode: '5082',
      opptjeningAktiviteter: [],
      beregningDto: {
        fastsattVarigEndringNaering: false,
        faktaOmBeregningTilfeller: [{
          kode: '',
          kodeverk: '',
        }],
      },
      besluttersBegrunnelse: 'asdfa',
      totrinnskontrollGodkjent: false,
      vurderPaNyttArsaker: [
        {
          kode: 'FEIL_REGEL',
          kodeverk: '',
        },
        {
          kode: 'FEIL_FAKTA',
          kodeverk: '',
        },
      ],
      uttakPerioder: [],
      arbeidforholdDtos: [],
    },
  ],
}] as TotrinnskontrollSkjermlenkeContext[];

const location = {
  pathname: '', search: '', state: {}, hash: '',
};

const behandling = {
  uuid: '1',
  versjon: 2,
  status: {
    kode: behandlingStatus.FATTER_VEDTAK,
    kodeverk: '',
  },
  type: {
    kode: behandlingType.FORSTEGANGSSOKNAD,
    kodeverk: '',
  },
  behandlingÅrsaker: [] as BehandlingÅrsak[],
  toTrinnsBehandling: true,
} as Behandling;

export default {
  title: 'sak/sak-totrinnskontroll',
  component: TotrinnskontrollSakIndex,
  decorators: [withRouterProvider],
};

export const visTotrinnskontrollForBeslutter = () => (
  <div style={{
    width: '600px', margin: '50px', padding: '20px', backgroundColor: 'white',
  }}
  >
    <TotrinnskontrollSakIndex
      behandling={behandling}
      totrinnskontrollSkjermlenkeContext={data}
      location={location}
      readOnly={false}
      onSubmit={action('button-click') as any}
      forhandsvisVedtaksbrev={action('button-click')}
      fagsakYtelseType={{
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: '',
      }}
      behandlingKlageVurdering={{
        klageVurderingResultatNFP: {
          klageVurdering: {
            kode: 'STADFESTE_YTELSESVEDTAK',
            kodeverk: '',
          },
        },
      } as KlageVurdering}
      alleKodeverk={alleKodeverk as any}
      createLocationForSkjermlenke={() => location}
      setBeslutterForData={() => undefined}
    />
  </div>
);

export const visTotrinnskontrollForSaksbehandler = () => (
  <div style={{
    width: '600px', margin: '50px', padding: '20px', backgroundColor: 'white',
  }}
  >
    <TotrinnskontrollSakIndex
      behandling={{
        ...behandling,
        status: {
          kode: behandlingStatus.BEHANDLING_UTREDES,
          kodeverk: '',
        },
      }}
      totrinnskontrollSkjermlenkeContext={dataReadOnly}
      location={location}
      readOnly
      onSubmit={action('button-click') as any}
      forhandsvisVedtaksbrev={action('button-click')}
      fagsakYtelseType={{
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: '',
      }}
      behandlingKlageVurdering={{
        klageVurderingResultatNFP: {
          klageVurdering: {
            kode: 'STADFESTE_YTELSESVEDTAK',
            kodeverk: '',
          },
        },
      } as KlageVurdering}
      alleKodeverk={alleKodeverk as any}
      createLocationForSkjermlenke={() => location}
      setBeslutterForData={() => undefined}
    />
  </div>
);
