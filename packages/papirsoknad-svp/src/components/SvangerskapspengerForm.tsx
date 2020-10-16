import React from 'react';
import {
  formValueSelector, reduxForm, FormSection, InjectedFormProps,
} from 'redux-form';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  SoknadData, ANDRE_YTELSER_FORM_NAME_PREFIX, getRegisteredFields,
} from '@fpsak-frontend/papirsoknad-felles';
import { KodeverkMedNavn } from '@fpsak-frontend/types';
import MottattDatoPapirsoknadIndex from '@fpsak-frontend/papirsoknad-mottatt-dato';
import FrilansPapirsoknadIndex from '@fpsak-frontend/papirsoknad-frilans';
import OppholdINorgePapirsoknadIndex from '@fpsak-frontend/papirsoknad-opphold-i-norge';
import TilleggsopplysningerPapirsoknadIndex from '@fpsak-frontend/papirsoknad-tilleggsopplysninger';
import LagreSoknadPapirsoknadIndex from '@fpsak-frontend/papirsoknad-lagre-soknad';
import VirksomhetPapirsoknadIndex from '@fpsak-frontend/papirsoknad-virksomhet';
import InntektsgivendeArbeidPapirsoknadIndex from '@fpsak-frontend/papirsoknad-inntektsgivende-arbeid';
import AndreYtelserPapirsoknadIndex from '@fpsak-frontend/papirsoknad-andre-ytelser';

import TerminFodselSvpPanel from './terminOgFodsel/TerminFodselSvpPanel';
import MigreringFraInfotrygdPanel from './migreringFraInfotrygd/MigreringFraInfotrygdPanel';
import BehovForTilretteleggingPanel from './tilrettelegging/BehovForTilretteleggingPanel';

const SVANGERSKAPSPENGER_FORM_NAME = 'SvangerskapspengerForm';
const TILRETTELEGGING_NAME_PREFIX = 'tilretteleggingArbeidsforhold';

interface OwnProps {
  onSubmitUfullstendigsoknad: () => Promise<any>;
  submitCallback: (_formValues, _dispatch, values: any) => Promise<any>;
  readOnly?: boolean;
  soknadData: SoknadData;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

/**
 * SvangerskapspengerForm
 *
 * Redux-form-komponent for registrering av papirsøknad for svangerskapspenger.
 */
export class SvangerskapspengerForm extends React.Component<OwnProps & InjectedFormProps> {
  shouldComponentUpdate(nextProps: OwnProps) {
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
      handleSubmit,
      submitting,
      form,
      readOnly,
      soknadData,
      onSubmitUfullstendigsoknad,
      alleKodeverk,
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <MottattDatoPapirsoknadIndex readOnly={readOnly} />
        <OppholdINorgePapirsoknadIndex form={form} readOnly={readOnly} soknadData={soknadData} alleKodeverk={alleKodeverk} />
        <InntektsgivendeArbeidPapirsoknadIndex readOnly={readOnly} alleKodeverk={alleKodeverk} />
        <VirksomhetPapirsoknadIndex readOnly={readOnly} form={form} alleKodeverk={alleKodeverk} />
        <FrilansPapirsoknadIndex readOnly={readOnly} form={form} formName={SVANGERSKAPSPENGER_FORM_NAME} />
        <AndreYtelserPapirsoknadIndex readOnly={readOnly} form={form} kunMiliterEllerSiviltjeneste alleKodeverk={alleKodeverk} />
        <TerminFodselSvpPanel readOnly={readOnly} />
        <FormSection name={TILRETTELEGGING_NAME_PREFIX}>
          <BehovForTilretteleggingPanel readOnly={readOnly} formName={SVANGERSKAPSPENGER_FORM_NAME} namePrefix={TILRETTELEGGING_NAME_PREFIX} />
        </FormSection>
        <TilleggsopplysningerPapirsoknadIndex readOnly={readOnly} />
        <MigreringFraInfotrygdPanel readOnly={readOnly} />
        <LagreSoknadPapirsoknadIndex readOnly={readOnly} onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad} form={form} submitting={submitting} />
      </form>
    );
  }
}

type FormValues = {
  foedselsDato?: number;
  tilretteleggingArbeidsforhold: {
    behovsdato
    organisasjonsnummer
    tilretteleggingArbeidsgiver
  }[];
};

