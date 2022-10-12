import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { BehandlingAppKontekst } from '@navikt/ft-types';
import { BehandlingStatus, BehandlingType } from '@navikt/ft-kodeverk';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { Fagsak } from '@fpsak-frontend/types';

import { VergeBehandlingmenyValg } from '../behandling/behandlingRettigheterTsType';
import BehandlingSupportIndex, { hentSynligePaneler, hentValgbarePaneler } from './BehandlingSupportIndex';
import { requestApi, FpsakApiKeys } from '../data/fpsakApi';

describe('<BehandlingSupportIndex>', () => {
  const fagsak = {
    saksnummer: '123',
  };

  const navAnsatt = {
    brukernavn: 'Test',
    kanBehandleKode6: false,
    kanBehandleKode7: false,
    kanBehandleKodeEgenAnsatt: false,
    kanBeslutte: true,
    kanOverstyre: false,
    kanSaksbehandle: true,
    kanVeilede: false,
    navn: 'Test',
  };

  const behandling = {
    uuid: '1',
    type: BehandlingType.FORSTEGANGSSOKNAD,
    status: BehandlingStatus.OPPRETTET,
  };

  it('skal vise historikk-panelet som default', async () => {
    const data = [
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: navAnsatt },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <MemoryRouter>
          <BehandlingSupportIndex
            fagsak={fagsak as Fagsak}
            alleBehandlinger={[behandling] as BehandlingAppKontekst[]}
            behandlingUuid="1"
            behandlingVersjon={2}
            brukerManglerAdresse={false}
          />
        </MemoryRouter>
      </RestApiMock>,
    );
    expect(await screen.findByText('Filtrer på behandling')).toBeInTheDocument();
  });

  describe('hentSynligePaneler', () => {
    it('skal kunne aksessere alle support-paneler', () => {
      const behandlingRettigheter = {
        behandlingFraBeslutter: true,
        behandlingKanSendeMelding: true,
        behandlingTilGodkjenning: true,
        behandlingKanBytteEnhet: true,
        behandlingKanHenlegges: true,
        behandlingKanGjenopptas: false,
        behandlingKanOpnesForEndringer: true,
        behandlingKanSettesPaVent: true,
        vergeBehandlingsmeny: VergeBehandlingmenyValg.OPPRETT,
      };

      const accessiblePanels = hentSynligePaneler(behandlingRettigheter);

      expect(accessiblePanels).toEqual([
        'TIL_BESLUTTER',
        'FRA_BESLUTTER',
        'HISTORIKK',
        'MELDINGER',
        'DOKUMENTER',
      ]);
    });

    it('skal kunne aksessere kun supportpanelene som alltid vises; historikk og dokumenter', () => {
      const behandlingRettigheter = {
        behandlingFraBeslutter: false,
        behandlingKanSendeMelding: false,
        behandlingTilGodkjenning: false,
        behandlingKanBytteEnhet: true,
        behandlingKanHenlegges: true,
        behandlingKanGjenopptas: false,
        behandlingKanOpnesForEndringer: false,
        behandlingKanSettesPaVent: true,
        vergeBehandlingsmeny: VergeBehandlingmenyValg.OPPRETT,
      };

      const accessiblePanels = hentSynligePaneler(behandlingRettigheter);

      expect(accessiblePanels).toEqual([
        'HISTORIKK',
        'MELDINGER',
        'DOKUMENTER',
      ]);
    });
  });

  describe('hentValgbarePaneler', () => {
    it('skal vise alle support-panelene som valgbare', () => {
      const accessibleSupportPanels = [
        'TIL_BESLUTTER',
        'FRA_BESLUTTER',
        'HISTORIKK',
        'MELDINGER',
        'DOKUMENTER',
      ];
      const sendMessageIsRelevant = true;

      const behandlingRettigheter = {
        behandlingFraBeslutter: true,
        behandlingKanSendeMelding: true,
        behandlingTilGodkjenning: false,
        behandlingKanBytteEnhet: true,
        behandlingKanHenlegges: true,
        behandlingKanGjenopptas: false,
        behandlingKanOpnesForEndringer: true,
        behandlingKanSettesPaVent: true,
        vergeBehandlingsmeny: VergeBehandlingmenyValg.OPPRETT,
      };

      const enabledPanels = hentValgbarePaneler(accessibleSupportPanels, sendMessageIsRelevant, behandlingRettigheter);

      expect(enabledPanels).toEqual([
        'TIL_BESLUTTER',
        'FRA_BESLUTTER',
        'HISTORIKK',
        'MELDINGER',
        'DOKUMENTER',
      ]);
    });

    it('skal ikke vise meldingspanel som valgbart', () => {
      const accessibleSupportPanels = [
        'TIL_BESLUTTER',
        'FRA_BESLUTTER',
        'HISTORIKK',
        'MELDINGER',
        'DOKUMENTER',
      ];
      const sendMessageIsRelevant = false;
      const behandlingRettigheter = {
        behandlingFraBeslutter: false,
        behandlingKanSendeMelding: false,
        behandlingTilGodkjenning: false,
        behandlingKanBytteEnhet: true,
        behandlingKanHenlegges: true,
        behandlingKanGjenopptas: false,
        behandlingKanOpnesForEndringer: true,
        behandlingKanSettesPaVent: true,
        vergeBehandlingsmeny: VergeBehandlingmenyValg.OPPRETT,
      };

      const enabledPanels = hentValgbarePaneler(accessibleSupportPanels, sendMessageIsRelevant, behandlingRettigheter);

      expect(enabledPanels).toEqual([
        'TIL_BESLUTTER',
        'FRA_BESLUTTER',
        'HISTORIKK',
        'DOKUMENTER',
      ]);
    });
  });
});
