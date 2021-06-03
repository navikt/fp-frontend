import React, { FunctionComponent } from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

import useInngangsvilkarRegistrerer from './useInngangsvilkarRegistrerer';

const HookWrapper: FunctionComponent<{ hook: () => any }> = ({
  hook,
// @ts-ignore
}) => <div hook={hook()} />;

describe('useInngangsvilkarRegistrerer', () => {
  const mockUseEffect = (useEffect: any) => {
    useEffect.mockImplementationOnce((f: any) => f());
  };

  it('skal registrere panel', () => {
    const useEffect = jest.spyOn(React, 'useEffect');

    mockUseEffect(useEffect);
    mockUseEffect(useEffect);
    mockUseEffect(useEffect);

    const registrerInngangsvilkarPanel = sinon.spy();

    const wrapper = shallow(<HookWrapper hook={() => useInngangsvilkarRegistrerer(
      registrerInngangsvilkarPanel,
      1,
      'testId',
      'testTekst',
      true,
      true,
      vilkarUtfallType.IKKE_VURDERT,
    )}
    />);

    // @ts-ignore
    const { hook } = wrapper.find('div').props();
    expect(hook.erOvertyrt).toBeTruthy;
    expect(hook.toggleOverstyring).toBeTruthy;

    expect(registrerInngangsvilkarPanel.callCount).toEqual(1);
    const { args } = registrerInngangsvilkarPanel.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual({
      id: 'testId',
      aksjonspunktTekst: 'testTekst',
      harApentAksjonspunkt: true,
      status: vilkarUtfallType.IKKE_VURDERT,
    });
  });
});
