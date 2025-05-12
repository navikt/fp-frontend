import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus, SoknadType } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, FamilieHendelseSamling, Soknad } from '@navikt/fp-types';

import { FodselFaktaIndex } from './FodselFaktaIndex';

const familieHendelse = {
  register: {
    avklartBarn: [
      {
        fodselsdato: '2019-01-10',
      },
    ],
  },
  gjeldende: {
    avklartBarn: [
      {
        fodselsdato: '2019-01-01',
      },
    ],
    termindato: '2019-01-01',
    utstedtdato: '2019-01-01',
    antallBarnTermin: 1,
    vedtaksDatoSomSvangerskapsuke: 43,
    erOverstyrt: false,
    morForSykVedFodsel: true,
    dokumentasjonForeligger: true,
    brukAntallBarnFraTps: true,
  },
} as FamilieHendelseSamling;

const søknad = {
  fodselsdatoer: { 1: '2019-01-10' } as { [key: number]: string },
  termindato: '2019-01-01',
  utstedtdato: '2019-01-02',
  antallBarn: 1,
  soknadType: SoknadType.FODSEL,
} as Soknad;

const defaultAksjonspunkter: Aksjonspunkt[] = [
  {
    definisjon: AksjonspunktKode.TERMINBEKREFTELSE,
    status: AksjonspunktStatus.OPPRETTET,
    begrunnelse: null,
    kanLoses: true,
  },
];

const merknaderFraBeslutter = {
  notAccepted: false,
};

const meta = {
  title: 'fakta/fakta-fodsel',
  component: FodselFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    submittable: true,
    søknad,
    familiehendelse: familieHendelse,
  },
  render: args => <FodselFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof FodselFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const AksjonspunktTerminbekreftelse: Story = {
  args: {
    aksjonspunkterForPanel: defaultAksjonspunkter,
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.TERMINBEKREFTELSE]: merknaderFraBeslutter,
    },
  },
};

export const AksjonspunktSjekkManglendeFødsel: Story = {
  args: {
    aksjonspunkterForPanel: defaultAksjonspunkter.map(a => ({
      ...a,
      definisjon: AksjonspunktKode.SJEKK_MANGLENDE_FODSEL,
    })),
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.SJEKK_MANGLENDE_FODSEL]: merknaderFraBeslutter,
    },
  },
};

export const ReadonlyPanel: Story = {
  args: {
    isReadOnly: true,
    aksjonspunkterForPanel: defaultAksjonspunkter.map(a => ({
      ...a,
      status: AksjonspunktStatus.UTFORT,
      definisjon: AksjonspunktKode.SJEKK_MANGLENDE_FODSEL,
      begrunnelse: 'Dette er en begrunnelse',
    })),
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.SJEKK_MANGLENDE_FODSEL]: merknaderFraBeslutter,
    },
  },
};

export const PanelForFødselssammenligningNårDetIkkeFinnesAksjonspunkter: Story = {
  args: {
    aksjonspunkterForPanel: [],
    alleMerknaderFraBeslutter: {},
  },
};
