import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { formaterFritekst, getLanguageFromSprakkode } from '@navikt/ft-utils';
import { hasValidText, required } from '@navikt/ft-form-validators';
import { TextAreaField } from '@navikt/ft-form-hooks';

import styles from './fritekstKlageBrevTextField.module.css';

interface OwnProps {
  sprakkode: string;
  readOnly?: boolean;
}

const FritekstKlageBrevTextField: FunctionComponent<OwnProps> = ({ sprakkode, readOnly }) => (
  <div className={styles.fritekstTilBrevTextArea}>
    <TextAreaField
      name="fritekstTilBrev"
      label={useIntl().formatMessage({ id: 'FritekstKlageBrevTextField.Fritekst' })}
      validate={[required, hasValidText]}
      readOnly={readOnly}
      maxLength={100000}
      badges={[
        {
          type: 'info',
          titleText: getLanguageFromSprakkode(sprakkode),
        },
      ]}
      parse={formaterFritekst}
    />
  </div>
);

FritekstKlageBrevTextField.defaultProps = {
  readOnly: true,
};

export default FritekstKlageBrevTextField;
