import React, { FunctionComponent, useCallback } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { VarselOmRevurderingProsessIndex } from '@navikt/fp-prosess-varsel-om-revurdering';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import {
  Behandling,
  Fagsak,
  FamilieHendelse,
  FamilieHendelseSamling,
  ForhåndsvisMeldingParams,
  Soknad,
} from '@navikt/fp-types';
import { forhandsvisDokument } from '@navikt/ft-utils';

import skalViseProsessPanel from '../../felles/prosess/skalViseProsessPanel';
import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import useStandardProsessPanelProps from '../../felles/prosess/useStandardProsessPanelProps';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../../../data/behandlingContextApi';

const getForhandsvisCallback =
  (
    forhandsvisMelding: (params: ForhåndsvisMeldingParams, keepData?: boolean) => Promise<unknown>,
    fagsak: Fagsak,
    behandling: Behandling,
  ) =>
  (data: { mottaker: string; dokumentMal: string; fritekst: string }) => {
    const brevData = {
      ...data,
      behandlingUuid: behandling.uuid,
      fagsakYtelseType: fagsak.fagsakYtelseType,
    };

    return forhandsvisMelding(brevData).then(response => forhandsvisDokument(response));
  };

const getLagringSideeffekter =
  (setSkalOppdatereEtterBekreftelseAvAp: (skalHenteFagsak: boolean) => void, opneSokeside: () => void) => () => {
    setSkalOppdatereEtterBekreftelseAvAp(false);

    // Returner funksjon som blir kjørt etter lagring av aksjonspunkt
    return () => {
      opneSokeside();
    };
  };

const AKSJONSPUNKT_KODER = [
  AksjonspunktCode.VARSEL_REVURDERING_MANUELL,
  AksjonspunktCode.VARSEL_REVURDERING_ETTERKONTROLL,
];

const ENDEPUNKTER_PANEL_DATA = [
  BehandlingApiKeys.FAMILIEHENDELSE,
  BehandlingApiKeys.FAMILIEHENDELSE_ORIGINAL_BEHANDLING,
  BehandlingApiKeys.SOKNAD,
  BehandlingApiKeys.SOKNAD_ORIGINAL_BEHANDLING,
];
type EndepunktPanelData = {
  familiehendelse: FamilieHendelseSamling;
  familiehendelseOriginalBehandling: FamilieHendelse;
  soknad: Soknad;
  soknadOriginalBehandling: Soknad;
};

interface OwnProps {
  setSkalOppdatereEtterBekreftelseAvAp: (skalHenteFagsak: boolean) => void;
  fagsak: Fagsak;
  opneSokeside: () => void;
}

const VarselProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  setSkalOppdatereEtterBekreftelseAvAp,
  fagsak,
  opneSokeside,
  ...props
}) => {
  const lagringSideEffekter = getLagringSideeffekter(setSkalOppdatereEtterBekreftelseAvAp, opneSokeside);

  const { startRequest: forhandsvisMelding } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.PREVIEW_MESSAGE,
  );

  const standardPanelProps = useStandardProsessPanelProps();

  const previewCallback = useCallback(
    getForhandsvisCallback(forhandsvisMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon],
  );

  return (
    <ProsessDefaultInitPanel<EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.VARSEL}
      prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.CheckVarselRevurdering' })}
      skalPanelVisesIMeny={data => skalViseProsessPanel(data.aksjonspunkter)}
      lagringSideEffekter={lagringSideEffekter}
      // @ts-ignore
      renderPanel={data => <VarselOmRevurderingProsessIndex previewCallback={previewCallback} {...data} />}
    />
  );
};

export default VarselProsessStegInitPanel;
