import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus, BehandlingType, SoknadType } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Behandling, FamilieHendelse, FamilieHendelseSamling, Soknad } from '@navikt/fp-types';

import { FodselFaktaIndex } from './FodselFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const behandling = {
  uuid: '1',
  versjon: 1,
  type: BehandlingType.FORSTEGANGSSOKNAD,
} as Behandling;

const familieHendelse = {
  register: {
    avklartBarn: [
      {
        fodselsdato: '2019-01-10',
      },
    ],
  },
  gjeldende: {
    avklartBarn: [
      {
        fodselsdato: '2019-01-01',
      },
    ],
    termindato: '2019-01-01',
    utstedtdato: '2019-01-01',
    antallBarnTermin: 1,
    vedtaksDatoSomSvangerskapsuke: 43,
    erOverstyrt: false,
    morForSykVedFodsel: true,
    dokumentasjonForeligger: true,
    brukAntallBarnFraTps: true,
  },
} as FamilieHendelseSamling;

const soknad = {
  fodselsdatoer: { 1: '2019-01-10' } as { [key: number]: string },
  termindato: '2019-01-01',
  utstedtdato: '2019-01-02',
  antallBarn: 1,
  soknadType: SoknadType.FODSEL,
} as Soknad;

const soknadOriginalBehandling = {
  ...soknad,
};

const familiehendelseOriginalBehandling = {
  avklartBarn: [
    {
      fodselsdato: '2019-01-10',
    },
  ],
  termindato: '2019-01-01',
  antallBarnTermin: 1,
} as FamilieHendelse;

const defaultAksjonspunkter = [
  {
    definisjon: AksjonspunktKode.TERMINBEKREFTELSE,
    status: AksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
  },
];

const merknaderFraBeslutter = {
  notAccepted: false,
};

const meta = {
  title: 'fakta/fakta-fodsel',
  component: FodselFaktaIndex,
  args: {
    submitCallback: action('button-click') as (data: any) => Promise<void>,
    readOnly: false,
    harApneAksjonspunkter: true,
    submittable: true,
    alleKodeverk: alleKodeverk as any,
    setFormData: () => undefined,
    behandling,
    soknad,
    familiehendelse: familieHendelse,
    soknadOriginalBehandling,
    familiehendelseOriginalBehandling,
  },
} satisfies Meta<typeof FodselFaktaIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const AksjonspunktTerminbekreftelse: Story = {
  args: {
    aksjonspunkter: defaultAksjonspunkter,
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.TERMINBEKREFTELSE]: merknaderFraBeslutter,
    },
    submitCallback: action('button-click') as (data: any) => Promise<any>,
  },
};

export const AksjonspunktSjekkManglendeFødsel: Story = {
  args: {
    aksjonspunkter: defaultAksjonspunkter.map(a => ({
      ...a,
      definisjon: AksjonspunktKode.SJEKK_MANGLENDE_FODSEL,
    })),
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.SJEKK_MANGLENDE_FODSEL]: merknaderFraBeslutter,
    },
    submitCallback: action('button-click') as (data: any) => Promise<any>,
  },
};

export const ReadonlyPanel: Story = {
  args: {
    readOnly: true,
    harApneAksjonspunkter: false,
    aksjonspunkter: defaultAksjonspunkter.map(a => ({
      ...a,
      status: AksjonspunktStatus.UTFORT,
      definisjon: AksjonspunktKode.SJEKK_MANGLENDE_FODSEL,
      begrunnelse: 'Dette er en begrunnelse',
    })),
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.SJEKK_MANGLENDE_FODSEL]: merknaderFraBeslutter,
    },
    submitCallback: action('button-click') as (data: any) => Promise<any>,
  },
};

export const PanelForFødselssammenligningNårDetIkkeFinnesAksjonspunkter: Story = {
  args: {
    aksjonspunkter: [],
    alleMerknaderFraBeslutter: {},
    submitCallback: action('button-click') as (data: any) => Promise<any>,
  },
};
