import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { DokumentMalType } from '@navikt/fp-types';

// EditorJS refererer til `Element` ved modul-lasting, som ikkje finst i JSDOM
vi.mock('@editorjs/editorjs', () => ({ default: vi.fn() }));
vi.mock('@editorjs/header', () => ({ default: vi.fn() }));
vi.mock('@editorjs/list', () => ({ default: vi.fn() }));
vi.mock('@editorjs/paragraph', () => ({ default: vi.fn() }));
vi.mock('editorjs-html', () => ({ default: vi.fn() }));
vi.mock('editorjs-undo', () => ({ default: vi.fn() }));

import * as stories from './MeldingerSakIndex.stories';

const { Default, ForSvangerskapspenger, BrukerManglerAdresse } = composeStories(stories);

const brukerenHarIkkeAdresseText =
  'Brukeren har ikke en registrert adresse. Utsendelse av brev kan feile om brukeren ikke er digital.';

describe('MeldingerSakIndex', () => {
  it('skal vise "Rediger brev"-knapp for INNOPP og ha deaktivert send-knapp før brev er redigert', async () => {
    render(<Default />);
    expect(await screen.findByText('Mal')).toBeInTheDocument();

    expect(screen.getByText('Rediger brev')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send brev' })).toBeDisabled();
  });

  it('skal vise "Rediger brev"-knapp for VARREV med årsak BARNIKKEREG og kunne sende uten redigering', async () => {
    render(<Default />);
    expect(await screen.findByText('Mal')).toBeInTheDocument();

    await userEvent.selectOptions(screen.getByLabelText('Mal'), 'VARREV' satisfies DokumentMalType);
    await userEvent.selectOptions(screen.getByLabelText('Årsak'), 'BARNIKKEREG');

    expect(await screen.findByText('Rediger brev')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send brev' })).not.toBeDisabled();
  });

  it('skal vise "Rediger brev"-knapp for VARREV med årsak ANNET og ha deaktivert send-knapp', async () => {
    render(<Default />);
    expect(await screen.findByText('Mal')).toBeInTheDocument();

    await userEvent.selectOptions(screen.getByLabelText('Mal'), 'VARREV' satisfies DokumentMalType);
    await userEvent.selectOptions(screen.getByLabelText('Årsak'), 'ANNET');

    expect(await screen.findByText('Rediger brev')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send brev' })).toBeDisabled();
  });

  it('skal ikke vise årsaksverdi Barn ikke registrert for Svangerskapspenger', async () => {
    const lagre = vi.fn();
    render(<ForSvangerskapspenger submitCallback={lagre} />);
    expect(await screen.findByText('Mal')).toBeInTheDocument();

    await userEvent.selectOptions(screen.getByLabelText('Mal'), 'VARREV' satisfies DokumentMalType);

    expect(await screen.findByText('Annet')).toBeInTheDocument();
    expect(screen.queryByText('Barn ikke registrert i folkeregisteret')).not.toBeInTheDocument();
    expect(screen.queryByText(brukerenHarIkkeAdresseText)).not.toBeInTheDocument();
  });

  it('skal vise melding til saksbehandler at bruker ikke har en adresse registrert', async () => {
    const lagre = vi.fn();
    render(<BrukerManglerAdresse submitCallback={lagre} />);
    expect(await screen.findByText('Mal')).toBeInTheDocument();

    await userEvent.selectOptions(screen.getByLabelText('Mal'), 'VARREV' satisfies DokumentMalType);

    expect(await screen.findByText(brukerenHarIkkeAdresseText)).toBeInTheDocument();
  });
});
