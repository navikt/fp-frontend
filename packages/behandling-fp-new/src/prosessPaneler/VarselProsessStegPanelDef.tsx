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
  useSkalViseProsessPanel, useStandardProsessPanelProps, ProsessPanelWrapper, prosessPanelHooks,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { restApiFpHooks, FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const forhandsvis = (data) => {
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

const aksjonspunktKoder = [
  aksjonspunktCodes.VARSEL_REVURDERING_MANUELL,
  aksjonspunktCodes.VARSEL_REVURDERING_ETTERKONTROLL,
];

const endepunkter = [
  { key: FpBehandlingApiKeys.AKSJONSPUNKTER },
  { key: FpBehandlingApiKeys.VILKAR },
];

const endepunkterVedVisning = [
  { key: FpBehandlingApiKeys.FAMILIEHENDELSE },
  { key: FpBehandlingApiKeys.FAMILIEHENDELSE_ORIGINAL_BEHANDLING },
  { key: FpBehandlingApiKeys.SOKNAD },
  { key: FpBehandlingApiKeys.SOKNAD_ORIGINAL_BEHANDLING },
];

type EndepunktData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

type EndepunktDataVedVisning = {
  familiehendelse: FamilieHendelseSamling;
  familiehendelseOriginalBehandling: FamilieHendelse;
  soknad: Soknad;
  soknadOriginalBehandling: Soknad;
}

interface OwnProps {
  behandlingVersjon?: number;
  valgtProsessSteg: string;
  registrerFaktaPanel: (data: {
    id: string;
    tekst?: string;
    erAktiv?: boolean;
    harApentAksjonspunkt?: boolean;
    status?: string;
  }) => void;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  toggleSkalOppdatereFagsakContext: (skalHenteFagsak: boolean) => void,
  apentFaktaPanelInfo?: {urlCode: string, textCode: string };
  fagsak: Fagsak;
  forhandsvisMelding: (params?: any, keepData?: boolean) => Promise<unknown>;
  opneSokeside: () => void;
}

const VarselProsessStegPanelDef: FunctionComponent<OwnProps> = ({
  behandlingVersjon,
  valgtProsessSteg,
  registrerFaktaPanel,
  toggleSkalOppdatereFagsakContext,
  apentFaktaPanelInfo,
  fagsak,
  forhandsvisMelding,
  oppdaterProsessStegOgFaktaPanelIUrl,
  opneSokeside,
}) => {
  const { data } = restApiFpHooks.useMultipleRestApi<EndepunktData>(endepunkter, {
    keepData: true,
    updateTriggers: [behandlingVersjon],
    isCachingOn: true,
  });

  const lagringSideEffekter = getLagringSideeffekter(toggleSkalOppdatereFagsakContext, oppdaterProsessStegOgFaktaPanelIUrl, opneSokeside);
  const standardPanelProps = useStandardProsessPanelProps(data, aksjonspunktKoder, [], lagringSideEffekter);

  const skalVises = useSkalViseProsessPanel(standardPanelProps.aksjonspunkter);
  const erAktiv = !apentFaktaPanelInfo
    && (valgtProsessSteg === prosessStegCodes.VARSEL || (standardPanelProps.isAksjonspunktOpen && valgtProsessSteg === 'default'));

  const erPanelValgt = prosessPanelHooks.useMenyRegistrerer(
    registrerFaktaPanel,
    prosessStegCodes.VARSEL,
    getPackageIntl().formatMessage({ id: 'Behandlingspunkt.CheckVarselRevurdering' }),
    skalVises,
    erAktiv,
    standardPanelProps.isAksjonspunktOpen,
    standardPanelProps.status,
  );

  const { data: dataEtterVisning, state: stateEtterVisning } = restApiFpHooks.useMultipleRestApi<EndepunktDataVedVisning>(endepunkterVedVisning, {
    keepData: true,
    updateTriggers: [erPanelValgt, behandlingVersjon],
    suspendRequest: !erPanelValgt,
    isCachingOn: true,
  });

  const previewCallback = useCallback(getForhandsvisCallback(forhandsvisMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon]);

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={standardPanelProps.isAksjonspunktOpen}
      status={standardPanelProps.status}
      loadingState={stateEtterVisning}
    >
      <VarselOmRevurderingProsessIndex
        previewCallback={previewCallback}
        {...dataEtterVisning}
        {...standardPanelProps}
      />
    </ProsessPanelWrapper>
  );
};

export default VarselProsessStegPanelDef;
