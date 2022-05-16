import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { SkjemaGruppe } from 'nav-frontend-skjema';

import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { required } from '@navikt/ft-form-validators';
import { BorderBox } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';
import messages from '../../i18n/nb_NO.json';

import styles from './dekningsgradPanel.less';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
}

/**
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 */
const DekningsgradIndex: FunctionComponent<OwnProps> = ({
  readOnly,
}) => (
  <RawIntlProvider value={intl}>
    <BorderBox>
      <SkjemaGruppe className={styles.fullWidth} legend={intl.formatMessage({ id: 'Registrering.Dekningsgrad.Title' })}>
        <RadioGroupField name="dekningsgrad" readOnly={readOnly} validate={[required]}>
          <RadioOption label={intl.formatMessage({ id: 'Registrering.Dekningsgrad.prosent.80' })} value="80_PROSENT" />
          <RadioOption label={intl.formatMessage({ id: 'Registrering.Dekningsgrad.prosent.100' })} value="100_PROSENT" />
        </RadioGroupField>
      </SkjemaGruppe>
    </BorderBox>
  </RawIntlProvider>
);

export default DekningsgradIndex;
