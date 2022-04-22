import React, { Component } from 'react';
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { isEqual, omit } from '@navikt/ft-utils';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import { SoknadData, getRegisteredFields } from '@fpsak-frontend/papirsoknad-felles';
import { AlleKodeverk } from '@fpsak-frontend/types';
import LagreSoknadPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-lagre-soknad';
import MottattDatoPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-mottatt-dato';
import { rettighet } from '@fpsak-frontend/papirsoknad-panel-rettigheter';

import RegistreringAdopsjonOgOmsorgGrid, { FormValues as FormValuesAdopsjon } from './RegistreringAdopsjonOgOmsorgGrid';
import RegistreringFodselGrid, { FormValues as FormValuesFodsel } from './RegistreringFodselGrid';

export const ENGANGSSTONAD_FORM_NAME = 'EngangsstonadForm';

type FormValues = FormValuesFodsel | FormValuesAdopsjon | Record<string, never>;

const buildInitialValues = (soknadData: SoknadData): FormValues => {
  if (soknadData.getFamilieHendelseType() === familieHendelseType.FODSEL) {
    return { ...RegistreringFodselGrid.buildInitialValues() };
  }
  if (soknadData.getFamilieHendelseType() === familieHendelseType.ADOPSJON) {
    return { ...RegistreringAdopsjonOgOmsorgGrid.buildInitialValues() };
  }
  return {};
};

interface PureOwnProps {
  onSubmitUfullstendigsoknad: () => Promise<any>;
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  fagsakPersonnummer: string;
}

interface MappedOwnProps {
  valuesForRegisteredFieldsOnly?: string[];
  initialValues: FormValues;
  validate: (formValues: FormValues) => any;
}

type Props = PureOwnProps & MappedOwnProps & InjectedFormProps;

/**
 * EngangsstonadForm
 *
 * Redux-form-komponent for registrering av papirsøknad for engangsstønad.
 */
export class EngangsstonadForm extends Component<Props> {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps: Props): void {
    const { soknadData } = this.props;
    if (!isEqual(soknadData, nextProps.soknadData)) {
      nextProps.initialize(buildInitialValues(nextProps.soknadData));
    }
  }

  shouldComponentUpdate(nextProps: Props): boolean {
    // Dette er gjort for å hindra rerender for testetrykk på alle underformene
    const notRerenderIfChangedProps = ['array', 'blur', 'change', 'clearSubmit', 'destroy', 'dirty', 'initialize', 'error', 'pristine', 'reset',
      'resetSection', 'touch', 'untouch', 'valuesForRegisteredFieldsOnly', 'autofill', 'clearFields', 'clearSubmitErrors', 'clearAsyncError', 'submit'];
    const changedPropsList = Object.entries(this.props)
      .filter(([key, val]) => nextProps[key] !== val)
      .map(([key]) => key);
    return changedPropsList.some((changedProp) => !notRerenderIfChangedProps.includes(changedProp));
  }

  render() {
    const {
      handleSubmit, form, readOnly, soknadData, onSubmitUfullstendigsoknad, submitting, alleKodeverk,
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <MottattDatoPapirsoknadIndex readOnly={readOnly} />
        {soknadData.getFamilieHendelseType() === familieHendelseType.FODSEL
            && (
            <RegistreringFodselGrid
              soknadData={soknadData}
              readOnly={readOnly}
              form={form}
              alleKodeverk={alleKodeverk}
            />
            )}
        {(soknadData.getFamilieHendelseType() === familieHendelseType.ADOPSJON)
            && (
              <RegistreringAdopsjonOgOmsorgGrid
                soknadData={soknadData}
                readOnly={readOnly}
                form={form}
                alleKodeverk={alleKodeverk}
              />
            )}
        <LagreSoknadPapirsoknadIndex readOnly={readOnly} submitting={submitting} form={form} onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad} />
      </form>
    );
  }
}

const getValidation = (soknadData: SoknadData, sokerPersonnummer: string): any => {
  if (soknadData.getFamilieHendelseType() === familieHendelseType.FODSEL) {
    return (values: FormValuesFodsel) => RegistreringFodselGrid.validate(values, sokerPersonnummer, soknadData.familieHendelseType);
  }
  if (soknadData.getFamilieHendelseType() === familieHendelseType.ADOPSJON) {
    return (values: FormValuesAdopsjon) => RegistreringAdopsjonOgOmsorgGrid.validate(values, sokerPersonnummer, soknadData.familieHendelseType);
  }
  return null;
};

const transformRootValues = (state: any, registeredFieldNames: string[]): any => {
  const values = formValueSelector(ENGANGSSTONAD_FORM_NAME)(state, ...registeredFieldNames);
  if (values.rettigheter === rettighet.IKKE_RELEVANT) {
    return omit(values, 'rettigheter');
  }
  return values;
};

const buildInitialValuesSelector = createSelector([(ownProps: PureOwnProps) => ownProps], (ownProps) => {
  const { soknadData } = ownProps;
  return buildInitialValues(soknadData);
});

const mapStateToPropsFactory = (_initialState: any, ownProps: PureOwnProps) => {
  const sokerPersonnummer = ownProps.fagsakPersonnummer;
  const validate = getValidation(ownProps.soknadData, sokerPersonnummer);
  return (state: any): MappedOwnProps => {
    const registeredFields = getRegisteredFields(ENGANGSSTONAD_FORM_NAME)(state);
    // @ts-ignore fiks
    const registeredFieldNames = Object.values(registeredFields).map((rf) => rf.name);
    const valuesForRegisteredFieldsOnly = registeredFieldNames.length
      ? transformRootValues(state, registeredFieldNames)
      : {};
    return {
      initialValues: buildInitialValuesSelector(ownProps),
      validate,
      valuesForRegisteredFieldsOnly,
    };
  };
};

export default connect(mapStateToPropsFactory)(reduxForm({
  form: ENGANGSSTONAD_FORM_NAME,
/* @ts-ignore Fiks */
})(EngangsstonadForm));
