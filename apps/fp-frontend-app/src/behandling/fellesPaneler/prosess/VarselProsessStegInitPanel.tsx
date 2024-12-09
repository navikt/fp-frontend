import React, { useCallback } from 'react';
import { useIntl } from 'react-intl';

import { forhandsvisDokument } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { VarselOmRevurderingProsessIndex } from '@navikt/fp-prosess-varsel-om-revurdering';
import {
  Behandling,
  Fagsak,
  FamilieHendelse,
  FamilieHendelseSamling,
  ForhåndsvisMeldingParams,
  Soknad,
} from '@navikt/fp-types';

import { BehandlingApiKeys, restBehandlingApiHooks } from '../../../data/behandlingContextApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { skalViseProsessPanel } from '../../felles/prosess/skalViseProsessPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

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
  AksjonspunktKode.VARSEL_REVURDERING_MANUELL,
  AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL,
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

interface Props {
  setSkalOppdatereEtterBekreftelseAvAp: (skalHenteFagsak: boolean) => void;
  fagsak: Fagsak;
  opneSokeside: () => void;
}

export const VarselProsessStegInitPanel = ({
  setSkalOppdatereEtterBekreftelseAvAp,
  fagsak,
  opneSokeside,
  ...props
}: Props & ProsessPanelInitProps) => {
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
      // @ts-expect-error
      renderPanel={data => <VarselOmRevurderingProsessIndex previewCallback={previewCallback} {...data} />}
    />
  );
};
