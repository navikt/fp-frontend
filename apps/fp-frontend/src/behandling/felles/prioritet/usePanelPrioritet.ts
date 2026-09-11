import { use } from 'react';

import type { FaktaPanelCode, ProsessStegCode } from '@navikt/fp-konstanter';

import { useErFaktaPanelAktiv } from '../fakta/useFaktaMenyRegistrerer';
import { InngangsvilkårPanelDataContext } from '../prosess/InngangsvilkarDefaultInitWrapper';
import { useErProsessPanelAktiv } from '../prosess/useProsessMenyRegistrerer';
import { useSkalHenteData } from './PanelDataPrioritetContext';

/**
 * Merkar eit sett `queryOptions` med om panelet skal hente data no. Eksisterande
 * `enabled`-vilkår blir bevart, og query-typen er uendra så resultatet kan
 * sendast rett til `useQuery`.
 */
export type PrioriterQuery = <T extends { enabled?: unknown }>(options: T) => T;

/**
 * Fakta- og prosesspanel kan dele meny-id (t.d. UTTAK og BEREGNING finst i
 * begge), så prefetch-køen må skilje dei frå kvarandre.
 */
type PanelGruppe = 'fakta' | 'prosess' | 'inngangsvilkar';

const lagPrioriterQuery =
  (skalHenteData: boolean): PrioriterQuery =>
  options => ({
    ...options,
    enabled: (typeof options.enabled === 'boolean' ? options.enabled : true) && skalHenteData,
  });

const usePrioriterQuery = (
  gruppe: PanelGruppe,
  panelKode: string,
  erAktiv: boolean,
  skalVisesIMeny: boolean,
): PrioriterQuery => lagPrioriterQuery(useSkalHenteData(`${gruppe}:${panelKode}`, erAktiv, skalVisesIMeny));

interface FaktaProps {
  panelKode: FaktaPanelCode;
  skalVisesIMeny: boolean;
  harÅpentAksjonspunkt: boolean;
}

/**
 * Gir eit faktapanel ein {@link PrioriterQuery} som utsett datahenting til
 * panelet er valt, eller til prefetch-køen når fram til det i ledig tid.
 *
 * ```tsx
 * const prioriter = useFaktaPanelPrioritet({ panelKode, skalVisesIMeny, harÅpentAksjonspunkt });
 * const { data } = useQuery(prioriter(api.arbeidOgInntektOptions(behandling)));
 * ```
 */
export const useFaktaPanelPrioritet = ({ panelKode, skalVisesIMeny, harÅpentAksjonspunkt }: FaktaProps) => {
  const erAktiv = useErFaktaPanelAktiv(panelKode, skalVisesIMeny, harÅpentAksjonspunkt);
  return usePrioriterQuery('fakta', panelKode, erAktiv, skalVisesIMeny);
};

interface ProsessProps {
  panelKode: ProsessStegCode;
  /** Prosesspanel er som regel alltid i menyen, difor default true. */
  skalVisesIMeny?: boolean;
  /** Same vilkår som avgjer om panelet blir vist når «default» er valt i menyen. */
  skalMarkeresSomAktiv: boolean;
}

/** Som {@link useFaktaPanelPrioritet}, men for prosesspanel. */
export const useProsessPanelPrioritet = ({ panelKode, skalVisesIMeny = true, skalMarkeresSomAktiv }: ProsessProps) => {
  const erAktiv = useErProsessPanelAktiv(panelKode, skalVisesIMeny, skalMarkeresSomAktiv);
  return usePrioriterQuery('prosess', panelKode, erAktiv, skalVisesIMeny);
};

interface InngangsvilkårProps {
  panelKode: string;
  skalVisesIMeny: boolean;
}

/**
 * Som {@link useFaktaPanelPrioritet}, men for inngangsvilkårpanel, der «aktiv»
 * kjem frå det samla inngangsvilkårpanelet i staden for prosessmenyen.
 */
export const useInngangsvilkårPanelPrioritet = ({ panelKode, skalVisesIMeny }: InngangsvilkårProps) => {
  const { erPanelValgt } = use(InngangsvilkårPanelDataContext);
  return usePrioriterQuery('inngangsvilkar', panelKode, erPanelValgt, skalVisesIMeny);
};
