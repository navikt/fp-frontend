import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import klageVurderingOmgjoerType from '@navikt/fp-kodeverk/src/klageVurderingOmgjoer';
import klageVurderingCodes from '@navikt/fp-kodeverk/src/klageVurdering';
import aksjonspunktCodes from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import KlagevurderingProsessIndex from '@navikt/fp-prosess-klagevurdering';
import { Aksjonspunkt, Behandling, KlageVurdering } from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

const behandling = {
  uuid: '1',
  versjon: 1,
  sprakkode: 'NO',
} as Behandling;

export default {
  title: 'prosess/klage/prosess-klagevurdering',
  component: KlagevurderingProsessIndex,
};

const Template: Story<{
  klageVurdering: KlageVurdering;
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  mellomlagre: (aksjonspunktData: any) => Promise<void>;
  forhandsvisCallback: (aksjonspunktData: any) => Promise<void>;
  aksjonspunkter: Aksjonspunkt[];
}> = ({
  klageVurdering,
  submitCallback,
  mellomlagre,
  forhandsvisCallback,
  aksjonspunkter,
}) => (
  <KlagevurderingProsessIndex
    behandling={behandling}
    alleKodeverk={alleKodeverk as any}
    submitCallback={submitCallback}
    isReadOnly={false}
    isAksjonspunktOpen
    readOnlySubmitButton={false}
    status=""
    vilkar={[]}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    klageVurdering={klageVurdering}
    saveKlage={mellomlagre}
    previewCallback={forhandsvisCallback}
    aksjonspunkter={aksjonspunkter}
  />
);

export const MedholdIKlageNk = Template.bind({});
MedholdIKlageNk.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  mellomlagre: action('button-click') as (data: any) => Promise<any>,
  forhandsvisCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [],
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
};

export const StadfestKlageNk = Template.bind({});
StadfestKlageNk.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  mellomlagre: action('button-click') as (data: any) => Promise<any>,
  forhandsvisCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [],
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
};

export const HjemsendtIKlageNk = Template.bind({});
HjemsendtIKlageNk.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  mellomlagre: action('button-click') as (data: any) => Promise<any>,
  forhandsvisCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [],
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
};

export const OpphevIKlageNk = Template.bind({});
OpphevIKlageNk.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  mellomlagre: action('button-click') as (data: any) => Promise<any>,
  forhandsvisCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [],
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
};

export const KlagevurderingMedAksjonspunktNfp = Template.bind({});
KlagevurderingMedAksjonspunktNfp.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  mellomlagre: action('button-click') as (data: any) => Promise<any>,
  forhandsvisCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.BEHANDLE_KLAGE_NFP,
  }] as Aksjonspunkt[],
  klageVurdering: {
    klageFormkravResultatKA: {
      avvistArsaker: ['IKKE_KONKRET'],
    },
    aktuelleHjemler: ['14-17'],
  } as KlageVurdering,
};
