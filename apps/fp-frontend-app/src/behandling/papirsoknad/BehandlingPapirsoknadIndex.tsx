import { use } from 'react';
import { useNavigate } from 'react-router';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { RegistrerPapirsoknadPanel } from '@navikt/fp-papirsoknad';
import type { Aksjonspunkt } from '@navikt/fp-types';

import { BehandlingPaVent } from '../felles/modaler/paVent/BehandlingPaVent';
import { BehandlingDataContext } from '../felles/utils/behandlingDataContext';

/**
 * BehandlingPapirsoknadIndex
 *
 * Har ansvar for å sette opp skjemaet for registrering av papirsøknad for engangsstønad, foreldrepenger og svangerskapssøknad.
 * Komponenten tilpasser skjemaet til valgt søknadstype, valgt søknadtema (fødsel, adopsjon eller omsorg)
 * og valgt foreldretype (mor, far/medmor eller tredjepart).
 */
const BehandlingPapirsoknadIndex = () => {
  const { alleKodeverk, behandling, rettigheter, fagsak } = use(BehandlingDataContext);

  const navigate = useNavigate();
  const åpneSøkeside = () => {
    navigate('/');
  };

  const isReadOnly = !rettigheter.writeAccess.isEnabled || behandling.behandlingPaaVent;

  const lagrePapirsøknad = useLagrePapirsøknad();

  const lagreUfullstendigPapirsøknad = (fagsakYtelseType: string, familieHendelseType: string, foreldreType: string) =>
    lagrePapirsøknad({ ufullstendigSoeknad: true }, fagsakYtelseType, familieHendelseType, foreldreType);

  const erEndringssøknad = behandling.aksjonspunkt.some(
    ap => ap.definisjon === AksjonspunktKode.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER,
  );

  return (
    <>
      <BehandlingPaVent behandling={behandling} kodeverk={alleKodeverk} opneSokeside={åpneSøkeside} />
      <RegistrerPapirsoknadPanel
        fagsak={fagsak}
        kodeverk={alleKodeverk}
        readOnly={isReadOnly}
        lagreUfullstendig={lagreUfullstendigPapirsøknad}
        lagreFullstendig={lagrePapirsøknad}
        erEndringssøknad={erEndringssøknad}
      />
    </>
  );
};

const useLagrePapirsøknad = () => {
  const { behandling, fagsak, lagreAksjonspunkter } = use(BehandlingDataContext);

  return (formValues: any, fagsakYtelseType: string, familieHendelseType: string, foreldreType: string) => {
    const bekreftedeAksjonspunktDtoer = [
      {
        '@type': getAktivPapirsoknadApKode(behandling.aksjonspunkt),
        tema: familieHendelseType,
        soknadstype: fagsakYtelseType,
        soker: foreldreType,
        ...formValues,
      },
    ];

    return lagreAksjonspunkter({
      saksnummer: fagsak.saksnummer,
      behandlingUuid: behandling.uuid,
      behandlingVersjon: behandling.versjon,
      bekreftedeAksjonspunktDtoer,
    });
  };
};

const getAktivPapirsoknadApKode = (aksjonspunkter: Aksjonspunkt[]): string =>
  aksjonspunkter
    .map(ap => ap.definisjon)
    .filter(
      kode =>
        kode === AksjonspunktKode.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD ||
        kode === AksjonspunktKode.REGISTRER_PAPIRSOKNAD_FORELDREPENGER ||
        kode === AksjonspunktKode.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER ||
        kode === AksjonspunktKode.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER,
    )[0];

// Default export grunna React.lazy
// eslint-disable-next-line import/no-default-export
export default BehandlingPapirsoknadIndex;
