import React, {
  FunctionComponent, ReactElement,
} from 'react';
import classnames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import { LoadingPanel, FadingPanel } from '@fpsak-frontend/shared-components';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

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
  dataState: RestApiState;
  skalSkjulePanel?: boolean;
  children: ReactElement | ReactElement[];
}

const ProsessPanelWrapper: FunctionComponent<OwnProps> = ({
  erPanelValgt,
  erAksjonspunktOpent,
  status,
  dataState,
  skalSkjulePanel = false,
  children,
}) => {
  if (!erPanelValgt && !skalSkjulePanel) {
    return null;
  }

  if (erPanelValgt && status === vilkarUtfallType.IKKE_VURDERT && !erAksjonspunktOpent) {
    return (
      <PanelContainer>
        <Normaltekst>
          <FormattedMessage id="ProsessPanelWrapper.IkkeBehandlet" />
        </Normaltekst>
      </PanelContainer>
    );
  }

  return (
    <PanelContainer skalSkjulePanel={skalSkjulePanel}>
      {dataState !== RestApiState.SUCCESS && (
        <LoadingPanel />
      )}
      {dataState === RestApiState.SUCCESS && children}
    </PanelContainer>
  );
};

export default ProsessPanelWrapper;
