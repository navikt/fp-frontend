import React, { FunctionComponent, useEffect, useCallback } from 'react';

import { restApiHooks, RestApiPathsKeys, RestApiGlobalStatePathsKeys } from '../data/fplosRestApi';
import Reservasjon from '../typer/reservasjonTsType';
import ReservasjonerTabell from './components/ReservasjonerTabell';

const EMPTY_ARRAY: Reservasjon[] = [];

interface OwnProps {
  valgtAvdelingEnhet: string;
}

export const ReservasjonerIndex: FunctionComponent<OwnProps> = ({
  valgtAvdelingEnhet,
}) => {
  const { data: reservasjoner = EMPTY_ARRAY, startRequest: hentAvdelingensReservasjoner } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.RESERVASJONER_FOR_AVDELING,
  );
  const { startRequest: opphevOppgaveReservasjon } = restApiHooks.useRestApiRunner(RestApiPathsKeys.AVDELINGSLEDER_OPPHEVER_RESERVASJON);

  const alleKodeverk = restApiHooks.useGlobalStateRestApiData(RestApiGlobalStatePathsKeys.KODEVERK_LOS);

  useEffect(() => {
    hentAvdelingensReservasjoner({ avdelingEnhet: valgtAvdelingEnhet });
  }, []);

  const opphevOppgaveReservasjonFn = useCallback((oppgaveId: number): Promise<any> => opphevOppgaveReservasjon({ oppgaveId })
    .then(() => hentAvdelingensReservasjoner({ avdelingEnhet: valgtAvdelingEnhet })),
  [valgtAvdelingEnhet]);

  const endreOppgaveReservasjonFn = useCallback(() => hentAvdelingensReservasjoner({ avdelingEnhet: valgtAvdelingEnhet }), [valgtAvdelingEnhet]);

  return (
    <ReservasjonerTabell
      opphevReservasjon={opphevOppgaveReservasjonFn}
      reservasjoner={reservasjoner}
      hentAvdelingensReservasjoner={endreOppgaveReservasjonFn}
      alleKodeverk={alleKodeverk}
    />
  );
};

export default ReservasjonerIndex;
