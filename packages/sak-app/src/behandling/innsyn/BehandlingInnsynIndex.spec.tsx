import React from 'react';
import { render, screen } from '@testing-library/react';
import { RawIntlProvider } from 'react-intl';
import { act } from 'react-dom/test-utils';
import { FagsakYtelseType, BehandlingType, BehandlingStatus } from '@navikt/ft-kodeverk';
import { AlleKodeverk } from '@navikt/ft-types';

import { AksessRettigheter, Fagsak } from '@fpsak-frontend/types';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { createIntl } from '@navikt/ft-utils';

import { BehandlingFellesApiKeys } from '../felles/data/behandlingFellesApi';
import BehandlingInnsynIndex from './BehandlingInnsynIndex';
import { requestInnsynApi } from './data/innsynBehandlingApi';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

describe('<BehandlingInnsynIndex>', () => {
  it('skal vise paneler korrekt i prosess og faktameny', async () => {
    const data = [
      {
        key: BehandlingFellesApiKeys.BEHANDLING.name,
        noRelLink: true,
        data: {
          uuid: 'test-uuid',
          versjon: 1,
          status: BehandlingStatus.OPPRETTET,
          type: BehandlingType.DOKUMENTINNSYN,
          aksjonspunkter: [],
          links: [{
            href: BehandlingFellesApiKeys.UPDATE_ON_HOLD.name,
            rel: 'update',
            type: 'POST',
          }],
        },
      },
      { key: BehandlingFellesApiKeys.PREVIEW_MESSAGE.name, noRelLink: true, data: undefined },
      { key: BehandlingFellesApiKeys.UPDATE_ON_HOLD.name, data: undefined },
    ];

    await act(async () => {
      render(
        <RawIntlProvider value={intl}>
          <RestApiMock data={data} requestApi={requestInnsynApi}>
            <BehandlingInnsynIndex
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
            />
          </RestApiMock>
        </RawIntlProvider>,
      );
    });

    expect(await screen.findByText('Behandle innsyn')).toBeInTheDocument();
    expect(screen.getByText('Vedtak')).toBeInTheDocument();
  });
});
