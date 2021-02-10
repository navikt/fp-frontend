import React, {
  FunctionComponent, useEffect, useState, useCallback,
} from 'react';

import { LoadingPanel } from '@fpsak-frontend/shared-components';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  AksessRettigheter,
  Aksjonspunkt, Behandling, Medlemskap, Vilkar,
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
  behandling: Behandling;
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
  behandling,
  setPanelInfo,
  erPanelValgt,
  rettigheter,
}) => {
  const [erOverstyrt, setOverstyrt] = useState(false);
  const toggleOverstyring = useCallback(() => setOverstyrt(erOverstyrt), [erOverstyrt]);
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

  const erDataFerdighentet = state === RestApiState.SUCCESS;

  const filtrerteAksjonspunkter = data ? data.aksjonspunkter.filter((ap) => aksjonspunktKoder.includes(ap.definisjon.kode)) : [];
  const filtrerteVilkar = data ? data.vilkar.filter((v) => vilkarKoder.includes(v.vilkarType.kode)) : [];

  const standardProps = useStandardProsessPanelProps(filtrerteAksjonspunkter, filtrerteVilkar);

  const skalVises = useSkalViseProsessPanel(filtrerteAksjonspunkter, vilkarKoder, filtrerteVilkar);

  useEffect(() => {
    if (erDataFerdighentet && skalVises) {
      setPanelInfo({
        id: 'MEDLEMSKAP',
        aksjonspunktTekst: erOverstyrt || standardProps.isAksjonspunktOpen ? 'tom' : undefined,
        harApentAksjonspunkt: erOverstyrt || standardProps.isAksjonspunktOpen,
        status: standardProps.status,
      });
    }
  }, [standardProps.isAksjonspunktOpen, skalVises, erDataFerdighentet]);

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
      behandling={behandling}
      aksjonspunkter={filtrerteAksjonspunkter}
      aksjonspunktKode={aksjonspunktKoder[0]}
      vilkar={filtrerteVilkar}
      vilkarKoder={vilkarKoder}
      panelTekstKode="Inngangsvilkar.Medlemskapsvilkaret"
      erMedlemskapsPanel
      medlemskap={dataEtterVisning.medlemskap}
      toggleOverstyring={toggleOverstyring}
      erOverstyrt={erOverstyrt}
      overrideReadOnly={standardProps.isReadOnly || (harMinstEttPanelApentAksjonspunkt && !(standardProps.isAksjonspunktOpen || erOverstyrt))}
      kanOverstyreAccess={rettigheter.kanOverstyreAccess}
    />
  );
};

export default MedlemskapPanelDef;
