import React, {
  FunctionComponent, ReactElement,
} from 'react';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { LoadingPanel } from '@fpsak-frontend/shared-components';

interface OwnProps {
  erPanelValgt: boolean;
  dataState: string;
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
