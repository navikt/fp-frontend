import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  BehandlingStatus,
  BehandlingType,
  FagsakYtelseType,
  NavBrukerKjonn,
} from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Behandling, Fagsak, Soknad } from '@navikt/fp-types';

import { SakenFaktaIndex } from './SakenFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const promiseAction =
  () =>
  (...args: any): Promise<any> => {
    action('button-click')(...args);
    return Promise.resolve();
  };

const behandling = {
  uuid: '1',
  versjon: 2,
  status: BehandlingStatus.BEHANDLING_UTREDES,
  type: BehandlingType.FORSTEGANGSSOKNAD,
  behandlingPaaVent: false,
  behandlingHenlagt: false,
};

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

const defaultFagsak = {
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
} as Fagsak;

const meta = {
  title: 'fakta/fakta-saken',
  component: SakenFaktaIndex,
  args: {
    fagsak: defaultFagsak,
    submitCallback: promiseAction(),
    readOnly: false,
    submittable: true,
    alleMerknaderFraBeslutter: {},
    alleKodeverk: alleKodeverk as any,
    setFormData: () => undefined,
    behandling: behandling as Behandling,
    soknad: defaultSøknad,
    kanOverstyreAccess: true,
  },
} satisfies Meta<typeof SakenFaktaIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const StartdatoForForeldrepengerOgDekningsgrad: Story = {
  args: {
    aksjonspunkter: [],
    harApneAksjonspunkter: false,
  },
};

export const StartdatoForForeldrepengerOgDekningsgradMedAnnenPart: Story = {
  args: {
    aksjonspunkter: [],
    harApneAksjonspunkter: false,
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
    aksjonspunkter: [],
    harApneAksjonspunkter: false,
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
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
        status: AksjonspunktStatus.OPPRETTET,
        kanLoses: true,
      },
    ],
    harApneAksjonspunkter: true,
  },
};

export const ApentAksjonspunktForInnhentingAvDokumentasjonVedSvp: Story = {
  args: {
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
        status: AksjonspunktStatus.OPPRETTET,
        kanLoses: true,
      },
    ],
    harApneAksjonspunkter: true,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
    } as Fagsak,
  },
};

export const AksjonspunktErIkkeGodkjentAvBeslutter: Story = {
  args: {
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
        status: AksjonspunktStatus.OPPRETTET,
        kanLoses: true,
      },
    ],
    harApneAksjonspunkter: true,
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK]: {
        notAccepted: true,
      },
    },
  },
};

export const DekningsgradErEndret: Story = {
  args: {
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.OVERSTYR_DEKNINGSGRAD,
        status: AksjonspunktStatus.UTFORT,
        kanLoses: true,
        begrunnelse: 'Er endret til 80 fordi...',
      },
    ],
    harApneAksjonspunkter: false,
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
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.AVKLAR_DEKNINGSGRAD,
        status: AksjonspunktStatus.OPPRETTET,
        kanLoses: true,
      },
    ],
    harApneAksjonspunkter: true,
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
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.AVKLAR_DEKNINGSGRAD,
        status: AksjonspunktStatus.OPPRETTET,
        kanLoses: true,
      },
    ],
    harApneAksjonspunkter: true,
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
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.AVKLAR_DEKNINGSGRAD,
        status: AksjonspunktStatus.OPPRETTET,
        kanLoses: true,
        begrunnelse: 'Dette er en begrunnelse',
      },
    ],
    harApneAksjonspunkter: true,
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
