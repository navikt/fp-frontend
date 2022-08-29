import React, { useState, useEffect, FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { FlexColumn, FlexRow, Image } from '@navikt/ft-ui-komponenter';
import { formHooks, InputField } from '@navikt/ft-form-hooks';
import { ErrorMessage } from '@hookform/error-message';
import {
  hasValidDecimal, maxValue, minValue, required,
} from '@navikt/ft-form-validators';

import endreImage from '@fpsak-frontend/assets/images/endre.svg';
import endreDisabletImage from '@fpsak-frontend/assets/images/endre_disablet.svg';

import { Normaltekst } from 'nav-frontend-typografi';
import styles from './tilretteleggingFieldArray.less';

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

  const erReadOnly = readOnly || !erOverstyrer || (erOverstyrer && !erIEditeringsmodus);
  return (
    <>
      <FlexColumn>
        <FlexRow>
          <FlexColumn>
            <InputField
              className={styles.textField}
              name={`${fieldPrefix}.${OVERSTYRT_UTBETALINGSGRAD_FIELDNAME}`}
              label={intl.formatMessage({ id: 'TilretteleggingFieldArray.Utbetalingsgrad' })}
              readOnly={erReadOnly}
              validate={[required, minValue1, maxValue100, hasValidDecimal]}
              normalizeOnBlur={(value: string) => (Number.isNaN(value) ? value : parseFloat(value).toFixed(2))}
            />
          </FlexColumn>
        </FlexRow>
        {erReadOnly && (
          <FlexRow>
            <FlexColumn>
              <ErrorMessage
                errors={formState.errors}
                name={`${fieldPrefix}.${OVERSTYRT_UTBETALINGSGRAD_FIELDNAME}`}
                render={({ message }) => <Normaltekst className={styles.error}>{message}</Normaltekst>}
              />
            </FlexColumn>
          </FlexRow>
        )}
      </FlexColumn>
      <FlexColumn className={erReadOnly ? styles.buttonMarginReadOnly : styles.buttonMargin}>
        %
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
          />
        </FlexColumn>
      )}
    </>
  );
};

export default TilretteleggingUtbetalingsgrad;
