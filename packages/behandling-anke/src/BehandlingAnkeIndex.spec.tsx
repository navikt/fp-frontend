import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BehandlingStatus, BehandlingType, FagsakYtelseType } from '@navikt/ft-kodeverk';
import { AlleKodeverk, Fagsak } from '@navikt/ft-types';

import { AksessRettigheter } from '@fpsak-frontend/types';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import BehandlingAnkeIndex from './BehandlingAnkeIndex';
import { requestAnkeApi, AnkeBehandlingApiKeys } from './data/ankeBehandlingApi';

describe('<BehandlingAnkeIndex>', () => {
  it('skal vise paneler korrekt i prosess og faktameny', async () => {
    const data = [
      {
        key: AnkeBehandlingApiKeys.BEHANDLING_ANKE.name,
        noRelLink: true,
        data: {
          uuid: 'test-uuid',
          versjon: 1,
          status: BehandlingStatus.OPPRETTET,
          type: BehandlingType.ANKE,
          links: [{
            href: AnkeBehandlingApiKeys.UPDATE_ON_HOLD.name,
            rel: 'update',
            type: 'POST',
          }, {
            href: AnkeBehandlingApiKeys.AKSJONSPUNKTER.name,
            rel: 'aksjonspunkter',
            type: 'GET',
          }],
        },
      },
      { key: AnkeBehandlingApiKeys.PREVIEW_MESSAGE.name, noRelLink: true, data: undefined },
      { key: AnkeBehandlingApiKeys.UPDATE_ON_HOLD.name, data: undefined },
      { key: AnkeBehandlingApiKeys.AKSJONSPUNKTER.name, data: [] },
    ];

    await act(async () => {
      render(
        <RestApiMock data={data} requestApi={requestAnkeApi}>
          <BehandlingAnkeIndex
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
              fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
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
            alleBehandlinger={[]}
          />
        </RestApiMock>,
      );
    });

    expect(await screen.findByText('Ankebehandling')).toBeInTheDocument();
    expect(screen.getByText('Resultat')).toBeInTheDocument();
    expect(screen.getByText('Trygderetten')).toBeInTheDocument();
  });
});
