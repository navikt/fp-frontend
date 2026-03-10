import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { alleKodeverk, lagAksjonspunkt, lagBehandling, withQueryClient } from '@navikt/fp-storybook-utils';

import { BehandlingPaVent } from './BehandlingPaVent';

const link = {
  href: '/fpsak/api/behandlinger/endre-pa-vent',
  rel: 'endre-pa-vent',
  type: 'POST',
} as const;

const meta = {
  title: 'app/BehandlingPaVent',
  component: BehandlingPaVent,
  decorators: [withQueryClient],
  parameters: {
    msw: {
      handlers: [http.post('https://www.test.com' + link.href, () => new HttpResponse(null, { status: 200 }))],
    },
  },
  args: {
    kodeverk: alleKodeverk,
    opneSokeside: action('button-click'),
  },
} satisfies Meta<typeof BehandlingPaVent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const BehandlingSattPåVent: Story = {
  args: {
    behandling: lagBehandling({
      uuid: '121212',
      behandlingPåVent: true,
      fristBehandlingPåVent: '2030-10-10',
      venteÅrsakKode: 'AVV_FODSEL',
      links: [link],
      aksjonspunkt: [lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5069)],
    }),
  },
};

export const BehandlingSattManueltPåVent: Story = {
  args: {
    behandling: lagBehandling({
      uuid: '121212',
      behandlingPåVent: true,
      fristBehandlingPåVent: '2030-10-10',
      venteÅrsakKode: 'AVV_FODSEL',
      links: [link],
      aksjonspunkt: [lagAksjonspunkt(AksjonspunktKode.AUTO_MANUELT_SATT_PÅ_VENT)],
    }),
  },
};
