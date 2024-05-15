import React, { FunctionComponent, useEffect } from 'react';

import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { RestApiPathsKeys, restApiHooks } from '../data/fplosRestApi';
import SaksbehandlerAvdeling from '../typer/saksbehandlerAvdelingTsType';
import GrupperPanel from './components/GrupperPanel';

interface OwnProps {
  valgtAvdelingEnhet: string;
  avdelingensSaksbehandlere: SaksbehandlerAvdeling[];
}

const GrupperIndex: FunctionComponent<OwnProps> = ({ valgtAvdelingEnhet, avdelingensSaksbehandlere }) => {
  const { startRequest: hentGrupper, state, data } = restApiHooks.useRestApiRunner(RestApiPathsKeys.HENT_GRUPPER);
  const { startRequest: opprettGruppe, state: opprettNyGruppeState } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.OPPRETT_GRUPPE,
  );
  const { startRequest: leggSaksbehandlerTilGruppe } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.LEGG_SAKSBEHANDLER_TIL_GRUPPE,
  );
  const { startRequest: fjernSaksbehandlerFraGruppe } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.FJERN_SAKSBEHANDLER_FRA_GRUPPE,
  );
  const { startRequest: endreNavnPåGruppe } = restApiHooks.useRestApiRunner(RestApiPathsKeys.ENDRE_GRUPPENAVN);
  const { startRequest: fjernGruppe } = restApiHooks.useRestApiRunner(RestApiPathsKeys.SLETT_GRUPPE);

  const lagreValgtSaksbehandlar = (brukerIdent: string, gruppeId: number, skalLeggeTil: boolean) => {
    if (skalLeggeTil) {
      leggSaksbehandlerTilGruppe({
        brukerIdent,
        avdelingEnhet: valgtAvdelingEnhet,
        gruppeId,
      }).then(() => hentGrupper({ avdelingEnhet: valgtAvdelingEnhet }));
    } else {
      fjernSaksbehandlerFraGruppe({
        brukerIdent,
        avdelingEnhet: valgtAvdelingEnhet,
        gruppeId,
      }).then(() => hentGrupper({ avdelingEnhet: valgtAvdelingEnhet }));
    }
  };

  const endreGruppenavn = (gruppeId: number, gruppeNavn: string) =>
    endreNavnPåGruppe({
      gruppeId,
      gruppeNavn,
      avdelingEnhet: valgtAvdelingEnhet,
    });

  const slettGruppe = (gruppeId: number) =>
    fjernGruppe({
      gruppeId,
      avdelingEnhet: valgtAvdelingEnhet,
    });

  const opprettOgHentAlleGrupper = () =>
    opprettGruppe({ avdelingEnhet: valgtAvdelingEnhet }).then(() => hentGrupper({ avdelingEnhet: valgtAvdelingEnhet }));

  useEffect(() => {
    hentGrupper({
      avdelingEnhet: valgtAvdelingEnhet,
    });
  }, []);

  if (state !== RestApiState.SUCCESS || !data) {
    return <LoadingPanel />;
  }

  return (
    <GrupperPanel
      grupper={data}
      avdelingensSaksbehandlere={avdelingensSaksbehandlere}
      valgtAvdelingEnhet={valgtAvdelingEnhet}
      opprettOgHentAlleGrupper={opprettOgHentAlleGrupper}
      opprettNyGruppeState={opprettNyGruppeState}
      lagreValgtSaksbehandlar={lagreValgtSaksbehandlar}
      endreGruppenavn={endreGruppenavn}
      slettGruppe={slettGruppe}
    />
  );
};

export default GrupperIndex;
