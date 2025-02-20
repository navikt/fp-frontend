import { useIntl } from 'react-intl';

import { Detail } from '@navikt/ds-react';
import { TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength } from '@navikt/ft-form-validators';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { decodeHtmlEntity, formaterFritekst, getLanguageFromSprakkode } from '@navikt/ft-utils';

import type { Behandlingsresultat } from '@navikt/fp-types';

import styles from './vedtakFritekstPanel.module.css';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

interface Props {
  behandlingsresultat?: Behandlingsresultat;
  språkKode: string;
  isReadOnly: boolean;
  labelTextCode: string;
}

export const VedtakFritekstPanel = ({ behandlingsresultat, språkKode, isReadOnly, labelTextCode }: Props) => {
  const intl = useIntl();

  return (
    <>
      {!isReadOnly && (
        <>
          <VerticalSpacer sixteenPx />
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
                titleText: getLanguageFromSprakkode(språkKode),
              },
            ]}
          />
        </>
      )}
      {isReadOnly && behandlingsresultat?.avslagsarsakFritekst && (
        <span>
          <VerticalSpacer twentyPx />
          <Detail>{intl.formatMessage({ id: labelTextCode })}</Detail>
          <VerticalSpacer eightPx />
          <div className={styles.fritekstItem}>{decodeHtmlEntity(behandlingsresultat.avslagsarsakFritekst)}</div>
        </span>
      )}
    </>
  );
};
