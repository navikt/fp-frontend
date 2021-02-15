import React, {
  FunctionComponent, useEffect, useState, useCallback,
} from 'react';

import { LoadingPanel } from '@fpsak-frontend/shared-components';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  AksessRettigheter, Aksjonspunkt, Medlemskap, Vilkar,
} from '@fpsak-frontend/types';
import { useStandardProsessPanelProps, useSkalViseProsessPanel, OverstyringPanelDef } from '@fpsak-frontend/behandling-felles-ny';

import { restApiFpHooks, FpBehandlingApiKeys } from '../../data/fpBehandlingApi';

const aksjonspunktKoder = [
  aksjonspunktCodes.OVERSTYR_MEDLEMSKAPSVILKAR,
];

const vilkarKoder = [
  vilkarType.MEDLEMSKAPSVILKARET,
];

const endepunkter = [
  { key: FpBehandlingApiKeys.AKSJONSPUNKTER },
  { key: FpBehandlingApiKeys.VILKAR },
];

const endepunkterVedVisning = [
  { key: FpBehandlingApiKeys.MEDLEMSKAP },
];

type EndepunktData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

type EndepunktDataVedVisning = {
  medlemskap: Medlemskap;
}

interface OwnProps {
  behandlingVersjon?: number;
  setPanelInfo: (data: {
    id: string;
    aksjonspunktTekst: string;
    harApentAksjonspunkt: boolean;
    status: string;
  }) => void;
  erPanelValgt: boolean;
  rettigheter: AksessRettigheter;
}

const MedlemskapPanelDef: FunctionComponent<OwnProps> = ({
  behandlingVersjon,
  setPanelInfo,
  erPanelValgt,
  rettigheter,
}) => {
  const [erOverstyrt, setOverstyrt] = useState(false);
  const toggleOverstyring = useCallback(() => setOverstyrt(!erOverstyrt), [erOverstyrt]);
  const { data, state } = restApiFpHooks.useMultipleRestApi<EndepunktData>(endepunkter, {
    keepData: true,
    updateTriggers: [behandlingVersjon],
    isCachingOn: true,
  });

  const { data: dataEtterVisning, state: stateEtterVisning } = restApiFpHooks.useMultipleRestApi<EndepunktDataVedVisning>(endepunkterVedVisning, {
    keepData: true,
    updateTriggers: [erPanelValgt, behandlingVersjon],
    suspendRequest: !erPanelValgt,
    isCachingOn: true,
  });

  const erDataFerdighentet = state === RestApiState.SUCCESS;

  const standardPanelProps = useStandardProsessPanelProps(data, aksjonspunktKoder, vilkarKoder);

  const skalVises = useSkalViseProsessPanel(standardPanelProps.aksjonspunkter, vilkarKoder, standardPanelProps.vilkar);

  useEffect(() => {
    if (erDataFerdighentet && skalVises) {
      setPanelInfo({
        id: 'MEDLEMSKAP',
        aksjonspunktTekst: erOverstyrt || standardPanelProps.isAksjonspunktOpen ? 'tom' : undefined,
        harApentAksjonspunkt: erOverstyrt || standardPanelProps.isAksjonspunktOpen,
        status: standardPanelProps.status,
      });
    }
  }, [standardPanelProps.isAksjonspunktOpen, skalVises, erDataFerdighentet]);

  // FIXME Korleis sette denne?
  const harMinstEttPanelApentAksjonspunkt = false;

  if (!erPanelValgt || !skalVises) {
    return null;
  }

  if (!erDataFerdighentet || stateEtterVisning !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return (
    <OverstyringPanelDef
      behandling={standardPanelProps.behandling}
      aksjonspunkter={standardPanelProps.aksjonspunkter}
      aksjonspunktKode={aksjonspunktKoder[0]}
      vilkar={standardPanelProps.vilkar}
      vilkarKoder={vilkarKoder}
      panelTekstKode="Inngangsvilkar.Medlemskapsvilkaret"
      erMedlemskapsPanel
      medlemskap={dataEtterVisning.medlemskap}
      toggleOverstyring={toggleOverstyring}
      erOverstyrt={erOverstyrt}
      overrideReadOnly={standardPanelProps.isReadOnly || (harMinstEttPanelApentAksjonspunkt && !(standardPanelProps.isAksjonspunktOpen || erOverstyrt))}
      kanOverstyreAccess={rettigheter.kanOverstyreAccess}
    />
  );
};

export default MedlemskapPanelDef;
