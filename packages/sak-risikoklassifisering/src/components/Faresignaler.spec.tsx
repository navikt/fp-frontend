import React from 'react';
import { shallow } from 'enzyme';
import { Normaltekst } from 'nav-frontend-typografi';

import { Risikoklassifisering } from '@fpsak-frontend/types';

import Faresignaler, { FarePanel } from './Faresignaler';

const mockRisikoklassifisering = (medlSignaler?: string[], iaySignaler?: string[]): Risikoklassifisering => ({
  kontrollresultat: {
    kode: 'HOY',
    kodeverk: 'Kontrollresultat',
  },
  medlFaresignaler: medlSignaler ? {
    faresignaler: medlSignaler,
  } : undefined,
  iayFaresignaler: iaySignaler ? {
    faresignaler: iaySignaler,
  } : undefined,
});

describe('<Faresignaler>', () => {
  it('skal teste at komponent mountes korrekt når vi har faresignaler i medl kategorien', () => {
    const wrapper = shallow(<Faresignaler
      risikoklassifisering={mockRisikoklassifisering(['Dette er en grunn', 'Dette er en annen grunn'])}
    />);
    const panel = wrapper.find(FarePanel);
    expect(panel).toHaveLength(1);
    expect(panel.prop('labelId')).toEqual('Risikopanel.Panel.Medlemskap');
  });

  it('skal teste at komponent mountes korrekt når vi har faresignaler i iay kategorien', () => {
    const wrapper = shallow(<Faresignaler
      risikoklassifisering={mockRisikoklassifisering(undefined, ['Dette er en grunn', 'Dette er en annen grunn'])}
    />);
    const panel = wrapper.find(FarePanel);
    expect(panel).toHaveLength(1);
    expect(panel.prop('labelId')).toEqual('Risikopanel.Panel.ArbeidsforholdInntekt');
  });

  it('skal teste at komponent mountes korrekt når vi har faresignaler i begge kategorier', () => {
    const wrapper = shallow(<Faresignaler
      risikoklassifisering={mockRisikoklassifisering(['Grunn 1', 'Grunn 2'], ['Grunn 3', 'Grunn 4'])}
    />);
    const paneler = wrapper.find(FarePanel);
    expect(paneler).toHaveLength(2);
    expect(paneler.first().prop('labelId')).toEqual('Risikopanel.Panel.Medlemskap');
    expect(paneler.last().prop('labelId')).toEqual('Risikopanel.Panel.ArbeidsforholdInntekt');
  });

  it('1skal teste at komponent mountes korrekt når vi har faresignaler i iay kategorien', () => {
    const medlFaresignaler = { faresignaler: ['Dette er en grunn', 'Dette er en annen grunn'] };
    const wrapper = shallow(<FarePanel
      risikoFaresignaler={medlFaresignaler}
      labelId="Risikopanel.Panel.Medlemskap"
    />);

    const normaltekst = wrapper.find(Normaltekst);
    expect(normaltekst).toHaveLength(2);
    expect(normaltekst.children().at(0).text()).toEqual('Dette er en grunn');
    expect(normaltekst.children().at(1).text()).toEqual('Dette er en annen grunn');
  });
});
