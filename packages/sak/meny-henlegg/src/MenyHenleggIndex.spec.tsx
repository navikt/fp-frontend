import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './MenyHenleggIndex.stories';

const { ForFørstegangssøknad, ForKlage, ForInnsyn, ForTilbakekreving, ForTilbakekrevingRevurdering, ForRevurdering } =
  composeStories(stories);

describe('MenyHenleggIndex', () => {
  it('skal velge henlegge behandling og så vise modal som viser at behandling er henlagt', async () => {
    const henleggBehandling = vi.fn(() => Promise.resolve());
    render(<ForFørstegangssøknad henleggBehandling={henleggBehandling} />);
    expect(await screen.findAllByText('Henlegg behandling')).toHaveLength(2);
    expect(screen.getAllByText('Henlegg behandling')[1]!.closest('button')).toBeDisabled();

    expect(screen.getByText('Søknaden er trukket')).toBeInTheDocument();
    expect(screen.getByText('Behandlingen er feilaktig opprettet')).toBeInTheDocument();
    expect(screen.getByText('Søknad mangler')).toBeInTheDocument();
    expect(screen.queryByText('Henlagt feilopprettet')).not.toBeInTheDocument();
    expect(screen.queryByText('Klagen er trukket')).not.toBeInTheDocument();
    expect(screen.queryByText('Innsynskrav er trukket')).not.toBeInTheDocument();

    await userEvent.selectOptions(screen.getByLabelText('Velg årsak'), 'HENLAGT_SØKNAD_TRUKKET');

    const begrunnelseInput = screen.getByLabelText('Begrunnelse');
    await userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getAllByText('Henlegg behandling')[1]!);

    await waitFor(() => expect(henleggBehandling).toHaveBeenCalledTimes(1));
    expect(henleggBehandling).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      fritekst: undefined,
      årsakKode: 'HENLAGT_SØKNAD_TRUKKET',
    });

    expect(await screen.findByText('Behandlingen er henlagt')).toBeInTheDocument();
    expect(screen.getByText('Du kommer nå til forsiden')).toBeInTheDocument();
  });

  it('skal lukke modal ved trykk på avbryt-knapp', async () => {
    const avbryt = vi.fn(() => Promise.resolve());
    render(<ForFørstegangssøknad lukkModal={avbryt} />);
    expect(await screen.findByText('Avbryt')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Avbryt'));

    await waitFor(() => expect(avbryt).toHaveBeenCalledTimes(1));
  });

  it('skal vise behandlingsresultat-typer for klage', async () => {
    render(<ForKlage />);
    expect(await screen.findAllByText('Henlegg behandling')).toHaveLength(2);

    expect(screen.queryByText('Henlagt soknad trukket')).not.toBeInTheDocument();
    expect(screen.queryByText('Henlagt feilopprettet')).not.toBeInTheDocument();
    expect(screen.queryByText('Henlagt soknad mangler')).not.toBeInTheDocument();
    expect(screen.queryByText('Innsynskrav er trukket')).not.toBeInTheDocument();
    expect(screen.getByText('Klagen er trukket')).toBeInTheDocument();
    expect(screen.getByText('Behandlingen er feilaktig opprettet')).toBeInTheDocument();
  });

  it('skal vise behandlingsresultat-typer for innsyn', async () => {
    render(<ForInnsyn />);
    expect(await screen.findAllByText('Henlegg behandling')).toHaveLength(2);

    expect(screen.queryByText('Henlagt soknad trukket')).not.toBeInTheDocument();
    expect(screen.queryByText('Henlagt feilopprettet')).not.toBeInTheDocument();
    expect(screen.queryByText('Henlagt soknad mangler')).not.toBeInTheDocument();
    expect(screen.queryByText('Klagen er trukket')).not.toBeInTheDocument();
    expect(screen.getByText('Innsynskrav er trukket')).toBeInTheDocument();
    expect(screen.getByText('Behandlingen er feilaktig opprettet')).toBeInTheDocument();
  });

  it('skal vise behandlingsresultat-typer for tilbakekreving', async () => {
    render(<ForTilbakekreving />);
    expect(await screen.findAllByText('Henlegg behandling')).toHaveLength(2);

    expect(screen.queryByText('Henlagt soknad trukket')).not.toBeInTheDocument();
    expect(screen.queryByText('Henlagt feilopprettet')).not.toBeInTheDocument();
    expect(screen.queryByText('Henlagt soknad mangler')).not.toBeInTheDocument();
    expect(screen.queryByText('Klagen er trukket')).not.toBeInTheDocument();
    expect(screen.queryByText('Innsynskrav er trukket')).not.toBeInTheDocument();
    expect(screen.getByText('Behandlingen er feilaktig opprettet')).toBeInTheDocument();
  });

  it('skal vise behandlingsresultat-typer for tilbakekreving revurdering', async () => {
    render(<ForTilbakekrevingRevurdering />);
    expect(await screen.findAllByText('Henlegg behandling')).toHaveLength(2);

    expect(screen.queryByText('Henlagt soknad trukket')).not.toBeInTheDocument();
    expect(screen.queryByText('Henlagt feilopprettet')).not.toBeInTheDocument();
    expect(screen.queryByText('Henlagt soknad mangler')).not.toBeInTheDocument();
    expect(screen.queryByText('Klagen er trukket')).not.toBeInTheDocument();
    expect(screen.queryByText('Innsynskrav er trukket')).not.toBeInTheDocument();
    expect(screen.queryByText('Behandlingen er feilaktig opprettet')).not.toBeInTheDocument();
    expect(screen.getByText('Feilaktig opprettet - med henleggelsesbrev')).toBeInTheDocument();
    expect(screen.getByText('Feilaktig opprettet - uten henleggelsesbrev')).toBeInTheDocument();
  });

  it('skal vise behandlingsresultat-typer for revurdering', async () => {
    render(<ForRevurdering />);
    expect(await screen.findAllByText('Henlegg behandling')).toHaveLength(2);

    expect(screen.getByText('Søknaden er trukket')).toBeInTheDocument();
    expect(screen.getByText('Søknad mangler')).toBeInTheDocument();
    expect(screen.getByText('Behandlingen er feilaktig opprettet')).toBeInTheDocument();
    expect(screen.queryByText('Henlagt feilopprettet')).not.toBeInTheDocument();
    expect(screen.queryByText('Klagen er trukket')).not.toBeInTheDocument();
    expect(screen.queryByText('Innsynskrav er trukket')).not.toBeInTheDocument();
    expect(screen.queryByText('Feilaktig opprettet - med henleggelsesbrev')).not.toBeInTheDocument();
    expect(screen.queryByText('Feilaktig opprettet - uten henleggelsesbrev')).not.toBeInTheDocument();
  });

  it('skal vise lenke for forhåndsvisning når en har valgt årsak Søknaden er trukket', async () => {
    const forhandsvisHenleggBehandling = vi.fn(() => Promise.resolve());

    render(<ForFørstegangssøknad forhandsvisHenleggBehandling={forhandsvisHenleggBehandling} />);

    expect(await screen.findAllByText('Henlegg behandling')).toHaveLength(2);

    await userEvent.selectOptions(screen.getByLabelText('Velg årsak'), 'HENLAGT_SØKNAD_TRUKKET');

    expect(await screen.findByText('Informer søker')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Forhåndsvis brev'));

    await waitFor(() => expect(forhandsvisHenleggBehandling).toHaveBeenCalledTimes(1));
    expect(forhandsvisHenleggBehandling).toHaveBeenNthCalledWith(1, {
      behandlingUuid: '23r2323',
      dokumentMal: 'IOHENL',
      fritekst: undefined,
    });
  });

  it('skal ikke vise lenke for forhåndsvisning når en har valgt årsak Søknaden mangler', async () => {
    const forhandsvisHenleggBehandling = vi.fn(() => Promise.resolve());

    render(<ForFørstegangssøknad forhandsvisHenleggBehandling={forhandsvisHenleggBehandling} />);

    expect(await screen.findAllByText('Henlegg behandling')).toHaveLength(2);

    await userEvent.selectOptions(screen.getByLabelText('Velg årsak'), 'HENLAGT_SØKNAD_MANGLER');

    await waitFor(() => expect(screen.queryByText('Informer søker')).not.toBeInTheDocument());
  });
});
