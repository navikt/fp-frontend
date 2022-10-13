import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BehandlingType, FagsakYtelseType, BehandlingStatus } from '@navikt/ft-kodeverk';
import { AlleKodeverk } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import { AksessRettigheter, Fagsak } from '@fpsak-frontend/types';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import { BehandlingFellesApiKeys } from '../../felles/data/behandlingFellesApi';
import BehandlingEngangsstonadIndex from './BehandlingEngangsstonadIndex';
import { requestEsApi } from './data/esBehandlingApi';

import messages from '../../../../i18n/nb_NO.json';

const intl = createIntl(messages);

describe('<BehandlingEngangsstonadIndex>', () => {
  it('skal vise paneler korrekt i prosess og faktameny', async () => {
    const data = [
      {
        key: BehandlingFellesApiKeys.BEHANDLING.name,
        noRelLink: true,
        data: {
          uuid: 'test-uuid',
          versjon: 1,
          status: BehandlingStatus.OPPRETTET,
          type: BehandlingType.FORSTEGANGSSOKNAD,
          links: [{
            href: BehandlingFellesApiKeys.ARBEIDSGIVERE_OVERSIKT.name,
            rel: 'arbeidsgivere-oversikt',
            type: 'GET',
          }, {
            href: BehandlingFellesApiKeys.BEHANDLING_PERSONOVERSIKT.name,
            rel: 'behandling-personoversikt',
            type: 'GET',
          }],
        },
      },
      { key: BehandlingFellesApiKeys.ARBEIDSGIVERE_OVERSIKT.name, data: {} },
      { key: BehandlingFellesApiKeys.BEHANDLING_PERSONOVERSIKT.name, data: {} },
      { key: BehandlingFellesApiKeys.PREVIEW_MESSAGE.name, noRelLink: true, data: undefined },
    ];

    await act(async () => {
      render(
        <RawIntlProvider value={intl}>
          <RestApiMock data={data} requestApi={requestEsApi}>
            <BehandlingEngangsstonadIndex
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
                fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
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
          </RestApiMock>
        </RawIntlProvider>,
      );
    });

    expect(await screen.findByText('Beregning')).toBeInTheDocument();
    expect(screen.getByText('Simulering')).toBeInTheDocument();
    expect(screen.getByText('Vedtak')).toBeInTheDocument();

    expect(screen.getByText('Fakta om')).toBeInTheDocument();
    expect(screen.getByText('Saken')).toBeInTheDocument();
  });
});
