import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  AksjonspunktKode,
  BehandlingType,
  BehandlingStatus,
  AksjonspunktStatus,
  FagsakYtelseType,
  NavBrukerKjonn,
} from '@navikt/fp-kodeverk';
import { Behandling, Aksjonspunkt, Soknad, Fagsak } from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import SakenFaktaIndex from './SakenFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';

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

export default {
  title: 'fakta/fakta-saken',
  component: SakenFaktaIndex,
};

const Template: StoryFn<{
  aksjonspunkter: Aksjonspunkt[];
  alleMerknaderFraBeslutter?: { [key: string]: { notAccepted?: boolean } };
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  søknad?: Soknad;
  fagsak?: Fagsak;
  kanOverstyreAccess?: boolean;
}> = ({
  aksjonspunkter,
  alleMerknaderFraBeslutter = {},
  submitCallback = promiseAction(),
  søknad = defaultSøknad,
  fagsak = defaultFagsak,
  kanOverstyreAccess = true,
}) => (
  <SakenFaktaIndex
    aksjonspunkter={aksjonspunkter}
    fagsak={fagsak}
    submitCallback={submitCallback}
    readOnly={false}
    submittable
    alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
    alleKodeverk={alleKodeverk as any}
    setFormData={() => undefined}
    behandling={behandling as Behandling}
    harApneAksjonspunkter={aksjonspunkter.some(ap => ap.status === AksjonspunktStatus.OPPRETTET)}
    soknad={søknad}
    kanOverstyreAccess={kanOverstyreAccess}
  />
);

export const StartdatoForForeldrepengerOgDekningsgrad = Template.bind({});
StartdatoForForeldrepengerOgDekningsgrad.args = {
  aksjonspunkter: [],
};

export const StartdatoForForeldrepengerOgDekningsgradMedAnnenPart = Template.bind({});
StartdatoForForeldrepengerOgDekningsgradMedAnnenPart.args = {
  aksjonspunkter: [],
  fagsak: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    bruker: {
      navn: 'Helga Utvikler',
    },
    annenPart: {
      navn: 'Espen Utvikler',
    },
  } as Fagsak,
};

export const KanIkkeOverstyreDekningsgrad = Template.bind({});
KanIkkeOverstyreDekningsgrad.args = {
  aksjonspunkter: [],
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
};

export const ApentAksjonspunktForInnhentingAvDokumentasjon = Template.bind({});
ApentAksjonspunktForInnhentingAvDokumentasjon.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
      status: AksjonspunktStatus.OPPRETTET,
      kanLoses: true,
    },
  ],
};

export const ApentAksjonspunktForInnhentingAvDokumentasjonVedSvp = Template.bind({});
ApentAksjonspunktForInnhentingAvDokumentasjonVedSvp.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
      status: AksjonspunktStatus.OPPRETTET,
      kanLoses: true,
    },
  ],
  fagsak: {
    fagsakYtelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
  } as Fagsak,
};

export const AksjonspunktErIkkeGodkjentAvBeslutter = Template.bind({});
AksjonspunktErIkkeGodkjentAvBeslutter.args = {
  aksjonspunkter: [
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
};

export const DekningsgradErEndret = Template.bind({});
DekningsgradErEndret.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.OVERSTYR_DEKNINGSGRAD,
      status: AksjonspunktStatus.UTFORT,
      kanLoses: true,
      begrunnelse: 'Er endret til 80 fordi...',
    },
  ],
  søknad: {
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
};

export const HarFåttDekningsgradAksjonspunkt = Template.bind({});
HarFåttDekningsgradAksjonspunkt.args = {
  aksjonspunkter: [
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
  søknad: {
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
};

export const HarFåttDekningsgradAksjonspunktMedUkjentAndrePart = Template.bind({});
HarFåttDekningsgradAksjonspunktMedUkjentAndrePart.args = {
  aksjonspunkter: [
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
  søknad: {
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
};

export const DekningsgradAksjonspunktErSendtTIlbakeFraBeslutter = Template.bind({});
DekningsgradAksjonspunktErSendtTIlbakeFraBeslutter.args = {
  aksjonspunkter: [
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
  søknad: {
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
};
