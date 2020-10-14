import React from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { FieldArray, FormSection, formValueSelector } from 'redux-form';

import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { BorderBox } from '@fpsak-frontend/shared-components';
import { arrayMinLength, required } from '@fpsak-frontend/utils';
import { SkjemaGruppe } from 'nav-frontend-skjema';

import RegistrerVirksomhetPanel from './RegistrerVirksomhetPanel';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './egenVirksomhetPanel.less' or... Remove this comment to see the full error message
import styles from './egenVirksomhetPanel.less';

const arrayMinLength1 = arrayMinLength(1);
const harArbeidetIEgenVirksomhetName = 'harArbeidetIEgenVirksomhet';

const virksomhetsFieldArrayName = 'virksomheter';
const EGEN_VIRKSOMHET_FORM_NAME_PREFIX = 'egenVirksomhet';

type OwnEgenVirksomhetPanelProps = {
    intl: {};
    alleKodeverk: {};
    form: string;
    readOnly?: boolean;
    harArbeidetIEgenVirksomhet?: boolean;
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'EgenVirksomhetPanelProps' circularly r... Remove this comment to see the full error message
type EgenVirksomhetPanelProps = OwnEgenVirksomhetPanelProps & typeof EgenVirksomhetPanel.defaultProps;

/**
 * EgenVirksomhetPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger. Søker velger må oppgi om hen har arbdeidet i
 * egen virksomhet.
 */
// @ts-expect-error ts-migrate(7022) FIXME: 'EgenVirksomhetPanel' implicitly has type 'any' be... Remove this comment to see the full error message
export const EgenVirksomhetPanel = ({
  readOnly, intl, form, harArbeidetIEgenVirksomhet, alleKodeverk,
}: EgenVirksomhetPanelProps) => (
  <FormSection name={EGEN_VIRKSOMHET_FORM_NAME_PREFIX}>
    <BorderBox>
      <SkjemaGruppe legend={intl.formatMessage({ id: 'Registrering.EgenVirksomhet.Title' })}>
        <div className={styles.flexContainer}>
          {/* @ts-expect-error ts-migrate(2322) FIXME: Type '{ id: string; }[]' is not assignable to type... Remove this comment to see the full error message */}
          <RadioGroupField name={harArbeidetIEgenVirksomhetName} validate={[required]} direction="vertical" readOnly={readOnly}>
            <RadioOption label={intl.formatMessage({ id: 'Registrering.EgenVirksomhet.No' })} value={false} />
            <RadioOption label={intl.formatMessage({ id: 'Registrering.EgenVirksomhet.Yes' })} value />
          </RadioGroupField>
        </div>
        <>
          {harArbeidetIEgenVirksomhet
        && (
        <FieldArray
          name={virksomhetsFieldArrayName}
          component={RegistrerVirksomhetPanel}
          form={form}
          namePrefix={EGEN_VIRKSOMHET_FORM_NAME_PREFIX}
          formatMessage={intl.formatMessage}
          validate={[arrayMinLength1]}
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
        />
        )}
        </>
      </SkjemaGruppe>
    </BorderBox>
  </FormSection>
);

EgenVirksomhetPanel.defaultProps = {
  readOnly: true,
  harArbeidetIEgenVirksomhet: null,
};

const mapStateToProps = (state: any, initialProps: any) => ({
  harArbeidetIEgenVirksomhet: formValueSelector(initialProps.form)(state, EGEN_VIRKSOMHET_FORM_NAME_PREFIX)
    ? formValueSelector(initialProps.form)(state, EGEN_VIRKSOMHET_FORM_NAME_PREFIX).harArbeidetIEgenVirksomhet : null,
});

export default connect(mapStateToProps)(injectIntl(EgenVirksomhetPanel));
