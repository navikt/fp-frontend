import React, { FunctionComponent } from 'react';

import { ArbeidsgiverOpplysningerWrapper, Personoversikt } from '@fpsak-frontend/types';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  BehandlingContainer, StandardBehandlingProps, StandardPropsProvider, BehandlingPaVent,
  useInitRequestApi, useLagreAksjonspunkt, useBehandling, useInitBehandlingHandlinger,
} from '@fpsak-frontend/behandling-felles';

import { restApiEsHooks, requestEsApi, EsBehandlingApiKeys } from './data/esBehandlingApi';

import SakenFaktaInitPanel from './faktaPaneler/SakenFaktaInitPanel';
import YtelserFaktaInitPanel from './faktaPaneler/YtelserFaktaInitPanel';
import VergeFaktaInitPanel from './faktaPaneler/VergeFaktaInitPanel';
import OmsorgvilkaretFaktaInitPanel from './faktaPaneler/OmsorgvilkaretFaktaInitPanel';
import AdopsjonsvilkaretFaktaInitPanel from './faktaPaneler/AdopsjonsvilkaretFaktaInitPanel';
import FodselvilkaretFaktaInitPanel from './faktaPaneler/FodselvilkaretFaktaInitPanel';
import MedlemskapsvilkaretFaktaInitPanel from './faktaPaneler/MedlemskapsvilkaretFaktaInitPanel';
import VarselProsessStegInitPanel from './prosessPaneler/VarselProsessStegInitPanel';
import InngangsvilkarProsessStegInitPanel from './prosessPaneler/InngangsvilkarProsessStegInitPanel';
import OpplysningspliktProsessStegInitPanel from './prosessPaneler/OpplysningspliktProsessStegInitPanel';
import SoknadsfristProsessStegInitPanel from './prosessPaneler/SoknadsfristProsessStegInitPanel';
import BeregningProsessStegInitPanel from './prosessPaneler/BeregningProsessStegInitPanel';
import SimuleringProsessStegInitPanel from './prosessPaneler/SimuleringProsessStegInitPanel';
import VedtakProsessStegInitPanel from './prosessPaneler/VedtakProsessStegInitPanel';

const endepunkterSomSkalHentesEnGang = [
  { key: EsBehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT },
  { key: EsBehandlingApiKeys.BEHANDLING_PERSONOVERSIKT },
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
    requestEsApi, EsBehandlingApiKeys.BEHANDLING_ES, behandlingUuid, oppdaterBehandlingVersjon,
  );

  const { lagreAksjonspunkter, lagreOverstyrteAksjonspunkter } = useLagreAksjonspunkt(
    requestEsApi, setBehandling, EsBehandlingApiKeys.SAVE_AKSJONSPUNKT, EsBehandlingApiKeys.SAVE_OVERSTYRT_AKSJONSPUNKT,
  );

  useInitBehandlingHandlinger(requestEsApi, EsBehandlingApiKeys, behandlingEventHandler, hentBehandling, setBehandling, behandling);

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
          hentFaktaPaneler={(props) => (
            <>
              <SakenFaktaInitPanel {...props} />
              <YtelserFaktaInitPanel {...props} />
              <VergeFaktaInitPanel {...props} />
              <OmsorgvilkaretFaktaInitPanel {...props} personoversikt={personoversikt} />
              <AdopsjonsvilkaretFaktaInitPanel {...props} />
              <FodselvilkaretFaktaInitPanel {...props} />
              <MedlemskapsvilkaretFaktaInitPanel
                {...props}
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
                toggleSkalOppdatereFagsakContext={toggleOppdateringAvFagsakOgBehandling}
              />
              <OpplysningspliktProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <InngangsvilkarProsessStegInitPanel
                {...props}
                rettigheter={rettigheter}
                oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
                apentFaktaPanelInfo={ekstraProps.apentFaktaPanelInfo}
              />
              <SoknadsfristProsessStegInitPanel {...props} rettigheter={rettigheter} />
              <BeregningProsessStegInitPanel {...props} rettigheter={rettigheter} />
              <SimuleringProsessStegInitPanel {...props} fagsak={fagsak} menyData={ekstraProps.allMenyData} />
              <VedtakProsessStegInitPanel
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
