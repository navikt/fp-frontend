import React, { FunctionComponent } from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { createRequestApi, RestApiConfigBuilder, RestKey } from '@fpsak-frontend/rest-api';
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
    const BEHANDLING_KEY = new RestKey<Behandling, { behandlingId: number }>('BEHANDLING_KEY');

    useEffect = jest.spyOn(React, 'useEffect');

    const endpoints = new RestApiConfigBuilder()
      .withRel('test', BEHANDLING_KEY)
      .build();

    const requestMock = createRequestApi(endpoints);
    requestMock.mock(BEHANDLING_KEY.name, behandlingSomHentes);

    mockUseEffect();
    mockUseEffect();
    mockUseEffect();
    mockUseEffect();
    mockUseEffect();

    const wrapper = shallow(<HookWrapper hook={() => useBehandling(requestMock, BEHANDLING_KEY, 1)} />);

    // @ts-ignore
    const { hook } = wrapper.find('div').props();
    expect(hook.behandling).toEqual(behandlingSomHentes);
    expect(hook.behandlingState).toEqual(RestApiState.SUCCESS);
  });

  it('skal lagre aksjonspunkt og så oppdatere behandling', () => {
    const LAGRE_AKSJONSPUNKT_KEY = new RestKey<Behandling, void>('LAGRE_AKSJONSPUNKT_KEY');
    const LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY = new RestKey<Behandling, void>('LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY');

    const endpoints = new RestApiConfigBuilder()
      .withRel('test1', LAGRE_AKSJONSPUNKT_KEY)
      .withRel('test2', LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY)
      .build();

    const requestMock = createRequestApi(endpoints);

    requestMock.mock(LAGRE_AKSJONSPUNKT_KEY.name, behandlingSomHentes);
    requestMock.mock(LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY.name);

    const setBehandling = sinon.spy();

    const wrapper = shallow(
      <HookWrapper hook={() => useLagreAksjonspunkt(
        requestMock, setBehandling, LAGRE_AKSJONSPUNKT_KEY, LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY,
      )}
      />,
    );

    // @ts-ignore
    const { hook } = wrapper.find('div').props();

    mockUseEffect();

    hook.lagreAksjonspunkter();

    expect(setBehandling.called).toBe(true);
    const { args } = setBehandling.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual(behandlingSomHentes);
  });

  it('skal lagre overstyrt aksjonspunkt og så oppdatere behandling', () => {
    const LAGRE_AKSJONSPUNKT_KEY = new RestKey<Behandling, void>('LAGRE_AKSJONSPUNKT_KEY');
    const LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY = new RestKey<Behandling, void>('LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY');

    const endpoints = new RestApiConfigBuilder()
      .withRel('test2', LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY)
      .build();

    const requestMock = createRequestApi(endpoints);

    requestMock.mock(LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY.name, behandlingSomHentes);

    const setBehandling = sinon.spy();

    const wrapper = shallow(
      <HookWrapper hook={() => useLagreAksjonspunkt(
        requestMock, setBehandling, LAGRE_AKSJONSPUNKT_KEY, LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY,
      )}
      />,
    );

    // @ts-ignore
    const { hook } = wrapper.find('div').props();

    mockUseEffect();
    mockUseEffect();

    hook.lagreOverstyrteAksjonspunkter();

    expect(setBehandling.called).toBe(true);
    const { args } = setBehandling.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual(behandlingSomHentes);
  });
});
