import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  lagVilkår,
  type PanelDataArgs,
  type PanelOverstyringContextArgs,
  withMellomlagretFormData,
  withPanelData,
  withPanelOverstyring,
} from '@navikt/fp-storybook-utils';
import type { BehandlingFpSak, Fagsak } from '@navikt/fp-types';

import { VilkarresultatMedOverstyringProsessIndex } from './VilkarresultatMedOverstyringProsessIndex';

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

const defaultFagsak = {
  aktørId: '9999999999999',
  behandlingTypeKanOpprettes: [],
  behandlinger: [],
  bruker: { fødselsdato: '1979-01-01', fødselsnummer: '12345678901', kjønn: 'K', navn: 'Søker Søkersen', språkkode: 'NB' },
  brukerManglerAdresse: false,
  dekningsgrad: 100,
  fagsakMarkeringer: [],
  fagsakYtelseType: 'ES',
  harVergeIÅpenBehandling: false,
  historikkinnslag: [],
  kontrollResultat: { kontrollresultat: 'IKKE_KLASSIFISERT' },
  notater: [],
  relasjonsRolleType: 'MORA',
  sakSkalTilInfotrygd: false,
  saksnummer: '12345',
  status: 'UBEH',
} satisfies Fagsak;

const meta = {
  title: 'prosess/prosess-vilkar-overstyring',
  component: VilkarresultatMedOverstyringProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData, withPanelOverstyring],
  args: {
    behandling: defaultBehandling,
    kanOverstyreAccess: { isEnabled: true, employeeHasAccess: true },
    status: 'OPPFYLT',
    medlemskapManuellBehandlingResultat: undefined,
  },
  render: props => {
    return <VilkarresultatMedOverstyringProsessIndex {...props} />;
  },
} satisfies Meta<
  PanelDataArgs & PanelOverstyringContextArgs & ComponentProps<typeof VilkarresultatMedOverstyringProsessIndex>
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const OverstyringspanelForFødsel: Story = {
  args: {
    panelTekstKode: 'Inngangsvilkar.Fodselsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_FØDSELSVILKÅRET,
    vilkår: lagVilkår('FP_VK_1'),
  },
};

export const OverstyringspanelForMedlemskap: Story = {
  args: {
    panelTekstKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET,
    vilkår: lagVilkår('FP_VK_2'),
    behandling: {
      ...defaultBehandling,
      type: 'BT-004',
    } satisfies BehandlingFpSak,
  },
};

export const OverstyringErUtførtForMedlemskap: Story = {
  args: {
    panelTekstKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET,
    vilkår: lagVilkår('FP_VK_2'),
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [
        lagAksjonspunkt(AksjonspunktKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET, {
          status: 'UTFO',
        }),
      ],
    } satisfies BehandlingFpSak,
    status: 'IKKE_OPPFYLT',
    medlemskapManuellBehandlingResultat: {
      avslagskode: '1025',
      opphørFom: '2022-02-19',
    },
  },
};

export const OverstyringForForutgåendeMedlemskap: Story = {
  args: {
    fagsak: defaultFagsak,
    panelTekstKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    vilkår: lagVilkår('FP_VK_2_F'),
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,
  },
};

export const OverstyringErUtførtForForutgåendeMedlemskap: Story = {
  args: {
    fagsak: defaultFagsak,
    panelTekstKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,
    vilkår: lagVilkår('FP_VK_2_F'),
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [
        lagAksjonspunkt(AksjonspunktKode.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR, {
          status: 'UTFO',
        }),
      ],
    } satisfies BehandlingFpSak,
    status: 'IKKE_OPPFYLT',
    medlemskapManuellBehandlingResultat: {
      avslagskode: '1052',
      medlemFom: '2022-02-19',
    },
  },
};

export const OverstyringspanelForOpptjening: Story = {
  args: {
    panelTekstKode: 'Inngangsvilkar.Opptjeningsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKÅRET,
    vilkår: lagVilkår('FP_VK_23'),
  },
};

export const OverstyrtAksjonspunktSomErBekreftet: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        avslagsarsak: '1002',
        harRedigertVedtaksbrev: false,
        id: 1,
        type: 'AVSLÅTT',
        vedtaksbrevStatus: 'INGEN_VEDTAKSBREV',
      },
      aksjonspunkt: [
        lagAksjonspunkt(AksjonspunktKode.OVERSTYRING_AV_FØDSELSVILKÅRET, {
          status: 'UTFO',
        }),
      ],
    } satisfies BehandlingFpSak,
    status: 'IKKE_OPPFYLT',
    panelTekstKode: 'Inngangsvilkar.Fodselsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_FØDSELSVILKÅRET,
    vilkår: lagVilkår('FP_VK_1'),
  },
};

export const OverstyringAvOpptjeningsvilkåretSomIkkeErVurdert: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        avslagsarsak: '1035',
        harRedigertVedtaksbrev: false,
        id: 1,
        type: 'OPPHØR',
        vedtaksbrevStatus: 'INGEN_VEDTAKSBREV',
      },
    } satisfies BehandlingFpSak,
    status: 'IKKE_VURDERT',
    panelTekstKode: 'Inngangsvilkar.Opptjeningsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKÅRET,
    vilkår: lagVilkår('FP_VK_23'),
  },
};

export const LøpendeMedlemskapSomErOverstyrtVisesBareIReadOnlyMode: Story = {
  args: {
    panelTekstKode: 'Behandlingspunkt.FortsattMedlemskap',
    overstyringApKode: AksjonspunktKode.UTGÅTT_6012,
    vilkår: lagVilkår('FP_VK_2_L'),
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [
        lagAksjonspunkt(AksjonspunktKode.UTGÅTT_6012, {
          status: 'UTFO',
        }),
      ],
    } satisfies BehandlingFpSak,
    status: 'OPPFYLT',
    kanOverstyreAccess: { isEnabled: false, employeeHasAccess: false },
    isReadOnly: true,
  },
};

export const LøpendeMedlemskapVisningSomIkkeErOverstyrt: Story = {
  args: {
    panelTekstKode: 'Behandlingspunkt.FortsattMedlemskap',
    overstyringApKode: AksjonspunktKode.UTGÅTT_6012,
    vilkår: lagVilkår('FP_VK_2_L'),
    status: 'IKKE_OPPFYLT',
    kanOverstyreAccess: { isEnabled: false, employeeHasAccess: false },
    isReadOnly: true,
  },
};
