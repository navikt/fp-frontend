import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, required } from '@navikt/ft-form-validators';
import { formaterFritekst, getLanguageFromSprakkode } from '@navikt/ft-utils';

import { useReadOnly } from '@navikt/fp-utils';

import type { FormValues } from '../../types/FormValues';

import styles from './fritekstKlageBrevTextField.module.css';

interface Props {
  språkkode: string;
}

export const FritekstBrevTextField = ({ språkkode }: Props) => {
  const readOnly = useReadOnly();
  const { control } = useFormContext<FormValues>();

  return (
    <div className={styles['fritekstTilBrevTextArea']}>
      <RhfTextarea
        name="fritekstTilBrev"
        control={control}
        label={useIntl().formatMessage({ id: 'FritekstKlageBrevTextField.Fritekst' })}
        validate={[required, hasValidText]}
        readOnly={readOnly}
        maxLength={100_000}
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
};
