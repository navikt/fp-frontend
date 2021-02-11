import React, {
  FunctionComponent, useCallback, useEffect, useState,
} from 'react';

import { FadingPanel, LoadingPanel } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VarselOmRevurderingProsessIndex from '@fpsak-frontend/prosess-varsel-om-revurdering';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, Behandling, Fagsak, FamilieHendelse, FamilieHendelseSamling, Soknad, Vilkar,
} from '@fpsak-frontend/types';
import {
  useSkalViseProsessPanel, useStandardProsessPanelProps, MargMarkering, ProsessStegIkkeBehandletPanel,
} from '@fpsak-frontend/behandling-felles-ny';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

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
  behandling: Behandling;
  valgtProsessSteg: string;
  registrerFaktaPanel: (data: {
    id: string;
    tekst?: string;
    erAktiv?: boolean;
    harApentAksjonspunkt?: boolean;
    status?: string;
  }) => void;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  oppdaterBehandlingVersjon: (versjon: number) => void;
  fagsak: Fagsak;
  forhandsvisMelding: (params?: any, keepData?: boolean) => Promise<unknown>;
  opneSokeside: () => void;
}

const VarselProsessStegPanelDef: FunctionComponent<OwnProps> = ({
  behandling,
  valgtProsessSteg,
  registrerFaktaPanel,
  oppdaterBehandlingVersjon,
  fagsak,
  forhandsvisMelding,
  oppdaterProsessStegOgFaktaPanelIUrl,
  opneSokeside,
}) => {
  useEffect(() => {
    registrerFaktaPanel({
      id: prosessStegCodes.VARSEL,
    });
  }, []);

  const [skalOppdatereFagsakKontekst, toggleSkalOppdatereFagsakContext] = useState(true);
  useEffect(() => {
    if (skalOppdatereFagsakKontekst) {
      oppdaterBehandlingVersjon(behandling.versjon);
    }
  }, [behandling.versjon]);

  const previewCallback = useCallback(getForhandsvisCallback(forhandsvisMelding, fagsak, behandling), [behandling.versjon]);

  const erPanelValgt = valgtProsessSteg === prosessStegCodes.VARSEL;

  const { data, state } = restApiFpHooks.useMultipleRestApi<EndepunktData>(endepunkter, {
    keepData: true,
    updateTriggers: [behandling?.versjon],
    isCachingOn: true,
  });

  const { data: dataEtterVisning, state: stateEtterVisning } = restApiFpHooks.useMultipleRestApi<EndepunktDataVedVisning>(endepunkterVedVisning, {
    keepData: true,
    updateTriggers: [erPanelValgt, behandling?.versjon],
    suspendRequest: !erPanelValgt,
    isCachingOn: true,
  });

  const filtrerteAksjonspunkter = data ? data.aksjonspunkter.filter((ap) => aksjonspunktKoder.includes(ap.definisjon.kode)) : [];

  const lagringSideEffekter = getLagringSideeffekter(toggleSkalOppdatereFagsakContext, oppdaterProsessStegOgFaktaPanelIUrl, opneSokeside);
  const standardProps = useStandardProsessPanelProps(filtrerteAksjonspunkter, [], lagringSideEffekter);

  const skalVises = useSkalViseProsessPanel(filtrerteAksjonspunkter);

  useEffect(() => {
    if (skalVises) {
      registrerFaktaPanel({
        id: prosessStegCodes.VARSEL,
        tekst: getPackageIntl().formatMessage({ id: 'Behandlingspunkt.CheckVarselRevurdering' }),
        erAktiv: valgtProsessSteg === prosessStegCodes.VARSEL,
        harApentAksjonspunkt: standardProps.isAksjonspunktOpen,
        status: standardProps.status,
      });
    }
  }, [valgtProsessSteg, standardProps.isAksjonspunktOpen, state]);

  if (!erPanelValgt) {
    return null;
  }

  if (standardProps.status === vilkarUtfallType.IKKE_VURDERT) {
    // FIXME Lag ein wrapper med style rundt denne. Samme som MargMarkering?
    return <ProsessStegIkkeBehandletPanel />;
  }

  if (stateEtterVisning !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return (
    <MargMarkering
      behandlingStatus={behandling.status}
      aksjonspunkter={filtrerteAksjonspunkter}
      isReadOnly={standardProps.isReadOnly}
      visAksjonspunktMarkering
    >
      <FadingPanel>
        <VarselOmRevurderingProsessIndex
          behandling={behandling}
          previewCallback={previewCallback}
          {...dataEtterVisning}
          {...standardProps}
        />
      </FadingPanel>
    </MargMarkering>
  );
};

export default VarselProsessStegPanelDef;
