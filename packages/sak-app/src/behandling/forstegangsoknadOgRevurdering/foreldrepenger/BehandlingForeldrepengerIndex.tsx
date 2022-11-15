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
import { restApiFpHooks, requestFpApi } from './data/fpBehandlingApi';
import SakenFaktaInitPanel from '../paneler/fakta/SakenFaktaInitPanel';
import ArbeidsforholdFaktaInitPanel from '../paneler/fakta/ArbeidsforholdFaktaInitPanel';
import ArbeidOgInntektFaktaInitPanel from '../paneler/fakta/ArbeidOgInntektFaktaInitPanel';
import YtelserFaktaInitPanel from '../paneler/fakta/YtelserFaktaInitPanel';
import VergeFaktaInitPanel from '../paneler/fakta/VergeFaktaInitPanel';
import OmsorgvilkaretFaktaInitPanel from '../paneler/fakta/OmsorgvilkaretFaktaInitPanel';
import FordelingFaktaInitPanel from '../paneler/fakta/FordelingFaktaInitPanel';
import FodselvilkaretFaktaInitPanel from '../paneler/fakta/FodselvilkaretFaktaInitPanel';
import BesteberegningFaktaInitPanel from './faktaPaneler/BesteberegningFaktaInitPanel';
import AdopsjonsvilkaretFaktaInitPanel from '../paneler/fakta/AdopsjonsvilkaretFaktaInitPanel';
import MedlemskapsvilkaretFaktaInitPanel from '../paneler/fakta/MedlemskapsvilkaretFaktaInitPanel';
import OpptjeningsvilkaretFaktaInitPanel from '../paneler/fakta/OpptjeningsvilkaretFaktaInitPanel';
import BeregningFaktaInitPanel from '../paneler/fakta/BeregningFaktaInitPanel';
import OmsorgFaktaInitPanel from './faktaPaneler/OmsorgFaktaInitPanel';
import UttakFaktaLegacyInitPanel from './faktaPaneler/UttakFaktaLegacyInitPanel';
import UttakFaktaInitPanel from './faktaPaneler/UttakFaktaInitPanel';
import PermisjonFaktaInitPanel from '../paneler/fakta/PermisjonFaktaInitPanel';
import AktivitetskravFaktaInitPanel from './faktaPaneler/AktivitetskravFaktaInitPanel';
import VarselProsessStegInitPanel from '../paneler/prosess/VarselProsessStegInitPanel';
import OpplysningspliktProsessStegInitPanel from '../paneler/prosess/OpplysningspliktProsessStegInitPanel';
import InngangsvilkarFpProsessStegInitPanel from './prosessPaneler/InngangsvilkarFpProsessStegInitPanel';
import FortsattMedlemskapProsessStegInitPanel from '../paneler/prosess/FortsattMedlemskapProsessStegInitPanel';
import BeregningsgrunnlagProsessStegInitPanel from '../paneler/prosess/BeregningsgrunnlagProsessStegInitPanel';
import UttakProsessStegInitPanel from './prosessPaneler/UttakProsessStegInitPanel';
import TilkjentYtelseFpProsessStegInitPanel from './prosessPaneler/TilkjentYtelseFpProsessStegInitPanel';
import SimuleringProsessStegInitPanel from '../paneler/prosess/SimuleringProsessStegInitPanel';
import VedtakFpProsessStegInitPanel from './prosessPaneler/VedtakFpProsessStegInitPanel';
import SoknadsfristProsessStegInitPanel from '../paneler/prosess/SoknadsfristProsessStegInitPanel';
import OmsorgOgRettFaktaInitPanel from './faktaPaneler/OmsorgOgRettFaktaInitPanel';
import UttakDokumentasjonFaktaInitPanel from './faktaPaneler/UttakDokumentasjonFaktaInitPanel';

const endepunkterSomSkalHentesEnGang = [
  { key: BehandlingFellesApiKeys.ARBEIDSGIVERE_OVERSIKT },
  { key: BehandlingFellesApiKeys.BEHANDLING_PERSONOVERSIKT },
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
    requestFpApi, behandlingUuid, oppdaterBehandlingVersjon,
  );

  const { lagreAksjonspunkter, lagreOverstyrteAksjonspunkter } = useLagreAksjonspunkt(requestFpApi, setBehandling);

  const skalIkkeViseModal = useInitBehandlingHandlinger(requestFpApi, behandlingEventHandler, hentBehandling, setBehandling, behandling);

  const { data: opplysningsdata, state: opplysningsdataState } = restApiFpHooks.useMultipleRestApi<{
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
        requestApi={requestFpApi}
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
          requestApi={requestFpApi}
          hentFaktaPaneler={(props) => (
            <>
              <SakenFaktaInitPanel {...props} fagsak={fagsak} />
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
              <OmsorgvilkaretFaktaInitPanel {...props} personoversikt={personoversikt} />
              <AdopsjonsvilkaretFaktaInitPanel {...props} fagsak={fagsak} />
              <FodselvilkaretFaktaInitPanel {...props} />
              <MedlemskapsvilkaretFaktaInitPanel {...props} />
              <OpptjeningsvilkaretFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <PermisjonFaktaInitPanel {...props} saksnummer={fagsak.saksnummer} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <BeregningFaktaInitPanel {...props} rettigheter={rettigheter} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <BesteberegningFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <FordelingFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
              <OmsorgOgRettFaktaInitPanel {...props} personoversikt={personoversikt} />
              <OmsorgFaktaInitPanel {...props} personoversikt={personoversikt} />
              <UttakFaktaInitPanel {...props} rettigheter={rettigheter} />
              <UttakFaktaLegacyInitPanel {...props} rettigheter={rettigheter} arbeidsgiverOpplysningerPerId={arbeidsgivere} personoversikt={personoversikt} />
              <AktivitetskravFaktaInitPanel {...props} />
              <UttakDokumentasjonFaktaInitPanel {...props} />
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
              <InngangsvilkarFpProsessStegInitPanel
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
              <TilkjentYtelseFpProsessStegInitPanel
                {...props}
                fagsak={fagsak}
                arbeidsgiverOpplysningerPerId={arbeidsgivere}
                personoversikt={personoversikt}
              />
              <SimuleringProsessStegInitPanel {...props} fagsak={fagsak} menyData={ekstraProps.allMenyData} />
              <VedtakFpProsessStegInitPanel
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
