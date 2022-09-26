import React, { MouseEvent, FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Label } from '@navikt/ds-react';

import { TimeLineButton, TimeLineDataContainer } from '@navikt/ft-tidslinje';
import { FloatRight } from '@navikt/ft-ui-komponenter';
import { ArbeidsgiverOpplysningerPerId, Behandling, AlleKodeverk } from '@fpsak-frontend/types';

import { AarsakFilter } from '@fpsak-frontend/types/src/uttaksresultatPeriodeTsType';
import UttakActivity from './UttakActivity';
import { PeriodeMedClassName } from './Uttak';

interface OwnProps {
  selectedItemData: PeriodeMedClassName;
  callbackForward: (event: MouseEvent) => void;
  callbackBackward: (event: MouseEvent) => void;
  readOnly: boolean;
  callbackUpdateActivity: (data: PeriodeMedClassName) => void;
  callbackCancelSelectedActivity: () => void;
  harSoktOmFlerbarnsdager: boolean;
  alleKodeverk: AlleKodeverk;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  aarsakFilter: AarsakFilter;
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
  behandlingsresultat,
  arbeidsgiverOpplysningerPerId,
  aarsakFilter,
}) => {
  const intl = useIntl();
  return (
    <TimeLineDataContainer>
      <Label size="small">
        <FormattedMessage id="UttakTimeLineData.PeriodeData.Detaljer" />
      </Label>
      <FloatRight>
        <TimeLineButton text={intl.formatMessage({ id: 'Timeline.prevPeriod' })} type="prev" callback={callbackBackward} />
        <TimeLineButton text={intl.formatMessage({ id: 'Timeline.nextPeriod' })} type="next" callback={callbackForward} />
      </FloatRight>
      { /* @ts-ignore Fiks cannot be used as a JSX component */ }
      <UttakActivity
        cancelSelectedActivity={callbackCancelSelectedActivity}
        updateActivity={callbackUpdateActivity}
        selectedItemData={selectedItemData}
        readOnly={readOnly}
        harSoktOmFlerbarnsdager={harSoktOmFlerbarnsdager}
        alleKodeverk={alleKodeverk}
        behandlingsresultat={behandlingsresultat}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        aarsakFilter={aarsakFilter}
      />
    </TimeLineDataContainer>
  );
};

export default UttakMedsokerReadOnly;
