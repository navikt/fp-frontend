import { action } from 'storybook/actions';

export const promiseAction =
  (name: string) =>
  (...args: unknown[]): Promise<void> => {
    action(name)(...args);
    return Promise.resolve();
  };
