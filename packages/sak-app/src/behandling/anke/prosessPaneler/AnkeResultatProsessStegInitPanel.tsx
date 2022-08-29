import React, {
  FunctionComponent, useCallback, useState,
} from 'react';
import { useIntl } from 'react-intl';
import { Aksjonspunkt, Behandling, Fagsak } from '@navikt/ft-types';
import { AksjonspunktStatus } from '@navikt/ft-kodeverk';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AnkeResultatProsessIndex, { AnkeResultatBrevData } from '@fpsak-frontend/prosess-anke-resultat';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { AnkeVurdering, ForhåndsvisMeldingParams } from '@fpsak-frontend/types';
import { forhandsvisDokument } from '@navikt/ft-utils';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import useStandardProsessPanelProps from '../../felles/prosess/useStandardProsessPanelProps';
import { BehandlingFellesApiKeys } from '../../felles/data/behandlingFellesApi';
import AnkeBehandlingModal from '../modaler/AnkeBehandlingModal';
import { restApiAnkeHooks, requestAnkeApi, AnkeBehandlingApiKeys } from '../data/ankeBehandlingApi';

const lagForhandsvisCallback = (
  forhandsvisMelding: (params: ForhåndsvisMeldingParams, keepData?: boolean) => Promise<any>,
  fagsak: Fagsak,
  behandling: Behandling,
) => (data: AnkeResultatBrevData) => {
  const brevData = {
    ...data,
    behandlingUuid: behandling.uuid,
    fagsakYtelseType: fagsak.fagsakYtelseType,
  };
  return forhandsvisMelding(brevData).then((response) => forhandsvisDokument(response));
};

const getLagringSideeffekter = (
  toggleAnkeModal: (skalViseModal: boolean) => void,
  toggleOppdatereFagsakContext: (skalOppdatereFagsak: boolean) => void,
) => () => {
  toggleOppdatereFagsakContext(false);

  // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
  return () => {
    toggleAnkeModal(true);
  };
};

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.FORESLA_VEDTAK,
  aksjonspunktCodes.FATTER_VEDTAK,
  aksjonspunktCodes.FORESLA_VEDTAK_MANUELT,
  aksjonspunktCodes.VEDTAK_UTEN_TOTRINNSKONTROLL,
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
  fagsak: Fagsak;
  opneSokeside: () => void;
  toggleSkalOppdatereFagsakContext: (skalOppdatereFagsak: boolean) => void;
}

const AnkeResultatProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  fagsak,
  opneSokeside,
  toggleSkalOppdatereFagsakContext,
  ...props
}) => {
  const intl = useIntl();
  const [visModalAnkeBehandling, toggleAnkeModal] = useState(false);

  const standardPanelProps = useStandardProsessPanelProps();

  const { startRequest: forhandsvisMelding } = restApiAnkeHooks.useRestApiRunner(BehandlingFellesApiKeys.PREVIEW_MESSAGE);
  const previewCallback = useCallback(lagForhandsvisCallback(forhandsvisMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon]);

  const lagringSideeffekterCallback = getLagringSideeffekter(toggleAnkeModal, toggleSkalOppdatereFagsakContext);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
      {...props}
      requestApi={requestAnkeApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.ANKE_RESULTAT}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.AnkeResultat' })}
      skalPanelVisesIMeny={() => true}
      lagringSideEffekter={lagringSideeffekterCallback}
      renderPanel={(data) => (
        <>
          <AnkeBehandlingModal
            visModal={visModalAnkeBehandling}
            lukkModal={() => { toggleAnkeModal(false); opneSokeside(); }}
            erFerdigbehandlet={!!data?.aksjonspunkter && data.aksjonspunkter
              .some((ap) => ap.definisjon === aksjonspunktCodes.VEDTAK_UTEN_TOTRINNSKONTROLL
                && ap.status === AksjonspunktStatus.UTFORT)}
            venterTrygderett={false}
          />
          <AnkeResultatProsessIndex
            previewCallback={previewCallback}
            {...data}
          />
        </>
      )}
    />
  );
};

export default AnkeResultatProsessStegInitPanel;
