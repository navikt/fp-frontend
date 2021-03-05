import React, { FunctionComponent } from 'react';

import { ArbeidsgiverOpplysningerWrapper, Personoversikt } from '@fpsak-frontend/types';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  BehandlingContainer, StandardBehandlingProps, StandardPropsProvider, BehandlingPaVent, ReduxFormStateCleaner,
  useInitRequestApi, useLagreAksjonspunkt, useBehandling, useInitBehandlingHandlinger,
} from '@fpsak-frontend/behandling-felles-ny';

import { restApiFpHooks, requestFpApi, FpBehandlingApiKeys } from './data/fpBehandlingApi';
import SakenFaktaInitPanel from './faktaPaneler/SakenFaktaInitPanel';
import ArbeidsforholdFaktaInitPanel from './faktaPaneler/ArbeidsforholdFaktaInitPanel';
import YtelserFaktaInitPanel from './faktaPaneler/YtelserFaktaInitPanel';
import VergeFaktaInitPanel from './faktaPaneler/VergeFaktaInitPanel';
import TilleggsopplysningerFaktaInitPanel from './faktaPaneler/TilleggsopplysningerFaktaInitPanel';
import OmsorgvilkaretFaktaInitPanel from './faktaPaneler/OmsorgvilkaretFaktaInitPanel';
import FordelingFaktaInitPanel from './faktaPaneler/FordelingFaktaInitPanel';
import FodselvilkaretFaktaInitPanel from './faktaPaneler/FodselvilkaretFaktaInitPanel';
import BesteberegningFaktaInitPanel from './faktaPaneler/BesteberegningFaktaInitPanel';
import AdopsjonsvilkaretFaktaInitPanel from './faktaPaneler/AdopsjonsvilkaretFaktaInitPanel';
import MedlemskapsvilkaretFaktaInitPanel from './faktaPaneler/MedlemskapsvilkaretFaktaInitPanel';
import OpptjeningsvilkaretFaktaInitPanel from './faktaPaneler/OpptjeningsvilkaretFaktaInitPanel';
import BeregningFaktaInitPanel from './faktaPaneler/BeregningFaktaInitPanel';
import OmsorgFaktaInitPanel from './faktaPaneler/OmsorgFaktaInitPanel';
import UttakFaktaInitPanel from './faktaPaneler/UttakFaktaInitPanel';
import AktivitetskravFaktaInitPanel from './faktaPaneler/AktivitetskravFaktaInitPanel';
import VarselProsessStegInitPanel from './prosessPaneler/VarselProsessStegInitPanel';
import OpplysningspliktProsessStegInitPanel from './prosessPaneler/OpplysningspliktProsessStegInitPanel';
import InngangsvilkarProsessStegInitPanel from './prosessPaneler/InngangsvilkarProsessStegInitPanel';
import FortsattMedlemskapProsessStegInitPanel from './prosessPaneler/FortsattMedlemskapProsessStegInitPanel';
import BeregningsgrunnlagProsessStegInitPanel from './prosessPaneler/BeregningsgrunnlagProsessStegInitPanel';
import UttakProsessStegInitPanel from './prosessPaneler/UttakProsessStegInitPanel';
import TilkjentYtelseProsessStegInitPanel from './prosessPaneler/TilkjentYtelseProsessStegInitPanel';
import SimuleringProsessStegInitPanel from './prosessPaneler/SimuleringProsessStegInitPanel';
import VedtakProsessStegInitPanel from './prosessPaneler/VedtakProsessStegInitPanel';
import SoknadsfristProsessStegInitPanel from './prosessPaneler/SoknadsfristProsessStegInitPanel';

const endepunkterSomSkalHentesEnGang = [
  { key: FpBehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT },
  { key: FpBehandlingApiKeys.BEHANDLING_PERSONOVERSIKT },
];

