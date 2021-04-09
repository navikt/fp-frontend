import React, { FunctionComponent } from 'react';
import { FormattedDate, FormattedTime } from 'react-intl';

import { createIntl } from '@fpsak-frontend/utils';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  dateTimeString: string;
  useNewFormat?: boolean;
}

/**
 * DateTimeLabel
 *
 * Presentasjonskomponent. Formaterer dato til formatet dd.mm.yyyy - hh:mm.
 *
 * Eksempel:
 * ```html
 * <DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
 * ```
 */
const DateTimeLabel: FunctionComponent<OwnProps> = ({
  dateTimeString,
  useNewFormat = false,
}) => (
  <>
    <FormattedDate day="2-digit" month="2-digit" year="numeric" value={new Date(dateTimeString)} />
    {!useNewFormat && (
      <>
        -
        <FormattedTime value={new Date(dateTimeString)} />
      </>
    )}
    {useNewFormat && (
      <>
        {intl.formatMessage({ id: 'DateTimeLabel.Kl' })}
        <FormattedTime value={new Date(dateTimeString)} hour="numeric" minute="numeric" second="numeric" />
      </>
    )}
  </>
);

export default DateTimeLabel;
