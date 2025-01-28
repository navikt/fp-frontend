import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, expect } from 'vitest';

import * as stories from './ÅpenRevurderingModal.stories';

const { Default } = composeStories(stories);

describe('ÅpenRevurderingModal', () => {
  beforeEach(() => {
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();
  });

  it('skal vise og lukke modal', async () => {
    await Default.run({ args: { harÅpenRevurdering: true } });
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalledTimes(1);

    expect(screen.getByText('Åpen revurdering')).toBeInTheDocument();
    expect(screen.getByText(/Det finnes en åpen revurdering som kan påvirke/)).toBeInTheDocument();
    await userEvent.click(screen.getByText('OK'));
    expect(HTMLDialogElement.prototype.close).toHaveBeenCalledTimes(1);
  });

  it('skal ikke vise modal modal', async () => {
    await Default.run({ args: { harÅpenRevurdering: false } });
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalledTimes(0);
  });
});
