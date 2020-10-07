import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Normaltekst } from 'nav-frontend-typografi';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { decodeHtmlEntity } from '@fpsak-frontend/utils';

import styles from './tilleggsopplysningerFaktaForm.less';

interface OwnProps {
  readOnly: boolean;
  submitting: boolean;
  tilleggsopplysninger: string;
}

/**
 * TilleggsopplysningerFaktaForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for avklaring av tilleggsopplysninger i søknad.
 */
const TilleggsopplysningerFaktaForm: FunctionComponent<OwnProps> = ({
  readOnly,
  submitting,
  tilleggsopplysninger,
}) => (
  <>
    <Normaltekst className={styles.explanationReadOnly}>{decodeHtmlEntity(tilleggsopplysninger)}</Normaltekst>
    {!readOnly && (
      <>
        <VerticalSpacer twentyPx />
        <Hovedknapp mini spinner={submitting} disabled={submitting}>
          <FormattedMessage id="TilleggsopplysningerFaktaForm.Confirmed" />
        </Hovedknapp>
      </>
    )}
  </>
);

export default TilleggsopplysningerFaktaForm;
