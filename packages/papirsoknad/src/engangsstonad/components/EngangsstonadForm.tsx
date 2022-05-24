import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';
import { AlleKodeverk } from '@navikt/ft-types';

import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import { SoknadData, MottattDatoPapirsoknadIndex, LagreSoknadPapirsoknadIndex } from '@fpsak-frontend/papirsoknad-ui-komponenter';

import RegistreringAdopsjonOgOmsorgGrid, { FormValues as FormValuesAdopsjon } from './RegistreringAdopsjonOgOmsorgGrid';
import RegistreringFodselGrid, { FormValues as FormValuesFodsel } from './RegistreringFodselGrid';

export const ENGANGSSTONAD_FORM_NAME = 'EngangsstonadForm';

type FormValues = FormValuesFodsel | FormValuesAdopsjon | Record<string, never>;

const buildInitialValues = (erFødsel: boolean, erAdopsjon: boolean): FormValues => {
  if (erFødsel) {
    return RegistreringFodselGrid.buildInitialValues();
  }
  if (erAdopsjon) {
    return RegistreringAdopsjonOgOmsorgGrid.buildInitialValues();
  }
  return {};
};

const transformValues = (values: FormValues, erFødsel: boolean, erAdopsjon: boolean) => ({
  ...values,
  ...(erFødsel ? RegistreringFodselGrid.transformValues(values) : {}),
  ...(erAdopsjon ? RegistreringAdopsjonOgOmsorgGrid.transformValues(values) : {}),
});

interface OwnProps {
  readOnly: boolean;
  soknadData: SoknadData;
  fagsakPersonnummer: string;
  alleKodeverk: AlleKodeverk;
  onSubmitUfullstendigsoknad: () => Promise<any>;
  onSubmit: (values: any) => Promise<any>;
}

const EngangsstonadForm: FunctionComponent<OwnProps> = ({
  readOnly,
  soknadData,
  alleKodeverk,
  onSubmitUfullstendigsoknad,
  onSubmit,
}) => {
  const erFødsel = soknadData.getFamilieHendelseType() === familieHendelseType.FODSEL;
  const erAdopsjon = soknadData.getFamilieHendelseType() === familieHendelseType.ADOPSJON;

  const formMethods = useForm<FormValues>({
    defaultValues: buildInitialValues(erFødsel, erAdopsjon),
  });

  return (
    <Form formMethods={formMethods} onSubmit={(values: FormValues) => onSubmit(transformValues(values, erFødsel, erAdopsjon))}>
      <MottattDatoPapirsoknadIndex readOnly={readOnly} />
      {erFødsel && (
        <RegistreringFodselGrid
          soknadData={soknadData}
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
        />
      )}
      {erAdopsjon && (
        <RegistreringAdopsjonOgOmsorgGrid
          soknadData={soknadData}
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
        />
      )}
      <LagreSoknadPapirsoknadIndex
        readOnly={readOnly}
        submitting={formMethods.formState.isSubmitting}
        onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
      />
    </Form>
  );
};

/* const sokerPersonnummer = ownProps.fagsakPersonnummer;
const validate = getValidation(ownProps.soknadData, sokerPersonnummer);

const getValidation = (soknadData: SoknadData, sokerPersonnummer: string): any => {
  if (soknadData.getFamilieHendelseType() === familieHendelseType.FODSEL) {
    return (values: FormValuesFodsel) => RegistreringFodselGrid.validate(values, sokerPersonnummer, soknadData.familieHendelseType);
  }
  if (soknadData.getFamilieHendelseType() === familieHendelseType.ADOPSJON) {
    return (values: FormValuesAdopsjon) => RegistreringAdopsjonOgOmsorgGrid.validate(values, sokerPersonnummer, soknadData.familieHendelseType);
  }
  return null;
}; */

export default EngangsstonadForm;
