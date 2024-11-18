import React, { FunctionComponent, useState, useCallback, useMemo } from 'react';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, AlleKodeverk, Behandling, AksessRettigheter, Fagsak } from '@navikt/fp-types';
import { AsyncPollingStatus } from '@navikt/fp-rest-api';
import { RegistrerPapirsoknadPanel, SoknadRegistrertModal } from '@navikt/fp-papirsoknad';

import { useNavigate } from 'react-router';
import BehandlingPaVent from '../felles/modaler/paVent/BehandlingPaVent';

const getAktivtPapirsoknadApKode = (aksjonspunkter: Aksjonspunkt[]): string =>
  aksjonspunkter
    .map(ap => ap.definisjon)
    .filter(
      kode =>
        kode === AksjonspunktKode.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD ||
        kode === AksjonspunktKode.REGISTRER_PAPIRSOKNAD_FORELDREPENGER ||
        kode === AksjonspunktKode.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER ||
        kode === AksjonspunktKode.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER,
    )[0];

const lagLagreFunksjon =
  (
    behandling: Behandling,
    fagsak: Fagsak,
    lagreAksjonspunkt: (params?: any, keepData?: boolean) => Promise<Behandling | undefined>,
    setAksjonspunktLagret: (erApLagret: boolean) => void,
  ) =>
  (formValues: any, fagsakYtelseType: string, familieHendelseType: string, foreldreType: string) => {
    const manuellRegistreringDtoList = [
      {
        '@type': getAktivtPapirsoknadApKode(behandling.aksjonspunkt),
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
    return lagreAksjonspunkt(params).then(returnertBehandling => {
      if (returnertBehandling?.taskStatus?.status !== AsyncPollingStatus.HALTED) {
        setAksjonspunktLagret(true);
      }
    });
  };

interface OwnProps {
  fagsak: Fagsak;
  behandling: Behandling;
  kodeverk: AlleKodeverk;
  rettigheter: AksessRettigheter;
  lagreAksjonspunkt: (params?: any, keepData?: boolean) => Promise<Behandling | undefined>;
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
  behandling,
  kodeverk,
  rettigheter,
  lagreAksjonspunkt,
}) => {
  const [erAksjonspunktLagret, setAksjonspunktLagret] = useState(false);
  const readOnly = !rettigheter.writeAccess.isEnabled || behandling.behandlingPaaVent;

  const lagre = useMemo(
    () => lagLagreFunksjon(behandling, fagsak, lagreAksjonspunkt, setAksjonspunktLagret),
    [behandling, fagsak, lagreAksjonspunkt, setAksjonspunktLagret],
  );
  const lagreUfullstendig = useCallback(
    (fagsakYtelseType: string, familieHendelseType: string, foreldreType: string) =>
      lagre({ ufullstendigSoeknad: true }, fagsakYtelseType, familieHendelseType, foreldreType),
    [lagre],
  );

  const navigate = useNavigate();
  const opneSokeside = useCallback(() => {
    navigate('/');
  }, []);

  if (!behandling.aksjonspunkt) {
    return <LoadingPanel />;
  }

  const erEndringssøknad = behandling.aksjonspunkt.some(
    ap => ap.definisjon === AksjonspunktKode.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER,
  );

  return (
    <>
      <BehandlingPaVent behandling={behandling} kodeverk={kodeverk} opneSokeside={opneSokeside} />
      <SoknadRegistrertModal isOpen={erAksjonspunktLagret} />
      <RegistrerPapirsoknadPanel
        fagsak={fagsak}
        kodeverk={kodeverk}
        readOnly={readOnly}
        lagreUfullstendig={lagreUfullstendig}
        lagreFullstendig={lagre}
        erEndringssøknad={erEndringssøknad}
      />
    </>
  );
};

export default RegistrerPapirsoknad;
