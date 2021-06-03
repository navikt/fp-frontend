import React, { FunctionComponent } from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

import useProsessMenyRegistrerer from './useProsessMenyRegistrerer';

const HookWrapper: FunctionComponent<{ hook: () => any }> = ({
  hook,
// @ts-ignore
}) => <div hook={hook()} />;

describe('useProsessMenyRegistrerer', () => {
  const mockUseEffect = (useEffect: any) => {
    useEffect.mockImplementationOnce((f: any) => f());
  };

  it('skal registrere panel men ikke vise det i meny fordi en henter data', () => {
    const useEffect = jest.spyOn(React, 'useEffect');

    mockUseEffect(useEffect);
    mockUseEffect(useEffect);
    mockUseEffect(useEffect);

    const registrerProsessPanel = sinon.spy();

    const wrapper = shallow(<HookWrapper hook={() => useProsessMenyRegistrerer(
      registrerProsessPanel,
      RestApiState.LOADING,
      'testId',
      'testTekst',
      'default',
      true,
      true,
      vilkarUtfallType.IKKE_VURDERT,
      true,
    )}
    />);

    // @ts-ignore
    const { hook } = wrapper.find('div').props();
    expect(hook).toBe(false);

    expect(registrerProsessPanel.callCount).toEqual(1);
    const { args } = registrerProsessPanel.getCalls()[0];
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

    const registrerProsessPanel = sinon.spy();

    const wrapper = shallow(<HookWrapper hook={() => useProsessMenyRegistrerer(
      registrerProsessPanel,
      RestApiState.SUCCESS,
      'testId',
      'testTekst',
      'default',
      true,
      false,
      vilkarUtfallType.IKKE_VURDERT,
      false,
    )}
    />);

    // @ts-ignore
    const { hook } = wrapper.find('div').props();
    expect(hook).toBe(false);

    expect(registrerProsessPanel.callCount).toEqual(2);
    const { args } = registrerProsessPanel.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual({
      id: 'testId',
      harHentetInitData: true,
    });
    const args1 = registrerProsessPanel.getCalls()[1].args;
    expect(args1).toHaveLength(1);
    expect(args1[0]).toEqual({
      id: 'testId',
      tekst: 'testTekst',
      erAktiv: false,
      harApentAksjonspunkt: false,
      harHentetInitData: true,
      status: vilkarUtfallType.IKKE_VURDERT,
    });
  });

  it('skal vise i meny og markere som valgt fordi panel har åpent aksjonspunkt', () => {
    const useEffect = jest.spyOn(React, 'useEffect');

    mockUseEffect(useEffect);
    mockUseEffect(useEffect);
    mockUseEffect(useEffect);

    const registrerProsessPanel = sinon.spy();

    const wrapper = shallow(<HookWrapper hook={() => useProsessMenyRegistrerer(
      registrerProsessPanel,
      RestApiState.SUCCESS,
      'testId',
      'testTekst',
      'default',
      true,
      true,
      vilkarUtfallType.IKKE_VURDERT,
      true,
    )}
    />);

    // @ts-ignore
    const { hook } = wrapper.find('div').props();
    expect(hook).toBe(true);

    expect(registrerProsessPanel.callCount).toEqual(2);
    const { args } = registrerProsessPanel.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual({
      id: 'testId',
      harHentetInitData: true,
    });
    const args1 = registrerProsessPanel.getCalls()[1].args;
    expect(args1).toHaveLength(1);
    expect(args1[0]).toEqual({
      id: 'testId',
      tekst: 'testTekst',
      erAktiv: true,
      harApentAksjonspunkt: true,
      harHentetInitData: true,
      status: vilkarUtfallType.IKKE_VURDERT,
    });
  });
});
