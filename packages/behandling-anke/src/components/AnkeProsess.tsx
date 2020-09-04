import React, {
  FunctionComponent, useState, useCallback, useMemo, useEffect,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  FagsakInfo, Rettigheter, prosessStegHooks, IverksetterVedtakStatusModal, ProsessStegPanel, ProsessStegContainer,
} from '@fpsak-frontend/behandling-felles';
import { Kodeverk, KodeverkMedNavn, Behandling } from '@fpsak-frontend/types';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';

import AnkeBehandlingModal from './AnkeBehandlingModal';
import prosessStegPanelDefinisjoner from '../panelDefinisjoner/prosessStegAnkePanelDefinisjoner';
import FetchedData from '../types/fetchedDataTsType';
import { restApiAnkeHooks, AnkeBehandlingApiKeys as AnkeBehandlingApiKeysNew } from '../data/ankeBehandlingApi';

import '@fpsak-frontend/assets/styles/arrowForProcessMenu.less';

interface OwnProps {
  data: FetchedData;
  fagsak: FagsakInfo;
  behandling: Behandling;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  rettigheter: Rettigheter;
  valgtProsessSteg?: string;
  oppdaterBehandlingVersjon: (versjon: number) => void;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  opneSokeside: () => void;
  alleBehandlinger: {
    id: number;
    type: Kodeverk;
    avsluttet?: string;
  }[];
  setBehandling: (behandling: Behandling) => void;
}

const forhandsvis = (data) => {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(data);
  } else if (URL.createObjectURL) {
    window.open(URL.createObjectURL(data));
  }
};

