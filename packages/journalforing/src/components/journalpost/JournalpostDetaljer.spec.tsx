import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './JournalpostDetaljer.stories';
import Sakstype from '../../kodeverk/sakstype';

const { VisOppgaveForSubmitReservertAvMeg, VisFlyttTilGosysOmKildeGosys } = composeStories(stories);

describe('<JournalforingIndex>', () => {
  it('skal kunne journalføre på eksisterende sak', async () => {
    const journalfør = vi.fn();

    render(<VisOppgaveForSubmitReservertAvMeg submitJournalføring={journalfør} />);
    expect(await screen.findByText('Søker Søkersen')).toBeInTheDocument();

    expect(screen.getByText('12048714373')).toBeInTheDocument();
    expect(screen.getByText('Svingen sag og høvleri')).toBeInTheDocument();
    expect(screen.getByText('999999999')).toBeInTheDocument();
    expect(screen.getAllByText('Bekreftelse fra arbeidsgiver')).toHaveLength(2);
    expect(screen.getByText('Søknad om foreldrepenger ved fødsel')).toBeInTheDocument();
    expect(screen.getByText('Annet')).toBeInTheDocument();

    expect(screen.getByLabelText('125416597 Foreldrepenger')).toBeInTheDocument();
    expect(screen.getByLabelText('155462542 Svangerskapspenger')).toBeInTheDocument();
    expect(screen.getByLabelText('175419131 Foreldrepenger')).toBeInTheDocument();
    expect(screen.getByLabelText('Journalfør på ny sak')).toBeInTheDocument();

    expect(screen.getByText('Journalfør').closest('button')).toBeDisabled();
    expect(screen.getByText('Avbryt').closest('button')).toBeEnabled();

    expect(screen.getAllByRole('radio')).toHaveLength(5);
    expect(screen.getAllByRole('radio')[0]).not.toBeChecked();
    expect(screen.getAllByRole('radio')[1]).not.toBeChecked();
    expect(screen.getAllByRole('radio')[2]).not.toBeChecked();
    expect(screen.getAllByRole('radio')[3]).not.toBeChecked();
    expect(screen.getAllByRole('radio')[4]).not.toBeChecked();
    expect(screen.queryByLabelText('Ytelse')).not.toBeInTheDocument();
    await userEvent.click(screen.getAllByRole('radio')[0]);
    expect(screen.getByText('Journalfør').closest('button')).toBeEnabled();

    await userEvent.click(screen.getByText('Journalfør'));
    await waitFor(() => expect(journalfør).toHaveBeenCalledTimes(1));

    expect(journalfør).toHaveBeenNthCalledWith(
      1,
      {
        enhetId: '4108',
        oppdaterTitlerDto: undefined,
        journalpostId: '986547336994',
        saksnummer: '125416597',
      },
      false,
    );
  });

  it('skal kunne journalføre på ny sak', async () => {
    const journalfør = vi.fn();

    render(<VisOppgaveForSubmitReservertAvMeg submitJournalføring={journalfør} />);
    expect(await screen.findByText('Søker Søkersen')).toBeInTheDocument();

    expect(screen.getByText('12048714373')).toBeInTheDocument();
    expect(screen.getByText('Svingen sag og høvleri')).toBeInTheDocument();
    expect(screen.getByText('999999999')).toBeInTheDocument();
    expect(screen.getAllByText('Bekreftelse fra arbeidsgiver')).toHaveLength(2);
    expect(screen.getByText('Søknad om foreldrepenger ved fødsel')).toBeInTheDocument();
    expect(screen.getByText('Annet')).toBeInTheDocument();

    expect(screen.getByLabelText('125416597 Foreldrepenger')).toBeInTheDocument();
    expect(screen.getByLabelText('155462542 Svangerskapspenger')).toBeInTheDocument();
    expect(screen.getByLabelText('175419131 Foreldrepenger')).toBeInTheDocument();
    expect(screen.getByLabelText('Journalfør på ny sak')).toBeInTheDocument();
    expect(screen.getByLabelText('Journalfør på generell sak')).toBeInTheDocument();

    expect(screen.getByText('Journalfør').closest('button')).toBeDisabled();
    expect(screen.getByText('Avbryt').closest('button')).toBeEnabled();

    expect(screen.getAllByRole('radio')).toHaveLength(5);
    expect(screen.getAllByRole('radio')[0]).not.toBeChecked();
    expect(screen.getAllByRole('radio')[1]).not.toBeChecked();
    expect(screen.getAllByRole('radio')[2]).not.toBeChecked();
    expect(screen.getAllByRole('radio')[3]).not.toBeChecked();
    expect(screen.getAllByRole('radio')[4]).not.toBeChecked();
    expect(screen.queryByLabelText('Ytelse')).not.toBeInTheDocument();
    await userEvent.click(screen.getAllByRole('radio')[0]);
    expect(screen.getByText('Journalfør').closest('button')).toBeEnabled();
    expect(screen.queryByLabelText('Ytelse')).not.toBeInTheDocument();
    await userEvent.click(screen.getAllByRole('radio')[3]);
    expect(await screen.findByLabelText('Ytelse')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Journalfør'));
    await waitFor(() => expect(journalfør).toHaveBeenCalledTimes(0));

    await userEvent.selectOptions(screen.getByLabelText('Ytelse'), 'FP');
    await userEvent.click(screen.getByText('Journalfør'));
    await waitFor(() => expect(journalfør).toHaveBeenCalledTimes(1));

    expect(journalfør).toHaveBeenNthCalledWith(
      1,
      {
        enhetId: '4108',
        oppdaterTitlerDto: undefined,
        journalpostId: '986547336994',
        opprettSak: {
          aktørId: '98594685464858',
          ytelseType: 'FP',
          sakstype: Sakstype.FAGSAK,
        },
      },
      false,
    );
  });

  it('skal kunne journalføre på generell sak', async () => {
    const journalfør = vi.fn();

    render(<VisOppgaveForSubmitReservertAvMeg submitJournalføring={journalfør} />);
    expect(await screen.findByText('Søker Søkersen')).toBeInTheDocument();
    expect(screen.getByText('Journalfør').closest('button')).toBeDisabled();
    expect(screen.getByText('Avbryt').closest('button')).toBeEnabled();

    expect(screen.getAllByRole('radio')).toHaveLength(5);
    expect(screen.queryByLabelText('Ytelse')).not.toBeInTheDocument();
    await userEvent.click(screen.getAllByRole('radio')[0]);
    expect(screen.getByText('Journalfør').closest('button')).toBeEnabled();
    expect(screen.queryByLabelText('Ytelse')).not.toBeInTheDocument();
    expect(
      screen.queryByLabelText(
        'Det vil ikke opprettes sak når du journalfører på generell sak. Innholdet vil bli knyttet direkte til personen.',
      ),
    ).not.toBeInTheDocument();
    await userEvent.click(screen.getAllByRole('radio')[4]);
    expect(screen.queryByLabelText('Ytelse')).not.toBeInTheDocument();
    expect(
      screen.queryByLabelText(
        'Det vil ikke opprettes sak når du journalfører på generell sak. Innholdet vil bli knyttet direkte til personen.',
      ),
    ).toBeInTheDocument();
    await userEvent.click(screen.getByText('Journalfør'));
    await waitFor(() => expect(journalfør).toHaveBeenCalledTimes(1));

    expect(journalfør).toHaveBeenNthCalledWith(
      1,
      {
        enhetId: '4108',
        oppdaterTitlerDto: undefined,
        journalpostId: '986547336994',
        opprettSak: {
          aktørId: '98594685464858',
          sakstype: Sakstype.GENERELL,
        },
      },
      false,
    );
  });

  it('skal ikke kunne flytte oppgaven til gosys om det er allerede en gosys oppgave', async () => {
    const journalfør = vi.fn();

    render(<VisOppgaveForSubmitReservertAvMeg submitJournalføring={journalfør} />);
    expect(await screen.findByText('Søker Søkersen')).toBeInTheDocument();
    expect(screen.getByText('Journalfør').closest('button')).toBeDisabled();
    expect(screen.getByText('Avbryt').closest('button')).toBeEnabled();

    expect(screen.queryByLabelText('Flytt Til Gosys')).not.toBeInTheDocument();
  });

  it('skal kunne flytte oppgaven til gosys', async () => {
    const journalfør = vi.fn();

    render(<VisFlyttTilGosysOmKildeGosys submitJournalføring={journalfør} />);
    expect(await screen.findByText('Søker Søkersen')).toBeInTheDocument();
    expect(screen.getByText('Journalfør').closest('button')).toBeDisabled();
    expect(screen.getByText('Avbryt').closest('button')).toBeEnabled();

    expect(screen.queryByLabelText('Flytt Til Gosys')).toBeInTheDocument();
  });
});
