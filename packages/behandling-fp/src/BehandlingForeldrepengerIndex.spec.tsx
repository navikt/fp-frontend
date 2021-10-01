import React from 'react';
import { render, screen } from '@testing-library/react';

import { AksessRettigheter, AlleKodeverk, Fagsak } from '@fpsak-frontend/types';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import BehandlingForeldrepengerIndex from './BehandlingForeldrepengerIndex';
import { requestFpApi, FpBehandlingApiKeys } from './data/fpBehandlingApi';

describe('<BehandlingForeldrepengerIndex>', () => {
  it('skal vise paneler korrekt i prosess og faktameny', async () => {
    const data = [
      {
        key: FpBehandlingApiKeys.BEHANDLING_FP.name,
        noRelLink: true,
        data: {
          uuid: 'test-uuid',
          versjon: 1,
          status: {
            kode: behandlingStatus.OPPRETTET,
            kodeverk: '',
          },
          type: {
            kode: behandlingType.FORSTEGANGSSOKNAD,
            kodeverk: '',
          },
          links: [{
            href: FpBehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT.name,
            rel: 'arbeidsgivere-oversikt',
            type: 'GET',
          }, {
            href: FpBehandlingApiKeys.BEHANDLING_PERSONOVERSIKT.name,
            rel: 'behandling-personoversikt',
            type: 'GET',
          }],
        },
      },
      { key: FpBehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT.name, data: {} },
      { key: FpBehandlingApiKeys.BEHANDLING_PERSONOVERSIKT.name, data: {} },
      { key: FpBehandlingApiKeys.PREVIEW_MESSAGE.name, noRelLink: true, data: undefined },
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
        />
      </RestApiMock>,
    );
    expect(await screen.findByText('Opplysningsplikt')).toBeInTheDocument();
    expect(screen.getByText('Beregning')).toBeInTheDocument();
    expect(screen.getByText('Uttak')).toBeInTheDocument();
    expect(screen.getByText('Tilkjent ytelse')).toBeInTheDocument();
    expect(screen.getByText('Simulering')).toBeInTheDocument();
    expect(screen.getByText('Vedtak')).toBeInTheDocument();

    expect(screen.getByText('Fakta om')).toBeInTheDocument();
    expect(screen.getByText('Saken')).toBeInTheDocument();
    expect(screen.getByText('Arbeidsforhold')).toBeInTheDocument();
  });
});
