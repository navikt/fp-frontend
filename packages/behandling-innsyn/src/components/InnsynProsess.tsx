import React, {
  FunctionComponent, useState, useCallback,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Rettigheter, prosessStegHooks, IverksetterVedtakStatusModal, ProsessStegPanel,
  ProsessStegContainer, useSetBehandlingVedEndring,
} from '@fpsak-frontend/behandling-felles';
import { KodeverkMedNavn, Behandling, Fagsak } from '@fpsak-frontend/types';

import prosessStegPanelDefinisjoner from '../panelDefinisjoner/prosessStegInnsynPanelDefinisjoner';
import FetchedData from '../types/fetchedDataTsType';
import { restApiInnsynHooks, InnsynBehandlingApiKeys } from '../data/innsynBehandlingApi';

import '@fpsak-frontend/assets/styles/arrowForProcessMenu.less';

interface OwnProps {
  data: FetchedData;
  fagsak: Fagsak;
  behandling: Behandling;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  rettigheter: Rettigheter;
  valgtProsessSteg?: string;
  oppdaterBehandlingVersjon: (versjon: number) => void;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  opneSokeside: () => void;
  setBehandling: (behandling: Behandling) => void;
}

const forhandsvis = (data) => {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(data);
  } else if (URL.createObjectURL) {
    window.open(URL.createObjectURL(data));
  }
};

const previewCallback = (forhandsvisMelding, fagsak, behandling) => (data) => {
  const brevData = {
    ...data,
    behandlingUuid: behandling.uuid,
    ytelseType: fagsak.fagsakYtelseType,
  };
  return forhandsvisMelding(brevData).then((response) => forhandsvis(response));
};

const getLagringSideeffekter = (toggleIverksetterVedtakModal, toggleOppdatereFagsakContext, oppdaterProsessStegOgFaktaPanelIUrl) => (aksjonspunktModels) => {
  const isVedtak = aksjonspunktModels.some((a) => a.kode === aksjonspunktCodes.FORESLA_VEDTAK);

  if (isVedtak) {
    toggleOppdatereFagsakContext(false);
  }

  // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
  return () => {
    if (isVedtak) {
      toggleIverksetterVedtakModal(true);
    } else {
      oppdaterProsessStegOgFaktaPanelIUrl('default', 'default');
    }
  };
};

const InnsynProsess: FunctionComponent<OwnProps> = ({
  data,
  fagsak,
  behandling,
  alleKodeverk,
  rettigheter,
  valgtProsessSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  oppdaterBehandlingVersjon,
  opneSokeside,
  setBehandling,
}) => {
  const toggleSkalOppdatereFagsakContext = prosessStegHooks.useOppdateringAvBehandlingsversjon(behandling.versjon, oppdaterBehandlingVersjon);

  const { startRequest: lagreAksjonspunkter, data: apBehandlingRes } = restApiInnsynHooks
    .useRestApiRunner<Behandling>(InnsynBehandlingApiKeys.SAVE_AKSJONSPUNKT);
  const { startRequest: forhandsvisMelding } = restApiInnsynHooks.useRestApiRunner(InnsynBehandlingApiKeys.PREVIEW_MESSAGE);

  useSetBehandlingVedEndring(apBehandlingRes, setBehandling);

  const dataTilUtledingAvFpPaneler = {
    alleDokumenter: data.innsynDokumenter,
    innsyn: data.innsyn,
    previewCallback: useCallback(previewCallback(forhandsvisMelding, fagsak, behandling), [behandling.versjon]),
    ...data,
  };
  const [prosessStegPaneler, valgtPanel, formaterteProsessStegPaneler] = prosessStegHooks.useProsessStegPaneler(prosessStegPanelDefinisjoner,
    dataTilUtledingAvFpPaneler, fagsak, rettigheter, behandling, data.aksjonspunkter, data.vilkar, false, valgtProsessSteg);

  const [visIverksetterVedtakModal, toggleIverksetterVedtakModal] = useState(false);
  const lagringSideeffekterCallback = getLagringSideeffekter(toggleIverksetterVedtakModal, toggleSkalOppdatereFagsakContext,
    oppdaterProsessStegOgFaktaPanelIUrl);

  const velgProsessStegPanelCallback = prosessStegHooks.useProsessStegVelger(prosessStegPaneler, 'undefined', behandling,
    oppdaterProsessStegOgFaktaPanelIUrl, valgtProsessSteg, valgtPanel);

  return (
    <>
      <IverksetterVedtakStatusModal
        visModal={visIverksetterVedtakModal}
        lukkModal={useCallback(() => { toggleIverksetterVedtakModal(false); opneSokeside(); }, [])}
        behandlingsresultat={behandling.behandlingsresultat}
      />
      <ProsessStegContainer
        formaterteProsessStegPaneler={formaterteProsessStegPaneler}
        velgProsessStegPanelCallback={velgProsessStegPanelCallback}
      >
        <ProsessStegPanel
          valgtProsessSteg={valgtPanel}
          fagsak={fagsak}
          behandling={behandling}
          alleKodeverk={alleKodeverk}
          lagringSideeffekterCallback={lagringSideeffekterCallback}
          lagreAksjonspunkter={lagreAksjonspunkter}
          useMultipleRestApi={restApiInnsynHooks.useMultipleRestApi}
        />
      </ProsessStegContainer>
    </>
  );
};

export default InnsynProsess;
