import { createContext, type ReactElement, use, useEffect, useMemo, useState } from 'react';

import type { BehandlingFpSak, BrevOverstyring } from '@navikt/fp-types';

type VedtakEditeringData = {
  hentBrevHtml?: () => Promise<BrevOverstyring>;
  hentBrevHtmlIsPending: boolean;
  mellomlagreBrev: (redigertInnhold?: string) => Promise<void>;
  harRedigertBrev: boolean;
  setHarRedigertBrev: (erRedigert: boolean) => void;
};

const VedtakEditeringContext = createContext<VedtakEditeringData | null>(null);

export const VedtakEditeringProvider = ({
  behandling,
  hentBrevHtml,
  hentBrevHtmlIsPending,
  mellomlagreBrev,
  children,
}: {
  behandling: BehandlingFpSak;
  hentBrevHtml?: () => Promise<BrevOverstyring>;
  hentBrevHtmlIsPending: boolean;
  mellomlagreBrev: (redigertInnhold?: string) => Promise<void>;
  children: ReactElement;
}) => {
  const [harRedigertBrev, setHarRedigertBrev] = useState(behandling.links.some(l => l.rel === 'overstyrt-vedtaksbrev'));

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- OK, skjer kun ved endring av behandling
    setHarRedigertBrev(behandling.links.some(l => l.rel === 'overstyrt-vedtaksbrev'));
  }, [behandling.uuid, behandling.versjon]);

  const value = useMemo(
    () => ({
      hentBrevHtml,
      hentBrevHtmlIsPending,
      mellomlagreBrev,
      harRedigertBrev,
      setHarRedigertBrev,
    }),
    [hentBrevHtml, hentBrevHtmlIsPending, mellomlagreBrev, harRedigertBrev, setHarRedigertBrev],
  );

  return <VedtakEditeringContext value={value}>{children}</VedtakEditeringContext>;
};

export const useVedtakEditeringContext = () => {
  const context = use<VedtakEditeringData | null>(VedtakEditeringContext);
  if (!context) {
    throw new Error('VedtakEditeringContext er ikke satt opp');
  }
  return context;
};
