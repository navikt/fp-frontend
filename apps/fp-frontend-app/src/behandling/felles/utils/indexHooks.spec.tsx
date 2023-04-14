import { waitFor, renderHook } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import MockAdapter from 'axios-mock-adapter';
import { Behandling } from '@navikt/ft-types';

import { createRequestApi, RestApiConfigBuilder } from '@navikt/fp-rest-api';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

import { useBehandling, useLagreAksjonspunkt } from './indexHooks';
import { BehandlingFellesApiKeys } from '../data/behandlingFellesApi';

const { act } = TestRenderer;

describe('indexHooks', () => {
  const behandlingSomHentes = {
    uuid: '1',
  } as Behandling;

  const LINKS = [
    {
      href: 'behandling-url',
      rel: 'Behandling',
      type: 'GET',
    },
    {
      href: 'ap-url',
      rel: 'Aksjonspunkt',
      type: 'GET',
    },
    {
      href: 'oap-url',
      rel: 'OverstyrtAksjonspunkt',
      type: 'GET',
    },
  ];

  it('skal hente behandling fra server og returnere behandling m.m.', async () => {
    const endpoints = new RestApiConfigBuilder().withRel('Behandling', BehandlingFellesApiKeys.BEHANDLING).build();

    const requestApi = createRequestApi(endpoints);
    requestApi.setLinks(LINKS);
    const apiMock = new MockAdapter(requestApi.getAxios());
    apiMock.onGet('behandling-url').replyOnce(200, behandlingSomHentes);

    const { result } = renderHook(() => useBehandling(requestApi, '1'));
    await waitFor(() => expect(result.current.behandling).toEqual(behandlingSomHentes));

    expect(result.current.behandlingState).toEqual(RestApiState.SUCCESS);
  });

  it('skal lagre aksjonspunkt og så oppdatere behandling', async () => {
    const setBehandling = vi.fn();

    const endpoints = new RestApiConfigBuilder()
      .withRel('Aksjonspunkt', BehandlingFellesApiKeys.SAVE_AKSJONSPUNKT)
      .withRel('OverstyrtAksjonspunkt', BehandlingFellesApiKeys.SAVE_OVERSTYRT_AKSJONSPUNKT)
      .build();

    const requestApi = createRequestApi(endpoints);
    requestApi.setLinks(LINKS);
    const apiMock = new MockAdapter(requestApi.getAxios());
    apiMock.onGet('ap-url').replyOnce(200, behandlingSomHentes);
    apiMock.onGet('oap-url').replyOnce(200, behandlingSomHentes);

    const { result } = renderHook(() => useLagreAksjonspunkt(requestApi, setBehandling));

    await act(async () => {
      result.current.lagreAksjonspunkter([]);
    });

    await waitFor(() => expect(setBehandling).toHaveBeenCalledTimes(1));
    expect(setBehandling).toHaveBeenNthCalledWith(1, behandlingSomHentes);
  });

  it('skal lagre overstyrt aksjonspunkt og så oppdatere behandling', async () => {
    const setBehandling = vi.fn();

    const endpoints = new RestApiConfigBuilder()
      .withRel('Aksjonspunkt', BehandlingFellesApiKeys.SAVE_AKSJONSPUNKT)
      .withRel('OverstyrtAksjonspunkt', BehandlingFellesApiKeys.SAVE_OVERSTYRT_AKSJONSPUNKT)
      .build();

    const requestApi = createRequestApi(endpoints);
    requestApi.setLinks(LINKS);
    const apiMock = new MockAdapter(requestApi.getAxios());
    apiMock.onGet('ap-url').replyOnce(200, behandlingSomHentes);
    apiMock.onGet('oap-url').replyOnce(200, behandlingSomHentes);

    const { result } = renderHook(() => useLagreAksjonspunkt(requestApi, setBehandling));

    await act(async () => {
      result.current.lagreOverstyrteAksjonspunkter([]);
    });

    await waitFor(() => expect(setBehandling).toHaveBeenCalledTimes(1));
    expect(setBehandling).toHaveBeenNthCalledWith(1, behandlingSomHentes);
  });
});
