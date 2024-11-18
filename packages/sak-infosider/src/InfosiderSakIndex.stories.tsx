import React from 'react';
import { StoryFn } from '@storybook/react';

import { ForbiddenPage } from './ForbiddenPage';
import { NotFoundPage } from './NotFoundPage';
import { UnauthorizedPage } from './UnauthorizedPage';
import { IngenBehandlingValgtPanel } from './IngenBehandlingValgtPanel';

import '@navikt/ds-css';

export default {
  title: 'sak/sak-infosider',
};

export const HarIkkeTilgang: StoryFn = () => <ForbiddenPage renderSomLenke={tekst => <a href="test">{tekst}</a>} />;

export const SideIkkeFunnet: StoryFn = () => <NotFoundPage renderSomLenke={tekst => <a href="test">{tekst}</a>} />;

export const IkkeInnloggetBruker: StoryFn = () => (
  <UnauthorizedPage renderSomLenke={tekst => <a href="test">{tekst}</a>} />
);

export const BehandlingErIkkeValgt: StoryFn = () => <IngenBehandlingValgtPanel numBehandlinger={2} />;

export const BehandlingerFinnesIkke: StoryFn = () => <IngenBehandlingValgtPanel numBehandlinger={0} />;
