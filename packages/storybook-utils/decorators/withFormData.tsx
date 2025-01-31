import { ReactRenderer } from '@storybook/react';
import type { DecoratorFunction } from '@storybook/types';

import { Behandling } from '@navikt/fp-types';
import { FormDataProvider } from '@navikt/fp-utils';

export const withFormData: DecoratorFunction<ReactRenderer> = Story => (
  <FormDataProvider behandling={{ uuid: '1', versjon: 1 } as Behandling}>
    <Story />
  </FormDataProvider>
);
