import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';

import { createIntl } from '@navikt/ft-utils';
import { render, screen } from '@testing-library/react';

import { BehandlingStatus, BehandlingType } from '@navikt/fp-kodeverk';
import { BehandlingAppKontekst, Fagsak, Saksnotat } from '@navikt/fp-types';
import { RestApiMock } from '@navikt/fp-utils-test';

import { FagsakApiKeys, requestFagsakApi } from '../data/fagsakContextApi';
import { FagsakData } from '../fagsak/FagsakData';
import { BehandlingSupportIndex } from './BehandlingSupportIndex';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

describe('<BehandlingSupportIndex>', () => {
  const behandling = {
    uuid: '1',
    type: BehandlingType.FORSTEGANGSSOKNAD,
    status: BehandlingStatus.OPPRETTET,
  };

  const fagsak = {
    saksnummer: '123',
    behandlinger: [behandling] as BehandlingAppKontekst[],
    brukerManglerAdresse: false,
    bruker: {
      kjønn: 'K',
    },
    notater: [] as Saksnotat[],
  } as Fagsak;

  const navAnsatt = {
    brukernavn: 'Test',
    kanBehandleKode6: false,
    kanOverstyre: false,
    kanSaksbehandle: true,
    kanVeilede: false,
    navn: 'Test',
  };

  it('skal vise historikk-panelet som default', async () => {
    const data = [{ key: FagsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: navAnsatt } }];

    render(
      <RawIntlProvider value={intl}>
        <RestApiMock data={data} requestApi={requestFagsakApi}>
          <MemoryRouter>
            <BehandlingSupportIndex
              fagsakData={new FagsakData(fagsak)}
              behandlingUuid="1"
              behandlingVersjon={2}
              hentOgSettBehandling={vi.fn()}
              oppdaterFagsak={vi.fn()}
            />
          </MemoryRouter>
        </RestApiMock>
      </RawIntlProvider>,
    );

    expect(await screen.findAllByText('Historikk')).toHaveLength(2);
    expect(screen.getByText('Filtrer på behandling')).toBeInTheDocument();

    expect(screen.getByText('Send melding')).toBeInTheDocument();
    expect(screen.getByText('Dokumenter')).toBeInTheDocument();
    expect(screen.getByText('Notatblokk')).toBeInTheDocument();
  });
});
