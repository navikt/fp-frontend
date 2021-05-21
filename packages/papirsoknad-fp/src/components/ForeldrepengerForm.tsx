import React from 'react';
import {
  FormSection, formValueSelector, InjectedFormProps, reduxForm,
} from 'redux-form';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import { omit } from '@fpsak-frontend/utils';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
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
import RettigheterPapirsoknadIndex, { rettighet } from '@fpsak-frontend/papirsoknad-panel-rettigheter';
import OmsorgOgAdopsjonPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-omsorg-og-adopsjon';
import AnnenForelderPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-annen-forelder';
import FodselPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-fodsel';

import PermisjonRettigheterPanel from './permisjon/PermisjonRettigheterPanel';
import DekningsgradPanel from './dekningsgrad/DekningsgradPanel';
import PermisjonPanel, { TIDSROM_PERMISJON_FORM_NAME_PREFIX, FormValues as FormValuesPermisjon } from './permisjon/PermisjonPanel';
import BekreftelsePanel from './bekreftelse/BekreftelsePanel';

const FORELDREPENGER_FORM_NAME = 'ForeldrepengerForm';
const ANNEN_FORELDER_FORM_NAME_PREFIX = 'annenForelder';
const OMSORG_FORM_NAME_PREFIX = 'omsorg';

interface PureOwnProps {
  onSubmitUfullstendigsoknad: () => Promise<any>;
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  fagsakPersonnummer: string;
}

type FormValues = {
  rettigheter?: string;
  foedselsDato?: string;
} & AndreYtelserFormValues & InntektFormValues & FrilansFormValues & OppholdFormValues & FormValuesPermisjon;

interface MappedOwnProps {
  valuesForRegisteredFieldsOnly: FormValues;
  annenForelderInformertRequired: boolean;
  sokerHarAleneomsorg: boolean;
  initialValues: FormValues;
  validate: (formValues: FormValues) => any;
}

/**
 * ForeldrepengerForm
 *
 * Redux-form-komponent for registrering av papirsøknad for foreldrepenger.
 */
export class ForeldrepengerForm extends React.Component<PureOwnProps & MappedOwnProps & InjectedFormProps> {
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
      readOnly,
      soknadData,
      onSubmitUfullstendigsoknad,
      error,
      submitFailed,
      annenForelderInformertRequired,
      sokerHarAleneomsorg,
      alleKodeverk,
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <MottattDatoPapirsoknadIndex readOnly={readOnly} />
        <OppholdINorgePapirsoknadIndex form={form} readOnly={readOnly} soknadData={soknadData} alleKodeverk={alleKodeverk} />
        <InntektsgivendeArbeidPapirsoknadIndex readOnly={readOnly} alleKodeverk={alleKodeverk} />
        <VirksomhetPapirsoknadIndex
          readOnly={readOnly}
          form={form}
          alleKodeverk={alleKodeverk}
        />
        <FrilansPapirsoknadIndex readOnly={readOnly} formName={FORELDREPENGER_FORM_NAME} />
        <AndreYtelserPapirsoknadIndex readOnly={readOnly} form={form} alleKodeverk={alleKodeverk} />
        <DekningsgradPanel readOnly={readOnly} />
        {soknadData.getFamilieHendelseType() === familieHendelseType.FODSEL
            && <FodselPapirsoknadIndex readOnly={readOnly} form={form} erForeldrepenger />}
        <RettigheterPapirsoknadIndex readOnly={readOnly} soknadData={soknadData} />
        <FormSection name={OMSORG_FORM_NAME_PREFIX}>
          <OmsorgOgAdopsjonPapirsoknadIndex
            form={form}
            namePrefix={OMSORG_FORM_NAME_PREFIX}
            readOnly={readOnly}
            familieHendelseType={soknadData.getFamilieHendelseType()}
            isForeldrepengerFagsak
          />
        </FormSection>
        <FormSection name={ANNEN_FORELDER_FORM_NAME_PREFIX}>
          <AnnenForelderPapirsoknadIndex
            soknadData={soknadData}
            namePrefix={ANNEN_FORELDER_FORM_NAME_PREFIX}
            form={form}
            readOnly={readOnly}
            permisjonRettigheterPanel={<PermisjonRettigheterPanel readOnly={readOnly} sokerHarAleneomsorg={sokerHarAleneomsorg} />}
            alleKodeverk={alleKodeverk}
          />
        </FormSection>
        <PermisjonPanel
          soknadData={soknadData}
          form={form}
          readOnly={readOnly}
          // @ts-ignore fiks
          error={error}
          submitFailed={submitFailed}
          sokerHarAleneomsorg={sokerHarAleneomsorg}
          alleKodeverk={alleKodeverk}
        />
        <BekreftelsePanel annenForelderInformertRequired={annenForelderInformertRequired} readOnly={readOnly} />
        <TilleggsopplysningerPapirsoknadIndex readOnly={readOnly} />
        <LagreSoknadPapirsoknadIndex readOnly={readOnly} onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad} form={form} submitting={submitting} />
      </form>
    );
  }
}

