import React, {
  FunctionComponent, useCallback,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VarselOmRevurderingProsessIndex from '@fpsak-frontend/prosess-varsel-om-revurdering';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, Behandling, Fagsak, FamilieHendelse, FamilieHendelseSamling, Soknad, Vilkar,
} from '@fpsak-frontend/types';
import {
  useSkalViseProsessPanel, useStandardProsessPanelProps, ProsessPanelWrapper, useProsessMenyRegistrerer, ProsessPanelInitProps,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import {
  restApiFpHooks, FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel,
} from '../data/fpBehandlingApi';

const forhandsvis = (data: any): void => {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(data);
  } else if (URL.createObjectURL) {
    window.open(URL.createObjectURL(data));
  }
};

const getForhandsvisCallback = (
  forhandsvisMelding: (params?: any, keepData?: boolean) => Promise<unknown>,
  fagsak: Fagsak,
  behandling: Behandling,
) => (data: any) => {
  const brevData = {
    ...data,
    behandlingUuid: behandling.uuid,
    ytelseType: fagsak.sakstype,
  };

  return forhandsvisMelding(brevData).then((response) => forhandsvis(response));
};

const getLagringSideeffekter = (
  toggleOppdatereFagsakContext: (skalHenteFagsak: boolean) => void,
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void,
  opneSokeside: () => void,
) => (aksjonspunktModels: any) => {
  const erRevurderingsaksjonspunkt = aksjonspunktModels.some((apModel) => ((apModel.kode === aksjonspunktCodes.VARSEL_REVURDERING_MANUELL
    || apModel.kode === aksjonspunktCodes.VARSEL_REVURDERING_ETTERKONTROLL) && apModel.sendVarsel));

  if (erRevurderingsaksjonspunkt) {
    toggleOppdatereFagsakContext(false);
  }

  // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
  return () => {
    if (erRevurderingsaksjonspunkt) {
      opneSokeside();
    } else {
      oppdaterProsessStegOgFaktaPanelIUrl('default', 'default');
    }
  };
};

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.VARSEL_REVURDERING_MANUELL,
  aksjonspunktCodes.VARSEL_REVURDERING_ETTERKONTROLL,
];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [
  FpBehandlingApiKeys.FAMILIEHENDELSE,
  FpBehandlingApiKeys.FAMILIEHENDELSE_ORIGINAL_BEHANDLING,
  FpBehandlingApiKeys.SOKNAD,
  FpBehandlingApiKeys.SOKNAD_ORIGINAL_BEHANDLING,
];
type EndepunktPanelData = {
  familiehendelse: FamilieHendelseSamling;
  familiehendelseOriginalBehandling: FamilieHendelse;
  soknad: Soknad;
  soknadOriginalBehandling: Soknad;
}

interface OwnProps {
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  toggleSkalOppdatereFagsakContext: (skalHenteFagsak: boolean) => void,
  fagsak: Fagsak;
  opneSokeside: () => void;
}

const VarselProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  behandlingVersjon,
  valgtProsessSteg,
  registrerProsessPanel,
  toggleSkalOppdatereFagsakContext,
  fagsak,
  oppdaterProsessStegOgFaktaPanelIUrl,
  opneSokeside,
}) => {
  const { initData } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);

  const lagringSideEffekter = getLagringSideeffekter(toggleSkalOppdatereFagsakContext, oppdaterProsessStegOgFaktaPanelIUrl, opneSokeside);
  const standardPanelProps = useStandardProsessPanelProps(initData, AKSJONSPUNKT_KODER, [], lagringSideEffekter);

  const skalVises = useSkalViseProsessPanel(standardPanelProps.aksjonspunkter);

  const erPanelValgt = useProsessMenyRegistrerer(
    registrerProsessPanel,
    prosessStegCodes.VARSEL,
    getPackageIntl().formatMessage({ id: 'Behandlingspunkt.CheckVarselRevurdering' }),
    valgtProsessSteg,
    skalVises,
    standardPanelProps.isAksjonspunktOpen,
    standardPanelProps.status,
  );

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(ENDEPUNKTER_PANEL_DATA, erPanelValgt, behandlingVersjon);

  const { startRequest: forhandsvisMelding } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.PREVIEW_MESSAGE);

  const previewCallback = useCallback(getForhandsvisCallback(forhandsvisMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon]);

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={standardPanelProps.isAksjonspunktOpen}
      status={standardPanelProps.status}
      dataState={panelDataState}
    >
      <VarselOmRevurderingProsessIndex
        previewCallback={previewCallback}
        {...panelData}
        {...standardPanelProps}
      />
    </ProsessPanelWrapper>
  );
};

export default VarselProsessStegInitPanel;
