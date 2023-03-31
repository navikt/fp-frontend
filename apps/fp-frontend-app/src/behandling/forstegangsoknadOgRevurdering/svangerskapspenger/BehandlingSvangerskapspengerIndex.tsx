import React, { FunctionComponent } from 'react';

import { ArbeidsgiverOpplysningerWrapper, Personoversikt } from '@navikt/fp-types';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

import { BehandlingFellesApiKeys } from '../../felles/data/behandlingFellesApi';
import StandardBehandlingProps from '../../felles/typer/standardBehandlingProps';
import BehandlingPaVent from '../../felles/modaler/paVent/BehandlingPaVent';
import StandardPropsProvider from '../../felles/utils/standardPropsStateContext';
import {
  useBehandling, useInitBehandlingHandlinger, useInitRequestApi, useLagreAksjonspunkt,
} from '../../felles/utils/indexHooks';
import { restApiSvpHooks, requestSvpApi } from './data/svpBehandlingApi';
import BehandlingContainerWrapperSvangerskapspenger from './BehandlingContainerWrapperSvangerskapspenger';

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
        <BehandlingContainerWrapperSvangerskapspenger
          behandling={behandling}
          fagsak={fagsak}
          valgtProsessSteg={valgtProsessSteg}
          valgtFaktaSteg={valgtFaktaSteg}
          oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
          opneSokeside={opneSokeside}
          toggleOppdateringAvFagsakOgBehandling={toggleOppdateringAvFagsakOgBehandling}
          arbeidsgivere={arbeidsgivere}
          personoversikt={personoversikt}
          rettigheter={rettigheter}
          hentBehandling={hentBehandling}
          behandlingEventHandler={behandlingEventHandler}
        />
      </StandardPropsProvider>
    </>
  );
};

export default BehandlingSvangerskapspengerIndex;
