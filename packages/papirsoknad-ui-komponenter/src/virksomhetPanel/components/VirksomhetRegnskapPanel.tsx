import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  formHooks, InputField, RadioGroupField, RadioOption,
} from '@navikt/ft-form-hooks';
import { required, hasValidInteger, hasValidText } from '@navikt/ft-form-validators';

export type FormValues = {
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}

interface OwnProps {
  readOnly?: boolean;
}

/**
 * VirksomhetRegnskapPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom
 * søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.
 */
const VirksomhetRegnskapPanel: FunctionComponent<OwnProps> = ({
  readOnly = true,
}) => {
  const { watch } = formHooks.useFormContext<FormValues>();
  const harRegnskapsforer = watch('harRegnskapsforer') || false;

  return (
    <>
      <Undertekst><FormattedMessage id="Registrering.VirksomhetRegnskapPanel.Accountant" /></Undertekst>
      <VerticalSpacer fourPx />
      <RadioGroupField name="harRegnskapsforer" readOnly={readOnly} parse={(value: string) => value === 'true'}>
        <RadioOption key="Ja" label={<FormattedMessage id="Registrering.VirksomhetRegnskapPanel.Yes" />} value="true" />
        <RadioOption key="Nei" label={<FormattedMessage id="Registrering.VirksomhetRegnskapPanel.No" />} value="false" />
      </RadioGroupField>
      {harRegnskapsforer && (
        <>
          <Row>
            <Column xs="6">
              <ArrowBox>
                <InputField
                  name="navnRegnskapsforer"
                  readOnly={readOnly}
                  validate={[required, hasValidText]}
                  label={<FormattedMessage id="Registrering.VirksomhetRegnskapPanel.AccountantName" />}
                />
                <InputField
                  name="tlfRegnskapsforer"
                  readOnly={readOnly}
                  validate={[required, hasValidInteger]}
                  label={<FormattedMessage id="Registrering.VirksomhetRegnskapPanel.AccountantPhone" />}
                />
              </ArrowBox>
            </Column>
          </Row>
          <VerticalSpacer sixteenPx />
        </>
      )}
    </>
  );
};

export default VirksomhetRegnskapPanel;
