import React, {
  FunctionComponent, ReactElement,
} from 'react';
import classnames from 'classnames/bind';

import { LoadingPanel, FadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

import ProsessStegIkkeBehandletPanel from './ProsessStegIkkeBehandletPanel';

import styles from './prosessPanelWrapper.less';

const classNames = classnames.bind(styles);

interface PanelContainerOwnProps {
  skalSkjulePanel?: boolean;
  children: any;
}

const PanelContainer: FunctionComponent<PanelContainerOwnProps> = ({
  skalSkjulePanel = false,
  children,
}) => (
  <div className={classNames('steg', { skalSkjulePanel })}>
    <FadingPanel>
      {children}
    </FadingPanel>
  </div>
);

interface OwnProps {
  erPanelValgt: boolean;
  erAksjonspunktOpent: boolean;
  status: string;
  loadingState: string;
  skalSkjulePanel?: boolean;
  children: ReactElement | ReactElement[];
}

const ProsessPanelWrapper: FunctionComponent<OwnProps> = ({
  erPanelValgt,
  erAksjonspunktOpent,
  status,
  loadingState,
  skalSkjulePanel = false,
  children,
}) => {
  if (!erPanelValgt && !skalSkjulePanel) {
    return null;
  }

  if (erPanelValgt && status === vilkarUtfallType.IKKE_VURDERT && !erAksjonspunktOpent) {
    return (
      <PanelContainer>
        <ProsessStegIkkeBehandletPanel />
      </PanelContainer>
    );
  }

  if (loadingState !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return (
    <PanelContainer skalSkjulePanel={skalSkjulePanel}>
      {children}
    </PanelContainer>
  );
};

export default ProsessPanelWrapper;
