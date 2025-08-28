import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  BehandlingTypeEnum,
  InnsynResultatType,
  Kommunikasjonsretning,
} from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt } from '@navikt/fp-types';

import { VedtakInnsynProsessIndex } from './VedtakInnsynProsessIndex';

const defaultAksjonspunkter = [
  {
    definisjon: AksjonspunktKode.VURDER_INNSYN,
    status: AksjonspunktStatus.UTFORT,
    begrunnelse: 'Dette er utført',
  },
  {
    definisjon: AksjonspunktKode.FORESLA_VEDTAK,
    status: AksjonspunktStatus.OPPRETTET,
    begrunnelse: null,
  },
] as Aksjonspunkt[];

const meta = {
  title: 'prosess/innsyn/prosess-vedtak-innsyn',
  component: VedtakInnsynProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    previewCallback: action('button-click'),
    aksjonspunkterForPanel: defaultAksjonspunkter,
    alleDokumenter: [
      {
        journalpostId: '2',
        dokumentId: '3',
        tittel: 'Dette er et dokument',
        tidspunkt: '2017-08-02T00:54:25.455',
        kommunikasjonsretning: Kommunikasjonsretning.INN,
        gjelderFor: null,
      },
    ],
  },
  render: args => <VedtakInnsynProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof VedtakInnsynProsessIndex>>;
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
          tittel: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
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
          tittel: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
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
    aksjonspunkterForPanel: [
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
          tittel: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
          opprettetDato: '2019-01-01',
        },
      ],
      innsynResultatType: InnsynResultatType.AVVIST,
      innsynMottattDato: '2019-01-01',
    },
  },
};
