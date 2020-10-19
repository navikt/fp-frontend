import React from 'react';
import {
  // @ts-expect-error ts-migrate(2305) FIXME: Module '"../../../../node_modules/@types/redux-for... Remove this comment to see the full error message
  formPropTypes, FormSection, formValueSelector, reduxForm,
} from 'redux-form';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import { omit } from '@fpsak-frontend/utils';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  // @ts-expect-error ts-migrate(2305) FIXME: Module '"../../../../node_modules/@fpsak-frontend/... Remove this comment to see the full error message
  SoknadData, MottattDatoPanel, AnnenForelderPanel, OmsorgOgAdopsjonPanel, OppholdINorgePanel, TerminFodselDatoPanel,
  // @ts-expect-error ts-migrate(2305) FIXME: Module '"../../../../node_modules/@fpsak-frontend/... Remove this comment to see the full error message
  TilleggsopplysningerPanel, LagreSoknadForm, EgenVirksomhetPanel, InntektsgivendeArbeidPanel, AndreYtelserPanel,
  // @ts-expect-error ts-migrate(2305) FIXME: Module '"../../../../node_modules/@fpsak-frontend/... Remove this comment to see the full error message
  ANDRE_YTELSER_FORM_NAME_PREFIX, FrilansPanel, RettigheterPanel, rettighet, getRegisteredFields,
} from '@fpsak-frontend/papirsoknad-felles';

import PermisjonRettigheterPanel from './permisjon/PermisjonRettigheterPanel';
import DekningsgradPanel from './dekningsgrad/DekningsgradPanel';
import PermisjonPanel, { TIDSROM_PERMISJON_FORM_NAME_PREFIX } from './permisjon/PermisjonPanel';
import BekreftelsePanel from './bekreftelse/BekreftelsePanel';

const FORELDREPENGER_FORM_NAME = 'ForeldrepengerForm';
const ANNEN_FORELDER_FORM_NAME_PREFIX = 'annenForelder';
const OMSORG_FORM_NAME_PREFIX = 'omsorg';

/*
(ts-migrate) TODO: Migrate the remaining prop types
...formPropTypes
*/
type OwnForeldrepengerFormProps = {
    onSubmitUfullstendigsoknad: (...args: any[]) => any;
    readOnly?: boolean;
    soknadData: any; // TODO: PropTypes.instanceOf(SoknadData)
    alleKodeverk: {};
};

type ForeldrepengerFormProps = OwnForeldrepengerFormProps & typeof ForeldrepengerForm.defaultProps;

/**
 * ForeldrepengerForm
 *
 * Redux-form-komponent for registrering av papirsøknad for foreldrepenger.
 */
