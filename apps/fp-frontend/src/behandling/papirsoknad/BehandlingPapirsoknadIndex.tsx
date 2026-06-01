import { useCallback, useState } from 'react';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  type EngangsstønadValues,
  type ForeldrepengerEndringssøknadValues,
  type ForeldrepengerValues,
  isPapirsøknadMellomlagring,
  type PapirsøknadMellomlagring,
  RegistrerPapirsoknadPanel,
  SoknadRegistrertModal,
  type SvangerskapsValues,
} from '@navikt/fp-papirsoknad';
import type { Aksjonspunkt, FagsakYtelseType, FamilieHendelseType } from '@navikt/fp-types';

import { BehandlingRel, useBehandlingApi } from '../../data/behandlingApi';
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
  const api = useBehandlingApi(behandling);

  const isReadOnly = !rettigheter.writeAccess.isEnabled || behandling.behandlingPåVent;

  const lagrePapirsøknad = useLagrePapirsøknad(setErAksjonspunktLagret, setSkalOppdatereEtterBekreftelseAvAp);

  const erEndringssøknad = behandling.aksjonspunkt.some(
    ap => ap.definisjon === AksjonspunktKode.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER,
  );

  const apKode = getAktivPapirsøknadApKode(behandling.aksjonspunkt);

  // Hent mellomlagret utkast (om det finnes)
  const { data: mellomlagretResponse, isLoading: mellomlagringLaster } = useQuery(
    api.mellomlagretPapirsøknadOptions(behandling),
  );
  const mellomlagretData = (() => {
    if (!mellomlagretResponse?.innhold) {
      return undefined;
    }
    try {
      const parsed = JSON.parse(mellomlagretResponse.innhold) as Record<string, unknown>;
      return isPapirsøknadMellomlagring(parsed) ? parsed : undefined;
    } catch {
      return undefined;
    }
  })();

  const queryClient = useQueryClient();

  // Mellomlagring-mutation
  const { mutate: mellomlagreMutation } = useMutation({
    mutationFn: (innhold: string | null) =>
      api.mellomlagring({
        behandlingUuid: behandling.uuid,
        type: 'PAPIRSØKNAD',
        innhold,
      }),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [BehandlingRel.HENT_MELLOMLAGRING, 'PAPIRSØKNAD', behandling.uuid],
      });
    },
  });

  const onMellomlagre = useCallback(
    (formValues: PapirsøknadMellomlagring) => {
      const payload = JSON.stringify({
        '@type': apKode,
        ...formValues,
      });
      mellomlagreMutation(payload);
    },
    [mellomlagreMutation, apKode],
  );

  if (mellomlagringLaster) {
    return null;
  }

  return (
    <>
      <SoknadRegistrertModal isOpen={erAksjonspunktLagret} />
      <RegistrerPapirsoknadPanel
        fagsak={fagsak}
        kodeverk={alleKodeverk}
        readOnly={isReadOnly}
        lagrePapirsøknad={lagrePapirsøknad}
        erEndringssøknad={erEndringssøknad}
        mellomlagretData={mellomlagretData}
        onMellomlagre={onMellomlagre}
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
// eslint-disable-next-line import-x/no-default-export
export default BehandlingPapirsoknadIndex;
