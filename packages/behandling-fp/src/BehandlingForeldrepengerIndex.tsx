import React, { FunctionComponent } from 'react';

import { ArbeidsgiverOpplysningerWrapper, Personoversikt } from '@fpsak-frontend/types';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  BehandlingContainer, StandardBehandlingProps, StandardPropsProvider, BehandlingPaVent,
  useInitRequestApi, useLagreAksjonspunkt, useBehandling, useInitBehandlingHandlinger,
} from '@fpsak-frontend/behandling-felles';

import { restApiFpHooks, requestFpApi, FpBehandlingApiKeys } from './data/fpBehandlingApi';
import SakenFaktaInitPanel from './faktaPaneler/SakenFaktaInitPanel';
import ArbeidsforholdFaktaInitPanel from './faktaPaneler/ArbeidsforholdFaktaInitPanel';
import ArbeidOgInntektFaktaInitPanel from './faktaPaneler/ArbeidOgInntektFaktaInitPanel';
import YtelserFaktaInitPanel from './faktaPaneler/YtelserFaktaInitPanel';
import VergeFaktaInitPanel from './faktaPaneler/VergeFaktaInitPanel';
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
  useInitRequestApi(requestFpApi, setRequestPendingMessage);

  const {
    behandling, behandlingState, hentBehandling, setBehandling, toggleOppdateringAvFagsakOgBehandling,
  } = useBehandling(
    requestFpApi, FpBehandlingApiKeys.BEHANDLING_FP, behandlingUuid, oppdaterBehandlingVersjon,
  );

  const { lagreAksjonspunkter, lagreOverstyrteAksjonspunkter } = useLagreAksjonspunkt(
    requestFpApi, setBehandling, FpBehandlingApiKeys.SAVE_AKSJONSPUNKT, FpBehandlingApiKeys.SAVE_OVERSTYRT_AKSJONSPUNKT,
  );

  useInitBehandlingHandlinger(requestFpApi, FpBehandlingApiKeys, behandlingEventHandler, hentBehandling, setBehandling, behandling);

  const { data: opplysningsdata, state: opplysningsdataState } = restApiFpHooks.useMultipleRestApi<{
    arbeidsgivereOversikt: ArbeidsgiverOpplysningerWrapper,
    behandlingPersonoversikt: Personoversikt,
  }, void>(endepunkterSomSkalHentesEnGang, {
    updateTriggers: [!behandling],
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
        requestApi={requestFpApi}
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
          hentFaktaPaneler={(props) => (
            <>
              <SakenFaktaInitPanel {...props} />
              <ArbeidOgInntektFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <ArbeidsforholdFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <YtelserFaktaInitPanel {...props} />
              <VergeFaktaInitPanel {...props} />
              <OmsorgvilkaretFaktaInitPanel {...props} personoversikt={personoversikt} />
              <AdopsjonsvilkaretFaktaInitPanel {...props} fagsak={fagsak} />
              <FodselvilkaretFaktaInitPanel {...props} />
              <MedlemskapsvilkaretFaktaInitPanel
                {...props}
                rettigheter={rettigheter}
                hasFetchError={behandlingState === RestApiState.ERROR}
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
                toggleSkalOppdatereFagsakContext={toggleOppdateringAvFagsakOgBehandling}
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
                toggleOppdatereFagsakContext={toggleOppdateringAvFagsakOgBehandling}
              />
            </>
          )}
        />
      </StandardPropsProvider>
    </>
  );
};

export default BehandlingForeldrepengerIndex;
