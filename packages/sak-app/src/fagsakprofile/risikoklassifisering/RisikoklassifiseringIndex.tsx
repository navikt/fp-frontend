import React, {
  FunctionComponent, useEffect, useCallback, useMemo,
} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import {
  Aksjonspunkt, NavAnsatt, Risikoklassifisering, Fagsak, BehandlingAppKontekst, AksessRettigheter,
} from '@fpsak-frontend/types';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import RisikoklassifiseringSakIndex from '@fpsak-frontend/sak-risikoklassifisering';
import { VurderFaresignalerAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import behandlingEventHandler from '../../behandling/BehandlingEventHandler';
import useTrackRouteParam from '../../app/useTrackRouteParam';
import { FpsakApiKeys, restApiHooks } from '../../data/fpsakApi';
import { getRiskPanelLocationCreator } from '../../app/paths';
import getAccessRights from '../../app/util/access';

const getReadOnly = (navAnsatt: NavAnsatt, rettigheter: AksessRettigheter, erPaaVent: boolean) => {
  if (erPaaVent) {
    return true;
  }
  const { kanSaksbehandle } = navAnsatt;
  return !kanSaksbehandle || !rettigheter.writeAccess.isEnabled;
};

interface OwnProps {
  fagsak: Fagsak;
  alleBehandlinger: BehandlingAppKontekst[];
  behandlingUuid?: string;
  behandlingVersjon?: number;
  kontrollresultat?: Risikoklassifisering;
  risikoAksjonspunkt?: Aksjonspunkt;
}

/**
 * RisikoklassifiseringIndex
 *
 * Container komponent. Har ansvar for å vise risikoklassifisering for valgt behandling
 * Viser en av tre komponenter avhengig av: Om ingen klassifisering er utført,
 * om klassifisering er utført og ingen faresignaler er funnet og om klassifisering er utført og faresignaler er funnet
 */
const RisikoklassifiseringIndex: FunctionComponent<OwnProps> = ({
  fagsak,
  alleBehandlinger,
  risikoAksjonspunkt,
  kontrollresultat,
  behandlingVersjon,
  behandlingUuid,
}) => {
  const behandling = alleBehandlinger.find((b) => b.uuid === behandlingUuid);
  const erPaaVent = behandling ? behandling.behandlingPaaVent : false;
  const behandlingStatus = behandling?.status;
  const behandlingType = behandling?.type;

  const { selected: isRiskPanelOpen = false } = useTrackRouteParam<boolean>({
    paramName: 'risiko',
    parse: (isOpen) => isOpen === 'true',
    isQueryParam: true,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const alleKodeverk = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK);
  const navAnsatt = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.NAV_ANSATT);
  const rettigheter = useMemo(() => getAccessRights(navAnsatt, fagsak.status, behandlingStatus, behandlingType),
    [fagsak.status, behandlingStatus, behandlingType]);
  const readOnly = useMemo(() => getReadOnly(navAnsatt, rettigheter, erPaaVent),
    [rettigheter, erPaaVent]);

  const toggleRiskPanel = useCallback(() => {
    navigate(getRiskPanelLocationCreator(location)(!isRiskPanelOpen));
  }, [location, isRiskPanelOpen]);

  useEffect(() => {
    if (!!risikoAksjonspunkt && risikoAksjonspunkt.status.kode === aksjonspunktStatus.OPPRETTET && !isRiskPanelOpen) {
      navigate(getRiskPanelLocationCreator(location)(true));
    }
    if (!!risikoAksjonspunkt && risikoAksjonspunkt.status.kode === aksjonspunktStatus.UTFORT) {
      navigate(getRiskPanelLocationCreator(location)(false));
    }
  }, [!!risikoAksjonspunkt, behandlingUuid, behandlingVersjon]);

  const submitAksjonspunkt = useCallback((aksjonspunkt: VurderFaresignalerAp) => {
    if (!behandlingUuid || !behandlingVersjon) {
      return Promise.reject();
    }
    const params = {
      behandlingUuid,
      saksnummer: fagsak.saksnummer,
      behandlingVersjon,
      bekreftedeAksjonspunktDtoer: [{
        '@type': aksjonspunkt.kode,
        ...aksjonspunkt,
      }],
    };

    return behandlingEventHandler.lagreRisikoklassifiseringAksjonspunkt(params);
  }, [behandlingUuid, behandlingVersjon]);

  return (
    <RisikoklassifiseringSakIndex
      aksjonspunkt={risikoAksjonspunkt}
      risikoklassifisering={kontrollresultat}
      isPanelOpen={isRiskPanelOpen}
      readOnly={readOnly}
      submitAksjonspunkt={submitAksjonspunkt}
      toggleRiskPanel={toggleRiskPanel}
      alleKodeverk={alleKodeverk}
    />
  );
};

export default RisikoklassifiseringIndex;
