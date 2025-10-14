import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { erBarnUlike } from './FaktaFraFReg';
import * as stories from './FaktaFraFReg.stories';

const { IngenBarn, EttBarn, EttBarnMedDødsdato, ToBarnMedEnDødsdato } = composeStories(stories);

describe('FaktaFraFReg', () => {
  it('skal vise folkeregister med null registrerte barn', () => {
    render(<IngenBarn />);

    expect(screen.getByText('Opplysninger fra Folkeregisteret')).toBeInTheDocument();
    expect(screen.getByText('Det er ikke registrert noen fødselshendelse i Folkeregisteret')).toBeInTheDocument();
  });

  it('skal vise folkeregister med 1 registrert barn', () => {
    render(<EttBarn />);

    expect(screen.getByText('Opplysninger fra Folkeregisteret')).toBeInTheDocument();
    expect(screen.getByText('Fødselsdato')).toBeInTheDocument();
    expect(screen.getByText('03.06.2025')).toBeInTheDocument();
    expect(screen.queryByText('Dødsdato')).not.toBeInTheDocument();
    expect(screen.getByText('Antall barn')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('skal vise folkeregister med 1 dødt barn', () => {
    render(<EttBarnMedDødsdato />);

    expect(screen.getByText('Opplysninger fra Folkeregisteret')).toBeInTheDocument();
    expect(screen.getByText('Fødselsdato')).toBeInTheDocument();
    expect(screen.getByText('28.05.2025')).toBeInTheDocument();
    expect(screen.getByText('Dødsdato')).toBeInTheDocument();
    expect(screen.getByText('01.06.2025')).toBeInTheDocument();
    expect(screen.getByText('Antall barn')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('skal vise folkeregister med 2 barn hvor ett barn er dødt', () => {
    render(<ToBarnMedEnDødsdato />);

    expect(screen.getByText('Opplysninger fra Folkeregisteret')).toBeInTheDocument();
    expect(screen.getByText('Barn')).toBeInTheDocument();
    expect(screen.getByText('Fødselsdato')).toBeInTheDocument();
    expect(screen.getByText('Dødsdato')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('01.05.2025')).toBeInTheDocument();
    expect(screen.getByText('02.05.2025')).toBeInTheDocument();

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('03.05.2025')).toBeInTheDocument();
    expect(screen.getByText('-')).toBeInTheDocument();
  });

  describe('erBarnUlike', () => {
    const barn = { fødselsdato: '2025-05-28', dødsdato: '2025-05-28' };
    it('skal validere like barn som false', () => {
      expect(erBarnUlike(barn)(barn)).toBeFalsy();
    });
    it('skal validere ulike barn som true', () => {
      expect(erBarnUlike(barn)({ fødselsdato: '2025-05-28', dødsdato: '2024-05-28' })).toBeTruthy();
    });
  });
});
