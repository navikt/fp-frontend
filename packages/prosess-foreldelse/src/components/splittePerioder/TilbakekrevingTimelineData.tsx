import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';

import PeriodeController from './PeriodeController';
import PeriodeInformasjon from './PeriodeInformasjon';
import ForeldelsesresultatActivity from '../../types/foreldelsesresultatActivitytsType';

interface OwnProps {
  periode: ForeldelsesresultatActivity;
  callbackForward: (...args: any[]) => any;
  callbackBackward: (...args: any[]) => any;
  oppdaterSplittedePerioder: (...args: any[]) => any;
  readOnly: boolean;
  behandlingId: number;
  behandlingVersjon: number;
  beregnBelop: (...args: any[]) => any;
}

export const TilbakekrevingTimelineData: FunctionComponent<OwnProps> = ({
  periode,
  callbackForward,
  callbackBackward,
  readOnly,
  oppdaterSplittedePerioder,
  behandlingId,
  behandlingVersjon,
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
        behandlingVersjon={behandlingVersjon}
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
