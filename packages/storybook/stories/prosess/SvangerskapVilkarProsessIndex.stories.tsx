import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import avslagsarsakCodes from '@fpsak-frontend/kodeverk/src/avslagsarsakCodes';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import SvangerskapVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-svangerskap';
import { Aksjonspunkt, Behandling, Vilkar } from '@fpsak-frontend/types';

import withReduxProvider from '../../decorators/withRedux';

import alleKodeverk from '../mocks/alleKodeverk.json';

const standardProsessProps = {
  aksjonspunkter: [],
  alleKodeverk: alleKodeverk as any,
  submitCallback: action('button-click') as () => Promise<any>,
  isReadOnly: boolean('readOnly', false),
  isAksjonspunktOpen: boolean('harApneAksjonspunkter', true),
  readOnlySubmitButton: boolean('readOnly', false),
  status: '',
  alleMerknaderFraBeslutter: {},
};

export default {
  title: 'prosess/prosess-vilkar-svangerskap',
  component: SvangerskapVilkarProsessIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visÅpentAksjonspunkt = () => (
  <SvangerskapVilkarProsessIndex
    {...standardProsessProps}
    behandling={{
      id: 1,
      versjon: 1,
    } as Behandling}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.SVANGERSKAPSVILKARET,
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
  <SvangerskapVilkarProsessIndex
    {...standardProsessProps}
    behandling={{
      id: 1,
      versjon: 1,
      behandlingsresultat: {},
    } as Behandling}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.SVANGERSKAPSVILKARET,
      },
      status: {
        kode: aksjonspunktStatus.UTFORT,
      },
      begrunnelse: 'Dette vilkåret er godkjent',
    }] as Aksjonspunkt[]}
    isReadOnly={boolean('isReadOnly', true)}
    readOnlySubmitButton={boolean('readOnlySubmitButton', true)}
    isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
    status={vilkarUtfallType.OPPFYLT}
    vilkar={[{
      lovReferanse: '§§Dette er en lovreferanse',
    }] as Vilkar[]}
  />
);

export const visAvslåttVilkår = () => (
  <SvangerskapVilkarProsessIndex
    {...standardProsessProps}
    behandling={{
      id: 1,
      versjon: 1,
      behandlingsresultat: {
        avslagsarsak: {
          kode: avslagsarsakCodes.INGEN_BEREGNINGSREGLER,
        },
      },
    } as Behandling}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.SVANGERSKAPSVILKARET,
      },
      status: {
        kode: aksjonspunktStatus.UTFORT,
      },
      begrunnelse: 'Dette vilkåret er avslått',
    }] as Aksjonspunkt[]}
    isReadOnly={boolean('isReadOnly', true)}
    readOnlySubmitButton={boolean('readOnlySubmitButton', true)}
    isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
    status={vilkarUtfallType.IKKE_OPPFYLT}
    vilkar={[{
      lovReferanse: '§§Dette er en lovreferanse',
    }] as Vilkar[]}
  />
);
