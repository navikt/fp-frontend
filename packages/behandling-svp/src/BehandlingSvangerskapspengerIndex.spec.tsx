import React from 'react';
import { render, screen } from '@testing-library/react';

import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import { AksessRettigheter, AlleKodeverk, Fagsak } from '@fpsak-frontend/types';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import BehandlingSvangerskapspengerIndex from './BehandlingSvangerskapspengerIndex';
import { requestSvpApi, SvpBehandlingApiKeys } from './data/svpBehandlingApi';

describe('<BehandlingSvangerskapspengerIndex>', () => {
  it('skal vise paneler korrekt i prosess og faktameny', async () => {
    const data = [
      {
        key: SvpBehandlingApiKeys.BEHANDLING_SVP.name,
        noRelLink: true,
        data: {
          uuid: 'test-uuid',
          versjon: 1,
          status: behandlingStatus.OPPRETTET,
          type: behandlingType.FORSTEGANGSSOKNAD,
          links: [{
            href: SvpBehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT.name,
            rel: 'arbeidsgivere-oversikt',
            type: 'GET',
          }, {
            href: SvpBehandlingApiKeys.BEHANDLING_PERSONOVERSIKT.name,
            rel: 'behandling-personoversikt',
            type: 'GET',
          }],
        },
      },
      { key: SvpBehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT.name, data: {} },
      { key: SvpBehandlingApiKeys.BEHANDLING_PERSONOVERSIKT.name, data: {} },
      { key: SvpBehandlingApiKeys.PREVIEW_MESSAGE.name, noRelLink: true, data: undefined },
    ];

    render(
      <RestApiMock data={data} requestApi={requestSvpApi}>
        <BehandlingSvangerskapspengerIndex
          behandlingEventHandler={{
            setHandler: () => {},
            clear: () => {},
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
        />
      </RestApiMock>,
    );
    expect(await screen.findByText('Beregning')).toBeInTheDocument();
    expect(screen.getByText('Simulering')).toBeInTheDocument();
    expect(screen.getByText('Vedtak')).toBeInTheDocument();

    expect(screen.getByText('Fakta om')).toBeInTheDocument();
    expect(screen.getByText('Saken')).toBeInTheDocument();
  });
});
