import React from 'react';
import dayjs from 'dayjs';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './PersonInfo.stories';

const { PersonkortMedDiskresjonskodeForMann, PersonkortForDødKvinne } = composeStories(stories);

describe('<PersonInfo>', () => {
  it('skal vise personkort for mann som har diskresjonskode 7', async () => {
    render(<PersonkortMedDiskresjonskodeForMann />);

    const alder = dayjs().diff('1980-10-10', 'years');

    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText(`${alder} år`)).toBeInTheDocument();
    expect(screen.getByText('23232332')).toBeInTheDocument();
    expect(screen.getByText('Kode 7')).toBeInTheDocument();
  });

  it('skal vise personkort for død kvinne', async () => {
    render(<PersonkortForDødKvinne />);

    expect(await screen.findByText('Olga Pettersen')).toBeInTheDocument();
    expect(screen.getByText('10.10.2020')).toBeInTheDocument();
    expect(screen.getByText('23232332')).toBeInTheDocument();
    expect(screen.getByText('DØD')).toBeInTheDocument();
  });
});
