import { composeStories } from '@storybook/react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './OppgaveJournalføringIndex.stories';

const { ViseOppgaverIListe, IngenOppgaver, JournalføringFeiler, JournalførPåNySakOgDeretterPåAnnenSak } =
  composeStories(stories);

const erFerdigstillKall = (request: unknown) =>
  request instanceof Request && request.method === 'POST' && request.url.endsWith('/fpmottak/api/sak/ferdigstill');

const journalførPåFørsteSak = async (knappetekst = 'Journalfør') => {
  expect(await screen.findByText('Søker Søkersen')).toBeInTheDocument();
  await userEvent.click(screen.getAllByRole('radio')[0]!);
  await userEvent.click(screen.getByRole('button', { name: knappetekst }));
};

describe('OppgaveJournalføringIndex', () => {
  it('skal vise en liste med oppgaver', async () => {
    await ViseOppgaverIListe.run();
    expect(await screen.findByText('Journalføring')).toBeInTheDocument();

    // Tabell overskrift
    expect(await screen.findByText('Opprettet')).toBeInTheDocument();
    expect(screen.getByText('Ytelse')).toBeInTheDocument();
    expect(screen.getByText('Beskrivelse')).toBeInTheDocument();
    expect(screen.getByText('Bruker')).toBeInTheDocument();
    expect(screen.getByText('Frist')).toBeInTheDocument();
    expect(screen.getByText('Saksbehandler')).toBeInTheDocument();
    // Rad 1
    expect(screen.getAllByText('Inntektsmelding')).toHaveLength(2);
    expect(screen.getAllByText('01.01.2022')).toHaveLength(4);
    expect(screen.getAllByText('Foreldrepenger')).toHaveLength(2);
    expect(screen.getByText('12048714373')).toBeInTheDocument();
    expect(screen.getByText('01.02.2022')).toBeInTheDocument();
    expect(screen.getByText('Y654321')).toBeInTheDocument();
    expect(screen.getByText('4016')).toBeInTheDocument();
  });

  it('skal vise ingen oppgaver', async () => {
    await IngenOppgaver.run();
    expect(await screen.findByText('Fant ingen journalføringsoppgaver')).toBeInTheDocument();
  });

  it('skal lukke kvitteringsmodalen når journalføringen feiler', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    await JournalføringFeiler.run();

    await userEvent.click(await screen.findByText('Søknad'));
    await journalførPåFørsteSak();

    await waitFor(() => expect(fetchSpy.mock.calls.some(([request]) => erFerdigstillKall(request))).toBe(true));
    await waitFor(() => expect(fetchSpy.mock.settledResults.every(result => result.type !== 'incomplete')).toBe(true));

    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    expect(screen.queryByText('Dokumentet er journalført på saksnummer', { exact: false })).not.toBeInTheDocument();
    fetchSpy.mockRestore();
  });

  it('skal ikke vise saksnummer fra forrige journalføring', async () => {
    await JournalførPåNySakOgDeretterPåAnnenSak.run();

    await userEvent.click(await screen.findByText('Søknad'));
    await journalførPåFørsteSak();

    expect(await screen.findByText('11111111')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Ok'));
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());

    await userEvent.click(screen.getByText('Søk etter journalpost'));
    const journalpostIdFelt = await screen.findByLabelText('Journalpost-ID');
    await waitFor(() => expect(screen.getByRole('dialog')).toHaveFocus());
    await userEvent.type(journalpostIdFelt, '111111111');
    await userEvent.click(screen.getByText('Finn journalpost'));
    await journalførPåFørsteSak('Journalfør på en annen sak');

    expect(await screen.findByText('22222222')).toBeInTheDocument();
    expect(screen.queryByText('11111111')).not.toBeInTheDocument();
  });
});
