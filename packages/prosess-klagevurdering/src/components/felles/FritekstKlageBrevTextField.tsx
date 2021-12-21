import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import { getLanguageFromSprakkode, hasValidText, required } from '@fpsak-frontend/utils';
import { TextAreaField } from '@fpsak-frontend/form-hooks';
import { Kodeverk } from '@fpsak-frontend/types';

import styles from './fritekstKlageBrevTextField.less';

interface OwnProps {
  sprakkode: Kodeverk;
  readOnly?: boolean;
}

const FritekstKlageBrevTextField: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  sprakkode,
  readOnly,
  intl,
}) => (
  <div className={styles.fritekstTilBrevTextArea}>
    <TextAreaField
      name="fritekstTilBrev"
      label={intl.formatMessage({ id: 'FritekstKlageBrevTextField.Fritekst' })}
      validate={[required, hasValidText]}
      readOnly={readOnly}
      textareaClass={styles.explanationTextarea}
      maxLength={100000}
      badges={[{
        type: 'fokus',
        text: getLanguageFromSprakkode(sprakkode),
        titleText: intl.formatMessage({ id: 'Malform.Beskrivelse' }),
      }]}
    />
  </div>
);

FritekstKlageBrevTextField.defaultProps = {
  readOnly: true,
};

export default injectIntl(FritekstKlageBrevTextField);
