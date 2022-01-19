import React from 'react';
import { render, screen } from '@testing-library/react';

import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import { AksessRettigheter, AlleKodeverk, Fagsak } from '@fpsak-frontend/types';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import BehandlingInnsynIndex from './BehandlingInnsynIndex';
import { requestInnsynApi, InnsynBehandlingApiKeys } from './data/innsynBehandlingApi';

describe('<BehandlingInnsynIndex>', () => {
  it('skal vise paneler korrekt i prosess og faktameny', async () => {
    const data = [
      {
        key: InnsynBehandlingApiKeys.BEHANDLING_INNSYN.name,
        noRelLink: true,
        data: {
          uuid: 'test-uuid',
          versjon: 1,
          status: behandlingStatus.OPPRETTET,
          type: behandlingType.DOKUMENTINNSYN,
          links: [{
            href: InnsynBehandlingApiKeys.UPDATE_ON_HOLD.name,
            rel: 'update',
            type: 'POST',
          }, {
            href: InnsynBehandlingApiKeys.AKSJONSPUNKTER.name,
            rel: 'aksjonspunkter',
            type: 'GET',
          }],
        },
      },
      { key: InnsynBehandlingApiKeys.PREVIEW_MESSAGE.name, noRelLink: true, data: undefined },
      { key: InnsynBehandlingApiKeys.UPDATE_ON_HOLD.name, data: undefined },
      { key: InnsynBehandlingApiKeys.AKSJONSPUNKTER.name, data: [] },
    ];

    render(
      <RestApiMock data={data} requestApi={requestInnsynApi}>
        <BehandlingInnsynIndex
          behandlingEventHandler={{
            setHandler: () => {},
            clear: () => {},
          }}
          behandlingUuid="test-uuid"
          oppdaterBehandlingVersjon={() => {}}
          // @ts-ignore
          kodeverk={alleKodeverk as AlleKodeverk}
          fagsak={{
            fagsakYtelseType: fagsakYtelseType.FORELDREPENGER,
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
        />
      </RestApiMock>,
    );
    expect(await screen.findByText('Behandle innsyn')).toBeInTheDocument();
    expect(screen.getByText('Vedtak')).toBeInTheDocument();
  });
});
