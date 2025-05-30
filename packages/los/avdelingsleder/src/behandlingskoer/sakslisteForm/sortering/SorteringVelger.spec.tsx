import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './SorteringVelger.stories';

const {
  SorteringsvelgerNårMangeBehandlingstyperErValgt,
  SorteringsvelgerNårKunTilbakekrevingErValgt,
  SorteringsvelgerNårDynamiskPeriodeErValgt,
} = composeStories(stories);

describe('SorteringVelger', () => {
  it('skal vise tre sorteringsvalg når mange behandlingstyper er valgt', async () => {
    await applyRequestHandlers(SorteringsvelgerNårMangeBehandlingstyperErValgt.parameters['msw']);
    render(<SorteringsvelgerNårMangeBehandlingstyperErValgt />);
    expect(await screen.findByText('Dato for behandlingsfrist')).toBeInTheDocument();
    expect(await screen.findByLabelText('Dato for behandlingsfrist')).toBeChecked();
    expect(screen.getByLabelText('Dato for opprettelse av behandling')).not.toBeChecked();
    expect(screen.getByLabelText('Dato for første stønadsdag')).not.toBeChecked();
    expect(screen.queryByText('Feilutbetalt beløp')).not.toBeInTheDocument();
    expect(screen.queryByText('Dato for første feilutbetaling')).not.toBeInTheDocument();
  });

  it('skal vise datovelger der dynamisk periode ikke er valgt', async () => {
    await applyRequestHandlers(SorteringsvelgerNårMangeBehandlingstyperErValgt.parameters['msw']);
    render(<SorteringsvelgerNårMangeBehandlingstyperErValgt />);
    expect(await screen.findByText('Dato for behandlingsfrist')).toBeInTheDocument();
    expect(await screen.findByText('Ta kun med behandlinger med dato')).toBeInTheDocument();
    expect(screen.getByText('F.o.m.')).toBeInTheDocument();
    expect(screen.getByText('T.o.m.')).toBeInTheDocument();

    expect(screen.getByLabelText('Dynamisk periode')).not.toBeChecked();
  });

  it('skal vise datovelger der dynamisk periode er valgt', async () => {
    await applyRequestHandlers(SorteringsvelgerNårDynamiskPeriodeErValgt.parameters['msw']);
    render(<SorteringsvelgerNårDynamiskPeriodeErValgt />);
    expect(await screen.findByText('Dato for behandlingsfrist')).toBeInTheDocument();
    expect(await screen.findByText('Ta kun med behandlinger med dato')).toBeInTheDocument();
    expect(screen.getByText('F.o.m.')).toBeInTheDocument();
    expect(screen.getByText('T.o.m.')).toBeInTheDocument();

    expect(screen.getByLabelText('Dynamisk periode')).toBeChecked();
  });

  it('skal vise vis beløpvelger når Feilutbetalt beløp er valgt', async () => {
    await applyRequestHandlers(SorteringsvelgerNårKunTilbakekrevingErValgt.parameters['msw']);
    render(<SorteringsvelgerNårKunTilbakekrevingErValgt />);
    expect(await screen.findByText('Dato for behandlingsfrist')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Feilutbetalt beløp'));

    expect(await screen.findByText('Ta kun med behandlinger mellom')).toBeInTheDocument();
    expect(screen.getAllByText('kr')[0]).toBeInTheDocument();
    expect(screen.getAllByText('kr')[1]).toBeInTheDocument();
  });

  it('skal vise feilmelding når en skriver inn bokstaver i fra-beløpfelt', async () => {
    await applyRequestHandlers(SorteringsvelgerNårKunTilbakekrevingErValgt.parameters['msw']);
    render(<SorteringsvelgerNårKunTilbakekrevingErValgt />);
    expect(await screen.findByText('Dato for behandlingsfrist')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Feilutbetalt beløp'));

    expect(await screen.findByText('Ta kun med behandlinger mellom')).toBeInTheDocument();

    const fraInput = screen.getAllByRole('textbox')[0];
    await userEvent.type(fraInput, 'bokstaver');

    expect(await screen.findByText('Feltet kan kun inneholde tall')).toBeInTheDocument();
  });

  it('skal vise feilmelding når en skriver inn bokstaver i til-beløpfelt', async () => {
    await applyRequestHandlers(SorteringsvelgerNårKunTilbakekrevingErValgt.parameters['msw']);
    render(<SorteringsvelgerNårKunTilbakekrevingErValgt />);
    expect(await screen.findByText('Dato for behandlingsfrist')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Feilutbetalt beløp'));

    expect(await screen.findByText('Ta kun med behandlinger mellom')).toBeInTheDocument();

    const tilInput = screen.getAllByRole('textbox')[1];
    await userEvent.type(tilInput, 'bokstaver');

    expect(await screen.findByText('Feltet kan kun inneholde tall')).toBeInTheDocument();
  });

  it('skal vise fem sorteringsvalg når kun tilbakekreving er valgt', async () => {
    await applyRequestHandlers(SorteringsvelgerNårKunTilbakekrevingErValgt.parameters['msw']);
    render(<SorteringsvelgerNårKunTilbakekrevingErValgt />);
    expect(await screen.findByText('Dato for behandlingsfrist')).toBeInTheDocument();
    expect(await screen.findByLabelText('Dato for behandlingsfrist')).toBeChecked();
    expect(screen.getByLabelText('Dato for opprettelse av behandling')).not.toBeChecked();
    expect(screen.getByLabelText('Dato for første stønadsdag')).not.toBeChecked();
    expect(screen.getByLabelText('Feilutbetalt beløp')).not.toBeChecked();
    expect(screen.getByLabelText('Dato for første feilutbetaling')).not.toBeChecked();
  });
});
