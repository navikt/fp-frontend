import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './PersonInfo.stories';

const { PersonkortMedDiskresjonskodeForMann, PersonkortForDødKvinne } = composeStories(stories);

describe('<PersonInfo>', () => {
  it('skal vise personkort for mann som har diskresjonskode 7', async () => {
    render(<PersonkortMedDiskresjonskodeForMann />);

    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('41 år')).toBeInTheDocument();
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
