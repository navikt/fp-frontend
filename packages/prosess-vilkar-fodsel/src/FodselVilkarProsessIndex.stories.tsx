import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  Avslagsarsak,
  FagsakYtelseType,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, Fagsak, Vilkar } from '@navikt/fp-types';

import { FodselVilkarProsessIndex } from './FodselVilkarProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  behandlingsresultat: {},
} as Behandling;

const meta = {
  title: 'prosess/prosess-vilkar-fodsel',
  component: FodselVilkarProsessIndex,
  args: {
    submitCallback: action('button-click') as (data: any) => Promise<any>,
    alleKodeverk: alleKodeverk as any,
    isAksjonspunktOpen: true,
    alleMerknaderFraBeslutter: {},
    setFormData: () => undefined,
    vilkar: [
      {
        lovReferanse: '§§Dette er en lovreferanse',
      },
    ] as Vilkar[],
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    fagsak: {} as Fagsak,
  },
} satisfies Meta<typeof FodselVilkarProsessIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunkt: Story = {
  args: {
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
  },
};

export const OppfyltVilkår: Story = {
  args: {
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
  },
};

export const AvslåttVilkår: Story = {
  args: {
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
  },
};
