import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import { getLanguageCodeFromSprakkode, hasValidText, required } from '@fpsak-frontend/utils';
import { TextAreaField } from '@fpsak-frontend/form';
import { Kodeverk } from '@fpsak-frontend/types';

import styles from './fritekstAnkeMerknaderTextField.less';

interface OwnProps {
  sprakkode: Kodeverk;
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
        textId: getLanguageCodeFromSprakkode(sprakkode),
        title: 'Malform.Beskrivelse',
      }]}
    />
  </div>
);

FritekstAnkeMerknaderTextField.defaultProps = {
  readOnly: true,
};

export default injectIntl(FritekstAnkeMerknaderTextField);
