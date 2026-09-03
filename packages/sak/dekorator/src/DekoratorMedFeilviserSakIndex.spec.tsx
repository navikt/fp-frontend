import { composeStories } from '@storybook/react';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './DekoratorMedFeilviserSakIndex.stories';

const {
  UtenFeilmeldinger,
  MedFeilmeldinger,
  MedFeilmeldingDetaljer,
  MedNøstaFeilmeldingDetaljer,
  MedFeilmeldingDetaljerSomIkkjeErObjekt,
} = composeStories(stories);

describe('DekoratorMedFeilviserSakIndex', () => {
  it('skal vise dekoratør uten feilmeldinger', async () => {
    render(<UtenFeilmeldinger />);
    expect(await screen.findByText('Nav')).toBeInTheDocument();
    expect(screen.getByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
  });

  it('skal to feilmeldinger i dekoratør og så fjerne disse', async () => {
    render(<MedFeilmeldinger />);
    expect(await screen.findByText('Feilmelding 1')).toBeInTheDocument();
    expect(screen.getByText('Spesialtegn-test: Høna & egget og "test1" og \'test2\'')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('button')[2]!);

    await waitFor(() => expect(screen.queryByText('Feilmelding 1')).not.toBeInTheDocument());
  });

  it('skal vise feilmelding med lenke som åpner feilmeldingsdetaljer', async () => {
    render(<MedFeilmeldingDetaljer />);
    expect(
      await screen.findByText(
        'Noe feilet. Feilen kan være forbigående. Prøv og behandle saken litt senere. Om feilen oppstår igjen meld den inn via porten.',
      ),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByText('Detaljert informasjon'));

    const dialog = await screen.findByRole('dialog');
    expect(within(dialog).getByText('Melding:')).toBeInTheDocument();
    expect(within(dialog).getByText('test')).toBeInTheDocument();
    expect(within(dialog).getByText('Ekstra:')).toBeInTheDocument();
    expect(within(dialog).getByText('test2')).toBeInTheDocument();
  });

  it('skal vise nøsta feilmeldingsdetaljer med objekt og lister', async () => {
    render(<MedNøstaFeilmeldingDetaljer />);

    await userEvent.click(await screen.findByText('Detaljert informasjon'));

    const dialog = await screen.findByRole('dialog');
    expect(within(dialog).getByText('Årsaker:')).toBeInTheDocument();
    expect(within(dialog).getByText('første årsak')).toBeInTheDocument();
    expect(within(dialog).getByText('andre årsak')).toBeInTheDocument();
    expect(within(dialog).getByText('Kontekst:')).toBeInTheDocument();
    expect(within(dialog).getByText('Saksnummer:')).toBeInTheDocument();
    expect(within(dialog).getByText('123456')).toBeInTheDocument();
    expect(within(dialog).getByText('ErKritisk:')).toBeInTheDocument();
    expect(within(dialog).getByText('false')).toBeInTheDocument();
  });

  it('skal vise feilmeldingsdetaljer som ikkje er eit objekt utan å splitte teksten opp i teikn', async () => {
    render(<MedFeilmeldingDetaljerSomIkkjeErObjekt />);

    await userEvent.click(await screen.findByText('Detaljert informasjon'));

    const dialog = await screen.findByRole('dialog');
    expect(within(dialog).getByText('Kunne ikke tolke feildetaljer')).toBeInTheDocument();
  });
});
