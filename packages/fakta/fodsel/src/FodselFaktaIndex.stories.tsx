import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt } from '@navikt/fp-types';

import { FodselFaktaIndex } from './FodselFaktaIndex';

const apTerminbekreftelse: Aksjonspunkt = {
  definisjon: AksjonspunktKode.TERMINBEKREFTELSE,
  status: AksjonspunktStatus.OPPRETTET,
  begrunnelse: null,
  kanLoses: true,
};
const apSjekkManglendeFødsel: Aksjonspunkt = {
  definisjon: AksjonspunktKode.SJEKK_MANGLENDE_FODSEL,
  status: AksjonspunktStatus.OPPRETTET,
  begrunnelse: null,
  kanLoses: true,
};

const merknaderFraBeslutter = {
  notAccepted: false,
};

const meta = {
  title: 'fakta/fakta-fodsel',
  component: FodselFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    submittable: true,
    aksjonspunkterForPanel: [],
    alleMerknaderFraBeslutter: {},
    fødsel: {
      søknad: {
        barn: [],
        termindato: '2025-06-10',
        utstedtdato: '2025-05-10',
        antallBarn: 1,
      },
      register: {
        barn: [
          {
            fødselsdato: '2025-06-03',
            dødsdato: null,
          },
        ],
      },
      gjeldende: {
        termindato: {
          kilde: 'SØKNAD',
          termindato: '2025-06-10',
          kanOverstyres: true,
        },
        utstedtdato: {
          kilde: 'SØKNAD',
          utstedtdato: '2025-05-10',
        },
        barn: [
          {
            kilde: 'FOLKEREGISTER',
            barn: {
              fødselsdato: '2025-06-03',
              dødsdato: null,
            },
            kanOverstyres: false,
          },
        ],
        antallBarn: 1,
      },
    },
  },
  render: args => <FodselFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof FodselFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const APTerminbekreftelse: Story = {
  args: {
    aksjonspunkterForPanel: [apTerminbekreftelse],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.TERMINBEKREFTELSE]: merknaderFraBeslutter,
    },
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

export const APSjekkManglendeFødselPåEngangstønad: Story = {
  args: {
    fødsel: {
      søknad: {
        barn: [
          {
            fødselsdato: '2025-05-04',
            dødsdato: null,
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
              fødselsdato: '2025-05-04',
              dødsdato: null,
            },
            kanOverstyres: true,
          },
        ],
        antallBarn: 1,
      },
    },
    aksjonspunkterForPanel: [apSjekkManglendeFødsel],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.SJEKK_MANGLENDE_FODSEL]: merknaderFraBeslutter,
    },
  },
};
export const APSjekkManglendeFødselPåForeldrepenger: Story = {
  args: {
    fødsel: {
      søknad: {
        barn: [
          {
            fødselsdato: '2025-05-04',
            dødsdato: null,
          },
        ],
        termindato: '2025-04-14',
        utstedtdato: null,
        antallBarn: 1,
      },
      register: {
        barn: [],
      },
      gjeldende: {
        termindato: {
          kilde: 'SØKNAD',
          termindato: '2025-04-14',
          kanOverstyres: true,
        },
        utstedtdato: null,
        barn: [
          {
            kilde: 'SØKNAD',
            barn: {
              fødselsdato: '2025-05-04',
              dødsdato: null,
            },
            kanOverstyres: true,
          },
        ],
        antallBarn: 1,
      },
    },
    aksjonspunkterForPanel: [apSjekkManglendeFødsel],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.SJEKK_MANGLENDE_FODSEL]: merknaderFraBeslutter,
    },
  },
};

export const ReadonlyPanelMedUtførtSjekkManglendeFødselAP: Story = {
  args: {
    isReadOnly: true,
    aksjonspunkterForPanel: [
      { ...apSjekkManglendeFødsel, status: AksjonspunktStatus.UTFORT, begrunnelse: 'Dette er en begrunnelse' },
    ],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.SJEKK_MANGLENDE_FODSEL]: merknaderFraBeslutter,
    },
  },
};

export const Default: Story = {};

export const SjekkManglendeFødselVedDødfødselForEnTvilling: Story = {
  args: {
    fødsel: {
      søknad: {
        barn: [],
        termindato: '2025-05-21',
        utstedtdato: '2025-04-21',
        antallBarn: 1,
      },
      register: {
        barn: [
          {
            fødselsdato: '2025-05-28',
            dødsdato: '2025-05-28',
          },
          {
            fødselsdato: '2025-05-28',
            dødsdato: null,
          },
        ],
      },
      gjeldende: {
        termindato: {
          kilde: 'SØKNAD',
          termindato: '2025-05-21',
          kanOverstyres: true,
        },
        utstedtdato: {
          kilde: 'SØKNAD',
          utstedtdato: '2025-04-21',
        },
        barn: [
          {
            kilde: 'FOLKEREGISTER',
            barn: {
              fødselsdato: '2025-05-28',
              dødsdato: '2025-05-28',
            },
            kanOverstyres: false,
          },
          {
            kilde: 'FOLKEREGISTER',
            barn: {
              fødselsdato: '2025-05-28',
              dødsdato: null,
            },
            kanOverstyres: false,
          },
        ],
        antallBarn: 2,
      },
    },
  },
};
