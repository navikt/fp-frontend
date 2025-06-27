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
    isReadOnly: false,
    aksjonspunkterForPanel: [],
    alleMerknaderFraBeslutter: {},
    terminbekreftelseDokument: {
      journalpostId: '1',
      dokumentId: '2',
      saksnummer: '3',
    },
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
        fødselDokumetasjonStatus: 'DOKUMENTERT',
        termin: {
          kilde: 'SØKNAD',
          termindato: '2025-06-10',
          antallBarn: 1,
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
        fødselDokumetasjonStatus: 'IKKE_VURDERT',
        termin: {
          kilde: 'SØKNAD',
          termindato: '2025-06-24',
          antallBarn: 1,
        },
        utstedtdato: {
          kilde: 'SØKNAD',
          utstedtdato: '2025-05-20',
        },
        barn: [],
      },
    },
  },
};

export const APSjekkManglendeFødselPåEngangstønad: Story = {
  args: {
    terminbekreftelseDokument: undefined,
    fødsel: {
      søknad: {
        barn: [],
        termindato: '2025-05-06',
        utstedtdato: '2025-04-16',
        antallBarn: 1,
      },
      register: {
        barn: [],
      },
      gjeldende: {
        fødselDokumetasjonStatus: 'IKKE_VURDERT',
        termin: {
          kilde: 'SØKNAD',
          termindato: '2025-05-06',
          antallBarn: 1,
        },
        utstedtdato: {
          kilde: 'SØKNAD',
          utstedtdato: '2025-04-16',
        },
        barn: [],
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
    terminbekreftelseDokument: undefined,
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
        fødselDokumetasjonStatus: 'IKKE_VURDERT',
        termin: {
          kilde: 'SØKNAD',
          termindato: '2025-04-14',
          antallBarn: 1,
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
      },
    },
    aksjonspunkterForPanel: [apSjekkManglendeFødsel],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.SJEKK_MANGLENDE_FODSEL]: merknaderFraBeslutter,
    },
  },
};

export const APSjekkManglendeFødselDifferanseIAntallBarn: Story = {
  args: {
    terminbekreftelseDokument: undefined,
    fødsel: {
      søknad: {
        barn: [],
        termindato: '2025-06-24',
        utstedtdato: '2025-05-20',
        antallBarn: 2,
      },
      register: {
        barn: [
          {
            fødselsdato: '2025-06-25',
            dødsdato: null,
          },
        ],
      },
      gjeldende: {
        fødselDokumetasjonStatus: 'IKKE_VURDERT',
        termin: {
          kilde: 'SØKNAD',
          termindato: '2025-06-24',
          antallBarn: 2,
        },
        utstedtdato: {
          kilde: 'SØKNAD',
          utstedtdato: '2025-05-20',
        },
        barn: [
          {
            kilde: 'FOLKEREGISTER',
            barn: {
              fødselsdato: '2025-06-25',
              dødsdato: null,
            },
            kanOverstyres: false,
          },
        ],
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
    terminbekreftelseDokument: undefined,
  },
};

export const Default: Story = {};

export const SjekkManglendeFødselVedDødfødselForEnTvilling: Story = {
  args: {
    terminbekreftelseDokument: undefined,
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
        fødselDokumetasjonStatus: 'IKKE_VURDERT',
        termin: {
          kilde: 'SØKNAD',
          termindato: '2025-05-21',
          antallBarn: 2,
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
      },
    },
  },
};
