import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';
import type { Fagsak, Ytelsefordeling } from '@navikt/fp-types';

import { SakenFaktaIndex } from './SakenFaktaIndex';

const defaultYtelsefordeling = {
  førsteUttaksdato: '2019-01-01',
  startDatoForPermisjon: '2019-01-01',
  dekningsgrader: {
    avklartDekningsgrad: 100,
    søker: {
      søknadsdato: '2019-01-02',
      dekningsgrad: 100,
    },
    annenPart: {
      søknadsdato: '2019-01-01',
      dekningsgrad: 80,
    },
  },
} as Ytelsefordeling;

const meta = {
  title: 'fakta/fakta-saken',
  component: SakenFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    ytelsefordeling: defaultYtelsefordeling,
    kanOverstyreAccess: true,
  },
  render: args => <SakenFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof SakenFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const StartdatoForForeldrepengerOgDekningsgrad: Story = {
  args: {
    aksjonspunkterForPanel: [],
  },
};

export const StartdatoForForeldrepengerOgDekningsgradMedAnnenPart: Story = {
  args: {
    aksjonspunkterForPanel: [],
    fagsak: {
      fagsakYtelseType: 'FP',
      bruker: {
        navn: 'Helga Utvikler',
      },
      annenPart: {
        navn: 'Espen Utvikler',
      },
    } as Fagsak,
  },
};

export const KanIkkeOverstyreDekningsgrad: Story = {
  args: {
    aksjonspunkterForPanel: [],
    fagsak: {
      fagsakYtelseType: 'FP',
      bruker: {
        navn: 'Helga Utvikler',
      },
      annenPart: {
        navn: 'Espen Utvikler',
      },
    } as Fagsak,
    kanOverstyreAccess: false,
  },
};

export const ApentAksjonspunktForInnhentingAvDokumentasjon: Story = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK)],
  },
};

export const ApentAksjonspunktForInnhentingAvDokumentasjonVedSvp: Story = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK)],
    fagsak: {
      fagsakYtelseType: 'SVP',
    } as Fagsak,
  },
};

export const AksjonspunktErIkkeGodkjentAvBeslutter: Story = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK)],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK]: {
        notAccepted: true,
      },
    },
  },
};

export const DekningsgradErEndret: Story = {
  args: {
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.OVERSTYRING_AV_DEKNINGSGRAD, {
        status: 'UTFO',
        kanLoses: true,
        begrunnelse: 'Er endret til 80 fordi...',
      }),
    ],
    ytelsefordeling: {
      førsteUttaksdato: '2019-01-01',
      startDatoForPermisjon: '2019-01-01',
      dekningsgrader: {
        avklartDekningsgrad: 80,
        søker: {
          søknadsdato: '2019-01-02',
          dekningsgrad: 100,
        },
      },
    } as Ytelsefordeling,
  },
};

export const HarFåttDekningsgradAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.AVKLAR_DEKNINGSGRAD)],
    fagsak: {
      fagsakYtelseType: 'FP',
      bruker: {
        navn: 'Helga Utvikler',
        kjønn: 'K',
      },
      annenPart: {
        navn: 'Espen Utvikler',
        kjønn: 'M',
      },
    } as Fagsak,
    ytelsefordeling: {
      førsteUttaksdato: '2019-01-01',
      startDatoForPermisjon: '2019-01-01',
      dekningsgrader: {
        søker: {
          søknadsdato: '2019-01-02',
          dekningsgrad: 100,
        },
        annenPart: {
          søknadsdato: '2019-01-01',
          dekningsgrad: 80,
        },
      },
    } as Ytelsefordeling,
  },
};

export const HarFåttDekningsgradAksjonspunktMedUkjentAndrePart: Story = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.AVKLAR_DEKNINGSGRAD)],
    fagsak: {
      fagsakYtelseType: 'FP',
      bruker: {
        navn: 'Helga Utvikler',
        kjønn: 'K',
      },
      annenPart: {
        navn: 'Espen Utvikler',
        kjønn: '-',
      },
    } as Fagsak,
    ytelsefordeling: {
      førsteUttaksdato: '2019-01-01',
      startDatoForPermisjon: '2019-01-01',
      dekningsgrader: {
        søker: {
          søknadsdato: '2019-01-02',
          dekningsgrad: 100,
        },
        annenPart: {
          søknadsdato: '2019-01-01',
          dekningsgrad: 80,
        },
      },
    } as Ytelsefordeling,
  },
};

export const DekningsgradAksjonspunktErSendtTIlbakeFraBeslutter: Story = {
  args: {
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.AVKLAR_DEKNINGSGRAD, {
        begrunnelse: 'Dette er en begrunnelse',
      }),
    ],
    fagsak: {
      fagsakYtelseType: 'FP',
      bruker: {
        navn: 'Helga Utvikler',
        kjønn: 'K',
      },
      annenPart: {
        navn: 'Espen Utvikler',
        kjønn: 'M',
      },
    } as Fagsak,
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.AVKLAR_DEKNINGSGRAD]: {
        notAccepted: true,
      },
    },
    ytelsefordeling: {
      førsteUttaksdato: '2019-01-01',
      startDatoForPermisjon: '2019-01-01',
      dekningsgrader: {
        avklartDekningsgrad: 100,
        søker: {
          søknadsdato: '2019-01-02',
          dekningsgrad: 100,
        },
        annenPart: {
          søknadsdato: '2019-01-01',
          dekningsgrad: 80,
        },
      },
    } as Ytelsefordeling,
  },
};
