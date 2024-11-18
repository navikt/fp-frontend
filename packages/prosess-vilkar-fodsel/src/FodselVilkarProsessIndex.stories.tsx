import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  VilkarUtfallType,
  Avslagsarsak,
  FagsakYtelseType,
} from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, Fagsak, Vilkar } from '@navikt/fp-types';
import { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import FodselVilkarProsessIndex from './FodselVilkarProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  behandlingsresultat: {},
} as Behandling;

export default {
  title: 'prosess/prosess-vilkar-fodsel',
  component: FodselVilkarProsessIndex,
};

const Template: StoryFn<{
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  isReadOnly: boolean;
  readOnlySubmitButton: boolean;
  status: string;
}> = ({ submitCallback, behandling, aksjonspunkter, isReadOnly, readOnlySubmitButton, status }) => (
  <FodselVilkarProsessIndex
    behandling={behandling}
    alleKodeverk={alleKodeverk as any}
    aksjonspunkter={aksjonspunkter}
    submitCallback={submitCallback}
    isReadOnly={isReadOnly}
    isAksjonspunktOpen
    readOnlySubmitButton={readOnlySubmitButton}
    status={status}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    vilkar={
      [
        {
          lovReferanse: '§§Dette er en lovreferanse',
        },
      ] as Vilkar[]
    }
    ytelseTypeKode={FagsakYtelseType.FORELDREPENGER}
    fagsak={{} as Fagsak}
  />
);

export const ÅpentAksjonspunkt = Template.bind({});
ÅpentAksjonspunkt.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  behandling: defaultBehandling,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
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
      definisjon: AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
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
      definisjon: AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
      status: AksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette vilkåret er avslått',
    },
  ] as Aksjonspunkt[],
  isReadOnly: true,
  readOnlySubmitButton: true,
  status: VilkarUtfallType.IKKE_OPPFYLT,
};
