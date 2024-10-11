import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './OmsorgOgRettFaktaIndex.stories';
import { expect } from 'vitest';

const {
  HarAksjonspunktForAvklarAleneomsorg,
  HarAksjonspunktForAvklarAleneomsorgMedFlereBarn,
  HarAksjonspunktForAvklarAnnenForelderRett,
} = composeStories(stories);

describe('<OmsorgOgRettFaktaIndex>', () => {
  it('skal velge å ha aleneomsorg for barnet', async () => {
    const lagreVurdering = vi.fn(() => Promise.resolve());

    const utils = render(<HarAksjonspunktForAvklarAleneomsorg submitCallback={lagreVurdering} />);

    expect(await screen.findByText('Vurder om søker har aleneomsorg for barnet.')).toBeInTheDocument();

    expect(screen.getByText('Barnet, Tutta Utvikler')).toBeInTheDocument();

    expect(screen.getByText('Søker, Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Den andre forelderen, Petra Utvikler')).toBeInTheDocument();

    expect(screen.getAllByText('Veigata 1, 0203 Bobygda')).toHaveLength(3);
    expect(screen.getAllByText('Industrigata 2B, 4123 Bobygda')).toHaveLength(2);

    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    expect(screen.getByText('Søker har oppgitt å ha aleneomsorg for barnet')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Søker har aleneomsorg for barnet'));

    await userEvent.type(utils.getByLabelText('Begrunn vurderingen'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, {
      kode: '5060',
      begrunnelse: 'Dette er en begrunnelse',
      aleneomsorg: true,
      annenforelderHarRett: undefined,
      annenforelderMottarUføretrygd: undefined,
    });
  });

  it('skal velge å ikke ha aleneomsorg for barnet', async () => {
    const lagreVurdering = vi.fn(() => Promise.resolve());

    const utils = render(<HarAksjonspunktForAvklarAleneomsorg submitCallback={lagreVurdering} />);

    expect(await screen.findByText('Vurder om søker har aleneomsorg for barnet.')).toBeInTheDocument();

    expect(screen.getByText('Søker har oppgitt å ha aleneomsorg for barnet')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Søker har ikke aleneomsorg for barnet'));

    expect(screen.getByText('Har annen forelder rett til foreldrepenger i Norge?')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Ja'));

    await userEvent.type(utils.getByLabelText('Begrunn vurderingen'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, {
      kode: '5060',
      begrunnelse: 'Dette er en begrunnelse',
      aleneomsorg: false,
      annenforelderHarRett: true,
      annenforelderMottarUføretrygd: undefined,
    });
  });

  it('skal vise flere barn', async () => {
    render(<HarAksjonspunktForAvklarAleneomsorgMedFlereBarn />);

    expect(await screen.findByText('Vurder om søker har aleneomsorg for barnet.')).toBeInTheDocument();
    expect(screen.getByText('Barnet, Tutta Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Barnet, Petter Tester')).toBeInTheDocument();
    expect(screen.getByText('Søker har oppgitt å ha aleneomsorg for barnet')).toBeInTheDocument();
  });

  it('skal vurdere at den andre forelderen har rett til foreldrepenger', async () => {
    const lagreVurdering = vi.fn(() => Promise.resolve());

    const utils = render(<HarAksjonspunktForAvklarAnnenForelderRett submitCallback={lagreVurdering} />);

    expect(await screen.findByText('Vurder om den andre forelderen har rett til foreldrepenger.')).toBeInTheDocument();

    expect(screen.getByText('Har annen forelder rett til foreldrepenger i Norge?')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Ja'));

    await userEvent.type(utils.getByLabelText('Begrunn vurderingen'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, {
      kode: '5086',
      begrunnelse: 'Dette er en begrunnelse',
      annenforelderHarRett: true,
      annenforelderMottarUføretrygd: undefined,
    });
  });

  it('skal vurdere at den andre forelderen ikke har rett til foreldrepenger', async () => {
    const lagreVurdering = vi.fn(() => Promise.resolve());

    const utils = render(<HarAksjonspunktForAvklarAnnenForelderRett submitCallback={lagreVurdering} />);

    expect(await screen.findByText('Vurder om den andre forelderen har rett til foreldrepenger.')).toBeInTheDocument();

    expect(screen.getByText('Har annen forelder rett til foreldrepenger i Norge?')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Nei'));

    expect(screen.getByText('Har annen forelder tilstrekkelig opptjening fra land i EØS?')).toBeInTheDocument();
    await userEvent.click(screen.getAllByText('Nei')[1]);

    expect(await screen.findByText('Mottar annen forelder uføretrygd, jfr 14-14 tredje ledd?')).toBeInTheDocument();
    await userEvent.click(screen.getAllByText('Ja')[2]);

    await userEvent.type(utils.getByLabelText('Begrunn vurderingen'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, {
      kode: '5086',
      begrunnelse: 'Dette er en begrunnelse',
      annenforelderHarRett: false,
      annenForelderHarRettEØS: false,
      annenforelderMottarUføretrygd: true,
    });
  });
});
