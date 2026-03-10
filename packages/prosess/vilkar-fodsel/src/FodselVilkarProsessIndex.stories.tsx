import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  lagVilkår,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';
import type { BehandlingFpSak, Vilkår } from '@navikt/fp-types';

import { FodselVilkarProsessIndex } from './FodselVilkarProsessIndex';

const meta = {
  title: 'prosess/prosess-vilkar-fodsel',
  component: FodselVilkarProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    vilkårForPanel: [lagVilkår('FP_VK_1')] satisfies Vilkår[],
  },
  render: args => <FodselVilkarProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof FodselVilkarProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE)],
    status: 'IKKE_VURDERT',
  },
};

export const OppfyltVilkår: Story = {
  args: {
    aksjonspunkterForPanel: [
      lagAksjonspunkt(
        AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE,

        {
          status: 'UTFO',
          begrunnelse: 'Dette vilkåret er godkjent',
        },
      ),
    ],
    isReadOnly: true,
    isSubmittable: false,
    status: 'OPPFYLT',
  },
};

export const AvslåttVilkår: Story = {
  args: {
    behandling: {
      uuid: '1',
      versjon: 1,
      type: 'BT-002',
      status: 'UTRED',
      språkkode: '-',
      behandlingsresultat: {
        avslagsarsak: '1002',
        harRedigertVedtaksbrev: false,
        id: 0,
        type: 'AVSLÅTT',
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
      },
      behandlingPåVent: false,
      behandlingHenlagt: false,
      aksjonspunkt: [],
      behandlingÅrsaker: [],
      behandlendeEnhetId: '',
      behandlendeEnhetNavn: '',
      aktivPapirsøknad: false,
      vilkår: [],
      links: [],
      harSøknad: false,
      harSattEndringsdato: false,
      id: 1,
      opprettet: '2020-01-01',
    } satisfies BehandlingFpSak,
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE, {
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er avslått',
      }),
    ],
    isReadOnly: true,
    isSubmittable: false,
    status: 'IKKE_OPPFYLT',
  },
};
