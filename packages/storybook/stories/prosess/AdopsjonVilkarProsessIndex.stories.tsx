import React from 'react';
import { action } from '@storybook/addon-actions';

import avslagsarsakCodes from '@fpsak-frontend/kodeverk/src/avslagsarsakCodes';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AdopsjonVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-adopsjon';
import { Aksjonspunkt, Behandling, Vilkar } from '@fpsak-frontend/types';

import alleKodeverk from '../mocks/alleKodeverk.json';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const standardProsessProps = {
  behandling,
  alleKodeverk: alleKodeverk as any,
  aksjonspunkter: [],
  submitCallback: action('button-click') as () => Promise<any>,
  isReadOnly: false,
  isAksjonspunktOpen: true,
  readOnlySubmitButton: false,
  status: '',
  vilkar: [],
  alleMerknaderFraBeslutter: {},
  setFormData: () => undefined,
};

export default {
  title: 'prosess/prosess-vilkar-adopsjon',
  component: AdopsjonVilkarProsessIndex,
};

export const visÅpentAksjonspunkt = () => (
  <AdopsjonVilkarProsessIndex
    {...standardProsessProps}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
      },
      begrunnelse: undefined,
    }] as Aksjonspunkt[]}
    status={vilkarUtfallType.IKKE_VURDERT}
    vilkar={[{
      lovReferanse: '§§Dette er en lovreferanse',
    }] as Vilkar[]}
  />
);

export const visOppfyltVilkår = () => (
  <AdopsjonVilkarProsessIndex
    {...standardProsessProps}
    behandling={{
      uuid: '1',
      versjon: 1,
      behandlingsresultat: {},
    } as Behandling}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
      },
      status: {
        kode: aksjonspunktStatus.UTFORT,
      },
      begrunnelse: 'Dette vilkåret er godkjent',
    }] as Aksjonspunkt[]}
    isReadOnly
    readOnlySubmitButton
    isAksjonspunktOpen
    status={vilkarUtfallType.OPPFYLT}
    vilkar={[{
      lovReferanse: '§§Dette er en lovreferanse',
    }] as Vilkar[]}
  />
);

export const visAvslåttVilkår = () => (
  <AdopsjonVilkarProsessIndex
    {...standardProsessProps}
    behandling={{
      uuid: '1',
      versjon: 1,
      behandlingsresultat: {
        avslagsarsak: {
          kode: avslagsarsakCodes.INGEN_BEREGNINGSREGLER,
        },
      },
    } as Behandling}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
      },
      status: {
        kode: aksjonspunktStatus.UTFORT,
      },
      begrunnelse: 'Dette vilkåret er avslått',
    }] as Aksjonspunkt[]}
    isReadOnly
    readOnlySubmitButton
    isAksjonspunktOpen
    status={vilkarUtfallType.IKKE_OPPFYLT}
    vilkar={[{
      lovReferanse: '§§Dette er en lovreferanse',
    }] as Vilkar[]}
  />
);
