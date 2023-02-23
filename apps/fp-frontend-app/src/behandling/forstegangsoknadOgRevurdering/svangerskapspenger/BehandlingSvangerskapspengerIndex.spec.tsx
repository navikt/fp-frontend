import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { createIntl } from '@navikt/ft-utils';

import { behandlingStatus, fagsakYtelseType, behandlingType } from '@navikt/fp-kodeverk';
import { AksessRettigheter, AlleKodeverk, Fagsak } from '@navikt/fp-types';
import { RestApiMock } from '@navikt/fp-utils-test';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { BehandlingFellesApiKeys } from '../../felles/data/behandlingFellesApi';
import BehandlingSvangerskapspengerIndex from './BehandlingSvangerskapspengerIndex';
import { requestSvpApi } from './data/svpBehandlingApi';

import messages from '../../../../i18n/nb_NO.json';

const intl = createIntl(messages);

describe('<BehandlingSvangerskapspengerIndex>', () => {
  it('skal vise paneler korrekt i prosess og faktameny', async () => {
    const data = [
      {
        key: BehandlingFellesApiKeys.BEHANDLING.name,
        noRelLink: true,
        data: {
          uuid: 'test-uuid',
          versjon: 1,
          status: behandlingStatus.OPPRETTET,
          type: behandlingType.FORSTEGANGSSOKNAD,
          aksjonspunkt: [],
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
          <RestApiMock data={data} requestApi={requestSvpApi}>
            <BehandlingSvangerskapspengerIndex
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
