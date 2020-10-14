import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { SkjemaGruppe } from 'nav-frontend-skjema';

import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { BorderBox } from '@fpsak-frontend/shared-components';
import { required } from '@fpsak-frontend/utils';

interface OwnProps {
  readOnly: boolean;
}

/*
 * MigreringFraInfotrygdPanel
 *
 * Form som brukes for registrere om behandling er migrert fra Infotrygd.
 */
const MigreringFraInfotrygdPanel: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  readOnly,
  intl,
}) => (
  <BorderBox>
    <SkjemaGruppe legend={intl.formatMessage({ id: 'MigreringFraInfotrygdPanel.Migrering' })}>
      <RadioGroupField
        name="migrertFraInfotrygd"
        label={intl.formatMessage({ id: 'MigreringFraInfotrygdPanel.ErDenneSakenMigrert' })}
        validate={[required]}
        readOnly={readOnly}
      >
        <RadioOption value label={{ id: 'MigreringFraInfotrygdPanel.Ja' }} />
        <RadioOption value={false} label={{ id: 'MigreringFraInfotrygdPanel.Nei' }} />
      </RadioGroupField>
    </SkjemaGruppe>
  </BorderBox>
);

export default injectIntl(MigreringFraInfotrygdPanel);
