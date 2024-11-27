import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  BehandlingType,
  InnsynResultatType,
  Kommunikasjonsretning,
} from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, Fagsak, Innsyn } from '@navikt/fp-types';
import { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import VedtakInnsynProsessIndex from './VedtakInnsynProsessIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
  sprakkode: 'NO',
} as Behandling;

const defaultAksjonspunkter = [
  {
    definisjon: AksjonspunktKode.VURDER_INNSYN,
    status: AksjonspunktStatus.UTFORT,
    begrunnelse: 'Dette er utført',
  },
  {
    definisjon: AksjonspunktKode.FORESLA_VEDTAK,
    status: AksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
  },
] as Aksjonspunkt[];

export default {
  title: 'prosess/innsyn/prosess-vedtak-innsyn',
  component: VedtakInnsynProsessIndex,
};

const Template: StoryFn<{
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  innsyn: Innsyn;
  forhandsvisCallback: (data: any) => Promise<any>;
  readOnly?: boolean;
  aksjonspunkter?: Aksjonspunkt[];
}> = ({ submitCallback, innsyn, forhandsvisCallback, readOnly = false, aksjonspunkter = defaultAksjonspunkter }) => (
  <VedtakInnsynProsessIndex
    behandling={behandling}
    alleKodeverk={alleKodeverk as any}
    aksjonspunkter={aksjonspunkter}
    submitCallback={submitCallback}
    isReadOnly={readOnly}
    isAksjonspunktOpen
    readOnlySubmitButton={false}
    status=""
    vilkar={[]}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    innsyn={innsyn}
    saksnummer="123434"
    alleDokumenter={[
      {
        journalpostId: '2',
        dokumentId: '3',
        tittel: 'Dette er et dokument',
        tidspunkt: '2017-08-02T00:54:25.455',
        kommunikasjonsretning: Kommunikasjonsretning.INN,
      },
    ]}
    previewCallback={forhandsvisCallback}
    fagsak={{} as Fagsak}
  />
);

export const PanelForInnvilgetVedtak = Template.bind({});
PanelForInnvilgetVedtak.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  forhandsvisCallback: action('button-click') as any,
  innsyn: {
    dokumenter: [
      {
        journalpostId: '2',
        dokumentId: '3',
        fikkInnsyn: true,
      },
    ],
    vedtaksdokumentasjon: [
      {
        behandlingUuid: '48528d21-89bb-4453-b1eb-c8649273a37c',
        tittel: BehandlingType.FORSTEGANGSSOKNAD,
        opprettetDato: '2019-01-01',
      },
    ],
    innsynResultatType: InnsynResultatType.INNVILGET,
    innsynMottattDato: '2019-01-01',
  },
};

export const PanelForAvvistVedtak = Template.bind({});
PanelForAvvistVedtak.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  forhandsvisCallback: action('button-click') as any,
  innsyn: {
    dokumenter: [
      {
        journalpostId: '2',
        dokumentId: '3',
        fikkInnsyn: true,
      },
    ],
    vedtaksdokumentasjon: [
      {
        behandlingUuid: '48528d21-89bb-4453-b1eb-c8649273a37c',
        tittel: BehandlingType.FORSTEGANGSSOKNAD,
        opprettetDato: '2019-01-01',
      },
    ],
    innsynResultatType: InnsynResultatType.AVVIST,
    innsynMottattDato: '2019-01-01',
  },
};

export const PanelForAvvistVedtakReadonly = Template.bind({});
PanelForAvvistVedtakReadonly.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  forhandsvisCallback: action('button-click') as any,
  readOnly: true,
  aksjonspunkter: [
    defaultAksjonspunkter[0],
    {
      ...defaultAksjonspunkter[1],
      status: AksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette er en vurdering',
    },
  ],
  innsyn: {
    dokumenter: [
      {
        journalpostId: '2',
        dokumentId: '3',
        fikkInnsyn: true,
      },
    ],
    vedtaksdokumentasjon: [
      {
        behandlingUuid: '48528d21-89bb-4453-b1eb-c8649273a37c',
        tittel: BehandlingType.FORSTEGANGSSOKNAD,
        opprettetDato: '2019-01-01',
      },
    ],
    innsynResultatType: InnsynResultatType.AVVIST,
    innsynMottattDato: '2019-01-01',
  },
};
