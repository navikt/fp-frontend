import React, {
  FunctionComponent, useState,
} from 'react';
import { useIntl } from 'react-intl';
import { Aksjonspunkt } from '@navikt/ft-types';
import { AksjonspunktStatus } from '@navikt/ft-kodeverk';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AnkeTrygderettsbehandlingProsessIndex from '@fpsak-frontend/prosess-anke-trygderettsbehandling';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { AnkeVurdering } from '@fpsak-frontend/types';

import ProsessDefaultInitPanel from '../../felles/components/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/types/prosessPanelInitProps';
import { BehandlingFellesApiKeys } from '../../felles/data/behandlingFellesApi';
import AnkeBehandlingModal from '../modaler/AnkeBehandlingModal';
import { requestAnkeApi, AnkeBehandlingApiKeys } from '../data/ankeBehandlingApi';

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

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [AnkeBehandlingApiKeys.ANKE_VURDERING];
type EndepunktPanelData = {
  ankeVurdering: AnkeVurdering;
}

interface OwnProps {
  opneSokeside: () => void;
  toggleSkalOppdatereFagsakContext: (skalOppdatereFagsak: boolean) => void;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
}

const AnkeTrygderettsbehandlingProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  opneSokeside,
  toggleSkalOppdatereFagsakContext,
  oppdaterProsessStegOgFaktaPanelIUrl,
  ...props
}) => {
  const intl = useIntl();

  const [visModalAnkeBehandling, toggleAnkeModal] = useState(false);

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
              && data.aksjonspunkter.some((ap) => ap.definisjon === aksjonspunktCodes.AUTO_VENT_ANKE_MERKNADER_FRA_BRUKER
              && ap.status === AksjonspunktStatus.OPPRETTET)}
          />
          <AnkeTrygderettsbehandlingProsessIndex
            {...data}
          />
        </>
      )}
    />
  );
};

export default AnkeTrygderettsbehandlingProsessStegInitPanel;
