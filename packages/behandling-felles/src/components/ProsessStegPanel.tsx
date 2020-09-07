import React, { FunctionComponent } from 'react';

import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { FadingPanel, LoadingPanel } from '@fpsak-frontend/shared-components';
import { Behandling, KodeverkMedNavn } from '@fpsak-frontend/types';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import FagsakInfo from '../types/fagsakInfoTsType';
import MargMarkering from './MargMarkering';
import InngangsvilkarPanel from './InngangsvilkarPanel';

import BehandlingHenlagtPanel from './BehandlingHenlagtPanel';
import ProsessStegIkkeBehandletPanel from './ProsessStegIkkeBehandletPanel';
import prosessStegHooks from '../util/prosessSteg/prosessStegHooks';
import { ProsessStegUtledet } from '../util/prosessSteg/ProsessStegUtledet';

interface OwnProps {
  fagsak: FagsakInfo;
  behandling: Behandling;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  valgtProsessSteg?: ProsessStegUtledet;
  apentFaktaPanelInfo?: { urlCode: string; textCode: string};
  oppdaterProsessStegOgFaktaPanelIUrl?: (punktnavn?: string, faktanavn?: string) => void;
  lagringSideeffekterCallback: (aksjonspunktModeller: [{ kode: string; isVedtakSubmission?: boolean; sendVarsel?: boolean }]) => any;
  lagreAksjonspunkter: (params: any, keepData?: boolean) => Promise<any>,
  lagreOverstyrteAksjonspunkter?: (params: any, keepData?: boolean) => Promise<any>,
}

const ProsessStegPanel: FunctionComponent<OwnProps> = ({
  valgtProsessSteg,
  fagsak,
  behandling,
  alleKodeverk,
  apentFaktaPanelInfo,
  oppdaterProsessStegOgFaktaPanelIUrl,
  lagringSideeffekterCallback,
  lagreAksjonspunkter,
  lagreOverstyrteAksjonspunkter,
  useMultipleRestApi,
}) => {
  const erHenlagtOgVedtakStegValgt = behandling.behandlingHenlagt && valgtProsessSteg && valgtProsessSteg.getUrlKode() === prosessStegCodes.VEDTAK;

  const delPaneler = valgtProsessSteg.getDelPaneler();
  const panelKeys = delPaneler[0].getProsessStegDelPanelDef().getEndepunkter().map((e) => ({ key: e }));

  const suspendRequest = panelKeys.length === 0 || erHenlagtOgVedtakStegValgt || !valgtProsessSteg
    || (!valgtProsessSteg.getErStegBehandlet() && valgtProsessSteg.getUrlKode());

  const { data, state: hentDataState } = useMultipleRestApi(panelKeys, {
    keepData: true,
    suspendRequest,
    updateTriggers: [behandling?.versjon, suspendRequest],
  });

  if (erHenlagtOgVedtakStegValgt) {
    return <BehandlingHenlagtPanel />;
  }
  if (!valgtProsessSteg) {
    return null;
  }
  if (!valgtProsessSteg.getErStegBehandlet() && valgtProsessSteg.getUrlKode()) {
    return <ProsessStegIkkeBehandletPanel />;
  }

  const bekreftAksjonspunktCallback = prosessStegHooks.useBekreftAksjonspunkt(fagsak, behandling,
    lagringSideeffekterCallback, lagreAksjonspunkter, lagreOverstyrteAksjonspunkter, valgtProsessSteg);

  const harHentetData = panelKeys.length === 0 || hentDataState === RestApiState.SUCCESS;

  return (
    <>
      {valgtProsessSteg.getErStegBehandlet() && (
        <MargMarkering
          behandlingStatus={behandling.status}
          aksjonspunkter={valgtProsessSteg.getAksjonspunkter()}
          isReadOnly={valgtProsessSteg.getErReadOnly()}
          visAksjonspunktMarkering={delPaneler.length === 1}
        >
          {delPaneler.length === 1 && (
            <FadingPanel>
              {!harHentetData && (
                <LoadingPanel />
              )}
              {harHentetData && (
                <>
                  {delPaneler[0].getProsessStegDelPanelDef().getKomponent({
                    ...data,
                    behandling,
                    alleKodeverk,
                    submitCallback: bekreftAksjonspunktCallback,
                    ...delPaneler[0].getKomponentData(),
                  })}
                </>
              )}
            </FadingPanel>
          )}
          {delPaneler.length > 1 && (
            <InngangsvilkarPanel
              behandling={behandling}
              alleKodeverk={alleKodeverk}
              prosessStegData={delPaneler}
              submitCallback={bekreftAksjonspunktCallback}
              apentFaktaPanelInfo={apentFaktaPanelInfo}
              oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
              useMultipleRestApi={useMultipleRestApi}
            />
          )}
        </MargMarkering>
      )}
    </>
  );
};

export default ProsessStegPanel;
