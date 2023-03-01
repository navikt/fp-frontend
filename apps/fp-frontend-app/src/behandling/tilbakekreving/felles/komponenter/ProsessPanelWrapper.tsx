import React, {
  FunctionComponent, ReactElement,
} from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';

import { FadingPanel } from '@navikt/ft-ui-komponenter';
import { VilkarUtfallType } from '@navikt/ft-kodeverk';

import styles from './prosessPanelWrapper.module.css';

interface PanelContainerOwnProps {
  children: any;
}

const PanelContainer: FunctionComponent<PanelContainerOwnProps> = ({
  children,
}) => (
  <div className={styles.steg}>
    <FadingPanel>
      {children}
    </FadingPanel>
  </div>
);

interface OwnProps {
  erAksjonspunktOpent: boolean;
  status: string;
  visHenlagt: boolean;
  children: ReactElement | ReactElement[];
}

const ProsessPanelWrapper: FunctionComponent<OwnProps> = ({
  erAksjonspunktOpent,
  status,
  visHenlagt,
  children,
}) => {
  if (visHenlagt) {
    return (
      <PanelContainer>
        <BodyShort size="small">
          <FormattedMessage id="ProsessPanelWrapper.Henlagt" />
        </BodyShort>
      </PanelContainer>
    );
  }
  if (status === VilkarUtfallType.IKKE_VURDERT && !erAksjonspunktOpent) {
    return (
      <PanelContainer>
        <BodyShort size="small">
          <FormattedMessage id="ProsessPanelWrapper.IkkeBehandlet" />
        </BodyShort>
      </PanelContainer>
    );
  }

  return (
    <PanelContainer>
      {children}
    </PanelContainer>
  );
};

export default ProsessPanelWrapper;
