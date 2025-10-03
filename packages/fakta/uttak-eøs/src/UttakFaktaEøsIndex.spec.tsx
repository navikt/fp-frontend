import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './UttakFaktaEøsIndex.stories';

const {
  ÅpentAksjonspunktMedPerioder,
  AksjonspunktOpprettetUtenTidligereVurderingSkalIkkeHaDefaultValg,
  OverstyringSkalVæreMuligHvisDetForeliggerEnTidligereVurderingMedRegistrertePerioder,
  OverstyringSkalIkkeVæreTilgjengligHvisDetForeliggerAksjonspunktSomKanLøsesEllerEndres,
} = composeStories(stories);

describe('UttakFaktaEøsIndex', () => {
  it('skal få aksjonspunkt uten eksisterende perioder og kan bekrefte AP uten å legge til noen perioder', async () => {
    const lagre = vi.fn(() => Promise.resolve());
    const utils = render(<AksjonspunktOpprettetUtenTidligereVurderingSkalIkkeHaDefaultValg submitCallback={lagre} />);

    expect(await screen.findByText('Fakta om uttak til annen forelder i EØS')).toBeInTheDocument();
    expect(await screen.findByText('Ingen perioder lagt til.')).toBeInTheDocument();
    await userEvent.type(utils.getByLabelText('Vurdering'), 'Dette er en begrunnelse');
    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5103',
      begrunnelse: 'Dette er en begrunnelse',
      perioder: [],
    });
  });

  it('aksjonspunkt skal initielt ikke ha perioder registrert og saksbehandler kan bekrefte AP uten å legge til noen perioder', async () => {
    const lagre = vi.fn(() => Promise.resolve());
    const utils = render(<AksjonspunktOpprettetUtenTidligereVurderingSkalIkkeHaDefaultValg submitCallback={lagre} />);

    expect(await screen.findByText('Fakta om uttak til annen forelder i EØS')).toBeInTheDocument();
    expect(await screen.findByText('Ingen perioder lagt til.')).toBeInTheDocument();

    expect(screen.getByText('Periode')).toBeInTheDocument();

    expect(await screen.findByText('Legg til periode')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Legg til periode'));
    await userEvent.type(screen.getByLabelText('Fra og med'), '31.01.2022');
    await userEvent.type(screen.getByLabelText('Til og med'), '15.02.2022');
    await userEvent.selectOptions(screen.getByLabelText('Stønadskonto'), 'FELLESPERIODE');

    await userEvent.clear(screen.getAllByRole('textbox')[2]!);
    await userEvent.clear(screen.getAllByRole('textbox')[3]!);
    await userEvent.type(screen.getAllByRole('textbox')[2]!, '8');
    await userEvent.type(screen.getAllByRole('textbox')[3]!, '0');
    await userEvent.click(screen.getByText('Legg til'));

    expect(screen.queryByText('Ingen perioder lagt til.')).not.toBeInTheDocument();

    await userEvent.type(utils.getByLabelText('Vurdering'), 'Dette er en begrunnelse');
    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5103',
      begrunnelse: 'Dette er en begrunnelse',
      perioder: [
        {
          fom: '2022-01-31',
          tom: '2022-02-15',
          trekkonto: 'FELLESPERIODE',
          trekkdager: 40,
        },
      ],
    });
  });

  it('skal vise eksisterende perioder og kunne slette periode', async () => {
    const lagre = vi.fn(() => Promise.resolve());
    const utils = render(<ÅpentAksjonspunktMedPerioder submitCallback={lagre} />);

    expect(await screen.findByText('Fakta om uttak til annen forelder i EØS')).toBeInTheDocument();
    expect(screen.queryByText('Ingen perioder lagt til.')).not.toBeInTheDocument();

    await userEvent.click(screen.getAllByTitle('Vis mer')[0]!);
    await userEvent.click(screen.getByText('Slett periode'));
    expect(screen.getByText('Vil du slette denne perioden?')).toBeInTheDocument();
    await userEvent.click(screen.getByText('OK'));

    await userEvent.type(utils.getByLabelText('Vurdering'), 'Dette er en begrunnelse');
    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5103',
      begrunnelse: 'Dette er en begrunnelse',
      perioder: [
        {
          fom: '2023-01-01',
          tom: '2023-01-31',
          trekkonto: 'MØDREKVOTE',
          trekkdager: 10,
        },
        {
          fom: '2023-02-01',
          tom: '2023-02-15',
          trekkonto: 'MØDREKVOTE',
          trekkdager: 10,
        },
      ],
    });
  });

  it('skal få feilmelding hvis en legger til overlappende perioder, rydder opp i overlapper og sender inn', async () => {
    const lagre = vi.fn(() => Promise.resolve());
    const utils = render(<AksjonspunktOpprettetUtenTidligereVurderingSkalIkkeHaDefaultValg submitCallback={lagre} />);

    expect(await screen.findByText('Fakta om uttak til annen forelder i EØS')).toBeInTheDocument();
    expect(await screen.findByText('Ingen perioder lagt til.')).toBeInTheDocument();

    expect(screen.getByText('Periode')).toBeInTheDocument();

    expect(await screen.findByText('Legg til periode')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Legg til periode'));
    await userEvent.type(screen.getByLabelText('Fra og med'), '31.01.2022');
    await userEvent.type(screen.getByLabelText('Til og med'), '15.02.2022');
    await userEvent.selectOptions(screen.getByLabelText('Stønadskonto'), 'FELLESPERIODE');
    await userEvent.clear(screen.getAllByRole('textbox')[2]!);
    await userEvent.clear(screen.getAllByRole('textbox')[3]!);
    await userEvent.type(screen.getAllByRole('textbox')[2]!, '8');
    await userEvent.type(screen.getAllByRole('textbox')[3]!, '3');
    await userEvent.click(screen.getByText('Legg til'));

    expect(await screen.findByText('Legg til periode')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Legg til periode'));
    await userEvent.type(screen.getByLabelText('Fra og med'), '12.02.2022');
    await userEvent.type(screen.getByLabelText('Til og med'), '25.02.2022');
    await userEvent.selectOptions(screen.getByLabelText('Stønadskonto'), 'MØDREKVOTE');
    await userEvent.clear(screen.getAllByRole('textbox')[2]!);
    await userEvent.clear(screen.getAllByRole('textbox')[3]!);
    await userEvent.type(screen.getAllByRole('textbox')[2]!, '1');
    await userEvent.type(screen.getAllByRole('textbox')[3]!, '2.4');
    await userEvent.click(screen.getByText('Legg til'));

    expect(screen.queryByText('Ingen perioder lagt til.')).not.toBeInTheDocument();

    await userEvent.type(utils.getByLabelText('Vurdering'), 'Dette er en begrunnelse');
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    expect(screen.getByText('Du må rette disse feilene før du kan fortsette:')).toBeInTheDocument();
    expect(screen.getByText('Det finnes overlappende perioder')).toBeInTheDocument();

    expect(lagre).not.toHaveBeenCalled();

    // Oppdatere perioden slik at det ikke blir overlapp og sender deretter inn
    await userEvent.click(screen.getAllByTitle('Vis mer')[1]!);
    await userEvent.clear(screen.getByLabelText('Fra og med'));
    await userEvent.type(screen.getByLabelText('Fra og med'), '16.02.2022');
    await userEvent.clear(screen.getAllByRole('textbox')[2]!);
    await userEvent.clear(screen.getAllByRole('textbox')[3]!);
    await userEvent.type(screen.getAllByRole('textbox')[2]!, '1');
    await userEvent.type(screen.getAllByRole('textbox')[3]!, '2.4');
    await userEvent.click(screen.getByText('Oppdater'));

    expect(screen.queryByText('Du må rette disse feilene før du kan fortsette:')).not.toBeInTheDocument();
    expect(screen.queryByText('Det finnes overlappende perioder')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5103',
      begrunnelse: 'Dette er en begrunnelse',
      perioder: [
        {
          fom: '2022-01-31',
          tom: '2022-02-15',
          trekkdager: 43,
          trekkonto: 'FELLESPERIODE',
        },
        {
          fom: '2022-02-16',
          tom: '2022-02-25',
          trekkdager: 7.4,
          trekkonto: 'MØDREKVOTE',
        },
      ],
    });
  });

  it('skal kunne overstyre og vil da sende inn med annen aksjonspunktkode enn ordinært aksjonspunkt', async () => {
    const lagre = vi.fn(() => Promise.resolve());
    const utils = render(
      <OverstyringSkalVæreMuligHvisDetForeliggerEnTidligereVurderingMedRegistrertePerioder submitCallback={lagre} />,
    );

    expect(await screen.findByText('Fakta om uttak til annen forelder i EØS')).toBeInTheDocument();
    expect(screen.getByText('Overstyr')).toBeInTheDocument();
    expect(screen.queryByTitle('Bekreft og fortsett')).not.toBeInTheDocument();

    await userEvent.click(screen.getByTitle('Overstyr'));

    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();
    await userEvent.type(utils.getByLabelText('Vurdering'), 'Dette er en begrunnelse');
    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '6103',
      begrunnelse: 'Dette er en begrunnelse',
      perioder: [
        {
          fom: '2023-02-01',
          tom: '2023-02-15',
          trekkdager: 10,
          trekkonto: 'MØDREKVOTE',
        },
      ],
    });
  });

  it('overstyring knapp skal ikke være tilgjenglig hvis det foreligger et aktivt aksjonspunkt', async () => {
    const lagre = vi.fn(() => Promise.resolve());
    render(
      <OverstyringSkalIkkeVæreTilgjengligHvisDetForeliggerAksjonspunktSomKanLøsesEllerEndres submitCallback={lagre} />,
    );

    expect(await screen.findByText('Fakta om uttak til annen forelder i EØS')).toBeInTheDocument();
    expect(screen.queryByText('Overstyr')).not.toBeInTheDocument();
  });
});
