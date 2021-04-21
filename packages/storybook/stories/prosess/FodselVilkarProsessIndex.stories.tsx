import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import avslagsarsakCodes from '@fpsak-frontend/kodeverk/src/avslagsarsakCodes';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import FodselVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-fodsel';
import { Aksjonspunkt, Behandling, Vilkar } from '@fpsak-frontend/types';

import alleKodeverk from '../mocks/alleKodeverk.json';

const behandling = {
  id: 1,
  versjon: 1,
} as Behandling;

const standardProsessProps = {
  behandling,
  alleKodeverk: alleKodeverk as any,
  aksjonspunkter: [],
  submitCallback: action('button-click') as () => Promise<any>,
  isReadOnly: boolean('readOnly', false),
  isAksjonspunktOpen: boolean('harApneAksjonspunkter', true),
  readOnlySubmitButton: boolean('readOnly', false),
  status: '',
  vilkar: [],
  alleMerknaderFraBeslutter: {},
  setFormData: () => undefined,
};

export default {
  title: 'prosess/prosess-vilkar-fodsel',
  component: FodselVilkarProsessIndex,
  decorators: [withKnobs],
};

export const visÅpentAksjonspunkt = () => (
  <FodselVilkarProsessIndex
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
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
  />
);

export const visOppfyltVilkår = () => (
  <FodselVilkarProsessIndex
    {...standardProsessProps}
    behandling={{
      id: 1,
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
    isReadOnly={boolean('isReadOnly', true)}
    readOnlySubmitButton={boolean('readOnlySubmitButton', true)}
    isAksjonspunktOpen={boolean('isAksjonspunktOpen', false)}
    status={vilkarUtfallType.OPPFYLT}
    vilkar={[{
      lovReferanse: '§§Dette er en lovreferanse',
    }] as Vilkar[]}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
  />
);

export const visAvslåttVilkår = () => (
  <FodselVilkarProsessIndex
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
        kode: aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
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
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
  />
);
