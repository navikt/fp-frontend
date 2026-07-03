/**
 * Kombinerer eksisterande `enabled`-vilkår på eit sett `queryOptions` med om
 * panelet skal hente data no (sjå {@link import('./PanelDataPrioritetContext').useSkalHenteData}).
 * Held query-typen uendra, så resultatet kan sendast rett til `useQuery`.
 */
export const medPrioritet = <T extends { enabled?: unknown }>(options: T, skalHenteData: boolean): T => {
  const eksisterandeEnabled = options.enabled;
  const enabled = (typeof eksisterandeEnabled === 'boolean' ? eksisterandeEnabled : true) && skalHenteData;
  return { ...options, enabled };
};
