import { useIntl } from 'react-intl';

import { RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, required } from '@navikt/ft-form-validators';
import { formaterFritekst, getLanguageFromSprakkode } from '@navikt/ft-utils';

import styles from './fritekstKlageBrevTextField.module.css';

interface Props {
  språkkode: string;
  readOnly?: boolean;
}

export const FritekstBrevTextField = ({ språkkode, readOnly = true }: Props) => (
  <div className={styles.fritekstTilBrevTextArea}>
    <RhfTextarea
      name="fritekstTilBrev"
      label={useIntl().formatMessage({ id: 'FritekstKlageBrevTextField.Fritekst' })}
      validate={[required, hasValidText]}
      readOnly={readOnly}
      maxLength={100000}
      badges={[
        {
          type: 'info',
          titleText: getLanguageFromSprakkode(språkkode),
        },
      ]}
      parse={formaterFritekst}
    />
  </div>
);
