import { useIntl } from 'react-intl';

import { Detail, VStack } from '@navikt/ds-react';
import { TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength } from '@navikt/ft-form-validators';
import { decodeHtmlEntity, formaterFritekst, getLanguageFromSprakkode } from '@navikt/ft-utils';

import type { Behandlingsresultat } from '@navikt/fp-types';

import styles from './vedtakFritekstPanel.module.css';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

interface Props {
  behandlingsresultat?: Behandlingsresultat;
  språkkode: string;
  isReadOnly: boolean;
  labelTextCode: string;
}

export const VedtakFritekstPanel = ({ behandlingsresultat, språkkode, isReadOnly, labelTextCode }: Props) => {
  const intl = useIntl();

  return (
    <>
      {!isReadOnly && (
        <TextAreaField
          name="begrunnelse"
          label={intl.formatMessage({ id: labelTextCode })}
          validate={[minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={isReadOnly}
          parse={formaterFritekst}
          badges={[
            {
              type: 'info',
              titleText: getLanguageFromSprakkode(språkkode),
            },
          ]}
        />
      )}
      {isReadOnly && behandlingsresultat?.avslagsarsakFritekst && (
        <VStack gap="4">
          <Detail>{intl.formatMessage({ id: labelTextCode })}</Detail>
          <div className={styles.fritekstItem}>{decodeHtmlEntity(behandlingsresultat.avslagsarsakFritekst)}</div>
        </VStack>
      )}
    </>
  );
};
