import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus, AksjonspunktType, VilkarType } from '@navikt/fp-kodeverk';
import {
  type PanelDataArgs,
  type PanelOverstyringContextArgs,
  withMellomlagretFormData,
  withPanelData,
  withPanelOverstyring,
} from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt } from '@navikt/fp-types';

import { FodselFaktaIndex } from './FodselFaktaIndex';

const aksjonspunktDefault = {
  definisjon: AksjonspunktKode.SJEKK_TERMINBEKREFTELSE,
  status: AksjonspunktStatus.OPPRETTET,
  begrunnelse: null,
  kanLoses: true,
  toTrinnsBehandling: false,
  toTrinnsBehandlingGodkjent: null,
  vurderPaNyttArsaker: null,
  besluttersBegrunnelse: null,
  aksjonspunktType: AksjonspunktType.AUTOPUNKT,
  vilkarType: VilkarType.OMSORGSVILKARET,
  erAktivt: true,
  fristTid: null,
  endretTidspunkt: null,
  endretAv: null,
} satisfies Aksjonspunkt;

const apTerminbekreftelse: Aksjonspunkt = {
  ...aksjonspunktDefault,
  definisjon: AksjonspunktKode.SJEKK_TERMINBEKREFTELSE,
};
const apSjekkManglendeFødsel: Aksjonspunkt = {
  ...aksjonspunktDefault,
  definisjon: AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL,
};

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
            dødsdato: null,
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
              dødsdato: null,
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

export const APTerminbekreftelse: Story = {
  args: {
    aksjonspunkterForPanel: [apTerminbekreftelse],
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
    aksjonspunkterForPanel: [apSjekkManglendeFødsel],
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
        },
        antallBarn: {
          kilde: 'SØKNAD',
          antall: 1,
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
            dødsdato: null,
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
              dødsdato: null,
            },
            kanOverstyres: false,
          },
        ],
      },
    },
    aksjonspunkterForPanel: [apSjekkManglendeFødsel],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL]: merknaderFraBeslutter,
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
      [AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL]: merknaderFraBeslutter,
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
              dødsdato: null,
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
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'Denne saken har blitt overstyrt',
        kanLoses: false,
      },
    ],
  },
};
export const OverstyrtSettSomSBH: Story = {
  args: {
    kanOverstyreAccess: { isEnabled: false, employeeHasAccess: false },
    initialToggleState: true,
    isReadOnly: false,
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'Denne saken har blitt overstyrt',
        kanLoses: false,
      } as Aksjonspunkt,
    ],
  },
};
