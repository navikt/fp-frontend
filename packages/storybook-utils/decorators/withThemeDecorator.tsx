import { Theme } from '@navikt/ds-react';
import type { ReactRenderer } from '@storybook/react';
import type { DecoratorFunction } from '@storybook/types';

export const withThemeDecorator: DecoratorFunction<ReactRenderer> = (Story, context) => {
  const theme = context.globals['theme'];

  return (
    <>
      {theme !== 'none' && (
        <Theme theme={theme === 'dark' ? 'dark' : 'light'}>
          <Story />
        </Theme>
      )}
      {theme === 'none' && <Story />}
    </>
  );
};
