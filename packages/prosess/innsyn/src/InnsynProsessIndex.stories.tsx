import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  lagBehandling,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';
import type { Innsyn } from '@navikt/fp-types';

import { InnsynProsessIndex } from './InnsynProsessIndex';

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
      {
        journalpostId: '4',
        dokumentId: '5',
        tittel: 'Dette er et annet dokument',
        tidspunkt: '2018-03-14T09:30:00.000',
        kommunikasjonsretning: 'UT',
      },
      {
        journalpostId: '6',
        dokumentId: '7',
        tittel: 'Dette er et internt dokument',
        tidspunkt: '2018-03-15T10:00:00.000',
        kommunikasjonsretning: 'NOTAT',
      },
    ],
  },
  render: args => <InnsynProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof InnsynProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const PanelForVurderingAvInnsyn: Story = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.VURDER_INNSYN)],
    innsyn: {
      dokumenter: [],
      innsynMottattDato: '2021-01-01',
      innsynResultatType: 'INNV',
      vedtaksdokumentasjon: [
        {
          behandlingUuid: '48528d21-89bb-4453-b1eb-c8649273a37c',
          tittel: 'BT-002',
          opprettetDato: '2019-01-01',
        },
        {
          behandlingUuid: '48528d21-89bb-4453-b1eb-c8649273a37d',
          tittel: 'BT-004',
          opprettetDato: '2020-01-01',
        },
      ],
    } satisfies Innsyn,
  },
};

export const InnsynSattPaVent: Story = {
  args: {
    behandling: lagBehandling({ fristBehandlingPåVent: '2021-12-25' }),
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.VURDER_INNSYN, {
        status: 'UTFO',
      }),
    ],
    isReadOnly: true,
    innsyn: {
      dokumenter: [],
      innsynResultatType: 'INNV',
      innsynMottattDato: '2021-12-12',
      vedtaksdokumentasjon: [
        {
          behandlingUuid: '48528d21-89bb-4453-b1eb-c8649273a37c',
          tittel: 'BT-002',
          opprettetDato: '2019-01-01',
        },
      ],
    } satisfies Innsyn,
  },
};