const saveAnkeText = (lagreOgReapneAnkeVurdering, lagreAnkeVurdering, behandling, aksjonspunkter) => (aksjonspunktModel) => {
  const data = {
    behandlingId: behandling.id,
    ...aksjonspunktModel,
  };

  const getForeslaVedtakAp = aksjonspunkter
    .filter((ap) => ap.status.kode === aksjonspunktStatus.OPPRETTET)
    .filter((ap) => ap.definisjon.kode === aksjonspunktCodes.FORESLA_VEDTAK);

  if (getForeslaVedtakAp.length === 1) {
    lagreOgReapneAnkeVurdering(data);
  } else {
    lagreAnkeVurdering(data);
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

const getLagringSideeffekter = (toggleIverksetterVedtakModal, toggleAnkeModal, toggleOppdatereFagsakContext,
  oppdaterProsessStegOgFaktaPanelIUrl) => (aksjonspunktModels) => {
  const skalTilMedunderskriver = aksjonspunktModels
    .some((apValue) => apValue.kode === aksjonspunktCodes.FORESLA_VEDTAK);
  const skalFerdigstilles = aksjonspunktModels
    .some((apValue) => apValue.kode === aksjonspunktCodes.VEDTAK_UTEN_TOTRINNSKONTROLL);
  const erManuellVurderingAvAnke = aksjonspunktModels
    .some((apValue) => apValue.kode === aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER);

  if (skalTilMedunderskriver || skalFerdigstilles || erManuellVurderingAvAnke) {
    toggleOppdatereFagsakContext(false);
  }

  // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
  return () => {
    if (skalTilMedunderskriver || skalFerdigstilles) {
      toggleAnkeModal(true);
    } else if (erManuellVurderingAvAnke) {
      toggleIverksetterVedtakModal(true);
    } else {
      oppdaterProsessStegOgFaktaPanelIUrl('default', 'default');
    }
  };
};

const AnkeProsess: FunctionComponent<OwnProps> = ({
  data,
  fagsak,
  behandling,
  alleKodeverk,
  rettigheter,
  valgtProsessSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  oppdaterBehandlingVersjon,
  opneSokeside,
  alleBehandlinger,
  setBehandling,
}) => {
  const toggleSkalOppdatereFagsakContext = prosessStegHooks.useOppdateringAvBehandlingsversjon(behandling.versjon, oppdaterBehandlingVersjon);

  const { startRequest: lagreAksjonspunkter, data: apBehandlingRes } = restApiAnkeHooks
    .useRestApiRunner<Behandling>(AnkeBehandlingApiKeysNew.SAVE_AKSJONSPUNKT);
  const { startRequest: lagreOverstyrteAksjonspunkter, data: apOverstyrtBehandlingRes } = restApiAnkeHooks
    .useRestApiRunner<Behandling>(AnkeBehandlingApiKeysNew.SAVE_AKSJONSPUNKT);
  const { startRequest: forhandsvisMelding } = restApiAnkeHooks.useRestApiRunner(AnkeBehandlingApiKeysNew.PREVIEW_MESSAGE);
  const { startRequest: lagreOgReapneAnkeVurdering, data: behandlingRes } = restApiAnkeHooks
    .useRestApiRunner<Behandling>(AnkeBehandlingApiKeysNew.SAVE_REOPEN_ANKE_VURDERING);
  const { startRequest: lagreAnkeVurdering } = restApiAnkeHooks.useRestApiRunner(AnkeBehandlingApiKeysNew.SAVE_ANKE_VURDERING);

  useEffect(() => {
    if (apBehandlingRes) {
      setBehandling(apBehandlingRes);
    }
  }, [apBehandlingRes]);
  useEffect(() => {
    if (apOverstyrtBehandlingRes) {
      setBehandling(apOverstyrtBehandlingRes);
    }
  }, [apOverstyrtBehandlingRes]);
  useEffect(() => {
    if (behandlingRes) {
      setBehandling(behandlingRes);
    }
  }, [behandlingRes]);

  const dataTilUtledingAvFpPaneler = {
    alleBehandlinger,
    ankeVurdering: data.ankeVurdering,
    saveAnke: useCallback(saveAnkeText(lagreOgReapneAnkeVurdering, lagreAnkeVurdering, behandling, data.aksjonspunkter), [behandling.versjon]),
    previewCallback: useCallback(previewCallback(forhandsvisMelding, fagsak, behandling), [behandling.versjon]),
    ...data,
  };
  const [prosessStegPaneler, valgtPanel, formaterteProsessStegPaneler] = prosessStegHooks.useProsessStegPaneler(prosessStegPanelDefinisjoner,
    dataTilUtledingAvFpPaneler, fagsak, rettigheter, behandling, data.aksjonspunkter, data.vilkar, false, valgtProsessSteg);

  const [visIverksetterVedtakModal, toggleIverksetterVedtakModal] = useState(false);
  const [visModalAnkeBehandling, toggleAnkeModal] = useState(false);
  const lagringSideeffekterCallback = getLagringSideeffekter(toggleIverksetterVedtakModal, toggleAnkeModal, toggleSkalOppdatereFagsakContext,
    oppdaterProsessStegOgFaktaPanelIUrl);

  const velgProsessStegPanelCallback = prosessStegHooks.useProsessStegVelger(prosessStegPaneler, 'undefined', behandling,
    oppdaterProsessStegOgFaktaPanelIUrl, valgtProsessSteg, valgtPanel);

  const erFerdigbehandlet = useMemo(() => data.aksjonspunkter
    .some((ap) => ap.definisjon.kode === aksjonspunktCodes.VEDTAK_UTEN_TOTRINNSKONTROLL && ap.status.kode === aksjonspunktStatus.UTFORT),
  [behandling.versjon]);

  return (
    <>
      <IverksetterVedtakStatusModal
        visModal={visIverksetterVedtakModal}
        lukkModal={useCallback(() => { toggleIverksetterVedtakModal(false); opneSokeside(); }, [])}
        behandlingsresultat={behandling.behandlingsresultat}
      />
      <AnkeBehandlingModal
        visModal={visModalAnkeBehandling}
        lukkModal={useCallback(() => { toggleAnkeModal(false); opneSokeside(); }, [])}
        erFerdigbehandlet={erFerdigbehandlet}
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
          lagreOverstyrteAksjonspunkter={lagreOverstyrteAksjonspunkter}
          useMultipleRestApi={restApiAnkeHooks.useMultipleRestApi}
        />
      </ProsessStegContainer>
    </>
  );
};

export default AnkeProsess;
