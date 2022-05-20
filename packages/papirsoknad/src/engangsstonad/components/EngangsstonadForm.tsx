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

const buildInitialValues = (soknadData: SoknadData): FormValues => {
  if (soknadData.getFamilieHendelseType() === familieHendelseType.FODSEL) {
    return { ...RegistreringFodselGrid.buildInitialValues() };
  }
  if (soknadData.getFamilieHendelseType() === familieHendelseType.ADOPSJON) {
    return { ...RegistreringAdopsjonOgOmsorgGrid.buildInitialValues() };
  }
  return {};
};

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
  const formMethods = useForm<FormValues>({
    defaultValues: buildInitialValues(soknadData),
  });

  return (
    <Form formMethods={formMethods} onSubmit={(values: FormValues) => onSubmit(values)}>
      <MottattDatoPapirsoknadIndex readOnly={readOnly} />
      {soknadData.getFamilieHendelseType() === familieHendelseType.FODSEL && (
        <RegistreringFodselGrid
          soknadData={soknadData}
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
        />
      )}
      {(soknadData.getFamilieHendelseType() === familieHendelseType.ADOPSJON) && (
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

/*const sokerPersonnummer = ownProps.fagsakPersonnummer;
const validate = getValidation(ownProps.soknadData, sokerPersonnummer);

const getValidation = (soknadData: SoknadData, sokerPersonnummer: string): any => {
  if (soknadData.getFamilieHendelseType() === familieHendelseType.FODSEL) {
    return (values: FormValuesFodsel) => RegistreringFodselGrid.validate(values, sokerPersonnummer, soknadData.familieHendelseType);
  }
  if (soknadData.getFamilieHendelseType() === familieHendelseType.ADOPSJON) {
    return (values: FormValuesAdopsjon) => RegistreringAdopsjonOgOmsorgGrid.validate(values, sokerPersonnummer, soknadData.familieHendelseType);
  }
  return null;
};*/

export default EngangsstonadForm;
