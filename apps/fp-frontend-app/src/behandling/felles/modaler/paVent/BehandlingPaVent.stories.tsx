import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';

import { AksjonspunktKode, AksjonspunktStatus, BehandlingStatus, BehandlingType } from '@navikt/fp-kodeverk';
import { alleKodeverk, alleKodeverkTilbakekreving, withQueryClient } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, Behandling } from '@navikt/fp-types';

import { BehandlingPaVent } from './BehandlingPaVent';

const link = {
  href: '/fpsak/api/behandlinger/endre-pa-vent',
  rel: 'endre-pa-vent',
};

const meta = {
  title: 'app/BehandlingPaVent',
  component: BehandlingPaVent,
  decorators: [withQueryClient],
  parameters: {
    msw: {
      handlers: [http.post('http://www.test.com' + link.href, () => new HttpResponse(null, { status: 200 }))],
    },
  },
  args: {
    kodeverk: { ...alleKodeverk, ...alleKodeverkTilbakekreving },
    opneSokeside: action('button-click'),
  },
} satisfies Meta<typeof BehandlingPaVent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const BehandlingSattPåVent: Story = {
  args: {
    behandling: {
      uuid: '121212',
      versjon: 1,
      behandlingPåVent: true,
      status: BehandlingStatus.BEHANDLING_UTREDES,
      type: BehandlingType.FORSTEGANGSSOKNAD,
      behandlingHenlagt: false,
      fristBehandlingPåVent: '2030-10-10',
      venteÅrsakKode: 'AVV_FODSEL',
      aksjonspunkt: [
        {
          status: AksjonspunktStatus.OPPRETTET,
          definisjon: AksjonspunktKode.ANNENPART_EØS,
        } as Aksjonspunkt,
      ],
      links: [link],
    } as Behandling,
  },
};

export const BehandlingSattManueltPåVent: Story = {
  args: {
    behandling: {
      uuid: '121212',
      versjon: 1,
      behandlingPåVent: true,
      status: BehandlingStatus.BEHANDLING_UTREDES,
      type: BehandlingType.FORSTEGANGSSOKNAD,
      behandlingHenlagt: false,
      fristBehandlingPåVent: '2030-10-10',
      venteÅrsakKode: 'AVV_FODSEL',
      aksjonspunkt: [
        {
          status: AksjonspunktStatus.OPPRETTET,
          definisjon: AksjonspunktKode.AUTO_MANUELT_SATT_PÅ_VENT,
        } as Aksjonspunkt,
      ],
      links: [link],
    } as Behandling,
  },
};
