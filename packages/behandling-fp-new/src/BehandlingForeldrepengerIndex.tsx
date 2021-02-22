import React, { FunctionComponent } from 'react';

import { ArbeidsgiverOpplysningerWrapper } from '@fpsak-frontend/types';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  BehandlingContainer, StandardBehandlingProps, StandardPropsProvider, BehandlingPaVent, ReduxFormStateCleaner,
  useInitRequestApi, useLagreAksjonspunkt, useBehandling, useInitBehandlingHandlinger,
} from '@fpsak-frontend/behandling-felles-ny';

import { restApiFpHooks, requestFpApi, FpBehandlingApiKeys } from './data/fpBehandlingApi';
import SakenFaktaPanelDef from './faktaPaneler/SakenFaktaPanelDef';
import ArbeidsforholdFaktaPanelDef from './faktaPaneler/ArbeidsforholdFaktaPanelDef';
import YtelserFaktaPanelDef from './faktaPaneler/YtelserFaktaPanelDef';
import FodselvilkaretFaktaPanelDef from './faktaPaneler/FodselvilkaretFaktaPanelDef';
import MedlemskapsvilkaretFaktaPanelDef from './faktaPaneler/MedlemskapsvilkaretFaktaPanelDef';
import OpptjeningsvilkaretFaktaPanelDef from './faktaPaneler/OpptjeningsvilkaretFaktaPanelDef';
import BeregningFaktaPanelDef from './faktaPaneler/BeregningFaktaPanelDef';
import UttakFaktaPanelDef from './faktaPaneler/UttakFaktaPanelDef';
import VarselProsessStegPanelDef from './prosessPaneler/VarselProsessStegPanelDef';
import OpplysningspliktProsessStegPanelDef from './prosessPaneler/OpplysningspliktProsessStegPanelDef';
import InngangsvilkarProsessStegPanelDef from './prosessPaneler/InngangsvilkarProsessStegPanelDef';
import BeregningsgrunnlagProsessStegPanelDef from './prosessPaneler/BeregningsgrunnlagProsessStegPanelDef';
import UttakProsessStegPanelDef from './prosessPaneler/UttakProsessStegPanelDef';
import TilkjentYtelseProsessStegPanelDef from './prosessPaneler/TilkjentYtelseProsessStegPanelDef';
import SimuleringProsessStegPanelDef from './prosessPaneler/SimuleringProsessStegPanelDef';
import VedtakProsessStegPanelDef from './prosessPaneler/VedtakProsessStegPanelDef';

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

  const { data: arbeidsgiverOpplysninger, state: arbeidOppState } = useRestApi<ArbeidsgiverOpplysningerWrapper>(
    FpBehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT, {}, {
      updateTriggers: [!behandling],
      suspendRequest: !behandling,
    },
  );

  const harIkkeHentetArbeidsgiverOpplysninger = arbeidOppState === RestApiState.LOADING || arbeidOppState === RestApiState.NOT_STARTED;

  if (!behandling || harIkkeHentetArbeidsgiverOpplysninger) {
    return <LoadingPanel />;
  }

  const standardProps = {
    behandling,
    fagsak,
    rettigheter,
    hasFetchError: behandlingState === RestApiState.ERROR,
    alleKodeverk: kodeverk,
    lagreAksjonspunkter,
    lagreOverstyrteAksjonspunkter,
    oppdaterProsessStegOgFaktaPanelIUrl,
  };

  const { arbeidsgivere } = arbeidsgiverOpplysninger;

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
      <StandardPropsProvider initialState={standardProps}>
        <BehandlingContainer
          behandling={behandling}
          valgtProsessSteg={valgtProsessSteg}
          valgtFaktaSteg={valgtFaktaSteg}
          oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
          oppdaterBehandlingVersjon={oppdaterBehandlingVersjon}
          faktaPaneler={[
            (props) => <SakenFaktaPanelDef {...props} />,
            (props) => <ArbeidsforholdFaktaPanelDef {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />,
            (props) => <YtelserFaktaPanelDef {...props} />,
            (props) => <FodselvilkaretFaktaPanelDef {...props} />,
            (props) => (
              <MedlemskapsvilkaretFaktaPanelDef
                {...props}
                fagsakPerson={fagsakPerson}
                rettigheter={rettigheter}
                hasFetchError={behandlingState === RestApiState.ERROR}
                arbeidsgiverOpplysningerPerId={arbeidsgivere}
              />
            ),
            (props) => <OpptjeningsvilkaretFaktaPanelDef {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />,
            (props) => <BeregningFaktaPanelDef {...props} rettigheter={rettigheter} arbeidsgiverOpplysningerPerId={arbeidsgivere} />,
            (props) => <UttakFaktaPanelDef {...props} rettigheter={rettigheter} arbeidsgiverOpplysningerPerId={arbeidsgivere} />,
          ]}
          prosessPaneler={[
            (props) => <VarselProsessStegPanelDef {...props} fagsak={fagsak} opneSokeside={opneSokeside} />,
            (props) => <OpplysningspliktProsessStegPanelDef {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />,
            (props) => <InngangsvilkarProsessStegPanelDef {...props} rettigheter={rettigheter} />,
            (props) => <BeregningsgrunnlagProsessStegPanelDef {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />,
            (props) => <UttakProsessStegPanelDef {...props} fagsak={fagsak} arbeidsgiverOpplysningerPerId={arbeidsgivere} rettigheter={rettigheter} />,
            (props) => <TilkjentYtelseProsessStegPanelDef {...props} fagsak={fagsak} arbeidsgiverOpplysningerPerId={arbeidsgivere} />,
            (props) => <SimuleringProsessStegPanelDef {...props} fagsak={fagsak} />,
            (props) => <VedtakProsessStegPanelDef {...props} fagsak={fagsak} opneSokeside={opneSokeside} />,
          ]}
        />
      </StandardPropsProvider>
    </>
  );
};

export default BehandlingForeldrepengerIndex;
