import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { InputField, RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { required, hasValidInteger, hasValidText } from '@navikt/ft-form-validators';

interface PureOwnProps {
  readOnly?: boolean;
  form: string;
}

interface MappedOwnProps {
  harRegnskapsforer?: boolean;
}

/**
 * VirksomhetRegnskapPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
 * søker.
 */
export const VirksomhetRegnskapPanel: FunctionComponent<PureOwnProps & MappedOwnProps> = ({
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

VirksomhetRegnskapPanel.defaultProps = {
  readOnly: true,
  harRegnskapsforer: false,
};

const mapStateToProps = (state: any, initialProps: PureOwnProps): MappedOwnProps => ({
  harRegnskapsforer: formValueSelector(initialProps.form)(state, 'harRegnskapsforer'),
});

export default connect(mapStateToProps)(VirksomhetRegnskapPanel);
