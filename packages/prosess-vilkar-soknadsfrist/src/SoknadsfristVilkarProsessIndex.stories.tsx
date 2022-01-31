import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import avslagsarsakCodes from '@fpsak-frontend/kodeverk/src/avslagsarsakCodes';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt,
  Behandling, FamilieHendelseSamling, Soknad, Vilkar,
} from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { ProsessAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import SoknadsfristVilkarProsessIndex from './SoknadsfristVilkarProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  behandlingsresultat: {},
} as Behandling;

const vilkar = [{
  vilkarType: vilkarType.SOKNADFRISTVILKARET,
  merknadParametere: {
    antallDagerSoeknadLevertForSent: '2',
  },
}] as Vilkar[];

const soknad = {
  soknadType: soknadType.FODSEL,
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

export default {
  title: 'prosess/prosess-vilkar-soknadsfrist',
  component: SoknadsfristVilkarProsessIndex,
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
  <SoknadsfristVilkarProsessIndex
    behandling={behandling}
    alleKodeverk={alleKodeverk as any}
    submitCallback={submitCallback}
    isReadOnly={isReadOnly}
    isAksjonspunktOpen
    readOnlySubmitButton={readOnlySubmitButton}
    vilkar={vilkar}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    soknad={soknad}
    familiehendelse={familiehendelse}
    aksjonspunkter={aksjonspunkter}
    status={status}
  />
);

export const ÅpentAksjonspunkt = Template.bind({});
ÅpentAksjonspunkt.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  behandling: defaultBehandling,
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.SOKNADSFRISTVILKARET,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    vilkarType: vilkarType.SOKNADFRISTVILKARET,
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
    definisjon: aksjonspunktCodes.SOKNADSFRISTVILKARET,
    status: aksjonspunktStatus.UTFORT,
    begrunnelse: 'Dette vilkåret er godkjent',
    vilkarType: vilkarType.SOKNADFRISTVILKARET,
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
      avslagsarsak: avslagsarsakCodes.INGEN_BEREGNINGSREGLER,
    },
  } as Behandling,
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.SOKNADSFRISTVILKARET,
    status: aksjonspunktStatus.UTFORT,
    begrunnelse: 'Dette vilkåret er avslått',
    vilkarType: vilkarType.SOKNADFRISTVILKARET,
  }] as Aksjonspunkt[],
  isReadOnly: true,
  readOnlySubmitButton: true,
  status: vilkarUtfallType.IKKE_OPPFYLT,
};
