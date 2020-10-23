import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import { ArrowBox, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { InputField, RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';

interface OwnProps {
  harRegnskapsforer?: boolean;
  readOnly?: boolean;
  form: string;
}

/**
 * VirksomhetRegnskapPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
 * søker.
 */
export const VirksomhetRegnskapPanel: FunctionComponent<OwnProps> = ({
  harRegnskapsforer,
  readOnly,
}) => (
  <>
    <Undertekst><FormattedMessage id="Registrering.VirksomhetRegnskapPanel.Accountant" /></Undertekst>
    <VerticalSpacer fourPx />
    <RadioGroupField name="harRegnskapsforer" readOnly={readOnly}>
      <RadioOption key="Ja" label={<FormattedMessage id="Registrering.VirksomhetRegnskapPanel.Yes" />} value />
      <RadioOption key="Nei" label={<FormattedMessage id="Registrering.VirksomhetRegnskapPanel.No" />} value={false} />
    </RadioGroupField>
    {harRegnskapsforer
    && (
      <>
        <Row>
          <Column xs="6">
            <ArrowBox>
              <InputField
                name="navnRegnskapsforer"
                readOnly={readOnly}
                validate={[required]}
                label={<FormattedMessage id="Registrering.VirksomhetRegnskapPanel.AccountantName" />}
              />
              <InputField
                name="tlfRegnskapsforer"
                readOnly={readOnly}
                validate={[required]}
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

const mapStateToProps = (state: any, initialProps: OwnProps) => ({
  harRegnskapsforer: formValueSelector(initialProps.form)(state, 'harRegnskapsforer'),
});

VirksomhetRegnskapPanel.defaultProps = {
  readOnly: true,
  harRegnskapsforer: false,
};

export default connect(mapStateToProps)(VirksomhetRegnskapPanel);
