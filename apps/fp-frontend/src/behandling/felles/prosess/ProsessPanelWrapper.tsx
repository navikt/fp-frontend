import { type ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading } from '@navikt/ds-react';
import { FadingPanel } from '@navikt/ft-ui-komponenter';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import type { VilkårUtfallType } from '@navikt/fp-types';
import { classNames } from '@navikt/fp-utils';

import styles from './prosessPanelWrapper.module.css';

interface PanelContainerProps {
  skalSkjulePanel?: boolean;
  prosessPanelKode: ProsessStegCode;
  prosessPanelTittel: string;
  children: ReactElement | ReactElement[] | null;
}

const PanelContainer = ({
  skalSkjulePanel = false,
  prosessPanelKode,
  prosessPanelTittel,
  children,
}: PanelContainerProps) => (
  <div className={classNames(styles['steg'], skalSkjulePanel && styles['skalSkjulePanel'])}>
    <Heading level="2" size="small" visuallyHidden data-prosess-steg-code={prosessPanelKode}>
      {prosessPanelTittel}
    </Heading>
    <FadingPanel>{children}</FadingPanel>
  </div>
);

interface Props {
  erPanelValgt: boolean;
  harÅpentAksjonspunkt: boolean;
  status: VilkårUtfallType;
  prosessPanelKode: ProsessStegCode;
  prosessPanelTittel: string;
  skalSkjulePanel?: boolean;
  children: ReactElement | ReactElement[] | null;
}

export const ProsessPanelWrapper = ({
  erPanelValgt,
  harÅpentAksjonspunkt,
  status,
  prosessPanelKode,
  prosessPanelTittel,
  skalSkjulePanel = false,
  children,
}: Props) => {
  if (!erPanelValgt && !skalSkjulePanel) {
    return null;
  }

  if (erPanelValgt && status === 'IKKE_VURDERT' && !harÅpentAksjonspunkt) {
    return (
      <PanelContainer prosessPanelKode={prosessPanelKode} prosessPanelTittel={prosessPanelTittel}>
        <BodyShort size="small">
          <FormattedMessage id="ProsessPanelWrapper.IkkeBehandlet" />
        </BodyShort>
      </PanelContainer>
    );
  }

  return (
    <PanelContainer
      skalSkjulePanel={skalSkjulePanel}
      prosessPanelKode={prosessPanelKode}
      prosessPanelTittel={prosessPanelTittel}
    >
      {children}
    </PanelContainer>
  );
};
