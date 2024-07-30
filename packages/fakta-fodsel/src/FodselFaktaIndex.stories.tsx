import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { AksjonspunktCode, aksjonspunktStatus, soknadType, behandlingType } from '@navikt/fp-kodeverk';
import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { Behandling, FamilieHendelse, FamilieHendelseSamling, Soknad, Aksjonspunkt } from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import FodselFaktaIndex from './FodselFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';

const behandling = {
  uuid: '1',
  versjon: 1,
  type: behandlingType.FORSTEGANGSSOKNAD,
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
  soknadType: soknadType.FODSEL,
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
    definisjon: AksjonspunktCode.TERMINBEKREFTELSE,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
  },
];

const merknaderFraBeslutter = {
  notAccepted: false,
};

export default {
  title: 'fakta/fakta-fodsel',
  component: FodselFaktaIndex,
};

const Template: StoryFn<{
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  readOnly: boolean;
  harApneAksjonspunkter: boolean;
}> = ({
  aksjonspunkter,
  submitCallback,
  alleMerknaderFraBeslutter,
  readOnly = false,
  harApneAksjonspunkter = true,
}) => (
  <FodselFaktaIndex
    submitCallback={submitCallback}
    readOnly={readOnly}
    harApneAksjonspunkter={harApneAksjonspunkter}
    submittable
    alleKodeverk={alleKodeverk as any}
    setFormData={() => undefined}
    behandling={behandling}
    soknad={soknad}
    familiehendelse={familieHendelse}
    soknadOriginalBehandling={soknadOriginalBehandling}
    familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
    aksjonspunkter={aksjonspunkter}
    alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
  />
);

export const AksjonspunktTerminbekreftelse = Template.bind({});
AksjonspunktTerminbekreftelse.args = {
  aksjonspunkter: defaultAksjonspunkter,
  alleMerknaderFraBeslutter: {
    [AksjonspunktCode.TERMINBEKREFTELSE]: merknaderFraBeslutter,
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AksjonspunktSjekkManglendeFødsel = Template.bind({});
AksjonspunktSjekkManglendeFødsel.args = {
  aksjonspunkter: defaultAksjonspunkter.map(a => ({
    ...a,
    definisjon: AksjonspunktCode.SJEKK_MANGLENDE_FODSEL,
  })),
  alleMerknaderFraBeslutter: {
    [AksjonspunktCode.SJEKK_MANGLENDE_FODSEL]: merknaderFraBeslutter,
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ReadonlyPanel = Template.bind({});
ReadonlyPanel.args = {
  readOnly: true,
  harApneAksjonspunkter: false,
  aksjonspunkter: defaultAksjonspunkter.map(a => ({
    ...a,
    status: aksjonspunktStatus.UTFORT,
    definisjon: AksjonspunktCode.SJEKK_MANGLENDE_FODSEL,
    begrunnelse: 'Dette er en begrunnelse',
  })),
  alleMerknaderFraBeslutter: {
    [AksjonspunktCode.SJEKK_MANGLENDE_FODSEL]: merknaderFraBeslutter,
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const PanelForFødselssammenligningNårDetIkkeFinnesAksjonspunkter = Template.bind({});
PanelForFødselssammenligningNårDetIkkeFinnesAksjonspunkter.args = {
  aksjonspunkter: [],
  alleMerknaderFraBeslutter: {},
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
