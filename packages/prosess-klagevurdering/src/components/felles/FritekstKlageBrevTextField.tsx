import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import { getLanguageFromSprakkode } from '@navikt/ft-utils';
import { hasValidText, required } from '@navikt/ft-form-validators';
import { TextAreaField } from '@navikt/ft-form-hooks';

import styles from './fritekstKlageBrevTextField.less';

interface OwnProps {
  sprakkode: string;
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
      // Må erstatte bindestrek kopiert inn fra Word med vanlig bindestrek
      parse={(value: string) => value.replaceAll('‑', '-')}
    />
  </div>
);

FritekstKlageBrevTextField.defaultProps = {
  readOnly: true,
};

export default injectIntl(FritekstKlageBrevTextField);
