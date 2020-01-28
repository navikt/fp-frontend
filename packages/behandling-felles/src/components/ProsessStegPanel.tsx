import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';

import { behandlingspunktCodes as bpc } from '@fpsak-frontend/fp-felles';
import { FadingPanel } from '@fpsak-frontend/shared-components';
import { EndpointOperations } from '@fpsak-frontend/rest-api-redux';

import ProsessStegData from '../types/prosessStegDataTsType';
import FagsakInfo from '../types/fagsakInfoTsType';
import Behandling from '../types/behandlingTsType';
import Kodeverk from '../types/kodeverkTsType';
import MargMarkering from './MargMarkering';
import InngangsvilkarPanel from './InngangsvilkarPanel';
import DataFetcherBehandlingDataV2 from '../DataFetcherBehandlingDataV2';
import BehandlingHenlagtPanel from './BehandlingHenlagtPanel';
import ProsessStegIkkeBehandletPanel from './ProsessStegIkkeBehandletPanel';
import prosessStegHooks from '../util/prosessStegHooks';

interface OwnProps {
  fagsak: FagsakInfo;
  behandling: Behandling;
  alleKodeverk: {[key: string]: Kodeverk[]};
  valgtProsessSteg?: ProsessStegData;
  apentFaktaPanelInfo?: { urlCode: string; textCode: string};
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  lagringSideeffekterCallback: (aksjonspunktModeller: []) => any;
  behandlingApi: {[name: string]: EndpointOperations};
  dispatch: Dispatch;
}

const ProsessStegPanel: FunctionComponent<OwnProps> = ({
  valgtProsessSteg,
  fagsak,
  behandling,
  alleKodeverk,
  apentFaktaPanelInfo,
  oppdaterProsessStegOgFaktaPanelIUrl,
  lagringSideeffekterCallback,
  behandlingApi,
  dispatch,
}) => {
  const erHenlagtOgVedtakStegValgt = behandling.behandlingHenlagt && valgtProsessSteg.urlCode === bpc.VEDTAK;
  const bekreftAksjonspunktCallback = prosessStegHooks.useBekreftAksjonspunkt(fagsak, behandling, behandlingApi, lagringSideeffekterCallback,
    dispatch, valgtProsessSteg);

  return (
    <>
      {valgtProsessSteg && valgtProsessSteg.erStegBehandlet && (
        <MargMarkering
          behandlingStatus={behandling.status}
          aksjonspunkter={valgtProsessSteg.aksjonspunkter}
          isReadOnly={valgtProsessSteg.isReadOnly}
          visAksjonspunktMarkering={valgtProsessSteg.panelData.length === 1}
        >
          {valgtProsessSteg.panelData.length === 1 && (
            <FadingPanel>
              <DataFetcherBehandlingDataV2
                key={valgtProsessSteg.panelData[0].code}
                behandlingVersion={behandling.versjon}
                endpoints={valgtProsessSteg.panelData[0].endpoints}
                render={(dataProps) => valgtProsessSteg.panelData[0].renderComponent({
                  ...dataProps,
                  behandling,
                  alleKodeverk,
                  submitCallback: bekreftAksjonspunktCallback,
                  ...valgtProsessSteg.panelData[0].komponentData,
                })}
              />
            </FadingPanel>
          )}
          {valgtProsessSteg.panelData.length > 1 && (
            <InngangsvilkarPanel
              behandling={behandling}
              alleKodeverk={alleKodeverk}
              prosessStegData={valgtProsessSteg.panelData}
              submitCallback={bekreftAksjonspunktCallback}
              apentFaktaPanelInfo={apentFaktaPanelInfo}
              oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
            />
          )}
        </MargMarkering>
      )}
      {erHenlagtOgVedtakStegValgt && (
        <BehandlingHenlagtPanel />
      )}
      {(valgtProsessSteg && valgtProsessSteg.urlCode
        && !valgtProsessSteg.erStegBehandlet && !erHenlagtOgVedtakStegValgt) && (
        <ProsessStegIkkeBehandletPanel />
      )}
    </>
  );
};

export default ProsessStegPanel;
