import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { RadioGroupField, RadioOption, formHooks } from '@navikt/ft-form-hooks';
import { BorderBox } from '@navikt/ft-ui-komponenter';
import { required } from '@navikt/ft-form-validators';
import { AlleKodeverk } from '@navikt/ft-types';

import RegistrerVirksomhetPanel, { EGEN_VIRKSOMHET_NAME_PREFIX, FormValues as VirksomhetFormValues } from './RegistrerVirksomhetPanel';

import styles from './egenVirksomhetPanel.less';

// const arrayMinLength1 = arrayMinLength(1);

export type FormValues = {
  harArbeidetIEgenVirksomhet: boolean;
} & VirksomhetFormValues;

interface OwnProps {
  alleKodeverk: AlleKodeverk;
  readOnly?: boolean;
}

/**
 * EgenVirksomhetPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 * Søker må oppgi om hen har arbdeidet i egen virksomhet.
 */
const EgenVirksomhetPanel: FunctionComponent<OwnProps> = ({
  readOnly = true,
  alleKodeverk,
}) => {
  const intl = useIntl();

  const { watch } = formHooks.useFormContext<{ [EGEN_VIRKSOMHET_NAME_PREFIX]: FormValues }>();
  const harArbeidetIEgenVirksomhet = watch(`${EGEN_VIRKSOMHET_NAME_PREFIX}.harArbeidetIEgenVirksomhet`) || null;

  return (
    <BorderBox>
      <SkjemaGruppe legend={intl.formatMessage({ id: 'Registrering.EgenVirksomhet.Title' })}>
        <div className={styles.flexContainer}>
          <RadioGroupField
            name={`${EGEN_VIRKSOMHET_NAME_PREFIX}.harArbeidetIEgenVirksomhet`}
            validate={[required]}
            direction="vertical"
            readOnly={readOnly}
            parse={(value: string) => value === 'true'}
          >
            <RadioOption label={intl.formatMessage({ id: 'Registrering.EgenVirksomhet.No' })} value="false" />
            <RadioOption label={intl.formatMessage({ id: 'Registrering.EgenVirksomhet.Yes' })} value="true" />
          </RadioGroupField>
        </div>
        {harArbeidetIEgenVirksomhet && (
          <RegistrerVirksomhetPanel
            // validate={[arrayMinLength1]}
            readOnly={readOnly}
            alleKodeverk={alleKodeverk}
          />
        )}
      </SkjemaGruppe>
    </BorderBox>
  );
};

export default EgenVirksomhetPanel;
