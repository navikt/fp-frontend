import React, {
  FunctionComponent, useEffect, useCallback, useMemo,
} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AksjonspunktStatus } from '@navikt/ft-kodeverk';
import RisikoklassifiseringSakIndex, { AvklartRisikoklassifiseringAp } from '@navikt/ft-sak-risikoklassifisering';

import { NavAnsatt, AksessRettigheter } from '@fpsak-frontend/types';

import behandlingEventHandler from '../../behandling/BehandlingEventHandler';
import useTrackRouteParam from '../../app/useTrackRouteParam';
import { FpsakApiKeys, restApiHooks } from '../../data/fpsakApi';
import { getRiskPanelLocationCreator } from '../../app/paths';
import getAccessRights from '../../app/util/access';
import FagsakData from '../../fagsak/FagsakData';

import '@navikt/ft-sak-risikoklassifisering/dist/style.css';

const getReadOnly = (navAnsatt: NavAnsatt, rettigheter: AksessRettigheter, erPaaVent: boolean) => {
  if (erPaaVent) {
    return true;
  }
  const { kanSaksbehandle } = navAnsatt;
  return !kanSaksbehandle || !rettigheter.writeAccess.isEnabled;
};

interface OwnProps {
  fagsakData: FagsakData;
  behandlingUuid?: string;
  behandlingVersjon?: number;
}

/**
 * RisikoklassifiseringIndex
 *
 * Har ansvar for å vise risikoklassifisering for valgt behandling
 * Viser en av tre komponenter avhengig av: Om ingen klassifisering er utført,
 * om klassifisering er utført og ingen faresignaler er funnet og om klassifisering er utført og faresignaler er funnet
 */
const RisikoklassifiseringIndex: FunctionComponent<OwnProps> = ({
  fagsakData,
  behandlingVersjon,
  behandlingUuid,
}) => {
  const fagsak = fagsakData.getFagsak();
  const behandling = fagsakData.getBehandling(behandlingUuid);
  const erPaaVent = behandling ? behandling.behandlingPaaVent : false;
  const behandlingStatus = behandling?.status;
  const behandlingType = behandling?.type;
  const risikoAksjonspunkt = behandling?.risikoAksjonspunkt;
  const kontrollresultat = behandling?.kontrollResultat;

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
    if (!!risikoAksjonspunkt && risikoAksjonspunkt.status === AksjonspunktStatus.OPPRETTET && !isRiskPanelOpen) {
      navigate(getRiskPanelLocationCreator(location)(true));
    }
    if (!!risikoAksjonspunkt && risikoAksjonspunkt.status === AksjonspunktStatus.UTFORT) {
      navigate(getRiskPanelLocationCreator(location)(false));
    }
  }, [!!risikoAksjonspunkt, behandlingUuid, behandlingVersjon]);

  const submitAksjonspunkt = useCallback((aksjonspunkt: AvklartRisikoklassifiseringAp) => {
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
