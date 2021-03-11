import React, { FunctionComponent } from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { createRequestApi, RestApiConfigBuilder } from '@fpsak-frontend/rest-api';
import { Behandling } from '@fpsak-frontend/types';

import { useBehandling, useLagreAksjonspunkt } from './indexHooks';

const HookWrapper: FunctionComponent<{ hook: () => any }> = ({
  hook,
// @ts-ignore
}) => <div hook={hook()} />;

describe('indexHooks', () => {
  let useEffect;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  const behandlingSomHentes = {
    id: 1,
    links: [],
  } as Behandling;

  it('skal hente behandling fra server og returnere behandling m.m.', () => {
    const BEHANDLING_KEY = 'BEHANDLING_KEY';

    useEffect = jest.spyOn(React, 'useEffect');

    const endpoints = new RestApiConfigBuilder()
      .withRel('test', BEHANDLING_KEY)
      .build();

    const requestMock = createRequestApi(endpoints);
    requestMock.mock(BEHANDLING_KEY, behandlingSomHentes);

    mockUseEffect();
    mockUseEffect();
    mockUseEffect();

    const wrapper = shallow(<HookWrapper hook={() => useBehandling(requestMock, BEHANDLING_KEY, 1)} />);

    // @ts-ignore
    const { hook } = wrapper.find('div').props();
    expect(hook.behandling).toEqual(behandlingSomHentes);
    expect(hook.behandlingState).toEqual(RestApiState.SUCCESS);
  });

  it('skal', () => {
    const LAGRE_AKSJONSPUNKT_KEY = 'LAGRE_AKSJONSPUNKT_KEY';
    const LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY = 'LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY';

    const endpoints = new RestApiConfigBuilder()
      .withRel('test1', LAGRE_AKSJONSPUNKT_KEY)
      .withRel('test2', LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY)
      .build();

    const requestMock = createRequestApi(endpoints);
    requestMock.mock(LAGRE_AKSJONSPUNKT_KEY, behandlingSomHentes);
    requestMock.mock(LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY);

    const setBehandling = sinon.spy();

    const wrapper = shallow(
      <HookWrapper hook={() => useLagreAksjonspunkt(requestMock, LAGRE_AKSJONSPUNKT_KEY, LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY, setBehandling)} />);

    // @ts-ignore
    const { hook } = wrapper.find('div').props();

    hook.lagreAksjonspunkter();

    expect(setBehandling.called).toBe(true);
    const { args } = setBehandling.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual(behandlingSomHentes);

    expect(hook.behandlingState).toEqual(RestApiState.SUCCESS);
  });
});
