import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, BehandlingType, KlageVurdering as klageVurderingCodes } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, Fagsak, KlageVurdering } from '@navikt/fp-types';

import { FormkravProsessIndex } from './FormkravProsessIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
  sprakkode: 'NO',
} as Behandling;

const avsluttedeBehandlinger = [
  {
    uuid: '1',
    type: BehandlingType.FORSTEGANGSSOKNAD,
    avsluttet: '2017-08-02T00:54:25.455',
  },
];

const meta = {
  title: 'prosess/klage/prosess-formkrav',
  component: FormkravProsessIndex,
  args: {
    behandling,
    submitCallback: action('button-click') as (data: any) => Promise<void>,
    lagreFormkravVurdering: action('button-click') as (data: any) => Promise<void>,
    isReadOnly: false,
    readOnlySubmitButton: false,
    alleKodeverk: alleKodeverk as any,
    avsluttedeBehandlinger,
    alleMerknaderFraBeslutter: {},
    status: '',
    vilkar: [],
    isAksjonspunktOpen: false,
    setFormData: () => undefined,
    fagsak: {} as Fagsak,
  },
} satisfies Meta<typeof FormkravProsessIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FormkravPanelForAksjonspunktNfp: Story = {
  args: {
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: klageVurderingCodes.AVVIS_KLAGE,
        fritekstTilBrev: 'test',
      },
    } as KlageVurdering,
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.VURDERING_AV_FORMKRAV_KLAGE_NFP,
      },
    ] as Aksjonspunkt[],
  },
};

export const FormkravPanelForAksjonspunktKaIkkePåklagd: Story = {
  args: {
    klageVurdering: {
      klageFormkravResultatKA: {
        begrunnelse: 'Dette er en begrunnelse',
        erKlagefirstOverholdt: true,
        erKlageKonkret: true,
      },
    } as KlageVurdering,
    aksjonspunkter: [],
  },
};

export const FormkravPanelForAksjonspunktKaValgtBehandling: Story = {
  args: {
    klageVurdering: {
      klageFormkravResultatKA: {
        paKlagdBehandlingUuid: '1',
        begrunnelse: 'Dette er en begrunnelse',
        erKlagerPart: true,
        erSignert: true,
      },
    } as KlageVurdering,
    aksjonspunkter: [],
  },
};
