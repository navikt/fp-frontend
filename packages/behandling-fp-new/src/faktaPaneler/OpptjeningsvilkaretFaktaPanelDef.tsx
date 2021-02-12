import React, {
  FunctionComponent, useEffect, useState,
} from 'react';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OpptjeningFaktaIndex from '@fpsak-frontend/fakta-opptjening';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Behandling, Opptjening, Vilkar,
} from '@fpsak-frontend/types';
import { useStandardFaktaProps } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { restApiFpHooks, FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const aksjonspunktKoder = [
  aksjonspunktCodes.VURDER_PERIODER_MED_OPPTJENING,
];

const endepunkter = [
  { key: FpBehandlingApiKeys.AKSJONSPUNKTER },
  { key: FpBehandlingApiKeys.VILKAR },
];

const endepunkterVedVisning = [
  { key: FpBehandlingApiKeys.OPPTJENING },
  { key: FpBehandlingApiKeys.UTLAND_DOK_STATUS },
];

type EndepunktData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

type EndepunktDataVedVisning = {
  opptjening?: Opptjening;
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
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * OpptjeningsvilkaretFaktaPanelDef
 */
const OpptjeningsvilkaretFaktaPanelDef: FunctionComponent<OwnProps> = ({
  valgtFaktaSteg,
  behandling,
  registrerFaktaPanel,
  arbeidsgiverOpplysningerPerId,
}) => {
  const [erPanelValgt, setPanelValgt] = useState(false);

  useEffect(() => {
    registrerFaktaPanel({
      id: faktaPanelCodes.OPPTJENINGSVILKARET,
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
    const skalSynest = data
      && data.vilkar.some((v) => v.vilkarType.kode === vilkarType.OPPTJENINGSVILKARET)
      && data.vilkar.some((v) => v.vilkarType.kode === vilkarType.MEDLEMSKAPSVILKARET && v.vilkarStatus.kode === vilkarUtfallType.OPPFYLT);
    if (skalSynest) {
      const erValgt = valgtFaktaSteg === faktaPanelCodes.OPPTJENINGSVILKARET
      || (standardProps.harApneAksjonspunkter && valgtFaktaSteg === 'default');
      registrerFaktaPanel({
        id: faktaPanelCodes.OPPTJENINGSVILKARET,
        tekst: getPackageIntl().formatMessage({ id: 'OpptjeningInfoPanel.KontrollerFaktaForOpptjening' }),
        erAktiv: erValgt,
        harAksjonspunkt: standardProps.harApneAksjonspunkter,
      });
      setPanelValgt(erValgt);
    }
  }, [valgtFaktaSteg, standardProps.harApneAksjonspunkter, state]);

  if (!erPanelValgt) {
    return null;
  }

  if (stateEtterVisning !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return (
    <OpptjeningFaktaIndex
      behandling={behandling}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      {...data}
      {...dataEtterVisning}
      {...standardProps}
    />
  );
};

export default OpptjeningsvilkaretFaktaPanelDef;
