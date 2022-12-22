import React, {
  FunctionComponent, MouseEvent,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Label } from '@navikt/ds-react';

import {
  VerticalSpacer, EditedIcon, FlexContainer, FlexRow, FlexColumn,
} from '@navikt/ft-ui-komponenter';
import { TimeLineButton, TimeLineDataContainer } from '@navikt/ft-tidslinje';
import {
  ArbeidsgiverOpplysningerPerId, Behandling, AlleKodeverk, UttakStonadskontoer,
} from '@fpsak-frontend/types';
import { AarsakFilter } from '@fpsak-frontend/types/src/uttaksresultatPeriodeTsType';
import UttakActivity from './UttakActivity';
import { PeriodeMedClassName, UttaksresultatActivity } from './Uttak';

export const kalkulerTrekkdager = (aktivitet: any, virkedager: number, samtidigUttak?: boolean, samtidigUttaksprosent?: number) => {
  let uttaksgrad = aktivitet.gradering ? (100 - aktivitet.prosentArbeid) / 100 : 1;
  uttaksgrad = samtidigUttak ? samtidigUttaksprosent / 100 : uttaksgrad;

  const trekkdager = uttaksgrad * virkedager;

  return {
    weeks: Math.trunc(trekkdager / 5),
    days: parseFloat((trekkdager % 5).toFixed(1)),
    trekkdagerDesimaler: trekkdager,
  };
};

interface OwnProps {
  activityPanelName: string;
  callbackBackward: (event: MouseEvent) => void;
  callbackCancelSelectedActivity: () => void;
  callbackForward: (event: MouseEvent) => void;
  callbackSetSelected: (uttakActivity: UttaksresultatActivity, isMounting?: boolean) => void;
  callbackUpdateActivity: (data: PeriodeMedClassName) => void;
  formName: string;
  harSoktOmFlerbarnsdager: boolean;
  isApOpen?: boolean;
  readOnly: boolean;
  reduxFormChange: (...args: any[]) => any;
  selectedItemData?: PeriodeMedClassName;
  stonadskonto?: UttakStonadskontoer;
  uttaksresultatActivity: UttaksresultatActivity[];
  alleKodeverk: AlleKodeverk;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  aarsakFilter: AarsakFilter;
}

const UttakTimeLineData: FunctionComponent<OwnProps> = ({
  callbackBackward,
  callbackCancelSelectedActivity,
  callbackForward,
  callbackUpdateActivity,
  harSoktOmFlerbarnsdager,
  alleKodeverk,
  behandlingsresultat,
  isApOpen = false,
  readOnly,
  selectedItemData,
  arbeidsgiverOpplysningerPerId,
  aarsakFilter,
  reduxFormChange: formChange,
}) => {
  const intl = useIntl();
  const isEdited = !!selectedItemData.begrunnelse && !isApOpen;

  return (
    <TimeLineDataContainer key={`selectedItemData_${selectedItemData.id}`}>
      <FlexContainer>
        <FlexRow spaceBetween>
          <FlexColumn>
            <Label size="small">
              <FormattedMessage id="UttakTimeLineData.PeriodeData.Detaljer" />
              {isEdited && <EditedIcon />}
            </Label>
          </FlexColumn>
          <FlexColumn>
            <TimeLineButton text={intl.formatMessage({ id: 'Timeline.prevPeriod' })} type="prev" callback={callbackBackward} />
            <TimeLineButton text={intl.formatMessage({ id: 'Timeline.nextPeriod' })} type="next" callback={callbackForward} />
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer sixteenPx />
      <UttakActivity
        // @ts-ignore
        cancelSelectedActivity={callbackCancelSelectedActivity}
        // @ts-ignore
        updateActivity={callbackUpdateActivity}
        // @ts-ignore
        selectedItemData={selectedItemData}
        // @ts-ignore
        readOnly={readOnly}
        // @ts-ignore
        harSoktOmFlerbarnsdager={harSoktOmFlerbarnsdager}
        // @ts-ignore
        alleKodeverk={alleKodeverk}
        // @ts-ignore
        behandlingsresultat={behandlingsresultat}
        // @ts-ignore
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        // @ts-ignore
        aarsakFilter={aarsakFilter}
        // @ts-ignore
        reduxFormChange={formChange}
      />
    </TimeLineDataContainer>
  );
};

export default UttakTimeLineData;
