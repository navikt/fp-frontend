import { use, useState } from 'react';
import { useNavigate } from 'react-router';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ApiPollingStatus } from '@navikt/fp-konstanter';
import { RegistrerPapirsoknadPanel, SoknadRegistrertModal } from '@navikt/fp-papirsoknad';
import type { Aksjonspunkt, Behandling, Fagsak } from '@navikt/fp-types';

import { BehandlingPaVent } from '../felles/modaler/paVent/BehandlingPaVent';
import { BehandlingDataContext } from '../felles/utils/behandlingDataContext';

/**
 * BehandlingPapirsoknadIndex
 *
 * Har ansvar for å sette opp skjemaet for registrering av papirsøknad for engangsstønad eller foreldrepenger.
 * Komponenten tilpasser skjemaet til valgt søknadstype (engagnsstønad eller foreldrepenger), valgt søknadtema (fødsel, adopsjon eller omsorg)
 * og valgt foreldretype (mor, far/medmor eller tredjepart).
 */
const BehandlingPapirsoknadIndex = () => {
  const [erAksjonspunktLagret, setErAksjonspunktLagret] = useState(false);

  const { alleKodeverk, behandling, rettigheter, fagsak, lagreAksjonspunkter } = use(BehandlingDataContext);

  const navigate = useNavigate();
  const opneSokeside = () => {
    navigate('/');
  };

  const readOnly = !rettigheter.writeAccess.isEnabled || behandling.behandlingPaaVent;

  const lagre = lagLagreFunksjon(behandling, fagsak, lagreAksjonspunkter, setErAksjonspunktLagret);

  const lagreUfullstendig = (fagsakYtelseType: string, familieHendelseType: string, foreldreType: string) =>
    lagre({ ufullstendigSoeknad: true }, fagsakYtelseType, familieHendelseType, foreldreType);

  const erEndringssøknad = behandling.aksjonspunkt.some(
    ap => ap.definisjon === AksjonspunktKode.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER,
  );

  return (
    <>
      <BehandlingPaVent behandling={behandling} kodeverk={alleKodeverk} opneSokeside={opneSokeside} />
      <SoknadRegistrertModal isOpen={erAksjonspunktLagret} />
      <RegistrerPapirsoknadPanel
        fagsak={fagsak}
        kodeverk={alleKodeverk}
        readOnly={readOnly}
        lagreUfullstendig={lagreUfullstendig}
        lagreFullstendig={lagre}
        erEndringssøknad={erEndringssøknad}
      />
    </>
  );
};

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
    lagreAksjonspunkt: (params?: any) => Promise<Behandling>,
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
      if (returnertBehandling?.taskStatus?.status !== ApiPollingStatus.HALTED) {
        setAksjonspunktLagret(true);
      }
    });
  };

// Default export grunna React.lazy
// eslint-disable-next-line import/no-default-export
export default BehandlingPapirsoknadIndex;
