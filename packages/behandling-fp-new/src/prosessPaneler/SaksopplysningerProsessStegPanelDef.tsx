import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import CheckPersonStatusIndex from '@fpsak-frontend/prosess-saksopplysninger';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import {
  Aksjonspunkt, Behandling, Medlemskap, Personopplysninger,
} from '@fpsak-frontend/types';
import { useStandardProsessPanelProps, useSkalViseProsessPanel } from '@fpsak-frontend/behandling-felles-ny';

import { restApiFpHooks, FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const aksjonspunktKoder = [
  aksjonspunktCodes.AVKLAR_PERSONSTATUS,
];

const endepunkter = [
  { key: FpBehandlingApiKeys.AKSJONSPUNKTER },
];

const endepunkterVedVisning = [
  { key: FpBehandlingApiKeys.PERSONOPPLYSNINGER },
  { key: FpBehandlingApiKeys.MEDLEMSKAP },
];

type EndepunktData = {
  aksjonspunkter: Aksjonspunkt[];
}

type EndepunktDataVedVisning = {
  medlemskap: Medlemskap;
  personopplysninger: Personopplysninger;
}

interface OwnProps {
  behandling: Behandling;
  leggProsessPanelTilMeny: (id: string, title: string) => void;
}

const SaksopplysningerProsessStegPanelDef: FunctionComponent<OwnProps> = ({
  behandling,
  leggProsessPanelTilMeny,
}) => {
  const { data } = restApiFpHooks.useMultipleRestApi<EndepunktData>(endepunkter,
    { keepData: true, updateTriggers: [behandling?.versjon] });

  const filtrerteAksjonspunkter = data ? data.aksjonspunkter.filter((ap) => aksjonspunktKoder.includes(ap.definisjon.kode)) : [];

  const skalVises = useSkalViseProsessPanel(filtrerteAksjonspunkter);

  const { data: dataEtterVisning, state: stateEtterVisning } = restApiFpHooks.useMultipleRestApi<EndepunktDataVedVisning>(endepunkterVedVisning,
    { keepData: false, updateTriggers: [behandling?.versjon], suspendRequest: !skalVises });

  const standardProps = useStandardProsessPanelProps(filtrerteAksjonspunkter);

  if (!skalVises) {
    return null;
  }

  leggProsessPanelTilMeny(prosessStegCodes.SAKSOPPLYSNINGER, 'Behandlingspunkt.Saksopplysninger');

  if (stateEtterVisning === RestApiState.LOADING) {
    return <LoadingPanel />;
  }

  return <CheckPersonStatusIndex behandling={behandling} {...data} {...dataEtterVisning} {...standardProps} />;
};

export default SaksopplysningerProsessStegPanelDef;
