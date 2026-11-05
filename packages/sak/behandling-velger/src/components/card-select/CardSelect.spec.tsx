import { composeStories } from '@storybook/react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './CardSelect.stories';

const { Default, Unselected, SingleOption, Empty } = composeStories(stories);

const mangeValg = Array.from({ length: 10 }, (_, index) => ({
  value: String(index + 1),
  label: `Valg ${index + 1}`,
}));

describe('CardSelect', () => {
  it.each([undefined, 'ukjent'])('skal vise plassholderen for verdien %s og velge med tastaturet', async value => {
    const onChange = vi.fn();
    render(<Unselected value={value} onChange={onChange} />);
    expect(screen.getByText('Hvordan vil du bli varslet?')).toBeVisible();
    expect(screen.queryByText('Ingen kontaktmåter er tilgjengelige')).not.toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    screen.getByRole('button', { name: /Velg kontaktmåte/ }).focus();

    await userEvent.keyboard('{Enter}');

    const liste = within(screen.getByRole('list'));
    expect(liste.getByText('Varsel i innboksen')).toBeVisible();
    expect(liste.getByRole('button', { name: 'E-post' })).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}');
    expect(liste.getByRole('button', { name: 'Vis detaljer' })).toHaveFocus();
    await userEvent.keyboard('{ArrowLeft}');
    expect(liste.getByRole('button', { name: 'E-post' })).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}{Enter}');

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'SMS Til mobil' })).toHaveFocus();
    expect(screen.queryByText('Hvordan vil du bli varslet?')).not.toBeInTheDocument();
    expect(onChange).toHaveBeenCalledExactlyOnceWith('sms');

    await userEvent.click(screen.getByRole('button', { name: 'Åpne valg' }));
    await userEvent.click(within(screen.getByRole('list')).getByRole('button', { name: 'SMS Til mobil' }));

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it.each([
    { tast: '{ArrowDown}', valg: 'Valg 1' },
    { tast: '{End}', valg: 'Valg 10' },
    { tast: '{PageDown}', valg: 'Valg 6' },
  ])('skal åpne listen med $tast og fokusere $valg', async ({ tast, valg }) => {
    render(<Unselected options={mangeValg} />);
    screen.getByRole('button', { name: /Velg kontaktmåte/ }).focus();

    await userEvent.keyboard(tast);

    expect(within(screen.getByRole('list')).getByRole('button', { name: valg })).toHaveFocus();
  });

  it('skal ikke åpne en lukket liste med pil opp, Home eller PageUp', async () => {
    render(<Unselected />);
    const utløser = screen.getByRole('button', { name: /Velg kontaktmåte/ });
    utløser.focus();

    await userEvent.keyboard('{ArrowUp}{Home}{PageUp}');

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(utløser).toHaveFocus();
  });

  it('skal lukke listen fra første valg med pil opp og returnere fokus til feltet', async () => {
    render(<Default />);
    const utløser = screen.getByRole('button', { name: 'SMS Til mobil' });
    utløser.focus();
    await userEvent.keyboard('{ArrowDown}');
    expect(within(screen.getByRole('list')).getByRole('button', { name: 'E-post' })).toHaveFocus();

    await userEvent.keyboard('{ArrowUp}');

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(utløser).toHaveFocus();
  });

  it('skal flytte seks valg med PageUp og PageDown uten å gå utenfor listen', async () => {
    render(<Unselected options={mangeValg} />);
    screen.getByRole('button', { name: /Velg kontaktmåte/ }).focus();
    await userEvent.keyboard('{ArrowDown}');
    const liste = within(screen.getByRole('list'));

    await userEvent.keyboard('{PageDown}');
    expect(liste.getByRole('button', { name: 'Valg 7' })).toHaveFocus();
    await userEvent.keyboard('{PageDown}');
    expect(liste.getByRole('button', { name: 'Valg 10' })).toHaveFocus();
    await userEvent.keyboard('{PageUp}');
    expect(liste.getByRole('button', { name: 'Valg 4' })).toHaveFocus();
    await userEvent.keyboard('{PageUp}{PageUp}');
    expect(liste.getByRole('button', { name: 'Valg 1' })).toHaveFocus();
  });

  it('skal ta handlinger inni etiketten ut av tabbrekkefølgen og la Tab forlate menyen', async () => {
    render(
      <>
        <Default />
        <button type="button">Etter velgeren</button>
      </>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Åpne valg' }));
    const liste = within(screen.getByRole('list'));
    expect(liste.getByRole('button', { name: 'Vis detaljer' })).toHaveAttribute('tabindex', '-1');
    liste.getByRole('button', { name: 'E-post' }).focus();

    await userEvent.tab();

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Etter velgeren' })).toHaveFocus();
  });

  it('skal kunne velge det eneste alternativet fra plassholderen og deretter vise et statisk kort', async () => {
    render(<SingleOption />);
    screen.getByRole('button', { name: /Velg kontaktmåte/ }).focus();

    await userEvent.keyboard('{ArrowDown}{Enter}');

    expect(screen.getByText('SMS')).toBeVisible();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('skal vise egen tomtilstand uten plassholder eller nedtrekk når alternativene mangler', () => {
    render(<Empty open />);
    expect(screen.getByText('Ingen kontaktmåter er tilgjengelige')).toBeVisible();
    expect(screen.queryByText('Hvordan vil du bli varslet?')).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
