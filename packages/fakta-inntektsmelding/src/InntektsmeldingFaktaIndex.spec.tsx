/* eslint-disable @typescript-eslint/no-use-before-define */
import * as stories from './InntektsmeldingFaktaIndex.stories';
import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

const { InntektsmeldingDefault } = composeStories(stories);

describe('<InntektsmeldingDefault>', () => {
  // eslint-disable-next-line vitest/expect-expect -- assertes i hjelpefunksjon
  it('Skal kunne sortere tabellen', async () => {
    render(<InntektsmeldingDefault />);

    await verifiserKolonneSortering('Type', 0, ['Endring', 'Ny', 'Ny']);
    await verifiserKolonneSortering('Innsendt', 1, ['20.07.2024-00:00', '01.08.2024-00:00', '10.09.2024-00:00']);
    await verifiserKolonneSortering('Arbeidsgiver', 2, ['Kiwi', 'Meny', 'Rema 1000']);
    await verifiserKolonneSortering('Startdato', 3, ['-', '10.10.2024', '11.11.2024']);
    await verifiserKolonneSortering('Månedsi.', 4, ['10 001 kr', '20 000 kr', '30 000 kr']);
    await verifiserKolonneSortering('Behandling', 5, [' Andre', ' Denne', ' Ingen']);
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
  const columnValues = rows.map(row => row.cells[columnIndex].textContent);

  expect(columnValues).toEqual(forventetSortering);
};
