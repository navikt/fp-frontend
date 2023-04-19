import React from 'react';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import {
  AksjonspunktCode,
  aksjonspunktStatus,
  behandlingType,
  kommunikasjonsretning,
  innsynResultatType,
} from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Behandling, Innsyn, InnsynDokument } from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import InnsynProsessIndex from './InnsynProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  behandlingPaaVent: false,
} as Behandling;

const defaultAksjonspunkter = [
  {
    definisjon: AksjonspunktCode.VURDER_INNSYN,
    status: aksjonspunktStatus.OPPRETTET,
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
        kommunikasjonsretning: kommunikasjonsretning.INN,
      },
    ]}
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
        tittel: behandlingType.FORSTEGANGSSOKNAD,
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
      status: aksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette er en begrunnelse',
    },
  ],
  isReadOnly: true,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  innsyn: {
    dokumenter: [] as InnsynDokument[],
    innsynResultatType: innsynResultatType.INNVILGET,
    innsynMottattDato: '2021-12-12',
    vedtaksdokumentasjon: [
      {
        behandlingUuid: '48528d21-89bb-4453-b1eb-c8649273a37c',
        tittel: behandlingType.FORSTEGANGSSOKNAD,
        opprettetDato: '2019-01-01',
      },
    ],
  } as Innsyn,
};
