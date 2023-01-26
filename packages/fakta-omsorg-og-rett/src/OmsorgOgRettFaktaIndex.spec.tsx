import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './OmsorgOgRettFaktaIndex.stories';

const {
  HarAksjonspunktForAvklarAleneomsorg,
  HarAksjonspunktForAvklarAleneomsorgMedFlereBarn,
  HarAksjonspunktForAvklarAnnenForelderRett,
} = composeStories(stories);

describe('<OmsorgOgRettFaktaIndex>', () => {
  it('skal velge å ha aleneomsorg for barnet', async () => {
    const lagreVurdering = jest.fn(() => Promise.resolve());

    const utils = render(<HarAksjonspunktForAvklarAleneomsorg submitCallback={lagreVurdering} />);

    expect(await screen.findByText('Fakta om omsorg og rett')).toBeInTheDocument();
    expect(screen.getByText('Vurder om søker har aleneomsorg for barnet.')).toBeInTheDocument();

    expect(screen.getByText('Barn 1')).toBeInTheDocument();
    expect(screen.getByText('Tutta Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Født')).toBeInTheDocument();
    expect(screen.getByText('01.01.2018')).toBeInTheDocument();
    expect(screen.getByText('Død')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019')).toBeInTheDocument();

    expect(screen.getByText('Søker')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();

    expect(screen.getByText('Annen forelder')).toBeInTheDocument();
    expect(screen.getByText('Petra Utvikler')).toBeInTheDocument();

    expect(screen.getAllByText('Samboer')).toHaveLength(2);

    expect(screen.getAllByText('Adresse')).toHaveLength(3);
    expect(screen.getAllByText('Veigata 1')).toHaveLength(3);
    expect(screen.getAllByText('Oddelandet')).toHaveLength(3);
    expect(screen.getAllByText('Leilighet 2')).toHaveLength(3);
    expect(screen.getAllByText('0123 Bobygda, Norge')).toHaveLength(3);

    expect(screen.queryByText('Barn 2')).not.toBeInTheDocument();

    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    expect(screen.getByText('Søker har oppgitt å ha aleneomsorg for barnet')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Søker har aleneomsorg for barnet'));

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
    const lagreVurdering = jest.fn(() => Promise.resolve());

    const utils = render(<HarAksjonspunktForAvklarAleneomsorg submitCallback={lagreVurdering} />);

    expect(await screen.findByText('Fakta om omsorg og rett')).toBeInTheDocument();
    expect(screen.getByText('Vurder om søker har aleneomsorg for barnet.')).toBeInTheDocument();

    expect(screen.getByText('Søker har oppgitt å ha aleneomsorg for barnet')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Søker har IKKE aleneomsorg for barnet'));

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

    expect(await screen.findByText('Fakta om omsorg og rett')).toBeInTheDocument();
    expect(screen.getByText('Barn 1')).toBeInTheDocument();
    expect(screen.getByText('Tutta Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Barn 2')).toBeInTheDocument();
    expect(screen.getByText('Petter Tester')).toBeInTheDocument();

    expect(screen.getByText('Søker har oppgitt å ha aleneomsorg for barnet')).toBeInTheDocument();
  });

  it('skal vurdere at den andre forelderen har rett til foreldrepenger', async () => {
    const lagreVurdering = jest.fn(() => Promise.resolve());

    const utils = render(<HarAksjonspunktForAvklarAnnenForelderRett submitCallback={lagreVurdering} />);

    expect(await screen.findByText('Fakta om omsorg og rett')).toBeInTheDocument();
    expect(screen.getByText('Vurder om den andre forelderen har rett til foreldrepenger.')).toBeInTheDocument();

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
    const lagreVurdering = jest.fn(() => Promise.resolve());

    const utils = render(<HarAksjonspunktForAvklarAnnenForelderRett submitCallback={lagreVurdering} />);

    expect(await screen.findByText('Fakta om omsorg og rett')).toBeInTheDocument();
    expect(screen.getByText('Vurder om den andre forelderen har rett til foreldrepenger.')).toBeInTheDocument();

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
