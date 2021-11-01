import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './RisikoklassifiseringSakIndex.stories';

const { IngenRisikoklassifisering, LavRisikoklassifisering, HøyRisikoklassifisering } = composeStories(stories);

describe('<RisikoklassifiseringSakIndex>', () => {
  it('skal mangle klassifisering', async () => {
    render(<IngenRisikoklassifisering />);
    expect(await screen.findAllByText('Faresignaler')).toHaveLength(2);
  });

  it('skal vise ingen faresignaler når en har lav klassifisering', async () => {
    render(<LavRisikoklassifisering />);
    expect(await screen.findByText('Ingen faresignaler oppdaget')).toBeInTheDocument();
  });

  it('skal vurdere faresignaler som ikke reelle', async () => {
    const lagreAksjonspunkt = jest.fn();
    const utils = render(<HøyRisikoklassifisering submitAksjonspunkt={lagreAksjonspunkt} />);
    expect(await screen.findByText('Faresignaler oppdaget')).toBeInTheDocument();
    expect(await screen.findByText('Vurder faresignalene')).toBeInTheDocument();

    expect(await screen.findByText('Medlemskap')).toBeInTheDocument();
    expect(await screen.findByText('Faresignal 1')).toBeInTheDocument();

    expect(await screen.findByText('Arbeidsforhold og inntekt')).toBeInTheDocument();
    expect(await screen.findByText('Faresignal 2')).toBeInTheDocument();
    expect(await screen.findByText('Faresignal 3')).toBeInTheDocument();
    expect(await screen.findByText('Faresignal 4')).toBeInTheDocument();

    const vurderingInput = utils.getByLabelText('Vurdering');
    userEvent.type(vurderingInput, 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Faresignalene vurderes ikke som reelle'));

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagreAksjonspunkt).toHaveBeenCalledTimes(1));
    expect(lagreAksjonspunkt).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      faresignalVurdering: 'INGEN_INNVIRKNING',
      kode: '5095',
    });
  });

  it('skal vurdere faresignaler som reelle', async () => {
    const lagreAksjonspunkt = jest.fn();
    const utils = render(<HøyRisikoklassifisering submitAksjonspunkt={lagreAksjonspunkt} />);
    expect(await screen.findByText('Faresignaler oppdaget')).toBeInTheDocument();
    expect(screen.getByText('Vurder faresignalene')).toBeInTheDocument();

    expect(screen.getByText('Medlemskap')).toBeInTheDocument();
    expect(screen.getByText('Faresignal 1')).toBeInTheDocument();

    expect(screen.getByText('Arbeidsforhold og inntekt')).toBeInTheDocument();
    expect(screen.getByText('Faresignal 2')).toBeInTheDocument();
    expect(screen.getByText('Faresignal 3')).toBeInTheDocument();
    expect(screen.getByText('Faresignal 4')).toBeInTheDocument();

    const vurderingInput = utils.getByLabelText('Vurdering');
    userEvent.type(vurderingInput, 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Faresignalene vurderes som reelle'));

    userEvent.click(screen.getByText('Saken er innvilget med redusert beregningsgrunnlag'));

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagreAksjonspunkt).toHaveBeenCalledTimes(1));
    expect(lagreAksjonspunkt).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      faresignalVurdering: 'INNVILGET_REDUSERT',
      kode: '5095',
    });
  });

  it('skal få feilmelding når en ikke krysser av type vurdering og vurdering er for kort', async () => {
    const lagreAksjonspunkt = jest.fn();
    const utils = render(<HøyRisikoklassifisering submitAksjonspunkt={lagreAksjonspunkt} />);
    expect(await screen.findByText('Faresignaler oppdaget')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    const vurderingInput = utils.getByLabelText('Vurdering');
    userEvent.type(vurderingInput, 'De');

    await waitFor(() => expect(screen.getByText('Bekreft og fortsett')).not.toBeDisabled());

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(await screen.findByText('Du må skrive minst 3 tegn')).toBeInTheDocument();
    expect(screen.getByText('Feltet må fylles ut')).toBeInTheDocument();

    expect(lagreAksjonspunkt).toHaveBeenCalledTimes(0);
  });

  it('skal få feilmelding når en ikke krysser av grunn til at sak er innvilget eller avslått', async () => {
    const lagreAksjonspunkt = jest.fn();
    const utils = render(<HøyRisikoklassifisering submitAksjonspunkt={lagreAksjonspunkt} />);
    expect(await screen.findByText('Faresignaler oppdaget')).toBeInTheDocument();

    const vurderingInput = utils.getByLabelText('Vurdering');
    userEvent.type(vurderingInput, 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Faresignalene vurderes som reelle'));

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    expect(lagreAksjonspunkt).toHaveBeenCalledTimes(0);
  });
});
