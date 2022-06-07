import React, { FunctionComponent, useState, useCallback, useMemo } from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { BehandlingPaVent } from '@fpsak-frontend/behandling-felles';
import {
  Behandling, AlleKodeverk, Fagsak, AksessRettigheter, Aksjonspunkt,
} from '@fpsak-frontend/types';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { AsyncPollingStatus } from '@fpsak-frontend/rest-api';
import { RegistrerPapirsoknadPanel, SoknadRegistrertModal } from '@fpsak-frontend/papirsoknad';

import { restApiPapirsoknadHooks, requestPapirsoknadApi, PapirsoknadApiKeys } from './data/papirsoknadApi';

const getAktivtPapirsoknadApKode = (aksjonspunkter: Aksjonspunkt[]): string => aksjonspunkter
  .filter((a) => a.erAktivt).map((ap) => ap.definisjon)
  .filter((kode) => kode === aksjonspunktCodes.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD
      || kode === aksjonspunktCodes.REGISTRER_PAPIRSOKNAD_FORELDREPENGER
      || kode === aksjonspunktCodes.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER
      || kode === aksjonspunktCodes.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER)[0];

const lagLagreFunksjon = (
  behandling: Behandling,
  aksjonspunkter: Aksjonspunkt[],
  fagsak: Fagsak,
  lagreAksjonspunkt: (params?: any, keepData?: boolean) => Promise<Behandling>,
  setAksjonspunktLagret: (erApLagret: boolean) => void,
) => (
  formValues: any,
  fagsakYtelseType: string,
  familieHendelseType: string,
  foreldreType: string,
) => {
  const manuellRegistreringDtoList = [{
    '@type': getAktivtPapirsoknadApKode(aksjonspunkter),
    tema: familieHendelseType,
    soknadstype: fagsakYtelseType,
    soker: foreldreType,
    ...formValues,
  },
  ];

  const params = {
    saksnummer: fagsak.saksnummer,
    behandlingUuid: behandling.uuid,
    behandlingVersjon: behandling.versjon,
    bekreftedeAksjonspunktDtoer: manuellRegistreringDtoList,
  };
  return lagreAksjonspunkt(params).then((returnertBehandling) => {
    if (returnertBehandling?.taskStatus?.status !== AsyncPollingStatus.HALTED) {
      setAksjonspunktLagret(true);
    }
  });
};

const EMPTY_ARRAY = [] as Aksjonspunkt[];

interface OwnProps {
  fagsak: Fagsak;
  fagsakPersonnummer: string;
  behandling: Behandling;
  kodeverk: AlleKodeverk;
  rettigheter: AksessRettigheter;
  hentBehandling: (keepData: boolean) => Promise<Behandling | undefined>
  lagreAksjonspunkt: (params?: any, keepData?: boolean) => Promise<Behandling>;
}

/**
 * RegisterPapirsoknad
 *
 * Har ansvar for å sette opp skjemaet for registrering av papirsøknad for engangsstønad eller foreldrepenger.
 * Komponenten tilpasser skjemaet til valgt søknadstype (engagnsstønad eller foreldrepenger), valgt søknadtema (fødsel, adopsjon eller omsorg)
 * og valgt foreldretype (mor, far/medmor eller tredjepart).
 */
const RegistrerPapirsoknad: FunctionComponent<OwnProps> = ({
  fagsak,
  fagsakPersonnummer,
  behandling,
  kodeverk,
  rettigheter,
  hentBehandling,
  lagreAksjonspunkt,
}) => {
  const [erAksjonspunktLagret, setAksjonspunktLagret] = useState(false);
  const readOnly = !rettigheter.writeAccess.isEnabled || behandling.behandlingPaaVent;

  const { data: aksjonspunkter = EMPTY_ARRAY } = restApiPapirsoknadHooks.useRestApi(PapirsoknadApiKeys.AKSJONSPUNKTER);

  const lagre = useMemo(() => lagLagreFunksjon(behandling, aksjonspunkter, fagsak, lagreAksjonspunkt, setAksjonspunktLagret),
    [behandling, aksjonspunkter, fagsak, lagreAksjonspunkt, setAksjonspunktLagret]);
  const lagreUfullstendig = useCallback((
    fagsakYtelseType: string,
    familieHendelseType: string,
    foreldreType: string,
  ) => lagre({ ufullstendigSoeknad: true }, fagsakYtelseType, familieHendelseType, foreldreType), [lagre]);

  if (!aksjonspunkter) {
    return <LoadingPanel />;
  }

  return (
    <>
      <BehandlingPaVent
        behandling={behandling}
        hentBehandling={hentBehandling}
        kodeverk={kodeverk}
        requestApi={requestPapirsoknadApi}
        oppdaterPaVentKey={PapirsoknadApiKeys.UPDATE_ON_HOLD}
        aksjonspunktKey={PapirsoknadApiKeys.AKSJONSPUNKTER}
      />
      <SoknadRegistrertModal isOpen={erAksjonspunktLagret} />
      <RegistrerPapirsoknadPanel
        fagsak={fagsak}
        fagsakPersonnummer={fagsakPersonnummer}
        kodeverk={kodeverk}
        readOnly={readOnly}
        lagreUfullstendig={lagreUfullstendig}
        lagreFullstendig={lagre}
      />
    </>
  );
};

export default RegistrerPapirsoknad;
