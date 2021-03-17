import React, { FunctionComponent } from 'react';

import { ArbeidsgiverOpplysningerWrapper, Personoversikt } from '@fpsak-frontend/types';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  BehandlingContainer, StandardBehandlingProps, StandardPropsProvider, BehandlingPaVent, ReduxFormStateCleaner,
  useInitRequestApi, useLagreAksjonspunkt, useBehandling, useInitBehandlingHandlinger,
} from '@fpsak-frontend/behandling-felles-ny';

import { restApiEsHooks, requestEsApi, EsBehandlingApiKeys } from './data/esBehandlingApi';

import SakenFaktaInitPanel from './faktaPaneler/SakenFaktaInitPanel';
import YtelserFaktaInitPanel from './faktaPaneler/YtelserFaktaInitPanel';
import VergeFaktaInitPanel from './faktaPaneler/VergeFaktaInitPanel';
import TilleggsopplysningerFaktaInitPanel from './faktaPaneler/TilleggsopplysningerFaktaInitPanel';
import OmsorgvilkaretFaktaInitPanel from './faktaPaneler/OmsorgvilkaretFaktaInitPanel';
import AdopsjonsvilkaretFaktaInitPanel from './faktaPaneler/AdopsjonsvilkaretFaktaInitPanel';
import FodselvilkaretFaktaInitPanel from './faktaPaneler/FodselvilkaretFaktaInitPanel';
import MedlemskapsvilkaretFaktaInitPanel from './faktaPaneler/MedlemskapsvilkaretFaktaInitPanel';

const endepunkterSomSkalHentesEnGang = [
  { key: EsBehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT },
  { key: EsBehandlingApiKeys.BEHANDLING_PERSONOVERSIKT },
];

const BehandlingEngangsstonadIndex: FunctionComponent<StandardBehandlingProps> = ({
  behandlingEventHandler,
  behandlingId,
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
    behandling, behandlingState, hentBehandling, setBehandling,
  } = useBehandling(
    requestEsApi, EsBehandlingApiKeys.BEHANDLING_ES, behandlingId,
  );

  const { lagreAksjonspunkter, lagreOverstyrteAksjonspunkter } = useLagreAksjonspunkt(
    requestEsApi, setBehandling, EsBehandlingApiKeys.SAVE_AKSJONSPUNKT, EsBehandlingApiKeys.SAVE_OVERSTYRT_AKSJONSPUNKT,
  );

  useInitBehandlingHandlinger(requestEsApi, EsBehandlingApiKeys, behandlingEventHandler, hentBehandling, setBehandling);

  const { data: opplysningsdata, state: opplysningsdataState } = restApiEsHooks.useMultipleRestApi<{
    arbeidsgivereOversikt: ArbeidsgiverOpplysningerWrapper,
    behandlingPersonoversikt: Personoversikt,
  }>(endepunkterSomSkalHentesEnGang, {
    updateTriggers: [!behandling],
    suspendRequest: !behandling,
  });

  const harIkkeHentetArbeidsgiverOpplysninger = opplysningsdataState === RestApiState.LOADING || opplysningsdataState === RestApiState.NOT_STARTED;

  if (!behandling || harIkkeHentetArbeidsgiverOpplysninger) {
    return <LoadingPanel />;
  }

  const { arbeidsgivereOversikt: { arbeidsgivere }, behandlingPersonoversikt: personoversikt } = opplysningsdata;

  return (
    <>
      <ReduxFormStateCleaner
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
      />
      <BehandlingPaVent
        behandling={behandling}
        hentBehandling={hentBehandling}
        kodeverk={kodeverk}
        requestApi={requestEsApi}
        oppdaterPaVentKey={EsBehandlingApiKeys.UPDATE_ON_HOLD}
        aksjonspunktKey={EsBehandlingApiKeys.AKSJONSPUNKTER}
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
          oppdaterBehandlingVersjon={oppdaterBehandlingVersjon}
          hentFaktaPaneler={(props) => (
            <>
              <SakenFaktaInitPanel {...props} />
              <YtelserFaktaInitPanel {...props} />
              <VergeFaktaInitPanel {...props} />
              <TilleggsopplysningerFaktaInitPanel {...props} />
              <OmsorgvilkaretFaktaInitPanel {...props} personoversikt={personoversikt} />
              <AdopsjonsvilkaretFaktaInitPanel {...props} />
              <FodselvilkaretFaktaInitPanel {...props} />
              <MedlemskapsvilkaretFaktaInitPanel
                {...props}
                arbeidsgiverOpplysningerPerId={arbeidsgivere}
                rettigheter={rettigheter}
                hasFetchError={behandlingState === RestApiState.ERROR}
              />
            </>
          )}
          hentProsessPaneler={(props, ekstraProps) => (
            <>
              <VarselProsessStegInitPanel
                {...props}
                fagsak={fagsak}
                opneSokeside={opneSokeside}
                toggleSkalOppdatereFagsakContext={ekstraProps.toggleOppdatereFagsakContext}
              />
            </>
          )}
        />
      </StandardPropsProvider>
    </>
  );
};

export default BehandlingEngangsstonadIndex;
