import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import { AksjonspunktKode,AksjonspunktStatus, Avslagsarsak, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, Fagsak, Soknad } from '@navikt/fp-types';
import { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import SokersOpplysningspliktVilkarProsessIndex from './SokersOpplysningspliktVilkarProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  behandlingsresultat: {},
} as Behandling;

const arbeidsgiverOpplysningerPerId = {
  1234: {
    erPrivatPerson: false,
    identifikator: '1234',
    navn: 'arbeidsgiver1',
    fødselsdato: '2019-01-01',
  },
};

const soknad = {
  manglendeVedlegg: [
    {
      dokumentType: 'I000067',
      dokumentTittel: 'Inntektsmelding',
      arbeidsgiverReferanse: '1234',
    },
  ],
} as Soknad;

export default {
  title: 'prosess/prosess-vilkar-sokers-opplysningsplikt',
  component: SokersOpplysningspliktVilkarProsessIndex,
};

const Template: StoryFn<{
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  isReadOnly: boolean;
  readOnlySubmitButton: boolean;
  status: string;
}> = ({ submitCallback, behandling, aksjonspunkter, isReadOnly, readOnlySubmitButton, status }) => (
  <SokersOpplysningspliktVilkarProsessIndex
    behandling={behandling}
    alleKodeverk={alleKodeverk as any}
    submitCallback={submitCallback}
    isReadOnly={isReadOnly}
    isAksjonspunktOpen
    readOnlySubmitButton={readOnlySubmitButton}
    vilkar={[]}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    soknad={soknad}
    aksjonspunkter={aksjonspunkter}
    status={status}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    fagsak={{} as Fagsak}
  />
);

export const ÅpentAksjonspunkt = Template.bind({});
ÅpentAksjonspunkt.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  behandling: defaultBehandling,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.SOKERS_OPPLYSNINGSPLIKT_MANU,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
    },
  ] as Aksjonspunkt[],
  isReadOnly: false,
  readOnlySubmitButton: false,
  status: VilkarUtfallType.IKKE_VURDERT,
};

export const OppfyltVilkår = Template.bind({});
OppfyltVilkår.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  behandling: defaultBehandling,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.SOKERS_OPPLYSNINGSPLIKT_MANU,
      status: AksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette vilkåret er godkjent',
    },
  ] as Aksjonspunkt[],
  isReadOnly: true,
  readOnlySubmitButton: true,
  status: VilkarUtfallType.OPPFYLT,
};

export const AvslåttVilkår = Template.bind({});
AvslåttVilkår.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  behandling: {
    uuid: '1',
    versjon: 1,
    behandlingsresultat: {
      avslagsarsak: Avslagsarsak.INGEN_BEREGNINGSREGLER,
    },
  } as Behandling,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.SOKERS_OPPLYSNINGSPLIKT_MANU,
      status: AksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette vilkåret er avslått',
    },
  ] as Aksjonspunkt[],
  isReadOnly: true,
  readOnlySubmitButton: true,
  status: VilkarUtfallType.IKKE_OPPFYLT,
};