const getValidation = (soknadData: SoknadData, andreYtelser: KodeverkMedNavn[], sokerPersonnummer: string): any => {
  if (soknadData.getFamilieHendelseType() === familieHendelseType.FODSEL) {
    return (values: FormValues) => ({
      ...AndreYtelserPapirsoknadIndex.validate(values, andreYtelser),
      ...InntektsgivendeArbeidPapirsoknadIndex.validate(values),
      ...FrilansPapirsoknadIndex.validate(values),
      ...OppholdINorgePapirsoknadIndex.validate(values),
      ...FodselPapirsoknadIndex.validate(values),
      [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPapirsoknadIndex.validate(
        values[OMSORG_FORM_NAME_PREFIX], values.foedselsDato, soknadData.familieHendelseType,
      ),
      ...PermisjonPanel.validate(values),
      [ANNEN_FORELDER_FORM_NAME_PREFIX]: AnnenForelderPapirsoknadIndex.validate(sokerPersonnummer, values[ANNEN_FORELDER_FORM_NAME_PREFIX]),
    });
  }
  if (soknadData.getFamilieHendelseType() === familieHendelseType.ADOPSJON) {
    return (values: FormValues) => ({
      ...AndreYtelserPapirsoknadIndex.validate(values, andreYtelser),
      ...InntektsgivendeArbeidPapirsoknadIndex.validate(values),
      ...FrilansPapirsoknadIndex.validate(values),
      ...OppholdINorgePapirsoknadIndex.validate(values),
      [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPapirsoknadIndex.validate(
        values[OMSORG_FORM_NAME_PREFIX], values.foedselsDato, soknadData.familieHendelseType,
      ),
      ...PermisjonPanel.validate(values),
      [ANNEN_FORELDER_FORM_NAME_PREFIX]: AnnenForelderPapirsoknadIndex.validate(sokerPersonnummer, values[ANNEN_FORELDER_FORM_NAME_PREFIX]),
    });
  }
  return null;
};

const transformRootValues = (state: any, registeredFieldNames: string[]): any => {
  const values = formValueSelector(FORELDREPENGER_FORM_NAME)(state, ...registeredFieldNames);
  if (values.rettigheter === rettighet.IKKE_RELEVANT) {
    return omit(values, 'rettigheter');
  }
  return values;
};

const buildInitialValues = createSelector([(ownProps: { andreYtelser: KodeverkMedNavn[] }) => ownProps], (ownProps): FormValues => ({
  ...FrilansPapirsoknadIndex.buildInitialValues(),
  ...AndreYtelserPapirsoknadIndex.buildInitialValues(ownProps.andreYtelser),
  ...InntektsgivendeArbeidPapirsoknadIndex.buildInitialValues(),
  [OMSORG_FORM_NAME_PREFIX]: {},
  ...OppholdINorgePapirsoknadIndex.buildInitialValues(),
  ...PermisjonPanel.buildInitialValues(),
}));

const mapStateToPropsFactory = (_initialState, ownProps: PureOwnProps) => {
  const sokerPersonnummer = ownProps.fagsakPersonnummer;
  const andreYtelserObject = { andreYtelser: ownProps.alleKodeverk[kodeverkTyper.ARBEID_TYPE] };
  const validate = getValidation(ownProps.soknadData, andreYtelserObject.andreYtelser, sokerPersonnummer);
  return (state: any): MappedOwnProps => {
    const registeredFields = getRegisteredFields(FORELDREPENGER_FORM_NAME)(state);
    // @ts-ignore Fiks
    const registeredFieldNames = Object.values(registeredFields).map((rf) => rf.name);

    const valuesForRegisteredFieldsOnly = registeredFieldNames.length
      ? {
        ...transformRootValues(state, registeredFieldNames),
        [ANDRE_YTELSER_FORM_NAME_PREFIX]: AndreYtelserPapirsoknadIndex
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
      initialValues: buildInitialValues(andreYtelserObject),
      valuesForRegisteredFieldsOnly,
      annenForelderInformertRequired,
      sokerHarAleneomsorg,
      validate,
    };
  };
};

export default connect(mapStateToPropsFactory)(reduxForm({
  form: FORELDREPENGER_FORM_NAME,
})(ForeldrepengerForm));
