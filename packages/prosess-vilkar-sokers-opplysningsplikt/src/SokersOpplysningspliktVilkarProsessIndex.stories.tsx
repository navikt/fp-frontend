import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus, Avslagsarsak, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, Fagsak, Soknad } from '@navikt/fp-types';

import { SokersOpplysningspliktVilkarProsessIndex } from './SokersOpplysningspliktVilkarProsessIndex';

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

const meta = {
  title: 'prosess/prosess-vilkar-sokers-opplysningsplikt',
  component: SokersOpplysningspliktVilkarProsessIndex,
  args: {
    submitCallback: action('button-click') as (data: any) => Promise<any>,
    alleKodeverk: alleKodeverk as any,
    isAksjonspunktOpen: true,
    vilkar: [],
    alleMerknaderFraBeslutter: {},
    setFormData: () => undefined,
    soknad,
    arbeidsgiverOpplysningerPerId,
    fagsak: {} as Fagsak,
  },
} satisfies Meta<typeof SokersOpplysningspliktVilkarProsessIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunkt: Story = {
  args: {
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
  },
};

export const OppfyltVilkår: Story = {
  args: {
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
        definisjon: AksjonspunktKode.SOKERS_OPPLYSNINGSPLIKT_MANU,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'Dette vilkåret er avslått',
      },
    ] as Aksjonspunkt[],
    isReadOnly: true,
    readOnlySubmitButton: true,
    status: VilkarUtfallType.IKKE_OPPFYLT,
  },
};
