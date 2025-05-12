import { action } from '@storybook/addon-actions';
import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import type { DecoratorFunction } from '@storybook/types';

import { BehandlingResultatType, BehandlingStatus, BehandlingType, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { alleKodeverk, withRouter } from '@navikt/fp-storybook-utils';
import type { BehandlingAppKontekst, BehandlingÅrsak, TotrinnskontrollSkjermlenkeContext } from '@navikt/fp-types';

import { type ApData, TotrinnskontrollSakIndex } from './TotrinnskontrollSakIndex';

const LOCATION = {
  key: '1',
  pathname: '',
  search: '',
  state: {},
  hash: '',
};

const DEFAULT_BEHANDLING = {
  uuid: '1',
  versjon: 2,
  status: BehandlingStatus.FATTER_VEDTAK,
  type: BehandlingType.FORSTEGANGSSOKNAD,
  behandlingÅrsaker: [] as BehandlingÅrsak[],
  toTrinnsBehandling: true,
  behandlingsresultat: {
    type: BehandlingResultatType.KLAGE_YTELSESVEDTAK_STADFESTET,
  },
} as BehandlingAppKontekst;

const withDiv: DecoratorFunction<ReactRenderer> = Story => (
  <div
    style={{
      width: '600px',
      margin: '50px',
      padding: '20px',
      backgroundColor: 'white',
    }}
  >
    <Story />
  </div>
);

const meta = {
  title: 'sak/sak-totrinnskontroll',
  component: TotrinnskontrollSakIndex,
  args: {
    onSubmit: action('button-click') as (params: ApData) => Promise<void>,
    location: LOCATION,
    forhandsvisVedtaksbrev: action('button-click'),
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    alleKodeverk: alleKodeverk,
    createLocationForSkjermlenke: () => LOCATION,
    setBeslutterFormData: () => undefined,
  },
  decorators: [withRouter, withDiv],
} satisfies Meta<typeof TotrinnskontrollSakIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ForBeslutter: Story = {
  args: {
    behandling: {
      ...DEFAULT_BEHANDLING,
      totrinnskontrollÅrsaker: [
        {
          skjermlenkeType: 'FORMKRAV_KLAGE_NFP',
          totrinnskontrollAksjonspunkter: [
            {
              aksjonspunktKode: '5082',
              opptjeningAktiviteter: [],
              beregningDto: {
                fastsattVarigEndringNaering: false,
                faktaOmBeregningTilfeller: [''],
              },
              vurderPaNyttArsaker: [],
              uttakPerioder: [],
            },
          ],
        },
        {
          skjermlenkeType: 'KLAGE_BEH_NFP',
          totrinnskontrollAksjonspunkter: [
            {
              aksjonspunktKode: '5035',
              opptjeningAktiviteter: [],
              beregningDto: {
                fastsattVarigEndringNaering: false,
                faktaOmBeregningTilfeller: [''],
              },
              vurderPaNyttArsaker: [],
              uttakPerioder: [],
              arbeidforholdDtos: [],
            },
          ],
        },
      ] as TotrinnskontrollSkjermlenkeContext[],
    },
    readOnly: false,
  },
};

export const ForSaksbehandler: Story = {
  args: {
    behandling: {
      ...DEFAULT_BEHANDLING,
      status: BehandlingStatus.BEHANDLING_UTREDES,
      totrinnskontrollÅrsaker: [
        {
          skjermlenkeType: 'FORMKRAV_KLAGE_NFP',
          totrinnskontrollAksjonspunkter: [
            {
              aksjonspunktKode: '5082',
              opptjeningAktiviteter: [],
              beregningDto: {
                fastsattVarigEndringNaering: false,
                faktaOmBeregningTilfeller: [''],
              },
              besluttersBegrunnelse: 'Denne er ikke godkjent fordi...',
              totrinnskontrollGodkjent: false,
              vurderPaNyttArsaker: ['FEIL_LOV', 'FEIL_FAKTA'],
              uttakPerioder: [],
              arbeidforholdDtos: [],
            },
          ],
        },
        {
          skjermlenkeType: 'KLAGE_BEH_NFP',
          totrinnskontrollAksjonspunkter: [
            {
              aksjonspunktKode: '5035',
              opptjeningAktiviteter: [],
              beregningDto: {
                fastsattVarigEndringNaering: false,
                faktaOmBeregningTilfeller: [''],
              },
              totrinnskontrollGodkjent: true,
              uttakPerioder: [],
            },
          ],
        },
      ] as TotrinnskontrollSkjermlenkeContext[],
    },
    readOnly: true,
  },
};
