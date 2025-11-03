import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';
import type { BehandlingFpSak, Innsyn, InnsynDokument } from '@navikt/fp-types';

import { InnsynProsessIndex } from './InnsynProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  behandlingPåVent: false,
} as BehandlingFpSak;

const meta = {
  title: 'prosess/innsyn/prosess-innsyn',
  component: InnsynProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    alleDokumenter: [
      {
        journalpostId: '2',
        dokumentId: '3',
        tittel: 'Dette er et dokument',
        tidspunkt: '2017-08-02T00:54:25.455',
        kommunikasjonsretning: 'INN',
      },
    ],
  },
  render: args => <InnsynProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof InnsynProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const PanelForVurderingAvInnsyn: Story = {
  args: {
    behandling: defaultBehandling,
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.VURDER_INNSYN)],
    innsyn: {
      dokumenter: [] as InnsynDokument[],
      vedtaksdokumentasjon: [
        {
          behandlingUuid: '48528d21-89bb-4453-b1eb-c8649273a37c',
          tittel: 'BT-002',
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
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.VURDER_INNSYN, {
        status: 'UTFO',
      }),
    ],
    isReadOnly: true,
    innsyn: {
      dokumenter: [] as InnsynDokument[],
      innsynResultatType: 'INNV',
      innsynMottattDato: '2021-12-12',
      vedtaksdokumentasjon: [
        {
          behandlingUuid: '48528d21-89bb-4453-b1eb-c8649273a37c',
          tittel: 'BT-002',
          opprettetDato: '2019-01-01',
        },
      ],
    } as Innsyn,
  },
};
