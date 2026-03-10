import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';
import type { ArbeidsgiverOpplysningerPerId, BehandlingFpSak, Soknad } from '@navikt/fp-types';

import { SokersOpplysningspliktVilkarProsessIndex } from './SokersOpplysningspliktVilkarProsessIndex';

const arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId = {
  1234: {
    erPrivatPerson: false,
    identifikator: '1234',
    referanse: '1234',
    navn: 'arbeidsgiver1',
  },
};

const søknad = {
  manglendeVedlegg: [
    {
      dokumentType: 'I500027',
      dokumentTittel: 'Inntektsmelding',
      arbeidsgiverReferanse: '1234',
      brukerHarSagtAtIkkeKommer: false,
    },
    {
      dokumentType: 'FØDSELSATTEST',
      dokumentTittel: 'Fødselsattest',
      arbeidsgiverReferanse: undefined,
      brukerHarSagtAtIkkeKommer: false,
    },
  ],
  mottattDato: '2019-01-01',
  søknadsfrist: {
    dagerOversittetFrist: 0,
  },
} satisfies Soknad;

const defaultBehandling = {
  aksjonspunkt: [],
  aktivPapirsøknad: false,
  behandlendeEnhetId: '4820',
  behandlendeEnhetNavn: 'NAV Familie- og pensjonsytelser Oslo 1',
  behandlingHenlagt: false,
  behandlingPåVent: false,
  behandlingÅrsaker: [],
  harSattEndringsdato: false,
  harSøknad: true,
  id: 1,
  links: [],
  opprettet: '2020-01-01',
  språkkode: 'NB',
  status: 'UTRED',
  type: 'BT-002',
  uuid: '1',
  versjon: 1,
  vilkår: [],
} satisfies BehandlingFpSak;

const meta = {
  title: 'prosess/prosess-vilkar-sokers-opplysningsplikt',
  component: SokersOpplysningspliktVilkarProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    søknad,
    arbeidsgiverOpplysningerPerId,
  },
  render: args => <SokersOpplysningspliktVilkarProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof SokersOpplysningspliktVilkarProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const UtførtAPMedOppfyltVilkår: Story = {
  args: {
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5017, {
        status: 'UTFO',
      }),
    ],
    isReadOnly: true,
    isSubmittable: false,
    status: 'OPPFYLT',
  },
};

export const UtførtAPMedAvslåttVilkår: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        avslagsarsak: '1099',
        harRedigertVedtaksbrev: false,
        id: 1,
        type: 'AVSLÅTT',
        vedtaksbrevStatus: 'INGEN_VEDTAKSBREV',
      },
    } satisfies BehandlingFpSak,
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5017, {
        status: 'UTFO',
      }),
    ],
    isReadOnly: true,
    isSubmittable: false,
    status: 'IKKE_OPPFYLT',
  },
};

export const KanOverstyreVilkår: Story = {
  args: {
    aksjonspunkterForPanel: [],
    status: 'OPPFYLT',
    isReadOnly: false,
    isSubmittable: true,
  },
};

export const HarOverstyrtMedOppfyltVilkår: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        avslagsarsak: undefined,
        harRedigertVedtaksbrev: false,
        id: 1,
        type: 'INNVILGET',
        vedtaksbrevStatus: 'INGEN_VEDTAKSBREV',
      },
    } satisfies BehandlingFpSak,
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.SØKERS_OPPLYSNINGSPLIKT_OVST, { status: 'UTFO', aksjonspunktType: 'SAOV' }),
    ],
    isReadOnly: true,
    isSubmittable: false,
    status: 'OPPFYLT',
  },
};

export const HarOverstyrtMedAvslåttVilkår: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        avslagsarsak: '1099',
        harRedigertVedtaksbrev: false,
        id: 1,
        type: 'AVSLÅTT',
        vedtaksbrevStatus: 'INGEN_VEDTAKSBREV',
      },
    } satisfies BehandlingFpSak,
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.SØKERS_OPPLYSNINGSPLIKT_OVST, { status: 'UTFO', aksjonspunktType: 'SAOV' }),
    ],
    isReadOnly: true,
    isSubmittable: false,
    status: 'IKKE_OPPFYLT',
  },
};
