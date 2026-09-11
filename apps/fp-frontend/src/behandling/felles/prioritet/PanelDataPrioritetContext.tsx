import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  use,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { avbrytPlanlagtIdle, type IdleHandle, planleggPåIdle } from './idleCallback';

/**
 * Kor mange panel som får data-henting slått på per idle-tick. Låg verdi gjer at
 * prefetching av bakgrunnspanel spreiast utover tid i staden for å skape ein
 * brå smell av samtidige kall når det aktive panelet er ferdig lasta.
 */
const PREFETCH_BATCH_STØRRELSE = 2;

type PrefetchKø = {
  /** Panel som ventar på tur, i registreringsrekkefølge. */
  ventande: string[];
  /** Handtak til neste planlagte idle-tick, eller undefined når ingenting er planlagt. */
  planlagtId: IdleHandle | undefined;
};

type Context = {
  registrerForPrefetch: (id: string) => void;
  aktiverte: ReadonlySet<string>;
};

const PanelDataPrioritetContext = createContext<Context | undefined>(undefined);

const medNyeIder = (forrige: ReadonlySet<string>, nye: string[]): ReadonlySet<string> =>
  nye.every(id => forrige.has(id)) ? forrige : new Set([...forrige, ...nye]);

/**
 * Tømmer køen nokre panel om gangen, med eit idle-tick mellom kvar batch. Fri
 * funksjon i staden for `useCallback` fordi han kallar seg sjølv rekursivt.
 */
const planleggNesteBatch = (kø: PrefetchKø, setAktiverte: Dispatch<SetStateAction<ReadonlySet<string>>>): void => {
  kø.planlagtId = planleggPåIdle(() => {
    kø.planlagtId = undefined;

    const neste = kø.ventande.splice(0, PREFETCH_BATCH_STØRRELSE);
    if (neste.length > 0) {
      setAktiverte(forrige => medNyeIder(forrige, neste));
    }

    if (kø.ventande.length > 0) {
      planleggNesteBatch(kø, setAktiverte);
    }
  });
};

interface Props {
  children: ReactNode;
}

/**
 * Deler éin prefetch-kø mellom alle fakta-, prosess- og inngangsvilkårpanel i
 * ei behandling, slik at data for panel brukaren *ikkje* har opna, blir henta
 * gradvis i ledige stunder i staden for alt på éin gong ved sidelasting.
 *
 * Panela snakkar ikkje med denne konteksten direkte – dei brukar
 * `useFaktaPanelPrioritet`, `useProsessPanelPrioritet` eller
 * `useInngangsvilkårPanelPrioritet` frå `usePanelPrioritet`.
 */
export const PanelDataPrioritetProvider = ({ children }: Props) => {
  const køRef = useRef<PrefetchKø>({ ventande: [], planlagtId: undefined });
  const [aktiverte, setAktiverte] = useState<ReadonlySet<string>>(() => new Set());

  useEffect(
    () => () => {
      const { planlagtId } = køRef.current;
      if (planlagtId !== undefined) {
        avbrytPlanlagtIdle(planlagtId);
      }
    },
    [],
  );

  const registrerForPrefetch = useCallback((id: string) => {
    const kø = køRef.current;
    if (kø.ventande.includes(id)) {
      return;
    }

    kø.ventande.push(id);
    if (kø.planlagtId === undefined) {
      planleggNesteBatch(kø, setAktiverte);
    }
  }, []);

  const context = useMemo(() => ({ registrerForPrefetch, aktiverte }), [registrerForPrefetch, aktiverte]);

  return <PanelDataPrioritetContext value={context}>{children}</PanelDataPrioritetContext>;
};

/**
 * Avgjer om eit panel skal hente data no: umiddelbart dersom panelet er aktivt,
 * elles først når prefetch-køen har nådd fram til det. Panel som ikkje er
 * synlege i menyen hentar aldri.
 *
 * Internt byggjeelement – panela brukar hookane i `usePanelPrioritet`.
 */
export const useSkalHenteData = (prefetchId: string, erAktiv: boolean, skalVisesIMeny: boolean): boolean => {
  const context = use(PanelDataPrioritetContext);
  if (!context) {
    throw new Error('useSkalHenteData må kallast innanfor ein PanelDataPrioritetProvider');
  }
  const { registrerForPrefetch, aktiverte } = context;

  const skalPrefetchast = skalVisesIMeny && !erAktiv;

  useEffect(() => {
    if (skalPrefetchast) {
      registrerForPrefetch(prefetchId);
    }
  }, [prefetchId, skalPrefetchast, registrerForPrefetch]);

  return skalVisesIMeny && (erAktiv || aktiverte.has(prefetchId));
};
