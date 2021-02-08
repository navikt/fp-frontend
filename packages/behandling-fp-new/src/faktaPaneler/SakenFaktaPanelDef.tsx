import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import SakenFaktaIndex from '@fpsak-frontend/fakta-saken';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { Aksjonspunkt, Behandling } from '@fpsak-frontend/types';
import { useStandardProps } from '@fpsak-frontend/behandling-felles-ny';

import { restApiFpHooks, FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const aksjonspunktKoder = [
  aksjonspunktCodes.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
  aksjonspunktCodes.MANUELL_MARKERING_AV_UTLAND_SAKSTYPE,
];

const endepunkter = [
  { key: FpBehandlingApiKeys.AKSJONSPUNKTER },
];

const endepunkterVedVisning = [
  { key: FpBehandlingApiKeys.UTLAND_DOK_STATUS },
];

type EndepunktData = {
  aksjonspunkter: Aksjonspunkt[];
}

type EndepunktDataVedVisning = {
  utlandDokStatus?: {
    dokStatus: string;
  };
}

interface OwnProps {
  valgtFaktaSteg: string;
  behandling: Behandling;
  leggFaktaPanelTilMeny: (data: {
    id: string;
    tekst: string;
    erAktiv: boolean;
    harAksjonspunkt: boolean;
  }) => void;
}

const SakenFaktaPanelDef: FunctionComponent<OwnProps> = ({
  valgtFaktaSteg,
  behandling,
  leggFaktaPanelTilMeny,
}) => {
  const { data } = restApiFpHooks.useMultipleRestApi<EndepunktData>(endepunkter,
    { keepData: true, updateTriggers: [behandling?.versjon] });

  const filtrerteAksjonspunkter = data ? data.aksjonspunkter.filter((ap) => aksjonspunktKoder.includes(ap.definisjon.kode)) : [];

  const skalVises = filtrerteAksjonspunkter.length > 0;

  const { data: dataEtterVisning, state: stateEtterVisning } = restApiFpHooks.useMultipleRestApi<EndepunktDataVedVisning>(endepunkterVedVisning,
    { keepData: true, updateTriggers: [behandling?.versjon], suspendRequest: !skalVises });

  const standardProps = useStandardProps(filtrerteAksjonspunkter);

  if (!skalVises) {
    return null;
  }

  leggFaktaPanelTilMeny({
    id: faktaPanelCodes.SAKEN,
    tekst: 'SakenFaktaPanel.Title',
    erAktiv: valgtFaktaSteg === faktaPanelCodes.SAKEN,
    harAksjonspunkt: standardProps.harApneAksjonspunkter,
  });

  if (stateEtterVisning === RestApiState.LOADING) {
    return <LoadingPanel />;
  }

  return <SakenFaktaIndex behandling={behandling} {...data} {...standardProps} {...dataEtterVisning} />;
};

export default SakenFaktaPanelDef;
