import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { getLanguageFromSprakkode } from '@navikt/ft-utils';
import { hasValidText, required } from '@navikt/ft-form-validators';
import { TextAreaField } from '@navikt/ft-form-hooks';

import styles from './fritekstKlageBrevTextField.less';

interface OwnProps {
  sprakkode: string;
  readOnly?: boolean;
}

const FritekstKlageBrevTextField: FunctionComponent<OwnProps> = ({
  sprakkode,
  readOnly,
}) => (
  <div className={styles.fritekstTilBrevTextArea}>
    <TextAreaField
      name="fritekstTilBrev"
      label={useIntl().formatMessage({ id: 'FritekstKlageBrevTextField.Fritekst' })}
      validate={[required, hasValidText]}
      readOnly={readOnly}
      maxLength={100000}
      badges={[{
        type: 'info',
        titleText: getLanguageFromSprakkode(sprakkode),
      }]}
      // Må erstatte bindestrek kopiert inn fra Word med vanlig bindestrek
      parse={(value: string) => value.replaceAll('‑', '-').replaceAll('\t', ' ')}
    />
  </div>
);

FritekstKlageBrevTextField.defaultProps = {
  readOnly: true,
};

export default FritekstKlageBrevTextField;
