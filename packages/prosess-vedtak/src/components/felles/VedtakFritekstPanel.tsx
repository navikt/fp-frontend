import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Undertekst } from 'nav-frontend-typografi';

import { Behandlingsresultat } from '@fpsak-frontend/types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { TextAreaField } from '@navikt/ft-form-hooks';
import { decodeHtmlEntity, getLanguageFromSprakkode } from '@navikt/ft-utils';
import { hasValidText, maxLength, minLength } from '@navikt/ft-form-validators';

import styles from './vedtakFritekstPanel.less';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

interface OwnProps {
  behandlingsresultat: Behandlingsresultat;
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
        <Row>
          <VerticalSpacer sixteenPx />
          <Column xs="8">
            <TextAreaField
              name="begrunnelse"
              label={intl.formatMessage({ id: labelTextCode })}
              validate={[
                minLength3,
                maxLength1500,
                hasValidText,
              ]}
              maxLength={1500}
              readOnly={isReadOnly}
              badges={[{
                type: 'info',
                titleText: getLanguageFromSprakkode(språkKode),
              }]}
            />
          </Column>
        </Row>
      )}
      {isReadOnly && behandlingsresultat.avslagsarsakFritekst !== null && (
        <span>
          <VerticalSpacer twentyPx />
          <Undertekst>{intl.formatMessage({ id: labelTextCode })}</Undertekst>
          <VerticalSpacer eightPx />
          <div className={styles.fritekstItem}>{decodeHtmlEntity(behandlingsresultat.avslagsarsakFritekst)}</div>
        </span>
      )}
    </>
  );
};

export default VedtakFritekstPanel;
