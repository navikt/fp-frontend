import { type ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort } from '@navikt/ds-react';
import { FadingPanel } from '@navikt/ft-ui-komponenter';
import classnames from 'classnames/bind';

import { VilkarUtfallType } from '@navikt/fp-kodeverk';

import styles from './prosessPanelWrapper.module.css';

const classNames = classnames.bind(styles);

interface PanelContainerOwnProps {
  skalSkjulePanel?: boolean;
  children: ReactElement | ReactElement[] | null;
}

const PanelContainer = ({ skalSkjulePanel = false, children }: PanelContainerOwnProps) => (
  <div className={classNames('steg', { skalSkjulePanel })}>
    <FadingPanel>{children}</FadingPanel>
  </div>
);

interface Props {
  erPanelValgt: boolean;
  harÅpentAksjonspunkt: boolean;
  status: string;
  skalSkjulePanel?: boolean;
  children: ReactElement | ReactElement[] | null;
}

export const ProsessPanelWrapper = ({
  erPanelValgt,
  harÅpentAksjonspunkt,
  status,
  skalSkjulePanel = false,
  children,
}: Props) => {
  if (!erPanelValgt && !skalSkjulePanel) {
    return null;
  }

  if (erPanelValgt && status === VilkarUtfallType.IKKE_VURDERT && !harÅpentAksjonspunkt) {
    return (
      <PanelContainer>
        <BodyShort size="small">
          <FormattedMessage id="ProsessPanelWrapper.IkkeBehandlet" />
        </BodyShort>
      </PanelContainer>
    );
  }

  return <PanelContainer skalSkjulePanel={skalSkjulePanel}>{children}</PanelContainer>;
};
