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
import { restApiSvpHooks, requestSvpApi } from './data/svpBehandlingApi';
import SakenFaktaInitPanel from '../paneler/fakta/SakenFaktaInitPanel';
import ArbeidsforholdFaktaInitPanel from '../paneler/fakta/ArbeidsforholdFaktaInitPanel';
import ArbeidOgInntektFaktaInitPanel from '../paneler/fakta/ArbeidOgInntektFaktaInitPanel';
import YtelserFaktaInitPanel from '../paneler/fakta/YtelserFaktaInitPanel';
import VergeFaktaInitPanel from '../../felles/fakta/paneler/VergeFaktaInitPanel';
import FodseltilretteleggingFaktaInitPanel from './faktaPaneler/FodseltilretteleggingFaktaInitPanel';
import MedlemskapsvilkaretFaktaInitPanel from '../paneler/fakta/MedlemskapsvilkaretFaktaInitPanel';
import OpptjeningsvilkaretFaktaInitPanel from '../paneler/fakta/OpptjeningsvilkaretFaktaInitPanel';
import BeregningFaktaInitPanel from '../paneler/fakta/BeregningFaktaInitPanel';
import FordelingFaktaInitPanel from '../paneler/fakta/FordelingFaktaInitPanel';
import OpplysningspliktProsessStegInitPanel from '../paneler/prosess/OpplysningspliktProsessStegInitPanel';
import InngangsvilkarSvpProsessStegInitPanel from './prosessPaneler/InngangsvilkarSvpProsessStegInitPanel';
import BeregningsgrunnlagProsessStegInitPanel from '../paneler/prosess/BeregningsgrunnlagProsessStegInitPanel';
import SoknadsfristProsessStegInitPanel from '../paneler/prosess/SoknadsfristProsessStegInitPanel';
import FortsattMedlemskapProsessStegInitPanel from '../paneler/prosess/FortsattMedlemskapProsessStegInitPanel';
import TilkjentYtelseProsessStegInitPanel from './prosessPaneler/TilkjentYtelseProsessStegInitPanel';
import SimuleringProsessStegInitPanel from '../paneler/prosess/SimuleringProsessStegInitPanel';
import VedtakSvpProsessStegInitPanel from './prosessPaneler/VedtakSvpProsessStegInitPanel';
import PermisjonFaktaInitPanel from '../paneler/fakta/PermisjonFaktaInitPanel';

const endepunkterSomSkalHentesEnGang = [
  { key: BehandlingFellesApiKeys.ARBEIDSGIVERE_OVERSIKT },
  { key: BehandlingFellesApiKeys.BEHANDLING_PERSONOVERSIKT },
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
    requestSvpApi, behandlingUuid, oppdaterBehandlingVersjon,
  );

  const { lagreAksjonspunkter, lagreOverstyrteAksjonspunkter } = useLagreAksjonspunkt(requestSvpApi, setBehandling);

  const skalIkkeViseModal = useInitBehandlingHandlinger(requestSvpApi, behandlingEventHandler, hentBehandling, setBehandling, behandling);

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
          requestApi={requestSvpApi}
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
              <MedlemskapsvilkaretFaktaInitPanel {...props} />
              <OpptjeningsvilkaretFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <PermisjonFaktaInitPanel {...props} saksnummer={fagsak.saksnummer} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <BeregningFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} rettigheter={rettigheter} />
              <FordelingFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
            </>
          )}
          hentProsessPaneler={(props, ekstraProps) => (
            <>
              <OpplysningspliktProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <InngangsvilkarSvpProsessStegInitPanel
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
              <VedtakSvpProsessStegInitPanel
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