export class ForeldrepengerForm extends React.Component<ForeldrepengerFormProps> {
static defaultProps = {
  readOnly: true,
};

shouldComponentUpdate(nextProps: ForeldrepengerFormProps) {
  // Dette er gjort for å hindra rerender for testetrykk på alle underformene
  const notRerenderIfChangedProps = ['array', 'blur', 'change', 'clearSubmit', 'destroy', 'dirty', 'initialize', 'error', 'pristine', 'reset',
    'resetSection', 'touch', 'untouch', 'valuesForRegisteredFieldsOnly', 'autofill', 'clearFields', 'clearSubmitErrors', 'clearAsyncError', 'submit'];
  const changedPropsList = Object.entries(this.props)
    // @ts-expect-error ts-migrate(7053) FIXME: No index signature with a parameter of type 'strin... Remove this comment to see the full error message
    .filter(([key, val]) => nextProps[key] !== val)
    .map(([key]) => key);
  const test = changedPropsList.some((changedProp) => !notRerenderIfChangedProps.includes(changedProp));
  return test;
}

render() {
  const {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'handleSubmit' does not exist on type 'Re... Remove this comment to see the full error message
    handleSubmit,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'submitting' does not exist on type 'Read... Remove this comment to see the full error message
    submitting,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'form' does not exist on type 'Readonly<F... Remove this comment to see the full error message
    form,
    readOnly,
    soknadData,
    onSubmitUfullstendigsoknad,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'error' does not exist on type 'Readonly<... Remove this comment to see the full error message
    error,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'submitFailed' does not exist on type 'Re... Remove this comment to see the full error message
    submitFailed,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'annenForelderInformertRequired' does not... Remove this comment to see the full error message
    annenForelderInformertRequired,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'sokerHarAleneomsorg' does not exist on t... Remove this comment to see the full error message
    sokerHarAleneomsorg,
    alleKodeverk,
  } = this.props;

  return (
    <form onSubmit={handleSubmit}>
      <MottattDatoPanel readOnly={readOnly} />
      <OppholdINorgePanel form={form} readOnly={readOnly} soknadData={soknadData} alleKodeverk={alleKodeverk} />
      <InntektsgivendeArbeidPanel readOnly={readOnly} alleKodeverk={alleKodeverk} />
      <EgenVirksomhetPanel
        readOnly={readOnly}
        form={form}
        alleKodeverk={alleKodeverk}
      />
      <FrilansPanel readOnly={readOnly} form={form} formName={FORELDREPENGER_FORM_NAME} />
      <AndreYtelserPanel readOnly={readOnly} form={form} alleKodeverk={alleKodeverk} />
      {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'readOnly' does not exist on type 'Intrin... Remove this comment to see the full error message */}
      <DekningsgradPanel readOnly={readOnly} />
      {soknadData.getFamilieHendelseType() === familieHendelseType.FODSEL
          && <TerminFodselDatoPanel readOnly={readOnly} form={form} erForeldrepenger />}
      <RettigheterPanel readOnly={readOnly} soknadData={soknadData} />
      <FormSection name={OMSORG_FORM_NAME_PREFIX}>
        <OmsorgOgAdopsjonPanel
          form={form}
          namePrefix={OMSORG_FORM_NAME_PREFIX}
          readOnly={readOnly}
          familieHendelseType={soknadData.getFamilieHendelseType()}
          isForeldrepengerFagsak
        />
      </FormSection>
      <FormSection name={ANNEN_FORELDER_FORM_NAME_PREFIX}>
        <AnnenForelderPanel
          soknadData={soknadData}
          namePrefix={ANNEN_FORELDER_FORM_NAME_PREFIX}
          form={form}
          readOnly={readOnly}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'IntlShap... Remove this comment to see the full error message
          permisjonRettigheterPanel={<PermisjonRettigheterPanel readOnly={readOnly} sokerHarAleneomsorg={sokerHarAleneomsorg} />}
          alleKodeverk={alleKodeverk}
        />
      </FormSection>
      <PermisjonPanel
        soknadData={soknadData}
        form={form}
        readOnly={readOnly}
        error={error}
        submitFailed={submitFailed}
        sokerHarAleneomsorg={sokerHarAleneomsorg}
        alleKodeverk={alleKodeverk}
      />
      {/* @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'IntlShap... Remove this comment to see the full error message */}
      <BekreftelsePanel annenForelderInformertRequired={annenForelderInformertRequired} readOnly={readOnly} />
      <TilleggsopplysningerPanel readOnly={readOnly} />
      <LagreSoknadForm readOnly={readOnly} onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad} form={form} submitting={submitting} />
    </form>
  );
}
}

