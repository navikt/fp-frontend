import { renderHook } from '@testing-library/react-hooks';
import { waitFor, act } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import { Behandling } from '@navikt/ft-types';

import { TilbakekrevingBehandlingApiKeys, requestTilbakekrevingApi } from '../../data/tilbakekrevingBehandlingApi';

import { useBehandling, useLagreAksjonspunkt } from './indexHooks';

describe('indexHooks', () => {
  const behandlingSomHentes = {
    uuid: '1',
  } as Behandling;

  it('skal hente behandling fra server og returnere behandling m.m.', async () => {
    const apiMock = new MockAdapter(requestTilbakekrevingApi.getAxios());
    apiMock.onPost('/fptilbake/api/behandlinger').replyOnce(200, behandlingSomHentes);

    const { result, waitForNextUpdate } = renderHook(() => useBehandling('1'));
    await waitForNextUpdate();

    expect(result.current.behandling).toEqual(behandlingSomHentes);
    expect(result.current.hentingHarFeilet).toEqual(false);
  });

  it.skip('skal lagre aksjonspunkt og så oppdatere behandling', async () => {
    const setBehandling = jest.fn();
    requestTilbakekrevingApi.setLinks([{
      href: TilbakekrevingBehandlingApiKeys.AKSJONSPUNKTER.name,
      rel: 'aksjonspunkter',
      type: 'GET',
    }]);

    const apiMock = new MockAdapter(requestTilbakekrevingApi.getAxios());
    apiMock.onGet('aksjonspunkter').replyOnce(200, behandlingSomHentes);

    const { result } = renderHook(() => useLagreAksjonspunkt(setBehandling));

    await act(async () => {
      result.current([]);
    });

    await waitFor(() => expect(setBehandling).toHaveBeenCalledTimes(1));
    expect(setBehandling).toHaveBeenNthCalledWith(1, behandlingSomHentes);
  });
});
