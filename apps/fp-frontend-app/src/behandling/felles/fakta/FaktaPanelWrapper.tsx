import React, { ReactElement } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

interface Props {
  erPanelValgt: boolean;
  dataState: RestApiState;
  children: ReactElement | null;
}

export const FaktaPanelWrapper = ({ erPanelValgt, dataState, children }: Props) => {
  if (!erPanelValgt) {
    return null;
  }

  if (dataState !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return children;
};
