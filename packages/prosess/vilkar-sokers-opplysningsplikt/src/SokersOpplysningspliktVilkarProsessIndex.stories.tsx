import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Behandling, Soknad } from '@navikt/fp-types';

import { SokersOpplysningspliktVilkarProsessIndex } from './SokersOpplysningspliktVilkarProsessIndex';

const arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId = {
  1234: {
    erPrivatPerson: false,
    identifikator: '1234',
    referanse: '1234',
    navn: 'arbeidsgiver1',
  },
};

const soknad = {
  manglendeVedlegg: [
    {
      dokumentType: 'I500027',
      dokumentTittel: 'Inntektsmelding',
      arbeidsgiverReferanse: '1234',
      brukerHarSagtAtIkkeKommer: false,
    },
  ],
} as Soknad;

const meta = {
  title: 'prosess/prosess-vilkar-sokers-opplysningsplikt',
  component: SokersOpplysningspliktVilkarProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    soknad,
    arbeidsgiverOpplysningerPerId,
  },
  render: args => <SokersOpplysningspliktVilkarProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof SokersOpplysningspliktVilkarProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: '5017',
        status: 'OPPR',
      },
    ] as Aksjonspunkt[],
    status: 'IKKE_VURDERT',
  },
};

export const OppfyltVilkår: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: '5017',
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er godkjent',
      },
    ] as Aksjonspunkt[],
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
      behandlingsresultat: {
        avslagsarsak: '1099',
      },
    } as Behandling,
    aksjonspunkterForPanel: [
      {
        definisjon: '5017',
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er avslått',
      },
    ] as Aksjonspunkt[],
    isReadOnly: true,
    isSubmittable: false,
    status: 'IKKE_OPPFYLT',
  },
};
