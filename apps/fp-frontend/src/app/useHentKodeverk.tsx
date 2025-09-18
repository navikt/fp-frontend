import { useQuery } from '@tanstack/react-query';

import { useFagsakApi } from '../data/fagsakApi';
import { ApplicationContextPath } from './ApplicationContextPath';
import { useGetEnabledApplikasjonContext } from './useGetEnabledApplikasjonContext';

export const useHentKodeverk = (skalHenteKodeverk: boolean): boolean => {
  const enabledApplicationContexts = useGetEnabledApplikasjonContext();
  const skalHenteFraFpTilbake = enabledApplicationContexts.includes(ApplicationContextPath.FPTILBAKE);

  const {
    kodeverkOptions,
    fptilbake: { kodeverkOptions: fpTilbakeKodeverkOptions },
  } = useFagsakApi();

  const { status: kodeverkFpSakStatus } = useQuery(kodeverkOptions(skalHenteKodeverk));
  const { status: kodeverkFpTilbakeStatus } = useQuery(
    fpTilbakeKodeverkOptions(skalHenteFraFpTilbake && skalHenteKodeverk),
  );

  const harHentetFpSak = kodeverkFpSakStatus !== 'pending';
  const harHentetFpTilbake = !skalHenteFraFpTilbake || kodeverkFpTilbakeStatus !== 'pending';

  return harHentetFpSak && harHentetFpTilbake;
};
