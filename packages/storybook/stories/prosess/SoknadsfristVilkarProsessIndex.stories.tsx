import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import avslagsarsakCodes from '@fpsak-frontend/kodeverk/src/avslagsarsakCodes';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import SoknadsfristVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-soknadsfrist';
import {
  Aksjonspunkt,
  Behandling, FamilieHendelseSamling, Soknad, Vilkar,
} from '@fpsak-frontend/types';

import alleKodeverk from '../mocks/alleKodeverk.json';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const vilkar = [{
  vilkarType: {
    kode: vilkarType.SOKNADFRISTVILKARET,
  },
  merknadParametere: {
    antallDagerSoeknadLevertForSent: '2',
  },
}] as Vilkar[];

const soknad = {
  soknadType: {
    kode: soknadType.FODSEL,
  },
  mottattDato: '2019-01-01',
  fodselsdatoer: { 1: '2019-01-01' } as {[key: number]: string},
  begrunnelseForSenInnsending: 'Dette er en begrunnelse',
} as Soknad;

const familiehendelse = {
  gjeldende: {
    avklartBarn: [{
      fodselsdato: '2019-01-02',
    }],
  },
} as FamilieHendelseSamling;

const standardProsessProps = {
  behandling,
  aksjonspunkter: [],
  alleKodeverk: alleKodeverk as any,
  submitCallback: action('button-click') as () => Promise<any>,
  isReadOnly: boolean('readOnly', false),
  isAksjonspunktOpen: boolean('harApneAksjonspunkter', true),
  readOnlySubmitButton: boolean('readOnly', false),
  status: '',
  vilkar,
  alleMerknaderFraBeslutter: {},
  setFormData: () => undefined,
};

export default {
  title: 'prosess/prosess-vilkar-soknadsfrist',
  component: SoknadsfristVilkarProsessIndex,
  decorators: [withKnobs],
};

export const visÅpentAksjonspunkt = () => (
  <SoknadsfristVilkarProsessIndex
    {...standardProsessProps}
    soknad={object('soknad', soknad)}
    familiehendelse={object('familiehendelse', familiehendelse)}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.SOKNADSFRISTVILKARET,
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
      },
      begrunnelse: undefined,
      vilkarType: {
        kode: vilkarType.SOKNADFRISTVILKARET,
      },
    }] as Aksjonspunkt[]}
    status={vilkarUtfallType.IKKE_VURDERT}
  />
);

export const visOppfyltVilkår = () => (
  <SoknadsfristVilkarProsessIndex
    {...standardProsessProps}
    behandling={{
      uuid: '1',
      versjon: 1,
      behandlingsresultat: {},
    } as Behandling}
    soknad={object('soknad', soknad)}
    familiehendelse={object('familiehendelse', familiehendelse)}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.SOKNADSFRISTVILKARET,
      },
      status: {
        kode: aksjonspunktStatus.UTFORT,
      },
      begrunnelse: 'Dette vilkåret er godkjent',
      vilkarType: {
        kode: vilkarType.SOKNADFRISTVILKARET,
      },
    }] as Aksjonspunkt[]}
    isReadOnly={boolean('isReadOnly', true)}
    readOnlySubmitButton={boolean('readOnlySubmitButton', true)}
    status={vilkarUtfallType.OPPFYLT}
  />
);

export const visAvslåttVilkår = () => (
  <SoknadsfristVilkarProsessIndex
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
    soknad={object('soknad', soknad)}
    familiehendelse={object('familiehendelse', familiehendelse)}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.SOKNADSFRISTVILKARET,
      },
      status: {
        kode: aksjonspunktStatus.UTFORT,
      },
      begrunnelse: 'Dette vilkåret er avslått',
      vilkarType: {
        kode: vilkarType.SOKNADFRISTVILKARET,
      },
    }] as Aksjonspunkt[]}
    isReadOnly={boolean('isReadOnly', true)}
    readOnlySubmitButton={boolean('readOnlySubmitButton', true)}
    status={vilkarUtfallType.IKKE_OPPFYLT}
  />
);
