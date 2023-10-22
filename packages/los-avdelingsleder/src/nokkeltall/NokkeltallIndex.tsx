import React, { FunctionComponent } from 'react';

import { restApiHooks, RestApiPathsKeys } from '../data/fplosRestApi';
import OppgaverForAvdeling from '../typer/oppgaverForAvdelingTsType';
import OppgaveForDato from '../typer/oppgaverForDatoTsType';
import BehandlingVentefrist from '../typer/behandlingVentefristTsType';
import OppgaverForForsteStonadsdag from '../typer/oppgaverForForsteStonadsdagTsType';
import OppgaverSomErApneEllerPaVent from '../typer/oppgaverSomErApneEllerPaVentTsType';
import NokkeltallPanel from './components/NokkeltallPanel';

const EMPTY_ARRAY_AVDELING: OppgaverForAvdeling[] = [];
const EMPTY_ARRAY_DATO: OppgaveForDato[] = [];
const EMPTY_ARRAY_VENTEFRIST: BehandlingVentefrist[] = [];
const EMPTY_ARRAY_STONADSDAG: OppgaverForForsteStonadsdag[] = [];
const EMPTY_ARRAY_APNE_ELLER_PA_VENT: OppgaverSomErApneEllerPaVent[] = [];

interface OwnProps {
  valgtAvdelingEnhet: string;
}

/**
 * NokkeltallIndex
 */
const NokkeltallIndex: FunctionComponent<OwnProps> = ({ valgtAvdelingEnhet }) => {
  const { data: oppgaverForAvdeling = EMPTY_ARRAY_AVDELING } = restApiHooks.useRestApi(
    RestApiPathsKeys.HENT_OPPGAVER_FOR_AVDELING,
    { avdelingEnhet: valgtAvdelingEnhet },
  );
  const { data: oppgaverPerDato = EMPTY_ARRAY_DATO } = restApiHooks.useRestApi(
    RestApiPathsKeys.HENT_OPPGAVER_PER_DATO,
    { avdelingEnhet: valgtAvdelingEnhet },
  );
  const { data: behandlingerPaVent = EMPTY_ARRAY_VENTEFRIST } = restApiHooks.useRestApi(
    RestApiPathsKeys.HENT_BEHANDLINGER_FRISTUTLOP,
    { avdelingEnhet: valgtAvdelingEnhet },
  );
  const { data: oppgaverPerForsteStonadsdag = EMPTY_ARRAY_STONADSDAG } = restApiHooks.useRestApi(
    RestApiPathsKeys.HENT_OPPGAVER_PER_FORSTE_STONADSDAG,
    { avdelingEnhet: valgtAvdelingEnhet },
  );
  const { data: oppgaverApneEllerPaVent = EMPTY_ARRAY_APNE_ELLER_PA_VENT } = restApiHooks.useRestApi(
    RestApiPathsKeys.HENT_OPPGAVER_APNE_ELLER_PA_VENT,
    { avdelingEnhet: valgtAvdelingEnhet },
  );

  return (
    <NokkeltallPanel
      oppgaverForAvdeling={oppgaverForAvdeling}
      oppgaverPerDato={oppgaverPerDato}
      behandlingerPaVent={behandlingerPaVent}
      oppgaverPerForsteStonadsdag={oppgaverPerForsteStonadsdag}
      oppgaverApneEllerPaVent={oppgaverApneEllerPaVent}
    />
  );
};

export default NokkeltallIndex;
