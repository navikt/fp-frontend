import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  BehandlingType,
  InnsynResultatType,
  Kommunikasjonsretning,
} from '@navikt/fp-kodeverk';
import { alleKodeverk, withFormData } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, Fagsak } from '@navikt/fp-types';

import { VedtakInnsynProsessIndex } from './VedtakInnsynProsessIndex';

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

const meta = {
  title: 'prosess/innsyn/prosess-vedtak-innsyn',
  component: VedtakInnsynProsessIndex,
  decorators: [withFormData],
  args: {
    submitCallback: action('button-click') as (data: any) => Promise<void>,
    previewCallback: action('button-click') as any,
    aksjonspunkter: defaultAksjonspunkter,
    behandling,
    alleKodeverk: alleKodeverk as any,
    isReadOnly: false,
    isAksjonspunktOpen: true,
    readOnlySubmitButton: false,
    status: '',
    vilkar: [],
    alleMerknaderFraBeslutter: {},
    saksnummer: '123434',
    alleDokumenter: [
      {
        journalpostId: '2',
        dokumentId: '3',
        tittel: 'Dette er et dokument',
        tidspunkt: '2017-08-02T00:54:25.455',
        kommunikasjonsretning: Kommunikasjonsretning.INN,
      },
    ],
    fagsak: {} as Fagsak,
  },
} satisfies Meta<typeof VedtakInnsynProsessIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const PanelForInnvilgetVedtak: Story = {
  args: {
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
  },
};

export const PanelForAvvistVedtak: Story = {
  args: {
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
  },
};

export const PanelForAvvistVedtakReadonly: Story = {
  args: {
    isReadOnly: true,
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
  },
};
