import React, { useState, useEffect, FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { connect } from 'react-redux';

import { DecimalField } from '@fpsak-frontend/form';

import { FlexColumn, Image } from '@fpsak-frontend/shared-components';
import {
  hasValidDecimal, maxValue, minValue, required,
} from '@fpsak-frontend/utils';
import endreImage from '@fpsak-frontend/assets/images/endre.svg';
import endreDisabletImage from '@fpsak-frontend/assets/images/endre_disablet.svg';
import { formValueSelector } from 'redux-form';
import styles from './tilretteleggingFieldArray.less';

const maxValue100 = maxValue(100);
const minValue1 = minValue(1);

export const OVERSTYRT_UTBETALINGSGRAD_FIELDNAME = 'overstyrtUtbetalingsgrad';

interface PureOwnProps {
  formName: string;
  readOnly: boolean;
  erOverstyrer: boolean;
  fieldId: string;
  tilretteleggingKode: string;
  setOverstyrtUtbetalingsgrad: (erOverstyrt: boolean) => void;
  formSectionName: string;
}

interface MappedOwnProps {
  overstyrtUtbetalingsgrad: string;
}

const TilretteleggingUtbetalingsgrad: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps> = ({
  intl,
  tilretteleggingKode,
  readOnly,
  erOverstyrer,
  fieldId,
  setOverstyrtUtbetalingsgrad,
}) => {
  const [erIEditeringsmodus, setEditeres] = useState(false);

  useEffect(() => {
    setEditeres(false);
  }, [tilretteleggingKode]);

  const erReadOnly = readOnly || !erOverstyrer || (erOverstyrer && !erIEditeringsmodus);
  return (
    <>
      <FlexColumn>
        <DecimalField
          className={styles.textField}
          name={`${fieldId}.${OVERSTYRT_UTBETALINGSGRAD_FIELDNAME}`}
          label={intl.formatMessage({ id: 'TilretteleggingFieldArray.Utbetalingsgrad' })}
          readOnly={erReadOnly}
          validate={[required, minValue1, maxValue100, hasValidDecimal]}
          // @ts-ignore Fiks denne!
          normalizeOnBlur={(value) => (Number.isNaN(value) ? value : parseFloat(value).toFixed(2))}
          alignRightCenterOnReadOnly={erReadOnly}
        />
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

const mapStateToProps = (state, ownProps: PureOwnProps): MappedOwnProps => ({
  overstyrtUtbetalingsgrad: formValueSelector(ownProps.formName)(state,
    `${ownProps.formSectionName}.${ownProps.fieldId}.${OVERSTYRT_UTBETALINGSGRAD_FIELDNAME}`),
});

export default connect(mapStateToProps)(injectIntl(TilretteleggingUtbetalingsgrad));
