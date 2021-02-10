import React, {
  FunctionComponent, useEffect, useState, useCallback,
} from 'react';

import { useSetBehandlingVedEndring } from '@fpsak-frontend/behandling-felles';
import { ArbeidsgiverOpplysningerWrapper, Behandling } from '@fpsak-frontend/types';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState, useRestApiErrorDispatcher } from '@fpsak-frontend/rest-api-hooks';
import { BehandlingContainer, StandardBehandlingProps, StandardPropsProvider } from '@fpsak-frontend/behandling-felles-ny';

import { restApiFpHooks, requestFpApi, FpBehandlingApiKeys } from './data/fpBehandlingApi';
import SakenFaktaPanelDef from './faktaPaneler/SakenFaktaPanelDef';
import ArbeidsforholdFaktaPanelDef from './faktaPaneler/ArbeidsforholdFaktaPanelDef';
import YtelserFaktaPanelDef from './faktaPaneler/YtelserFaktaPanelDef';
import FodselvilkaretFaktaPanelDef from './faktaPaneler/FodselvilkaretFaktaPanelDef';
import MedlemskapsvilkaretFaktaPanelDef from './faktaPaneler/MedlemskapsvilkaretFaktaPanelDef';
import UttakFaktaPanelDef from './faktaPaneler/UttakFaktaPanelDef';
import OpplysningspliktProsessStegPanelDef from './prosessPaneler/OpplysningspliktProsessStegPanelDef';
import InngangsvilkarProsessStegPanelDef from './prosessPaneler/InngangsvilkarProsessStegPanelDef';

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
  const [nyOgForrigeBehandling, setBehandlinger] = useState<{ current?: Behandling; previous?: Behandling }>({ current: undefined, previous: undefined });
  const behandling = nyOgForrigeBehandling.current;
  // const forrigeBehandling = nyOgForrigeBehandling.previous;

  const setBehandling = useCallback((nyBehandling) => {
    requestFpApi.resetCache();
    requestFpApi.setLinks(nyBehandling.links);
    setBehandlinger((prevState) => ({ current: nyBehandling, previous: prevState.current }));
  }, []);

  const { startRequest: hentBehandling, data: behandlingRes, state: behandlingState } = restApiFpHooks
    .useRestApiRunner<Behandling>(FpBehandlingApiKeys.BEHANDLING_FP);
  useSetBehandlingVedEndring(behandlingRes, setBehandling);

  const { addErrorMessage } = useRestApiErrorDispatcher();

  const { startRequest: nyBehandlendeEnhet } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET);
  const { startRequest: settBehandlingPaVent } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.BEHANDLING_ON_HOLD);
  const { startRequest: taBehandlingAvVent } = restApiFpHooks.useRestApiRunner<Behandling>(FpBehandlingApiKeys.RESUME_BEHANDLING);
  const { startRequest: henleggBehandling } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.HENLEGG_BEHANDLING);
  const { startRequest: settPaVent } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.UPDATE_ON_HOLD);
  const { startRequest: opneBehandlingForEndringer } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.OPEN_BEHANDLING_FOR_CHANGES);
  const { startRequest: opprettVerge } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.VERGE_OPPRETT);
  const { startRequest: fjernVerge } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.VERGE_FJERN);
  const { startRequest: lagreRisikoklassifiseringAksjonspunkt } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.SAVE_AKSJONSPUNKT);

  const { startRequest: lagreAksjonspunkter, data: apBehandlingRes } = restApiFpHooks.useRestApiRunner<Behandling>(FpBehandlingApiKeys.SAVE_AKSJONSPUNKT);
  useSetBehandlingVedEndring(apBehandlingRes, setBehandling);

  const { startRequest: lagreOverstyrteAksjonspunkter, data: apOverstyrtBehandlingRes } = restApiFpHooks
    .useRestApiRunner<Behandling>(FpBehandlingApiKeys.SAVE_OVERSTYRT_AKSJONSPUNKT);
  useSetBehandlingVedEndring(apOverstyrtBehandlingRes, setBehandling);

  useEffect(() => {
    behandlingEventHandler.setHandler({
      endreBehandlendeEnhet: (params) => nyBehandlendeEnhet(params)
        .then(() => hentBehandling({ behandlingId }, true)),
      settBehandlingPaVent: (params) => settBehandlingPaVent(params)
        .then(() => hentBehandling({ behandlingId }, true)),
      taBehandlingAvVent: (params) => taBehandlingAvVent(params)
        .then((behandlingResTaAvVent) => setBehandling(behandlingResTaAvVent)),
      henleggBehandling: (params) => henleggBehandling(params),
      opneBehandlingForEndringer: (params) => opneBehandlingForEndringer(params)
        .then((behandlingResOpneForEndring) => setBehandling(behandlingResOpneForEndring)),
      opprettVerge: (params) => opprettVerge(params)
        .then((behandlingResOpprettVerge) => setBehandling(behandlingResOpprettVerge)),
      fjernVerge: (params) => fjernVerge(params)
        .then((behandlingResFjernVerge) => setBehandling(behandlingResFjernVerge)),
      lagreRisikoklassifiseringAksjonspunkt: (params) => lagreRisikoklassifiseringAksjonspunkt(params),
    });

    requestFpApi.setRequestPendingHandler(setRequestPendingMessage);
    requestFpApi.setAddErrorMessageHandler(addErrorMessage);

    hentBehandling({ behandlingId }, false);

    return () => {
      behandlingEventHandler.clear();
    };
  }, []);

  const { data: arbeidsgiverOpplysninger, state: arbeidOppState } = restApiFpHooks.useRestApi<ArbeidsgiverOpplysningerWrapper>(
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
    fagsakPerson,
    rettigheter,
    oppdaterBehandlingVersjon,
    settPaVent,
    hentBehandling,
    opneSokeside,
    setBehandling,
    hasFetchError: behandlingState === RestApiState.ERROR,
    alleKodeverk: kodeverk,
    lagreAksjonspunkter,
    lagreOverstyrteAksjonspunkter,
    oppdaterProsessStegOgFaktaPanelIUrl,
  };

  return (
    <StandardPropsProvider initialState={standardProps}>
      <BehandlingContainer
        behandling={behandling}
        valgtProsessSteg={valgtProsessSteg}
        valgtFaktaSteg={valgtFaktaSteg}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        faktaPaneler={[
          (props) => <SakenFaktaPanelDef {...props} />,
          (props) => <ArbeidsforholdFaktaPanelDef {...props} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger.arbeidsgivere} />,
          (props) => <YtelserFaktaPanelDef {...props} />,
          (props) => <FodselvilkaretFaktaPanelDef {...props} />,
          (props) => (
            <MedlemskapsvilkaretFaktaPanelDef
              {...props}
              fagsakPerson={fagsakPerson}
              rettigheter={rettigheter}
              hasFetchError={behandlingState === RestApiState.ERROR}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger.arbeidsgivere}
            />
          ),
          (props) => <UttakFaktaPanelDef {...props} rettigheter={rettigheter} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger.arbeidsgivere} />,
        ]}
        prosessPaneler={[
          (props) => <OpplysningspliktProsessStegPanelDef {...props} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger.arbeidsgivere} />,
          (props) => <InngangsvilkarProsessStegPanelDef {...props} rettigheter={rettigheter} />,
        ]}
      />
    </StandardPropsProvider>
  );
};

export default BehandlingForeldrepengerIndex;
