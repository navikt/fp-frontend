import { useCallback, useEffect, useMemo } from 'react';
import { Dispatch } from 'redux';

import { EndpointOperations } from '@fpsak-frontend/rest-api-redux';

import {
  utledFaktaPaneler, finnValgtPanel, formaterPanelerForSidemeny, getBekreftAksjonspunktCallback,
} from './faktaUtils';
import Behandling from '../types/behandlingTsType';
import FagsakInfo from '../types/fagsakInfoTsType';
import NavAnsatt from '../types/navAnsattTsType';
import Aksjonspunkt from '../types/aksjonspunktTsType';
import FaktaPanelDefinisjon from '../types/faktaPanelDefinisjonTsType';
import FaktaPanelUtledet from '../types/faktaPanelUtledetTsType';
import FaktaPanelFaktaPanelMenyRadMeny from '../types/faktaPanelMenyRadTsType';

const useFaktaPaneler = (
  faktaPanelDefinisjoner: FaktaPanelDefinisjon[],
  panelData: {},
  fagsak: FagsakInfo,
  behandling: Behandling,
  navAnsatt: NavAnsatt,
  aksjonspunkter: Aksjonspunkt[],
  hasFetchError: boolean,
  valgtFaktaPanelKode: string,
  intl,
): [FaktaPanelUtledet[], FaktaPanelUtledet, FaktaPanelFaktaPanelMenyRadMeny[]] => {
  const faktaPaneler = useMemo(() => utledFaktaPaneler(faktaPanelDefinisjoner, panelData, fagsak, behandling, navAnsatt,
    aksjonspunkter, hasFetchError),
  [behandling.versjon]);

  const valgtPanel = useMemo(() => finnValgtPanel(faktaPaneler, valgtFaktaPanelKode), [behandling.versjon, valgtFaktaPanelKode]);

  const urlCode = valgtPanel ? valgtPanel.urlCode : undefined;
  const formaterteFaktaPaneler = useMemo(() => formaterPanelerForSidemeny(intl, faktaPaneler, urlCode),
    [behandling.versjon, urlCode]);

  return [faktaPaneler, valgtPanel, formaterteFaktaPaneler];
};

const useFaktaAksjonspunktNotifikator = (
  faktaPaneler: FaktaPanelUtledet[],
  setApentFaktaPanel: ({ urlCode, textCode }) => void,
  behandlingVersjon: number,
) => {
  useEffect(() => {
    const panelMedApentAp = faktaPaneler.find((p) => p.harApneAksjonspunkter);
    if (panelMedApentAp) {
      setApentFaktaPanel({ urlCode: panelMedApentAp.urlCode, textCode: panelMedApentAp.textCode });
    } else {
      setApentFaktaPanel(undefined);
    }
  }, [behandlingVersjon]);
};

const useCallbacks = (
  faktaPaneler: FaktaPanelUtledet[],
  fagsak: FagsakInfo,
  behandling: Behandling,
  oppdaterProsessStegOgFaktaPanelIUrl: (prosessPanel?: string, faktanavn?: string) => void,
  valgtProsessSteg: string,
  overstyringApCodes: string[],
  behandlingApi: {[name: string]: EndpointOperations},
  dispatch: Dispatch,
) => {
  const velgFaktaPanelCallback = useCallback((index) => oppdaterProsessStegOgFaktaPanelIUrl(valgtProsessSteg, faktaPaneler[index].urlCode),
    [behandling.versjon, valgtProsessSteg]);

  const bekreftAksjonspunktCallback = useCallback(getBekreftAksjonspunktCallback(dispatch, fagsak, behandling,
    oppdaterProsessStegOgFaktaPanelIUrl, overstyringApCodes, behandlingApi),
  [behandling.versjon]);

  return [velgFaktaPanelCallback, bekreftAksjonspunktCallback];
};

const faktaHooks = {
  useFaktaPaneler,
  useFaktaAksjonspunktNotifikator,
  useCallbacks,
};

export default faktaHooks;
