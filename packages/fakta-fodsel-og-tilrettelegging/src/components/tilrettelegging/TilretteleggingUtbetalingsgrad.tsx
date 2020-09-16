import React, { useState, useEffect, FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { connect } from 'react-redux';

import { DecimalField, behandlingFormValueSelector } from '@fpsak-frontend/form';

import {
  FlexColumn, Image,
} from '@fpsak-frontend/shared-components';
import {
  hasValidDecimal, maxValue, minValue, required,
} from '@fpsak-frontend/utils';
import endreImage from '@fpsak-frontend/assets/images/endre.svg';
import endreDisabletImage from '@fpsak-frontend/assets/images/endre_disablet.svg';
import styles from './tilretteleggingFieldArray.less';

const maxValue100 = maxValue(100);
const minValue1 = minValue(1);

export const OVERSTYRT_UTBETALINGSGRAD_FIELDNAME = 'overstyrtUtbetalingsgrad';

interface OwnProps {
  readOnly: boolean;
  erOverstyrer: boolean;
  fieldId: string;
  tilretteleggingKode: string;
  setOverstyrtUtbetalingsgrad: (erOverstyrt: boolean) => void;
  utbetalingsgrad: string;
  formSectionName: string;
  changeField: (field: string, value: string) => void;
  index: number;
  overstyrtUtbetalingsgrad: string;
}

const TilretteleggingUtbetalingsgrad: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  tilretteleggingKode,
  readOnly,
  erOverstyrer,
  fieldId,
  setOverstyrtUtbetalingsgrad,
  changeField,
  formSectionName,
  index,
  utbetalingsgrad,
  overstyrtUtbetalingsgrad,
}) => {
  const [erIEditeringsmodus, setEditeres] = useState(false);

  if (!erIEditeringsmodus && overstyrtUtbetalingsgrad !== utbetalingsgrad) {
    changeField(`${formSectionName}.tilretteleggingDatoer[${index}].${OVERSTYRT_UTBETALINGSGRAD_FIELDNAME}`, utbetalingsgrad);
  }
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
          // @ts-ignore TODO Fiks denne!
          normalizeOnBlur={(value) => (Number.isNaN(value) ? value : parseFloat(value).toFixed(2))}
          alignRightCenterOnReadOnly
        />
      </FlexColumn>
      <FlexColumn className={styles.buttonMargin}>
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

const mapStateToProps = (state, ownProps) => ({
  overstyrtUtbetalingsgrad: behandlingFormValueSelector(ownProps.formName,
    ownProps.behandlingId, ownProps.behandlingVersjon)(state,
    `${ownProps.formSectionName}.${ownProps.fieldId}.${OVERSTYRT_UTBETALINGSGRAD_FIELDNAME}`),
});

export default connect(mapStateToProps)(injectIntl(TilretteleggingUtbetalingsgrad));
