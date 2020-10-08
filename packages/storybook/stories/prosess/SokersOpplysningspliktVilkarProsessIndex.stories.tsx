import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import dokumentTypeId from '@fpsak-frontend/kodeverk/src/dokumentTypeId';
import avslagsarsakCodes from '@fpsak-frontend/kodeverk/src/avslagsarsakCodes';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import SokersOpplysningspliktVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-sokers-opplysningsplikt';
import { Aksjonspunkt, Behandling, Soknad } from '@fpsak-frontend/types';

import withReduxProvider from '../../decorators/withRedux';

import alleKodeverk from '../mocks/alleKodeverk.json';

const behandling = {
  id: 1,
  versjon: 1,
} as Behandling;

const soknad = {
  manglendeVedlegg: [{
    dokumentType: {
      kode: dokumentTypeId.INNTEKTSMELDING,
    },
    arbeidsgiver: {
      organisasjonsnummer: '1234',
      fødselsdato: '2019-01-01',
      navn: 'arbeidsgiver1',
    },
  }],
} as Soknad;

const standardProsessProps = {
  behandling,
  aksjonspunkter: [],
  alleKodeverk: alleKodeverk as any,
  submitCallback: action('button-click') as () => Promise<any>,
  isReadOnly: boolean('readOnly', false),
  isAksjonspunktOpen: boolean('harApneAksjonspunkter', true),
  readOnlySubmitButton: boolean('readOnly', false),
  status: '',
  vilkar: [],
};

export default {
  title: 'prosess/prosess-vilkar-sokers-opplysningsplikt',
  component: SokersOpplysningspliktVilkarProsessIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visÅpentAksjonspunkt = () => (
  <SokersOpplysningspliktVilkarProsessIndex
    {...standardProsessProps}
    soknad={soknad}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.SOKERS_OPPLYSNINGSPLIKT_MANU,
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
  <SokersOpplysningspliktVilkarProsessIndex
    {...standardProsessProps}
    behandling={{
      id: 1,
      versjon: 1,
      behandlingsresultat: {},
    } as Behandling}
    soknad={soknad}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.SOKERS_OPPLYSNINGSPLIKT_MANU,
      },
      status: {
        kode: aksjonspunktStatus.UTFORT,
      },
      begrunnelse: 'Dette vilkåret er godkjent',
    }] as Aksjonspunkt[]}
    isReadOnly={boolean('isReadOnly', true)}
    readOnlySubmitButton={boolean('readOnlySubmitButton', true)}
    status={vilkarUtfallType.OPPFYLT}
  />
);

export const visAvslåttVilkår = () => (
  <SokersOpplysningspliktVilkarProsessIndex
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
    soknad={soknad}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.SOKERS_OPPLYSNINGSPLIKT_MANU,
      },
      status: {
        kode: aksjonspunktStatus.UTFORT,
      },
      begrunnelse: 'Dette vilkåret er avslått',
    }] as Aksjonspunkt[]}
    isReadOnly={boolean('isReadOnly', true)}
    readOnlySubmitButton={boolean('readOnlySubmitButton', true)}
    status={vilkarUtfallType.IKKE_OPPFYLT}
  />
);
