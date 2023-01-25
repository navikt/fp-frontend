import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import vilkarType from '@navikt/fp-kodeverk/src/vilkarType';
import soknadType from '@navikt/fp-kodeverk/src/soknadType';
import avslagsarsakCodes from '@navikt/fp-kodeverk/src/avslagsarsakCodes';
import vilkarUtfallType from '@navikt/fp-kodeverk/src/vilkarUtfallType';
import aksjonspunktStatus from '@navikt/fp-kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt,
  Behandling, FamilieHendelseSamling, Soknad, Vilkar,
} from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import SoknadsfristVilkarProsessIndex from './SoknadsfristVilkarProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  behandlingsresultat: {},
} as Behandling;

const vilkar = [{
  vilkarType: vilkarType.SOKNADFRISTVILKARET,
}] as Vilkar[];

const soknad = {
  soknadType: soknadType.FODSEL,
  mottattDato: '2019-01-01',
  fodselsdatoer: { 1: '2019-01-01' } as {[key: number]: string},
  begrunnelseForSenInnsending: 'Dette er en begrunnelse',
  søknadsfrist: {
    mottattDato: '2019-01-01',
    utledetSøknadsfrist: '2019-07-01',
    dagerOversittetFrist: 2,
  },
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
