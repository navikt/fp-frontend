import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { ErrorPageWrapper } from './components/ErrorPageWrapper';

interface Props {
  renderSomLenke: (tekst: ReactElement) => ReactElement;
}

/**
 * UnauthorizedPage
 *
 * Denne komponenten vises når den Nav-ansatte prøver å aksessere en url som ikke finnes.
 * Det blir presentert en generell feilmelding og en lenke som tar Nav-ansatt tilbake til hovedsiden.
 */
export const UnauthorizedPage = ({ renderSomLenke }: Props) => (
  <ErrorPageWrapper titleCode="UnauthorizedPage.Header">
    {renderSomLenke(<FormattedMessage id="UnauthorizedPage.LinkText" />)}
    <br />
  </ErrorPageWrapper>
);
