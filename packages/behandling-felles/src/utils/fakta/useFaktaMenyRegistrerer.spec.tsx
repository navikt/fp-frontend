import React, { FunctionComponent } from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import useFaktaMenyRegistrerer from './useFaktaMenyRegistrerer';

const HookWrapper: FunctionComponent<{ hook: () => any }> = ({
  hook,
// @ts-ignore
}) => <div hook={hook()} />;

describe('useFaktaMenyRegistrerer', () => {
  const mockUseEffect = (useEffect: any) => {
    useEffect.mockImplementationOnce((f: any) => f());
  };

  it('skal registrere panel men ikke vise det i meny fordi en henter data', () => {
    const useEffect = jest.spyOn(React, 'useEffect');

    mockUseEffect(useEffect);
    mockUseEffect(useEffect);
    mockUseEffect(useEffect);

    const registrerFaktaPanel = sinon.spy();

    const wrapper = shallow(<HookWrapper hook={() => useFaktaMenyRegistrerer(
      registrerFaktaPanel,
      RestApiState.LOADING,
      'testId',
      'testTekst',
      'default',
      true,
      true,
    )}
    />);

    // @ts-ignore
    const { hook } = wrapper.find('div').props();
    expect(hook).toBe(false);

    expect(registrerFaktaPanel.callCount).toEqual(1);
    const { args } = registrerFaktaPanel.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual({
      id: 'testId',
      harHentetInitData: false,
    });
  });

  it('skal vise i meny men ikke markere som valgt fordi panelet ikke har åpent aksjonspunkt', () => {
    const useEffect = jest.spyOn(React, 'useEffect');

    mockUseEffect(useEffect);
    mockUseEffect(useEffect);
    mockUseEffect(useEffect);

    const registrerFaktaPanel = sinon.spy();

    const wrapper = shallow(<HookWrapper hook={() => useFaktaMenyRegistrerer(
      registrerFaktaPanel,
      RestApiState.SUCCESS,
      'testId',
      'testTekst',
      'default',
      true,
      false,
    )}
    />);

    // @ts-ignore
    const { hook } = wrapper.find('div').props();
    expect(hook).toBe(false);

    expect(registrerFaktaPanel.callCount).toEqual(2);
    const { args } = registrerFaktaPanel.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual({
      id: 'testId',
      harHentetInitData: true,
    });
    const args1 = registrerFaktaPanel.getCalls()[1].args;
    expect(args1).toHaveLength(1);
    expect(args1[0]).toEqual({
      id: 'testId',
      tekst: 'testTekst',
      erAktiv: false,
      harApneAksjonspunkter: false,
      harHentetInitData: true,
    });
  });

  it('skal vise i meny og markere som valgt fordi panel har åpent aksjonspunkt', () => {
    const useEffect = jest.spyOn(React, 'useEffect');

    mockUseEffect(useEffect);
    mockUseEffect(useEffect);
    mockUseEffect(useEffect);

    const registrerFaktaPanel = sinon.spy();

    const wrapper = shallow(<HookWrapper hook={() => useFaktaMenyRegistrerer(
      registrerFaktaPanel,
      RestApiState.SUCCESS,
      'testId',
      'testTekst',
      'default',
      true,
      true,
    )}
    />);

    // @ts-ignore
    const { hook } = wrapper.find('div').props();
    expect(hook).toBe(true);

    expect(registrerFaktaPanel.callCount).toEqual(2);
    const { args } = registrerFaktaPanel.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual({
      id: 'testId',
      harHentetInitData: true,
    });
    const args1 = registrerFaktaPanel.getCalls()[1].args;
    expect(args1).toHaveLength(1);
    expect(args1[0]).toEqual({
      id: 'testId',
      tekst: 'testTekst',
      erAktiv: true,
      harApneAksjonspunkter: true,
      harHentetInitData: true,
    });
  });
});