const BehandlingForeldrepengerIndex: FunctionComponent<StandardBehandlingProps> = ({
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
  useInitRequestApi(requestFpApi, setRequestPendingMessage);

  const { useRestApiRunner, useRestApi } = restApiFpHooks;

  const {
    behandling, behandlingState, hentBehandling, setBehandling,
  } = useBehandling(
    requestFpApi, useRestApiRunner, FpBehandlingApiKeys.BEHANDLING_FP, behandlingId,
  );

  const { lagreAksjonspunkter, lagreOverstyrteAksjonspunkter } = useLagreAksjonspunkt(useRestApiRunner, FpBehandlingApiKeys, setBehandling);

  useInitBehandlingHandlinger(useRestApiRunner, FpBehandlingApiKeys, behandlingEventHandler, hentBehandling, setBehandling);

  const { data: opplysningsdata, state: opplysningsdataState } = restApiFpHooks.useMultipleRestApi<{
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
        kodeverk={kodeverk}
        hentBehandling={hentBehandling}
        useRestApiRunner={useRestApiRunner}
        useRestApi={useRestApi}
        oppdaterPaVentKey={FpBehandlingApiKeys.UPDATE_ON_HOLD}
        aksjonspunktKey={FpBehandlingApiKeys.AKSJONSPUNKTER}
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
              <ArbeidsforholdFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <YtelserFaktaInitPanel {...props} />
              <VergeFaktaInitPanel {...props} />
              <TilleggsopplysningerFaktaInitPanel {...props} />
              <OmsorgvilkaretFaktaInitPanel {...props} personoversikt={personoversikt} />
              <AdopsjonsvilkaretFaktaInitPanel {...props} fagsak={fagsak} />
              <FodselvilkaretFaktaInitPanel {...props} />
              <MedlemskapsvilkaretFaktaInitPanel
                {...props}
                rettigheter={rettigheter}
                hasFetchError={behandlingState === RestApiState.ERROR}
                arbeidsgiverOpplysningerPerId={arbeidsgivere}
              />
              <OpptjeningsvilkaretFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <BeregningFaktaInitPanel {...props} rettigheter={rettigheter} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <BesteberegningFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <FordelingFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <OmsorgFaktaInitPanel {...props} personoversikt={personoversikt} />
              <UttakFaktaInitPanel {...props} rettigheter={rettigheter} arbeidsgiverOpplysningerPerId={arbeidsgivere} personoversikt={personoversikt} />
              <AktivitetskravFaktaInitPanel {...props} />
            </>
          )}
          hentProsessPaneler={(props, ekstraProps) => (
            <>
              <VarselProsessStegInitPanel
                {...props}
                fagsak={fagsak}
                opneSokeside={opneSokeside}
                oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
                toggleSkalOppdatereFagsakContext={ekstraProps.toggleOppdatereFagsakContext}
              />
              <OpplysningspliktProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <InngangsvilkarProsessStegInitPanel
                {...props}
                rettigheter={rettigheter}
                oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
                apentFaktaPanelInfo={ekstraProps.apentFaktaPanelInfo}
              />
              <BeregningsgrunnlagProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <SoknadsfristProsessStegInitPanel {...props} />
              <FortsattMedlemskapProsessStegInitPanel {...props} rettigheter={rettigheter} />
              <UttakProsessStegInitPanel
                {...props}
                fagsak={fagsak}
                arbeidsgiverOpplysningerPerId={arbeidsgivere}
                personoversikt={personoversikt}
                rettigheter={rettigheter}
              />
              <TilkjentYtelseProsessStegInitPanel
                {...props}
                fagsak={fagsak}
                arbeidsgiverOpplysningerPerId={arbeidsgivere}
                personoversikt={personoversikt}
              />
              <SimuleringProsessStegInitPanel {...props} fagsak={fagsak} menyData={ekstraProps.allMenyData} />
              <VedtakProsessStegInitPanel
                {...props}
                fagsak={fagsak}
                opneSokeside={opneSokeside}
                oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
                toggleOppdatereFagsakContext={ekstraProps.toggleOppdatereFagsakContext}
              />
            </>
          )}
        />
      </StandardPropsProvider>
    </>
  );
};

export default BehandlingForeldrepengerIndex;
