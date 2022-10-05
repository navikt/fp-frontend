import React, { useCallback, Fragment, FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, BodyShort, Heading } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { åpneFagsak } from '../../utils/paths';
import Oppgave from '../../typer/oppgaveTsType';
import { RestApiPathsKeys, RestApiGlobalStatePathsKeys, restApiHooks } from '../../data/fplosSaksbehandlerRestApi';

const getClickEvent = (openFpsak: (oppgave: Oppgave) => void, oppgave: Oppgave) => () => openFpsak(oppgave);

const EMPTY_ARRAY: Oppgave[] = [];

/**
 * SistBehandledeSaker
 *
 * Denne komponenten viser de tre siste fagsakene en nav-ansatt har behandlet.
 */
const SistBehandledeSaker: FunctionComponent = () => {
  const { data: sistBehandledeSaker = EMPTY_ARRAY } = restApiHooks.useRestApi(RestApiPathsKeys.BEHANDLEDE_OPPGAVER);
  const fpsakUrl = restApiHooks.useGlobalStateRestApiData(RestApiGlobalStatePathsKeys.FPSAK_URL);

  const openFpsak = useCallback((oppgave: Oppgave) => {
    åpneFagsak(fpsakUrl.verdi, oppgave.system, oppgave.saksnummer, oppgave.behandlingId);
  }, [fpsakUrl]);

  return (
    <>
      <Heading size="small"><FormattedMessage id="SistBehandledeSaker.SistBehandledeSaker" /></Heading>
      <VerticalSpacer eightPx />
      {sistBehandledeSaker.length === 0
      && <BodyShort size="small"><FormattedMessage id="SistBehandledeSaker.IngenBehandlinger" /></BodyShort>}
      {sistBehandledeSaker.map((sbs, index) => (
        <Fragment key={sbs.id}>
          <BodyShort size="small">
            {sbs.navn
              ? (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <Link
                  href="#"
                  onClick={getClickEvent(openFpsak, sbs)}
                >
                  {`${sbs.navn} ${sbs.personnummer}`}
                </Link>
              )
              : (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <Link href="#" onClick={getClickEvent(openFpsak, sbs)}>
                  <FormattedMessage id="SistBehandledeSaker.Behandling" values={{ index: index + 1 }} />
                </Link>
              )}
          </BodyShort>
          <VerticalSpacer eightPx />
        </Fragment>
      ))}
    </>
  );
};

export default SistBehandledeSaker;
