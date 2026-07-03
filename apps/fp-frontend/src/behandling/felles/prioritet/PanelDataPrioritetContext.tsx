import { createContext, type ReactNode, use, useEffect, useRef, useState } from 'react';

import { avbrytPlanlagtIdle, planleggPåIdle } from './idleCallback';

/**
 * Kor mange panel som får data-henting slått på per idle-tick. Låg verdi gjer at
 * prefetching av bakgrunnspanel spreiast utover tid i staden for å skape ein
 * brå smell av samtidige kall når det aktive panelet er ferdig lasta.
 */
const PREFETCH_BATCH_STØRRELSE = 2;

type Context = {
  registrerForPrefetch: (id: string) => void;
  erPrefetchAktivert: (id: string) => boolean;
};

type PanelDataGruppe = 'fakta' | 'prosess' | 'inngangsvilkar';

const PanelDataPrioritetContext = createContext<Context | undefined>(undefined);

interface Props {
  children: ReactNode;
}

/**
 * Deler éin prefetch-kø mellom alle fakta-, prosess- og inngangsvilkårpanel i
 * ei behandling, slik at data for panel brukaren *ikkje* har opna, blir henta
 * gradvis i ledige stunder i staden for alt på éin gong ved sidelasting.
 * Sjå {@link useSkalHenteData}.
 */
export const PanelDataPrioritetProvider = ({ children }: Props) => {
  const køRef = useRef<string[]>([]);
  const planlagtIdRef = useRef<number | undefined>(undefined);
  const [aktiverte, setAktiverte] = useState<ReadonlySet<string>>(() => new Set());

  useEffect(
    () => () => {
      if (planlagtIdRef.current !== undefined) {
        avbrytPlanlagtIdle(planlagtIdRef.current);
      }
    },
    [],
  );

  const planleggNesteBatch = () => {
    planlagtIdRef.current = planleggPåIdle(() => {
      const neste = køRef.current.splice(0, PREFETCH_BATCH_STØRRELSE);
      if (neste.length > 0) {
        setAktiverte(forrige => new Set([...forrige, ...neste]));
      }
      if (køRef.current.length > 0) {
        planleggNesteBatch();
      }
    });
  };

  const registrerForPrefetch = (id: string) => {
    if (køRef.current.includes(id) || aktiverte.has(id)) {
      return;
    }
    const køVarTom = køRef.current.length === 0;
    køRef.current.push(id);
    if (køVarTom) {
      planleggNesteBatch();
    }
  };

  const erPrefetchAktivert = (id: string) => aktiverte.has(id);

  return (
    <PanelDataPrioritetContext value={{ registrerForPrefetch, erPrefetchAktivert }}>
      {children}
    </PanelDataPrioritetContext>
  );
};

/**
 * Avgjer om eit panel skal hente data no: umiddelbart dersom panelet er
 * aktivt/synleg, elles først når prefetch-køen har nådd fram til det (i ledig
 * tid, etter at aktive panel har fått prioritet). Bruk returverdien som
 * `enabled` på panelet sine `useQuery`-kall.
 *
 * Må kallast innanfor ein {@link PanelDataPrioritetProvider}. `gruppe` skil
 * mellom fakta-, prosess- og inngangsvilkårpanel som kan ha same meny-id.
 */
export const useSkalHenteData = (id: string, erAktiv: boolean, gruppe: PanelDataGruppe): boolean => {
  const context = use(PanelDataPrioritetContext);
  if (!context) {
    throw new Error('useSkalHenteData må kallast innanfor ein PanelDataPrioritetProvider');
  }
  const { registrerForPrefetch, erPrefetchAktivert } = context;
  const prefetchId = `${gruppe}:${id}`;

  useEffect(() => {
    if (!erAktiv) {
      registrerForPrefetch(prefetchId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- registrerForPrefetch er stabil for praktiske formål; skal berre køyrast att ved endra id/erAktiv
  }, [prefetchId, erAktiv]);

  return erAktiv || erPrefetchAktivert(prefetchId);
};
