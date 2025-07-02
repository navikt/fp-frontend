import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { UttakPeriodeType } from '@navikt/fp-kodeverk';

import * as stories from './UttakFaktaEøsIndex.stories';

const { ÅpentAksjonspunktMedPerioder, ÅpentAksjonspunktUtenPerioder } = composeStories(stories);

describe('UttakFaktaEøsIndex', () => {
  it('skal få aksjonspunkt uten eksisterende perioder og kan bekrefte AP uten å legge til noen peridoer', async () => {
    const lagre = vi.fn(() => Promise.resolve());
    const utils = render(<ÅpentAksjonspunktUtenPerioder submitCallback={lagre} />);

    expect(await screen.findByText('Fakta om uttak til annen forelder i EØS')).toBeInTheDocument();

    expect(screen.queryByText('Periode')).not.toBeInTheDocument();

    expect(screen.getByText('Har annen forelder uttak i EØS?')).toBeInTheDocument();
    expect(screen.getByLabelText('Nei')).toHaveProperty('checked', true);

    expect(screen.queryByText('Periode')).not.toBeInTheDocument();

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');
    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5103',
      begrunnelse: 'Dette er en begrunnelse',
      perioder: [],
    });
  });

  it('skal få aksjonspunkt uten eksisterende perioder og kan bekrefte AP uten å legge til peridoer', async () => {
    const lagre = vi.fn(() => Promise.resolve());
    const utils = render(<ÅpentAksjonspunktUtenPerioder submitCallback={lagre} />);

    expect(await screen.findByText('Fakta om uttak til annen forelder i EØS')).toBeInTheDocument();

    expect(screen.queryByText('Periode')).not.toBeInTheDocument();

    expect(screen.getByText('Har annen forelder uttak i EØS?')).toBeInTheDocument();
    const JaKnapp = screen.getByLabelText('Ja');
    JaKnapp.click();
    expect(JaKnapp).toHaveProperty('checked', true);

    expect(screen.queryByText('Periode')).toBeInTheDocument();

    expect(await screen.findByText('Legg til periode')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Legg til periode'));
    await userEvent.type(screen.getByLabelText('Fra og med'), '31.01.2022');
    await userEvent.type(screen.getByLabelText('Til og med'), '15.02.2022');
    await userEvent.selectOptions(screen.getByLabelText('Stønadskonto'), UttakPeriodeType.FELLESPERIODE);
    await userEvent.type(screen.getByLabelText('Trekkdager'), '40');
    await userEvent.click(screen.getByText('Legg til'));

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');
    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5103',
      begrunnelse: 'Dette er en begrunnelse',
      perioder: [
        {
          fom: '2022-01-31',
          tom: '2022-02-15',
          trekkonto: 'FELLESPERIODE',
          trekkdager: '40',
        },
      ],
    });
  });

  it('skal vise eksisterende perioder og kunne slette periode', async () => {
    const lagre = vi.fn(() => Promise.resolve());
    const utils = render(<ÅpentAksjonspunktMedPerioder submitCallback={lagre} />);

    expect(await screen.findByText('Fakta om uttak til annen forelder i EØS')).toBeInTheDocument();

    expect(screen.getByText('Har annen forelder uttak i EØS?')).toBeInTheDocument();
    const JaKnapp = screen.getByLabelText('Ja');
    expect(JaKnapp).toHaveProperty('checked', true);

    expect(screen.queryByText('Periode')).toBeInTheDocument();

    await userEvent.click(screen.getAllByTitle('Vis mer')[0]);
    await userEvent.click(screen.getByText('Slett periode'));
    expect(screen.getByText('Vil du slette denne perioden?')).toBeInTheDocument();
    await userEvent.click(screen.getByText('OK'));

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');
    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5103',
      begrunnelse: 'Dette er en begrunnelse',
      perioder: [
        {
          fom: '2023-01-01',
          tom: '2023-01-31',
          trekkonto: UttakPeriodeType.MODREKVOTE,
          trekkdager: 10,
        },
        {
          fom: '2023-02-01',
          tom: '2023-02-15',
          trekkonto: UttakPeriodeType.MODREKVOTE,
          trekkdager: 10,
        },
      ],
    });
  });

  it('skal få feilmelding hvis en legger til overlappende perioder, rydder opp i overlapper og sender inn', async () => {
    const lagre = vi.fn(() => Promise.resolve());
    const utils = render(<ÅpentAksjonspunktUtenPerioder submitCallback={lagre} />);

    expect(await screen.findByText('Fakta om uttak til annen forelder i EØS')).toBeInTheDocument();

    expect(screen.queryByText('Periode')).not.toBeInTheDocument();

    expect(screen.getByText('Har annen forelder uttak i EØS?')).toBeInTheDocument();
    const JaKnapp = screen.getByLabelText('Ja');
    JaKnapp.click();
    expect(JaKnapp).toHaveProperty('checked', true);

    expect(screen.queryByText('Periode')).toBeInTheDocument();

    expect(await screen.findByText('Legg til periode')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Legg til periode'));
    await userEvent.type(screen.getByLabelText('Fra og med'), '31.01.2022');
    await userEvent.type(screen.getByLabelText('Til og med'), '15.02.2022');
    await userEvent.selectOptions(screen.getByLabelText('Stønadskonto'), UttakPeriodeType.FELLESPERIODE);
    await userEvent.type(screen.getByLabelText('Trekkdager'), '40');
    await userEvent.click(screen.getByText('Legg til'));

    expect(await screen.findByText('Legg til periode')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Legg til periode'));
    await userEvent.type(screen.getByLabelText('Fra og med'), '12.02.2022');
    await userEvent.type(screen.getByLabelText('Til og med'), '25.02.2022');
    await userEvent.selectOptions(screen.getByLabelText('Stønadskonto'), UttakPeriodeType.MODREKVOTE);
    await userEvent.type(screen.getByLabelText('Trekkdager'), '12');
    await userEvent.click(screen.getByText('Legg til'));

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    expect(screen.getByText('Du må rette disse feilene før du kan fortsette:')).toBeInTheDocument();
    expect(screen.getByText('Det finnes overlappende perioder')).toBeInTheDocument();

    expect(lagre).not.toHaveBeenCalled();

    // Oppdatere perioden slik at det ikke blir overlapp og sender deretter inn
    await userEvent.click(screen.getAllByTitle('Vis mer')[1]);
    await userEvent.type(screen.getByLabelText('Fra og med'), '16.02.2022');
    await userEvent.click(screen.getByText('Oppdater'));

    console.log(screen.debug());

    expect(screen.getByText('Du må rette disse feilene før du kan fortsette:')).not.toBeInTheDocument();
    expect(screen.getByText('Det finnes overlappende perioder')).not.toBeInTheDocument();

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');
    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5103',
      begrunnelse: 'Dette er en begrunnelse',
      perioder: [
        {
          fom: '31.01.2022',
          tom: '15.02.2022',
          trekkonto: UttakPeriodeType.FELLESPERIODE,
          trekkdager: 40,
        },
        {
          fom: '16.02.2022',
          tom: '25.02.2022',
          trekkonto: UttakPeriodeType.MODREKVOTE,
          trekkdager: 10,
        },
      ],
    });
  });
});
