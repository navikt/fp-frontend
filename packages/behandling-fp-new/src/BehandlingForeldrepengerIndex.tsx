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
import FodselvilkaretFaktaInitPanel from './faktaPaneler/FodselvilkaretFaktaInitPanel';
import MedlemskapsvilkaretFaktaInitPanel from './faktaPaneler/MedlemskapsvilkaretFaktaInitPanel';
import OpptjeningsvilkaretFaktaInitPanel from './faktaPaneler/OpptjeningsvilkaretFaktaInitPanel';
import BeregningFaktaInitPanel from './faktaPaneler/BeregningFaktaInitPanel';
import UttakFaktaInitPanel from './faktaPaneler/UttakFaktaInitPanel';
import VarselProsessStegPanelDef from './prosessPaneler/VarselProsessStegPanelDef';
import OpplysningspliktProsessStegPanelDef from './prosessPaneler/OpplysningspliktProsessStegPanelDef';
import InngangsvilkarProsessStegPanelDef from './prosessPaneler/InngangsvilkarProsessStegPanelDef';
import BeregningsgrunnlagProsessStegPanelDef from './prosessPaneler/BeregningsgrunnlagProsessStegPanelDef';
import UttakProsessStegPanelDef from './prosessPaneler/UttakProsessStegPanelDef';
import TilkjentYtelseProsessStegPanelDef from './prosessPaneler/TilkjentYtelseProsessStegPanelDef';
import SimuleringProsessStegPanelDef from './prosessPaneler/SimuleringProsessStegPanelDef';
import VedtakProsessStegPanelDef from './prosessPaneler/VedtakProsessStegPanelDef';

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
  fagsakPerson,
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
          faktaPaneler={[
            (props) => <SakenFaktaInitPanel {...props} />,
            (props) => <ArbeidsforholdFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />,
            (props) => <YtelserFaktaInitPanel {...props} />,
            (props) => <FodselvilkaretFaktaInitPanel {...props} />,
            (props) => (
              <MedlemskapsvilkaretFaktaInitPanel
                {...props}
                fagsakPerson={fagsakPerson}
                rettigheter={rettigheter}
                hasFetchError={behandlingState === RestApiState.ERROR}
                arbeidsgiverOpplysningerPerId={arbeidsgivere}
              />
            ),
            (props) => <OpptjeningsvilkaretFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />,
            (props) => <BeregningFaktaInitPanel {...props} rettigheter={rettigheter} arbeidsgiverOpplysningerPerId={arbeidsgivere} />,
            (props) => (
              <UttakFaktaInitPanel {...props} rettigheter={rettigheter} arbeidsgiverOpplysningerPerId={arbeidsgivere} personoversikt={personoversikt} />
            ),
          ]}
          prosessPaneler={[
            (props) => <VarselProsessStegPanelDef {...props} fagsak={fagsak} opneSokeside={opneSokeside} />,
            (props) => <OpplysningspliktProsessStegPanelDef {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />,
            (props) => <InngangsvilkarProsessStegPanelDef {...props} rettigheter={rettigheter} />,
            (props) => <BeregningsgrunnlagProsessStegPanelDef {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />,
            (props) => (
              <UttakProsessStegPanelDef
                {...props}
                fagsak={fagsak}
                arbeidsgiverOpplysningerPerId={arbeidsgivere}
                personoversikt={personoversikt}
                rettigheter={rettigheter}
              />
            ),
            (props) => (
              <TilkjentYtelseProsessStegPanelDef
                {...props}
                fagsak={fagsak}
                arbeidsgiverOpplysningerPerId={arbeidsgivere}
                personoversikt={personoversikt}
              />
            ),
            (props) => <SimuleringProsessStegPanelDef {...props} fagsak={fagsak} />,
            (props) => <VedtakProsessStegPanelDef {...props} fagsak={fagsak} opneSokeside={opneSokeside} />,
          ]}
        />
      </StandardPropsProvider>
    </>
  );
};

export default BehandlingForeldrepengerIndex;
