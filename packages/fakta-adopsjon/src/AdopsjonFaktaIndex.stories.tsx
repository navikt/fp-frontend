import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus, SoknadType } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Behandling, FamilieHendelseSamling, Soknad } from '@navikt/fp-types';

import { AdopsjonFaktaIndex } from './AdopsjonFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const familieHendelse = {
  gjeldende: {
    adopsjonFodelsedatoer: {
      1: '2018-01-01',
      2: '2000-01-02',
    } as Record<number, string>,
  },
} as FamilieHendelseSamling;

const soknad = {
  fodselsdatoer: { 1: '2019-01-10' } as Record<number, string>,
  termindato: '2019-01-01',
  utstedtdato: '2019-01-02',
  antallBarn: 1,
  soknadType: SoknadType.FODSEL,
  farSokerType: 'ADOPTERER_ALENE',
  omsorgsovertakelseDato: '2022-09-14',
  barnetsAnkomstTilNorgeDato: '2022-09-13',
} as Soknad;

const merknaderFraBeslutter = {
  notAccepted: false,
};

const meta = {
  title: 'fakta/fakta-adopsjon',
  component: AdopsjonFaktaIndex,
  args: {
    soknad,
    familiehendelse: familieHendelse,
    readOnly: false,
    harApneAksjonspunkter: true,
    submittable: true,
    setFormData: () => undefined,
    behandling: behandling,
    submitCallback: action('button-click') as (data: any) => Promise<void>,
    isForeldrepengerFagsak: true,
    alleKodeverk: alleKodeverk as any,
  },
} satisfies Meta<typeof AdopsjonFaktaIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const AksjonspunktForAdopsjonsvilkåret: Story = {
  args: {
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.ADOPSJONSDOKUMENTAJON,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
        kanLoses: true,
      },
    ],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.ADOPSJONSDOKUMENTAJON]: merknaderFraBeslutter,
    },
  },
};

export const AksjonspunktForOmSøkerErMannSomAdoptererAlene: Story = {
  args: {
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
        kanLoses: true,
      },
    ],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE]: merknaderFraBeslutter,
    },
  },
};

export const AksjonspunktForOmAdopsjonGjelderEktefellesBarn: Story = {
  args: {
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
        kanLoses: true,
      },
    ],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]: merknaderFraBeslutter,
    },
  },
};

export const IkkeVisBarnetsAnkomstDatoForEngangsstønad: Story = {
  args: {
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
        kanLoses: true,
      },
    ],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]: merknaderFraBeslutter,
    },
    isForeldrepengerFagsak: false,
  },
};
