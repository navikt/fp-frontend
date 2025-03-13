import { type ComponentProps } from 'react';

import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

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
  sprakkode: 'NN',
  type: BehandlingType.FORSTEGANGSSOKNAD,
} as Behandling;

const familieHendelse = {
  register: {
    avklartBarn: [
      {
        fodselsdato: '2019-01-10',
        dodsdato: undefined,
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
  title: 'prosess/prosess-varsel-om-revurdering',
  component: VarselOmRevurderingProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    aksjonspunkterForPanel,
    familiehendelse: familieHendelse,
    soknad,
    soknadOriginalBehandling,
    familiehendelseOriginalBehandling,
    previewCallback: action('button-click') as any,
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
