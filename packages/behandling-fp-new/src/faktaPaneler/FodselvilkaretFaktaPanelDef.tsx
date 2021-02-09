import React, {
  FunctionComponent, useEffect,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import FodselFaktaIndex from '@fpsak-frontend/fakta-fodsel';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { fodselsvilkarene } from '@fpsak-frontend/kodeverk/src/vilkarType';
import {
  Aksjonspunkt, Behandling, FamilieHendelse, FamilieHendelseSamling, Personopplysninger, Soknad, Vilkar,
} from '@fpsak-frontend/types';
import { useStandardFaktaProps } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { restApiFpHooks, FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const aksjonspunktKoder = [
  aksjonspunktCodes.TERMINBEKREFTELSE,
  aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL,
  aksjonspunktCodes.VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT,
];

const endepunkter = [
  { key: FpBehandlingApiKeys.VILKAR },
];

const endepunkterVedVisning = [
  { key: FpBehandlingApiKeys.AKSJONSPUNKTER },
  { key: FpBehandlingApiKeys.FAMILIEHENDELSE },
  { key: FpBehandlingApiKeys.FAMILIEHENDELSE_ORIGINAL_BEHANDLING },
  { key: FpBehandlingApiKeys.SOKNAD },
  { key: FpBehandlingApiKeys.SOKNAD_ORIGINAL_BEHANDLING },
  { key: FpBehandlingApiKeys.PERSONOPPLYSNINGER },
];

type EndepunktData = {
  vilkar: Vilkar[];
}

type EndepunktDataVedVisning = {
  aksjonspunkter: Aksjonspunkt[];
  familiehendelse: FamilieHendelseSamling;
  familiehendelseOriginalBehandling?: FamilieHendelse;
  soknad: Soknad;
  soknadOriginalBehandling?: Soknad;
  personopplysninger: Personopplysninger;
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
 * FodselvilkaretFaktaPanelDef
 */
const FodselvilkaretFaktaPanelDef: FunctionComponent<OwnProps> = ({
  valgtFaktaSteg,
  behandling,
  leggFaktaPanelTilMeny,
  registrerFaktaPanel,
}) => {
  useEffect(() => {
    registrerFaktaPanel(faktaPanelCodes.FODSELSVILKARET);
  }, []);
  const erPanelValgt = valgtFaktaSteg === faktaPanelCodes.FODSELSVILKARET;

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

  const filtrerteAksjonspunkter = dataEtterVisning ? dataEtterVisning.aksjonspunkter.filter((ap) => aksjonspunktKoder.includes(ap.definisjon.kode)) : [];

  const standardProps = useStandardFaktaProps(filtrerteAksjonspunkter);

  useEffect(() => {
    if (data && data.vilkar.some((v) => fodselsvilkarene.includes(v.vilkarType.kode))) {
      leggFaktaPanelTilMeny({
        id: faktaPanelCodes.FODSELSVILKARET,
        tekst: getPackageIntl().formatMessage({ id: 'FodselInfoPanel.Fodsel' }),
        erAktiv: valgtFaktaSteg === faktaPanelCodes.FODSELSVILKARET,
        harAksjonspunkt: standardProps.harApneAksjonspunkter,
      });
    }
  }, [valgtFaktaSteg, standardProps.harApneAksjonspunkter, state]);

  if (!erPanelValgt) {
    return null;
  }

  if (stateEtterVisning !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return <FodselFaktaIndex behandling={behandling} {...data} {...dataEtterVisning} {...standardProps} />;
};

export default FodselvilkaretFaktaPanelDef;
