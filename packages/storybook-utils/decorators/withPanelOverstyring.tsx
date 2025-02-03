import { action } from '@storybook/addon-actions';
import { ReactRenderer } from '@storybook/react';
import type { DecoratorFunction } from '@storybook/types';

import { OverstyringAksjonspunkter } from '@navikt/fp-kodeverk';
import { PanelOverstyringProvider } from '@navikt/fp-utils';

export type PanelOverstyringContextArgs = {
  overstyringApKode: OverstyringAksjonspunkter;
  overrideReadOnly?: boolean;
  kanOverstyreAccess?: { isEnabled: boolean; employeeHasAccess: boolean };
  toggleOverstyring?: (erOverstyrt: boolean) => void;
};

export const withPanelOverstyring: DecoratorFunction<ReactRenderer> = (Story, context) => {
  const { kanOverstyreAccess, overrideReadOnly, overstyringApKode, toggleOverstyring } =
    context.args as PanelOverstyringContextArgs;

  return (
    <PanelOverstyringProvider
      overstyringApKode={overstyringApKode}
      kanOverstyreAccess={kanOverstyreAccess ?? { isEnabled: false, employeeHasAccess: false }}
      overrideReadOnly={overrideReadOnly ?? false}
      toggleOverstyring={toggleOverstyring ?? action('button-click')}
    >
      <Story />
    </PanelOverstyringProvider>
  );
};
