import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import { getLanguageFromSprakkode, hasValidText, required } from '@fpsak-frontend/utils';
import { TextAreaField } from '@fpsak-frontend/form';

import styles from './fritekstAnkeMerknaderTextField.less';

interface OwnProps {
  sprakkode: string;
  readOnly?: boolean;
}

const FritekstAnkeMerknaderTextField: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  sprakkode,
  readOnly,
  intl,
}) => (
  <div className={styles.fritekstTilMerknaderTextArea}>
    <TextAreaField
      name="merknadKommentar"
      label={intl.formatMessage({ id: 'FritekstAnkeMerknaderTextField' })}
      validate={[required, hasValidText]}
      readOnly={readOnly}
      textareaClass={styles.explanationTextarea}
      maxLength={100000}
      badges={[{
        type: 'fokus',
        text: getLanguageFromSprakkode(sprakkode),
        title: 'Malform.Beskrivelse',
      }]}
    />
  </div>
);

FritekstAnkeMerknaderTextField.defaultProps = {
  readOnly: true,
};

export default injectIntl(FritekstAnkeMerknaderTextField);
