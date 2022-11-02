import { waitFor, renderHook } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import { Behandling } from '@navikt/ft-types';

import { requestTilbakekrevingApi } from '../../data/tilbakekrevingBehandlingApi';

import { useBehandling } from './indexHooks';

describe('indexHooks', () => {
  const behandlingSomHentes = {
    uuid: '1',
  } as Behandling;

  it('skal hente behandling fra server og returnere behandling m.m.', async () => {
    const apiMock = new MockAdapter(requestTilbakekrevingApi.getAxios());
    apiMock.onPost('/fptilbake/api/behandlinger').replyOnce(200, behandlingSomHentes);

    const { result } = renderHook(() => useBehandling('1'));
    await waitFor(() => expect(result.current.behandling).toEqual(behandlingSomHentes));

    expect(result.current.hentingHarFeilet).toEqual(false);
  });
});
