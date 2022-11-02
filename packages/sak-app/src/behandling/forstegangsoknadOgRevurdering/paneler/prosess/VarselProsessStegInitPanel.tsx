import React, {
  FunctionComponent, useCallback, useMemo,
} from 'react';
import { useIntl } from 'react-intl';

import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VarselOmRevurderingProsessIndex from '@fpsak-frontend/prosess-varsel-om-revurdering';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import {
  Behandling, Fagsak, FamilieHendelse, FamilieHendelseSamling, ForhåndsvisMeldingParams, Soknad,
} from '@fpsak-frontend/types';
import { forhandsvisDokument } from '@navikt/ft-utils';

import skalViseProsessPanel from '../../../felles/prosess/skalViseProsessPanel';
import ProsessDefaultInitPanel from '../../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../../felles/typer/prosessPanelInitProps';
import useStandardProsessPanelProps from '../../../felles/prosess/useStandardProsessPanelProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';

const getForhandsvisCallback = (
  forhandsvisMelding: (params: ForhåndsvisMeldingParams, keepData?: boolean) => Promise<unknown>,
  fagsak: Fagsak,
  behandling: Behandling,
) => (data: {
  mottaker: string;
  dokumentMal: string;
  fritekst: string;
}) => {
  const brevData = {
    ...data,
    behandlingUuid: behandling.uuid,
    fagsakYtelseType: fagsak.fagsakYtelseType,
  };

  return forhandsvisMelding(brevData).then((response) => forhandsvisDokument(response));
};

const getLagringSideeffekter = (
  toggleOppdatereFagsakContext: (skalHenteFagsak: boolean) => void,
  opneSokeside: () => void,
) => () => {
  toggleOppdatereFagsakContext(false);

  // Returner funksjon som blir kjørt etter lagring av aksjonspunkt
  return () => {
    opneSokeside();
  };
};

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.VARSEL_REVURDERING_MANUELL,
  aksjonspunktCodes.VARSEL_REVURDERING_ETTERKONTROLL,
];

const ENDEPUNKTER_PANEL_DATA = [
  BehandlingFellesApiKeys.FAMILIEHENDELSE,
  BehandlingFellesApiKeys.FAMILIEHENDELSE_ORIGINAL_BEHANDLING,
  BehandlingFellesApiKeys.SOKNAD,
  BehandlingFellesApiKeys.SOKNAD_ORIGINAL_BEHANDLING,
];
type EndepunktPanelData = {
  familiehendelse: FamilieHendelseSamling;
  familiehendelseOriginalBehandling: FamilieHendelse;
  soknad: Soknad;
  soknadOriginalBehandling: Soknad;
}

interface OwnProps {
  toggleSkalOppdatereFagsakContext: (skalHenteFagsak: boolean) => void,
  fagsak: Fagsak;
  opneSokeside: () => void;
}

const VarselProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  toggleSkalOppdatereFagsakContext,
  fagsak,
  opneSokeside,
  ...props
}) => {
  const lagringSideEffekter = getLagringSideeffekter(toggleSkalOppdatereFagsakContext, opneSokeside);

  const { requestApi } = props;
  const { useRestApiRunner } = useMemo(() => RestApiHooks.initHooks(requestApi), [requestApi]);
  const { startRequest: forhandsvisMelding } = useRestApiRunner(BehandlingFellesApiKeys.PREVIEW_MESSAGE);

  const standardPanelProps = useStandardProsessPanelProps();

  const previewCallback = useCallback(getForhandsvisCallback(forhandsvisMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon]);

  return (
    <ProsessDefaultInitPanel<Record<string, never>, EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.VARSEL}
      prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.CheckVarselRevurdering' })}
      skalPanelVisesIMeny={(data) => skalViseProsessPanel(data.aksjonspunkter)}
      lagringSideEffekter={lagringSideEffekter}
      renderPanel={(data) => (
        <VarselOmRevurderingProsessIndex
          previewCallback={previewCallback}
          {...data}
        />
      )}
    />
  );
};

export default VarselProsessStegInitPanel;
