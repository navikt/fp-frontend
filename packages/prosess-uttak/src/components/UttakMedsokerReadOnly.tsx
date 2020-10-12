import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Element } from 'nav-frontend-typografi';

import { TimeLineButton, TimeLineDataContainer } from '@fpsak-frontend/tidslinje';
import { FloatRight } from '@fpsak-frontend/shared-components';
import { Behandling, KodeverkMedNavn } from '@fpsak-frontend/types';

import UttakActivity from './UttakActivity';
import { PeriodeMedClassName } from './Uttak';

interface OwnProps {
  selectedItemData: PeriodeMedClassName;
  callbackForward: (event: any) => void;
  callbackBackward: (event: any) => void;
  readOnly: boolean;
  callbackUpdateActivity: (data: PeriodeMedClassName) => void;
  callbackCancelSelectedActivity: (...args: any[]) => any;
  harSoktOmFlerbarnsdager: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  behandlingsresultat?: Behandling['behandlingsresultat'];
  behandlingId: number;
  behandlingVersjon: number;
}

const UttakMedsokerReadOnly: FunctionComponent<OwnProps> = ({
  readOnly,
  selectedItemData,
  callbackForward,
  callbackBackward,
  callbackUpdateActivity,
  callbackCancelSelectedActivity,
  harSoktOmFlerbarnsdager,
  alleKodeverk,
  behandlingId,
  behandlingVersjon,
  behandlingsresultat,
}) => {
  const intl = useIntl();
  return (
    <TimeLineDataContainer>
      <Row>
        <Column xs="3">
          <Element>
            <FormattedMessage id="UttakTimeLineData.PeriodeData.Detaljer" />
          </Element>
        </Column>
        <Column xs="7" />
        <Column xs="2">
          <FloatRight>
            <TimeLineButton text={intl.formatMessage({ id: 'Timeline.prevPeriod' })} type="prev" callback={callbackBackward} />
            <TimeLineButton text={intl.formatMessage({ id: 'Timeline.nextPeriod' })} type="next" callback={callbackForward} />
          </FloatRight>
        </Column>
      </Row>
      <UttakActivity
        cancelSelectedActivity={callbackCancelSelectedActivity}
        updateActivity={callbackUpdateActivity}
        selectedItemData={selectedItemData}
        readOnly={readOnly}
        harSoktOmFlerbarnsdager={harSoktOmFlerbarnsdager}
        alleKodeverk={alleKodeverk}
        behandlingId={behandlingId}
        behandlingVersjon={behandlingVersjon}
        behandlingsresultat={behandlingsresultat}
      />
    </TimeLineDataContainer>
  );
};

export default UttakMedsokerReadOnly;
