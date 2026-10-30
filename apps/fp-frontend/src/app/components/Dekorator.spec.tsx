import { composeStories } from '@storybook/react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './Dekorator.stories';

const { Default, VisFeilmeldingSomLiggIUrl, VisTekniskFeilmelding, SkjulFeilmelding } = composeStories(stories);

describe('Dekorator', () => {
  it('skal vise dekorator', async () => {
    render(<Default />);
    expect(await screen.findByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
    expect(await screen.findByText('Sara Saksbehandler')).toBeInTheDocument();
  });

  it('skal åpne tastatursnarveiene fra ikonknappen nest lengst til høyre', async () => {
    render(<Default />);

    const snarveiknapp = screen.getByRole('button', { name: 'Tastatursnarveier' });
    const knapper = screen.getAllByRole('button');
    expect(knapper.at(-2)).toBe(snarveiknapp);
    expect(knapper.at(-1)).toHaveAccessibleName('Endre til mørkt tema');

    await userEvent.click(snarveiknapp);

    expect(await screen.findByRole('dialog', { name: 'Tastatursnarveier' })).toBeInTheDocument();

    await userEvent.keyboard('{Escape}');

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(snarveiknapp).toHaveFocus();
  });

  it('skal ikke vise tastatursnarveiene i systemmenyen', async () => {
    render(<Default />);

    await userEvent.click(screen.getByRole('button', { name: 'Systemer og oppslagsverk' }));

    expect(screen.queryByText('Tastatursnarveier (hjelp)')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Tastatursnarveier' })).toBeInTheDocument();
  });

  it('skal ikke vise tooltip når pekeren er over tastatursnarveiknappen', () => {
    vi.useFakeTimers();
    try {
      render(<Default />);

      fireEvent.mouseEnter(screen.getByRole('button', { name: 'Tastatursnarveier' }));
      act(() => {
        vi.advanceTimersByTime(200);
      });

      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    } finally {
      vi.useRealTimers();
    }
  });

  it('skal vise feilmeldinger som ligger i URL', async () => {
    render(<VisFeilmeldingSomLiggIUrl />);

    expect(await screen.findByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
    expect(await screen.findByText('Dette er en feilmelding')).toBeInTheDocument();
  });

  it('skal vise feilmeldinger som oppstår ved kodefeil', async () => {
    render(<VisTekniskFeilmelding />);

    expect(await screen.findByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
    expect(await screen.findByText('test is undefined')).toBeInTheDocument();
  });

  it('skal ikke vise feilmelding når den er skjult manuelt', async () => {
    render(<SkjulFeilmelding />);

    expect(await screen.findByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
    expect(await screen.findByText('Sara Saksbehandler')).toBeInTheDocument();
    expect(screen.queryByText('test is undefined')).not.toBeInTheDocument();
  });
});
