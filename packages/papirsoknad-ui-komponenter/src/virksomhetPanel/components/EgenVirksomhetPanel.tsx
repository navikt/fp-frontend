import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Undertittel } from 'nav-frontend-typografi';
import { RadioGroupPanel, formHooks } from '@navikt/ft-form-hooks';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { required } from '@navikt/ft-form-validators';
import { AlleKodeverk } from '@navikt/ft-types';

import RegistrerVirksomhetPanel, { EGEN_VIRKSOMHET_NAME_PREFIX, FormValues as VirksomhetFormValues } from './RegistrerVirksomhetPanel';

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
      <Undertittel><FormattedMessage id="Registrering.EgenVirksomhet.Title" /></Undertittel>
      <VerticalSpacer sixteenPx />
      <RadioGroupPanel
        name={`${EGEN_VIRKSOMHET_NAME_PREFIX}.harArbeidetIEgenVirksomhet`}
        validate={[required]}
        isReadOnly={readOnly}
        hideLegend
        isTrueOrFalseSelection
        radios={[{
          label: intl.formatMessage({ id: 'Registrering.EgenVirksomhet.No' }),
          value: 'false',
        }, {
          label: intl.formatMessage({ id: 'Registrering.EgenVirksomhet.Yes' }),
          value: 'true',
        }]}
      />
      {harArbeidetIEgenVirksomhet && (
      <RegistrerVirksomhetPanel
        readOnly={readOnly}
        alleKodeverk={alleKodeverk}
      />
      )}
    </BorderBox>
  );
};

export default EgenVirksomhetPanel;