const getValidation = (andreYtelser: KodeverkMedNavn[]) => (values: FormValues) => ({
  ...AndreYtelserPapirsoknadIndex.validate(values, andreYtelser),
  ...InntektsgivendeArbeidPanel.validate(values),
  ...FrilansPanel.validate(values),
  ...OppholdINorgePanel.validate(values),
});

const transformRootValues = (state: any, registeredFieldNames: any) => {
  const values = formValueSelector(SVANGERSKAPSPENGER_FORM_NAME)(state, ...registeredFieldNames);
  return values;
};

const buildInitialValues = createSelector([(ownProps: { andreYtelser: KodeverkMedNavn[] }) => ownProps], (ownProps) => ({
  ...FrilansPanel.buildInitialValues(),
  ...AndreYtelserPanel.buildInitialValues(ownProps.andreYtelser),
  ...InntektsgivendeArbeidPanel.initialValues,
  ...OppholdINorgePanel.initialValues,
  [TILRETTELEGGING_NAME_PREFIX]: BehovForTilretteleggingPanel.buildInitialValues(),
}));

const transformTilretteleggingsArbeidsforhold = (tilretteleggingArbeidsforhold: any) => {
  let transformerteVerdier: any = [];
  if (tilretteleggingArbeidsforhold.sokForArbeidsgiver) {
    transformerteVerdier = transformerteVerdier.concat(tilretteleggingArbeidsforhold.tilretteleggingForArbeidsgiver.map((ta) => ({
      '@type': 'VI',
      behovsdato: ta.behovsdato,
      organisasjonsnummer: ta.organisasjonsnummer,
      tilrettelegginger: ta.tilretteleggingArbeidsgiver,
    })));
  }
  if (tilretteleggingArbeidsforhold.sokForFrilans) {
    transformerteVerdier.push({
      '@type': 'FR',
      behovsdato: tilretteleggingArbeidsforhold.behovsdatoFrilans,
      tilrettelegginger: tilretteleggingArbeidsforhold.tilretteleggingFrilans,
    });
  }
  if (tilretteleggingArbeidsforhold.sokForSelvstendigNaringsdrivende) {
    transformerteVerdier.push({
      '@type': 'SN',
      behovsdato: tilretteleggingArbeidsforhold.behovsdatoSN,
      tilrettelegginger: tilretteleggingArbeidsforhold.tilretteleggingSelvstendigNaringsdrivende,
    });
  }

  return transformerteVerdier;
};

export const transformValues = (values: FormValues) => ({
  ...values,
  foedselsDato: [values.foedselsDato],
  tilretteleggingArbeidsforhold: transformTilretteleggingsArbeidsforhold(values.tilretteleggingArbeidsforhold),
});

const mapStateToPropsFactory = (_initialState, ownProps: OwnProps) => {
  const andreYtelserObject = { andreYtelser: ownProps.alleKodeverk[kodeverkTyper.ARBEID_TYPE] };
  const validate = getValidation(andreYtelserObject.andreYtelser);
  const onSubmit = (values: FormValues, dispatch: any, props: OwnProps) => ownProps.submitCallback(values, dispatch, {
    valuesForRegisteredFieldsOnly: transformValues(props.valuesForRegisteredFieldsOnly),
  });
  return (state: any) => {
    const registeredFields = getRegisteredFields(SVANGERSKAPSPENGER_FORM_NAME)(state);
    const registeredFieldNames = Object.values(registeredFields).map((rf) => rf.name);

    const valuesForRegisteredFieldsOnly = registeredFieldNames.length
      ? {
        ...transformRootValues(state, registeredFieldNames),
        [ANDRE_YTELSER_FORM_NAME_PREFIX]: AndreYtelserPanel
          .transformValues(formValueSelector(SVANGERSKAPSPENGER_FORM_NAME)(state, ...registeredFieldNames), andreYtelserObject.andreYtelser),
      }
      : {};

    return {
      initialValues: buildInitialValues(andreYtelserObject),
      valuesForRegisteredFieldsOnly,
      validate,
      onSubmit,
    };
  };
};

export default connect(mapStateToPropsFactory)(reduxForm({
  form: SVANGERSKAPSPENGER_FORM_NAME,
})(SvangerskapspengerForm));
