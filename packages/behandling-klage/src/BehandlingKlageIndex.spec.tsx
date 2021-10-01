import React from 'react';
import { render, screen } from '@testing-library/react';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import { AksessRettigheter, AlleKodeverk, Fagsak } from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import BehandlingKlageIndex from './BehandlingKlageIndex';
import { requestKlageApi, KlageBehandlingApiKeys } from './data/klageBehandlingApi';

describe('<BehandlingKlageIndex>', () => {
  it('skal vise paneler korrekt i prosess og faktameny', async () => {
    const data = [
      {
        key: KlageBehandlingApiKeys.BEHANDLING_KLAGE.name,
        noRelLink: true,
        data: {
          uuid: 'test-uuid',
          versjon: 1,
          status: {
            kode: behandlingStatus.OPPRETTET,
            kodeverk: '',
          },
          type: {
            kode: behandlingType.KLAGE,
            kodeverk: '',
          },
          links: [{
            href: KlageBehandlingApiKeys.UPDATE_ON_HOLD.name,
            rel: 'update',
            type: 'POST',
          }, {
            href: KlageBehandlingApiKeys.AKSJONSPUNKTER.name,
            rel: 'aksjonspunkter',
            type: 'GET',
          }],
        },
      },
      { key: KlageBehandlingApiKeys.PREVIEW_MESSAGE.name, noRelLink: true, data: undefined },
      { key: KlageBehandlingApiKeys.UPDATE_ON_HOLD.name, data: undefined },
      { key: KlageBehandlingApiKeys.AKSJONSPUNKTER.name, data: [] },
    ];

    render(
      <RestApiMock data={data} requestApi={requestKlageApi}>
        <BehandlingKlageIndex
          behandlingEventHandler={{
            setHandler: () => {},
            clear: () => {},
          }}
          behandlingUuid="test-uuid"
          oppdaterBehandlingVersjon={() => {}}
          // @ts-ignore
          kodeverk={alleKodeverk as AlleKodeverk}
          fagsak={{
            fagsakYtelseType: {
              kode: fagsakYtelseType.FORELDREPENGER,
              kodeverk: '',
            },
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
    expect(await screen.findByText('Formkrav Vedtaksinstans')).toBeInTheDocument();
    expect(screen.getByText('Behandling Vedtaksinstans')).toBeInTheDocument();
    expect(screen.getByText('Formkrav Klageinstans')).toBeInTheDocument();
    expect(screen.getByText('Behandling Klageinstans')).toBeInTheDocument();
    expect(screen.getByText('Resultat')).toBeInTheDocument();
  });
});
