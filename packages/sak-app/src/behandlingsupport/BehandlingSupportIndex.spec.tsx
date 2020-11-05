import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { BehandlingAppKontekst, Fagsak } from '@fpsak-frontend/types';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import SupportMenySakIndex from '@fpsak-frontend/sak-support-meny';

import { VergeBehandlingmenyValg } from '../behandling/behandlingRettigheterTsType';
import * as useTrackRouteParam from '../app/useTrackRouteParam';
import BehandlingSupportIndex, { getAccessibleSupportPanels, getEnabledSupportPanels } from './BehandlingSupportIndex';
import { requestApi, FpsakApiKeys } from '../data/fpsakApi';

describe('<BehandlingSupportIndex>', () => {
  const fagsak = {
    saksnummer: 123,
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
    id: 1,
    type: {
      kode: behandlingType.FORSTEGANGSSOKNAD,
      kodeverk: '',
    },
    status: {
      kode: behandlingStatus.OPPRETTET,
      kodeverk: '',
    },
  };

  const location = {
    pathname: '', search: '', state: {}, hash: '',
  };

  let contextStub;
  beforeEach(() => {
    contextStub = sinon.stub(useTrackRouteParam, 'default').callsFake(() => ({
      selected: 123456,
      location,
    }));
  });

  afterEach(() => {
    contextStub.restore();
  });

  it('skal vise godkjennings-panelet', () => {
    requestApi.mock(FpsakApiKeys.NAV_ANSATT, navAnsatt);

    const wrapper = shallow(<BehandlingSupportIndex
      fagsak={fagsak as Fagsak}
      alleBehandlinger={[behandling] as BehandlingAppKontekst[]}
      behandlingId={1}
      behandlingVersjon={2}
    />);

    expect(wrapper.find(SupportMenySakIndex)).to.have.length(1);
  });

  describe('getAccessibleSupportPanels', () => {
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

      const accessiblePanels = getAccessibleSupportPanels(behandlingRettigheter);

      expect(accessiblePanels).is.eql([
        'godkjenning',
        'frabeslutter',
        'historikk',
        'sendmelding',
        'dokumenter',
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

      const accessiblePanels = getAccessibleSupportPanels(behandlingRettigheter);

      expect(accessiblePanels).is.eql([
        'historikk',
        'sendmelding',
        'dokumenter',
      ]);
    });
  });

  describe('getEnabledSupportPanels', () => {
    it('skal vise alle support-panelene som trykkbare', () => {
      const accessibleSupportPanels = [
        'godkjenning',
        'frabeslutter',
        'historikk',
        'sendmelding',
        'dokumenter',
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

      const enabledPanels = getEnabledSupportPanels(accessibleSupportPanels, sendMessageIsRelevant, behandlingRettigheter);

      expect(enabledPanels).is.eql([
        'frabeslutter',
        'historikk',
        'sendmelding',
        'dokumenter',
      ]);
    });

    it('skal kun vise historikk og dokument-panelene som trykkbare', () => {
      const accessibleSupportPanels = [
        'godkjenning',
        'frabeslutter',
        'historikk',
        'sendmelding',
        'dokumenter',
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

      const enabledPanels = getEnabledSupportPanels(accessibleSupportPanels, sendMessageIsRelevant, behandlingRettigheter);

      expect(enabledPanels).is.eql([
        'historikk',
        'dokumenter',
      ]);
    });
  });
});
