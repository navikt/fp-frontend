import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './DokumenterSakIndex.stories';

const { Default, IngenDokumenter } = composeStories(stories);

describe('<DokumenterSakIndex>', () => {
  it('skal vise tre dokumenter i listen', async () => {
    render(<Default />);
    expect(await screen.findByText('Inn/ut')).toBeInTheDocument();
    expect(screen.getByText('Dokument')).toBeInTheDocument();
    expect(screen.getByText('Gjelder')).toBeInTheDocument();
    expect(screen.getByText('Dato')).toBeInTheDocument();

    expect(screen.getByText('Dette er et dokument')).toBeInTheDocument();
    expect(screen.getByText('Brukes i behandlingen')).toBeInTheDocument();
    expect(screen.getByText('test1')).toBeInTheDocument();
    expect(screen.getByText(/01.08.2017/)).toBeInTheDocument();

    expect(screen.getByText('Dette er et nytt dokument')).toBeInTheDocument();
    expect(screen.getByText('test2')).toBeInTheDocument();
    expect(screen.getByText(/04.02.2017/)).toBeInTheDocument();

    expect(screen.getByText('Dette er et tredje dokument')).toBeInTheDocument();
    expect(screen.getByText('Dette er en lang tekst som ikke skal kuttes')).toBeInTheDocument();
    expect(screen.getByText(/03.01.2017/)).toBeInTheDocument();
  });

  it('skal vise at ingen dokumenter finnes på saken', async () => {
    render(<IngenDokumenter />);
    expect(await screen.findByText('Det finnes ingen dokumenter på saken')).toBeInTheDocument();
  });
});
