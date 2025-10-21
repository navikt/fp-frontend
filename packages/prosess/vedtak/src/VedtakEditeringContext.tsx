import { createContext, type ReactElement, useContext, useEffect, useMemo, useState } from 'react';

import type { BehandlingFpSak, BrevOverstyring } from '@navikt/fp-types';

type VedtakEditeringData = {
  hentBrevOverstyring: () => Promise<BrevOverstyring>;
  hentBrevOverstyringIsPending: boolean;
  mellomlagreBrevOverstyring: (redigertInnhold: string | null) => Promise<void>;
  harRedigertBrev: boolean;
  setHarRedigertBrev: (erRedigert: boolean) => void;
};

const VedtakEditeringContext = createContext<VedtakEditeringData | null>(null);

export const VedtakEditeringProvider = ({
  behandling,
  hentBrevOverstyring,
  hentBrevOverstyringIsPending,
  mellomlagreBrevOverstyring,
  children,
}: {
  behandling: BehandlingFpSak;
  hentBrevOverstyring: () => Promise<BrevOverstyring>;
  hentBrevOverstyringIsPending: boolean;
  mellomlagreBrevOverstyring: (redigertInnhold: string | null) => Promise<void>;
  children: ReactElement;
}) => {
  const [harRedigertBrev, setHarRedigertBrev] = useState(
    behandling.behandlingsresultat?.harRedigertVedtaksbrev || false,
  );

  useEffect(() => {
    setHarRedigertBrev(behandling.behandlingsresultat?.harRedigertVedtaksbrev || false);
  }, [behandling.uuid, behandling.versjon]);

  const value = useMemo(
    () => ({
      hentBrevOverstyring,
      hentBrevOverstyringIsPending,
      mellomlagreBrevOverstyring,
      harRedigertBrev,
      setHarRedigertBrev,
    }),
    [
      hentBrevOverstyring,
      hentBrevOverstyringIsPending,
      mellomlagreBrevOverstyring,
      harRedigertBrev,
      setHarRedigertBrev,
    ],
  );

  return <VedtakEditeringContext value={value}>{children}</VedtakEditeringContext>;
};

export const useVedtakEditeringContext = () => {
  const context = useContext<VedtakEditeringData | null>(VedtakEditeringContext);
  if (!context) {
    throw new Error('VedtakEditeringContext er ikke satt opp');
  }
  return context;
};
