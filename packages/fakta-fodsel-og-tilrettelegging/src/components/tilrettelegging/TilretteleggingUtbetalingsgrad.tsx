import React, { useState, useEffect, FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import {
  FlexColumn, FlexContainer, FlexRow, Image,
} from '@navikt/ft-ui-komponenter';
import { formHooks, NumberField } from '@navikt/ft-form-hooks';
import { ErrorMessage } from '@hookform/error-message';
import {
  hasValidDecimal, maxValue, minValue, required,
} from '@navikt/ft-form-validators';
import { BodyShort } from '@navikt/ds-react';

import endreImage from '../../images/endre.svg';
import endreDisabletImage from '../../images/endre_disablet.svg';

import styles from './tilretteleggingFieldArray.module.css';

const maxValue100 = maxValue(100);
const minValue1 = minValue(1);

export const OVERSTYRT_UTBETALINGSGRAD_FIELDNAME = 'overstyrtUtbetalingsgrad';

interface OwnProps {
  readOnly: boolean;
  erOverstyrer: boolean;
  fieldPrefix: string;
  tilretteleggingKode: string;
  setOverstyrtUtbetalingsgrad: (erOverstyrt: boolean) => void;
}

const TilretteleggingUtbetalingsgrad: FunctionComponent<OwnProps> = ({
  tilretteleggingKode,
  readOnly,
  erOverstyrer,
  fieldPrefix,
  setOverstyrtUtbetalingsgrad,
}) => {
  const intl = useIntl();

  const { formState } = formHooks.useFormContext();

  const [erIEditeringsmodus, setEditeres] = useState(false);

  useEffect(() => {
    setEditeres(false);
  }, [tilretteleggingKode]);

  const erReadOnly = readOnly || !erOverstyrer || !erIEditeringsmodus;
  return (
    <FlexContainer>
      <FlexRow>
        <FlexColumn>
          <NumberField
            className={styles.utbetalingsgradTekst}
            name={`${fieldPrefix}.${OVERSTYRT_UTBETALINGSGRAD_FIELDNAME}`}
            label={intl.formatMessage({ id: 'TilretteleggingFieldArray.Utbetalingsgrad' })}
            forceTwoDecimalDigits
            readOnly={erReadOnly}
            validate={[required, minValue1, maxValue100, hasValidDecimal]}
          />
        </FlexColumn>
        {erOverstyrer && (
          <FlexColumn>
            <Image
              onClick={() => { setEditeres(true); setOverstyrtUtbetalingsgrad(true); }}
              onKeyDown={() => { setEditeres(true); setOverstyrtUtbetalingsgrad(true); }}
              className={erIEditeringsmodus ? styles.buttonMargin : styles.enabletImage}
              src={erIEditeringsmodus ? endreDisabletImage : endreImage}
              tabIndex={0}
              tooltip={intl.formatMessage({ id: 'TilretteleggingFieldArray.EndreUtbetalingsgrad' })}
              alt={intl.formatMessage({ id: 'TilretteleggingFieldArray.EndreUtbetalingsgrad' })}
            />
          </FlexColumn>
        )}
      </FlexRow>
      {erReadOnly && (
        <FlexRow>
          <FlexColumn>
            <ErrorMessage
              errors={formState.errors}
              name={`${fieldPrefix}.${OVERSTYRT_UTBETALINGSGRAD_FIELDNAME}`}
              render={({ message }) => <BodyShort size="small" className={styles.error}>{message}</BodyShort>}
            />
          </FlexColumn>
        </FlexRow>
      )}
    </FlexContainer>
  );
};

export default TilretteleggingUtbetalingsgrad;
