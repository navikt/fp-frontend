import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';

import PeriodeController, { PeriodeMedBelop, PeriodeMedFeilutbetaling } from './PeriodeController';
import PeriodeInformasjon from './PeriodeInformasjon';
import ForeldelsesresultatActivity from '../../types/foreldelsesresultatActivitytsType';

interface PureOwnProps {
  periode: ForeldelsesresultatActivity;
  oppdaterSplittedePerioder: (data: PeriodeMedFeilutbetaling[]) => void;
  callbackForward: (event: React.KeyboardEvent | React.MouseEvent) => void;
  callbackBackward: (event: React.KeyboardEvent | React.MouseEvent) => void;
  readOnly: boolean;
  behandlingId: number;
  beregnBelop: (data: { behandlingId: number; perioder: PeriodeMedBelop[]}) => Promise<any>;
}

export const TilbakekrevingTimelineData: FunctionComponent<PureOwnProps> = ({
  periode,
  callbackForward,
  callbackBackward,
  readOnly,
  oppdaterSplittedePerioder,
  behandlingId,
  beregnBelop,
}) => (
  <Row>
    <Column xs="12">
      <PeriodeController
        callbackForward={callbackForward}
        callbackBackward={callbackBackward}
        periode={periode}
        readOnly={readOnly}
        oppdaterSplittedePerioder={oppdaterSplittedePerioder}
        behandlingId={behandlingId}
        beregnBelop={beregnBelop}
      />
      <PeriodeInformasjon
        feilutbetaling={periode.feilutbetaling}
        fom={periode.fom}
        tom={periode.tom}
      />
    </Column>
  </Row>
);

export default TilbakekrevingTimelineData;
