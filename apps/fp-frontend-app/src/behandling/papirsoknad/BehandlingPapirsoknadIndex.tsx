import { use, useState } from 'react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { RegistrerPapirsoknadPanel, SoknadRegistrertModal } from '@navikt/fp-papirsoknad';
import type { Aksjonspunkt } from '@navikt/fp-types';

import { BehandlingDataContext } from '../felles/utils/behandlingDataContext';

/**
 * BehandlingPapirsoknadIndex
 *
 * Har ansvar for å sette opp skjemaet for registrering av papirsøknad for engangsstønad eller foreldrepenger og svangerskapspenger.
 * Komponenten tilpasser skjemaet til valgt søknadstype, valgt søknadtema (fødsel, adopsjon eller omsorg)
 * og valgt foreldretype (mor, far/medmor eller tredjepart).
 */
const BehandlingPapirsoknadIndex = () => {
  const [erAksjonspunktLagret, setErAksjonspunktLagret] = useState(false);

  const { alleKodeverk, behandling, rettigheter, fagsak, setSkalOppdatereEtterBekreftelseAvAp } =
    use(BehandlingDataContext);

  const isReadOnly = !rettigheter.writeAccess.isEnabled || behandling.behandlingPåVent;

  const lagrePapirsøknad = useLagrePapirsøknad(setErAksjonspunktLagret, setSkalOppdatereEtterBekreftelseAvAp);

  const lagreUfullstendig = (fagsakYtelseType: string, familieHendelseType: string, foreldreType: string) =>
    lagrePapirsøknad({ ufullstendigSoeknad: true }, fagsakYtelseType, familieHendelseType, foreldreType);

  const erEndringssøknad = behandling.aksjonspunkt.some(
    ap => ap.definisjon === AksjonspunktKode.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER,
  );

  return (
    <>
      <SoknadRegistrertModal isOpen={erAksjonspunktLagret} />
      <RegistrerPapirsoknadPanel
        fagsak={fagsak}
        kodeverk={alleKodeverk}
        readOnly={isReadOnly}
        lagreUfullstendig={lagreUfullstendig}
        lagreFullstendig={lagrePapirsøknad}
        erEndringssøknad={erEndringssøknad}
      />
    </>
  );
};

const useLagrePapirsøknad = (
  setErAksjonspunktLagret: (erLagret: boolean) => void,
  setSkalOppdatereEtterBekreftelseAvAp: (skalOppdatere: boolean) => void,
) => {
  const { behandling, fagsak, lagreAksjonspunkter } = use(BehandlingDataContext);

  return async (formValues: any, fagsakYtelseType: string, familieHendelseType: string, foreldreType: string) => {
    const bekreftedeAksjonspunktDtoer = [
      {
        '@type': getAktivPapirsøknadApKode(behandling.aksjonspunkt),
        tema: familieHendelseType,
        soknadstype: fagsakYtelseType,
        soker: foreldreType,
        ...formValues,
      },
    ];

    if (!formValues.ufullstendigSoeknad) {
      setSkalOppdatereEtterBekreftelseAvAp(false);
    }

    const oppdatertBehandling = await lagreAksjonspunkter({
      saksnummer: fagsak.saksnummer,
      behandlingUuid: behandling.uuid,
      behandlingVersjon: behandling.versjon,
      bekreftedeAksjonspunktDtoer,
    });

    if (formValues.ufullstendigSoeknad) {
      window.scrollTo(0, 0);
    } else {
      setErAksjonspunktLagret(true);
    }

    return oppdatertBehandling;
  };
};

const getAktivPapirsøknadApKode = (aksjonspunkter: Aksjonspunkt[]): string =>
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
