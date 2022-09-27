import React, {
  FunctionComponent, useCallback,
} from 'react';
import { useIntl } from 'react-intl';
import { Aksjonspunkt, Behandling, Fagsak } from '@navikt/ft-types';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AnkeResultatProsessIndex, { AnkeResultatBrevData } from '@fpsak-frontend/prosess-anke-resultat';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { AnkeVurdering, ForhåndsvisMeldingParams } from '@fpsak-frontend/types';
import { forhandsvisDokument } from '@navikt/ft-utils';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import useStandardProsessPanelProps from '../../felles/prosess/useStandardProsessPanelProps';
import { BehandlingFellesApiKeys } from '../../felles/data/behandlingFellesApi';
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
}

const AnkeResultatProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  fagsak,
  ...props
}) => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps();

  const { startRequest: forhandsvisMelding } = restApiAnkeHooks.useRestApiRunner(BehandlingFellesApiKeys.PREVIEW_MESSAGE);
  const previewCallback = useCallback(lagForhandsvisCallback(forhandsvisMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon]);

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
      renderPanel={(data) => (
        <AnkeResultatProsessIndex
          previewCallback={previewCallback}
          {...data}
        />
      )}
    />
  );
};

export default AnkeResultatProsessStegInitPanel;
