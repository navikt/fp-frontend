import React, { Component } from 'react';
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { isEqual, omit } from '@fpsak-frontend/utils';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import { FagsakPerson, KodeverkMedNavn } from '@fpsak-frontend/types';
import LagreSoknadPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-lagre-soknad';
import MottattDatoPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-mottatt-dato';

import RegistreringAdopsjonOgOmsorgGrid from './RegistreringAdopsjonOgOmsorgGrid';
import RegistreringFodselGrid from './RegistreringFodselGrid';

export const ENGANGSSTONAD_FORM_NAME = 'EngangsstonadForm';

const buildInitialValues = (soknadData: SoknadData) => {
  if (soknadData.getFamilieHendelseType() === familieHendelseType.FODSEL) {
    return { ...RegistreringFodselGrid.initialValues };
  }
  if (soknadData.getFamilieHendelseType() === familieHendelseType.ADOPSJON) {
    return { ...RegistreringAdopsjonOgOmsorgGrid.initialValues };
  }
  return {};
};

interface PureOwnProps {
  onSubmitUfullstendigsoknad: () => Promise<any>;
  readOnly?: boolean;
  soknadData: SoknadData;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  fagsakPerson: FagsakPerson;
}

interface MappedOwnProps {
  valuesForRegisteredFieldsOnly: string[];
}

/**
 * EngangsstonadForm
 *
 * Redux-form-komponent for registrering av papirsøknad for engangsstønad.
 */
export class EngangsstonadForm extends Component<PureOwnProps & MappedOwnProps & InjectedFormProps> {
  static defaultProps = {
    readOnly: true,
  };

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps: PureOwnProps & MappedOwnProps & InjectedFormProps) {
    const { soknadData } = this.props;
    if (!isEqual(soknadData, nextProps.soknadData)) {
      nextProps.initialize(buildInitialValues(nextProps.soknadData));
    }
  }

  shouldComponentUpdate(nextProps: PureOwnProps & MappedOwnProps & InjectedFormProps) {
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
              onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
              readOnly={readOnly}
              form={form}
              alleKodeverk={alleKodeverk}
            />
            )}
        {(soknadData.getFamilieHendelseType() === familieHendelseType.ADOPSJON)
            && (
              <RegistreringAdopsjonOgOmsorgGrid
                soknadData={soknadData}
                onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
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

type FormValues = {

}

const getValidation = (soknadData: SoknadData, sokerPersonnummer: string) => {
  if (soknadData.getFamilieHendelseType() === familieHendelseType.FODSEL) {
    return (values: FormValues) => RegistreringFodselGrid.validate(values, sokerPersonnummer);
  }
  if (soknadData.getFamilieHendelseType() === familieHendelseType.ADOPSJON) {
    return (values: FormValues) => RegistreringAdopsjonOgOmsorgGrid.validate(values, sokerPersonnummer);
  }
  return null;
};

const transformRootValues = (state: any, registeredFieldNames: string[]) => {
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

const mapStateToPropsFactory = (_initialState, ownProps: PureOwnProps) => {
  const sokerPersonnummer = ownProps.fagsakPerson.personnummer;
  const validate = getValidation(ownProps.soknadData, sokerPersonnummer);
  return (state: any) => {
    const registeredFields = getRegisteredFields(ENGANGSSTONAD_FORM_NAME)(state);
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
})(EngangsstonadForm));
