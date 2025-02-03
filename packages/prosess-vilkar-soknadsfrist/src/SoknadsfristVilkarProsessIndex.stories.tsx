import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  Avslagsarsak,
  SoknadType,
  VilkarType,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
import { PanelContextArgs, withFormData, withPanelContext } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, FamilieHendelseSamling, Soknad } from '@navikt/fp-types';

import { SoknadsfristVilkarProsessIndex } from './SoknadsfristVilkarProsessIndex';

const soknad = {
  soknadType: SoknadType.FODSEL,
  mottattDato: '2019-01-01',
  fodselsdatoer: { 1: '2019-01-01' } as { [key: number]: string },
  begrunnelseForSenInnsending: 'Dette er en begrunnelse',
  søknadsfrist: {
    mottattDato: '2019-01-01',
    utledetSøknadsfrist: '2019-07-01',
    dagerOversittetFrist: 2,
  },
} as Soknad;

const familiehendelse = {
  gjeldende: {
    avklartBarn: [
      {
        fodselsdato: '2019-01-02',
      },
    ],
  },
} as FamilieHendelseSamling;

const meta = {
  title: 'prosess/prosess-vilkar-soknadsfrist',
  component: SoknadsfristVilkarProsessIndex,
  decorators: [withFormData, withPanelContext],
  args: {
    soknad,
    familiehendelse,
  },
  render: args => <SoknadsfristVilkarProsessIndex {...args} />,
} satisfies Meta<PanelContextArgs & ComponentProps<typeof SoknadsfristVilkarProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.SOKNADSFRISTVILKARET,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
        vilkarType: VilkarType.SOKNADFRISTVILKARET,
      },
    ] as Aksjonspunkt[],
    isReadOnly: false,
    readOnlySubmitButton: false,
    status: VilkarUtfallType.IKKE_VURDERT,
  },
};

export const OppfyltVilkår: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.SOKNADSFRISTVILKARET,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'Dette vilkåret er godkjent',
        vilkarType: VilkarType.SOKNADFRISTVILKARET,
      },
    ] as Aksjonspunkt[],
    isReadOnly: true,
    readOnlySubmitButton: true,
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
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'Dette vilkåret er avslått',
        vilkarType: VilkarType.SOKNADFRISTVILKARET,
      },
    ] as Aksjonspunkt[],
    isReadOnly: true,
    readOnlySubmitButton: true,
    status: VilkarUtfallType.IKKE_OPPFYLT,
  },
};
