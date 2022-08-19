import React, {
  FunctionComponent, ReactElement,
} from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import { FadingPanel } from '@navikt/ft-ui-komponenter';
import { VilkarUtfallType } from '@navikt/ft-kodeverk';

import styles from './prosessPanelWrapper.less';

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
        <Normaltekst>
          <FormattedMessage id="ProsessPanelWrapper.Henlagt" />
        </Normaltekst>
      </PanelContainer>
    );
  }
  if (status === VilkarUtfallType.IKKE_VURDERT && !erAksjonspunktOpent) {
    return (
      <PanelContainer>
        <Normaltekst>
          <FormattedMessage id="ProsessPanelWrapper.IkkeBehandlet" />
        </Normaltekst>
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
