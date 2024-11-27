import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort } from '@navikt/ds-react';
import { FadingPanel,LoadingPanel } from '@navikt/ft-ui-komponenter';
import classnames from 'classnames/bind';

import { VilkarUtfallType } from '@navikt/fp-kodeverk';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

import styles from './prosessPanelWrapper.module.css';

const classNames = classnames.bind(styles);

interface PanelContainerOwnProps {
  skalSkjulePanel?: boolean;
  children: any;
}

const PanelContainer = ({ skalSkjulePanel = false, children }: PanelContainerOwnProps) => (
  <div className={classNames('steg', { skalSkjulePanel })}>
    <FadingPanel>{children}</FadingPanel>
  </div>
);

interface Props {
  erPanelValgt: boolean;
  erAksjonspunktOpent: boolean;
  status: string;
  dataState: RestApiState;
  skalSkjulePanel?: boolean;
  children: ReactElement | ReactElement[];
}

export const ProsessPanelWrapper = ({
  erPanelValgt,
  erAksjonspunktOpent,
  status,
  dataState,
  skalSkjulePanel = false,
  children,
}: Props) => {
  if (!erPanelValgt && !skalSkjulePanel) {
    return null;
  }

  if (erPanelValgt && status === VilkarUtfallType.IKKE_VURDERT && !erAksjonspunktOpent) {
    return (
      <PanelContainer>
        <BodyShort size="small">
          <FormattedMessage id="ProsessPanelWrapper.IkkeBehandlet" />
        </BodyShort>
      </PanelContainer>
    );
  }

  return (
    <PanelContainer skalSkjulePanel={skalSkjulePanel}>
      {dataState !== RestApiState.SUCCESS && <LoadingPanel />}
      {dataState === RestApiState.SUCCESS && children}
    </PanelContainer>
  );
};
