import React, {
  FunctionComponent, useEffect,
} from 'react';

import { LoadingPanel } from '@fpsak-frontend/shared-components';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import FodselVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-fodsel';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, Behandling, Vilkar,
} from '@fpsak-frontend/types';
import { useStandardProsessPanelProps, useSkalViseProsessPanel } from '@fpsak-frontend/behandling-felles-ny';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import getPackageIntl from '../../../i18n/getPackageIntl';
import { restApiFpHooks, FpBehandlingApiKeys } from '../../data/fpBehandlingApi';

const aksjonspunktKoder = [
  aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  aksjonspunktCodes.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const vilkarKoder = [
  vilkarType.FODSELSVILKARET_MOR,
  vilkarType.FODSELSVILKARET_FAR,
];

const endepunkter = [
  { key: FpBehandlingApiKeys.AKSJONSPUNKTER },
  { key: FpBehandlingApiKeys.VILKAR },
];

type EndepunktData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
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
}

const FodselPanelDef: FunctionComponent<OwnProps> = ({
  behandling,
  setPanelInfo,
  erPanelValgt,
}) => {
  const { data, state } = restApiFpHooks.useMultipleRestApi<EndepunktData>(endepunkter, {
    keepData: true,
    updateTriggers: [behandling?.versjon],
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
        id: 'FODSEL',
        aksjonspunktTekst: standardProps.isAksjonspunktOpen ? getPackageIntl().formatMessage({ id: 'FodselVilkarForm.VurderGjelderSammeBarn' }) : undefined,
        harApentAksjonspunkt: standardProps.isAksjonspunktOpen,
        status: standardProps.status,
      });
    }
  }, [standardProps.isAksjonspunktOpen, skalVises, erDataFerdighentet]);

  if (!erPanelValgt || !skalVises) {
    return null;
  }

  if (!erDataFerdighentet) {
    return <LoadingPanel />;
  }

  return (
    <FodselVilkarProsessIndex
      behandling={behandling}
      ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
      {...standardProps}
    />
  );
};

export default FodselPanelDef;
