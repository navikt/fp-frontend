import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import { getLanguageFromSprakkode } from '@navikt/ft-utils';
import { hasValidText, required } from '@navikt/ft-form-validators';
import { TextAreaField } from '@fpsak-frontend/form';

import styles from './fritekstAnkeBrevTextField.less';

interface OwnProps {
  sprakkode: string;
  readOnly?: boolean;
}

const FritekstAnkeBrevTextField: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  sprakkode,
  readOnly,
  intl,
}) => (
  <div className={styles.fritekstTilBrevTextArea}>
    <TextAreaField
      name="fritekstTilBrev"
      label={intl.formatMessage({ id: 'FritekstAnkeBrevTextField.Fritekst' })}
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

FritekstAnkeBrevTextField.defaultProps = {
  readOnly: true,
};

export default injectIntl(FritekstAnkeBrevTextField);