const getValidation = (soknadData: any, andreYtelser: any, sokerPersonnummer: any) => {
  if (soknadData.getFamilieHendelseType() === familieHendelseType.FODSEL) {
    return (values: any) => ({
      ...AndreYtelserPanel.validate(values, andreYtelser),
      ...InntektsgivendeArbeidPanel.validate(values),
      ...FrilansPanel.validate(values),
      ...OppholdINorgePanel.validate(values),
      ...TerminFodselDatoPanel.validate(values),
      [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPanel.validate(values[OMSORG_FORM_NAME_PREFIX], values.rettigheter, values.foedselsDato),
      ...PermisjonPanel.validate(values),
      [ANNEN_FORELDER_FORM_NAME_PREFIX]: AnnenForelderPanel.validate(sokerPersonnummer, values[ANNEN_FORELDER_FORM_NAME_PREFIX]),
    });
  }
  if (soknadData.getFamilieHendelseType() === familieHendelseType.ADOPSJON) {
    return (values: any) => ({
      ...AndreYtelserPanel.validate(values, andreYtelser),
      ...InntektsgivendeArbeidPanel.validate(values),
      ...FrilansPanel.validate(values),
      ...OppholdINorgePanel.validate(values),
      [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPanel.validate(values[OMSORG_FORM_NAME_PREFIX], values.rettigheter, values.foedselsDato),
      ...PermisjonPanel.validate(values),
      [ANNEN_FORELDER_FORM_NAME_PREFIX]: AnnenForelderPanel.validate(sokerPersonnummer, values[ANNEN_FORELDER_FORM_NAME_PREFIX]),
    });
  }
  return null;
};

const transformRootValues = (state: any, registeredFieldNames: any) => {
  const values = formValueSelector(FORELDREPENGER_FORM_NAME)(state, ...registeredFieldNames);
  if (values.rettigheter === rettighet.IKKE_RELEVANT) {
    return omit(values, 'rettigheter');
  }
  return values;
};

const buildInitialValues = createSelector([(state: any, ownProps: any) => ownProps], (ownProps) => ({
  ...FrilansPanel.buildInitialValues(),
  ...AndreYtelserPanel.buildInitialValues(ownProps.andreYtelser),
  ...InntektsgivendeArbeidPanel.initialValues,
  [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPanel.initialValues,
  ...OppholdINorgePanel.initialValues,
  ...PermisjonPanel.initialValues,
}));

const mapStateToPropsFactory = (initialState: any, ownProps: any) => {
  const sokerPersonnummer = ownProps.fagsakPerson.personnummer;
  const andreYtelserObject = { andreYtelser: ownProps.alleKodeverk[kodeverkTyper.ARBEID_TYPE] };
  const validate = getValidation(ownProps.soknadData, andreYtelserObject.andreYtelser, sokerPersonnummer);
  return (state: any) => {
    const registeredFields = getRegisteredFields(FORELDREPENGER_FORM_NAME)(state);
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    const registeredFieldNames = Object.values(registeredFields).map((rf) => rf.name);

    const valuesForRegisteredFieldsOnly = registeredFieldNames.length
      ? {
        ...transformRootValues(state, registeredFieldNames),
        [ANDRE_YTELSER_FORM_NAME_PREFIX]: AndreYtelserPanel
          .transformValues(formValueSelector(FORELDREPENGER_FORM_NAME)(state, ...registeredFieldNames), andreYtelserObject.andreYtelser),
        [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: PermisjonPanel
          .transformValues(formValueSelector(FORELDREPENGER_FORM_NAME)(state, ...registeredFieldNames)),
      }
      : {};
    const sokerValue = valuesForRegisteredFieldsOnly.annenForelder;
    const sokerHarAleneomsorg = sokerValue ? sokerValue.sokerHarAleneomsorg : undefined;

    let annenForelderInformertRequired = true;
    if (sokerValue && (sokerHarAleneomsorg || sokerValue.denAndreForelderenHarRettPaForeldrepenger === false)) {
      annenForelderInformertRequired = false;
    }
    return {
      initialValues: buildInitialValues(state, andreYtelserObject),
      valuesForRegisteredFieldsOnly,
      annenForelderInformertRequired,
      sokerHarAleneomsorg,
      validate,
    };
  };
};

// @ts-expect-error ts-migrate(2345) FIXME: Type 'null' is not assignable to type '((values: {... Remove this comment to see the full error message
export default connect(mapStateToPropsFactory)(reduxForm({
  form: FORELDREPENGER_FORM_NAME,
// @ts-expect-error ts-migrate(2345) FIXME: Type '{ readOnly: boolean; }' has no properties in... Remove this comment to see the full error message
})(ForeldrepengerForm));
