import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, KlageVurdering } from '@navikt/fp-types';

import { type TransformedValues } from './components/nfp/BehandleKlageFormNfp';
import type { KlagevurderingForhåndsvisData } from './components/nfp/PreviewKlageLink';
import { KlagevurderingProsessIndex } from './KlagevurderingProsessIndex';

const meta = {
  title: 'prosess/klage/prosess-klagevurdering',
  component: KlagevurderingProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    saveKlage: action('button-click') as (data: TransformedValues) => Promise<void>,
    previewCallback: action('button-click') as (data: KlagevurderingForhåndsvisData) => Promise<void>,
  },
  render: props => {
    return <KlagevurderingProsessIndex {...props} />;
  },
} satisfies Meta<PanelDataArgs & ComponentProps<typeof KlagevurderingProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const MedholdIKlageNk: Story = {
  args: {
    aksjonspunkterForPanel: [],
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: 'MEDHOLD_I_KLAGE',
        klageMedholdArsak: 'ULIK_VURDERING',
        klageVurderingOmgjoer: 'GUNST_MEDHOLD_I_KLAGE',
        fritekstTilBrev: 'test',
        begrunnelse: 'Dette er en begrunnelse',
      },
      klageFormkravResultatKA: {
        avvistArsaker: ['IKKE_KONKRET'],
      },
      aktuelleHjemler: ['14-17'],
    } as KlageVurdering,
  },
};

export const StadfestKlageNk: Story = {
  args: {
    aksjonspunkterForPanel: [],
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: 'STADFESTE_YTELSESVEDTAK',
        fritekstTilBrev: 'test',
        begrunnelse: 'Dette er en begrunnelse',
      },
      klageFormkravResultatKA: {
        avvistArsaker: ['IKKE_KONKRET'],
      },
      aktuelleHjemler: ['14-17'],
    } as KlageVurdering,
  },
};

export const HjemsendtIKlageNk: Story = {
  args: {
    aksjonspunkterForPanel: [],
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: 'HJEMSENDE_UTEN_Å_OPPHEVE',
        klageMedholdArsak: 'ULIK_VURDERING',
        fritekstTilBrev: 'test',
        begrunnelse: 'Dette er en begrunnelse',
      },
      klageFormkravResultatKA: {
        avvistArsaker: ['IKKE_KONKRET'],
      },
      aktuelleHjemler: ['14-17'],
    } as KlageVurdering,
  },
};

export const OpphevIKlageNk: Story = {
  args: {
    aksjonspunkterForPanel: [],
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: 'OPPHEVE_YTELSESVEDTAK',
        klageMedholdArsak: 'ULIK_VURDERING',
        fritekstTilBrev: 'test',
        begrunnelse: 'Dette er en begrunnelse',
      },
      klageFormkravResultatKA: {
        avvistArsaker: ['IKKE_KONKRET'],
      },
      aktuelleHjemler: ['14-17'],
    } as KlageVurdering,
  },
};

export const KlagevurderingMedAksjonspunktNfp: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.BEHANDLE_KLAGE_NFP,
      },
    ] as Aksjonspunkt[],
    klageVurdering: {
      klageFormkravResultatKA: {
        avvistArsaker: ['IKKE_KONKRET'],
      },
      aktuelleHjemler: ['14-17'],
    } as KlageVurdering,
  },
};
