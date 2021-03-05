import React, {
  FunctionComponent, ReactElement,
} from 'react';

import { LoadingPanel } from '@fpsak-frontend/shared-components';

interface OwnProps {
  erPanelValgt: boolean;
  isLoading: boolean;
  children: ReactElement;
}

const FaktaPanelWrapper: FunctionComponent<OwnProps> = ({
  erPanelValgt,
  isLoading,
  children,
}) => {
  if (!erPanelValgt) {
    return null;
  }

  if (isLoading) {
    return <LoadingPanel />;
  }

  return children;
};

export default FaktaPanelWrapper;
