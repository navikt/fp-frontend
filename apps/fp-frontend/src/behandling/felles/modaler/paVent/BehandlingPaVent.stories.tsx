import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { alleKodeverk, lagAksjonspunkt, withQueryClient } from '@navikt/fp-storybook-utils';
import type { BehandlingFpSak } from '@navikt/fp-types';

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

const DEFAULT_BEHANDLING = {
  uuid: '121212',
  versjon: 1,
  behandlingPåVent: true,
  status: 'UTRED',
  type: 'BT-002',
  behandlingHenlagt: false,
  fristBehandlingPåVent: '2030-10-10',
  venteÅrsakKode: 'AVV_FODSEL',
  links: [link],
  aksjonspunkt: [],
  aktivPapirsøknad: false,
  behandlendeEnhetId: '4820',
  behandlendeEnhetNavn: 'NAV Familie- og pensjonsytelser Oslo 1',
  behandlingÅrsaker: [],
  harSattEndringsdato: false,
  harSøknad: true,
  id: 1,
  opprettet: '2020-01-01',
  språkkode: 'NB',
  vilkår: [],
} satisfies BehandlingFpSak;

export const BehandlingSattPåVent: Story = {
  args: {
    behandling: {
      ...DEFAULT_BEHANDLING,
      aksjonspunkt: [lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5069)],
    } satisfies BehandlingFpSak,
  },
};

export const BehandlingSattManueltPåVent: Story = {
  args: {
    behandling: {
      ...DEFAULT_BEHANDLING,
      aksjonspunkt: [lagAksjonspunkt(AksjonspunktKode.AUTO_MANUELT_SATT_PÅ_VENT)],
    } satisfies BehandlingFpSak,
  },
};
