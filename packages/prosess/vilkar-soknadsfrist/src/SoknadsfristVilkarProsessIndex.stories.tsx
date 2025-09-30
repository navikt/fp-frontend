import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, Avslagsarsak, SoknadType, VilkarType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, Behandling, FamilieHendelse, Soknad } from '@navikt/fp-types';

import { SoknadsfristVilkarProsessIndex } from './SoknadsfristVilkarProsessIndex';

const soknad = {
  soknadType: SoknadType.FODSEL,
  mottattDato: '2019-01-01',
  begrunnelseForSenInnsending: 'Dette er en begrunnelse',
  søknadsfrist: {
    mottattDato: '2019-01-01',
    utledetSøknadsfrist: '2019-07-01',
    dagerOversittetFrist: 2,
  },
} as Soknad;

const familiehendelse = {
  fødselTermin: {
    fødselsdato: '2019-01-02',
  },
} as FamilieHendelse;

const meta = {
  title: 'prosess/prosess-vilkar-soknadsfrist',
  component: SoknadsfristVilkarProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    soknad,
    familiehendelse,
  },
  render: args => <SoknadsfristVilkarProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof SoknadsfristVilkarProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.SOKNADSFRISTVILKARET,
        status: 'OPPR',
        vilkarType: VilkarType.SOKNADFRISTVILKARET,
      },
    ] as Aksjonspunkt[],
    isReadOnly: false,
    status: VilkarUtfallType.IKKE_VURDERT,
  },
};

export const OppfyltVilkår: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.SOKNADSFRISTVILKARET,
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er godkjent',
        vilkarType: VilkarType.SOKNADFRISTVILKARET,
      },
    ] as Aksjonspunkt[],
    isReadOnly: true,
    isSubmittable: false,
    status: VilkarUtfallType.OPPFYLT,
  },
};

export const AvslåttVilkår: Story = {
  args: {
    behandling: {
      uuid: '1',
      versjon: 1,
      behandlingsresultat: {
        avslagsarsak: Avslagsarsak.INGEN_BEREGNINGSREGLER,
      },
    } as Behandling,
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.SOKNADSFRISTVILKARET,
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er avslått',
        vilkarType: VilkarType.SOKNADFRISTVILKARET,
      },
    ] as Aksjonspunkt[],
    isReadOnly: true,
    isSubmittable: false,
    status: VilkarUtfallType.IKKE_OPPFYLT,
  },
};
