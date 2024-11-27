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
import { Aksjonspunkt, Behandling, Fagsak, Innsyn, InnsynDokument } from '@navikt/fp-types';
import { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import InnsynProsessIndex from './InnsynProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  behandlingPaaVent: false,
} as Behandling;

const defaultAksjonspunkter = [
  {
    definisjon: AksjonspunktKode.VURDER_INNSYN,
    status: AksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
  },
] as Aksjonspunkt[];

export default {
  title: 'prosess/innsyn/prosess-innsyn',
  component: InnsynProsessIndex,
};

const Template: StoryFn<{
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  innsyn: Innsyn;
  isReadOnly?: boolean;
}> = ({ behandling, aksjonspunkter, submitCallback, innsyn, isReadOnly = false }) => (
  <InnsynProsessIndex
    behandling={behandling}
    alleKodeverk={alleKodeverk as any}
    aksjonspunkter={aksjonspunkter}
    submitCallback={submitCallback}
    isReadOnly={isReadOnly}
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
    fagsak={{} as Fagsak}
  />
);

export const PanelForVurderingAvInnsyn = Template.bind({});
PanelForVurderingAvInnsyn.args = {
  behandling: defaultBehandling,
  aksjonspunkter: defaultAksjonspunkter,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  innsyn: {
    dokumenter: [] as InnsynDokument[],
    vedtaksdokumentasjon: [
      {
        behandlingUuid: '48528d21-89bb-4453-b1eb-c8649273a37c',
        tittel: BehandlingType.FORSTEGANGSSOKNAD,
        opprettetDato: '2019-01-01',
      },
    ],
  } as Innsyn,
};

export const InnsynSattPaVent = Template.bind({});
InnsynSattPaVent.args = {
  behandling: {
    ...defaultBehandling,
    fristBehandlingPåVent: '2021-12-25',
  },
  aksjonspunkter: [
    {
      ...defaultAksjonspunkter[0],
      status: AksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette er en begrunnelse',
    },
  ],
  isReadOnly: true,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  innsyn: {
    dokumenter: [] as InnsynDokument[],
    innsynResultatType: InnsynResultatType.INNVILGET,
    innsynMottattDato: '2021-12-12',
    vedtaksdokumentasjon: [
      {
        behandlingUuid: '48528d21-89bb-4453-b1eb-c8649273a37c',
        tittel: BehandlingType.FORSTEGANGSSOKNAD,
        opprettetDato: '2019-01-01',
      },
    ],
  } as Innsyn,
};
