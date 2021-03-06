import React from 'react';
import { action } from '@storybook/addon-actions';

import avslagsarsakCodes from '@fpsak-frontend/kodeverk/src/avslagsarsakCodes';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OmsorgVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-omsorg';
import { Aksjonspunkt, Behandling } from '@fpsak-frontend/types';

import alleKodeverk from '../mocks/alleKodeverk.json';

const standardProsessProps = {
  alleKodeverk: alleKodeverk as any,
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
  title: 'prosess/prosess-vilkar-omsorg',
  component: OmsorgVilkarProsessIndex,
};

export const visÅpentAksjonspunkt = () => (
  <OmsorgVilkarProsessIndex
    {...standardProsessProps}
    behandling={{
      uuid: '1',
      versjon: 1,
    } as Behandling}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.MANUELL_VURDERING_AV_OMSORGSVILKARET,
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
      },
      begrunnelse: undefined,
    }] as Aksjonspunkt[]}
    status={vilkarUtfallType.IKKE_VURDERT}
  />
);

export const visOppfyltVilkår = () => (
  <OmsorgVilkarProsessIndex
    {...standardProsessProps}
    behandling={{
      uuid: '1',
      versjon: 1,
      behandlingsresultat: {},
    } as Behandling}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.MANUELL_VURDERING_AV_OMSORGSVILKARET,
      },
      status: {
        kode: aksjonspunktStatus.UTFORT,
      },
      begrunnelse: 'Dette vilkåret er godkjent',
    }] as Aksjonspunkt[]}
    isReadOnly
    readOnlySubmitButton
    status={vilkarUtfallType.OPPFYLT}
  />
);

export const visAvslåttVilkår = () => (
  <OmsorgVilkarProsessIndex
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
        kode: aksjonspunktCodes.MANUELL_VURDERING_AV_OMSORGSVILKARET,
      },
      status: {
        kode: aksjonspunktStatus.UTFORT,
      },
      begrunnelse: 'Dette vilkåret er avslått',
    }] as Aksjonspunkt[]}
    isReadOnly
    readOnlySubmitButton
    status={vilkarUtfallType.IKKE_OPPFYLT}
  />
);
