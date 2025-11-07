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
import type { ArbeidsgiverOpplysningerPerId, BehandlingFpSak, Soknad } from '@navikt/fp-types';

import { SokersOpplysningspliktVilkarProsessIndex } from './SokersOpplysningspliktVilkarProsessIndex';

const arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId = {
  1234: {
    erPrivatPerson: false,
    identifikator: '1234',
    referanse: '1234',
    navn: 'arbeidsgiver1',
  },
};

const søknad = {
  manglendeVedlegg: [
    {
      dokumentType: 'I500027',
      dokumentTittel: 'Inntektsmelding',
      arbeidsgiverReferanse: '1234',
      brukerHarSagtAtIkkeKommer: false,
    },
    {
      dokumentType: 'FØDSELSATTEST',
      dokumentTittel: 'Fødselsattest',
      arbeidsgiverReferanse: undefined,
      brukerHarSagtAtIkkeKommer: false,
    },
  ],
} as Soknad;

const behandlingMedAvslagsårsak = {
  uuid: '1',
  versjon: 1,
  behandlingsresultat: {
    avslagsarsak: '1019',
  },
} as BehandlingFpSak;

const meta = {
  title: 'prosess/prosess-vilkar-sokers-opplysningsplikt',
  component: SokersOpplysningspliktVilkarProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    søknad,
    arbeidsgiverOpplysningerPerId,
  },
  render: args => <SokersOpplysningspliktVilkarProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof SokersOpplysningspliktVilkarProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const UtførtAPMedOppfyltVilkår: Story = {
  args: {
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5017, {
        status: 'UTFO',
      }),
    ],
    vilkårForPanel: [lagVilkår('FP_VK_34', { vilkarStatus: 'OPPFYLT' })],
    isReadOnly: true,
    isSubmittable: false,
  },
};

export const UtførtAPMedAvslåttVilkår: Story = {
  args: {
    behandling: behandlingMedAvslagsårsak,
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5017, {
        status: 'UTFO',
      }),
    ],
    vilkårForPanel: [lagVilkår('FP_VK_34', { vilkarStatus: 'IKKE_OPPFYLT' })],
    isReadOnly: true,
    isSubmittable: false,
  },
};

export const KanOverstyreVilkår: Story = {
  args: {
    aksjonspunkterForPanel: [],
    vilkårForPanel: [lagVilkår('FP_VK_34', { vilkarStatus: 'OPPFYLT' })],
    isReadOnly: false,
    isSubmittable: true,
  },
};

export const HarOverstyrtMedOppfyltVilkår: Story = {
  args: {
    behandling: {
      uuid: '1',
      versjon: 1,
      behandlingsresultat: {
        avslagsarsak: undefined,
      },
    } as BehandlingFpSak,
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.SØKERS_OPPLYSNINGSPLIKT_OVST, { status: 'UTFO', aksjonspunktType: 'SAOV' }),
    ],
    vilkårForPanel: [lagVilkår('FP_VK_34', { vilkarStatus: 'OPPFYLT' })],
    isReadOnly: true,
    isSubmittable: false,
  },
};

export const HarOverstyrtMedAvslåttVilkår: Story = {
  args: {
    behandling: behandlingMedAvslagsårsak,
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.SØKERS_OPPLYSNINGSPLIKT_OVST, { status: 'UTFO', aksjonspunktType: 'SAOV' }),
    ],
    vilkårForPanel: [lagVilkår('FP_VK_34', { vilkarStatus: 'IKKE_OPPFYLT' })],
    isReadOnly: true,
    isSubmittable: false,
  },
};
