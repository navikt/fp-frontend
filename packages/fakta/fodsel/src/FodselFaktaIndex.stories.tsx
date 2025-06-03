import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, Fødsel } from '@navikt/fp-types';

import { FodselFaktaIndex } from './FodselFaktaIndex';

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

const testFødsel: Fødsel = {
  søknad: {
    barn: [
      { fodselsdato: '2023-10-01', dodsdato: null },
      { fodselsdato: '2023-10-02', dodsdato: null },
    ],
    termindato: '2023-10-15',
    utstedtdato: '2023-10-10',
    antallBarn: 2,
  },
  register: {
    barn: [{ fodselsdato: '2023-10-01', dodsdato: null }],
  },
  gjeldende: {
    termindato: {
      kilde: 'SØKNAD',
      termindato: '2023-10-15',
      kanOverstyres: true,
    },
    utstedtdato: {
      kilde: 'FOLKEREGISTER',
      utstedtdato: '2023-10-10',
    },
    antallBarn: 2,
    barn: [
      {
        kilde: 'SAKSBEHANDLER',
        barn: { fodselsdato: '2023-10-01', dodsdato: null },
        kanOverstyres: true,
      },
    ],
  },
};

const meta = {
  title: 'fakta/fakta-fodsel',
  component: FodselFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    submittable: true,
    fødsel: testFødsel,
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
    // fra sak m. f.nr. 20437533041
    fødsel: {
      søknad: {
        barn: [],
        termindato: '2025-06-24',
        utstedtdato: '2025-05-20',
        antallBarn: 1,
      },
      register: {
        barn: [],
      },
      gjeldende: {
        termindato: {
          kilde: 'SØKNAD',
          termindato: '2025-06-24',
          kanOverstyres: true,
        },
        utstedtdato: {
          kilde: 'SØKNAD',
          utstedtdato: '2025-05-20',
        },
        barn: [],
        antallBarn: 1,
      },
    },
  },
};

export const AksjonspunktSjekkManglendeFødselPåEngangstønad: Story = {
  args: {
    // fra sak m. f.nr. 11499122286
    fødsel: {
      søknad: {
        barn: [
          {
            fodselsdato: '2025-05-04',
            dodsdato: null,
          },
        ],
        termindato: null,
        utstedtdato: null,
        antallBarn: 1,
      },
      register: {
        barn: [],
      },
      gjeldende: {
        termindato: null,
        utstedtdato: null,
        barn: [
          {
            kilde: 'SØKNAD',
            barn: {
              fodselsdato: '2025-05-04',
              dodsdato: null,
            },
            kanOverstyres: true,
          },
        ],
        antallBarn: 1,
      },
    },
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
