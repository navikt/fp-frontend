import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './OmsorgOgRettFaktaIndex.stories';

const {
  HarAksjonspunktForAvklarAleneomsorg,
  HarAksjonspunktForAvklarAleneomsorgMedFlereBarn,
  HarAksjonspunktForAvklarAnnenForelderRett,
  AvklarAnnenForelderRettBareFarRett,
  RevurderingManuell,
  KanOverstyreMor,
} = composeStories(stories);

describe('OmsorgOgRettFaktaIndex', () => {
  it('skal velge å ha aleneomsorg for barnet', async () => {
    const lagreVurdering = vi.fn(() => Promise.resolve());

    const utils = render(<HarAksjonspunktForAvklarAleneomsorg submitCallback={lagreVurdering} />);

    expect(screen.queryByText('Rettighetstype')).not.toBeInTheDocument();
    expect(await screen.findByText('Vurder om søker har aleneomsorg for barnet.')).toBeInTheDocument();

    expect(screen.getByText('Barnet, Tutta Utvikler')).toBeInTheDocument();

    expect(screen.getByText('Søker, Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Den andre forelderen, Petra Utvikler')).toBeInTheDocument();

    expect(screen.getAllByText('Veigata 1, 0203 Bobygda')).toHaveLength(3);
    expect(screen.getAllByText('Industrigata 2B, 4123 Bobygda')).toHaveLength(2);

    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    expect(screen.getByText('Søker har oppgitt å ha aleneomsorg for barnet')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Søker har aleneomsorg for barnet'));

    await userEvent.type(utils.getByLabelText('Vurdering'), 'Dette er en begrunnelse');

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

    expect(screen.queryByText('Rettighetstype')).not.toBeInTheDocument();

    expect(await screen.findByText('Vurder om søker har aleneomsorg for barnet.')).toBeInTheDocument();

    expect(screen.getByText('Søker har oppgitt å ha aleneomsorg for barnet')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Søker har ikke aleneomsorg for barnet'));

    expect(screen.getAllByText('Har annen forelder rett til foreldrepenger i Norge?')).toHaveLength(1);
    const jaElements = screen.getAllByText('Ja');
    await userEvent.click(jaElements[jaElements.length - 1]);

    await userEvent.type(utils.getByLabelText('Vurdering'), 'Dette er en begrunnelse');

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
    expect(screen.queryByText('Rettighetstype')).not.toBeInTheDocument();

    expect(screen.getAllByText('Har annen forelder rett til foreldrepenger i Norge?')).toHaveLength(2);
    const jaElements = screen.getAllByText('Ja');
    await userEvent.click(jaElements[jaElements.length - 1]);

    await userEvent.type(utils.getByLabelText('Vurdering'), 'Dette er en begrunnelse');

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
    expect(screen.queryByText('Rettighetstype')).not.toBeInTheDocument();

    expect(screen.getAllByText('Har annen forelder rett til foreldrepenger i Norge?')).toHaveLength(2);
    await userEvent.click(screen.getAllByText('Nei')[screen.getAllByText('Nei').length - 1]);

    expect(
      screen.getByText('Har annen forelder mottatt pengestøtte tilsvarende foreldrepenger fra land i EØS?'),
    ).toBeInTheDocument();
    await userEvent.click(screen.getAllByText('Nei')[screen.getAllByText('Nei').length - 1]);

    expect(await screen.findByText('Mottar annen forelder uføretrygd, jf. § 14-14 tredje ledd?')).toBeInTheDocument();
    await userEvent.click(screen.getAllByText('Ja')[screen.getAllByText('Ja').length - 1]);

    await userEvent.type(utils.getByLabelText('Vurdering'), 'Dette er en begrunnelse');

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

  it('skal vise at bare far har rett til foreldrepenger når mor er uføretrygd', async () => {
    render(<AvklarAnnenForelderRettBareFarRett isReadOnly />);

    expect(await screen.findByText('Rettighetstype')).toBeInTheDocument();
    expect(screen.getAllByText('Har annen forelder rett til foreldrepenger i Norge?')).toHaveLength(2);
    expect(
      screen.getByText('Har annen forelder mottatt pengestøtte tilsvarende foreldrepenger fra land i EØS?'),
    ).toBeInTheDocument();
    expect(screen.getByText('Mottar annen forelder uføretrygd, jf. § 14-14 tredje ledd?')).toBeInTheDocument();
    expect(await screen.findByText('Mor har ikke rett og er uføretrygded i pesys.')).toBeInTheDocument();
    const bekreftOgFortsettKnapp = screen.queryByText('Bekreft og fortsett');
    expect(bekreftOgFortsettKnapp).not.toBeInTheDocument();

    const neiRadioButtons = screen.getAllByLabelText('Nei') as HTMLInputElement[];
    const checkedNeiRadioButtons = neiRadioButtons.filter(radio => radio.checked);

    expect(checkedNeiRadioButtons).toHaveLength(3);
    checkedNeiRadioButtons.forEach(radio => {
      expect(radio).toBeDisabled();
    });
  });

  it('skal vise i readonly modus for historisk valgte options når revurdering åpnes', async () => {
    render(<RevurderingManuell isReadOnly={true} />);

    expect(await screen.findByText('Rettighetstype')).toBeInTheDocument();
    expect(screen.getAllByText('Har annen forelder rett til foreldrepenger i Norge?')).toHaveLength(2);
    expect(
      screen.getByText('Har annen forelder mottatt pengestøtte tilsvarende foreldrepenger fra land i EØS?'),
    ).toBeInTheDocument();
    expect(screen.getByText('Mottar annen forelder uføretrygd, jf. § 14-14 tredje ledd?')).toBeInTheDocument();
    const bekreftOgFortsettKnapp = screen.queryByText('Bekreft og fortsett');
    expect(bekreftOgFortsettKnapp).not.toBeInTheDocument();

    const neiRadioButtons = screen.getAllByLabelText('Nei') as HTMLInputElement[];
    const checkedNeiRadioButtons = neiRadioButtons.filter(radio => radio.checked);
    expect(checkedNeiRadioButtons).toHaveLength(2);
    checkedNeiRadioButtons.forEach(radio => {
      expect(radio).toBeDisabled();
    });

    const jaRadioButtons = screen.getAllByLabelText('Ja') as HTMLInputElement[];
    const checkedJaRadioButtons = jaRadioButtons.filter(radio => radio.checked);
    expect(checkedJaRadioButtons).toHaveLength(1);
    checkedJaRadioButtons.forEach(radio => {
      expect(radio).toBeDisabled();
    });
  });

  it('skal kunne ovestyre', async () => {
    const lagreVurdering = vi.fn(() => Promise.resolve());

    const utils = render(<KanOverstyreMor submitCallback={lagreVurdering} />);

    await userEvent.click(screen.getByTitle('Overstyr'));
    await userEvent.selectOptions(utils.getByLabelText('Rettighetstype'), 'BEGGE_RETT');

    await userEvent.type(utils.getByLabelText('Vurdering'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, {
      kode: '6018',
      begrunnelse: 'Dette er en begrunnelse',
      rettighetstype: 'BEGGE_RETT',
    });
  });
});
