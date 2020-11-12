import React, { FunctionComponent, useMemo } from 'react';
import { injectIntl, IntlShape, WrappedComponentProps } from 'react-intl';

import HeaderWithErrorPanel, { Feilmelding } from '@fpsak-frontend/sak-dekorator';
import { useRestApiError, useRestApiErrorDispatcher } from '@fpsak-frontend/rest-api-hooks';
import { RETTSKILDE_URL, SYSTEMRUTINE_URL } from '@fpsak-frontend/konstanter';
import rettskildeneIkonUrl from '@fpsak-frontend/assets/images/rettskildene.svg';
import systemrutineIkonUrl from '@fpsak-frontend/assets/images/rutine.svg';
import { decodeHtmlEntity } from '@fpsak-frontend/utils';
import { NavAnsatt } from '@fpsak-frontend/types';

import { FpsakApiKeys, restApiHooks } from '../../data/fpsakApi';
import ErrorFormatter from '../feilhandtering/ErrorFormatter';
import ErrorMessage from '../feilhandtering/ErrorMessage';

type QueryStrings = {
  errorcode?: string;
  errormessage?: string;
};

const lagFeilmeldinger = (intl: IntlShape, errorMessages: ErrorMessage[], queryStrings: QueryStrings): Feilmelding[] => {
  const resolvedErrorMessages: Feilmelding[] = [];
  if (queryStrings.errorcode) {
    resolvedErrorMessages.push({ message: intl.formatMessage({ id: queryStrings.errorcode }) });
  }
  if (queryStrings.errormessage) {
    resolvedErrorMessages.push({ message: queryStrings.errormessage });
  }
  errorMessages.forEach((message) => {
    let msg = {
      message: (message.code ? intl.formatMessage({ id: message.code }, message.params) : message.text),
      additionalInfo: undefined,
    };
    if (message.params && message.params.errorDetails) {
      msg = {
        ...msg,
        additionalInfo: JSON.parse(decodeHtmlEntity(message.params.errorDetails)),
      };
    }
    resolvedErrorMessages.push(msg);
  });
  return resolvedErrorMessages;
};

const EMPTY_ARRAY = [];

interface OwnProps {
  queryStrings: QueryStrings;
  hideErrorMessages?: boolean;
  setSiteHeight: (headerHeight: number) => void;
}

const Dekorator: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  queryStrings,
  setSiteHeight,
  hideErrorMessages = false,
}) => {
  const navAnsatt = restApiHooks.useGlobalStateRestApiData<NavAnsatt>(FpsakApiKeys.NAV_ANSATT);

  const errorMessages = useRestApiError() || EMPTY_ARRAY;
  const formaterteFeilmeldinger = useMemo(() => new ErrorFormatter().format(errorMessages, undefined), [errorMessages]);

  const resolvedErrorMessages = useMemo(() => lagFeilmeldinger(intl, formaterteFeilmeldinger, queryStrings), [formaterteFeilmeldinger, queryStrings]);

  const { removeErrorMessages } = useRestApiErrorDispatcher();

  const iconLinks = useMemo(() => [{
    url: RETTSKILDE_URL,
    icon: rettskildeneIkonUrl,
    text: intl.formatMessage({ id: 'Header.Rettskilde' }),
  }, {
    url: SYSTEMRUTINE_URL,
    icon: systemrutineIkonUrl,
    text: intl.formatMessage({ id: 'Header.Systemrutine' }),
  }], []);

  return (
    <HeaderWithErrorPanel
      systemTittel={intl.formatMessage({ id: 'Header.Foreldrepenger' })}
      iconLinks={iconLinks}
      navAnsattName={navAnsatt?.navn}
      removeErrorMessage={removeErrorMessages}
      errorMessages={hideErrorMessages ? EMPTY_ARRAY : resolvedErrorMessages}
      setSiteHeight={setSiteHeight}
    />
  );
};

export default injectIntl(Dekorator);
