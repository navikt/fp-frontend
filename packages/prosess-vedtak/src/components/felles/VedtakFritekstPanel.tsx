import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Detail } from '@navikt/ds-react';

import { Behandlingsresultat } from '@navikt/fp-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { TextAreaField } from '@navikt/ft-form-hooks';
import { decodeHtmlEntity, getLanguageFromSprakkode } from '@navikt/ft-utils';
import { hasValidText, maxLength, minLength } from '@navikt/ft-form-validators';

import styles from './vedtakFritekstPanel.module.css';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

interface OwnProps {
  behandlingsresultat?: Behandlingsresultat;
  språkKode: string;
  isReadOnly: boolean;
  labelTextCode: string;
}

const VedtakFritekstPanel: FunctionComponent<OwnProps> = ({
  behandlingsresultat,
  språkKode,
  isReadOnly,
  labelTextCode,
}) => {
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

export default VedtakFritekstPanel;
