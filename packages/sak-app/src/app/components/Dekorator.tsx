import React, { FunctionComponent, useMemo } from 'react';
import { useIntl, IntlShape } from 'react-intl';
import DekoratorMedFeilviserSakIndex, { Feilmelding } from '@navikt/ft-sak-dekorator';
import { decodeHtmlEntity } from '@navikt/ft-utils';

import { useRestApiError, useRestApiErrorDispatcher } from '@fpsak-frontend/rest-api-hooks';
import { SYSTEMRUTINE_URL } from '@fpsak-frontend/konstanter';

import ErrorFormatter from './feilhandtering/ErrorFormatter';
import ErrorMessage from './feilhandtering/ErrorMessage';
import { FpsakApiKeys, restApiHooks } from '../../data/fpsakApi';

import '@navikt/ft-sak-dekorator/dist/style.css';

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
  errorMessages.forEach((message) => {
    let msg = {
      melding: (message.code ? intl.formatMessage({ id: message.code }, message.params) : message.text),
      tilleggsInfo: undefined,
    };
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

  const navAnsatt = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.NAV_ANSATT);

  const errorMessages = useRestApiError();
  const { removeErrorMessages } = useRestApiErrorDispatcher();

  const formaterteFeilmeldinger = useMemo(() => new ErrorFormatter().format(errorMessages, crashMessage), [errorMessages]);
  const resolvedErrorMessages = useMemo(() => lagFeilmeldinger(formaterteFeilmeldinger, queryStrings, intl), [formaterteFeilmeldinger, queryStrings]);

  return (
    <DekoratorMedFeilviserSakIndex
      tittel={intl.formatMessage({ id: 'Dekorator.Foreldrepenger' })}
      tittelLenke="/fpsak"
      navAnsattNavn={navAnsatt?.navn}
      systemrutineUrl={SYSTEMRUTINE_URL}
      feilmeldinger={hideErrorMessages ? EMPTY_ARRAY : resolvedErrorMessages}
      fjernFeilmeldinger={removeErrorMessages}
      setSiteHeight={setSiteHeight}
    />
  );
};

export default Dekorator;
