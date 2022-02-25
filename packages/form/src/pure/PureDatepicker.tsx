import React, { FunctionComponent } from 'react';
import { Datepicker } from 'nav-datovelger';
import { CalendarPlacement } from 'nav-datovelger/lib/types';
import { DatepickerProps } from 'nav-datovelger/lib/Datepicker';
import { Label } from 'nav-frontend-skjema';
import { Undertekst } from 'nav-frontend-typografi';
import FieldError from './FieldError';
import LabelType from '../LabelType';
import './datepicker.less';

interface PureDatepickerProps {
  label: LabelType;
  feil?: string;
  ariaLabel?: string;
  inputId?: string;
  calendarSettings?: {
    position?: CalendarPlacement;
  };
  disabled?: boolean;
  initialMonth?: Date;
  disabledDays?: {
    before: Date;
    after?: Date;
  };
}

const PureDatepicker: FunctionComponent<PureDatepickerProps & DatepickerProps> = ({
  label,
  value,
  onChange,
  feil,
  limitations,
  ariaLabel,
  inputId,
  calendarSettings,
  disabled,
  initialMonth,
  disabledDays,
}): JSX.Element => {
  const dayPickerProps = {
    initialMonth: initialMonth ? new Date(initialMonth) : undefined,
    disabledDays,
  };

  return (
    <div className="datepicker">
      {label && <Label htmlFor={inputId}><Undertekst>{label}</Undertekst></Label>}
      <Datepicker
        onChange={onChange}
        value={value}
        inputProps={{
          placeholder: 'dd.mm.åååå',
          'aria-label': ariaLabel,
        }}
        limitations={limitations}
        dayPickerProps={dayPickerProps}
        calendarSettings={calendarSettings}
        inputId={inputId}
        disabled={disabled}
      />
      {feil && <FieldError message={feil} />}
    </div>
  );
};

export default PureDatepicker;
