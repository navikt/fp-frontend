import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { SkjemaGruppe } from 'nav-frontend-skjema';

import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { required } from '@navikt/ft-form-validators';
import { BorderBox } from '@navikt/ft-ui-komponenter';

import styles from './dekningsgradPanel.less';

interface OwnProps {
  readOnly: boolean;
}

/**
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 */
export const DekningsgradPanel: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  readOnly,
}) => (
  <BorderBox>
    <SkjemaGruppe className={styles.fullWidth} legend={intl.formatMessage({ id: 'Registrering.Dekningsgrad.Title' })}>
      <RadioGroupField name="dekningsgrad" readOnly={readOnly} validate={[required]}>
        <RadioOption label={intl.formatMessage({ id: 'Registrering.Dekningsgrad.prosent.80' })} value="80_PROSENT" />
        <RadioOption label={intl.formatMessage({ id: 'Registrering.Dekningsgrad.prosent.100' })} value="100_PROSENT" />
      </RadioGroupField>
    </SkjemaGruppe>
  </BorderBox>
);

export default injectIntl(DekningsgradPanel);
