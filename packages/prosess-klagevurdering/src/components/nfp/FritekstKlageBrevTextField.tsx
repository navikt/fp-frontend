import { useIntl } from 'react-intl';

import { TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, required } from '@navikt/ft-form-validators';
import { formaterFritekst, getLanguageFromSprakkode } from '@navikt/ft-utils';

import styles from './fritekstKlageBrevTextField.module.css';

interface Props {
  sprakkode: string;
  readOnly?: boolean;
}

export const FritekstBrevTextField = ({ sprakkode, readOnly = true }: Props) => (
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
