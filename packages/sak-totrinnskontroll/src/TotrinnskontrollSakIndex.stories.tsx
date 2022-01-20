import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import TotrinnskontrollSakIndex from '@fpsak-frontend/sak-totrinnskontroll';
import {
  Behandling, BehandlingÅrsak, KlageVurdering, TotrinnskontrollSkjermlenkeContext,
} from '@fpsak-frontend/types';
import { withRouter, alleKodeverk } from '@fpsak-frontend/storybook-utils';

const location = {
  key: '1', pathname: '', search: '', state: {}, hash: '',
};

const defaultBehandling = {
  uuid: '1',
  versjon: 2,
  status: behandlingStatus.FATTER_VEDTAK,
  type: behandlingType.FORSTEGANGSSOKNAD,
  behandlingÅrsaker: [] as BehandlingÅrsak[],
  toTrinnsBehandling: true,
} as Behandling;

export default {
  title: 'sak/sak-totrinnskontroll',
  component: TotrinnskontrollSakIndex,
  decorators: [withRouter],
};

const Template: Story<{
  lagre: (data: any) => Promise<void>,
  behandling: Behandling,
  totrinnskontrollSkjermlenkeContext: TotrinnskontrollSkjermlenkeContext[],
  readOnly: boolean,
}> = ({
  behandling,
  totrinnskontrollSkjermlenkeContext,
  readOnly,
  lagre,
}) => (
  <div style={{
    width: '600px', margin: '50px', padding: '20px', backgroundColor: 'white',
  }}
  >
    <TotrinnskontrollSakIndex
      behandling={behandling}
      totrinnskontrollSkjermlenkeContext={totrinnskontrollSkjermlenkeContext}
      location={location}
      readOnly={readOnly}
      onSubmit={lagre}
      forhandsvisVedtaksbrev={action('button-click')}
      fagsakYtelseType={fagsakYtelseType.FORELDREPENGER}
      behandlingKlageVurdering={{
        klageVurderingResultatNFP: {
          klageVurdering: 'STADFESTE_YTELSESVEDTAK',
        },
      } as KlageVurdering}
      alleKodeverk={alleKodeverk as any}
      createLocationForSkjermlenke={() => location}
      setBeslutterForData={() => undefined}
    />
  </div>
);

export const ForBeslutter = Template.bind({});
ForBeslutter.args = {
  lagre: action('button-click') as any,
  behandling: defaultBehandling,
  totrinnskontrollSkjermlenkeContext: [{
    skjermlenkeType: 'FORMKRAV_KLAGE_NFP',
    totrinnskontrollAksjonspunkter: [{
      aksjonspunktKode: '5082',
      opptjeningAktiviteter: [],
      beregningDto: {
        fastsattVarigEndringNaering: false,
        faktaOmBeregningTilfeller: [''],
      },
      vurderPaNyttArsaker: [],
      uttakPerioder: [],
      arbeidforholdDtos: [],
    }],
  }, {
    skjermlenkeType: 'KLAGE_BEH_NFP',
    totrinnskontrollAksjonspunkter: [{
      aksjonspunktKode: '5035',
      opptjeningAktiviteter: [],
      beregningDto: {
        fastsattVarigEndringNaering: false,
        faktaOmBeregningTilfeller: [''],
      },
      vurderPaNyttArsaker: [],
      uttakPerioder: [],
      arbeidforholdDtos: [],
    }],
  }] as TotrinnskontrollSkjermlenkeContext[],
  readOnly: false,
};

export const ForSaksbehandler = Template.bind({});
ForSaksbehandler.args = {
  lagre: action('button-click') as any,
  behandling: {
    ...defaultBehandling,
    status: behandlingStatus.BEHANDLING_UTREDES,
  },
  totrinnskontrollSkjermlenkeContext: [{
    skjermlenkeType: 'FORMKRAV_KLAGE_NFP',
    totrinnskontrollAksjonspunkter: [{
      aksjonspunktKode: '5082',
      opptjeningAktiviteter: [],
      beregningDto: {
        fastsattVarigEndringNaering: false,
        faktaOmBeregningTilfeller: [''],
      },
      besluttersBegrunnelse: 'Denne er ikke godkjent fordi...',
      totrinnskontrollGodkjent: false,
      vurderPaNyttArsaker: ['FEIL_REGEL', 'FEIL_FAKTA'],
      uttakPerioder: [],
      arbeidforholdDtos: [],
    }],
  }, {
    skjermlenkeType: 'KLAGE_BEH_NFP',
    totrinnskontrollAksjonspunkter: [{
      aksjonspunktKode: '5035',
      opptjeningAktiviteter: [],
      beregningDto: {
        fastsattVarigEndringNaering: false,
        faktaOmBeregningTilfeller: [''],
      },
      totrinnskontrollGodkjent: true,
      uttakPerioder: [],
      arbeidforholdDtos: [],
    }],
  }] as TotrinnskontrollSkjermlenkeContext[],
  readOnly: true,
};
