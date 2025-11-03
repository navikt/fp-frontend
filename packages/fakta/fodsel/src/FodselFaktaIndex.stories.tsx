import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  type PanelDataArgs,
  type PanelOverstyringContextArgs,
  withMellomlagretFormData,
  withPanelData,
  withPanelOverstyring,
} from '@navikt/fp-storybook-utils';

import { FodselFaktaIndex } from './FodselFaktaIndex';

const merknaderFraBeslutter = {
  notAccepted: false,
};

const meta = {
  title: 'fakta/fakta-fodsel',
  component: FodselFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData, withPanelOverstyring],
  args: {
    kanOverstyreAccess: { isEnabled: false, employeeHasAccess: false },
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL,
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
          },
        ],
      },
      gjeldende: {
        fødselDokumetasjonStatus: 'DOKUMENTERT',
        termin: {
          kilde: 'SØKNAD',
          termindato: '2025-06-10',
        },
        antallBarn: {
          kilde: 'SØKNAD',
          antall: 1,
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
            },
            kanOverstyres: false,
          },
        ],
      },
    },
  },
  render: args => <FodselFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & PanelOverstyringContextArgs & ComponentProps<typeof FodselFaktaIndex>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const APTerminbekreftelse: Story = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.SJEKK_TERMINBEKREFTELSE)],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.SJEKK_TERMINBEKREFTELSE]: merknaderFraBeslutter,
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
        },
        antallBarn: {
          kilde: 'SØKNAD',
          antall: 1,
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
        },
        antallBarn: {
          kilde: 'SØKNAD',
          antall: 1,
        },
        utstedtdato: {
          kilde: 'SØKNAD',
          utstedtdato: '2025-04-16',
        },
        barn: [],
      },
    },
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL)],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL]: merknaderFraBeslutter,
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
          },
        ],
        termindato: '2025-04-14',
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
        },
        antallBarn: {
          kilde: 'SØKNAD',
          antall: 1,
        },
        barn: [
          {
            kilde: 'SØKNAD',
            barn: {
              fødselsdato: '2025-05-04',
            },
            kanOverstyres: true,
          },
        ],
      },
    },
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL)],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL]: merknaderFraBeslutter,
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
          },
        ],
      },
      gjeldende: {
        fødselDokumetasjonStatus: 'IKKE_VURDERT',
        termin: {
          kilde: 'SØKNAD',
          termindato: '2025-06-24',
        },
        antallBarn: {
          kilde: 'SØKNAD',
          antall: 2,
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
            },
            kanOverstyres: false,
          },
        ],
      },
    },
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL)],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL]: merknaderFraBeslutter,
    },
  },
};

export const APSjekkManglendeFødselUtenTermindatoFraSøknad = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL)],
    fødsel: {
      søknad: {
        barn: [
          {
            fødselsdato: '2025-06-04',
            dødsdato: null,
            barnNummer: 1,
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
        termin: null,
        utstedtdato: null,
        antallBarn: {
          kilde: 'SØKNAD',
          antall: 1,
        },
        barn: [
          {
            kilde: 'SØKNAD',
            barn: {
              fødselsdato: '2025-06-04',
              dødsdato: null,
              barnNummer: 1,
            },
            kanOverstyres: true,
          },
        ],
        fødselDokumetasjonStatus: 'IKKE_VURDERT',
      },
    },
  },
};

export const APSjekkManglendeFødselUtførtOgUtført: Story = {
  args: {
    isReadOnly: true,
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL, { status: 'UTFO' })],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL]: merknaderFraBeslutter,
    },
    terminbekreftelseDokument: undefined,
  },
};

export const APSjekkManglendeFødselVedDødfødselForEnTvilling: Story = {
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
          },
        ],
      },
      gjeldende: {
        fødselDokumetasjonStatus: 'IKKE_VURDERT',
        termin: {
          kilde: 'SØKNAD',
          termindato: '2025-05-21',
        },
        antallBarn: {
          kilde: 'SØKNAD',
          antall: 2,
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
            },
            kanOverstyres: false,
          },
        ],
      },
    },
  },
};

export const OverstyringSomOverstyrer: Story = {
  args: {
    kanOverstyreAccess: { isEnabled: true, employeeHasAccess: true },
  },
};

export const OverstyrtSettSomOverstyrer: Story = {
  args: {
    kanOverstyreAccess: { isEnabled: true, employeeHasAccess: true },
    initialToggleState: true,
    isReadOnly: false,
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL, {
        status: 'UTFO',
        begrunnelse: 'Denne saken har blitt overstyrt',
      }),
    ],
  },
};

export const OverstyrtSettSomSBH: Story = {
  args: {
    kanOverstyreAccess: { isEnabled: false, employeeHasAccess: false },
    initialToggleState: true,
    isReadOnly: false,
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL, {
        status: 'UTFO',
        begrunnelse: 'Denne saken har blitt overstyrt',
      }),
    ],
  },
};
