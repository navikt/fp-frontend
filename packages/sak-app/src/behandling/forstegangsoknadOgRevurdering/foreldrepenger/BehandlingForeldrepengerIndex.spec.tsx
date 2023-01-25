import React from 'react';
import { render, screen } from '@testing-library/react';
import { RawIntlProvider } from 'react-intl';
import { act } from 'react-dom/test-utils';

import { AksessRettigheter, AlleKodeverk, Fagsak } from '@navikt/fp-types';
import RestApiMock from '@navikt/fp-utils-test/src/rest/RestApiMock';
import behandlingStatus from '@navikt/fp-kodeverk/src/behandlingStatus';
import behandlingType from '@navikt/fp-kodeverk/src/behandlingType';
import fagsakYtelseType from '@navikt/fp-kodeverk/src/fagsakYtelseType';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { createIntl } from '@navikt/ft-utils';

import { BehandlingFellesApiKeys } from '../../felles/data/behandlingFellesApi';
import BehandlingForeldrepengerIndex from './BehandlingForeldrepengerIndex';
import { requestFpApi } from './data/fpBehandlingApi';

import messages from '../../../../i18n/nb_NO.json';

const intl = createIntl(messages);

describe('<BehandlingForeldrepengerIndex>', () => {
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
      { key: BehandlingFellesApiKeys.SIMULERING_RESULTAT.name, data: {} },
      { key: BehandlingFellesApiKeys.PREVIEW_MESSAGE.name, noRelLink: true, data: undefined },
    ];

    await act(async () => {
      render(
        <RawIntlProvider value={intl}>
          <RestApiMock data={data} requestApi={requestFpApi}>
            <BehandlingForeldrepengerIndex
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

    expect(await screen.findByText('Opplysningsplikt')).toBeInTheDocument();
    expect(screen.getByText('Beregning')).toBeInTheDocument();
    expect(screen.getByText('Uttak')).toBeInTheDocument();
    expect(screen.getByText('Tilkjent ytelse')).toBeInTheDocument();
    expect(screen.getByText('Simulering')).toBeInTheDocument();
    expect(screen.getByText('Vedtak')).toBeInTheDocument();

    expect(screen.getByText('Fakta om')).toBeInTheDocument();
    expect(screen.getByText('Saken')).toBeInTheDocument();
  });
});
