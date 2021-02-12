import React, {
  FunctionComponent, useEffect, useState,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import SakenFaktaIndex from '@fpsak-frontend/fakta-saken';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { Aksjonspunkt, Behandling } from '@fpsak-frontend/types';
import { useStandardFaktaProps } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
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
  registrerFaktaPanel: (data: {
    id: string;
    tekst?: string;
    erAktiv?: boolean;
    harAksjonspunkt?: boolean;
  }) => void;
}

/**
 * SakenFaktaPanelDef
 *
 * Dette faktapanelet skal alltid vises
 */
const SakenFaktaPanelDef: FunctionComponent<OwnProps> = ({
  valgtFaktaSteg,
  behandling,
  registrerFaktaPanel,
}) => {
  const [erPanelValgt, setPanelValgt] = useState(false);

  useEffect(() => {
    registrerFaktaPanel({
      id: faktaPanelCodes.SAKEN,
    });
  }, []);

  const { data, state } = restApiFpHooks.useMultipleRestApi<EndepunktData>(endepunkter, {
    keepData: true,
    updateTriggers: [behandling?.versjon],
    isCachingOn: true,
  });

  const { data: dataEtterVisning, state: stateEtterVisning } = restApiFpHooks.useMultipleRestApi<EndepunktDataVedVisning>(endepunkterVedVisning, {
    keepData: true,
    updateTriggers: [erPanelValgt, behandling?.versjon],
    suspendRequest: !erPanelValgt,
    isCachingOn: true,
  });

  const filtrerteAksjonspunkter = data ? data.aksjonspunkter.filter((ap) => aksjonspunktKoder.includes(ap.definisjon.kode)) : [];

  const standardProps = useStandardFaktaProps(filtrerteAksjonspunkter);

  useEffect(() => {
    const erValgt = valgtFaktaSteg === faktaPanelCodes.SAKEN
    || (standardProps.harApneAksjonspunkter && valgtFaktaSteg === 'default');
    registrerFaktaPanel({
      id: faktaPanelCodes.SAKEN,
      tekst: getPackageIntl().formatMessage({ id: 'SakenFaktaPanel.Title' }),
      erAktiv: erValgt,
      harAksjonspunkt: standardProps.harApneAksjonspunkter,
    });
    setPanelValgt(erValgt);
  }, [valgtFaktaSteg, standardProps.harApneAksjonspunkter, state]);

  if (!erPanelValgt) {
    return null;
  }

  if (stateEtterVisning !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return <SakenFaktaIndex behandling={behandling} {...data} {...dataEtterVisning} {...standardProps} />;
};

export default SakenFaktaPanelDef;
