import type { Meta, StoryObj } from '@storybook/react';

import { ForbiddenPage } from './ForbiddenPage';
import { IngenBehandlingValgtPanel } from './IngenBehandlingValgtPanel';
import { NotFoundPage } from './NotFoundPage';
import { UnauthorizedPage } from './UnauthorizedPage';

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
