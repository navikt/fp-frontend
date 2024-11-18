import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { ErrorPageWrapper } from './components/ErrorPageWrapper';

interface Props {
  renderSomLenke: (tekst: ReactElement) => ReactElement;
}

/**
 * NotFoundPage
 *
 * Denne komponenten vises når den Nav-ansatte prøver å aksessere en url som ikke finnes.
 * Det blir presentert en generell feilmelding og en lenke som tar Nav-ansatt tilbake til hovedsiden.
 */
export const NotFoundPage = ({ renderSomLenke }: Props) => (
  <ErrorPageWrapper titleCode="NotFoundPage.Header">
    {renderSomLenke(<FormattedMessage id="NotFoundPage.LinkText" />)}
  </ErrorPageWrapper>
);
