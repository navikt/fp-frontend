import React, { FunctionComponent } from 'react';

import { ArbeidsgiverOpplysningerWrapper, Personoversikt } from '@navikt/fp-types';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

import { BehandlingFellesApiKeys } from '../../felles/data/behandlingFellesApi';
import StandardBehandlingProps from '../../felles/typer/standardBehandlingProps';
import BehandlingPaVent from '../../felles/modaler/paVent/BehandlingPaVent';
import StandardPropsProvider from '../../felles/utils/standardPropsStateContext';
import {
  useBehandling,
  useInitBehandlingHandlinger,
  useInitRequestApi,
  useLagreAksjonspunkt,
} from '../../felles/utils/indexHooks';
import { restApiEsHooks, requestEsApi } from './data/esBehandlingApi';
import BehandlingContainerWrapperEngangsstonad from './BehandlingContainerWrapperEngangsstonad';

const endepunkterSomSkalHentesEnGang = [
  { key: BehandlingFellesApiKeys.ARBEIDSGIVERE_OVERSIKT },
  { key: BehandlingFellesApiKeys.BEHANDLING_PERSONOVERSIKT },
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

  const { behandling, behandlingState, hentBehandling, setBehandling, toggleOppdateringAvFagsakOgBehandling } =
    useBehandling(requestEsApi, behandlingUuid, oppdaterBehandlingVersjon);

  const { lagreAksjonspunkter, lagreOverstyrteAksjonspunkter } = useLagreAksjonspunkt(requestEsApi, setBehandling);

  useInitBehandlingHandlinger(requestEsApi, behandlingEventHandler, hentBehandling, setBehandling, behandling);

  const { data: opplysningsdata, state: opplysningsdataState } = restApiEsHooks.useMultipleRestApi<
    {
      arbeidsgivereOversikt: ArbeidsgiverOpplysningerWrapper;
      behandlingPersonoversikt: Personoversikt;
    },
    void
  >(endepunkterSomSkalHentesEnGang, {
    updateTriggers: [behandling?.versjon],
    suspendRequest: !behandling,
  });

  const harIkkeHentetArbeidsgiverOpplysninger =
    opplysningsdataState === RestApiState.LOADING || opplysningsdataState === RestApiState.NOT_STARTED;

  if (!behandling || harIkkeHentetArbeidsgiverOpplysninger || !opplysningsdata) {
    return <LoadingPanel />;
  }

  const {
    arbeidsgivereOversikt: { arbeidsgivere },
    behandlingPersonoversikt: personoversikt,
  } = opplysningsdata;

  return (
    <>
      <BehandlingPaVent
        behandling={behandling}
        hentBehandling={hentBehandling}
        kodeverk={kodeverk}
        requestApi={requestEsApi}
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
        <BehandlingContainerWrapperEngangsstonad
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
        />
      </StandardPropsProvider>
    </>
  );
};

export default BehandlingEngangsstonadIndex;
