import React, {
  FunctionComponent, ReactElement,
} from 'react';

import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

interface OwnProps {
  erPanelValgt: boolean;
  dataState: RestApiState;
  children: ReactElement;
}

const FaktaPanelWrapper: FunctionComponent<OwnProps> = ({
  erPanelValgt,
  dataState,
  children,
}) => {
  if (!erPanelValgt) {
    return null;
  }

  if (dataState !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return children;
};

export default FaktaPanelWrapper;
