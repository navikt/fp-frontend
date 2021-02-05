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
  { key: FpBehandlingApiKeys.UTLAND_DOK_STATUS },
];

type EndepunktData = {
  aksjonspunkter: Aksjonspunkt[];
  utlandDokStatus?: {
    dokStatus: string;
  };
}

interface OwnProps {
  behandling: Behandling;
  leggFaktaPanelTilMeny: (id: string, title: string) => void;
}

const SakenFaktaPanelDef: FunctionComponent<OwnProps> = ({
  behandling,
  leggFaktaPanelTilMeny,
}) => {
  const vises = true;

  leggFaktaPanelTilMeny(faktaPanelCodes.SAKEN, 'SakenFaktaPanel.Title');

  const { data, state } = restApiFpHooks.useMultipleRestApi<EndepunktData>(endepunkter,
    { keepData: true, updateTriggers: [behandling?.versjon], suspendRequest: !vises });

  const filtrerteAksjonspunkter = data ? data.aksjonspunkter.filter((ap) => aksjonspunktKoder.includes(ap.definisjon.kode)) : [];

  const standardProps = useStandardProps(filtrerteAksjonspunkter);

  if (!vises) {
    return null;
  }

  if (state === RestApiState.LOADING) {
    return <LoadingPanel />;
  }

  return <SakenFaktaIndex behandling={behandling} {...data} {...standardProps} />;
};

export default SakenFaktaPanelDef;
