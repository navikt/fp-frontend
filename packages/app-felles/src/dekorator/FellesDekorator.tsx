import React, { type ComponentProps } from 'react';

import type { Theme } from '@navikt/ds-react';
import { createIntl, dateFormat, decodeHtmlEntity, timeFormat } from '@navikt/ft-utils';

import { ApiPollingStatus, RETTSKILDE_URL, SYSTEMRUTINE_URL } from '@navikt/fp-konstanter';
import { type DekoratorLenke, DekoratorMedFeilviserSakIndex, type Feilmelding } from '@navikt/fp-sak-dekorator';

import { ErrorType, type FpError } from '../restApiError/errorType';
import { useRestApiError, useRestApiErrorDispatcher } from '../restApiError/RestApiErrorContext';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export type QueryStrings = {
  errorcode?: string;
  errormessage?: string;
};

interface Props {
  tittel: string;
  interneLenker: Array<DekoratorLenke>;
  queryStrings: QueryStrings;
  setSiteHeight: (headerHeight: number) => void;
  crashMessage?: string;
  hideErrorMessages?: boolean;
  theme: ComponentProps<typeof Theme>['theme'];
  setTheme: (theme: NonNullable<ComponentProps<typeof Theme>['theme']>) => void;
  ansattnavn: string;
  gotToAppRoot: () => void;
}

export const FellesDekorator = ({
  tittel,
  interneLenker,
  queryStrings,
  setSiteHeight,
  crashMessage,
  hideErrorMessages = false,
  theme,
  setTheme,
  ansattnavn,
  gotToAppRoot,
}: Props) => {
  const errorMessages = useRestApiError();
  const { removeErrorMessages } = useRestApiErrorDispatcher();

  const gåTilRot = (e: React.SyntheticEvent) => {
    if (e.type === 'click') {
      gotToAppRoot();
    }
    if (e.type === 'contextmenu') {
      globalThis.open('/', '_newtab');
    }
    e.preventDefault();
  };

  const eksterneLenker = [
    {
      tekst: intl.formatMessage({ id: 'Dekorator.Rettskilde' }),
      href: RETTSKILDE_URL,
    },
    {
      tekst: intl.formatMessage({ id: 'Dekorator.Systemrutine' }),
      href: SYSTEMRUTINE_URL,
    },
  ];

  return (
    <DekoratorMedFeilviserSakIndex
      tittel={tittel}
      tittelCallback={gåTilRot}
      navAnsattNavn={ansattnavn}
      feilmeldinger={hideErrorMessages ? [] : formaterFeilmeldinger(errorMessages, queryStrings, crashMessage)}
      fjernFeilmeldinger={removeErrorMessages}
      setSiteHeight={setSiteHeight}
      interneLenker={interneLenker}
      eksterneLenker={eksterneLenker}
      theme={theme}
      setTheme={setTheme}
    />
  );
};

const formaterFeilmeldinger = (
  alleFeilmeldinger: FpError[],
  queryStringFeilmeldinger: QueryStrings,
  crashMessage?: string,
): Feilmelding[] => {
  const feilmeldinger: Feilmelding[] = [];

  if (queryStringFeilmeldinger.errorcode) {
    addIfNotExists(feilmeldinger, { melding: intl.formatMessage({ id: queryStringFeilmeldinger.errorcode }) });
  }
  if (queryStringFeilmeldinger.errormessage) {
    addIfNotExists(feilmeldinger, { melding: queryStringFeilmeldinger.errormessage });
  }
  if (crashMessage) {
    addIfNotExists(feilmeldinger, { melding: crashMessage });
  }

  for (const feilmelding of alleFeilmeldinger) {
    prosesserFeilmelding(feilmelding, feilmeldinger);
  }

  return feilmeldinger;
};

const parseErrorDetails = (details: string) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return JSON.parse(details);
  } catch {
    return 'Kunne ikke tolke feildetaljer';
  }
};

const prosesserFeilmelding = (feilmelding: FpError, feilmeldinger: Feilmelding[]) => {
  switch (feilmelding.type) {
    case ErrorType.POLLING_HALTED_OR_DELAYED:
      if (feilmelding.status === ApiPollingStatus.HALTED) {
        const decoded = decodeHtmlEntity(feilmelding.message);
        addIfNotExists(feilmeldinger, {
          melding: intl.formatMessage({ id: 'Rest.ErrorMessage.General' }),
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          tilleggsInfo: decoded ? parseErrorDetails(decoded) : undefined,
        });
      }
      if (feilmelding.status === ApiPollingStatus.DELAYED) {
        addIfNotExists(feilmeldinger, {
          melding: intl.formatMessage(
            { id: 'Rest.ErrorMessage.DownTime' },
            {
              date: dateFormat(feilmelding.eta),
              time: timeFormat(feilmelding.eta),
              message: feilmelding.message,
            },
          ),
        });
      }
      break;
    case ErrorType.POLLING_TIMEOUT:
      addIfNotExists(feilmeldinger, {
        melding: intl.formatMessage({ id: 'Rest.ErrorMessage.PollingTimeout' }, { location: feilmelding.location }),
      });
      break;
    case ErrorType.REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND:
      addIfNotExists(feilmeldinger, {
        melding: intl.formatMessage(
          { id: 'Rest.ErrorMessage.GatewayTimeoutOrNotFound' },
          {
            contextPath: feilmelding.location ? feilmelding.location.split('/')[1]?.toUpperCase() : '',
            location: feilmelding.location,
          },
        ),
      });
      break;
    case ErrorType.REQUEST_FORBIDDEN:
    case ErrorType.REQUEST_UNAUTHORIZED:
    case ErrorType.GENERAL_ERROR:
    default:
      addIfNotExists(feilmeldinger, {
        melding: feilmelding.message,
      });
  }
};

const addIfNotExists = (feilmeldinger: Feilmelding[], nyFeilmelding: Feilmelding) => {
  if (
    !feilmeldinger.some(
      feil => feil.melding === nyFeilmelding.melding && feil.tilleggsInfo === nyFeilmelding.tilleggsInfo,
    )
  ) {
    feilmeldinger.push(nyFeilmelding);
  }
};
