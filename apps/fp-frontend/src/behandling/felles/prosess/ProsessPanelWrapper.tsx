import { type ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort } from '@navikt/ds-react';
import { FadingPanel } from '@navikt/ft-ui-komponenter';
import classnames from 'classnames/bind';

import type { VilkårUtfallType } from '@navikt/fp-types';

import styles from './prosessPanelWrapper.module.css';

const classNames = classnames.bind(styles);

interface PanelContainerProps {
  skalSkjulePanel?: boolean;
  children: ReactElement | ReactElement[] | null;
}

const PanelContainer = ({ skalSkjulePanel = false, children }: PanelContainerProps) => (
  <div className={classNames('steg', { skalSkjulePanel })}>
    <FadingPanel>{children}</FadingPanel>
  </div>
);

interface Props {
  erPanelValgt: boolean;
  harÅpentAksjonspunkt: boolean;
  status: VilkårUtfallType;
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

  if (erPanelValgt && status === 'IKKE_VURDERT' && !harÅpentAksjonspunkt) {
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
