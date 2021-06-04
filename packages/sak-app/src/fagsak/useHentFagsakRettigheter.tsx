import { useMemo } from 'react';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import useGetEnabledApplikasjonContext from '../app/useGetEnabledApplikasjonContext';
import ApplicationContextPath from '../app/ApplicationContextPath';
import useBehandlingEndret from '../behandling/useBehandlingEndret';
import { FpsakApiKeys, restApiHooks } from '../data/fpsakApi';
import SakRettigheter from './sakRettigheterTsType';

const useHentFagsakRettigheter = (saksnummer: string, behandlingUuid?: string, behandlingVersjon?: number):
[ harHentet: boolean, rettigheter?: SakRettigheter ] => {
  const erBehandlingEndretFraUndefined = useBehandlingEndret(behandlingUuid, behandlingVersjon);
  const enabledApplicationContexts = useGetEnabledApplikasjonContext();
  const skalHenteFraFpTilbake = enabledApplicationContexts.includes(ApplicationContextPath.FPTILBAKE);

  const { data: sakRettigheterFpSak, state: sakRettigheterStateFpSak } = restApiHooks
    .useRestApi(FpsakApiKeys.SAK_RETTIGHETER, { saksnummer }, {
      updateTriggers: [saksnummer, behandlingUuid, behandlingVersjon],
      suspendRequest: !saksnummer || erBehandlingEndretFraUndefined,
      keepData: true,
    });

  const { data: sakRettigheterFpTilbake, state: sakRettigheterStateFpTilbake } = restApiHooks
    .useRestApi(FpsakApiKeys.SAK_RETTIGHETER_FPTILBAKE, { saksnummer }, {
      updateTriggers: [saksnummer, behandlingUuid, behandlingVersjon],
      suspendRequest: !skalHenteFraFpTilbake || !saksnummer || erBehandlingEndretFraUndefined,
      keepData: true,
    });

  const harHentetFpSak = !!sakRettigheterFpSak
    || (sakRettigheterStateFpSak !== RestApiState.NOT_STARTED && sakRettigheterStateFpSak !== RestApiState.LOADING);
  const harHentetFpTilbake = !skalHenteFraFpTilbake || !!sakRettigheterFpTilbake
    || (sakRettigheterStateFpTilbake !== RestApiState.NOT_STARTED && sakRettigheterStateFpTilbake !== RestApiState.LOADING);

  const sakRettigheter = useMemo(() => {
    if (sakRettigheterFpSak && sakRettigheterFpTilbake) {
      return {
        sakSkalTilInfotrygd: sakRettigheterFpSak.sakSkalTilInfotrygd,
        behandlingTypeKanOpprettes: sakRettigheterFpSak.behandlingTypeKanOpprettes
          .concat(sakRettigheterFpTilbake.behandlingTypeKanOpprettes),
      };
    }
    return sakRettigheterFpSak;
  }, [sakRettigheterFpSak, sakRettigheterFpTilbake]);

  return [harHentetFpSak && harHentetFpTilbake, sakRettigheter];
};

export default useHentFagsakRettigheter;
