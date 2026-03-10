import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  lagFagsak,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';
import type { Ytelsefordeling } from '@navikt/fp-types';

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
} satisfies Ytelsefordeling;

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
    fagsak: lagFagsak({
      bruker: { fødselsdato: '1979-01-01', fødselsnummer: '12345678901', kjønn: 'K', navn: 'Helga Utvikler', språkkode: 'NB' },
      annenPart: {
        navn: 'Espen Utvikler',
        fødselsdato: '1990-01-01',
        fødselsnummer: '01019012345',
        kjønn: 'M',
        språkkode: 'NB',
      },
    }),
  },
};

export const KanIkkeOverstyreDekningsgrad: Story = {
  args: {
    aksjonspunkterForPanel: [],
    fagsak: lagFagsak({
      bruker: { fødselsdato: '1979-01-01', fødselsnummer: '12345678901', kjønn: 'K', navn: 'Helga Utvikler', språkkode: 'NB' },
      annenPart: {
        navn: 'Espen Utvikler',
        fødselsdato: '1990-01-01',
        fødselsnummer: '01019012345',
        kjønn: 'M',
        språkkode: 'NB',
      },
    }),
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
    fagsak: lagFagsak({ fagsakYtelseType: 'SVP' }),
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
    } satisfies Ytelsefordeling,
  },
};

export const HarFåttDekningsgradAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.AVKLAR_DEKNINGSGRAD)],
    fagsak: lagFagsak({
      bruker: { fødselsdato: '1979-01-01', fødselsnummer: '12345678901', kjønn: 'K', navn: 'Helga Utvikler', språkkode: 'NB' },
      annenPart: {
        navn: 'Espen Utvikler',
        kjønn: 'M',
        fødselsdato: '1990-01-01',
        fødselsnummer: '01019012345',
        språkkode: 'NB',
      },
    }),
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
    } satisfies Ytelsefordeling,
  },
};

export const HarFåttDekningsgradAksjonspunktMedUkjentAndrePart: Story = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.AVKLAR_DEKNINGSGRAD)],
    fagsak: lagFagsak({
      bruker: { fødselsdato: '1979-01-01', fødselsnummer: '12345678901', kjønn: 'K', navn: 'Helga Utvikler', språkkode: 'NB' },
      annenPart: {
        navn: 'Espen Utvikler',
        kjønn: '-',
        fødselsdato: '1990-01-01',
        fødselsnummer: '01019012345',
        språkkode: 'NB',
      },
    }),
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
    } satisfies Ytelsefordeling,
  },
};

export const DekningsgradAksjonspunktErSendtTIlbakeFraBeslutter: Story = {
  args: {
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.AVKLAR_DEKNINGSGRAD, {
        begrunnelse: 'Dette er en begrunnelse',
      }),
    ],
    fagsak: lagFagsak({
      bruker: { fødselsdato: '1979-01-01', fødselsnummer: '12345678901', kjønn: 'K', navn: 'Helga Utvikler', språkkode: 'NB' },
      annenPart: {
        navn: 'Espen Utvikler',
        kjønn: 'M',
        fødselsdato: '1990-01-01',
        fødselsnummer: '01019012345',
        språkkode: 'NB',
      },
    }),
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
    } satisfies Ytelsefordeling,
  },
};
