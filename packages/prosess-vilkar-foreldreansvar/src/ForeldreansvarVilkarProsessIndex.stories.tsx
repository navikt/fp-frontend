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

import ForeldreansvarVilkarProsessIndex from './ForeldreansvarVilkarProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  behandlingsresultat: {},
} as Behandling;

export default {
  title: 'prosess/prosess-vilkar-foreldreansvar',
  component: ForeldreansvarVilkarProsessIndex,
};

const Template: Story<{
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  behandling: Behandling,
  aksjonspunkter: Aksjonspunkt[],
  isReadOnly: boolean,
  readOnlySubmitButton: boolean,
  status: string;
  isForeldreansvar2Ledd: boolean,
}> = ({
  submitCallback,
  behandling,
  aksjonspunkter,
  isReadOnly,
  readOnlySubmitButton,
  status,
  isForeldreansvar2Ledd,
}) => (
  <ForeldreansvarVilkarProsessIndex
    alleKodeverk={alleKodeverk as any}
    submitCallback={submitCallback}
    isReadOnly={isReadOnly}
    isAksjonspunktOpen
    readOnlySubmitButton={readOnlySubmitButton}
    vilkar={[]}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    behandling={behandling}
    aksjonspunkter={aksjonspunkter}
    status={status}
    isEngangsstonad={false}
    isForeldreansvar2Ledd={isForeldreansvar2Ledd}
  />
);

export const ÅpentAksjonspunkt2Ledd = Template.bind({});
ÅpentAksjonspunkt2Ledd.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  behandling: defaultBehandling,
  aksjonspunkter: [{
    definisjon: {
      kode: aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD,
    },
    status: {
      kode: aksjonspunktStatus.OPPRETTET,
    },
    begrunnelse: undefined,
  }] as Aksjonspunkt[],
  isReadOnly: false,
  readOnlySubmitButton: false,
  status: vilkarUtfallType.IKKE_VURDERT,
  isForeldreansvar2Ledd: true,
};

export const OppfyltVilkår2Ledd = Template.bind({});
OppfyltVilkår2Ledd.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  behandling: defaultBehandling,
  aksjonspunkter: [{
    definisjon: {
      kode: aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD,
    },
    status: {
      kode: aksjonspunktStatus.UTFORT,
    },
    begrunnelse: 'Dette vilkåret er godkjent',
  }] as Aksjonspunkt[],
  isReadOnly: true,
  readOnlySubmitButton: true,
  status: vilkarUtfallType.OPPFYLT,
  isForeldreansvar2Ledd: true,
};

export const AvslåttVilkår2Ledd = Template.bind({});
AvslåttVilkår2Ledd.args = {
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
      kode: aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD,
    },
    status: {
      kode: aksjonspunktStatus.UTFORT,
    },
    begrunnelse: 'Dette vilkåret er avslått',
  }] as Aksjonspunkt[],
  isReadOnly: true,
  readOnlySubmitButton: true,
  status: vilkarUtfallType.IKKE_OPPFYLT,
  isForeldreansvar2Ledd: true,
};

export const ÅpentAksjonspunkt4Ledd = Template.bind({});
ÅpentAksjonspunkt4Ledd.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  behandling: defaultBehandling,
  aksjonspunkter: [{
    definisjon: {
      kode: aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD,
    },
    status: {
      kode: aksjonspunktStatus.OPPRETTET,
    },
    begrunnelse: undefined,
  }] as Aksjonspunkt[],
  isReadOnly: false,
  readOnlySubmitButton: false,
  status: vilkarUtfallType.IKKE_VURDERT,
  isForeldreansvar2Ledd: false,
};

export const OppfyltVilkår4Ledd = Template.bind({});
OppfyltVilkår4Ledd.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  behandling: defaultBehandling,
  aksjonspunkter: [{
    definisjon: {
      kode: aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD,
    },
    status: {
      kode: aksjonspunktStatus.UTFORT,
    },
    begrunnelse: 'Dette vilkåret er godkjent',
  }] as Aksjonspunkt[],
  isReadOnly: true,
  readOnlySubmitButton: true,
  status: vilkarUtfallType.OPPFYLT,
  isForeldreansvar2Ledd: false,
};

export const AvslåttVilkår4Ledd = Template.bind({});
AvslåttVilkår4Ledd.args = {
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
      kode: aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD,
    },
    status: {
      kode: aksjonspunktStatus.UTFORT,
    },
    begrunnelse: 'Dette vilkåret er avslått',
  }] as Aksjonspunkt[],
  isReadOnly: true,
  readOnlySubmitButton: true,
  status: vilkarUtfallType.IKKE_OPPFYLT,
  isForeldreansvar2Ledd: false,
};
