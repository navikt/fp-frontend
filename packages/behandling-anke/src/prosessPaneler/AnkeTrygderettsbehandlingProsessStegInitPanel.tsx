import React, {
  FunctionComponent, useCallback, useState,
} from 'react';

import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AnkeTrygderettsbehandlingProsessIndex, { AnkeTrygderettBrevData } from '@fpsak-frontend/prosess-anke-trygderettsbehandling';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, AnkeVurdering, Behandling, Fagsak,
} from '@fpsak-frontend/types';
import { ProsessDefaultInitPanel, ProsessPanelInitProps, useStandardProsessPanelProps } from '@fpsak-frontend/behandling-felles';
import { createIntl, forhandsvisDokument } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';
import AnkeBehandlingModal from '../modaler/AnkeBehandlingModal';
import { restApiAnkeHooks, requestAnkeApi, AnkeBehandlingApiKeys } from '../data/ankeBehandlingApi';

const intl = createIntl(messages);

const lagForhandsvisCallback = (
  forhandsvisMelding: (params?: any, keepData?: boolean) => Promise<any>,
  fagsak: Fagsak,
  behandling: Behandling,
) => (data: AnkeTrygderettBrevData) => {
  const brevData = {
    ...data,
    behandlingUuid: behandling.uuid,
    ytelseType: fagsak.fagsakYtelseType,
  };
  return forhandsvisMelding(brevData).then((response) => forhandsvisDokument(response));
};

const getLagringSideeffekter = (
  toggleAnkeModal: (skalToggle: boolean) => void,
  toggleOppdatereFagsakContext: (skalOppdatereFagsak: boolean) => void,
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void,
) => (aksjonspunktModels: { kode: string }[]) => {
  const erManuellVurderingAvAnke = aksjonspunktModels
    .some((apValue) => apValue.kode === aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER);

  if (erManuellVurderingAvAnke) {
    toggleOppdatereFagsakContext(false);
  }

  // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
  return () => {
    if (erManuellVurderingAvAnke) {
      toggleAnkeModal(true);
    } else {
      oppdaterProsessStegOgFaktaPanelIUrl('default', 'default');
    }
  };
};

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER,
  aksjonspunktCodes.AUTO_VENT_ANKE_MERKNADER_FRA_BRUKER,
];

const ENDEPUNKTER_INIT_DATA = [AnkeBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [AnkeBehandlingApiKeys.ANKE_VURDERING];
type EndepunktPanelData = {
  ankeVurdering: AnkeVurdering;
}

interface OwnProps {
  fagsak: Fagsak;
  opneSokeside: () => void;
  toggleSkalOppdatereFagsakContext: (skalOppdatereFagsak: boolean) => void;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
}

const AnkeTrygderettsbehandlingProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  fagsak,
  opneSokeside,
  toggleSkalOppdatereFagsakContext,
  oppdaterProsessStegOgFaktaPanelIUrl,
  ...props
}) => {
  const [visModalAnkeBehandling, toggleAnkeModal] = useState(false);

  const standardPanelProps = useStandardProsessPanelProps();

  const { startRequest: forhandsvisMelding } = restApiAnkeHooks.useRestApiRunner(AnkeBehandlingApiKeys.PREVIEW_MESSAGE);
  const previewCallback = useCallback(lagForhandsvisCallback(forhandsvisMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon]);

  const lagringSideeffekterCallback = getLagringSideeffekter(toggleAnkeModal, toggleSkalOppdatereFagsakContext,
    oppdaterProsessStegOgFaktaPanelIUrl);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
      {...props}
      requestApi={requestAnkeApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.ANKE_MERKNADER}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.AnkeMerknader' })}
      skalPanelVisesIMeny={() => true}
      lagringSideEffekter={lagringSideeffekterCallback}
      renderPanel={(data) => (
        <>
          <AnkeBehandlingModal
            visModal={visModalAnkeBehandling}
            lukkModal={() => { toggleAnkeModal(false); opneSokeside(); }}
            erFerdigbehandlet={false}
            venterTrygderett={!!data?.aksjonspunkter
              && data.aksjonspunkter.some((ap) => ap.definisjon.kode === aksjonspunktCodes.AUTO_VENT_ANKE_MERKNADER_FRA_BRUKER
              && ap.status.kode === aksjonspunktStatus.OPPRETTET)}
          />
          <AnkeTrygderettsbehandlingProsessIndex
            previewCallback={previewCallback}
            {...data}
          />
        </>
      )}
    />
  );
};

export default AnkeTrygderettsbehandlingProsessStegInitPanel;
