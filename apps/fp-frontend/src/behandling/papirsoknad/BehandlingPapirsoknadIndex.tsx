import { useState } from 'react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  type EngangsstønadValues,
  type ForeldrepengerEndringssøknadValues,
  type ForeldrepengerValues,
  RegistrerPapirsoknadPanel,
  SoknadRegistrertModal,
  type SvangerskapsValues,
} from '@navikt/fp-papirsoknad';
import type { Aksjonspunkt, FagsakYtelseType, FamilieHendelseType } from '@navikt/fp-types';

import { useBehandlingDataContext } from '../felles/context/BehandlingDataContext';

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
    useBehandlingDataContext();

  const isReadOnly = !rettigheter.writeAccess.isEnabled || behandling.behandlingPåVent;

  const lagrePapirsøknad = useLagrePapirsøknad(setErAksjonspunktLagret, setSkalOppdatereEtterBekreftelseAvAp);

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
        lagrePapirsøknad={lagrePapirsøknad}
        erEndringssøknad={erEndringssøknad}
      />
    </>
  );
};

const useLagrePapirsøknad = (
  setErAksjonspunktLagret: (erLagret: boolean) => void,
  setSkalOppdatereEtterBekreftelseAvAp: (skalOppdatere: boolean) => void,
) => {
  const { behandling, fagsak, lagreAksjonspunkter } = useBehandlingDataContext();

  return async (
    fagsakYtelseType: FagsakYtelseType,
    familieHendelseType: FamilieHendelseType,
    foreldreType: string,
    formValues?: EngangsstønadValues | ForeldrepengerValues | ForeldrepengerEndringssøknadValues | SvangerskapsValues,
  ) => {
    const kode = getAktivPapirsøknadApKode(behandling.aksjonspunkt);
    const bekreftedeAksjonspunktDtoer = [
      {
        '@type': kode,
        kode,
        tema: familieHendelseType,
        søknadstype: fagsakYtelseType,
        søker: foreldreType,
        ...formValues,
      },
    ];

    if (formValues) {
      setSkalOppdatereEtterBekreftelseAvAp(false);
    }

    const oppdatertBehandling = await lagreAksjonspunkter({
      saksnummer: fagsak.saksnummer,
      behandlingUuid: behandling.uuid,
      behandlingVersjon: behandling.versjon,
      bekreftedeAksjonspunktDtoer,
    });

    if (formValues) {
      setErAksjonspunktLagret(true);
    } else {
      globalThis.scrollTo(0, 0);
    }

    return oppdatertBehandling;
  };
};

const getAktivPapirsøknadApKode = (
  aksjonspunkter: Aksjonspunkt[],
):
  | AksjonspunktKode.REGISTRER_PAPIRSØKNAD_ENGANGSSTØNAD
  | AksjonspunktKode.REGISTRER_PAPIRSØKNAD_FORELDREPENGER
  | AksjonspunktKode.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER
  | AksjonspunktKode.REGISTRER_PAPIRSØKNAD_SVANGERSKAPSPENGER => {
  const ap = aksjonspunkter
    .map(a => a.definisjon)
    .find(
      kode =>
        kode === AksjonspunktKode.REGISTRER_PAPIRSØKNAD_ENGANGSSTØNAD ||
        kode === AksjonspunktKode.REGISTRER_PAPIRSØKNAD_FORELDREPENGER ||
        kode === AksjonspunktKode.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER ||
        kode === AksjonspunktKode.REGISTRER_PAPIRSØKNAD_SVANGERSKAPSPENGER,
    );

  if (!ap) {
    throw new Error('Fant ikke aktivt aksjonspunkt for papirsøknad');
  }
  // @ts-expect-error Blir fiksa når AksjonspunktKode reflekterar backend-typar
  return ap;
};

// Default export grunna React.lazy
// eslint-disable-next-line import/no-default-export
export default BehandlingPapirsoknadIndex;
