import React, { FunctionComponent, useMemo, useCallback } from 'react';
import { useIntl, IntlShape } from 'react-intl';
import { decodeHtmlEntity } from '@navikt/ft-utils';
import { useLocation, useNavigate } from 'react-router-dom';
import { DekoratorMedFeilviserSakIndex, Feilmelding } from '@navikt/ft-sak-dekorator';

import { useRestApiError, useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import { SYSTEMRUTINE_URL, RETTSKILDE_URL } from '@navikt/fp-konstanter';

import { Link } from '@navikt/ds-react';
import { ExternalLinkIcon } from '@navikt/aksel-icons';
import ErrorFormatter from './feilhandtering/ErrorFormatter';
import ErrorMessage from './feilhandtering/ErrorMessage';
import { FagsakApiKeys, restFagsakApiHooks } from '../../data/fagsakContextApi';

import { AVDELINGSLEDER_PATH, JOURNALFØRING_PATH } from '../paths';

type QueryStrings = {
  errorcode?: string;
  errormessage?: string;
};

const parseErrorDetails = (details: string) => {
  try {
    return JSON.parse(details);
  } catch (error) {
    return 'Kunne ikke tolke feildetaljer';
  }
};

const lagFeilmeldinger = (
  errorMessages: ErrorMessage[],
  queryStrings: QueryStrings,
  intl: IntlShape,
): Feilmelding[] => {
  const resolvedErrorMessages: Feilmelding[] = [];
  if (queryStrings.errorcode) {
    resolvedErrorMessages.push({ melding: intl.formatMessage({ id: queryStrings.errorcode }) });
  }
  if (queryStrings.errormessage) {
    resolvedErrorMessages.push({ melding: queryStrings.errormessage });
  }
  errorMessages.forEach(message => {
    let msg = {
      melding: message.code ? intl.formatMessage({ id: message.code }, message.params) : message.text,
      tilleggsInfo: undefined,
    } as Feilmelding;
    if (message.params && message.params.errorDetails) {
      const decodedDetails = decodeHtmlEntity(message.params.errorDetails);
      msg = {
        ...msg,
        tilleggsInfo: decodedDetails ? parseErrorDetails(decodedDetails) : undefined,
      };
    }
    resolvedErrorMessages.push(msg);
  });
  return resolvedErrorMessages;
};

const EMPTY_ARRAY = [] as Feilmelding[];

interface OwnProps {
  queryStrings: QueryStrings;
  setSiteHeight: (headerHeight: number) => void;
  crashMessage?: string;
  hideErrorMessages?: boolean;
}

const Dekorator: FunctionComponent<OwnProps> = ({
  queryStrings,
  setSiteHeight,
  crashMessage,
  hideErrorMessages = false,
}) => {
  const intl = useIntl();
  const location = useLocation();
  const saksnummer = location.pathname.split('/fagsak/')[1]?.split('/')[0];

  const initFetch = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.INIT_FETCH);
  const { innloggetBruker: navAnsatt, sakLinks } = initFetch;

  const navigate = useNavigate();
  const visLos = useCallback(
    (e: React.SyntheticEvent) => {
      if (e.type === 'click') {
        navigate('/');
      }
      if (e.type === 'contextmenu') {
        window.open('/', '_newtab');
      }
      e.preventDefault();
    },
    [navigate],
  );
  const visAvdelingslederside = useCallback(
    (e: React.SyntheticEvent) => {
      navigate(AVDELINGSLEDER_PATH);
      e.preventDefault();
    },
    [navigate],
  );

  const visJournalføringside = useCallback(
    (e: React.SyntheticEvent) => {
      navigate(JOURNALFØRING_PATH);
      e.preventDefault();
    },
    [navigate],
  );

  const errorMessages = useRestApiError();
  const { removeErrorMessages } = useRestApiErrorDispatcher();

  const formaterteFeilmeldinger = useMemo(
    () => new ErrorFormatter().format(errorMessages, crashMessage),
    [errorMessages],
  );
  const resolvedErrorMessages = useMemo(
    () => lagFeilmeldinger(formaterteFeilmeldinger, queryStrings, intl),
    [formaterteFeilmeldinger, queryStrings],
  );

  const kanOppgavestyre = navAnsatt?.kanOppgavestyre;
  const kanJournalføre = false; // TODO Til vi er klare for å åpne for alle saksbehandlere

  const interneLenker = useMemo(() => {
    const lenker = [];
    if (kanOppgavestyre) {
      lenker.push(
        <Link onClick={visAvdelingslederside}>{intl.formatMessage({ id: 'Dekorator.Avdelingsleder' })}</Link>,
      );
    }
    if (kanJournalføre) {
      lenker.push(<Link onClick={visJournalføringside}>{intl.formatMessage({ id: 'Dekorator.Journalforing' })}</Link>);
    }
    return lenker;
  }, [kanOppgavestyre, kanJournalføre]);

  const eksterneLenker = useMemo(
    () => [
      <Link href={RETTSKILDE_URL} target="_blank">
        {intl.formatMessage({ id: 'Dekorator.Rettskilde' })}
        <ExternalLinkIcon title="Ekstern lenke" />
      </Link>,
      <Link href={SYSTEMRUTINE_URL} target="_blank">
        {intl.formatMessage({ id: 'Dekorator.Systemrutine' })}
        <ExternalLinkIcon title="Ekstern lenke" />
      </Link>,
      <Link
        href={`${sakLinks.find(l => l.rel === 'arbeidstaker-redirect')?.href}?saksnummer=${saksnummer}`}
        target="_blank"
      >
        {intl.formatMessage({ id: 'Dekorator.AaReg' })}
        <ExternalLinkIcon title="Ekstern lenke" />
      </Link>,
      <Link
        href={`${sakLinks.find(l => l.rel === 'ainntekt-redirect')?.href}?saksnummer=${saksnummer}`}
        target="_blank"
      >
        {intl.formatMessage({ id: 'Dekorator.AInntekt' })}
        <ExternalLinkIcon title="Ekstern lenke" />
      </Link>,
    ],
    [],
  );

  return (
    <DekoratorMedFeilviserSakIndex
      tittel={intl.formatMessage({ id: 'Dekorator.Foreldrepenger' })}
      tittelCallback={visLos}
      navAnsattNavn={navAnsatt?.navn}
      feilmeldinger={hideErrorMessages ? EMPTY_ARRAY : resolvedErrorMessages}
      fjernFeilmeldinger={removeErrorMessages}
      setSiteHeight={setSiteHeight}
      interneLenker={interneLenker}
      eksterneLenker={eksterneLenker}
    />
  );
};

export default Dekorator;
