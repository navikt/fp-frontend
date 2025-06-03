import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, Fødsel } from '@navikt/fp-types';

import { FodselFaktaIndex } from './FodselFaktaIndex';

/* const familieHendelse = {
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
*/
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

const testFødsel2: Fødsel = {
  søknad: {
    barn: [{ fodselsdato: '2019-01-10', dodsdato: null }],
    termindato: '2019-01-01',
    utstedtdato: '2019-01-02',
    antallBarn: 1,
  },
  register: {
    barn: [{ fodselsdato: '2019-01-10', dodsdato: null }],
  },
  gjeldende: {
    barn: [
      {
        kilde: 'FOLKEREGISTER',
        barn: {
          fodselsdato: '2019-01-01',
          dodsdato: null,
        },
        kanOverstyres: false,
      },
    ],
    termindato: {
      kilde: 'SØKNAD',
      termindato: '2019-01-01',
      kanOverstyres: true,
    },
    utstedtdato: { kilde: 'SAKSBEHANDLER', utstedtdato: '2019-01-01' },
    antallBarn: 1,
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
  },
};

export const AksjonspunktSjekkManglendeFødselPåEngangstønad: Story = {
  args: {
    fødsel: {
      søknad: {
        barn: [
          {
            fodselsdato: '2025-05-03',
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
              fodselsdato: '2025-05-03',
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
