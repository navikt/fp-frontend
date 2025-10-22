import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';
import type { DecoratorFunction } from 'storybook/internal/types';

import { alleKodeverk, withRouter } from '@navikt/fp-storybook-utils';
import type {
  BehandlingÅrsak,
  FagsakBehandlingDto,
  SkjermlenkeType,
  TotrinnskontrollSkjermlenkeContext,
} from '@navikt/fp-types';

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
  status: 'FVED',
  type: 'BT-002',
  behandlingÅrsaker: [] as BehandlingÅrsak[],
  toTrinnsBehandling: true,
  behandlingsresultat: {
    type: 'KLAGE_YTELSESVEDTAK_STADFESTET',
  },
} as FagsakBehandlingDto;

const withDiv: DecoratorFunction<ReactRenderer> = Story => (
  <div
    style={{
      width: '600px',
      margin: '50px',
      padding: '20px',
      backgroundColor: 'var(--ax-bg-default)',
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
    fagsakYtelseType: 'FP',
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
          skjermlenkeType: 'FORMKRAV_KLAGE_NFP' satisfies SkjermlenkeType,
          totrinnskontrollAksjonspunkter: [
            {
              aksjonspunktKode: '5082',
              opptjeningAktiviteter: [],
              beregningDto: {
                fastsattVarigEndringNaering: false,
                faktaOmBeregningTilfeller: ['-'],
              },
              vurderPaNyttArsaker: [],
              uttakPerioder: [],

              totrinnskontrollGodkjent: false,
            },
          ],
        },
        {
          skjermlenkeType: 'KLAGE_BEH_NFP' satisfies SkjermlenkeType,
          totrinnskontrollAksjonspunkter: [
            {
              aksjonspunktKode: '5035',
              opptjeningAktiviteter: [],
              beregningDto: {
                fastsattVarigEndringNaering: false,
                faktaOmBeregningTilfeller: ['-'],
              },
              vurderPaNyttArsaker: [],
              uttakPerioder: [],

              totrinnskontrollGodkjent: false,
            },
          ],
        },
      ] satisfies TotrinnskontrollSkjermlenkeContext[],
    },
    readOnly: false,
  },
};

export const ForSaksbehandler: Story = {
  args: {
    behandling: {
      ...DEFAULT_BEHANDLING,
      status: 'UTRED',
      totrinnskontrollÅrsaker: [
        {
          skjermlenkeType: 'FORMKRAV_KLAGE_NFP' satisfies SkjermlenkeType,
          totrinnskontrollAksjonspunkter: [
            {
              aksjonspunktKode: '5082',
              opptjeningAktiviteter: [],
              beregningDto: {
                fastsattVarigEndringNaering: false,
                faktaOmBeregningTilfeller: ['-'],
              },
              besluttersBegrunnelse: 'Denne er ikke godkjent fordi...',
              totrinnskontrollGodkjent: false,
              vurderPaNyttArsaker: ['FEIL_LOV', 'FEIL_FAKTA'],
              uttakPerioder: [],
            },
          ],
        },
        {
          skjermlenkeType: 'KLAGE_BEH_NFP' satisfies SkjermlenkeType,
          totrinnskontrollAksjonspunkter: [
            {
              aksjonspunktKode: '5035',
              opptjeningAktiviteter: [],
              beregningDto: {
                fastsattVarigEndringNaering: false,
                faktaOmBeregningTilfeller: ['-'],
              },
              totrinnskontrollGodkjent: true,
              uttakPerioder: [],

              vurderPaNyttArsaker: [],
            },
          ],
        },
      ] satisfies TotrinnskontrollSkjermlenkeContext[],
    },
    readOnly: true,
  },
};
