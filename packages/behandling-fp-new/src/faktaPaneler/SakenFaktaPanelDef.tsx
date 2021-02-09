import React, {
  FunctionComponent, useEffect,
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
  { key: FpBehandlingApiKeys.UTLAND_DOK_STATUS },
];

type EndepunktData = {
  aksjonspunkter: Aksjonspunkt[];
  utlandDokStatus?: {
    dokStatus: string;
  };
}

interface OwnProps {
  valgtFaktaSteg: string;
  behandling: Behandling;
  registrerFaktaPanel: (id: string) => void;
  leggFaktaPanelTilMeny: (data: {
    id: string;
    tekst: string;
    erAktiv: boolean;
    harAksjonspunkt: boolean;
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
  leggFaktaPanelTilMeny,
}) => {
  useEffect(() => {
    registrerFaktaPanel(faktaPanelCodes.SAKEN);
  }, []);
  const erPanelValgt = valgtFaktaSteg === faktaPanelCodes.SAKEN;

  const { data, state } = restApiFpHooks.useMultipleRestApi<EndepunktData>(endepunkter, {
    keepData: true,
    updateTriggers: [erPanelValgt, behandling?.versjon],
    suspendRequest: !erPanelValgt,
    isCachingOn: true,
  });

  const filtrerteAksjonspunkter = data ? data.aksjonspunkter.filter((ap) => aksjonspunktKoder.includes(ap.definisjon.kode)) : [];

  const standardProps = useStandardFaktaProps(filtrerteAksjonspunkter);

  useEffect(() => {
    leggFaktaPanelTilMeny({
      id: faktaPanelCodes.SAKEN,
      tekst: getPackageIntl().formatMessage({ id: 'SakenFaktaPanel.Title' }),
      erAktiv: valgtFaktaSteg === faktaPanelCodes.SAKEN,
      harAksjonspunkt: standardProps.harApneAksjonspunkter,
    });
  }, [valgtFaktaSteg, standardProps.harApneAksjonspunkter]);

  if (!erPanelValgt) {
    return null;
  }

  if (state !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return <SakenFaktaIndex behandling={behandling} {...data} {...standardProps} />;
};

export default SakenFaktaPanelDef;
