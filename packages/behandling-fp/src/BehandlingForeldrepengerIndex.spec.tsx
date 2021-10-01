import React from 'react';
import { render, screen } from '@testing-library/react';

import { AksessRettigheter, AlleKodeverk, Fagsak } from '@fpsak-frontend/types';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';

import BehandlingForeldrepengerIndex from './BehandlingForeldrepengerIndex';
import { requestFpApi, FpBehandlingApiKeys } from './data/fpBehandlingApi';

describe('<BehandlingForeldrepengerIndex>', () => {
  it('skal rendre korrekt', async () => {
    const data = [
      {
        key: FpBehandlingApiKeys.BEHANDLING_FP.name,
        data: {
          behandling: {
            uuid: 'test-uuid',
            versjon: 1,
            status: {
              kode: behandlingStatus.OPPRETTET,
              kodeverk: '',
            },
          },
        },
      },
      { key: FpBehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT.name, data: {} },
      { key: FpBehandlingApiKeys.BEHANDLING_PERSONOVERSIKT.name, data: {} },
      { key: FpBehandlingApiKeys.PREVIEW_MESSAGE.name, data: undefined },
    ];

    render(
      <RestApiMock data={data} requestApi={requestFpApi}>
        <BehandlingForeldrepengerIndex
          behandlingEventHandler={{
            setHandler: () => {},
            clear: () => {},
          }}
          behandlingUuid="test-uuid"
          oppdaterBehandlingVersjon={() => {}}
          kodeverk={{} as AlleKodeverk}
          fagsak={{} as Fagsak}
          rettigheter={{
            writeAccess: {
              isEnabled: true,
            },
          } as AksessRettigheter}
          oppdaterProsessStegOgFaktaPanelIUrl={() => {}}
          valgtProsessSteg="default"
          valgtFaktaSteg="default"
          opneSokeside={() => {}}
          setRequestPendingMessage={() => {}}
        />
      </RestApiMock>,
    );
    expect(await screen.findByText('Venfter...')).toBeInTheDocument();
  });
});
