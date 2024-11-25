import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ForbiddenPage } from './ForbiddenPage';
import { NotFoundPage } from './NotFoundPage';
import { UnauthorizedPage } from './UnauthorizedPage';
import { IngenBehandlingValgtPanel } from './IngenBehandlingValgtPanel';

import '@navikt/ds-css';

const meta = {
  title: 'sak/sak-infosider',
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

export const HarIkkeTilgang: Story = {
  render: () => <ForbiddenPage renderSomLenke={tekst => <a href="test">{tekst}</a>} />,
};

export const SideIkkeFunnet: Story = {
  render: () => <NotFoundPage renderSomLenke={tekst => <a href="test">{tekst}</a>} />,
};

export const IkkeInnloggetBruker: Story = {
  render: () => <UnauthorizedPage renderSomLenke={tekst => <a href="test">{tekst}</a>} />,
};

export const BehandlingErIkkeValgt: Story = {
  render: () => <IngenBehandlingValgtPanel numBehandlinger={2} />,
};

export const BehandlingerFinnesIkke: Story = {
  render: () => <IngenBehandlingValgtPanel numBehandlinger={0} />,
};
