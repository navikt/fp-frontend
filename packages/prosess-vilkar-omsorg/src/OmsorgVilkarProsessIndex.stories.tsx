import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import avslagsarsakCodes from '@fpsak-frontend/kodeverk/src/avslagsarsakCodes';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt, Behandling } from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { ProsessAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import OmsorgVilkarProsessIndex from './OmsorgVilkarProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  behandlingsresultat: {},
} as Behandling;

export default {
  title: 'prosess/prosess-vilkar-omsorg',
  component: OmsorgVilkarProsessIndex,
};

const Template: Story<{
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  behandling: Behandling,
  aksjonspunkter: Aksjonspunkt[],
  isReadOnly: boolean,
  readOnlySubmitButton: boolean,
  status: string;
}> = ({
  submitCallback,
  behandling,
  aksjonspunkter,
  isReadOnly,
  readOnlySubmitButton,
  status,
}) => (
  <OmsorgVilkarProsessIndex
    alleKodeverk={alleKodeverk as any}
    submitCallback={submitCallback}
    isReadOnly={isReadOnly}
    isAksjonspunktOpen
    readOnlySubmitButton={readOnlySubmitButton}
    status={status}
    vilkar={[]}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    behandling={behandling}
    aksjonspunkter={aksjonspunkter}
  />
);

export const ÅpentAksjonspunkt = Template.bind({});
ÅpentAksjonspunkt.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  behandling: defaultBehandling,
  aksjonspunkter: [{
    definisjon: {
      kode: aksjonspunktCodes.MANUELL_VURDERING_AV_OMSORGSVILKARET,
    },
    status: {
      kode: aksjonspunktStatus.OPPRETTET,
    },
    begrunnelse: undefined,
  }] as Aksjonspunkt[],
  isReadOnly: false,
  readOnlySubmitButton: false,
  status: vilkarUtfallType.IKKE_VURDERT,
};

export const OppfyltVilkår = Template.bind({});
OppfyltVilkår.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  behandling: defaultBehandling,
  aksjonspunkter: [{
    definisjon: {
      kode: aksjonspunktCodes.MANUELL_VURDERING_AV_OMSORGSVILKARET,
    },
    status: {
      kode: aksjonspunktStatus.UTFORT,
    },
    begrunnelse: 'Dette vilkåret er godkjent',
  }] as Aksjonspunkt[],
  isReadOnly: true,
  readOnlySubmitButton: true,
  status: vilkarUtfallType.OPPFYLT,
};

export const AvslåttVilkår = Template.bind({});
AvslåttVilkår.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  behandling: {
    uuid: '1',
    versjon: 1,
    behandlingsresultat: {
      avslagsarsak: {
        kode: avslagsarsakCodes.INGEN_BEREGNINGSREGLER,
      },
    },
  } as Behandling,
  aksjonspunkter: [{
    definisjon: {
      kode: aksjonspunktCodes.MANUELL_VURDERING_AV_OMSORGSVILKARET,
    },
    status: {
      kode: aksjonspunktStatus.UTFORT,
    },
    begrunnelse: 'Dette vilkåret er avslått',
  }] as Aksjonspunkt[],
  isReadOnly: true,
  readOnlySubmitButton: true,
  status: vilkarUtfallType.IKKE_OPPFYLT,
};
