import { composeStories } from '@storybook/react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './TilkjentYtelseProsessIndex.stories';

const { UtenAksjonspunkt, UtførtAksjonspunkt, MedPeriodeUtenDagsats, MedAvslåttPeriodeUtenDagsats } =
  composeStories(stories);

describe('TilkjentYtelseProsessIndex', () => {
  it('skal se på tilkjent ytelse uten aksjonspunkt', async () => {
    render(<UtenAksjonspunkt />);

    expect(await screen.findByText('Tilkjent ytelse')).toBeInTheDocument();

    // Trykk på periode i tidslinja
    await userEvent.click(screen.getAllByRole('button')[2]!);

    expect(await screen.findByText('Detaljer for valgt periode')).toBeInTheDocument();
    expect(screen.getByText('01.01.2018 - 10.01.2019')).toBeInTheDocument();
    expect(screen.getByText('1000')).toBeInTheDocument();
    expect(screen.getByText('Fellesperiode')).toBeInTheDocument();
    expect(screen.getByText('Nei')).toBeInTheDocument();
  });

  it('skal lese tidligere løst aksjonspunkt', async () => {
    render(<UtførtAksjonspunkt />);

    expect(await screen.findByText('Tilkjent ytelse')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Saksbehandler har vurdert om ytelsen skal endres fra direkte utbetaling til refusjon til arbeidsgiver, ' +
          'og tilbakekreves fra bruker, eller om det er en sak mellom arbeidstaker og arbeidsgiver.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse saksbehandler tidligere har gjort.')).toBeInTheDocument();
  });

  it('skal vise advarsel og detaljer når en innvilget periode har 0 i dagsats', async () => {
    render(<MedPeriodeUtenDagsats />);

    expect(await screen.findByText('Tilkjent ytelse')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Tilkjent ytelse inneholder en eller flere perioder med 0 kroner i dagsats. ' +
          'Dette kan føre til feil ved brevutsending. Kontroller beregningen før du fortsetter.',
      ),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /fra 11\.06\.2019/ }));

    expect(screen.getByText('Detaljer for valgt periode')).toBeInTheDocument();
    expect(screen.getByText('11.06.2019 - 01.07.2019')).toBeInTheDocument();
    expect(screen.getByText('0', { selector: 'b' })).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger')).toBeInTheDocument();
    expect(screen.getByText('Nei')).toBeInTheDocument();
  });

  it('skal ikke vise advarsel eller periode når nullperioden har alle andeler avslått', async () => {
    render(<MedAvslåttPeriodeUtenDagsats />);

    expect(await screen.findByText('Tilkjent ytelse')).toBeInTheDocument();
    expect(
      screen.queryByText(
        'Tilkjent ytelse inneholder en eller flere perioder med 0 kroner i dagsats. ' +
          'Dette kan føre til feil ved brevutsending. Kontroller beregningen før du fortsetter.',
      ),
    ).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /fra 11\.06\.2019/ })).not.toBeInTheDocument();
    expect(within(screen.getByRole('list')).getAllByRole('button')).toHaveLength(2);
  });

  it.each([{ andeler: undefined }, { andeler: [] }])(
    'skal ikke vise nullperioden uten andeler ($andeler)',
    ({ andeler }) => {
      render(
        <MedPeriodeUtenDagsats
          beregningresultat={{
            perioder: MedPeriodeUtenDagsats.args.beregningresultat?.perioder?.map(periode => ({
              ...periode,
              andeler: periode.dagsats === 0 ? andeler : periode.andeler,
            })),
          }}
        />,
      );

      expect(screen.queryByRole('button', { name: /fra 11\.06\.2019/ })).not.toBeInTheDocument();
      expect(within(screen.getByRole('list')).getAllByRole('button')).toHaveLength(2);
    },
  );
});
