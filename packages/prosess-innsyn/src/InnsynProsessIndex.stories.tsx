import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  BehandlingType,
  InnsynResultatType,
  Kommunikasjonsretning,
} from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, Fagsak, Innsyn, InnsynDokument } from '@navikt/fp-types';

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

const meta = {
  title: 'prosess/innsyn/prosess-innsyn',
  component: InnsynProsessIndex,
  args: {
    alleKodeverk: alleKodeverk as any,
    submitCallback: action('button-click') as (data: any) => Promise<void>,
    isReadOnly: false,
    isAksjonspunktOpen: true,
    readOnlySubmitButton: false,
    status: '',
    vilkar: [],
    alleMerknaderFraBeslutter: {},
    setFormData: () => undefined,
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
} satisfies Meta<typeof InnsynProsessIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const PanelForVurderingAvInnsyn: Story = {
  args: {
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
  },
};

export const InnsynSattPaVent: Story = {
  args: {
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
  },
};
