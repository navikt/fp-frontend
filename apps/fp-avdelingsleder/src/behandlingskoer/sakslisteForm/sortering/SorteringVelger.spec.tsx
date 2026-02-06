import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';

import * as stories from './SorteringVelger.stories';

const {
  SorteringsvelgerNårMangeBehandlingstyperErValgt,
  SorteringsvelgerNårKunTilbakekrevingErValgt,
  SorteringsvelgerNårDynamiskPeriodeErValgt,
} = composeStories(stories);

describe('SorteringVelger', () => {
  it('skal vise tre sorteringsvalg når mange behandlingstyper er valgt', async () => {
    applyRequestHandlers(SorteringsvelgerNårMangeBehandlingstyperErValgt.parameters['msw'] as MswParameters['msw']);
    render(<SorteringsvelgerNårMangeBehandlingstyperErValgt />);
    expect(await screen.findByText('Dato for behandlingsfrist')).toBeInTheDocument();
    expect(await screen.findByLabelText('Dato for behandlingsfrist')).toBeChecked();
    expect(screen.getByLabelText('Dato for opprettelse av behandling')).not.toBeChecked();
    expect(screen.getByLabelText('Dato for første stønadsdag')).not.toBeChecked();
    expect(screen.queryByText('Feilutbetalt beløp')).not.toBeInTheDocument();
    expect(screen.queryByText('Dato for første feilutbetaling')).not.toBeInTheDocument();
  });

  it('skal vise datovelger der dynamisk periode ikke er valgt', async () => {
    applyRequestHandlers(SorteringsvelgerNårMangeBehandlingstyperErValgt.parameters['msw'] as MswParameters['msw']);
    render(<SorteringsvelgerNårMangeBehandlingstyperErValgt />);
    expect(await screen.findByText('Dato for behandlingsfrist')).toBeInTheDocument();
    expect(await screen.findByText('Ta kun med behandlinger med dato')).toBeInTheDocument();
    expect(screen.getByText('F.o.m.')).toBeInTheDocument();
    expect(screen.getByText('T.o.m.')).toBeInTheDocument();

    expect(screen.getByLabelText('Fast periode')).toBeChecked();
  });

  it('skal vise datovelger der dynamisk periode er valgt', async () => {
    applyRequestHandlers(SorteringsvelgerNårDynamiskPeriodeErValgt.parameters['msw'] as MswParameters['msw']);
    render(<SorteringsvelgerNårDynamiskPeriodeErValgt />);
    expect(await screen.findByText('Dato for behandlingsfrist')).toBeInTheDocument();
    expect(await screen.findByText('Ta kun med behandlinger med dato')).toBeInTheDocument();
    expect(screen.getByText('F.o.m.')).toBeInTheDocument();
    expect(screen.getByText('T.o.m.')).toBeInTheDocument();

    expect(screen.getByLabelText('Relativ periode (dager)')).toBeChecked();
  });

  it('skal vise vis beløpvelger når Feilutbetalt beløp er valgt', async () => {
    applyRequestHandlers(SorteringsvelgerNårKunTilbakekrevingErValgt.parameters['msw'] as MswParameters['msw']);
    render(<SorteringsvelgerNårKunTilbakekrevingErValgt />);
    expect(await screen.findByText('Dato for behandlingsfrist')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Feilutbetalt beløp'));

    expect(await screen.findByText('Ta kun med behandlinger mellom')).toBeInTheDocument();
    expect(screen.getAllByText('kr')[0]!).toBeInTheDocument();
    expect(screen.getAllByText('kr')[1]!).toBeInTheDocument();
  });

  it('skal vise fem sorteringsvalg når kun tilbakekreving er valgt', async () => {
    applyRequestHandlers(SorteringsvelgerNårKunTilbakekrevingErValgt.parameters['msw'] as MswParameters['msw']);
    render(<SorteringsvelgerNårKunTilbakekrevingErValgt />);
    expect(await screen.findByText('Dato for behandlingsfrist')).toBeInTheDocument();
    expect(screen.getByLabelText('Dato for behandlingsfrist')).toBeInTheDocument();
    expect(screen.getByLabelText('Dato for opprettelse av behandling')).toBeInTheDocument();
    expect(screen.getByLabelText('Dato for første stønadsdag')).toBeInTheDocument();
    expect(screen.getByLabelText('Feilutbetalt beløp')).toBeInTheDocument();
    expect(screen.getByLabelText('Dato for første feilutbetaling')).toBeInTheDocument();
  });
});
