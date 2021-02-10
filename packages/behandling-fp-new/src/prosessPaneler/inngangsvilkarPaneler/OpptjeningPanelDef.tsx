import React, {
  FunctionComponent, useCallback, useEffect, useState,
} from 'react';

import { LoadingPanel } from '@fpsak-frontend/shared-components';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OpptjeningVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-opptjening';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  AksessRettigheter,
  Aksjonspunkt, Behandling, Opptjening, Vilkar,
} from '@fpsak-frontend/types';
import { useStandardProsessPanelProps, useSkalViseProsessPanel, OverstyringPanelDef } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../../i18n/getPackageIntl';
import { restApiFpHooks, FpBehandlingApiKeys } from '../../data/fpBehandlingApi';

const aksjonspunktKoder = [
  aksjonspunktCodes.VURDER_OPPTJENINGSVILKARET,
];

const vilkarKoder = [
  vilkarType.OPPTJENINGSPERIODE,
  vilkarType.OPPTJENINGSVILKARET,
];

const endepunkter = [
  { key: FpBehandlingApiKeys.AKSJONSPUNKTER },
  { key: FpBehandlingApiKeys.VILKAR },
];

const endepunkterVedVisning = [
  { key: FpBehandlingApiKeys.OPPTJENING },
];

type EndepunktData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

type EndepunktDataVedVisning = {
  opptjening: Opptjening;
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

const OpptjeningPanelDef: FunctionComponent<OwnProps> = ({
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
  const erDataFerdighentet = state === RestApiState.SUCCESS;

  const { data: dataEtterVisning, state: stateEtterVisning } = restApiFpHooks.useMultipleRestApi<EndepunktDataVedVisning>(endepunkterVedVisning, {
    keepData: true,
    updateTriggers: [erPanelValgt, behandling?.versjon],
    suspendRequest: !erPanelValgt,
    isCachingOn: true,
  });

  const filtrerteAksjonspunkter = data ? data.aksjonspunkter.filter((ap) => aksjonspunktKoder.includes(ap.definisjon.kode)) : [];
  const filtrerteVilkar = data ? data.vilkar.filter((v) => vilkarKoder.includes(v.vilkarType.kode)) : [];

  const standardProps = useStandardProsessPanelProps(filtrerteAksjonspunkter, filtrerteVilkar);

  const skalVises = useSkalViseProsessPanel(filtrerteAksjonspunkter, vilkarKoder, filtrerteVilkar);

  useEffect(() => {
    if (erDataFerdighentet && skalVises) {
      setPanelInfo({
        id: 'OPPTJENINGSVILKARET',
        aksjonspunktTekst: erOverstyrt || standardProps.isAksjonspunktOpen
          ? getPackageIntl().formatMessage({ id: 'OpptjeningVilkarView.VurderOmSøkerHarRett' }) : undefined,
        harApentAksjonspunkt: erOverstyrt || standardProps.isAksjonspunktOpen,
        status: standardProps.status,
      });
    }
  }, [standardProps.isAksjonspunktOpen, skalVises, erDataFerdighentet]);

  if (!erPanelValgt || !skalVises) {
    return null;
  }

  if (!erDataFerdighentet || stateEtterVisning !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  // FIXME Korleis sette denne?
  const harMinstEttPanelApentAksjonspunkt = false;

  if (filtrerteAksjonspunkter.length === 0) {
    return (
      <OverstyringPanelDef
        behandling={behandling}
        aksjonspunkter={filtrerteAksjonspunkter}
        aksjonspunktKode={aksjonspunktKoder[0]}
        vilkar={filtrerteVilkar}
        vilkarKoder={vilkarKoder}
        panelTekstKode="Inngangsvilkar.Opptjeningsvilkaret"
        erMedlemskapsPanel={false}
        toggleOverstyring={toggleOverstyring}
        erOverstyrt={erOverstyrt}
        overrideReadOnly={standardProps.isReadOnly || (harMinstEttPanelApentAksjonspunkt && !(standardProps.isAksjonspunktOpen || erOverstyrt))}
        kanOverstyreAccess={rettigheter.kanOverstyreAccess}
      />
    );
  }

  return (
    <OpptjeningVilkarProsessIndex
      behandling={behandling}
      lovReferanse={filtrerteVilkar[0].lovReferanse}
      {...dataEtterVisning}
      {...standardProps}
    />
  );
};

export default OpptjeningPanelDef;
