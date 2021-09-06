import React, { FunctionComponent, useMemo } from 'react';
import {
  BaseFieldsProps, Fields, Formatter, Parser, WrappedFieldsProps,
} from 'redux-form';
import moment from 'moment';
import {
  ACCEPTED_DATE_INPUT_FORMATS, DDMMYYYY_DATE_FORMAT, haystack, ISO_DATE_FORMAT,
} from '@fpsak-frontend/utils';
import { Periodpicker } from '@fpsak-frontend/shared-components';
import ReadOnlyField from './ReadOnlyField';
import Label from './Label';
import LabelType from './LabelType';

interface PeriodpickerFieldProps {
  names: string[];
  label?: LabelType;
  readOnly?: boolean;
  hideLabel?: boolean;
  isEdited?: boolean;
  renderIfMissingDateOnReadOnly?: boolean;
  dataId?: string;
  renderUpwards?: boolean;
  ariaLabel?: string;
  disabledDays?: {
    before: Date;
    after?: Date;
  };
  format?: (value) => string;
  parse?: (value) => string;
}

const formatError = (otherProps: any, names: string[]): string => {
  const getField1 = haystack(otherProps, names[0]);
  const meta1 = getField1.meta;

  if (meta1.submitFailed && meta1.error) {
    return meta1.error;
  }
  const getField2 = haystack(otherProps, names[1]);
  const meta2 = getField2.meta;
  if (meta2.submitFailed && meta2.error) {
    return meta2.error;
  }
  return undefined;
};

const hasValue = (value: string): boolean => value !== undefined && value !== null && value !== '';

const renderReadOnly = (): FunctionComponent<Partial<PeriodpickerFieldProps> & WrappedFieldsProps> => ({
  names,
  renderIfMissingDateOnReadOnly,
  ...otherProps
}) => {
  const getFomDate = haystack(otherProps, names[0]);
  const getTomDate = haystack(otherProps, names[1]);
  const fomDate = getFomDate.input.value;
  const tomDate = getTomDate.input.value;
  if (hasValue(fomDate) && hasValue(tomDate)) {
    return <ReadOnlyField input={{ value: `${fomDate} - ${tomDate}` }} {...otherProps} />;
  }
  if (renderIfMissingDateOnReadOnly) {
    if (hasValue(fomDate) && !hasValue(tomDate)) {
      return <ReadOnlyField input={{ value: `${fomDate} - ` }} {...otherProps} />;
    }
    if (!hasValue(fomDate) && hasValue(tomDate)) {
      return <ReadOnlyField input={{ value: ` - ${tomDate}` }} {...otherProps} />;
    }
  }
  return null;
};

interface PeriodePickerRenderProps {
  label: LabelType;
  isEdited: boolean;
  names: string[];
}

const renderPeriodpicker = (hideLabel?: boolean) => ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  label, isEdited, names, ...otherProps
}: PeriodePickerRenderProps & WrappedFieldsProps) => {
  const fieldProps = {
    id: `${names[0]}-${names[1]}`,
    feil: formatError(otherProps, names),
    label: <Label input={label} readOnly={false} />,
    names,
  };
  return <Periodpicker {...fieldProps} {...otherProps} hideLabel={hideLabel} />;
};

const isoToDdMmYyyy = (string: string): string => {
  const parsedDate = moment(string, ISO_DATE_FORMAT, true);
  return parsedDate.isValid() ? parsedDate.format(DDMMYYYY_DATE_FORMAT) : string;
};

const acceptedFormatToIso = (value: string, name: string, names: string[]): string => {
  const dates = value.split('-').map((d) => d.trim());
  const date = dates[names.indexOf(name)];

  const validDate = ACCEPTED_DATE_INPUT_FORMATS
    .map((format) => moment(date, format, true))
    .find((parsedDate) => parsedDate.isValid());

  return validDate ? validDate.format(ISO_DATE_FORMAT) : date;
};

const formatValue = (format: Formatter) => (value: string, name: string) => isoToDdMmYyyy(format(value, name));
const parseValue = (parse: Parser, names: string[]) => (value: string, name: string) => parse(acceptedFormatToIso(value, name, names), name);

const PeriodpickerField: FunctionComponent<BaseFieldsProps & PeriodpickerFieldProps> = ({
  names,
  label,
  readOnly,
  format,
  parse,
  isEdited,
  hideLabel,
  ...otherProps
}) => {
  const memoReadOnly = useMemo(() => renderReadOnly(), []);
  const memoPeriodpicker = useMemo(() => renderPeriodpicker(hideLabel), [hideLabel]);

  return (
    // @ts-ignore Fiks
    <Fields
      names={names}
      component={readOnly ? memoReadOnly : memoPeriodpicker}
      label={label}
      {...otherProps}
      format={formatValue(format)}
      parse={parseValue(parse, names)}
      readOnly={readOnly}
      isEdited={isEdited}
    />
  );
};

PeriodpickerField.defaultProps = {
  label: '',
  readOnly: false,
  isEdited: false,
  renderIfMissingDateOnReadOnly: false,
  format: (value) => value,
  parse: (value) => value,
};

export default PeriodpickerField;
