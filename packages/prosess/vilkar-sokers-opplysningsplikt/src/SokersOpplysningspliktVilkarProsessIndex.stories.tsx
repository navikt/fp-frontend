import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
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
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.SØKERS_OPPLYSNINGSPLIKT_MANU)],
    status: 'IKKE_VURDERT',
  },
};

export const OppfyltVilkår: Story = {
  args: {
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.SØKERS_OPPLYSNINGSPLIKT_MANU, {
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er godkjent',
      }),
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
      behandlingsresultat: {
        avslagsarsak: '1099',
      },
    } as BehandlingFpSak,
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.SØKERS_OPPLYSNINGSPLIKT_MANU, {
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er avslått',
      }),
    ],
    isReadOnly: true,
    isSubmittable: false,
    status: 'IKKE_OPPFYLT',
  },
};
