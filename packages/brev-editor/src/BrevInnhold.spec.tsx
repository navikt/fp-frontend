import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { BrevInnhold } from './BrevInnhold';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const BREV_HTML = `
<html>
  <head>
    <style>body { font-family: Arial; }</style>
  </head>
  <body>
    <div id="logo"><img src="nav-logo.png" alt="NAV" /></div>
    <div id="header"><h1>Vedtak om foreldrepenger</h1></div>
    <div id="redigerbart-innhold" data-editable="data-editable"><p>Innholdet i brevet.</p></div>
    <div id="readonly-innhold"><p>Med vennlig hilsen NAV</p></div>
  </body>
</html>
`;

const defaultProps = {
  opprinneligHtml: BREV_HTML,
  editorHolderId: 'test-editor',
  visForhåndsvisValideringsFeil: false,
  setVisTilbakestillAdvarselModal: vi.fn(),
  lagreOgLukk: vi.fn(),
  forhåndsvis: vi.fn(),
};

const renderBrevInnhold = (props: Partial<Parameters<typeof BrevInnhold>[0]> = {}) =>
  render(
    <RawIntlProvider value={intl}>
      <BrevInnhold {...defaultProps} {...props} />
    </RawIntlProvider>,
  );

describe('BrevInnhold', () => {
  it('skal vise Lagre og Tilbakestill knapper', () => {
    renderBrevInnhold();
    expect(screen.getByRole('button', { name: /lagre/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /tilbakestill/i })).toBeInTheDocument();
  });

  it('skal vise forhåndsvis-knapp', () => {
    renderBrevInnhold();
    expect(screen.getByRole('button', { name: /forhåndsvis brev/i })).toBeInTheDocument();
  });

  it('skal kalle lagreOgLukk når Lagre-knapp klikkes', async () => {
    const lagreOgLukk = vi.fn();
    renderBrevInnhold({ lagreOgLukk });
    await userEvent.click(screen.getByRole('button', { name: /lagre/i }));
    expect(lagreOgLukk).toHaveBeenCalledTimes(1);
  });

  it('skal kalle forhåndsvis når forhåndsvis-knapp klikkes', async () => {
    const forhåndsvis = vi.fn();
    renderBrevInnhold({ forhåndsvis });
    await userEvent.click(screen.getByRole('button', { name: /forhåndsvis brev/i }));
    expect(forhåndsvis).toHaveBeenCalledTimes(1);
  });

  it('skal kalle setVisTilbakestillAdvarselModal med true når Tilbakestill klikkes', async () => {
    const setVisTilbakestillAdvarselModal = vi.fn();
    renderBrevInnhold({ setVisTilbakestillAdvarselModal });
    await userEvent.click(screen.getByRole('button', { name: /tilbakestill/i }));
    expect(setVisTilbakestillAdvarselModal).toHaveBeenCalledWith(true);
  });

  it('skal deaktivere Lagre og Tilbakestill knapper når isReadOnly er true', () => {
    renderBrevInnhold({ isReadOnly: true });
    expect(screen.getByRole('button', { name: /lagre/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /tilbakestill/i })).toBeDisabled();
  });

  it('skal ikke deaktivere knapper som standard (isReadOnly=false)', () => {
    renderBrevInnhold({ isReadOnly: false });
    expect(screen.getByRole('button', { name: /lagre/i })).not.toBeDisabled();
    expect(screen.getByRole('button', { name: /tilbakestill/i })).not.toBeDisabled();
  });

  it('skal vise valideringsfeil-alert når visForhåndsvisValideringsFeil er true', () => {
    renderBrevInnhold({ visForhåndsvisValideringsFeil: true });
    expect(screen.getByText('Brevinnholdet er for kort. Legg til mer innhold.')).toBeInTheDocument();
  });

  it('skal ikke vise valideringsfeil-alert som standard', () => {
    renderBrevInnhold({ visForhåndsvisValideringsFeil: false });
    expect(screen.queryByText('Brevinnholdet er for kort. Legg til mer innhold.')).not.toBeInTheDocument();
  });

  it('skal vise footer-innhold når footer er angitt', () => {
    const { container } = renderBrevInnhold({ footer: '<p>Footer-tekst</p>' });
    expect(container.innerHTML).toContain('Footer-tekst');
  });

  it('skal ikke vise footer-innhold når footer er undefined', () => {
    const { container } = renderBrevInnhold({ footer: undefined });
    expect(container.innerHTML).not.toContain('Footer-tekst');
  });
});
