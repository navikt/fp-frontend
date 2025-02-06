import { type ComponentProps } from 'react';

import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  KlageVurdering as klageVurderingCodes,
  KlageVurderingOmgjoer as klageVurderingOmgjoerType,
} from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, KlageVurdering } from '@navikt/fp-types';

import { KlagevurderingProsessIndex } from './KlagevurderingProsessIndex';

const meta = {
  title: 'prosess/klage/prosess-klagevurdering',
  component: KlagevurderingProsessIndex,
  decorators: [withFormData, withPanelData],
  args: {
    saveKlage: action('button-click') as (data: any) => Promise<void>,
    previewCallback: action('button-click') as (data: any) => Promise<void>,
    readOnlySubmitButton: false,
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
        klageVurdering: klageVurderingCodes.MEDHOLD_I_KLAGE,
        klageMedholdArsak: 'ULIK_VURDERING',
        klageVurderingOmgjoer: klageVurderingOmgjoerType.GUNST_MEDHOLD_I_KLAGE,
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
        klageVurdering: klageVurderingCodes.STADFESTE_YTELSESVEDTAK,
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
        klageVurdering: klageVurderingCodes.HJEMSENDE_UTEN_Å_OPPHEVE,
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
        klageVurdering: klageVurderingCodes.OPPHEVE_YTELSESVEDTAK,
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
