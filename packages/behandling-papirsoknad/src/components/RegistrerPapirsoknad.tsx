import React, { FunctionComponent, useState, useCallback } from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { BehandlingPaVent } from '@fpsak-frontend/behandling-felles';
import {
  Behandling, KodeverkMedNavn, Fagsak, AksessRettigheter, Aksjonspunkt,
} from '@fpsak-frontend/types';
import { LoadingPanel } from '@fpsak-frontend/shared-components';

import SoknadRegistrertModal from './SoknadRegistrertModal';
import RegistrerPapirsoknadPanel from './RegistrerPapirsoknadPanel';
import { restApiPapirsoknadHooks, requestPapirsoknadApi, PapirsoknadApiKeys } from '../data/papirsoknadApi';

const getAktivtPapirsoknadApKode = (aksjonspunkter: Aksjonspunkt[]): string => aksjonspunkter
  .filter((a) => a.erAktivt).map((ap) => ap.definisjon.kode)
  .filter((kode) => kode === aksjonspunktCodes.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD
      || kode === aksjonspunktCodes.REGISTRER_PAPIRSOKNAD_FORELDREPENGER
      || kode === aksjonspunktCodes.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER
      || kode === aksjonspunktCodes.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER)[0];

const lagLagreFunksjon = (
  soknadData,
  behandling: Behandling,
  aksjonspunkter: Aksjonspunkt[],
  fagsak: Fagsak,
  lagreAksjonspunkt: (params?: any, keepData?: boolean) => Promise<any>,
  setAksjonspunktLagret: (erApLagret: boolean) => void,
) => (valuesForRegisteredFieldsOnly) => {
  const manuellRegistreringDtoList = [{
    '@type': getAktivtPapirsoknadApKode(aksjonspunkter),
    tema: soknadData.getFamilieHendelseType(),
    soknadstype: soknadData.getFagsakYtelseType(),
    soker: soknadData.getForeldreType(),
    ...valuesForRegisteredFieldsOnly,
  },
  ];

  const params = {
    saksnummer: fagsak.saksnummer,
    behandlingId: behandling.id,
    behandlingVersjon: behandling.versjon,
    bekreftedeAksjonspunktDtoer: manuellRegistreringDtoList,
  };
  return lagreAksjonspunkt(params).then(() => setAksjonspunktLagret(true));
};

const EMPTY_ARRAY = [] as Aksjonspunkt[];

interface OwnProps {
  fagsak: Fagsak;
  fagsakPersonnummer: string;
  behandling: Behandling;
  kodeverk: {[key: string]: KodeverkMedNavn[]};
  rettigheter: AksessRettigheter;
  hentBehandling: (keepData: boolean) => Promise<Behandling>
  lagreAksjonspunkt: (params?: any, keepData?: boolean) => Promise<any>;
}

/**
 * RegisterPapirsoknad
 *
 * Har ansvar for å sette opp ReduxForm-skjemaet for registrering av papirsøknad for engangsstønad eller foreldrepenger.
 * Komponenten tilpasser skjemaet til valgt søknadstype (engagnsstønad eller foreldrepenger), valgt søknadtema (fødsel, adopsjon eller omsorg)
 * og valgt foreldretype (mor, far/medmor eller tredjepart).
 */
export const RegistrerPapirsoknad: FunctionComponent<OwnProps> = ({
  fagsak,
  fagsakPersonnummer,
  behandling,
  kodeverk,
  rettigheter,
  hentBehandling,
  lagreAksjonspunkt,
}) => {
  const [soknadData, setSoknadData] = useState();
  const [erAksjonspunktLagret, setAksjonspunktLagret] = useState(false);
  const readOnly = !rettigheter.writeAccess.isEnabled || behandling.behandlingPaaVent;

  const { data: aksjonspunkter = EMPTY_ARRAY } = restApiPapirsoknadHooks.useRestApi(PapirsoknadApiKeys.AKSJONSPUNKTER);

  const lagre = lagLagreFunksjon(soknadData, behandling, aksjonspunkter, fagsak, lagreAksjonspunkt, setAksjonspunktLagret);
  const lagreFullstendig = useCallback((_formValues, _dispatch, { valuesForRegisteredFieldsOnly }) => lagre(valuesForRegisteredFieldsOnly), [soknadData]);
  const lagreUfullstendig = useCallback(() => lagre({ ufullstendigSoeknad: true }), [soknadData]);

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
        // @ts-ignore Flytt ut RegistrerPapirsoknadPanel i ny pakke og flytt soknadData setState dit
        setSoknadData={setSoknadData}
        soknadData={soknadData}
        lagreUfullstendig={lagreUfullstendig}
        lagreFullstendig={lagreFullstendig}
      />
    </>
  );
};

export default RegistrerPapirsoknad;
