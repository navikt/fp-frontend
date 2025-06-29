import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { AksjonspunktKode, AksjonspunktStatus, BehandlingType } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, Behandling, FamilieHendelse, FamilieHendelseSamling, Soknad } from '@navikt/fp-types';

import { VarselOmRevurderingProsessIndex } from './VarselOmRevurderingProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  behandlingÅrsaker: [
    {
      erAutomatiskRevurdering: true,
    },
  ],
  språkkode: 'NN',
  type: BehandlingType.FORSTEGANGSSOKNAD,
} as Behandling;

const familieHendelse = {
  register: {
    avklartBarn: [
      {
        fodselsdato: '2019-01-10',
      },
    ],
  },
  gjeldende: {
    termindato: '2019-01-01',
    vedtaksDatoSomSvangerskapsuke: 43,
  },
} as FamilieHendelseSamling;

const soknad = {
  fodselsdatoer: { 1: '2019-01-10' } as { [key: number]: string },
  termindato: '2019-01-01',
  utstedtdato: '2019-01-02',
  antallBarn: 1,
} as Soknad;

const soknadOriginalBehandling = {
  ...soknad,
} as Soknad;

const familiehendelseOriginalBehandling = {
  avklartBarn: [
    {
      fodselsdato: '2019-01-10',
      dodsdato: null,
    },
  ],
  termindato: '2019-01-01',
  antallBarnTermin: 1,
} as FamilieHendelse;

const aksjonspunkterForPanel = [
  {
    definisjon: AksjonspunktKode.VARSEL_REVURDERING_MANUELL,
    status: AksjonspunktStatus.OPPRETTET,
    begrunnelse: null,
  },
] as Aksjonspunkt[];

const meta = {
  component: VarselOmRevurderingProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    aksjonspunkterForPanel,
    familiehendelse: familieHendelse,
    soknad,
    soknadOriginalBehandling,
    familiehendelseOriginalBehandling,
    previewCallback: action('button-click'),
  },
  render: args => <VarselOmRevurderingProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof VarselOmRevurderingProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ForFørstegangsbehandling: Story = {
  args: {
    behandling: defaultBehandling,
  },
};

export const ForRevurdering: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
    },
  },
};
