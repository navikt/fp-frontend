import React, { FunctionComponent } from 'react';

import { ArbeidsgiverOpplysningerWrapper, Personoversikt } from '@fpsak-frontend/types';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  BehandlingContainer, StandardBehandlingProps, StandardPropsProvider, BehandlingPaVent,
  useInitRequestApi, useLagreAksjonspunkt, useBehandling, useInitBehandlingHandlinger,
} from '@fpsak-frontend/behandling-felles';

import { restApiSvpHooks, requestSvpApi, SvpBehandlingApiKeys } from './data/svpBehandlingApi';
import SakenFaktaInitPanel from './faktaPaneler/SakenFaktaInitPanel';
import ArbeidsforholdFaktaInitPanel from './faktaPaneler/ArbeidsforholdFaktaInitPanel';
import ArbeidOgInntektFaktaInitPanel from './faktaPaneler/ArbeidOgInntektFaktaInitPanel';
import YtelserFaktaInitPanel from './faktaPaneler/YtelserFaktaInitPanel';
import VergeFaktaInitPanel from './faktaPaneler/VergeFaktaInitPanel';
import FodseltilretteleggingFaktaInitPanel from './faktaPaneler/FodseltilretteleggingFaktaInitPanel';
import MedlemskapsvilkaretFaktaInitPanel from './faktaPaneler/MedlemskapsvilkaretFaktaInitPanel';
import OpptjeningsvilkaretFaktaInitPanel from './faktaPaneler/OpptjeningsvilkaretFaktaInitPanel';
import BeregningFaktaInitPanel from './faktaPaneler/BeregningFaktaInitPanel';
import FordelingFaktaInitPanel from './faktaPaneler/FordelingFaktaInitPanel';
import OpplysningspliktProsessStegInitPanel from './prosessPaneler/OpplysningspliktProsessStegInitPanel';
import InngangsvilkarProsessStegInitPanel from './prosessPaneler/InngangsvilkarProsessStegInitPanel';
import BeregningsgrunnlagProsessStegInitPanel from './prosessPaneler/BeregningsgrunnlagProsessStegInitPanel';
import SoknadsfristProsessStegInitPanel from './prosessPaneler/SoknadsfristProsessStegInitPanel';
import FortsattMedlemskapProsessStegInitPanel from './prosessPaneler/FortsattMedlemskapProsessStegInitPanel';
import TilkjentYtelseProsessStegInitPanel from './prosessPaneler/TilkjentYtelseProsessStegInitPanel';
import SimuleringProsessStegInitPanel from './prosessPaneler/SimuleringProsessStegInitPanel';
import VedtakProsessStegInitPanel from './prosessPaneler/VedtakProsessStegInitPanel';
import PermisjonFaktaInitPanel from './faktaPaneler/PermisjonFaktaInitPanel';

const endepunkterSomSkalHentesEnGang = [
  { key: SvpBehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT },
  { key: SvpBehandlingApiKeys.BEHANDLING_PERSONOVERSIKT },
];

const BehandlingSvangerskapspengerIndex: FunctionComponent<StandardBehandlingProps> = ({
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
  useInitRequestApi(requestSvpApi, setRequestPendingMessage);

  const {
    behandling, behandlingState, hentBehandling, setBehandling, toggleOppdateringAvFagsakOgBehandling,
  } = useBehandling(
    requestSvpApi, SvpBehandlingApiKeys.BEHANDLING_SVP, behandlingUuid, oppdaterBehandlingVersjon,
  );

  const { lagreAksjonspunkter, lagreOverstyrteAksjonspunkter } = useLagreAksjonspunkt(
    requestSvpApi, setBehandling, SvpBehandlingApiKeys.SAVE_AKSJONSPUNKT, SvpBehandlingApiKeys.SAVE_OVERSTYRT_AKSJONSPUNKT,
  );

  const skalIkkeViseModal = useInitBehandlingHandlinger(requestSvpApi, SvpBehandlingApiKeys, behandlingEventHandler, hentBehandling, setBehandling, behandling);

  const { data: opplysningsdata, state: opplysningsdataState } = restApiSvpHooks.useMultipleRestApi<{
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
        requestApi={requestSvpApi}
        oppdaterPaVentKey={SvpBehandlingApiKeys.UPDATE_ON_HOLD}
        aksjonspunktKey={SvpBehandlingApiKeys.AKSJONSPUNKTER}
        skalIkkeViseModal={skalIkkeViseModal}
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
              <ArbeidOgInntektFaktaInitPanel
                {...props}
                saksnummer={fagsak.saksnummer}
                behandlingUuid={behandling.uuid}
                rettigheter={rettigheter}
                arbeidsgiverOpplysningerPerId={arbeidsgivere}
                settBehandlingPåVentCallback={behandlingEventHandler.settBehandlingPaVent}
                hentBehandling={hentBehandling}
              />
              <ArbeidsforholdFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <YtelserFaktaInitPanel {...props} />
              <VergeFaktaInitPanel {...props} />
              <FodseltilretteleggingFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} rettigheter={rettigheter} />
              <MedlemskapsvilkaretFaktaInitPanel
                {...props}
                rettigheter={rettigheter}
                hasFetchError={behandlingState === RestApiState.ERROR}
              />
              <OpptjeningsvilkaretFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <PermisjonFaktaInitPanel {...props} saksnummer={fagsak.saksnummer} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <BeregningFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} rettigheter={rettigheter} />
              <FordelingFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
            </>
          )}
          hentProsessPaneler={(props, ekstraProps) => (
            <>
              <OpplysningspliktProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <InngangsvilkarProsessStegInitPanel
                {...props}
                rettigheter={rettigheter}
                oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
              />
              <BeregningsgrunnlagProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <SoknadsfristProsessStegInitPanel {...props} />
              <FortsattMedlemskapProsessStegInitPanel {...props} rettigheter={rettigheter} />
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

export default BehandlingSvangerskapspengerIndex;
