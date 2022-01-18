import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import {
  ForbiddenPage, NotFoundPage, UnauthorizedPage, IngenBehandlingValgtPanel,
} from '@fpsak-frontend/sak-infosider';

import { withRouter } from '@fpsak-frontend/storybook-utils';

export default {
  title: 'sak/sak-infosider',
  decorators: [withRouter],
};

export const HarIkkeTilgang: Story = () => <ForbiddenPage />;

export const SideIkkeFunnet: Story = () => <NotFoundPage />;

export const IkkeInnloggetBruker: Story = () => <UnauthorizedPage />;

export const BehandlingErIkkeValgt: Story = () => <IngenBehandlingValgtPanel numBehandlinger={2} />;

export const BehandlingerFinnesIkke: Story = () => <IngenBehandlingValgtPanel numBehandlinger={0} />;
