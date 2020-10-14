import React from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import { ArrowBox, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { InputField, RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';

type OwnVirksomhetRegnskapPanelProps = {
    harRegnskapsforer?: boolean;
    readOnly?: boolean;
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'VirksomhetRegnskapPanelProps' circular... Remove this comment to see the full error message
type VirksomhetRegnskapPanelProps = OwnVirksomhetRegnskapPanelProps & typeof VirksomhetRegnskapPanel.defaultProps;

/**
 * VirksomhetRegnskapPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
 * søker.
 */
// @ts-expect-error ts-migrate(7022) FIXME: 'VirksomhetRegnskapPanel' implicitly has type 'any... Remove this comment to see the full error message
export const VirksomhetRegnskapPanel = ({ harRegnskapsforer, readOnly }: VirksomhetRegnskapPanelProps) => (
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
                // @ts-expect-error ts-migrate(2322) FIXME: Type 'undefined' is not assignable to type '({ id:... Remove this comment to see the full error message
                validate={[required]}
                label={<FormattedMessage id="Registrering.VirksomhetRegnskapPanel.AccountantName" />}
              />
              <InputField
                name="tlfRegnskapsforer"
                readOnly={readOnly}
                // @ts-expect-error ts-migrate(2322) FIXME: Type '(value: any) => { id: string; }[] | undefine... Remove this comment to see the full error message
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

const mapStateToProps = (state: any, initialProps: any) => ({
  harRegnskapsforer: formValueSelector(initialProps.form)(state, 'harRegnskapsforer'),
});

VirksomhetRegnskapPanel.defaultProps = {
  readOnly: true,
  harRegnskapsforer: false,
};

export default connect(mapStateToProps)(VirksomhetRegnskapPanel);
