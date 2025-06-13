import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DokumentMalType } from '@navikt/fp-kodeverk';
import { mswTest } from '@navikt/fp-utils-test';

import * as stories from './MeldingIndex.stories';

const { Default } = composeStories(stories);

describe('MeldingIndex', () => {
  mswTest('skal vise meldinger når mottakere og brevmaler har blitt hentet fra server', async ({ setHandlers }) => {
    setHandlers(Default.parameters['msw']);
    render(<Default />);
    expect(await screen.findByText('Mal 1')).toBeInTheDocument();
    expect(screen.getByText('Mal 2')).toBeInTheDocument();
    expect(screen.getByText('Mal 3')).toBeInTheDocument();
    expect(screen.getByLabelText('Utvid behandling detaljer panel')).toBeInTheDocument();
  });

  mswTest('skal sende melding og så lukke modal', async ({ setHandlers }) => {
    setHandlers(Default.parameters['msw']);
    render(<Default />);

    expect(await screen.findByText('Meldinger')).toBeInTheDocument();
    expect(screen.getByLabelText('Utvid behandling detaljer panel')).toBeInTheDocument();

    await userEvent.selectOptions(screen.getByLabelText('Mal'), 'Mal1');

    await userEvent.click(screen.getByText('Send brev'));

    expect(await screen.findAllByText('Brevet er bestilt')).toHaveLength(2);

    await userEvent.click(screen.getByText('OK'));
  });

  mswTest('skal sende melding og sette saken på vent hvis INNHENT_DOK', async ({ setHandlers }) => {
    setHandlers(Default.parameters['msw']);
    render(<Default />);

    expect(await screen.findByText('Meldinger')).toBeInTheDocument();
    expect(screen.getByLabelText('Utvid behandling detaljer panel')).toBeInTheDocument();

    await userEvent.selectOptions(screen.getByLabelText('Mal'), DokumentMalType.INNHENTE_OPPLYSNINGER);

    const begrunnelseInput = screen.getByLabelText('Liste over dokumenter (skriv ett dokument pr. linje)');
    await userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Send brev'));

    expect(await screen.findByText('Behandlingen er satt på vent')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Gå til forsiden'));
  });
});
