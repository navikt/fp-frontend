import React, { FunctionComponent, useState } from 'react';

import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AnkeTrygderettsbehandlingProsessDataIndex, ProsessDataAnkeTrygderettsbehandling } from '@fpsak-frontend/prosess-anke-trygderettsbehandling';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, AlleKodeverk, Behandling, Fagsak,
} from '@fpsak-frontend/types';
import { ProsessDefaultInitPanel, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';
import AnkeBehandlingModal from '../modaler/AnkeBehandlingModal';
import { requestAnkeApi, AnkeBehandlingApiKeys } from '../data/ankeBehandlingApi';

const intl = createIntl(messages);

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

interface OwnProps {
  behandlingData: {
    fagsak: Fagsak;
    behandling: Behandling;
    alleKodeverk: AlleKodeverk;
  };
  opneSokeside: () => void;
  toggleSkalOppdatereFagsakContext: (skalOppdatereFagsak: boolean) => void;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  lagreAksjonspunkter: (params?: any, keepData?: boolean) => Promise<Behandling>;
}

const AnkeTrygderettsbehandlingProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  behandlingData,
  opneSokeside,
  toggleSkalOppdatereFagsakContext,
  oppdaterProsessStegOgFaktaPanelIUrl,
  lagreAksjonspunkter,
  ...props
}) => {
  const [visModalAnkeBehandling, toggleAnkeModal] = useState(false);
  const lagringSideeffekterCallback = getLagringSideeffekter(toggleAnkeModal, toggleSkalOppdatereFagsakContext,
    oppdaterProsessStegOgFaktaPanelIUrl);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData>
      {...props}
      requestApi={requestAnkeApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.ANKE_MERKNADER}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.AnkeMerknader' })}
      skalPanelVisesIMeny={() => true}
      renderPanel={(data) => {
        const prosessData = new ProsessDataAnkeTrygderettsbehandling(requestAnkeApi, behandlingData)
          .medRestEndepunkter(AnkeBehandlingApiKeys.ANKE_VURDERING, AnkeBehandlingApiKeys.PREVIEW_MESSAGE)
          .medAksjonspunkter(data.aksjonspunkter, AKSJONSPUNKT_KODER)
          .medLagring(oppdaterProsessStegOgFaktaPanelIUrl, lagreAksjonspunkter)
          .medLagringSideeffekter(lagringSideeffekterCallback);
        return (
          <>
            <AnkeBehandlingModal
              visModal={visModalAnkeBehandling}
              lukkModal={() => { toggleAnkeModal(false); opneSokeside(); }}
              erFerdigbehandlet={false}
              venterTrygderett={!!data?.aksjonspunkter
                && data.aksjonspunkter.some((ap) => ap.definisjon.kode === aksjonspunktCodes.AUTO_VENT_ANKE_MERKNADER_FRA_BRUKER
                && ap.status.kode === aksjonspunktStatus.OPPRETTET)}
            />
            <AnkeTrygderettsbehandlingProsessDataIndex
              prosessData={prosessData}
              isReadOnly={data.isReadOnly}
              readOnlySubmitButton={data.readOnlySubmitButton}
              formData={data.formData}
              setFormData={data.setFormData}
            />
          </>
        );
      }}
    />
  );
};

export default AnkeTrygderettsbehandlingProsessStegInitPanel;
