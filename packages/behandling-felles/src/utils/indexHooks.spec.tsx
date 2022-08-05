import { waitFor, renderHook } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import MockAdapter from 'axios-mock-adapter';

import { createRequestApi, RestApiConfigBuilder, RestKey } from '@fpsak-frontend/rest-api';
import { Behandling } from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import { useBehandling, useLagreAksjonspunkt } from './indexHooks';

const { act } = TestRenderer;

describe('indexHooks', () => {
  const behandlingSomHentes = {
    uuid: '1',
  } as Behandling;

  const LINKS = [{
    href: 'behandling-url',
    rel: 'Behandling',
    type: 'GET',
  }, {
    href: 'ap-url',
    rel: 'Aksjonspunkt',
    type: 'GET',
  }, {
    href: 'oap-url',
    rel: 'OverstyrtAksjonspunkt',
    type: 'GET',
  }];

  it('skal hente behandling fra server og returnere behandling m.m.', async () => {
    const BEHANDLING_KEY = new RestKey<Behandling, { behandlingUuid: string }>('BEHANDLING_KEY');

    const endpoints = new RestApiConfigBuilder()
      .withRel('Behandling', BEHANDLING_KEY)
      .build();

    const requestApi = createRequestApi(endpoints);
    requestApi.setLinks(LINKS);
    const apiMock = new MockAdapter(requestApi.getAxios());
    apiMock.onGet('behandling-url').replyOnce(200, behandlingSomHentes);

    const { result } = renderHook(() => useBehandling(requestApi, BEHANDLING_KEY, '1'));
    await waitFor(() => expect(result.current.behandling).toEqual(behandlingSomHentes));

    expect(result.current.behandlingState).toEqual(RestApiState.SUCCESS);
  });

  it('skal lagre aksjonspunkt og så oppdatere behandling', async () => {
    const setBehandling = jest.fn();
    const LAGRE_AKSJONSPUNKT_KEY = new RestKey<Behandling, void>('LAGRE_AKSJONSPUNKT_KEY');
    const LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY = new RestKey<Behandling, void>('LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY');

    const endpoints = new RestApiConfigBuilder()
      .withRel('Aksjonspunkt', LAGRE_AKSJONSPUNKT_KEY)
      .withRel('OverstyrtAksjonspunkt', LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY)
      .build();

    const requestApi = createRequestApi(endpoints);
    requestApi.setLinks(LINKS);
    const apiMock = new MockAdapter(requestApi.getAxios());
    apiMock.onGet('ap-url').replyOnce(200, behandlingSomHentes);
    apiMock.onGet('oap-url').replyOnce(200, behandlingSomHentes);

    const { result } = renderHook(() => useLagreAksjonspunkt(
      requestApi, setBehandling, LAGRE_AKSJONSPUNKT_KEY, LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY,
    ));

    await act(async () => {
      result.current.lagreAksjonspunkter([]);
    });

    await waitFor(() => expect(setBehandling).toHaveBeenCalledTimes(1));
    expect(setBehandling).toHaveBeenNthCalledWith(1, behandlingSomHentes);
  });

  it('skal lagre overstyrt aksjonspunkt og så oppdatere behandling', async () => {
    const setBehandling = jest.fn();
    const LAGRE_AKSJONSPUNKT_KEY = new RestKey<Behandling, void>('LAGRE_AKSJONSPUNKT_KEY');
    const LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY = new RestKey<Behandling, void>('LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY');

    const endpoints = new RestApiConfigBuilder()
      .withRel('Aksjonspunkt', LAGRE_AKSJONSPUNKT_KEY)
      .withRel('OverstyrtAksjonspunkt', LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY)
      .build();

    const requestApi = createRequestApi(endpoints);
    requestApi.setLinks(LINKS);
    const apiMock = new MockAdapter(requestApi.getAxios());
    apiMock.onGet('ap-url').replyOnce(200, behandlingSomHentes);
    apiMock.onGet('oap-url').replyOnce(200, behandlingSomHentes);

    const { result } = renderHook(() => useLagreAksjonspunkt(
      requestApi, setBehandling, LAGRE_AKSJONSPUNKT_KEY, LAGRE_OVERSTYRT_AKSJONSPUNKT_KEY,
    ));

    await act(async () => {
      result.current.lagreOverstyrteAksjonspunkter([]);
    });

    await waitFor(() => expect(setBehandling).toHaveBeenCalledTimes(1));
    expect(setBehandling).toHaveBeenNthCalledWith(1, behandlingSomHentes);
  });
});
