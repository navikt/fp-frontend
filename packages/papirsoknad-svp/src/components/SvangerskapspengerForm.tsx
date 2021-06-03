import React from 'react';
import {
  formValueSelector, reduxForm, FormSection, InjectedFormProps, InjectedArrayProps,
} from 'redux-form';
import { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { SoknadData, getRegisteredFields } from '@fpsak-frontend/papirsoknad-felles';
import { AlleKodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';
import MottattDatoPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-mottatt-dato';
import FrilansPapirsoknadIndex, { FormValues as FrilansFormValues } from '@fpsak-frontend/papirsoknad-panel-frilans';
import OppholdINorgePapirsoknadIndex, { FormValues as OppholdFormValues } from '@fpsak-frontend/papirsoknad-panel-opphold-i-norge';
import TilleggsopplysningerPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-tilleggsopplysninger';
import LagreSoknadPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-lagre-soknad';
import VirksomhetPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-virksomhet';
import InntektsgivendeArbeidPapirsoknadIndex, {
  FormValues as InntektFormValues,
} from '@fpsak-frontend/papirsoknad-panel-inntektsgivende-arbeid';
import AndreYtelserPapirsoknadIndex, {
  ANDRE_YTELSER_FORM_NAME_PREFIX, FormValues as AndreYtelserFormValues,
} from '@fpsak-frontend/papirsoknad-panel-andre-ytelser';

import TerminFodselSvpPanel from './terminOgFodsel/TerminFodselSvpPanel';
import MigreringFraInfotrygdPanel from './migreringFraInfotrygd/MigreringFraInfotrygdPanel';
import BehovForTilretteleggingPanel, { FormValues as BehovForTilretteleggingFormValues, Tilrettelegging } from './tilrettelegging/BehovForTilretteleggingPanel';

const SVANGERSKAPSPENGER_FORM_NAME = 'SvangerskapspengerForm';
const TILRETTELEGGING_NAME_PREFIX = 'tilretteleggingArbeidsforhold';

type FormValues = {
  foedselsDato?: string;
  tilretteleggingArbeidsforhold?: BehovForTilretteleggingFormValues;
} & AndreYtelserFormValues & InntektFormValues & FrilansFormValues & OppholdFormValues;

interface PureOwnProps {
  onSubmitUfullstendigsoknad: () => Promise<any>;
  submitCallback: (_formValues: any, _dispatch: Dispatch, values: any) => Promise<any>;
  readOnly?: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
}

interface MappedOwnProps {
  valuesForRegisteredFieldsOnly: FormValues;
  initialValues: FormValues;
  validate: (formValues: FormValues) => any;
  onSubmit: (formValues: FormValues, dispatch: Dispatch, props: PureOwnProps & MappedOwnProps & InjectedArrayProps) => any;
}

/**
 * SvangerskapspengerForm
 *
 * Redux-form-komponent for registrering av papirsøknad for svangerskapspenger.
 */
export class SvangerskapspengerForm extends React.Component<PureOwnProps & MappedOwnProps & InjectedFormProps> {
  shouldComponentUpdate(nextProps: PureOwnProps & MappedOwnProps & InjectedFormProps): boolean {
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
      readOnly = false,
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
        <FrilansPapirsoknadIndex readOnly={readOnly} formName={SVANGERSKAPSPENGER_FORM_NAME} />
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

const getValidation = (andreYtelser: KodeverkMedNavn[]) => (values: FormValues): any => ({
  ...AndreYtelserPapirsoknadIndex.validate(values, andreYtelser),
  ...InntektsgivendeArbeidPapirsoknadIndex.validate(values),
  ...FrilansPapirsoknadIndex.validate(values),
  ...OppholdINorgePapirsoknadIndex.validate(values),
});

const transformRootValues = (
  state: any,
  registeredFieldNames: string[],
): any => formValueSelector(SVANGERSKAPSPENGER_FORM_NAME)(state, ...registeredFieldNames);

const buildInitialValues = createSelector([(ownProps: { andreYtelser: KodeverkMedNavn[] }) => ownProps], (ownProps): FormValues => ({
  ...FrilansPapirsoknadIndex.buildInitialValues(),
  ...AndreYtelserPapirsoknadIndex.buildInitialValues(ownProps.andreYtelser),
  ...InntektsgivendeArbeidPapirsoknadIndex.buildInitialValues(),
  ...OppholdINorgePapirsoknadIndex.buildInitialValues(),
  [TILRETTELEGGING_NAME_PREFIX]: BehovForTilretteleggingPanel.buildInitialValues(),
}));

type TilretteleggingArbeidsforhold = {
  '@type': string;
  behovsdato?: string;
  organisasjonsnummer?: string;
  tilrettelegginger?: Tilrettelegging[];
}

const transformTilretteleggingsArbeidsforhold = (tilretteleggingArbeidsforhold?: BehovForTilretteleggingFormValues): TilretteleggingArbeidsforhold[] => {
  let transformerteVerdier = [] as TilretteleggingArbeidsforhold[];
  if (tilretteleggingArbeidsforhold?.sokForArbeidsgiver && tilretteleggingArbeidsforhold?.tilretteleggingForArbeidsgiver) {
    transformerteVerdier = transformerteVerdier.concat(tilretteleggingArbeidsforhold.tilretteleggingForArbeidsgiver.map((ta) => ({
      '@type': 'VI',
      behovsdato: ta.behovsdato,
      organisasjonsnummer: ta.organisasjonsnummer,
      tilrettelegginger: ta.tilretteleggingArbeidsgiver,
    })));
  }
  if (tilretteleggingArbeidsforhold?.sokForFrilans) {
    transformerteVerdier.push({
      '@type': 'FR',
      behovsdato: tilretteleggingArbeidsforhold.behovsdatoFrilans,
      tilrettelegginger: tilretteleggingArbeidsforhold.tilretteleggingFrilans,
    });
  }
  if (tilretteleggingArbeidsforhold?.sokForSelvstendigNaringsdrivende) {
    transformerteVerdier.push({
      '@type': 'SN',
      behovsdato: tilretteleggingArbeidsforhold.behovsdatoSN,
      tilrettelegginger: tilretteleggingArbeidsforhold.tilretteleggingSelvstendigNaringsdrivende,
    });
  }

  return transformerteVerdier;
};

export const transformValues = (values: FormValues): any => ({
  ...values,
  foedselsDato: [values.foedselsDato],
  tilretteleggingArbeidsforhold: transformTilretteleggingsArbeidsforhold(values.tilretteleggingArbeidsforhold),
});

const mapStateToPropsFactory = (_initialState: any, ownProps: PureOwnProps) => {
  const andreYtelserObject = { andreYtelser: ownProps.alleKodeverk[kodeverkTyper.ARBEID_TYPE] };
  const validate = getValidation(andreYtelserObject.andreYtelser);
  const onSubmit = (values: FormValues, dispatch: Dispatch, props: PureOwnProps & MappedOwnProps & InjectedArrayProps) => ownProps
    .submitCallback(values, dispatch, {
      valuesForRegisteredFieldsOnly: transformValues(props.valuesForRegisteredFieldsOnly),
    });
  return (state: any): MappedOwnProps => {
    const registeredFields = getRegisteredFields(SVANGERSKAPSPENGER_FORM_NAME)(state);
    // @ts-ignore Fiks
    const registeredFieldNames = Object.values(registeredFields).map((rf) => rf.name);

    const valuesForRegisteredFieldsOnly = registeredFieldNames.length
      ? {
        ...transformRootValues(state, registeredFieldNames),
        [ANDRE_YTELSER_FORM_NAME_PREFIX]: AndreYtelserPapirsoknadIndex
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

// @ts-ignore Fiks
export default connect(mapStateToPropsFactory)(reduxForm({
  form: SVANGERSKAPSPENGER_FORM_NAME,
})(SvangerskapspengerForm));
