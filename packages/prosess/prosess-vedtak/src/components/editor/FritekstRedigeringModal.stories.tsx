import { type ComponentProps } from 'react';

import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { FagsakMarkeringKode, FagsakYtelseType, RelasjonsRolleType } from '@navikt/fp-kodeverk';
import { getIntlDecorator, type PanelDataArgs, withPanelData, withRouter } from '@navikt/fp-storybook-utils';
import type { Fagsak } from '@navikt/fp-types';

import mal from '../../../.storybook/brevmal/mal.html?raw';
import redigertInnhold from '../../../.storybook/brevmal/redigertInnhold.html?raw';
import { FritekstRedigeringModal } from './FritekstRedigeringModal';

import messages from '../../../i18n/nb_NO.json';

const FAGSAK_MED_MARKERING_PRAKSIS_UTSETTELSE = {
  saksnummer: '1234567',
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
  bruker: { navn: 'Kari Nordmann' },
  annenPart: { navn: 'Ola Nordmann' },
  relasjonsRolleType: RelasjonsRolleType.MOR,
  annenpartBehandling: {
    relasjonsRolleType: RelasjonsRolleType.FAR,
  },
  fagsakMarkeringer: [
    {
      fagsakMarkering: FagsakMarkeringKode.PRAKSIS_UTSETTELSE,
      kortNavn: 'Utsettelse',
    },
  ],
} as Fagsak;

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'prosess/prosess-vedtak-editor',
  component: FritekstRedigeringModal,
  decorators: [withIntl, withPanelData, withRouter],
  args: {
    refetchBrevOverstyring: action('button-click'),
    mellomlagreBrevOverstyring: action('button-click') as (html: string | null) => Promise<void>,
    setVisFritekstRedigeringModal: action('button-click'),
    forhåndsvisBrev: action('button-click'),
  },
  render: args => <FritekstRedigeringModal {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof FritekstRedigeringModal>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const MedOpprinneligHtml: Story = {
  args: {
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const MedRedigertHtml: Story = {
  args: {
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: redigertInnhold },
  },
};

export const MedOpprinneligHtmlOgMarkeringPraksisUtsettelse: Story = {
  args: {
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    fagsak: FAGSAK_MED_MARKERING_PRAKSIS_UTSETTELSE,
  },
};

export const MedRedigertHtmlOgMarkeringPraksisUtsettelse: Story = {
  args: {
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: redigertInnhold },
    fagsak: FAGSAK_MED_MARKERING_PRAKSIS_UTSETTELSE,
  },
};
