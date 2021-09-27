import React from 'react';

import {
  ForbiddenPage, NotFoundPage, UnauthorizedPage, IngenBehandlingValgtPanel,
} from '@fpsak-frontend/sak-infosider';

import { withRouter } from '@fpsak-frontend/storybook-utils';

export default {
  title: 'sak/sak-infosider',
  decorators: [withRouter],
};

export const HarIkkeTilgang = () => (
  <ForbiddenPage />
);

export const SideIkkeFunnet = () => (
  <NotFoundPage />
);

export const IkkeInnloggetBruker = () => (
  <UnauthorizedPage />
);

export const BehandlingErIkkeValgt = () => (
  <IngenBehandlingValgtPanel numBehandlinger={2} />
);

export const BehandlingerFinnesIkke = () => (
  <IngenBehandlingValgtPanel numBehandlinger={0} />
);
