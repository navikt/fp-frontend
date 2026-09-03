import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { DokumentMalType } from '@navikt/fp-types';

// EditorJS refererer til `Element` ved modul-lasting, som ikkje finst i JSDOM
vi.mock('@editorjs/editorjs', () => ({ default: vi.fn() }));
vi.mock('@editorjs/header', () => ({ default: vi.fn() }));
vi.mock('@editorjs/list', () => ({ default: vi.fn() }));
vi.mock('@editorjs/paragraph', () => ({ default: vi.fn() }));
vi.mock('editorjs-html', () => ({ default: vi.fn() }));
vi.mock('editorjs-undo', () => ({ default: vi.fn() }));

import * as stories from './MeldingIndex.stories';

const { Default } = composeStories(stories);

describe('MeldingIndex', () => {
  it('skal vise meldinger når mottakere og brevmaler har blitt hentet fra server', async () => {
    await Default.run();
    expect(await screen.findByText('Mal 1')).toBeInTheDocument();
    expect(screen.getByText('Mal 2')).toBeInTheDocument();
    expect(screen.getByText('Mal 3')).toBeInTheDocument();
    expect(screen.getByLabelText('Utvid behandling detaljer panel')).toBeInTheDocument();
  });

  it('skal sende melding og så lukke modal', async () => {
    await Default.run();

    expect(await screen.findByText('Meldinger')).toBeInTheDocument();
    expect(screen.getByLabelText('Utvid behandling detaljer panel')).toBeInTheDocument();

    await userEvent.selectOptions(screen.getByLabelText('Mal'), 'Mal1');

    await userEvent.click(screen.getByText('Send brev'));

    expect(await screen.findAllByText('Brevet er bestilt')).toHaveLength(1);

    await userEvent.click(screen.getByText('OK'));
  });

  it('skal vise breveditor-knapp for INNOPP i stedet for fritekst', async () => {
    await Default.run();

    expect(await screen.findByText('Meldinger')).toBeInTheDocument();

    await userEvent.selectOptions(screen.getByLabelText('Mal'), 'INNOPP' satisfies DokumentMalType);

    expect(await screen.findByText('Rediger brev')).toBeInTheDocument();
    expect(screen.queryByLabelText('Liste over dokumenter (skriv ett dokument pr. linje)')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send brev' })).toBeDisabled();
  });
});
