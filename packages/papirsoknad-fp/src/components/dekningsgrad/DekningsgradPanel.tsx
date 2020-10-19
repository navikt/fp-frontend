import React from 'react';
import { injectIntl } from 'react-intl';
import { SkjemaGruppe } from 'nav-frontend-skjema';

import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';
import { BorderBox } from '@fpsak-frontend/shared-components';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './dekningsgradPanel.less' or i... Remove this comment to see the full error message
import styles from './dekningsgradPanel.less';

type Props = {
    intl: {};
    readOnly: boolean;
};

/**
 *
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 */
export const DekningsgradPanel = ({ intl, readOnly }: Props) => (
  <BorderBox>
    {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message */}
    <SkjemaGruppe className={styles.fullWidth} legend={intl.formatMessage({ id: 'Registrering.Dekningsgrad.Title' })}>
      {/* @ts-expect-error ts-migrate(2322) FIXME: Type '{ id: string; }[]' is not assignable to type... Remove this comment to see the full error message */}
      <RadioGroupField name="dekningsgrad" readOnly={readOnly} validate={[required]}>
        {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message */}
        <RadioOption label={intl.formatMessage({ id: 'Registrering.Dekningsgrad.prosent.80' })} value="80_PROSENT" />
        {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message */}
        <RadioOption label={intl.formatMessage({ id: 'Registrering.Dekningsgrad.prosent.100' })} value="100_PROSENT" />
      </RadioGroupField>
    </SkjemaGruppe>
  </BorderBox>
);

// @ts-expect-error ts-migrate(2769) FIXME: Type '({ intl, readOnly }: Props) => JSX.Element' ... Remove this comment to see the full error message
export default injectIntl(DekningsgradPanel);
