import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import useGetEnabledApplikasjonContext from './useGetEnabledApplikasjonContext';
import ApplicationContextPath from './ApplicationContextPath';
import { FpsakApiKeys, restApiHooks } from '../data/fpsakApi';

const NO_PARAMS = undefined;

const useHentKodeverk = (skalHenteKodeverk: boolean): boolean => {
  const enabledApplicationContexts = useGetEnabledApplikasjonContext();
  const skalHenteFraFpTilbake = enabledApplicationContexts.includes(ApplicationContextPath.FPTILBAKE);

  const { state: kodeverkFpSakStatus } = restApiHooks.useGlobalStateRestApi(FpsakApiKeys.KODEVERK, NO_PARAMS, {
    suspendRequest: !skalHenteKodeverk,
    updateTriggers: [skalHenteKodeverk],
  });
  const { state: kodeverkFpTilbakeStatus } = restApiHooks.useGlobalStateRestApi(FpsakApiKeys.KODEVERK_FPTILBAKE, NO_PARAMS, {
    suspendRequest: !skalHenteFraFpTilbake || !skalHenteKodeverk,
    updateTriggers: [skalHenteKodeverk],
  });

  const harHentetFpSak = kodeverkFpSakStatus !== RestApiState.NOT_STARTED && kodeverkFpSakStatus !== RestApiState.LOADING;
  const harHentetFpTilbake = !skalHenteFraFpTilbake
    || (kodeverkFpTilbakeStatus !== RestApiState.NOT_STARTED && kodeverkFpTilbakeStatus !== RestApiState.LOADING);

  return harHentetFpSak && harHentetFpTilbake;
};

export default useHentKodeverk;
