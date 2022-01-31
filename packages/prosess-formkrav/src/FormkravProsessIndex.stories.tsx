import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import klageVurderingCodes from '@fpsak-frontend/kodeverk/src/klageVurdering';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import FormkravProsessIndex from '@fpsak-frontend/prosess-formkrav';
import { Aksjonspunkt, Behandling, KlageVurdering } from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { ProsessAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

const behandling = {
  uuid: '1',
  versjon: 1,
  sprakkode: 'NO',
} as Behandling;

const avsluttedeBehandlinger = [{
  uuid: '1',
  type: behandlingType.FORSTEGANGSSOKNAD,
  avsluttet: '2017-08-02T00:54:25.455',
}];

export default {
  title: 'prosess/klage/prosess-formkrav',
  component: FormkravProsessIndex,
};

const Template: Story<{
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  aksjonspunkter: Aksjonspunkt[];
}> = ({
  submitCallback,
  aksjonspunkter,
}) => (
  <FormkravProsessIndex
    behandling={behandling}
    klageVurdering={{
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: klageVurderingCodes.AVVIS_KLAGE,
        fritekstTilBrev: 'test',
        godkjentAvMedunderskriver: false,
      },
      klageFormkravResultatKA: {
        avvistArsaker: ['TEST'],
      },
    } as KlageVurdering}
    submitCallback={submitCallback}
    isReadOnly={false}
    readOnlySubmitButton={false}
    alleKodeverk={alleKodeverk as any}
    avsluttedeBehandlinger={avsluttedeBehandlinger}
    aksjonspunkter={aksjonspunkter}
    alleMerknaderFraBeslutter={{}}
    status=""
    vilkar={[]}
    isAksjonspunktOpen={false}
    setFormData={() => undefined}
  />
);

export const FormkravPanelForAksjonspunktNfp = Template.bind({});
FormkravPanelForAksjonspunktNfp.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_NFP,
  }] as Aksjonspunkt[],
};

export const FormkravPanelForAksjonspunktKa = Template.bind({});
FormkravPanelForAksjonspunktKa.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_KA,
  }] as Aksjonspunkt[],
};
