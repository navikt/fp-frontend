import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BehandlingType, BehandlingStatus, FagsakYtelseType } from '@navikt/ft-kodeverk';
import { AlleKodeverk, Fagsak } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { AksessRettigheter } from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import { BehandlingFellesApiKeys } from '../felles/data/behandlingFellesApi';
import BehandlingKlageIndex from './BehandlingKlageIndex';
import { requestKlageApi } from './data/klageBehandlingApi';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

describe('<BehandlingKlageIndex>', () => {
  it('skal vise paneler korrekt i prosess og faktameny', async () => {
    const data = [
      {
        key: BehandlingFellesApiKeys.BEHANDLING.name,
        noRelLink: true,
        data: {
          uuid: 'test-uuid',
          versjon: 1,
          status: BehandlingStatus.OPPRETTET,
          type: BehandlingType.KLAGE,
          links: [{
            href: BehandlingFellesApiKeys.UPDATE_ON_HOLD.name,
            rel: 'update',
            type: 'POST',
          }, {
            href: BehandlingFellesApiKeys.AKSJONSPUNKTER.name,
            rel: 'aksjonspunkter',
            type: 'GET',
          }],
        },
      },
      { key: BehandlingFellesApiKeys.PREVIEW_MESSAGE.name, noRelLink: true, data: undefined },
      { key: BehandlingFellesApiKeys.UPDATE_ON_HOLD.name, data: undefined },
      { key: BehandlingFellesApiKeys.AKSJONSPUNKTER.name, data: [] },
    ];

    await act(async () => {
      render(
        <RawIntlProvider value={intl}>
          <RestApiMock data={data} requestApi={requestKlageApi}>
            <BehandlingKlageIndex
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
          </RestApiMock>
        </RawIntlProvider>,
      );
    });

    expect(await screen.findByText('Formkrav Vedtaksinstans')).toBeInTheDocument();
    expect(screen.getByText('Behandling Vedtaksinstans')).toBeInTheDocument();
    expect(screen.getByText('Formkrav Klageinstans')).toBeInTheDocument();
    expect(screen.getByText('Behandling Klageinstans')).toBeInTheDocument();
    expect(screen.getByText('Resultat')).toBeInTheDocument();
  });
});
