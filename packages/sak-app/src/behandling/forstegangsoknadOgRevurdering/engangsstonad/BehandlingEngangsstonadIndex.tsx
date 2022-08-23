import React, { FunctionComponent } from 'react';

import { ArbeidsgiverOpplysningerWrapper, Personoversikt } from '@fpsak-frontend/types';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import { BehandlingFellesApiKeys } from '../../felles/data/behandlingFellesApi';
import BehandlingContainer from '../../felles/BehandlingContainer';
import StandardBehandlingProps from '../../felles/typer/standardBehandlingProps';
import BehandlingPaVent from '../../felles/modaler/paVent/BehandlingPaVent';
import StandardPropsProvider from '../../felles/utils/standardPropsStateContext';
import {
  useBehandling, useInitBehandlingHandlinger, useInitRequestApi, useLagreAksjonspunkt,
} from '../../felles/utils/indexHooks';
import { restApiEsHooks, requestEsApi } from './data/esBehandlingApi';
import SakenFaktaInitPanel from '../paneler/fakta/SakenFaktaInitPanel';
import YtelserFaktaInitPanel from '../paneler/fakta/YtelserFaktaInitPanel';
import VergeFaktaInitPanel from '../paneler/fakta/VergeFaktaInitPanel';
import OmsorgvilkaretFaktaInitPanel from '../paneler/fakta/OmsorgvilkaretFaktaInitPanel';
import AdopsjonsvilkaretFaktaInitPanel from '../paneler/fakta/AdopsjonsvilkaretFaktaInitPanel';
import FodselvilkaretFaktaInitPanel from '../paneler/fakta/FodselvilkaretFaktaInitPanel';
import MedlemskapsvilkaretFaktaInitPanel from '../paneler/fakta/MedlemskapsvilkaretFaktaInitPanel';
import VarselProsessStegInitPanel from '../paneler/prosess/VarselProsessStegInitPanel';
import InngangsvilkarProsessStegInitPanel from './prosessPaneler/InngangsvilkarEsProsessStegInitPanel';
import OpplysningspliktProsessStegInitPanel from '../paneler/prosess/OpplysningspliktProsessStegInitPanel';
import BeregningEsProsessStegInitPanel from './prosessPaneler/BeregningEsProsessStegInitPanel';
import SimuleringProsessStegInitPanel from '../paneler/prosess/SimuleringProsessStegInitPanel';
import VedtakEsProsessStegInitPanel from './prosessPaneler/VedtakEsProsessStegInitPanel';
import SoknadsfristEsProsessStegInitPanel from './prosessPaneler/SoknadsfristEsProsessStegInitPanel';

const endepunkterSomSkalHentesEnGang = [
  { key: BehandlingFellesApiKeys.ARBEIDSGIVERE_OVERSIKT },
  { key: BehandlingFellesApiKeys.BEHANDLING_PERSONOVERSIKT },
];

const BehandlingEngangsstonadIndex: FunctionComponent<StandardBehandlingProps> = ({
  behandlingEventHandler,
  behandlingUuid,
  oppdaterBehandlingVersjon,
  kodeverk,
  fagsak,
  rettigheter,
  oppdaterProsessStegOgFaktaPanelIUrl,
  valgtProsessSteg,
  valgtFaktaSteg,
  opneSokeside,
  setRequestPendingMessage,
}) => {
  useInitRequestApi(requestEsApi, setRequestPendingMessage);

  const {
    behandling, behandlingState, hentBehandling, setBehandling, toggleOppdateringAvFagsakOgBehandling,
  } = useBehandling(
    requestEsApi, behandlingUuid, oppdaterBehandlingVersjon,
  );

  const { lagreAksjonspunkter, lagreOverstyrteAksjonspunkter } = useLagreAksjonspunkt(requestEsApi, setBehandling);

  useInitBehandlingHandlinger(requestEsApi, behandlingEventHandler, hentBehandling, setBehandling, behandling);

  const { data: opplysningsdata, state: opplysningsdataState } = restApiEsHooks.useMultipleRestApi<{
    arbeidsgivereOversikt: ArbeidsgiverOpplysningerWrapper,
    behandlingPersonoversikt: Personoversikt,
  }, void>(endepunkterSomSkalHentesEnGang, {
    updateTriggers: [behandling?.versjon],
    suspendRequest: !behandling,
  });

  const harIkkeHentetArbeidsgiverOpplysninger = opplysningsdataState === RestApiState.LOADING || opplysningsdataState === RestApiState.NOT_STARTED;

  if (!behandling || harIkkeHentetArbeidsgiverOpplysninger || !opplysningsdata) {
    return <LoadingPanel />;
  }

  const { arbeidsgivereOversikt: { arbeidsgivere }, behandlingPersonoversikt: personoversikt } = opplysningsdata;

  return (
    <>
      <BehandlingPaVent
        behandling={behandling}
        hentBehandling={hentBehandling}
        kodeverk={kodeverk}
        requestApi={requestEsApi}
      />
      <StandardPropsProvider
        behandling={behandling}
        fagsak={fagsak}
        rettigheter={rettigheter}
        hasFetchError={behandlingState === RestApiState.ERROR}
        alleKodeverk={kodeverk}
        lagreAksjonspunkter={lagreAksjonspunkter}
        lagreOverstyrteAksjonspunkter={lagreOverstyrteAksjonspunkter}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
      >
        <BehandlingContainer
          behandling={behandling}
          valgtProsessSteg={valgtProsessSteg}
          valgtFaktaSteg={valgtFaktaSteg}
          oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
          requestApi={requestEsApi}
          hentFaktaPaneler={(props) => (
            <>
              <SakenFaktaInitPanel {...props} />
              <YtelserFaktaInitPanel {...props} />
              <VergeFaktaInitPanel {...props} />
              <OmsorgvilkaretFaktaInitPanel {...props} personoversikt={personoversikt} />
              <AdopsjonsvilkaretFaktaInitPanel {...props} fagsak={fagsak} />
              <FodselvilkaretFaktaInitPanel {...props} />
              <MedlemskapsvilkaretFaktaInitPanel {...props} />
            </>
          )}
          hentProsessPaneler={(props, ekstraProps) => (
            <>
              <VarselProsessStegInitPanel
                {...props}
                fagsak={fagsak}
                opneSokeside={opneSokeside}
                toggleSkalOppdatereFagsakContext={toggleOppdateringAvFagsakOgBehandling}
              />
              <OpplysningspliktProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <InngangsvilkarProsessStegInitPanel
                {...props}
                rettigheter={rettigheter}
                oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
                apentFaktaPanelInfo={ekstraProps.apentFaktaPanelInfo}
              />
              <SoknadsfristEsProsessStegInitPanel {...props} rettigheter={rettigheter} />
              <BeregningEsProsessStegInitPanel {...props} rettigheter={rettigheter} />
              <SimuleringProsessStegInitPanel {...props} fagsak={fagsak} menyData={ekstraProps.allMenyData} />
              <VedtakEsProsessStegInitPanel
                {...props}
                fagsak={fagsak}
                opneSokeside={opneSokeside}
                toggleOppdatereFagsakContext={toggleOppdateringAvFagsakOgBehandling}
              />
            </>
          )}
        />
      </StandardPropsProvider>
    </>
  );
};

export default BehandlingEngangsstonadIndex;
