import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { behandlingType, klageVurdering as klageVurderingCodes, AksjonspunktCode } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Behandling, Fagsak, KlageVurdering } from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import FormkravProsessIndex from './FormkravProsessIndex';
import FormkravMellomlagretDataType from './types/FormkravMellomlagretDataType';

const behandling = {
  uuid: '1',
  versjon: 1,
  sprakkode: 'NO',
} as Behandling;

const avsluttedeBehandlinger = [
  {
    uuid: '1',
    type: behandlingType.FORSTEGANGSSOKNAD,
    avsluttet: '2017-08-02T00:54:25.455',
  },
];

export default {
  title: 'prosess/klage/prosess-formkrav',
  component: FormkravProsessIndex,
};

const Template: StoryFn<{
  klageVurdering: KlageVurdering;
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  lagreFormkravVurdering: (data: FormkravMellomlagretDataType) => Promise<void>;
  aksjonspunkter: Aksjonspunkt[];
}> = ({ klageVurdering, submitCallback, lagreFormkravVurdering, aksjonspunkter }) => (
  <FormkravProsessIndex
    behandling={behandling}
    klageVurdering={klageVurdering}
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
    lagreFormkravVurdering={lagreFormkravVurdering}
    fagsak={{} as Fagsak}
  />
);

export const FormkravPanelForAksjonspunktNfp = Template.bind({});
FormkravPanelForAksjonspunktNfp.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  lagreFormkravVurdering: action('button-click') as (data: any) => Promise<any>,
  klageVurdering: {
    klageVurderingResultatNK: {
      klageVurdertAv: 'NK',
      klageVurdering: klageVurderingCodes.AVVIS_KLAGE,
      fritekstTilBrev: 'test',
    },
  } as KlageVurdering,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.VURDERING_AV_FORMKRAV_KLAGE_NFP,
    },
  ] as Aksjonspunkt[],
};

export const FormkravPanelForAksjonspunktKaIkkePåklagd = Template.bind({});
FormkravPanelForAksjonspunktKaIkkePåklagd.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  lagreFormkravVurdering: action('button-click') as (data: any) => Promise<any>,
  klageVurdering: {
    klageFormkravResultatKA: {
      begrunnelse: 'Dette er en begrunnelse',
      erKlagefirstOverholdt: true,
      erKlageKonkret: true,
    },
  } as KlageVurdering,
  aksjonspunkter: [],
};

export const FormkravPanelForAksjonspunktKaValgtBehandling = Template.bind({});
FormkravPanelForAksjonspunktKaValgtBehandling.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  lagreFormkravVurdering: action('button-click') as (data: any) => Promise<any>,
  klageVurdering: {
    klageFormkravResultatKA: {
      paKlagdBehandlingUuid: '1',
      begrunnelse: 'Dette er en begrunnelse',
      erKlagerPart: true,
      erSignert: true,
    },
  } as KlageVurdering,
  aksjonspunkter: [],
};
