import React, { type ComponentProps } from 'react';
import { type IntlShape, useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import type { Theme } from '@navikt/ds-react';
import { dateFormat, decodeHtmlEntity, timeFormat } from '@navikt/ft-utils';

import { ErrorType, type FpError, useRestApiError, useRestApiErrorDispatcher } from '@navikt/fp-app-felles';
import {
  ApiPollingStatus,
  FPSAK_URL_NAME,
  JOURNALFORING_URL_NAME,
  RETTSKILDE_URL,
  SYSTEMRUTINE_URL,
} from '@navikt/fp-konstanter';
import { type DekoratorLenke, DekoratorMedFeilviserSakIndex, type Feilmelding } from '@navikt/fp-sak-dekorator';

type QueryStrings = {
  errorcode?: string;
  errormessage?: string;
};

interface Props {
  queryStrings: QueryStrings;
  setSiteHeight: (headerHeight: number) => void;
  crashMessage?: string;
  hideErrorMessages?: boolean;
  theme: ComponentProps<typeof Theme>['theme'];
  setTheme: (theme: ComponentProps<typeof Theme>['theme']) => void;
  ansattnavn: string;
}

export const Dekorator = ({
  queryStrings,
  setSiteHeight,
  crashMessage,
  hideErrorMessages = false,
  theme,
  setTheme,
  ansattnavn,
}: Props) => {
  const intl = useIntl();

  const errorMessages = useRestApiError();
  const { removeErrorMessages } = useRestApiErrorDispatcher();

  const navigate = useNavigate();
  const visLos = (e: React.SyntheticEvent) => {
    if (e.type === 'click') {
      void navigate('/');
    }
    if (e.type === 'contextmenu') {
      globalThis.open('/', '_newtab');
    }
    e.preventDefault();
  };

  const interneLenker = new Array<DekoratorLenke>();
  interneLenker.push({
    tekst: intl.formatMessage({ id: 'Dekorator.Foreldrepenger' }),
    callback: () =>
      // eslint-disable-next-line react-hooks/immutability -- OK
      (globalThis.location.href = globalThis.location.href.replace(JOURNALFORING_URL_NAME, FPSAK_URL_NAME)),
  });

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
      tittel={intl.formatMessage({ id: 'Dekorator.Journalforing' })}
      tittelCallback={visLos}
      navAnsattNavn={ansattnavn}
      feilmeldinger={hideErrorMessages ? [] : formaterFeilmeldinger(intl, errorMessages, queryStrings, crashMessage)}
      fjernFeilmeldinger={removeErrorMessages}
      setSiteHeight={setSiteHeight}
      interneLenker={interneLenker}
      eksterneLenker={eksterneLenker}
      theme={theme}
      setTheme={setTheme}
    />
  );
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

const formaterFeilmeldinger = (
  intl: IntlShape,
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
