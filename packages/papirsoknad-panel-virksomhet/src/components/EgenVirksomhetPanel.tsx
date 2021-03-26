import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { connect } from 'react-redux';
import { FieldArray, FormSection, formValueSelector } from 'redux-form';
import { SkjemaGruppe } from 'nav-frontend-skjema';

import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { BorderBox } from '@fpsak-frontend/shared-components';
import { arrayMinLength, required } from '@fpsak-frontend/utils';
import { KodeverkMedNavn } from '@fpsak-frontend/types';

import RegistrerVirksomhetPanel from './RegistrerVirksomhetPanel';

import styles from './egenVirksomhetPanel.less';

const arrayMinLength1 = arrayMinLength(1);
const harArbeidetIEgenVirksomhetName = 'harArbeidetIEgenVirksomhet';

const virksomhetsFieldArrayName = 'virksomheter';
const EGEN_VIRKSOMHET_FORM_NAME_PREFIX = 'egenVirksomhet';

interface PureOwnProps {
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  form: string;
  readOnly?: boolean;
}

interface MappedOwnProps {
  harArbeidetIEgenVirksomhet?: boolean;
}

/**
 * EgenVirksomhetPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger. Søker velger må oppgi om hen har arbdeidet i
 * egen virksomhet.
 */
export const EgenVirksomhetPanel: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps> = ({
  readOnly,
  intl,
  form,
  harArbeidetIEgenVirksomhet,
  alleKodeverk,
}) => (
  <FormSection name={EGEN_VIRKSOMHET_FORM_NAME_PREFIX}>
    <BorderBox>
      <SkjemaGruppe legend={intl.formatMessage({ id: 'Registrering.EgenVirksomhet.Title' })}>
        <div className={styles.flexContainer}>
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
};

const mapStateToProps = (state: any, initialProps: PureOwnProps): MappedOwnProps => ({
  harArbeidetIEgenVirksomhet: formValueSelector(initialProps.form)(state, EGEN_VIRKSOMHET_FORM_NAME_PREFIX)
    ? formValueSelector(initialProps.form)(state, EGEN_VIRKSOMHET_FORM_NAME_PREFIX).harArbeidetIEgenVirksomhet : null,
});

export default connect(mapStateToProps)(injectIntl(EgenVirksomhetPanel));
