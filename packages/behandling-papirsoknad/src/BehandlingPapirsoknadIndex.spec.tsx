import React from 'react';
import { render, screen } from '@testing-library/react';

import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import { AksessRettigheter, AlleKodeverk, Fagsak } from '@fpsak-frontend/types';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import BehandlingPapirsoknadIndex from './BehandlingPapirsoknadIndex';
import { requestPapirsoknadApi, PapirsoknadApiKeys } from './data/papirsoknadApi';

describe('<BehandlingPapirsoknadIndex>', () => {
  it('skal rendre korrekt', async () => {
    const data = [
      {
        key: PapirsoknadApiKeys.BEHANDLING_PAPIRSOKNAD.name,
        noRelLink: true,
        data: {
          uuid: 'test-uuid',
          versjon: 1,
          status: behandlingStatus.OPPRETTET,
          type: behandlingType.FORSTEGANGSSOKNAD,
          links: [{
            href: PapirsoknadApiKeys.UPDATE_ON_HOLD.name,
            rel: 'update',
            type: 'POST',
          }, {
            href: PapirsoknadApiKeys.AKSJONSPUNKTER.name,
            rel: 'aksjonspunkter',
            type: 'GET',
          }],
        },
      },
      { key: PapirsoknadApiKeys.UPDATE_ON_HOLD.name, data: undefined },
      { key: PapirsoknadApiKeys.AKSJONSPUNKTER.name, data: [] },
    ];

    render(
      <RestApiMock data={data} requestApi={requestPapirsoknadApi}>
        <BehandlingPapirsoknadIndex
          behandlingEventHandler={{
            setHandler: () => {},
            clear: () => {},
            settBehandlingPaVent: () => undefined,
          }}
          behandlingUuid="test-uuid"
          oppdaterBehandlingVersjon={() => {}}
          // @ts-ignore
          kodeverk={alleKodeverk as AlleKodeverk}
          fagsak={{
            fagsakYtelseType: fagsakYtelseType.ENGANGSSTONAD,
          } as Fagsak}
          rettigheter={{
            writeAccess: {
              isEnabled: true,
            },
            kanOverstyreAccess: {
              isEnabled: true,
            },
          } as AksessRettigheter}
          oppdaterProsessStegOgFaktaPanelIUrl={() => {}}
          valgtProsessSteg="default"
          valgtFaktaSteg="default"
          opneSokeside={() => {}}
          setRequestPendingMessage={() => {}}
          fagsakPersonnummer="1224342"
        />
      </RestApiMock>,
    );
    expect(await screen.findByText('Registrere søknad')).toBeInTheDocument();
    expect(screen.getByText('Registrer inn alle opplysninger fra papirsøknaden')).toBeInTheDocument();
  });
});
