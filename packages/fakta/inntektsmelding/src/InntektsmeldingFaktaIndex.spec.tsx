import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './InntektsmeldingFaktaIndex.stories';

const { InntektsmeldingDefault } = composeStories(stories);

describe('InntektsmeldingFaktaIndex', () => {
  // eslint-disable-next-line vitest/expect-expect -- assertes i hjelpefunksjon
  it('Skal kunne sortere tabellen', async () => {
    render(<InntektsmeldingDefault />);

    // "Innsendt" er standard sortering. Derfor tester vi å sortere arbeidsgiver først
    await verifiserKolonneSortering('Arbeidsgiver', 1, ['Kiwi', 'Meny', 'Rema 1000']);
    await verifiserKolonneSortering('Innsendt', 0, [
      '20.07.2024 kl. 00:00',
      '01.08.2024 kl. 00:00',
      '10.09.2024 kl. 00:00',
    ]);
    await verifiserKolonneSortering('Startdato', 2, ['-', '10.10.2024', '11.11.2024']);
    await verifiserKolonneSortering('Månedsi.', 3, ['10 001', '20 000', '30 000']);
    await verifiserKolonneSortering('Behandling', 4, ['Andre', 'Denne', 'Ingen']);
  });
});

const verifiserKolonneSortering = async (headerNavn: string, kolonneIndex: number, forventetSortering: string[]) => {
  await userEvent.click(await screen.findByRole('button', { name: headerNavn }));
  assertSortedColumn(kolonneIndex, forventetSortering);
  await userEvent.click(await screen.findByRole('button', { name: headerNavn }));
  assertSortedColumn(kolonneIndex, forventetSortering.toReversed());
};

const assertSortedColumn = (columnIndex: number, forventetSortering: string[]) => {
  const rows = screen.getAllByRole<HTMLTableRowElement>('row').slice(1);
  const columnValues = rows.map(row => row.cells[columnIndex]!.textContent);

  expect(columnValues).toEqual(forventetSortering);
};
