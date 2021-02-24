import React, {
  FunctionComponent, useState, useCallback,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import {
  Rettigheter, prosessStegHooks, IverksetterVedtakStatusModal, ProsessStegPanel,
  FatterVedtakStatusModal, ProsessStegContainer, useSetBehandlingVedEndring,
} from '@fpsak-frontend/behandling-felles';
import {
  Fagsak, KodeverkMedNavn, Behandling, FagsakPerson, ArbeidsgiverOpplysningerPerId, Personoversikt,
} from '@fpsak-frontend/types';

import prosessStegPanelDefinisjoner from '../panelDefinisjoner/prosessStegEsPanelDefinisjoner';
import FetchedData from '../types/fetchedDataTsType';
import { restApiEsHooks, EsBehandlingApiKeys } from '../data/esBehandlingApi';

import '@fpsak-frontend/assets/styles/arrowForProcessMenu.less';

const forhandsvis = (data: any) => {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(data);
  } else if (URL.createObjectURL) {
    window.open(URL.createObjectURL(data));
  }
};

interface OwnProps {
  data: FetchedData;
  fagsak: Fagsak;
  fagsakPerson: FagsakPerson;
  behandling: Behandling;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  rettigheter: Rettigheter;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  hasFetchError: boolean;
  oppdaterBehandlingVersjon: (versjon: number) => void;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  opneSokeside: () => void;
  apentFaktaPanelInfo?: { urlCode: string; textCode: string };
  setBehandling: (behandling: Behandling) => void;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

const getForhandsvisCallback = (forhandsvisMelding: (data: any) => Promise<any>, fagsak: Fagsak, behandling: Behandling) => (data: any) => {
  const brevData = {
    ...data,
    behandlingUuid: behandling.uuid,
    ytelseType: fagsak.sakstype,
  };
  return forhandsvisMelding(brevData).then((response) => forhandsvis(response));
};

const getForhandsvisFptilbakeCallback = (forhandsvisTilbakekrevingMelding: (data: any) => Promise<any>, fagsak: Fagsak, behandling: Behandling) => (
  mottaker: string, brevmalkode: string, fritekst: string, saksnummer: string,
) => {
  const data = {
    behandlingUuid: behandling.uuid,
    fagsakYtelseType: fagsak.sakstype,
    varseltekst: fritekst || '',
    mottaker,
    brevmalkode,
    saksnummer,
  };
  return forhandsvisTilbakekrevingMelding(data).then((response) => forhandsvis(response));
};

const getLagringSideeffekter = (toggleIverksetterVedtakModal, toggleFatterVedtakModal, toggleOppdatereFagsakContext, oppdaterProsessStegOgFaktaPanelIUrl,
  opneSokeside) => (aksjonspunktModels) => {
  const erRevurderingsaksjonspunkt = aksjonspunktModels.some((apModel) => ((apModel.kode === aksjonspunktCodes.VARSEL_REVURDERING_MANUELL
    || apModel.kode === aksjonspunktCodes.VARSEL_REVURDERING_ETTERKONTROLL) && apModel.sendVarsel));
  const visIverksetterVedtakModal = aksjonspunktModels[0].isVedtakSubmission
    && [aksjonspunktCodes.VEDTAK_UTEN_TOTRINNSKONTROLL, aksjonspunktCodes.FATTER_VEDTAK].includes(aksjonspunktModels[0].kode);
  const visFatterVedtakModal = aksjonspunktModels[0].isVedtakSubmission && aksjonspunktModels[0].kode === aksjonspunktCodes.FORESLA_VEDTAK;
  const isVedtakAp = aksjonspunktModels.some((a) => a.isVedtakSubmission);

  if (visIverksetterVedtakModal || visFatterVedtakModal || erRevurderingsaksjonspunkt || isVedtakAp) {
    toggleOppdatereFagsakContext(false);
  }

  // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
  return () => {
    if (visFatterVedtakModal) {
      toggleFatterVedtakModal(true);
    } else if (visIverksetterVedtakModal) {
      toggleIverksetterVedtakModal(true);
    } else if (erRevurderingsaksjonspunkt) {
      opneSokeside();
    } else {
      oppdaterProsessStegOgFaktaPanelIUrl('default', 'default');
    }
  };
};

const EngangsstonadProsess: FunctionComponent<OwnProps> = ({
  data,
  fagsak,
  fagsakPerson,
  behandling,
  alleKodeverk,
  rettigheter,
  valgtProsessSteg,
  valgtFaktaSteg,
  hasFetchError,
  oppdaterBehandlingVersjon,
  oppdaterProsessStegOgFaktaPanelIUrl,
  opneSokeside,
  apentFaktaPanelInfo,
  setBehandling,
  arbeidsgiverOpplysningerPerId,
  personoversikt,
}) => {
  const toggleSkalOppdatereFagsakContext = prosessStegHooks.useOppdateringAvBehandlingsversjon(behandling.versjon, oppdaterBehandlingVersjon);

  const { startRequest: lagreAksjonspunkter, data: apBehandlingRes } = restApiEsHooks
    .useRestApiRunner<Behandling>(EsBehandlingApiKeys.SAVE_AKSJONSPUNKT);
  const { startRequest: lagreOverstyrteAksjonspunkter, data: apOverstyrtBehandlingRes } = restApiEsHooks
    .useRestApiRunner<Behandling>(EsBehandlingApiKeys.SAVE_OVERSTYRT_AKSJONSPUNKT);
  const { startRequest: forhandsvisMelding } = restApiEsHooks.useRestApiRunner(EsBehandlingApiKeys.PREVIEW_MESSAGE);
  const { startRequest: forhandsvisTilbakekrevingMelding } = restApiEsHooks
    .useRestApiRunner<Behandling>(EsBehandlingApiKeys.PREVIEW_TILBAKEKREVING_MESSAGE);

  useSetBehandlingVedEndring(apBehandlingRes, setBehandling);
  useSetBehandlingVedEndring(apOverstyrtBehandlingRes, setBehandling);

  const dataTilUtledingAvEsPaneler = {
    fagsakPerson,
    previewCallback: useCallback(getForhandsvisCallback(forhandsvisMelding, fagsak, behandling), [behandling.versjon]),
    previewFptilbakeCallback: useCallback(getForhandsvisFptilbakeCallback(forhandsvisTilbakekrevingMelding, fagsak, behandling), [behandling.versjon]),
    alleKodeverk,
    arbeidsgiverOpplysningerPerId,
    personoversikt,
    ...data,
  };
  const [prosessStegPaneler, valgtPanel, formaterteProsessStegPaneler] = prosessStegHooks.useProsessStegPaneler(prosessStegPanelDefinisjoner,
    dataTilUtledingAvEsPaneler, fagsak, rettigheter, behandling, data.aksjonspunkter, data.vilkar, hasFetchError, valgtProsessSteg, apentFaktaPanelInfo);

  const [visIverksetterVedtakModal, toggleIverksetterVedtakModal] = useState(false);
  const [visFatterVedtakModal, toggleFatterVedtakModal] = useState(false);
  const lagringSideeffekterCallback = getLagringSideeffekter(toggleIverksetterVedtakModal, toggleFatterVedtakModal, toggleSkalOppdatereFagsakContext,
    oppdaterProsessStegOgFaktaPanelIUrl, opneSokeside);

  const velgProsessStegPanelCallback = prosessStegHooks.useProsessStegVelger(prosessStegPaneler, valgtFaktaSteg, behandling,
    oppdaterProsessStegOgFaktaPanelIUrl, valgtProsessSteg, valgtPanel);

  return (
    <>
      <IverksetterVedtakStatusModal
        visModal={visIverksetterVedtakModal}
        lukkModal={useCallback(() => { toggleIverksetterVedtakModal(false); opneSokeside(); }, [])}
        behandlingsresultat={behandling.behandlingsresultat}
      />
      <FatterVedtakStatusModal
        visModal={visFatterVedtakModal && behandling.status.kode === behandlingStatus.FATTER_VEDTAK}
        lukkModal={useCallback(() => { toggleFatterVedtakModal(false); opneSokeside(); }, [])}
        tekstkode="FatterVedtakStatusModal.SendtBeslutter"
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
          apentFaktaPanelInfo={apentFaktaPanelInfo}
          oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
          lagringSideeffekterCallback={lagringSideeffekterCallback}
          lagreAksjonspunkter={lagreAksjonspunkter}
          lagreOverstyrteAksjonspunkter={lagreOverstyrteAksjonspunkter}
          useMultipleRestApi={restApiEsHooks.useMultipleRestApi}
        />
      </ProsessStegContainer>
    </>
  );
};

export default EngangsstonadProsess;
