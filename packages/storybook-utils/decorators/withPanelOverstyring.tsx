import { type ReactRenderer } from '@storybook/react';
import { action } from 'storybook/actions';
import type { DecoratorFunction } from 'storybook/internal/types';

import { type OverstyringAksjonspunkter } from '@navikt/fp-kodeverk';
import { PanelOverstyringProvider } from '@navikt/fp-utils';

export type PanelOverstyringContextArgs = {
  overstyringApKode: OverstyringAksjonspunkter;
  overrideReadOnly?: boolean;
  kanOverstyreAccess?: { isEnabled: boolean; employeeHasAccess: boolean };
  initialToggleState?: boolean;
  toggleOverstyring?: (erOverstyrt: boolean) => void;
};

export const withPanelOverstyring: DecoratorFunction<ReactRenderer> = (Story, context) => {
  const { kanOverstyreAccess, overrideReadOnly, overstyringApKode, initialToggleState, toggleOverstyring } =
    context.args as PanelOverstyringContextArgs;

  return (
    <PanelOverstyringProvider
      overstyringApKode={overstyringApKode}
      kanOverstyreAccess={kanOverstyreAccess ?? { isEnabled: false, employeeHasAccess: false }}
      overrideReadOnly={overrideReadOnly ?? false}
      initialToggleState={initialToggleState}
      toggleOverstyring={toggleOverstyring ?? action('button-click')}
    >
      <Story />
    </PanelOverstyringProvider>
  );
};
