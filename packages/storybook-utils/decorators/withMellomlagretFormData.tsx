import { type ReactRenderer } from '@storybook/react';
import type { DecoratorFunction } from '@storybook/types';

import type { Behandling } from '@navikt/fp-types';
import { MellomlagretFormDataProvider } from '@navikt/fp-utils';

export const withMellomlagretFormData: DecoratorFunction<ReactRenderer> = Story => (
  <MellomlagretFormDataProvider behandling={{ uuid: '1', versjon: 1 } as Behandling}>
    <Story />
  </MellomlagretFormDataProvider>
);
