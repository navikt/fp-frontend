import React, { useCallback, Fragment, FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, BodyShort, Heading } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { Oppgave } from '@fpsak-frontend/los-felles';

import { RestApiPathsKeys, restApiHooks } from '../../data/fplosSaksbehandlerRestApi';

const getClickEvent = (openFpsak: (oppgave: Oppgave) => void, oppgave: Oppgave) => () => openFpsak(oppgave);

const EMPTY_ARRAY: Oppgave[] = [];

interface OwnProps {
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
}

/**
 * SistBehandledeSaker
 *
 * Denne komponenten viser de tre siste fagsakene en nav-ansatt har behandlet.
 */
const SistBehandledeSaker: FunctionComponent<OwnProps> = ({
  åpneFagsak,
}) => {
  const { data: sistBehandledeSaker = EMPTY_ARRAY } = restApiHooks.useRestApi(RestApiPathsKeys.BEHANDLEDE_OPPGAVER);

  const openFpsak = useCallback((oppgave: Oppgave) => {
    åpneFagsak(oppgave.saksnummer.toString(), oppgave.behandlingId);
  }, [åpneFagsak]);

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
