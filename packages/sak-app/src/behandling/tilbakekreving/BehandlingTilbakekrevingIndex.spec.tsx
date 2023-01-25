import React from 'react';
import { act } from 'react-dom/test-utils';
import { RawIntlProvider } from 'react-intl';
import { render, screen } from '@testing-library/react';

import { createIntl } from '@navikt/ft-utils';

import RestApiMock from '@navikt/fp-utils-test/src/rest/RestApiMock';
import behandlingStatus from '@navikt/fp-kodeverk/src/behandlingStatus';
import behandlingType from '@navikt/fp-kodeverk/src/behandlingType';
import fagsakYtelseType from '@navikt/fp-kodeverk/src/fagsakYtelseType';
import { AksessRettigheter, AlleKodeverk, Fagsak } from '@navikt/fp-types';
import navBrukerKjonn from '@navikt/fp-kodeverk/src/navBrukerKjonn';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

import BehandlingTilbakekrevingIndex from './BehandlingTilbakekrevingIndex';
import { BehandlingFellesApiKeys } from '../felles/data/behandlingFellesApi';
import { requestTilbakekrevingApi, TilbakekrevingBehandlingApiKeys } from './data/tilbakekrevingBehandlingApi';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

describe('<BehandlingTilbakekrevingIndex>', () => {
  it('skal rendre korrekt', async () => {
    const data = [
      {
        key: TilbakekrevingBehandlingApiKeys.BEHANDLING_TILBAKE.name,
        noRelLink: true,
        data: {
          uuid: 'test-uuid',
          versjon: 1,
          status: behandlingStatus.OPPRETTET,
          type: behandlingType.TILBAKEKREVING,
          aksjonspunkt: [],
          links: [{
            href: BehandlingFellesApiKeys.UPDATE_ON_HOLD.name,
            rel: 'update',
            type: 'POST',
          }],
        },
      },
      { key: BehandlingFellesApiKeys.UPDATE_ON_HOLD.name, data: undefined },
      { key: TilbakekrevingBehandlingApiKeys.TILBAKE_KODEVERK.name, global: true, data: alleKodeverk },
    ];

    await act(async () => {
      render(
        <RawIntlProvider value={intl}>
          <RestApiMock data={data} requestApi={requestTilbakekrevingApi}>
            <BehandlingTilbakekrevingIndex
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
                fagsakYtelseType: fagsakYtelseType.FORELDREPENGER,
                bruker: {
                  kjønn: navBrukerKjonn.KVINNE,
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
              harApenRevurdering={false}
            />
          </RestApiMock>
        </RawIntlProvider>,
      );
    });

    expect(await screen.findByText('Foreldelse')).toBeInTheDocument();
    expect(screen.getByText('Tilbakekreving')).toBeInTheDocument();
    expect(screen.getByText('Vedtak')).toBeInTheDocument();
  });
});
