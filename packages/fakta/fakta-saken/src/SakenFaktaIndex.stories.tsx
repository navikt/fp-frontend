import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus, FagsakYtelseType, NavBrukerKjonn } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Fagsak, Soknad } from '@navikt/fp-types';

import { SakenFaktaIndex } from './SakenFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const defaultSøknad = {
  oppgittFordeling: {
    startDatoForPermisjon: '2019-01-01',
    dekningsgrader: {
      søker: {
        søknadsdato: '2019-01-02',
        dekningsgrad: 100,
      },
    },
  },
} as Soknad;

const meta = {
  title: 'fakta/fakta-saken',
  component: SakenFaktaIndex,
  decorators: [withFormData, withPanelData],
  args: {
    submittable: true,
    soknad: defaultSøknad,
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
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
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
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
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
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
        status: AksjonspunktStatus.OPPRETTET,
        kanLoses: true,
      },
    ],
  },
};

export const ApentAksjonspunktForInnhentingAvDokumentasjonVedSvp: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
        status: AksjonspunktStatus.OPPRETTET,
        kanLoses: true,
      },
    ],
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
    } as Fagsak,
  },
};

export const AksjonspunktErIkkeGodkjentAvBeslutter: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
        status: AksjonspunktStatus.OPPRETTET,
        kanLoses: true,
      },
    ],
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
      {
        definisjon: AksjonspunktKode.OVERSTYR_DEKNINGSGRAD,
        status: AksjonspunktStatus.UTFORT,
        kanLoses: true,
        begrunnelse: 'Er endret til 80 fordi...',
      },
    ],
    soknad: {
      oppgittFordeling: {
        startDatoForPermisjon: '2019-01-01',
        dekningsgrader: {
          avklartDekningsgrad: 80,
          søker: {
            søknadsdato: '2019-01-02',
            dekningsgrad: 100,
          },
        },
      },
    } as Soknad,
  },
};

export const HarFåttDekningsgradAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.AVKLAR_DEKNINGSGRAD,
        status: AksjonspunktStatus.OPPRETTET,
        kanLoses: true,
      },
    ],
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      bruker: {
        navn: 'Helga Utvikler',
        kjønn: NavBrukerKjonn.KVINNE,
      },
      annenPart: {
        navn: 'Espen Utvikler',
        kjønn: NavBrukerKjonn.MANN,
      },
    } as Fagsak,
    soknad: {
      oppgittFordeling: {
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
      },
    } as Soknad,
  },
};

export const HarFåttDekningsgradAksjonspunktMedUkjentAndrePart: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.AVKLAR_DEKNINGSGRAD,
        status: AksjonspunktStatus.OPPRETTET,
        kanLoses: true,
      },
    ],
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      bruker: {
        navn: 'Helga Utvikler',
        kjønn: NavBrukerKjonn.KVINNE,
      },
      annenPart: {
        navn: 'Espen Utvikler',
        kjønn: NavBrukerKjonn.UDEFINERT,
      },
    } as Fagsak,
    soknad: {
      oppgittFordeling: {
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
      },
    } as Soknad,
  },
};

export const DekningsgradAksjonspunktErSendtTIlbakeFraBeslutter: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.AVKLAR_DEKNINGSGRAD,
        status: AksjonspunktStatus.OPPRETTET,
        kanLoses: true,
        begrunnelse: 'Dette er en begrunnelse',
      },
    ],
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      bruker: {
        navn: 'Helga Utvikler',
        kjønn: NavBrukerKjonn.KVINNE,
      },
      annenPart: {
        navn: 'Espen Utvikler',
        kjønn: NavBrukerKjonn.MANN,
      },
    } as Fagsak,
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.AVKLAR_DEKNINGSGRAD]: {
        notAccepted: true,
      },
    },
    soknad: {
      oppgittFordeling: {
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
      },
    } as Soknad,
  },
};
