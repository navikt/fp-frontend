import React from 'react';

import {
  ForbiddenPage, NotFoundPage, UnauthorizedPage, IngenBehandlingValgtPanel,
} from '@fpsak-frontend/sak-infosider';

import withRouterProvider from '../../decorators/withRouter';

export default {
  title: 'sak/sak-infosider',
  decorators: [withRouterProvider],
};

export const visPanelForHarIkkeTilgang = () => (
  <ForbiddenPage />
);

export const visPanelForSideIkkeFunnet = () => (
  <NotFoundPage />
);

export const visPanelForIkkeInnloggetBruker = () => (
  <UnauthorizedPage />
);

export const visPanelForBehandlingErIkkeValgt = () => (
  <IngenBehandlingValgtPanel numBehandlinger={2} />
);

export const visPanelForBehandlingerFinnesIkke = () => (
  <IngenBehandlingValgtPanel numBehandlinger={0} />
);
