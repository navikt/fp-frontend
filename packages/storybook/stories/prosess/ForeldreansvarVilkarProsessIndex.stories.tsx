import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import avslagsarsakCodes from '@fpsak-frontend/kodeverk/src/avslagsarsakCodes';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import ForeldreansvarVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-foreldreansvar';
import { Aksjonspunkt, Behandling } from '@fpsak-frontend/types';

import withReduxProvider from '../../decorators/withRedux';

import alleKodeverk from '../mocks/alleKodeverk.json';

const standardProsessProps = {
  alleKodeverk: alleKodeverk as any,
  submitCallback: action('button-click') as () => Promise<any>,
  isReadOnly: boolean('readOnly', false),
  isAksjonspunktOpen: boolean('harApneAksjonspunkter', true),
  readOnlySubmitButton: boolean('readOnly', false),
  status: '',
  vilkar: [],
};

export default {
  title: 'prosess/prosess-vilkar-foreldreansvar',
  component: ForeldreansvarVilkarProsessIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visÅpentAksjonspunkt2Ledd = () => (
  <ForeldreansvarVilkarProsessIndex
    {...standardProsessProps}
    behandling={{
      id: 1,
      versjon: 1,
    } as Behandling}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD,
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
      },
      begrunnelse: undefined,
    }] as Aksjonspunkt[]}
    status={vilkarUtfallType.IKKE_VURDERT}
    isEngangsstonad={boolean('isEngangsstonad', false)}
    isForeldreansvar2Ledd={boolean('isForeldreansvar2Ledd', true)}
  />
);

export const visOppfyltVilkår2Ledd = () => (
  <ForeldreansvarVilkarProsessIndex
    {...standardProsessProps}
    behandling={{
      id: 1,
      versjon: 1,
      behandlingsresultat: {},
    } as Behandling}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD,
      },
      status: {
        kode: aksjonspunktStatus.UTFORT,
      },
      begrunnelse: 'Dette vilkåret er godkjent',
    }] as Aksjonspunkt[]}
    isReadOnly={boolean('isReadOnly', true)}
    readOnlySubmitButton={boolean('readOnlySubmitButton', true)}
    status={vilkarUtfallType.OPPFYLT}
    isEngangsstonad={boolean('isEngangsstonad', false)}
    isForeldreansvar2Ledd={boolean('isForeldreansvar2Ledd', true)}
  />
);

export const visAvslåttVilkår2Ledd = () => (
  <ForeldreansvarVilkarProsessIndex
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
        kode: aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD,
      },
      status: {
        kode: aksjonspunktStatus.UTFORT,
      },
      begrunnelse: 'Dette vilkåret er avslått',
    }] as Aksjonspunkt[]}
    isReadOnly={boolean('isReadOnly', true)}
    readOnlySubmitButton={boolean('readOnlySubmitButton', true)}
    status={vilkarUtfallType.IKKE_OPPFYLT}
    isEngangsstonad={boolean('isEngangsstonad', false)}
    isForeldreansvar2Ledd={boolean('isForeldreansvar2Ledd', true)}
  />
);

export const visÅpentAksjonspunkt4Ledd = () => (
  <ForeldreansvarVilkarProsessIndex
    {...standardProsessProps}
    behandling={{
      id: 1,
      versjon: 1,
    } as Behandling}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD,
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
      },
      begrunnelse: undefined,
    }] as Aksjonspunkt[]}
    status={vilkarUtfallType.IKKE_VURDERT}
    isEngangsstonad={false}
    isForeldreansvar2Ledd={boolean('isForeldreansvar2Ledd', false)}
  />
);

export const visOppfyltVilkår4Ledd = () => (
  <ForeldreansvarVilkarProsessIndex
    {...standardProsessProps}
    behandling={{
      id: 1,
      versjon: 1,
      behandlingsresultat: {},
    } as Behandling}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD,
      },
      status: {
        kode: aksjonspunktStatus.UTFORT,
      },
      begrunnelse: 'Dette vilkåret er godkjent',
    }] as Aksjonspunkt[]}
    isReadOnly={boolean('isReadOnly', true)}
    readOnlySubmitButton={boolean('readOnlySubmitButton', true)}
    status={vilkarUtfallType.OPPFYLT}
    isEngangsstonad={false}
    isForeldreansvar2Ledd={boolean('isForeldreansvar2Ledd', false)}
  />
);

export const visAvslåttVilkår4Ledd = () => (
  <ForeldreansvarVilkarProsessIndex
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
        kode: aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD,
      },
      status: {
        kode: aksjonspunktStatus.UTFORT,
      },
      begrunnelse: 'Dette vilkåret er avslått',
    }] as Aksjonspunkt[]}
    isReadOnly={boolean('isReadOnly', true)}
    readOnlySubmitButton={boolean('readOnlySubmitButton', true)}
    status={vilkarUtfallType.IKKE_OPPFYLT}
    isEngangsstonad={false}
    isForeldreansvar2Ledd={boolean('isForeldreansvar2Ledd', false)}
  />
);
